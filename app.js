// Отрисовка UI поверх engine.js (Story) и content-<lang>.js (контент). Чистый DOM, без фреймворков.

const FAITH_RANGE = 30; // ponytail: под текущий разброс effects (±10..±15 на 2 выбора), для нормализации полоски
// Баннер с просьбой поддержать проект (после каждой 10-й пройденной истории) — текст/логика готовы,
// но выключены, пока не готова сама кнопка доната (ждёт открытия ИП, см. память проекта). Включить —
// поставить true и вписать реальную ссылку в DONATE_URL.
const DONATE_BANNER_ENABLED = false;
const DONATE_URL = '#';
const LANGS = ['ru', 'en', 'es', 'zh', 'hi'];
const LANG_LABEL = { ru: 'RU', en: 'EN', es: 'ES', zh: '中', hi: 'हि' };
// /var/www/faithchoice.net/audio/<lang>/<storyKey>/<sceneId>.mp3 — предзаписанная озвучка (Google Cloud TTS).
// Внутри Capacitor-приложения страница грузится из локального бандла (file://-подобная схема), а не с
// сайта — относительный путь 'audio' там ни на что не сослался бы. 500 МБ файлов сознательно НЕ зашиты
// в приложение (раздули бы установку в разы) — вместо этого внутри приложения звук стримится с живого
// сайта по полному адресу; на самом сайте (`window.Capacitor` отсутствует) путь остаётся относительным,
// как раньше.
const AUDIO_BASE = (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())
  ? 'https://faithchoice.net/audio' : 'audio';

let story = null;
let currentKey = null; // ключ текущего персонажа — нужен, чтобы отметить историю пройденной по достижении финала
let totalSteps = 5; // пересчитывается под конкретную историю в startStory()
let soundOn = localStorage.getItem('soundOn') !== '0';
let audioCtx = null;
let currentAudio = null; // <audio>, которым сейчас управляют пауза/мьют — ссылка на активно звучащую сцену

// Для новых посетителей без сохранённого выбора языка — угадываем по языку браузера, а не жёстко
// показываем один и тот же язык всем подряд. Домен международный (faithchoice.net), и часть аудитории
// приходит из англоязычного аутрича — им не должно быть нужно искать кнопку переключения языка.
// navigator.languages (если есть) даёт список по убыванию предпочтения — берём первый, что у нас есть.
// Если ни один из 5 языков не совпал — откатываемся на английский (не русский), он международный.
function detectBrowserLang() {
  const candidates = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  for (const c of candidates) {
    const prefix = c.toLowerCase().slice(0, 2);
    if (LANGS.includes(prefix)) return prefix;
  }
  return 'en';
}
let lang = LANGS.includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : detectBrowserLang();

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

// --- Звук: предзаписанная озвучка (mp3, Google Cloud TTS), с откатом на печать со "стрёкотом"
// (Web Audio API), если файл не загрузился — например, сцены нет в audio/ или сеть отвалилась.

// Фоновая озвучка внутри приложения (не на сайте) — без этого Android останавливает воспроизведение
// и JS сразу же при сворачивании приложения. Требует showить постоянное уведомление, пока звучит
// история, — это обязательное условие самого Android для любого фонового звука, не наша прихоть.
// Начинается при входе в историю, останавливается при выходе в меню — не висит постоянно.
async function startBackgroundAudioService(characterName) {
  if (!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) return;
  const ForegroundService = window.Capacitor.Plugins.ForegroundService;
  if (!ForegroundService) return;
  try {
    const perm = await ForegroundService.checkPermissions();
    if (perm.display !== 'granted') await ForegroundService.requestPermissions();
    await ForegroundService.startForegroundService({
      id: 1,
      title: t('title'),
      body: characterName,
      smallIcon: 'ic_stat_faithchoice',
      serviceType: 2, // FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK — см. AndroidManifest.xml
    });
  } catch {} // нет разрешения на уведомления и т.п. — приложение просто продолжит работать как раньше (без фона)
}
function stopBackgroundAudioService() {
  if (!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) return;
  const ForegroundService = window.Capacitor.Plugins.ForegroundService;
  if (ForegroundService) ForegroundService.stopForegroundService().catch(() => {});
}

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
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
// Мьют — это НЕ пауза: текст должен продолжать идти дальше без звука, а не замирать. Аудио продолжает
// играть и синхронизировать проявление текста, просто беззвучно (audio.muted), поэтому тут достаточно
// переключить флаг на уже играющем элементе — без остановки/перезапуска.
muteBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem('soundOn', soundOn ? '1' : '0');
  if (currentAudio) currentAudio.muted = !soundOn;
  updateMuteBtn();
});
updateMuteBtn();

