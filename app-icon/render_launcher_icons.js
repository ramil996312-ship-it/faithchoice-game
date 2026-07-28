// Рендерит реальную иконку игры в файлы Android launcher (заменяет заглушку Capacitor по умолчанию).
// Использование: node render_launcher_icons.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const RES_DIR = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

// dp-размер сам по себе не важен для растра — единственное, что имеет значение, это итоговый px
// на каждую плотность экрана (density bucket), см. официальную таблицу Android launcher icons.
const FOREGROUND_SIZES = { mdpi: 108, hdpi: 162, xhdpi: 216, xxhdpi: 324, xxxhdpi: 432 };
const LEGACY_SIZES = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };

async function renderOne(browser, svgPath, size, outPath, transparent) {
  const svgSource = fs.readFileSync(svgPath, 'utf8');
  const svg = svgSource.replace('viewBox="0 0 1024 1024">', `viewBox="0 0 1024 1024" width="${size}" height="${size}">`);
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0}${transparent ? 'html,body{background:transparent}' : ''}</style></head><body>${svg}</body></html>`;
  const tmpFile = path.join(__dirname, `_tmp-launcher-${size}-${transparent ? 't' : 'o'}.html`);
  fs.writeFileSync(tmpFile, html);
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  if (transparent) await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('file://' + tmpFile.replace(/\\/g, '/'));
  await page.screenshot({ path: outPath, omitBackground: !!transparent });
  await page.close();
  fs.unlinkSync(tmpFile);
}

async function main() {
  const browser = await chromium.launch({ executablePath: EDGE_PATH, headless: true });

  for (const [density, size] of Object.entries(FOREGROUND_SIZES)) {
    const outDir = path.join(RES_DIR, `mipmap-${density}`);
    await renderOne(browser, path.join(__dirname, 'icon-foreground-transparent.svg'), size, path.join(outDir, 'ic_launcher_foreground.png'), true);
    console.log(`ic_launcher_foreground.png (${density}, ${size}px) готов`);
  }

  for (const [density, size] of Object.entries(LEGACY_SIZES)) {
    const outDir = path.join(RES_DIR, `mipmap-${density}`);
    await renderOne(browser, path.join(__dirname, 'icon-source.svg'), size, path.join(outDir, 'ic_launcher.png'), false);
    await renderOne(browser, path.join(__dirname, 'icon-source.svg'), size, path.join(outDir, 'ic_launcher_round.png'), false);
    console.log(`ic_launcher.png / ic_launcher_round.png (${density}, ${size}px) готовы`);
  }

  await browser.close();
}

main();
