// Точечная перегенерация bridgeA у виктора/павла/глеба на всех 5 языках —
// в текст добавлены размышления о Боге, чтобы довести короткие истории до ~3 минут.
const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', '.tts-key.txt');
const apiKey = fs.readFileSync(KEY_PATH, 'utf8').replace(/^﻿/, '').trim();

const LANGS = {
  ru: { code: 'ru-RU', male: 'ru-RU-Wavenet-D' },
  en: { code: 'en-US', male: 'en-US-Wavenet-D' },
  es: { code: 'es-US', male: 'es-US-Wavenet-B' },
  zh: { code: 'cmn-CN', male: 'cmn-CN-Wavenet-B' },
  hi: { code: 'hi-IN', male: 'hi-IN-Wavenet-B' },
};
const RATE = 0.92;
const KEYS = ['viktor', 'pavel', 'gleb'];
const SCENE_SUFFIX = 'bridgeA';

async function synthesize(text, languageCode, voiceName) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode, name: voiceName },
      audioConfig: { audioEncoding: 'MP3', speakingRate: RATE },
    }),
  });
  if (!res.ok) throw new Error(`TTS API error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return Buffer.from(data.audioContent, 'base64');
}

async function main() {
  for (const lang of Object.keys(LANGS)) {
    const cfg = LANGS[lang];
    const { STORIES } = require(`../content-${lang}.js`);
    for (const key of KEYS) {
      const sceneKey = `${key}_${SCENE_SUFFIX}`;
      const text = STORIES[key].scenes[sceneKey].text;
      const mp3 = await synthesize(text, cfg.code, cfg.male);
      const outDir = path.join(__dirname, '..', 'tts-audio', lang, key);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, `${sceneKey}.mp3`), mp3);
      console.log(`${lang}/${key}/${sceneKey}.mp3 обновлён (${text.length} симв.)`);
    }
  }
}

main().catch(err => { console.error('FAILED:', err.message); process.exitCode = 1; });
