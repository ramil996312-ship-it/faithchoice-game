// Отрисовка UI поверх engine.js (Story) и content-<lang>.js (контент). Чистый DOM, без фреймворков.

const FAITH_RANGE = 30; // ponytail: под текущий разброс effects (±10..±15 на 2 выбора), для нормализации полоски
const LANGS = ['ru', 'en', 'es', 'zh', 'hi'];
const LANG_LABEL = { ru: 'RU', en: 'EN', es: 'ES', zh: '中', hi: 'हि' };

let story = null;
let currentKey = null; // ключ текущего персонажа — нужен, чтобы отметить историю пройденной по достижении финала
let totalSteps = 5; // пересчитывается под конкретную историю в startStory()
let soundOn = localStorage.getItem('soundOn') !== '0';
let audioCtx = null;
let voice = null;
let lang = LANGS.includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'ru';

const ageGateEl = document.getElementById('ageGate');
const menuEl = document.getElementById('menu');
const gameEl = document.getElementById('game');
const feedEl = document.getElementById('feed');
const titleEl = document.getElementById('storyTitle');
const basedOnEl = document.getElementById('basedOnBadge');
const themeEl = document.getElementById('storyTheme');
const controlsEl = document.getElementById('controls');
const faithFillEl = document.getElementById('faithFill');
const faithLabelsEl = document.getElementById('faithLabels');
const progressEl = document.getElementById('progress');
const muteBtn = document.getElementById('btnMute');
const pauseBtn = document.getElementById('btnPause');
const pauseHintEl = document.getElementById('pauseHint');
const exitBtn = document.getElementById('btnExit');
const h1El = document.getElementById('pageTitle');
const langSwitchEl = document.getElementById('langSwitch');
const gameTopRowEl = document.getElementById('gameTopRow');
const topRightEl = document.getElementById('topRight');

function content() { return window.Content[lang]; }
function t(key) { return I18N[lang][key]; }

// Отметка "история пройдена" — локально в браузере, чтобы галочка в меню не давала повторять уже прослушанное.
function getCompleted() {
  try { return new Set(JSON.parse(localStorage.getItem('completedStories') || '[]')); }
  catch { return new Set(); }
}
function markCompleted(key) {
  const done = getCompleted();
  if (done.has(key)) return;
  done.add(key);
  localStorage.setItem('completedStories', JSON.stringify([...done]));
}

exitBtn.addEventListener('click', backToMenu);

// --- Звук: голос (Web Speech API), с откатом на синтезированный "стрёкот" (Web Audio API) ---
// Ничего не скачивается и не записывается — оба звука генерируются кодом в браузере.

// Из голосов, подходящих под язык, выбираем не первый попавшийся, а на вид самый качественный —
// на телефонах обычно сразу несколько голосов на один язык, и без этой сортировки код мог взять
// старый "роботизированный" локальный голос вместо куда более естественного, который уже стоит
// на устройстве. Облачные голоса (localService: false) звучат живее локальных почти всегда — есть
// риск, что такой голос "подвиснет" в сети, но это уже отдельно подстраховано вотчдогом в
// speakAndReveal (см. ниже), который откатится на стрёкот, если голос не откликнется за 1.8с.
function voiceQualityScore(v) {
  const name = v.name.toLowerCase();
  let score = 0;
  if (/natural|enhanced|premium|neural|wavenet|studio|plus/.test(name)) score += 3;
  if (/google/.test(name)) score += 2;
  if (!v.localService) score += 1;
  if (/compact|espeak|robot/.test(name)) score -= 3;
  return score;
}

function pickVoice() {
  // Голос должен реально понимать текущий язык — иначе он либо молчит, либо читает
  // текст чужим языком нечитаемо. Нет подходящего голоса — используем стрёкот вместо озвучки.
  const voices = speechSynthesis.getVoices();
  const candidates = voices.filter(v => v.lang.toLowerCase().startsWith(lang));
  candidates.sort((a, b) => voiceQualityScore(b) - voiceQualityScore(a));
  voice = candidates[0] || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  // Список голосов у браузера иногда догружается асинхронно уже после открытия страницы, и это событие
  // может сработать посреди уже идущей истории — если в этот момент переподставить voice, звучание сменится
  // (вплоть до смены пола голоса) прямо на середине истории. Поэтому пока история идёт (story не null),
  // просто не трогаем выбранный голос — переподберём заново, когда пользователь вернётся в меню.
  speechSynthesis.onvoiceschanged = () => { if (!story) pickVoice(); };
}

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

