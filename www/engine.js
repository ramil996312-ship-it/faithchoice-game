// Движок ветвящейся истории: сцены, выборы игрока, последствия (state).
// Контент (реальная история) живёт отдельно в story.js — этот файл ничего не знает про сюжет.
// Работает и в браузере (window.Engine), и в Node (module.exports) — для теста без сборки.

class Story {
  constructor(data) {
    this.scenes = data.scenes;
    this.currentId = data.start;
    this.state = {};
    this.history = [];
  }

  current() {
    return this.scenes[this.currentId];
  }

  isEnded() {
    return this.currentId == null;
  }

  // Игрок выбирает вариант choiceIndex у текущей сцены.
  choose(choiceIndex) {
    const scene = this.current();
    const choice = scene.choices && scene.choices[choiceIndex];
    if (!choice) throw new Error(`Сцена "${this.currentId}" не предлагает вариант ${choiceIndex}`);
    this._applyEffects(choice.effects);
    this.history.push({ id: this.currentId, day: scene.day, text: scene.text, chosenLabel: choice.label });
    this.currentId = choice.next;
    return this.current();
  }

  // Для сцен без выбора — просто идём дальше по сюжету.
  advance() {
    const scene = this.current();
    if (scene.choices && scene.choices.length) throw new Error(`Сцена "${this.currentId}" требует выбора, не advance()`);
    this._applyEffects(scene.effects);
    this.history.push({ id: this.currentId, day: scene.day, text: scene.text, chosenLabel: null });
    this.currentId = scene.next ?? null;
    return this.current();
  }

  _applyEffects(effects) {
    if (!effects) return;
    for (const [key, delta] of Object.entries(effects)) {
      this.state[key] = (this.state[key] || 0) + delta;
    }
  }
}

// Проверка целостности графа сцен: все ссылки next существуют, старт существует.
// Возвращает массив строк с ошибками (пустой массив = всё ок).
function validateStory(data) {
  const errors = [];
  const ids = new Set(Object.keys(data.scenes));
  if (!ids.has(data.start)) errors.push(`Стартовая сцена "${data.start}" не найдена`);
  for (const [id, scene] of Object.entries(data.scenes)) {
    if (scene.choices && scene.choices.length) {
      scene.choices.forEach((choice, i) => {
        if (choice.next != null && !ids.has(choice.next)) {
          errors.push(`Сцена "${id}", вариант ${i} ("${choice.label}") ссылается на несуществующую сцену "${choice.next}"`);
        }
      });
    } else if (scene.next != null && !ids.has(scene.next)) {
      errors.push(`Сцена "${id}" ссылается на несуществующую сцену "${scene.next}"`);
    }
  }
  return errors;
}

// Длина "типичного" пути от старта до финала — идёт по next, на развилках берёт первый вариант.
// Ветки нашего формата сходятся к одной глубине, так что это честная оценка длины истории.
// Нужно только для UI (точки прогресса), к геймплею отношения не имеет.
function pathLength(data) {
  let id = data.start;
  let steps = 1;
  const seen = new Set();
  while (id != null && !seen.has(id)) {
    seen.add(id);
    const scene = data.scenes[id];
    if (!scene) break;
    const next = (scene.choices && scene.choices.length) ? scene.choices[0].next : scene.next;
    if (next == null) break;
    id = next;
    steps += 1;
  }
  return steps;
}

const engineApi = { Story, validateStory, pathLength };
if (typeof module !== 'undefined' && module.exports) module.exports = engineApi;
else if (typeof window !== 'undefined') window.Engine = engineApi;
