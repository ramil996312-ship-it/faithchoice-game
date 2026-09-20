// Проверка правки «фото профиля + защищённая запись в хранилище» (audit-2026-09-20, п.1.1).
// Самодостаточно: поднимает свой сервер, открывает приложение в настоящем браузере. Запуск: node test-photo-fix.mjs
import assert from 'assert';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright-core';

const MIME = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json',
               '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.mp3':'audio/mpeg', '.woff2':'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  const p = path.join(process.cwd(), rel === '/' ? 'index.html' : rel);
  fs.readFile(p, (e, d) => {
    if (e) { res.writeHead(404); return res.end('404'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  });
});
await new Promise(r => server.listen(0, r));
const PORT = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle' });

// localStorage — экзотический объект: присваивание localStorage.setItem записывает ЭЛЕМЕНТ с именем
// "setItem", а не подменяет метод. Подменять надо на прототипе.
const patch = `const proto = Object.getPrototypeOf(localStorage);
               const real = proto.setItem;
               proto.setItem = function () { const e = new Error('quota'); e.name = 'QuotaExceededError'; throw e; };`;
const unpatch = `proto.setItem = real;`;

// 1. setLS не даёт упасть приложению, когда хранилище переполнено
const ls = await page.evaluate(`(() => {
  const ok = setLS('__probe', 'x');
  ${patch}
  let threw = false, ret;
  try { ret = setLS('__probe2', 'y'); } catch { threw = true; }
  ${unpatch}
  localStorage.removeItem('__probe');
  return { ok, threw, ret };
})()`);
assert.strictEqual(ls.ok, true, 'обычная запись должна проходить');
assert.strictEqual(ls.threw, false, 'переполнение хранилища не должно бросать исключение наружу');
assert.strictEqual(ls.ret, false, 'при переполнении setLS должен вернуть false');

// 2. запись прогресса при переполнении больше не обрывает блок финала истории
const endOk = await page.evaluate(`(() => {
  ${patch}
  let threw = false;
  try { markCompleted('__none'); markEndingSeen('__none', 'light'); bumpChoiceCount('light'); }
  catch { threw = true; }
  ${unpatch}
  return !threw;
})()`);
assert.ok(endOk, 'запись прогресса при переполнении не должна обрывать блок финала истории');

// 3. фото реально ужимается перед сохранением
const photo = await page.evaluate(async () => {
  const c = document.createElement('canvas');
  c.width = 3000; c.height = 2000;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#c47'; ctx.fillRect(0, 0, 3000, 2000);
  ctx.fillStyle = '#fff'; ctx.fillRect(500, 500, 900, 700);
  const big = c.toDataURL('image/png');
  const small = await downscalePhoto(big);
  const dims = await new Promise(r => { const i = new Image(); i.onload = () => r([i.width, i.height]); i.src = small; });
  return { bigLen: big.length, smallLen: small.length, w: dims[0], h: dims[1] };
});
assert.ok(Math.max(photo.w, photo.h) <= 256, `сторона должна быть <= 256, получено ${photo.w}x${photo.h}`);
assert.ok(photo.smallLen < photo.bigLen / 10, `ужатое фото должно быть многократно меньше: ${photo.bigLen} -> ${photo.smallLen}`);
assert.ok(photo.smallLen < 200 * 1024, `ужатое фото должно влезать в хранилище: ${photo.smallLen} байт`);

assert.deepStrictEqual(errors, [], 'на странице не должно быть ошибок JS');
console.log(`OK  фото ${photo.w}x${photo.h}: ${(photo.bigLen/1024/1024).toFixed(2)} МБ -> ${(photo.smallLen/1024).toFixed(0)} КБ`);
console.log('OK  переполнение хранилища больше не обрывает финал истории');
await browser.close();
server.close();