// Первый speak() в сессии браузера у части голосов (особенно сетевые/Natural) долго "запрягается" —
// сторожевой таймер в speakAndReveal (1.8с) не успевает дождаться и откатывается на печать со стрёкотом
// именно для первой реплики. Прогреваем движок тихой фразой заранее, пока ещё не нужен реальный текст.
// Важно: возвращаем промис и реально ДОЖИДАЕМСЯ его в startStory() — раньше прогрев запускался и тут же,
// в следующей строке кода, стирался вызовом speechSynthesis.cancel() из speakAndReveal() для настоящей
// первой реплики (тот cancel() нужен, чтобы обрывать озвучку ПРЕДЫДУЩЕЙ сцены, но заодно сносил и ещё не
// доигравший прогрев) — из-за этой гонки прогрев по факту никогда не успевал сработать.
let speechWarmed = false;
function warmUpSpeech() {
  if (speechWarmed || !('speechSynthesis' in window) || !soundOn) return Promise.resolve();
  speechWarmed = true;
  return new Promise(resolve => {
    const warm = new SpeechSynthesisUtterance(' ');
    warm.volume = 0;
    if (voice) warm.voice = voice; // прогреваем именно тот голос, который реально будет читать историю
    let done = false;
    const finish = () => { if (done) return; done = true; resolve(); };
    // Если движок не откликнулся за отведённое время, беззвучная прогревочная фраза может остаться
    // висеть в очереди браузера недоигранной, — и тогда настоящая первая фраза истории просто встаёт
    // в очередь ЗА ней, а не начинает звучать сразу. cancel() здесь принудительно очищает очередь
    // перед тем как отдать управление реальной истории, чтобы за прогревом не осталось "хвоста".
    // Небольшая пауза после cancel() — тот же браузер, которому не хватало времени сбросить
    // движок между cancel() и speak() в speakAndReveal (см. комментарий там про "проглоченные"
    // первые слова), может повторить ту же гонку здесь, если продолжить сразу же без зазора.
    const finishAndClear = () => { speechSynthesis.cancel(); setTimeout(finish, 50); };
    warm.onend = finishAndClear;
    warm.onerror = finishAndClear;
    // 400мс было мало для медленных сетевых голосов — прогрев сдавался раньше, чем движок
    // успевал реально проснуться, и самая первая фраза истории всё равно уходила на печать.
    // Это разовая задержка на всю сессию браузера, не на каждую сцену, — не жалко подождать дольше.
    setTimeout(finishAndClear, 3000);
    speechSynthesis.speak(warm);
  });
}

function playBlip() {
  if (!soundOn) return;
  const ctx = ensureAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine'; // мягче square — меньше резких обертонов
  osc.frequency.value = 320 + Math.random() * 120;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.06);
}

// Светлая/тёмная тема — переключатель сохраняется в localStorage, как lang и soundOn.
const themeBtn = document.getElementById('btnTheme');
let theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';

// Цвета 50 персонажей подобраны под контраст на тёмном фоне (светлые/яркие) — на белом фоне светлой
// темы такая светлота даёт низкий контраст (жёлтые/бирюзовые особенно). Не трогаем сами данные (это
// испортило бы цвета для тёмной темы), а пересчитываем на лету только когда активна светлая тема.
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [h, s, l];
}
function hslToRgb(h, s, l) {
  if (s === 0) return [l * 255, l * 255, l * 255];
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hue2rgb(p, q, h + 1 / 3) * 255, hue2rgb(p, q, h) * 255, hue2rgb(p, q, h - 1 / 3) * 255];
}
function colorForTheme(hex) {
  if (theme !== 'light') return hex;
  const [r, g, b] = hexToRgb(hex);
  let [h, s, l] = rgbToHsl(r, g, b);
  l = Math.min(l, 0.30); // потолок светлоты — иначе на белом фоне цвет теряется
  s = Math.min(1, s * 1.35); // компенсируем затемнение приростом насыщенности, чтобы не было "грязно"
  const [nr, ng, nb] = hslToRgb(h, s, l);
  return rgbToHex(nr, ng, nb);
}

