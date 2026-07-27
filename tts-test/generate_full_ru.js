// Полная генерация озвучки всех 50 историй на русском (Wavenet C/D, rate 0.92),
// для прослушивания пользователем перед решением об остальных языках/установке на сайт.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const { STORIES, CHARACTERS } = require('../content-ru.js');

const VOICES = {
  'ж': 'ru-RU-Wavenet-C',
  'м': 'ru-RU-Wavenet-D',
};
const RATE = 0.92;
const OUT_ROOT = path.join(__dirname, '..', 'tts-audio', 'ru');

async function synthesize(text, voiceName, attempt = 1) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: 'ru-RU', name: voiceName },
      audioConfig: { audioEncoding: 'MP3', speakingRate: RATE },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 1500 * attempt));
      return synthesize(text, voiceName, attempt + 1);
    }
    throw new Error(`TTS API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return Buffer.from(data.audioContent, 'base64');
}

async function main() {
  const storyKeys = Object.keys(STORIES);
  let totalChars = 0, totalScenes = 0, failed = [];

  for (let i = 0; i < storyKeys.length; i++) {
    const key = storyKeys[i];
    const char = CHARACTERS.find(c => c.key === key);
    if (!char) { console.log(`SKIP ${key}: character not found`); continue; }
    const voice = VOICES[char.gender];
    const story = STORIES[key];
    const outDir = path.join(OUT_ROOT, key);
    fs.mkdirSync(outDir, { recursive: true });

    const sceneKeys = Object.keys(story.scenes);
    process.stdout.write(`[${i+1}/${storyKeys.length}] ${key} (${char.gender}): `);
    for (const sceneKey of sceneKeys) {
      const outFile = path.join(outDir, `${sceneKey}.mp3`);
      if (fs.existsSync(outFile)) { process.stdout.write('s'); continue; }
      const text = story.scenes[sceneKey].text;
      totalChars += text.length;
      totalScenes++;
      try {
        const mp3 = await synthesize(text, voice);
        fs.writeFileSync(outFile, mp3);
        process.stdout.write('.');
      } catch (err) {
        process.stdout.write('X');
        failed.push(`${key}/${sceneKey}: ${err.message}`);
      }
    }
    console.log(' done');
  }

  console.log(`\nВсего сцен обработано: ${totalScenes}, символов: ${totalChars}`);
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
