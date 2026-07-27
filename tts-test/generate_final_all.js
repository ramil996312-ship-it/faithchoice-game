// ФИНАЛЬНАЯ полная перегенерация всех 50 историй на всех 5 языках, с исправлением бага
// "проглатывается первое слово" — через SSML с паузой 400ms перед началом речи.
// Перезаписывает ВСЕ существующие файлы (не пропускает уже готовые), в отличие от
// предыдущих generate_full_ru.js / generate_full_all.js.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const LANGS = {
  ru: { code: 'ru-RU', female: 'ru-RU-Wavenet-C', male: 'ru-RU-Wavenet-D' },
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
  let grandChars = 0, failed = [];
  for (const lang of Object.keys(LANGS)) {
    const cfg = LANGS[lang];
    const { STORIES, CHARACTERS } = require(`../content-${lang}.js`);
    const storyKeys = Object.keys(STORIES);
    const outRoot = path.join(__dirname, '..', 'tts-audio', lang);

    console.log(`\n=== ${lang} (${cfg.code}) ===`);
    for (let i = 0; i < storyKeys.length; i++) {
      const key = storyKeys[i];
      const char = CHARACTERS.find(c => c.key === key);
      if (!char) { console.log(`SKIP ${key}: character not found`); continue; }
      const voice = char.gender === 'ж' ? cfg.female : cfg.male;
      const story = STORIES[key];
      const outDir = path.join(outRoot, key);
      fs.mkdirSync(outDir, { recursive: true });

      const sceneKeys = Object.keys(story.scenes);
      process.stdout.write(`[${i+1}/${storyKeys.length}] ${key}: `);
      for (const sceneKey of sceneKeys) {
        const text = story.scenes[sceneKey].text;
        grandChars += text.length;
        try {
          const mp3 = await synthesize(text, cfg.code, voice);
          fs.writeFileSync(path.join(outDir, `${sceneKey}.mp3`), mp3);
          process.stdout.write('.');
        } catch (err) {
          process.stdout.write('X');
          failed.push(`${lang}/${key}/${sceneKey}: ${err.message}`);
        }
      }
      console.log(' done');
    }
  }

  console.log(`\nВсего символов озвучено: ${grandChars}`);
  if (failed.length) {
    console.log(`\nОШИБКИ (${failed.length}):`);
    failed.forEach(f => console.log(' -', f));
    process.exitCode = 1;
  } else {
    console.log('Все сцены успешно сгенерированы.');
  }
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exitCode = 1;
});