// Кнопки выбора красятся в цвет персонажа — у части персонажей (напр. Максим, #7539c6) он сам по себе
// тёмный, и фиксированный тёмный текст кнопки на нём нечитаем что в тёмной, что в светлой теме.
// Выбираем цвет текста по факту светлоты конкретного цвета, а не держим его одним и тем же всегда.
function readableTextOn(hex) {
  const [r, g, b] = hexToRgb(hex);
  const [, , l] = rgbToHsl(r, g, b);
  return l > 0.55 ? '#10171c' : '#ffffff';
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  themeBtn.textContent = theme === 'light' ? '☀️' : '🌙';
  // Перекрасить уже показанные цвета персонажей под новую тему без перезагрузки страницы.
  if (!menuEl.classList.contains('hidden')) renderMenu();
  if (!gameEl.classList.contains('hidden') && currentKey) {
    const character = content().CHARACTERS.find(c => c.key === currentKey);
    if (character) {
      const col = colorForTheme(character.color);
      document.documentElement.style.setProperty('--accent', col);
      document.documentElement.style.setProperty('--btn-text', readableTextOn(col));
    }
  }
}
themeBtn.addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  applyTheme();
});
applyTheme();

function updateMuteBtn() { muteBtn.textContent = soundOn ? '🔊' : '🔇'; }
muteBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem('soundOn', soundOn ? '1' : '0');
  if (!soundOn) speechSynthesis.cancel();
  updateMuteBtn();
});
updateMuteBtn();

// Пауза — останавливает и голос (speechSynthesis.pause, нативно поддерживается браузером),
// и печать-стрёкот (тик просто ничего не делает, пока стоит на паузе). Сбрасывается на каждой
// новой сцене в renderCurrent() — пауза относится к текущей реплике, а не ко всей игре разом.
let isPaused = false;
// Иконка ⏸/▶ в углу слишком маленькая и легко теряется, особенно на телефоне — если пользователь случайно
// поставил паузу одним касанием по ленте во время печати/озвучки, экран просто "замирает" без кнопки
// "Далее", и это выглядит как баг, а не как пауза. Явная подсказка прямо в ленте делает это однозначным.
function updatePauseBtn() {
  pauseBtn.textContent = isPaused ? '▶' : '⏸';
  pauseHintEl.classList.toggle('pause-visible', isPaused);
}
pauseHintEl.addEventListener('click', () => { if (isPaused) togglePause(); });
// Хук паузы для активно звучащей озвучки. speakAndReveal подставляет сюда pause/resume/abandon,
// пока управляет конкретным SpeechSynthesisUtterance. НЕ используем speechSynthesis.pause()/resume()
// напрямую — в части браузеров (особенно с сетевыми "естественными" голосами) речь после такой паузы
// зависает и не возобновляется вовсе, из-за чего пользователь слышит тишину, а потом фолбэк-стрёкот
// вместо голоса. Вместо этого при паузе честно останавливаем (cancel) текущую фразу и запоминаем,
// докуда она была озвучена/показана, а при снятии паузы озвучиваем заново только оставшийся хвост текста.
let activeVoicePause = null;
function togglePause() {
  isPaused = !isPaused;
  if (activeVoicePause) {
    if (isPaused) activeVoicePause.pause(); else activeVoicePause.resume();
  }
  updatePauseBtn();
}

// Клик по ленте, пока сцена ещё печатается/озвучивается: одиночный клик ставит/снимает паузу,
// двойной клик (два клика подряд быстрее 350мс) пропускает сцену и сразу показывает весь текст —
// без этого при недоступном голосе (частый случай на телефонах) длинную сцену нельзя промотать
// вперёд, приходится ждать её целиком до конца.
let lastFeedTapAt = 0;
function handleFeedTap(skip) {
  const now = Date.now();
  if (now - lastFeedTapAt < 350) {
    lastFeedTapAt = 0;
    if (isPaused) { isPaused = false; updatePauseBtn(); } // пропуск сцены снимает и визуальную паузу
    skip();
  } else { lastFeedTapAt = now; togglePause(); }
}
pauseBtn.addEventListener('click', togglePause);

