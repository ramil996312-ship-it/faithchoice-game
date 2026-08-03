// Самопроверка: запускать `node test.js`. Без фреймворков — только assert.
const assert = require('assert');
const { Story, validateStory } = require('./engine.js');
const { I18N } = require('./i18n.js');

const LANGS = ['ru', 'en', 'es', 'zh', 'hi'];
const CONTENT = Object.fromEntries(LANGS.map(l => [l, require(`./content-${l}.js`)]));

// Обходит ВСЕ концовки истории (не только крайние светлый/тёмный пути выше) и возвращает итоговый
// faith каждой. app.js определяет "светлая"/"тёмная" концовка строго по знаку faith (`faith > 0 ?
// 'light' : 'dark'`) — при faith === 0 это молча трактуется как "тёмная", хотя ни один выбор игрока
// туда не вёл. Защита на будущее: ни у одной концовки faith не должен быть равен ровно 0.
function allEndingFaiths(data, id = data.start, faith = 0, seen = new Set(), out = []) {
  if (seen.has(id)) return out; // циклов в валидном графе быть не должно — просто не зацикливаемся
  const scene = data.scenes[id];
  if (!scene) return out;
  const nextSeen = new Set(seen).add(id);
  const branches = (scene.choices && scene.choices.length) ? scene.choices : [scene];
  for (const branch of branches) {
    const delta = (branch.effects && branch.effects.faith) || 0;
    if (branch.next == null) out.push(faith + delta);
    else allEndingFaiths(data, branch.next, faith + delta, nextSeen, out);
  }
  return out;
}

for (const l of LANGS) {
  assert.ok(I18N[l], `нет строк интерфейса для языка "${l}"`);
  const { CHARACTERS, STORIES } = CONTENT[l];

  assert.ok(CHARACTERS.length > 0, `[${l}] в меню не должно быть пусто`);
  const women = CHARACTERS.filter(c => c.gender === 'ж').length;
  const men = CHARACTERS.filter(c => c.gender === 'м').length;
  assert.strictEqual(women, men, `[${l}] женщин (${women}) и мужчин (${men}) должно быть поровну`);
  assert.ok(Object.keys(STORIES).length >= 1, `[${l}] должна быть хотя бы одна переведённая история`);
  assert.ok(new Set(CHARACTERS.map(c => c.key)).size === CHARACTERS.length, `[${l}] ключи персонажей должны быть уникальны`);

  for (const key of Object.keys(STORIES)) {
    const data = STORIES[key];
    const errors = validateStory(data);
    assert.deepStrictEqual(errors, [], `[${l}] история "${key}" содержит битые ссылки: ${errors.join('; ')}`);

    // Полный прогон: всегда выбираем первый (светлый) вариант — должны дойти до конца без исключений.
    const story = new Story(data);
    let steps = 0;
    let scene = story.current();
    while (steps < 100) {
      if (scene.choices && scene.choices.length) scene = story.choose(0);
      else if (scene.next != null) scene = story.advance();
      else break; // финальная сцена: нет выбора и некуда идти дальше
      steps += 1;
    }
    assert.ok(steps < 100, `[${l}] история "${key}" не завершилась за разумное число шагов (похоже на цикл)`);
    assert.ok(scene.next == null && !(scene.choices && scene.choices.length), `[${l}] история "${key}" не дошла до финальной сцены`);
    assert.ok((story.state.faith || 0) > 0, `[${l}] история "${key}": выбор "светлого" пути должен давать положительный faith`);

    // Тот же прогон, но всегда последний (тёмный) вариант — раньше не проверялся вообще ни разу.
    const darkStory = new Story(data);
    let darkSteps = 0;
    let darkScene = darkStory.current();
    while (darkSteps < 100) {
      if (darkScene.choices && darkScene.choices.length) darkScene = darkStory.choose(darkScene.choices.length - 1);
      else if (darkScene.next != null) darkScene = darkStory.advance();
      else break;
      darkSteps += 1;
    }
    assert.ok(darkSteps < 100, `[${l}] история "${key}" (тёмный путь) не завершилась за разумное число шагов`);
    assert.ok(darkScene.next == null && !(darkScene.choices && darkScene.choices.length), `[${l}] история "${key}" (тёмный путь) не дошла до финальной сцены`);
    assert.ok((darkStory.state.faith || 0) < 0, `[${l}] история "${key}": выбор "тёмного" пути должен давать отрицательный faith`);

    for (const f of allEndingFaiths(data)) {
      assert.notStrictEqual(f, 0, `[${l}] история "${key}": концовка с faith === 0 — app.js молча посчитает её "тёмной" без причины`);
    }
  }
}

const storyCounts = LANGS.map(l => `${l}:${Object.keys(CONTENT[l].STORIES).length}`).join(', ');
console.log(`OK: ${LANGS.length} языков проверены (переведённых историй — ${storyCounts}).`);
