// Рендерит icon-source.svg во всех размерах, реально нужных для сторов/сайта (не только 512/1024).
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
// 1024 — мастер для App Store; 512 — иконка листинга Google Play;
// 192/180/144/96/72/48 — реальные размеры значка на экране (Android mipmap-уровни + iOS apple-touch-icon);
// 32/16 — фавикон сайта.
const SIZES = [1024, 512, 192, 180, 144, 96, 72, 48, 32, 16];
const svgSource = fs.readFileSync(path.join(__dirname, 'icon-source.svg'), 'utf8');

async function main() {
  const browser = await chromium.launch({ executablePath: EDGE_PATH, headless: true });
  for (const size of SIZES) {
    const svg = svgSource.replace('viewBox="0 0 1024 1024">', `viewBox="0 0 1024 1024" width="${size}" height="${size}">`);
    const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0}</style></head><body>${svg}</body></html>`;
    const tmpFile = path.join(__dirname, `_tmp-${size}.html`);
    fs.writeFileSync(tmpFile, html);
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.goto('file://' + tmpFile.replace(/\\/g, '/'));
    await page.screenshot({ path: path.join(__dirname, `size-check`, `icon-${size}.png`) });
    await page.close();
    fs.unlinkSync(tmpFile);
    console.log(`icon-${size}.png готов`);
  }
  await browser.close();
}

main();