function renderLangSwitch() {
  langSwitchEl.innerHTML = LANGS.map(l =>
    `<button class="lang-btn${l === lang ? ' lang-on' : ''}" data-lang="${l}">${LANG_LABEL[l]}</button>`
  ).join('');
  langSwitchEl.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setLang(l) {
  if (l === lang) return;
  lang = l;
  localStorage.setItem('lang', lang);
  speechWarmed = false; // новый язык — новый голос, его тоже нужно прогреть заново
  pickVoice();
  renderLangSwitch();
  applyStaticText();
  renderMenu();
  backToMenu(); // смена языка на середине истории усложняет граф — проще вернуть в меню
}

// Слово внутри сердца может быть длиннее рус. "Тьма"/"Свет" (напр. англ. "Darkness") —
// сердце не резиновое, поэтому вписываем текст, уменьшая шрифт, если он не влезает.
function fitHeartText(span) {
  span.style.fontSize = '';
  if (!span.parentElement.clientWidth) return; // сердце ещё скрыто (display:none) — измерять нечего
  const maxWidth = span.parentElement.clientWidth * 0.6;
  const width = span.scrollWidth;
  if (width > maxWidth) {
    const base = parseFloat(getComputedStyle(span).fontSize);
    span.style.fontSize = (base * maxWidth / width) + 'px';
  }
}
function fitHeartLabels() {
  faithLabelsEl.querySelectorAll('.heart-text').forEach(fitHeartText);
}

// Короткая "вспышка" сердца в момент выбора — в сторону тьмы или света, смотря по знаку effects.faith
// у выбранного варианта (а не по тому, слева он в списке или справа — это про смысл, не про кнопку).
function pulseHeart(direction) {
  const el = faithLabelsEl.querySelector(direction === 'dark' ? '.heart-dark' : '.heart-light');
  if (!el) return;
  el.classList.remove('heart-pulse');
  void el.offsetWidth; // форсируем reflow — иначе повторный клик подряд не перезапустит анимацию
  el.classList.add('heart-pulse');
}

// Стрелка на полоске веры в момент выбора — стартует из центра и "летит" к тому сердцу, в чью
// сторону сдвинулся выбор: красная к тьме, зелёная к свету (см. .faith-arrow в index.html).
const faithArrowEl = document.getElementById('faithArrow');
function showChoiceArrow(direction) {
  if (!faithArrowEl) return;
  faithArrowEl.classList.remove('to-dark', 'to-light');
  void faithArrowEl.offsetWidth; // форсируем reflow — иначе повторный выбор подряд не перезапустит анимацию
  faithArrowEl.classList.add(direction === 'dark' ? 'to-dark' : 'to-light');
}

function applyStaticText() {
  h1El.textContent = t('title');
  faithLabelsEl.querySelector('.heart-dark .heart-text').textContent = t('dark');
  faithLabelsEl.querySelector('.heart-light .heart-text').textContent = t('light');
  fitHeartLabels();
  exitBtn.textContent = t('exit');
  document.getElementById('ageGateTitle').textContent = t('ageGateTitle');
  document.getElementById('ageGateBody').textContent = t('ageGateBody');
  document.getElementById('btnAgeGateContinue').textContent = t('ageGateButton');
}

// Предупреждение о теме контента (насилие/зависимости/суицид) — один раз на браузер, затем не показываем.
function initAgeGate() {
  if (localStorage.getItem('ageGateAccepted') === '1') {
    ageGateEl.classList.add('hidden');
    menuEl.classList.remove('hidden');
    return;
  }
  document.getElementById('btnAgeGateContinue').addEventListener('click', () => {
    localStorage.setItem('ageGateAccepted', '1');
    ageGateEl.classList.add('hidden');
    menuEl.classList.remove('hidden');
  });
}

// Растёт при каждом выходе в меню — активные печать/озвучка сверяются с ним и не трогают
// DOM новой истории, если пользователь ушёл раньше, чем они доиграли.
let revealToken = 0;

// Печатает текст по буквам с "клавиатурным" звуком — запасной вариант, если голос недоступен.
// Клик по ленте, пока текст ещё печатается: одиночный ставит/снимает паузу, двойной — пропускает
// сцену целиком (см. handleFeedTap выше). startIndex позволяет продолжить печать с середины — нужно, когда голос отвалился на середине фразы
// и остаток дописывается стрёкотом, не стирая уже показанное.
function typeTextBlip(el, text, speed = 18, startIndex = 0) {
  const myToken = revealToken;
  return new Promise(resolve => {
    let i = startIndex;
    el.textContent = text.slice(0, i);
    const cleanup = () => { clearInterval(timer); feedEl.removeEventListener('click', onFeedClick); };
    const finish = () => { el.textContent = text; cleanup(); resolve(); };
    const onFeedClick = () => handleFeedTap(finish);
    const timer = setInterval(() => {
      if (myToken !== revealToken) { cleanup(); resolve(); return; }
      if (isPaused) return; // тик пропускается, пока стоит на паузе, таймер не сбрасывается
      i += 1;
      el.textContent = text.slice(0, i);
      el.scrollIntoView({ block: 'end' }); // тянет и ленту, и страницу целиком — scrollTop ленты этого не делал
      if (text[i - 1] && text[i - 1] !== ' ' && i % 3 === 0) playBlip();
      if (i >= text.length) finish();
    }, speed);
    feedEl.addEventListener('click', onFeedClick);
  });
}

// Озвучивает текст голосом браузера и проявляет его слово за словом синхронно с речью.
// Клик по ленте — ставит/снимает паузу (не пропускает озвучку, см. togglePause выше).
// Если голос за 1.8с не подал признаков жизни (частая история с сетевыми нейро-голосами
// для менее ходовых языков — зависает без ошибки и без звука), бросаем его и уходим на
// печать со стрёкотом, а не ждём молча неизвестно сколько.
//
// Пауза реализована через cancel() + повторный speak() оставшегося хвоста текста, а не через
// native speechSynthesis.pause()/resume() — те в части браузеров ломают воспроизведение насовсем
// (речь не возобновляется, слышно только тишину или неожиданно стартует стрёкот-фолбэк).
function speakAndReveal(el, text) {
  if (!soundOn || !('speechSynthesis' in window) || !voice) return typeTextBlip(el, text);
  const myToken = revealToken;
  return new Promise(resolve => {
    // cancel() только если голос реально что-то читает/готовится читать — безусловный cancel() прямо
    // перед speak() для новой сцены "сглатывал" первые слова: браузер не успевал сбросить движок до
    // старта новой фразы. В норме к этому моменту прошлая фраза уже сама завершилась (onend/abandon).
    if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
    el.textContent = '';
    let done = false;
    let watchdog = null;
    let intentionalStop = false; // true, пока мы сами вызываем cancel() ради паузы — это не ошибка голоса

    const cleanupClick = () => feedEl.removeEventListener('click', onFeedClick);

    const finishAll = (finalText) => {
      if (done) return;
      done = true;
      clearTimeout(watchdog);
      cleanupClick();
      activeVoicePause = null;
      if (myToken === revealToken) el.textContent = finalText;
      speechSynthesis.cancel();
      resolve();
    };
    const onFeedClick = () => handleFeedTap(() => finishAll(text));

    const fallbackToTyping = () => {
      if (done) return;
      done = true;
      clearTimeout(watchdog);
      cleanupClick();
      activeVoicePause = null;
      speechSynthesis.cancel();
      // cancel() из backToMenu() тоже приходит сюда через onerror — если история уже
      // не актуальна (пользователь вышел), не запускаем стрёкот поверх меню.
      if (myToken !== revealToken) { resolve(); return; }
      typeTextBlip(el, text, 18, el.textContent.length).then(resolve);
    };

    function speakFrom(offset) {
      const remaining = text.slice(offset);
      if (!remaining) { finishAll(text); return; }
      let started = false;
      let attemptId = 0; // отличает события свежей попытки от асинхронного "хвоста" отменённой

      // Известная особенность движка речи в Chrome/Edge: изредка новая фраза молча "зависает" —
      // не запускается и не выдаёт ошибку. Один retry (cancel + свежий Utterance) почти всегда
      // решает эту ситуацию сам; печать со стрёкотом остаётся крайним случаем, если и он не помог.
      // Отдельная опасность — фраза стартует нормально, но замолкает где-то посреди себя и больше
      // никогда не зовёт ни onend, ни onerror: без второго таймера (armStallWatchdog) сцена осталась
      // бы висеть навсегда — кнопка "Далее" просто не появлялась бы, и пробел нажимать было не на что.
      //
      // В Safari/iOS у onboundary давняя особенность WebKit — оно может вообще ни разу не сработать
      // после onstart для целой фразы. Если таймер зависания сбрасывается только по onboundary, это
      // на iPhone ошибочно принимало нормально звучащий длинный текст за зависший уже через 4 секунды
      // и обрывало голос на печать посреди фразы. Поэтому бюджет времени считаем не фиксированным,
      // а от длины оставшегося текста (по той же модели ~13 симв/сек, что и в тайминге историй),
      // с трёхкратным запасом, — чтобы длинная фраза без единого onboundary всё равно успела дочитаться.
      const stallBudgetMs = Math.max(4000, (remaining.length / 13) * 1000 * 3 + 3000);
      const armStallWatchdog = () => {
        clearTimeout(watchdog);
        watchdog = setTimeout(() => { if (!intentionalStop) fallbackToTyping(); }, stallBudgetMs);
      };

      // Сколько символов уже показано — общий счётчик и для onboundary, и для тикера ниже. reveal()
      // всегда двигает вперёд, никогда не откатывает: если onboundary всё же сработает и окажется
      // точнее тикера, он просто "обгонит" его на пару символов вперёд, а не покажет текст назад.
      let shown = offset;
      const reveal = (upTo) => {
        if (upTo <= shown || myToken !== revealToken) return;
        shown = upTo;
        el.textContent = text.slice(0, shown);
        el.scrollIntoView({ block: 'end' }); // тянет и ленту, и страницу целиком
      };

      const attemptSpeak = () => {
        const myAttemptId = ++attemptId;
        const utter = new SpeechSynthesisUtterance(remaining);
        utter.voice = voice;
        utter.lang = voice.lang || lang;
        utter.rate = 0.95;

        // Параллельный тикер: onboundary в части браузеров/устройств не срабатывает вовсе для целой
        // фразы (см. давнюю особенность WebKit в комментарии ниже) — тогда без этого тикера весь текст
        // выскакивал бы одним куском только по onend, вместо того чтобы идти вместе с речью. Тикер
        // продвигает текст по оценке скорости чтения (~13 симв/сек, та же модель, что и в тайминге
        // историй), скорректированной на utter.rate; onboundary, если сработает, всё равно даёт более
        // точную границу слова и уходит вперёд тикера через тот же reveal().
        let tickTimer = null;
        const msPerChar = 1000 / (13 * (utter.rate || 1));
        const startTicker = () => {
          const tickStart = Date.now();
          clearInterval(tickTimer);
          tickTimer = setInterval(() => {
            if (myAttemptId !== attemptId || intentionalStop) { clearInterval(tickTimer); return; }
            reveal(Math.min(offset + Math.floor((Date.now() - tickStart) / msPerChar), text.length));
          }, 120);
        };
        const stopTicker = () => { clearInterval(tickTimer); tickTimer = null; };

        utter.onstart = () => {
          if (myAttemptId !== attemptId) return;
          started = true; armStallWatchdog();
          startTicker();
        };
        utter.onboundary = (e) => {
          if (myAttemptId !== attemptId) return;
          started = true;
          armStallWatchdog();
          const localEnd = remaining.indexOf(' ', e.charIndex);
          const absEnd = offset + (localEnd === -1 ? remaining.length : localEnd);
          reveal(absEnd);
        };
        utter.onend = () => {
          if (myAttemptId !== attemptId || intentionalStop) return;
          stopTicker();
          finishAll(text);
        };
        utter.onerror = () => {
          // cancel() из retry ниже тоже асинхронно шлёт error именно отменённой попытке —
          // без проверки myAttemptId это событие само сорвало бы retry в fallback раньше времени.
          if (myAttemptId !== attemptId || intentionalStop) return;
          stopTicker();
          fallbackToTyping();
        };

        activeVoicePause = {
          pause: () => { intentionalStop = true; stopTicker(); speechSynthesis.cancel(); },
          resume: () => {
            if (myToken !== revealToken) { activeVoicePause = null; return; }
            intentionalStop = false;
            speakFrom(shown);
          },
          abandon: () => { intentionalStop = true; stopTicker(); speechSynthesis.cancel(); finishAll(el.textContent || ''); },
        };

        watchdog = setTimeout(() => {
          if (started || intentionalStop) return;
          if (myAttemptId === 1) {
            speechSynthesis.cancel();
            attemptSpeak();
          } else {
            fallbackToTyping();
          }
        }, 900);
        speechSynthesis.speak(utter);
      };
      attemptSpeak();
    }

    feedEl.addEventListener('click', onFeedClick);
    speakFrom(0);
  });
}

function renderMenu() {
  const completed = getCompleted();
  menuEl.innerHTML = content().CHARACTERS.map(c => {
    const icon = c.icon || `<span class="monogram">${c.name[0]}</span>`;
    const available = !!content().STORIES[c.key];
    const done = completed.has(c.key);
    const badge = done ? `<span class="icon-badge" title="${t('storyDone')}">✓</span>` : '';
    return `<button class="card${available ? '' : ' card-soon'}${done ? ' card-done' : ''}" data-key="${c.key}" style="--accent:${colorForTheme(c.color)}">
       <div class="card-icon">${icon}${badge}</div>
       <div class="card-text">
         <div class="card-name">${c.gender === 'ж' ? '♀' : '♂'} ${c.name}</div>
         <div class="card-theme">${c.theme}</div>
       </div>
     </button>`;
  }).join('');
  menuEl.querySelectorAll('.card').forEach(btn => {
    btn.addEventListener('click', () => startStory(btn.dataset.key));
  });
}

async function startStory(key) {
  if (!content().STORIES[key]) { alert(t('comingSoon')); return; }
  // Список голосов браузера иногда ещё не успевает загрузиться к моменту первого клика по карточке
  // (getVoices() в pickVoice() при загрузке страницы вернул пустой список), а onvoiceschanged к этому
  // моменту мог ещё не сработать — voice так и остаётся null, и первая же фраза истории безусловно
  // уходит на печать, сколько бы ни ждал прогрев (прогревать нечего). К моменту клика по карточке голоса
  // почти наверняка уже подгрузились — пробуем выбрать голос ещё раз прямо здесь, если это не удалось раньше.
  if (!voice && 'speechSynthesis' in window) pickVoice();
  ensureAudio(); // разблокировать звук именно здесь — это прямой клик пользователя
  await warmUpSpeech(); // дожидаемся реального прогрева, а не просто запускаем и тут же перебиваем его
  currentKey = key;
  const character = content().CHARACTERS.find(c => c.key === key);
  story = new Engine.Story(content().STORIES[key]);
  totalSteps = Engine.pathLength(content().STORIES[key]);
  basedOnEl.textContent = t('basedOnTrue');
  titleEl.textContent = character.name;
  themeEl.textContent = character.theme;
  const startColor = colorForTheme(character.color);
  document.documentElement.style.setProperty('--accent', startColor);
  document.documentElement.style.setProperty('--btn-text', readableTextOn(startColor));
  feedEl.innerHTML = '';
  renderFaith();
  renderProgress();
  menuEl.classList.add('hidden');
  gameEl.classList.remove('hidden');
  gameTopRowEl.insertBefore(langSwitchEl, topRightEl); // переключатель языка переезжает между "Меню" и паузой на время истории
  fitHeartLabels(); // сердца только что стали видимыми — раньше clientWidth был 0, подгонка текста не сработала бы
  renderCurrent();
}

function renderFaith() {
  const val = (story && story.state.faith) || 0;
  const pct = Math.max(-1, Math.min(1, val / FAITH_RANGE)) * 50;
  if (pct >= 0) {
    faithFillEl.style.left = '50%';
    faithFillEl.style.width = pct + '%';
    faithFillEl.style.background = 'var(--accent)';
  } else {
    faithFillEl.style.left = (50 + pct) + '%';
    faithFillEl.style.width = (-pct) + '%';
    faithFillEl.style.background = '#e2574c';
  }
}

// Стрелки — просто счётчик "сколько шагов пройдено", без градиента тьма→свет: ту раскраску уже несёт
// полоска веры faith-track прямо над ним, и одинаковый градиент на обоих элементах читался как дублирование.
const ARROW_SVG = '<svg viewBox="0 0 10 14"><path d="M1,1 L8,7 L1,13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function renderProgress() {
  const step = story ? story.history.length : 0;
  progressEl.innerHTML = Array.from({ length: totalSteps }, (_, i) => {
    const on = i <= step;
    return `<span class="dot" style="color:var(--accent);opacity:${on ? 1 : 0.32}">${ARROW_SVG}</span>`;
  }).join('');
}

