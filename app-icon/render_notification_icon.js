const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

async function main() {
  const browser = await chromium.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: true });
  const svgSource = fs.readFileSync(path.join(__dirname, 'icon-notification-silhouette.svg'), 'utf8');
  const size = 96;
  const svg = svgSource.replace('viewBox="0 0 1024 1024">', `viewBox="0 0 1024 1024" width="${size}" height="${size}">`);
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0}html,body{background:transparent}</style></head><body>${svg}</body></html>`;
  const tmpFile = path.join(__dirname, '_tmp-notif.html');
  fs.writeFileSync(tmpFile, html);
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.goto('file://' + tmpFile.replace(/\\/g, '/'));
  const outPath = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res', 'drawable', 'ic_stat_faithchoice.png');
  await page.screenshot({ path: outPath, omitBackground: true });
  await page.close();
  fs.unlinkSync(tmpFile);
  await browser.close();
  console.log('ic_stat_faithchoice.png готов');
}

main();
