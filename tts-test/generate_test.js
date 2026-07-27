// Разовый тестовый скрипт: генерирует mp3 для 2 историй (Соня — жен., Тимур — муж.) на русском,
// чтобы прослушать качество голосов Neural2 перед полной генерацией всех 250 комбинаций.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const { STORIES, CHARACTERS } = require('../content-ru.js');

const VOICES = {
  'ж': 'ru-RU-Chirp3-HD-Aoede',
  'м': 'ru-RU-Chirp3-HD-Charon',
};

const TEST_STORIES = ['sonya', 'timur'];

async function synthesize(text, voiceName) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: 'ru-RU', name: voiceName },
      audioConfig: { audioEncoding: 'MP3' },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`TTS API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return Buffer.from(data.audioContent, 'base64');
}

async function main() {
  let totalChars = 0;
  for (const key of TEST_STORIES) {
    const char = CHARACTERS.find(c => c.key === key);
    const voice = VOICES[char.gender];
    const story = STORIES[key];
    const outDir = path.join(__dirname, 'ru', key);
    fs.mkdirSync(outDir, { recursive: true });

    const sceneKeys = Object.keys(story.scenes);
    console.log(`${key} (${char.gender === 'ж' ? 'female' : 'male'}, voice=${voice}): ${sceneKeys.length} сцен`);

    for (const sceneKey of sceneKeys) {
      const text = story.scenes[sceneKey].text;
      totalChars += text.length;
      const mp3 = await synthesize(text, voice);
      fs.writeFileSync(path.join(outDir, `${sceneKey}.mp3`), mp3);
      process.stdout.write('.');
    }
    console.log(' done');
  }
  console.log(`\nВсего символов озвучено: ${totalChars}`);
}

main().catch(err => {
  console.error('FAILED:', err.message);
  process.exit(1);
});
