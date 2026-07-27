// Генерирует простую HTML-страницу со списком всех 50 историй и плеерами для каждой сцены,
// чтобы прослушать новую озвучку RU прямо в браузере телефона по прямой ссылке (без подключения к игре).
const fs = require('fs');
const path = require('path');

const { STORIES, CHARACTERS } = require('../content-ru.js');

const storyKeys = Object.keys(STORIES);

let html = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Проба озвучки RU</title>
<style>
  body { font-family: system-ui, sans-serif; background: #10171c; color: #e5ece8; margin: 0; padding: 16px; }
  h1 { font-size: 1.3rem; }
  h2 { font-size: 1.1rem; margin-top: 2rem; border-bottom: 1px solid #2c3d45; padding-bottom: 4px; }
  .theme { color: #8fa89d; font-size: 0.85rem; margin-bottom: 8px; }
  .scene { margin: 6px 0; }
  .scene-label { font-size: 0.8rem; color: #6d827a; }
  audio { width: 100%; height: 32px; }
</style>
</head>
<body>
<h1>Проба озвучки — все 50 историй (RU, Wavenet)</h1>
<p class="theme">Это временная страница только для прослушивания, не подключена к самой игре.</p>
`;

for (const key of storyKeys) {
  const char = CHARACTERS.find(c => c.key === key);
  const story = STORIES[key];
  html += `<h2>${char.name} (${char.gender === 'ж' ? 'жен.' : 'муж.'})</h2>\n`;
  html += `<div class="theme">${char.theme || ''}</div>\n`;
  for (const sceneKey of Object.keys(story.scenes)) {
    html += `<div class="scene"><div class="scene-label">${sceneKey}</div><audio controls preload="none" src="ru/${key}/${sceneKey}.mp3"></audio></div>\n`;
  }
}

html += `</body></html>`;

fs.writeFileSync(path.join(__dirname, '..', 'tts-audio', 'index.html'), html);
console.log('Written tts-audio/index.html,', storyKeys.length, 'историй');
