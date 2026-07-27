const { Story } = require('./engine.js');
function pathChars(data, pickLast) {
  const story = new Story(data);
  let total = 0, scene = story.current(), steps = 0;
  while (steps < 100) {
    total += scene.text.length;
    if (scene.choices && scene.choices.length) scene = story.choose(pickLast ? scene.choices.length - 1 : 0);
    else if (scene.next != null) scene = story.advance();
    else break;
    steps++;
  }
  return total;
}
const langs = ['ru','en','es','zh','hi'];
const keys = process.argv.slice(2);
for (const lang of langs) {
  const { STORIES } = require(`./content-${lang}.js`);
  for (const key of keys) {
    if (!STORIES[key]) { console.log(lang, key, 'MISSING'); continue; }
    const light = pathChars(STORIES[key], false);
    const dark = pathChars(STORIES[key], true);
    console.log(lang, key, 'light=', light, 'dark=', dark, 'min=', Math.min(light, dark));
  }
}