// Клавиатура: 1/2 — выбрать вариант тьмы/света на сценах с выбором (в остальных сценах кнопок
// больше нет — история идёт сама, см. renderCurrent()).
document.addEventListener('keydown', (e) => {
  if (gameEl.classList.contains('hidden')) return;
  const buttons = controlsEl.querySelectorAll('button');
  if (e.key === '1' && buttons[0]) buttons[0].click();
  else if (e.key === '2' && buttons[1]) buttons[1].click();
});

async function renderCurrent() {
  isPaused = false; // новая сцена начинается не на паузе, даже если предыдущая была поставлена
  updatePauseBtn();
  const scene = story.current();
  const block = document.createElement('div');
  block.className = 'line';
  feedEl.appendChild(block);
  block.scrollIntoView({ block: 'end' });
  controlsEl.innerHTML = '';
  requestAnimationFrame(() => block.classList.add('line-visible'));

  await speakAndReveal(block, scene.text);
  block.scrollIntoView({ block: 'end' });
  renderProgress();

  if (scene.choices && scene.choices.length) {
    scene.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.textContent = choice.label;
      btn.style.transitionDelay = (i * 0.08) + 's';
      btn.addEventListener('click', async () => {
        const delta = choice.effects && choice.effects.faith;
        if (delta) {
          const dir = delta > 0 ? 'light' : 'dark';
          pulseHeart(dir);
          showChoiceArrow(dir);
        }
        story.choose(i);
        renderFaith();
        await renderCurrent();
      });
      controlsEl.appendChild(btn);
      requestAnimationFrame(() => btn.classList.add('btn-visible'));
    });
  } else if (scene.next != null) {
    // Без кнопки "Далее" — линейные сцены без выбора идут сами, с небольшой паузой на прочтение
    // уже показанного текста. Останавливаемся только там, где есть настоящий выбор (см. ветку выше).
    const myToken = revealToken;
    setTimeout(() => {
      if (myToken !== revealToken) return; // пользователь успел уйти в меню/начать другую историю
      story.advance();
      renderCurrent();
    }, 900);
  } else {
    markCompleted(currentKey);
    controlsEl.innerHTML = `<div class="ended">${t('ended')}</div>`;
    // Автовозврат в меню без клика — backToMenu() сам прокручивает список к карточке только что
    // пройденной истории (см. её код), а не сбрасывает список наверх.
    const myToken = revealToken;
    setTimeout(() => {
      if (myToken !== revealToken) return; // пользователь уже сам ушёл раньше
      backToMenu();
    }, 1600);
  }
  controlsEl.scrollIntoView({ block: 'end', behavior: 'smooth' }); // кнопки не всегда влезают на экран без этого
}

