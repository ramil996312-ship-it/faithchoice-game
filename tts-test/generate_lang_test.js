// Проба голосов Wavenet для en/es/zh/hi (интро Сони и Тимура), после того как для RU
// был выбран Wavenet C/D на скорости 0.92x.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const LANGS = [
  { lang: 'en', code: 'en-US', female: 'en-US-Wavenet-C', male: 'en-US-Wavenet-D' },
  { lang: 'es', code: 'es-US', female: 'es-US-Wavenet-A', male: 'es-US-Wavenet-B' },
  { lang: 'zh', code: 'cmn-CN', female: 'cmn-CN-Wavenet-A', male: 'cmn-CN-Wavenet-B' },
  { lang: 'hi', code: 'hi-IN', female: 'hi-IN-Wavenet-A', male: 'hi-IN-Wavenet-B' },
];

const RATE = 0.92;

async function synthesize(text, languageCode, voiceName, speakingRate) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode, name: voiceName },
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

async function main() {
  const outDir = path.join(__dirname, 'compare2');
  fs.mkdirSync(outDir, { recursive: true });

  for (const l of LANGS) {
    const { STORIES } = require(`../content-${l.lang}.js`);
    const sonyaText = STORIES.sonya.scenes.sonya_intro.text;
    const timurText = STORIES.timur.scenes.timur_intro.text;

    const sMp3 = await synthesize(sonyaText, l.code, l.female, RATE);
    fs.writeFileSync(path.join(outDir, `${l.lang}_sonya.mp3`), sMp3);
    console.log(`${l.lang}_sonya.mp3 done`);

    const tMp3 = await synthesize(timurText, l.code, l.male, RATE);
    fs.writeFileSync(path.join(outDir, `${l.lang}_timur.mp3`), tMp3);
    console.log(`${l.lang}_timur.mp3 done`);
  }
}

main().catch(err => {
  console.error('FAILED:', err.message);
  process.exitCode = 1;
});
