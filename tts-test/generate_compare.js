// Сравнение вариантов голоса/скорости на одной сцене каждого теста, после жалобы пользователя
// на слишком быструю речь и "путаницу тонов" у Chirp3-HD.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const { STORIES } = require('../content-ru.js');

async function synthesize(text, voiceName, speakingRate) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: 'ru-RU', name: voiceName },
      audioConfig: { audioEncoding: 'MP3', speakingRate },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`TTS API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return Buffer.from(data.audioContent, 'base64');
}

const VARIANTS = [
  { label: 'chirp-slow', female: 'ru-RU-Chirp3-HD-Aoede', male: 'ru-RU-Chirp3-HD-Charon', rate: 0.85 },
  { label: 'wavenet-slow', female: 'ru-RU-Wavenet-C', male: 'ru-RU-Wavenet-D', rate: 0.92 },
];

async function main() {
  const outDir = path.join(__dirname, 'compare');
  fs.mkdirSync(outDir, { recursive: true });

  const sonyaText = STORIES.sonya.scenes.sonya_intro.text;
  const timurText = STORIES.timur.scenes.timur_intro.text;

  for (const v of VARIANTS) {
    const sMp3 = await synthesize(sonyaText, v.female, v.rate);
    fs.writeFileSync(path.join(outDir, `sonya_${v.label}.mp3`), sMp3);
    console.log(`sonya_${v.label}.mp3 done`);

    const tMp3 = await synthesize(timurText, v.male, v.rate);
    fs.writeFileSync(path.join(outDir, `timur_${v.label}.mp3`), tMp3);
    console.log(`timur_${v.label}.mp3 done`);
  }
}

main().catch(err => {
  console.error('FAILED:', err.message);
  process.exitCode = 1;
});
