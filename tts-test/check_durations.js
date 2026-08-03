// Проверяет длительность полного прохождения (светлый и тёмный путь) каждой истории
// на каждом языке, суммируя длительности mp3 по сценам. Запускать на сервере,
// где рядом лежат content-<lang>.js, engine.js и папка audio/<lang>/<key>/*.mp3.
'use strict';
const fs = require('fs');
const path = require('path');
const { Story } = require('./engine.js');
const { mp3DurationFile } = require('./mp3_duration.js');

const LANGS = ['ru', 'en', 'es', 'zh', 'hi'];
const AUDIO_ROOT = process.argv[2] || './audio';
const TARGET_SECONDS = 180;

function walkPath(data, pickIndex) {
  const story = new Story(data);
  let scene = story.current();
  const ids = [];
  let steps = 0;
  while (steps < 100) {
    ids.push(story.currentId);
    if (scene.choices && scene.choices.length) {
      const idx = pickIndex(scene.choices.length);
      scene = story.choose(idx);
    } else if (scene.next != null) {
      scene = story.advance();
    } else break;
    steps++;
  }
  return ids;
}

const results = [];
for (const lang of LANGS) {
  const content = require(path.resolve(`./content-${lang}.js`));
  const { STORIES } = content;
  for (const key of Object.keys(STORIES)) {
    const data = STORIES[key];
    const lightIds = walkPath(data, () => 0);
    const darkIds = walkPath(data, (n) => n - 1);

    const durationFor = (ids) => {
      let total = 0, missing = [];
      const seen = new Set();
      for (const id of ids) {
        if (seen.has(id)) continue; // bridgeA/B convergence: не считать общий хвост дважды
        seen.add(id);
        const file = path.join(AUDIO_ROOT, lang, key, `${id}.mp3`);
        if (!fs.existsSync(file)) { missing.push(id); continue; }
        const d = mp3DurationFile(file);
        if (d) total += d;
      }
      return { total, missing };
    };

    const light = durationFor(lightIds);
    const dark = durationFor(darkIds);
    results.push({ lang, key, light: light.total, dark: dark.total, missing: [...new Set([...light.missing, ...dark.missing])] });
  }
}

for (const r of results) {
  const flag = (r.light < TARGET_SECONDS || r.dark < TARGET_SECONDS) ? '  <-- КОРОТКО' : '';
  const missNote = r.missing.length ? `  [нет файлов: ${r.missing.join(',')}]` : '';
  console.log(`${r.lang}\t${r.key}\tсвет=${r.light.toFixed(0)}с\tтьма=${r.dark.toFixed(0)}с${flag}${missNote}`);
}

const short = results.filter(r => r.light < TARGET_SECONDS || r.dark < TARGET_SECONDS);
console.log(`\nВсего историй: ${results.length}. Короче ${TARGET_SECONDS}с (3 мин) хотя бы на одном пути: ${short.length}.`);