// Пауза — останавливает и озвучку (audio.pause(), нативно и надёжно в HTML5 audio), и печать-стрёкот
// (тик просто ничего не делает, пока стоит на паузе). Сбрасывается на каждой новой сцене в
// renderCurrent() — пауза относится к текущей реплике, а не ко всей игре разом.
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
// пока управляет конкретным <audio> текущей сцены.
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

// Клик по любому сердцу открывает библейский стих про соответствующий путь (Рим. 10:13 у света,
// 1 Кор. 6:9-10 у тьмы) — сердца теперь настоящие <button>, не просто подпись. Один и тот же модальный
// блок для обоих направлений, текст берётся из i18n (verseLight/verseDark), поэтому подхватывается
// на всех 5 языках сам по себе, без отдельной логики на язык.
const verseModalEl = document.getElementById('verseModal');
const verseModalTextEl = document.getElementById('verseModalText');
const verseModalBoxEl = document.querySelector('.verse-modal-box');
function openVerseModal(direction) {
  verseModalTextEl.textContent = t(direction === 'dark' ? 'verseDark' : 'verseLight');
  verseModalBoxEl.classList.remove('verse-dark', 'verse-light');
  verseModalBoxEl.classList.add(direction === 'dark' ? 'verse-dark' : 'verse-light');
  verseModalEl.classList.remove('hidden');
}
function closeVerseModal() { verseModalEl.classList.add('hidden'); }
faithLabelsEl.querySelector('.heart-dark').addEventListener('click', () => openVerseModal('dark'));
faithLabelsEl.querySelector('.heart-light').addEventListener('click', () => openVerseModal('light'));
document.getElementById('verseModalClose').addEventListener('click', closeVerseModal);
document.getElementById('verseModalBackdrop').addEventListener('click', closeVerseModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVerseModal(); });

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

// Ссылка на конкретную историю (?story=marat из кнопки "Поделиться") — чтобы можно было отправить
// близкому человеку сразу нужную историю, а не общую ссылку на меню.
function getSharedStoryKey() {
  const key = new URLSearchParams(location.search).get('story');
  return key && content().STORIES[key] ? key : null;
}
function enterApp() {
  const sharedKey = getSharedStoryKey();
  if (sharedKey) startStory(sharedKey); else menuEl.classList.remove('hidden');
}

