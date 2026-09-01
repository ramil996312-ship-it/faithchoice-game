// Озвучка блока "стих и молитва" в конце каждой из 50 живых историй — EN/ES/ZH/HI (RU уже сделан,
// см. generate_closing_ru.js). Голоса и языковые коды — те же, что и у остального рассказа на каждом
// языке (см. LANGS в generate_full_all.js), для непрерывности звучания.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const LANGS = {
  en: { code: 'en-US', female: 'en-US-Wavenet-C', male: 'en-US-Wavenet-D' },
  es: { code: 'es-US', female: 'es-US-Wavenet-A', male: 'es-US-Wavenet-B' },
  zh: { code: 'cmn-CN', female: 'cmn-CN-Wavenet-A', male: 'cmn-CN-Wavenet-B' },
  hi: { code: 'hi-IN', female: 'hi-IN-Wavenet-A', male: 'hi-IN-Wavenet-B' },
};
const RATE = 0.92;
const LEAD_PAUSE = '400ms';

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// closingVerse хранит библейскую ссылку в скобках в конце текста — озвучке эти цифры не нужны
// (см. generate_closing_ru.js), остаются только в письменном виде на экране. ZH использует
// полноширинные скобки （...）, а не ASCII (...), поэтому матчим оба варианта.
function stripCitation(text) {
  return text.replace(/\s*[（(][^）)]*[）)]\s*$/, '');
}

async function synthesize(text, languageCode, voiceName, attempt = 1) {
  const ssml = `<speak><break time="${LEAD_PAUSE}"/>${escapeXml(text)}</speak>`;
  try {
    const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { ssml },
        voice: { languageCode, name: voiceName },
        audioConfig: { audioEncoding: 'MP3', speakingRate: RATE },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    const data = await res.json();
    return Buffer.from(data.audioContent, 'base64');
  } catch (err) {
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 1500 * attempt));
      return synthesize(text, languageCode, voiceName, attempt + 1);
    }
    throw err;
  }
}

async function main() {
  const onlyLangs = process.argv.slice(2).filter(a => LANGS[a]);
  const langs = onlyLangs.length ? onlyLangs : Object.keys(LANGS);
  let totalChars = 0, done = 0, failed = [];

  for (const lang of langs) {
    const cfg = LANGS[lang];
    const { CHARACTERS } = require(`../content-${lang}.js`);
    const chars = CHARACTERS.filter(c => c.closingVerse || c.closingPrayer);
    const outRoot = path.join(__dirname, '..', 'audio', lang);
    console.log(`\n=== ${lang} (${cfg.code}) — ${chars.length} персонажей ===`);

    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      const voice = c.gender === 'ж' ? cfg.female : cfg.male;
      const outDir = path.join(outRoot, c.key);
      fs.mkdirSync(outDir, { recursive: true });
      process.stdout.write(`[${i + 1}/${chars.length}] ${c.key}: `);

      const items = [
        ['closingverse', c.closingVerse ? stripCitation(c.closingVerse) : null],
        ['closingprayer', c.closingPrayer || null],
      ].filter(([, text]) => !!text);

      for (const [suffix, text] of items) {
        totalChars += text.length;
        try {
          const mp3 = await synthesize(text, cfg.code, voice);
          fs.writeFileSync(path.join(outDir, `${c.key}_${suffix}.mp3`), mp3);
          process.stdout.write('.');
        } catch (err) {
          process.stdout.write('X');
          failed.push(`${lang}/${c.key}_${suffix}: ${err.message}`);
        }
      }
      console.log(' done');
    }
  }

  console.log(`\nВсего символов озвучено: ${totalChars}`);
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
