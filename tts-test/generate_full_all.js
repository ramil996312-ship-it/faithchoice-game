// Полная генерация озвучки для остальных 4 языков (en/es/zh/hi), утверждённые голоса Wavenet, rate 0.92.
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

async function synthesize(text, languageCode, voiceName, attempt = 1) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode, name: voiceName },
      audioConfig: { audioEncoding: 'MP3', speakingRate: RATE },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 1500 * attempt));
      return synthesize(text, languageCode, voiceName, attempt + 1);
    }
    throw new Error(`TTS API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return Buffer.from(data.audioContent, 'base64');
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
        const outFile = path.join(outDir, `${sceneKey}.mp3`);
        if (fs.existsSync(outFile)) { process.stdout.write('s'); continue; }
        const text = story.scenes[sceneKey].text;
        grandChars += text.length;
        try {
          const mp3 = await synthesize(text, cfg.code, voice);
          fs.writeFileSync(outFile, mp3);
          process.stdout.write('.');
        } catch (err) {
          process.stdout.write('X');
          failed.push(`${lang}/${key}/${sceneKey}: ${err.message}`);
        }
      }
      console.log(' done');
    }
  }

  console.log(`\nВсего символов озвучено (новых): ${grandChars}`);
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
