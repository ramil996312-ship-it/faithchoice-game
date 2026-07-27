// Точечная перегенерация только Али и Марата (все сцены) на всех 5 языках,
// с SSML-паузой в начале, после того как пользователь прослушал все 50 историй
// и подтвердил, что только эти двое требуют правок.
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
const STORY_KEYS = ['alya', 'marat'];

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function synthesize(text, languageCode, voiceName, attempt = 1) {
  const ssml = `<speak><break time="400ms"/>${escapeXml(text)}</speak>`;
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
  for (const lang of Object.keys(LANGS)) {
    const cfg = LANGS[lang];
    const { STORIES, CHARACTERS } = require(`../content-${lang}.js`);
    for (const key of STORY_KEYS) {
      const char = CHARACTERS.find(c => c.key === key);
      const voice = char.gender === 'ж' ? cfg.female : cfg.male;
      const story = STORIES[key];
      const outDir = path.join(__dirname, '..', 'tts-audio', lang, key);
      fs.mkdirSync(outDir, { recursive: true });

      for (const sceneKey of Object.keys(story.scenes)) {
        const text = story.scenes[sceneKey].text;
        const mp3 = await synthesize(text, cfg.code, voice);
        fs.writeFileSync(path.join(outDir, `${sceneKey}.mp3`), mp3);
        process.stdout.write('.');
      }
      console.log(` ${lang}/${key} done`);
    }
  }
}

main().catch(err => { console.error('FAILED:', err.message); process.exitCode = 1; });
