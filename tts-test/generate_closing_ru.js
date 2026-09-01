// Озвучка нового блока "стих и молитва" в конце каждой из 50 живых историй (только RU пока).
// Два файла на персонажа: <key>_closingverse.mp3 и <key>_closingprayer.mp3, тот же голос
// (Wavenet C/D по полу), что и весь остальной рассказ — для непрерывности звучания.
// Пишет в audio/ru/<key>/ — так же, как generate_reserve_ru.js, это путь, который резолвит
// resolveAudioSrc() в app.js (AUDIO_BASE + lang + storyKey + sceneId + '.mp3').
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const LANG_CODE = 'ru-RU';
const VOICE_FEMALE = 'ru-RU-Wavenet-C';
const VOICE_MALE = 'ru-RU-Wavenet-D';
const RATE = 0.92;
const LEAD_PAUSE = '400ms';

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// closingVerse хранит библейскую ссылку в скобках в конце текста, например
// "«...» (Пс. 26:10)" — озвучке эти цифры не нужны, они остаются только в письменном виде
// на экране (character.closingVerse в app.js не меняется, показывается полностью).
function stripCitation(text) {
  return text.replace(/\s*\([^)]*\)\s*$/, '');
}

async function synthesize(text, voiceName, attempt = 1) {
  const ssml = `<speak><break time="${LEAD_PAUSE}"/>${escapeXml(text)}</speak>`;
  try {
    const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { ssml },
        voice: { languageCode: LANG_CODE, name: voiceName },
        audioConfig: { audioEncoding: 'MP3', speakingRate: RATE },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    const data = await res.json();
    return Buffer.from(data.audioContent, 'base64');
  } catch (err) {
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 1500 * attempt));
      return synthesize(text, voiceName, attempt + 1);
    }
    throw err;
  }
}

async function main() {
  const { CHARACTERS } = require('../content-ru.js');
  const onlyKeys = process.argv.slice(2);
  const chars = (onlyKeys.length ? CHARACTERS.filter(c => onlyKeys.includes(c.key)) : CHARACTERS)
    .filter(c => c.closingVerse || c.closingPrayer);
  const outRoot = path.join(__dirname, '..', 'audio', 'ru');
  let totalChars = 0, done = 0, failed = [];

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    const voice = c.gender === 'ж' ? VOICE_FEMALE : VOICE_MALE;
    const outDir = path.join(outRoot, c.key);
    fs.mkdirSync(outDir, { recursive: true });
    process.stdout.write(`[${i + 1}/${chars.length}] ${c.key}: `);

    const items = [
      ['closingverse', c.closingVerse],
      ['closingprayer', c.closingPrayer],
    ].filter(([, text]) => !!text);

    for (const [suffix, text] of items) {
      const spokenText = suffix === 'closingverse' ? stripCitation(text) : text;
      totalChars += spokenText.length;
      try {
        const mp3 = await synthesize(spokenText, voice);
        fs.writeFileSync(path.join(outDir, `${c.key}_${suffix}.mp3`), mp3);
        process.stdout.write('.');
      } catch (err) {
        process.stdout.write('X');
        failed.push(`${c.key}_${suffix}: ${err.message}`);
      }
      done += 1;
    }
    console.log(' done');
  }

  console.log(`\nВсего файлов: ${done}, символов озвучено: ${totalChars}`);
  if (failed.length) {
    console.log(`\nОШИБКИ (${failed.length}):`);
    failed.forEach(f => console.log(' -', f));
    process.exitCode = 1;
  } else {
    console.log('Все файлы успешно сгенерированы.');
  }
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exitCode = 1;
});
