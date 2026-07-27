// Рендерит icon-source.svg в PNG нужных размеров через локальный Edge (playwright-core).
// Использование: node render.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const SIZES = [512, 1024];
// Аргументы: node render.js [исходный .svg] [префикс выходных файлов]
const srcFile = process.argv[2] || 'icon-source.svg';
const outPrefix = process.argv[3] || 'icon';
const svgSource = fs.readFileSync(path.join(__dirname, srcFile), 'utf8');

async function main() {
  const browser = await chromium.launch({ executablePath: EDGE_PATH, headless: true });
  for (const size of SIZES) {
    const svg = svgSource.replace('viewBox="0 0 1024 1024">', `viewBox="0 0 1024 1024" width="${size}" height="${size}">`);
    const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0}</style></head><body>${svg}</body></html>`;
    const tmpFile = path.join(__dirname, `_tmp-${size}.html`);
    fs.writeFileSync(tmpFile, html);
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.goto('file://' + tmpFile.replace(/\\/g, '/'));
    await page.screenshot({ path: path.join(__dirname, `${outPrefix}-${size}.png`) });
    await page.close();
    fs.unlinkSync(tmpFile);
    console.log(`${outPrefix}-${size}.png готов`);
  }
  await browser.close();
}

main();
