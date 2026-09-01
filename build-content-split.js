// Генерирует из каждого content-<lang>.js (источник правды, редактируется вручную/скиллом
// faithchoice-story-writing — не трогать формат) два производных файла:
//   content-<lang>-meta.js    — CHARACTERS + STORY_KEYS (лёгкое, для меню), грузится синхронно
//   content-<lang>-stories.js — STORIES (тяжёлые тексты сцен), догружается в фоне
// Запускать заново при ЛЮБОЙ правке content-<lang>.js, перед деплоем (см. faithchoice-deploy).
const fs = require('fs');
const path = require('path');

const LANGS = ['ru', 'en', 'es', 'zh', 'hi'];
const ROOT = __dirname;

for (const lang of LANGS) {
  const srcPath = path.join(ROOT, `content-${lang}.js`);
  delete require.cache[require.resolve(srcPath)];
  const { CHARACTERS, STORIES } = require(srcPath);
  const STORY_KEYS = Object.keys(STORIES);

  const metaJs = `// Автогенерировано build-content-split.js из content-${lang}.js — не редактировать руками.\n` +
    `(function () {\n  window.Content = window.Content || {};\n  window.Content.${lang} = window.Content.${lang} || {};\n` +
    `  window.Content.${lang}.CHARACTERS = ${JSON.stringify(CHARACTERS)};\n` +
    `  window.Content.${lang}.STORY_KEYS = ${JSON.stringify(STORY_KEYS)};\n})();\n`;
  fs.writeFileSync(path.join(ROOT, `content-${lang}-meta.js`), metaJs);

  const storiesJs = `// Автогенерировано build-content-split.js из content-${lang}.js — не редактировать руками.\n` +
    `(function () {\n  window.Content = window.Content || {};\n  window.Content.${lang} = window.Content.${lang} || {};\n` +
    `  window.Content.${lang}.STORIES = ${JSON.stringify(STORIES)};\n})();\n`;
  fs.writeFileSync(path.join(ROOT, `content-${lang}-stories.js`), storiesJs);

  const metaSize = Buffer.byteLength(metaJs);
  const storiesSize = Buffer.byteLength(storiesJs);
  console.log(`${lang}: meta ${(metaSize / 1024).toFixed(1)}КБ, stories ${(storiesSize / 1024).toFixed(1)}КБ`);
}
