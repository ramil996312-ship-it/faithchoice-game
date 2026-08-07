// Озвучка резервных 50 историй (пока только RU) — для reserve-preview.html, НЕ для живой игры.
// Пишет в <project-root>/audio/ru/<key>/<sceneKey>.mp3 (не в tts-audio/) — именно этот относительный
// путь ('audio') ищет app.js в браузере (AUDIO_BASE = 'audio' когда window.Capacitor отсутствует),
// когда reserve-preview.html открыт напрямую как локальный файл. Не пропускает уже готовые файлы —
// это первый прогон, но так проще для повторных запусков после правок текста.
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
  const { STORIES, CHARACTERS } = require('../content-reserve-ru.js');
  // Необязательные аргументы командной строки — конкретные ключи персонажей, чтобы озвучить только их
  // (например, после точечной правки текста), а не платить за все 50 историй заново каждый раз.
  const onlyKeys = process.argv.slice(2);
  const storyKeys = onlyKeys.length ? onlyKeys.filter(k => STORIES[k]) : Object.keys(STORIES);
  const outRoot = path.join(__dirname, '..', 'audio', 'ru');
  let done = 0, chars = 0, failed = [];
  const total = storyKeys.reduce((sum, k) => sum + Object.keys(STORIES[k].scenes).length, 0);

  for (let i = 0; i < storyKeys.length; i++) {
    const key = storyKeys[i];
    const char = CHARACTERS.find(c => c.key === key);
    if (!char) { console.log(`SKIP ${key}: character not found`); continue; }
    const voice = char.gender === 'ж' ? VOICE_FEMALE : VOICE_MALE;
    const story = STORIES[key];
    const outDir = path.join(outRoot, key);
    fs.mkdirSync(outDir, { recursive: true });

    const sceneKeys = Object.keys(story.scenes);
    process.stdout.write(`[${i + 1}/${storyKeys.length}] ${key}: `);
    for (const sceneKey of sceneKeys) {
      const text = story.scenes[sceneKey].text;
      chars += text.length;
      try {
        const mp3 = await synthesize(text, voice);
        fs.writeFileSync(path.join(outDir, `${sceneKey}.mp3`), mp3);
        process.stdout.write('.');
      } catch (err) {
        process.stdout.write('X');
        failed.push(`${key}/${sceneKey}: ${err.message}`);
      }
      done += 1;
    }
    console.log(` done (${done}/${total})`);
  }

  console.log(`\nВсего символов озвучено: ${chars}`);
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
