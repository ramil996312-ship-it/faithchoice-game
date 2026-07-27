const key = process.argv[2];
const lang = process.argv[3];
const { STORIES } = require(`./content-${lang}.js`);
const story = STORIES[key];
if (!story) { console.log('NOT FOUND', key, lang); process.exit(1); }
for (const sceneKey of Object.keys(story.scenes)) {
  const s = story.scenes[sceneKey];
  console.log(`--- ${sceneKey} (${s.text.length} chars) ---`);
  console.log(s.text);
  console.log('');
}