function backToMenu() {
  revealToken += 1; // отменяет любую ещё доигрывающую печать/озвучку прежней истории
  // Если ушли в меню посреди паузы (озвучка уже остановлена нами же через cancel(), новых
  // событий от неё не будет) — без этого промис speakAndReveal завис бы навсегда.
  if (activeVoicePause) { activeVoicePause.abandon(); activeVoicePause = null; }
  speechSynthesis.cancel();
  gameEl.classList.add('hidden');
  menuEl.classList.remove('hidden');
  basedOnEl.parentNode.insertBefore(langSwitchEl, basedOnEl); // переключатель языка возвращается под заголовок
  basedOnEl.textContent = ''; // иначе "по мотивам..." останется висеть под заголовком и в меню
  document.documentElement.style.removeProperty('--accent');
  document.documentElement.style.removeProperty('--btn-text');
  renderMenu(); // подхватить свежую отметку "пройдено", если история только что была завершена
  story = null;
  // Пока шла игра, страница была короче списка из 50 карточек, и браузер сам сбрасывал прокрутку —
  // без этого меню всегда открывалось бы сверху, даже если пользователь листал карточки далеко вниз.
  if (currentKey) {
    const openedCard = menuEl.querySelector(`[data-key="${currentKey}"]`);
    if (openedCard) openedCard.scrollIntoView({ block: 'center' });
  }
}

renderLangSwitch();
applyStaticText();
renderMenu();
initAgeGate();
