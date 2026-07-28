// Рендерит экран загрузки (заставку) Android-приложения — заменяет дефолтную заглушку Capacitor
// (белый фон + синий логотип) на фирменный бирюзовый фон с иконкой рыбки по центру.
// Использование: node render_splash.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const RES_DIR = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');
const BRAND_TEAL = '#34c9a3';

// Точные размеры существующих файлов-заглушек Capacitor — заменяем 1:1, ничего не пересчитывая.
const TARGETS = [
  ['drawable', 480, 320],
  ['drawable-port-mdpi', 320, 480], ['drawable-port-hdpi', 480, 800],
  ['drawable-port-xhdpi', 720, 1280], ['drawable-port-xxhdpi', 960, 1600], ['drawable-port-xxxhdpi', 1280, 1920],
  ['drawable-land-mdpi', 480, 320], ['drawable-land-hdpi', 800, 480],
  ['drawable-land-xhdpi', 1280, 720], ['drawable-land-xxhdpi', 1600, 960], ['drawable-land-xxxhdpi', 1920, 1280],
];

async function main() {
  const iconSvg = fs.readFileSync(path.join(__dirname, 'icon-source.svg'), 'utf8');
  const browser = await chromium.launch({ executablePath: EDGE_PATH, headless: true });

  for (const [dir, w, h] of TARGETS) {
    const iconSize = Math.round(Math.min(w, h) * 0.45);
    const html = `<!DOCTYPE html><html><head><style>
      *{margin:0;padding:0} html,body{width:${w}px;height:${h}px;background:${BRAND_TEAL};
      display:flex;align-items:center;justify-content:center;overflow:hidden}
      svg{width:${iconSize}px;height:${iconSize}px;border-radius:${Math.round(iconSize*0.22)}px}
    </style></head><body>${iconSvg}</body></html>`;
    const tmpFile = path.join(__dirname, `_tmp-splash-${dir}.html`);
    fs.writeFileSync(tmpFile, html);
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('file://' + tmpFile.replace(/\\/g, '/'));
    const outPath = path.join(RES_DIR, dir, 'splash.png');
    await page.screenshot({ path: outPath });
    await page.close();
    fs.unlinkSync(tmpFile);
    console.log(`${dir}/splash.png (${w}x${h}) готов`);
  }

  await browser.close();
}

main();
