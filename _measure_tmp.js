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
const keys = ['kostya','vlad','natasha','alya','stas','maksim','grisha','tanya','karina'];
const langs = ['ru','en','es','zh','hi'];
for (const lang of langs) {
  const { STORIES } = require('./content-' + lang + '.js');
  console.log('=== ' + lang + ' ===');
  for (const k of keys) {
    const light = pathChars(STORIES[k], false);
    const dark = pathChars(STORIES[k], true);
    console.log(k, 'light=', light, 'dark=', dark, 'min=', Math.min(light, dark));
  }
}