// Предупреждение о теме контента (насилие/зависимости/суицид) — один раз на браузер, затем не показываем.
// Исключение — прямая ссылка на конкретную историю (?story=, см. getSharedStoryKey): её всегда
// показываем заново, даже если уже была принята раньше. Причины две: получатель ссылки видит
// предупреждение свежим взглядом, не выбрав историю сам через меню; и, что технически обязательно —
// это единственный клик пользователя перед стартом истории. Без него enterApp()/startStory() запускал
// бы озвучку прямо при загрузке страницы без единого жеста пользователя, а браузеры блокируют
// автозапуск звука без клика — audio.play() тихо падал в фолбэк на печать с кликами клавиатуры.
function initAgeGate() {
  if (localStorage.getItem('ageGateAccepted') === '1' && !getSharedStoryKey()) {
    ageGateEl.classList.add('hidden');
    enterApp();
    return;
  }
  document.getElementById('btnAgeGateContinue').addEventListener('click', () => {
    localStorage.setItem('ageGateAccepted', '1');
    ageGateEl.classList.add('hidden');
    enterApp();
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

// Проигрывает подряд предзаписанные mp3 нескольких сцен (см. renderCurrent — линейные сцены без
// выбора склеены в один блок) и проявляет их общий текст синхронно через timeupdate. Пауза/резюм —
// нативные audio.pause()/play(), мьют — audio.muted; никаких вотчдогов на зависание не нужно, в
// отличие от speechSynthesis, файл либо грузится, либо сразу даёт error. Если файл не найден —
// оставшийся текст (эта и все следующие сцены блока) молча "протикивает" печатью (typeTextBlip).
function speakAndReveal(el, parts) {
  const myToken = revealToken;
  const fullText = parts.map(p => p.text).join(' ');
  el.textContent = '';

  return new Promise(resolve => {
    const cleanupClick = () => feedEl.removeEventListener('click', onFeedClick);
    const finishAll = (finalText) => {
      if (currentAudio) { currentAudio.pause(); currentAudio = null; }
      activeVoicePause = null;
      cleanupClick();
      if (myToken === revealToken) el.textContent = finalText;
      resolve();
    };
    const onFeedClick = () => handleFeedTap(() => finishAll(fullText));
    feedEl.addEventListener('click', onFeedClick);

    let partIdx = 0;
    let prefix = ''; // текст уже доигранных сцен блока — общий отсчёт позиции в fullText

    const fallbackFromHere = () => {
      const shownLen = el.textContent.length; // сколько уже реально показано (могли быть на середине части)
      cleanupClick();
      if (myToken !== revealToken) { resolve(); return; }
      typeTextBlip(el, fullText, 18, shownLen).then(resolve);
    };

    const playPart = () => {
      if (partIdx >= parts.length) { finishAll(fullText); return; }
      const part = parts[partIdx];
      const audio = new Audio(`${AUDIO_BASE}/${lang}/${currentKey}/${part.id}.mp3`);
      audio.muted = !soundOn;
      currentAudio = audio;

      audio.ontimeupdate = () => {
        if (myToken !== revealToken || !audio.duration) return;
        const frac = Math.min(1, audio.currentTime / audio.duration);
        const upTo = prefix.length + Math.floor(part.text.length * frac);
        el.textContent = fullText.slice(0, upTo);
        el.scrollIntoView({ block: 'end' });
      };
      audio.onended = () => {
        if (myToken !== revealToken) return;
        prefix = prefix ? prefix + ' ' + part.text : part.text;
        el.textContent = fullText.slice(0, prefix.length);
        partIdx += 1;
        playPart();
      };
      audio.onerror = () => { if (myToken === revealToken) fallbackFromHere(); };

      activeVoicePause = {
        pause: () => audio.pause(),
        resume: () => audio.play().catch(fallbackFromHere),
        abandon: () => finishAll(el.textContent || ''),
      };
      audio.play().catch(fallbackFromHere);
    };
    playPart();
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

function startStory(key) {
  if (!content().STORIES[key]) { alert(t('comingSoon')); return; }
  ensureAudio(); // разблокировать звук именно здесь — это прямой клик пользователя
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
  startBackgroundAudioService(character.name);
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
// больше нет — история идёт сама, см. renderCurrent()); пробел — пауза/снятие паузы (тот же
// эффект, что клик по кнопке #btnPause), preventDefault — иначе браузер прокручивает страницу.
document.addEventListener('keydown', (e) => {
  if (gameEl.classList.contains('hidden')) return;
  if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); togglePause(); return; }
  const buttons = controlsEl.querySelectorAll('button');
  if (e.key === '1' && buttons[0]) buttons[0].click();
  else if (e.key === '2' && buttons[1]) buttons[1].click();
});

async function renderCurrent() {
  isPaused = false; // новая сцена начинается не на паузе, даже если предыдущая была поставлена
  updatePauseBtn();

  // Сцены без выбора склеиваются в один непрерывный текст вплоть до сцены с настоящим выбором
  // (или до конца истории) — по просьбе пользователя убрать разбивку на отдельные "пузыри"/паузы
  // там, где выбора всё равно нет. story.advance() вызывается "тихо" для каждой пройденной линейной
  // сцены — history/state обновляются как обычно (нужно для прогресса и faith), просто без
  // покадрового рендера и без паузы между репликами: голос/печать идут одним сплошным потоком.
  const parts = [{ id: story.currentId, text: story.current().text }];
  const seenIds = new Set([story.currentId]); // на случай зацикленного графа — в валидном контенте не сработает
  while (!(story.current().choices && story.current().choices.length) && story.current().next != null) {
    story.advance();
    if (seenIds.has(story.currentId)) break;
    seenIds.add(story.currentId);
    parts.push({ id: story.currentId, text: story.current().text });
  }
  const scene = story.current();

  const block = document.createElement('div');
  block.className = 'line';
  feedEl.appendChild(block);
  block.scrollIntoView({ block: 'end' });
  controlsEl.innerHTML = '';
  requestAnimationFrame(() => block.classList.add('line-visible'));

  await speakAndReveal(block, parts);
  block.scrollIntoView({ block: 'end' });
  renderProgress();

  if (scene.choices && scene.choices.length) {
    scene.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.textContent = choice.label;
      btn.style.transitionDelay = (i * 0.08) + 's';
      // Кнопки красятся не в цвет персонажа, а по направлению выбора — красный (тьма) / зелёный
      // (свет), тот же смысл, что и у сердец/полоски веры, чтобы "неправильный" и "правильный"
      // ответ были визуально различимы, а не оба одного нейтрального цвета. Направление берём из
      // знака effects.faith у КОНКРЕТНОГО варианта, а не из позиции кнопки (см. pulseHeart выше —
      // варианты не всегда идут в порядке "сначала светлый").
      const delta = choice.effects && choice.effects.faith;
      const dir = delta > 0 ? 'light' : delta < 0 ? 'dark' : null;
      if (dir) {
        const bg = dir === 'light' ? '#34c9a3' : '#e2574c';
        btn.style.background = bg;
        btn.style.color = readableTextOn(bg);
      }
      btn.addEventListener('click', async () => {
        if (dir) {
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
  } else {
    // scene.next == null — конец истории (промежуточные линейные сцены уже поглощены циклом выше,
    // сюда мы попадаем только на настоящем финале, а не на каждой сцене-мостике).
    markCompleted(currentKey);
    controlsEl.innerHTML = `<div class="ended">${t('ended')}</div><button id="btnShare">${t('share')}</button>`;
    const shareBtn = document.getElementById('btnShare');
    requestAnimationFrame(() => shareBtn.classList.add('btn-visible'));
    // Кнопка "Поделиться" — без награды и отслеживания, просто готовый текст с именем персонажа и
    // тем, каким путём (свет/тьма) закончилась история у этого игрока (не всегда "светлый" —
    // берём по факту знака faith, а не считаем, что все выбирают одинаково). Ссылка ведёт прямо на
    // эту историю (?story=<key>, см. getSharedStoryKey/enterApp) — чтобы можно было переслать
    // конкретную историю близкому человеку, а не общую ссылку на меню со всеми 50.
    shareBtn.addEventListener('click', () => {
      const character = content().CHARACTERS.find(c => c.key === currentKey);
      const pathWord = (story.state.faith || 0) > 0 ? t('light') : t('dark');
      const text = t('shareLine').replace('{name}', character.name).replace('{path}', pathWord) + '\nhttps://faithchoice.net/?story=' + currentKey;
      // Внутри Capacitor-приложения обычные navigator.share()/navigator.clipboard ведут себя
      // непредсказуемо (голый Android WebView, в отличие от настоящего мобильного браузера, часто
      // вообще не реализует эти веб-API или тихо отказывает без ошибки) — используем нативный плагин
      // @capacitor/share, который идёт через системное окно "Поделиться" напрямую. На самом сайте
      // (window.Capacitor нет) всё остаётся как было — через стандартные веб-API.
      if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
        window.Capacitor.Plugins.Share.share({ text }).catch(() => {});
      } else if (navigator.share) {
        navigator.share({ text }).catch(() => {}); // пользователь мог просто закрыть системное окно — не ошибка
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          shareBtn.textContent = '✓';
          setTimeout(() => { if (shareBtn.isConnected) shareBtn.textContent = t('share'); }, 1500);
        }).catch(() => {});
      }
    });

    // Ненавязчивая просьба поддержать проект — каждую 10-ю пройденную историю, не чаще. Выключена
    // флагом DONATE_BANNER_ENABLED, пока не готова сама кнопка доната (см. константу вверху файла).
    let donateShown = false;
    if (DONATE_BANNER_ENABLED && getCompleted().size % 10 === 0) {
      const banner = document.createElement('div');
      banner.className = 'donate-banner';
      banner.innerHTML = `<span>${t('donateText')}</span><a href="${DONATE_URL}" target="_blank" rel="noopener">${t('donateLink')}</a><button class="donate-close" aria-label="${t('exit')}">✕</button>`;
      controlsEl.appendChild(banner);
      banner.querySelector('.donate-close').addEventListener('click', () => banner.remove());
      donateShown = true;
    }

    // Автовозврат в меню без клика — backToMenu() сам прокручивает список к карточке только что
    // пройденной истории (см. её код), а не сбрасывает список наверх. Время увеличено с 1.6с до 7с —
    // раньше не хватало времени даже заметить кнопку "Поделиться", не то что нажать её. Если ещё
    // показан баннер поддержки — даём заметно больше времени (14с), чтобы успеть прочитать и его.
    const myToken = revealToken;
    setTimeout(() => {
      if (myToken !== revealToken) return; // пользователь уже сам ушёл раньше
      backToMenu();
    }, donateShown ? 14000 : 7000);
  }
  controlsEl.scrollIntoView({ block: 'end', behavior: 'smooth' }); // кнопки не всегда влезают на экран без этого
}

function backToMenu() {
  revealToken += 1; // отменяет любую ещё доигрывающую печать/озвучку прежней истории
  // Если ушли в меню посреди паузы (озвучка уже остановлена нами же через pause(), новых
  // событий от неё не будет) — без этого промис speakAndReveal завис бы навсегда.
  if (activeVoicePause) { activeVoicePause.abandon(); activeVoicePause = null; }
  stopBackgroundAudioService();
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
