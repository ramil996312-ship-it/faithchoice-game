// Генерация JWT для App Store Connect API (ES256), см. .appstore-connect-key.txt за ключами.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CONFIG_PATH = path.join(__dirname, '..', '.appstore-connect-key.txt');
const cfg = Object.fromEntries(
  fs.readFileSync(CONFIG_PATH, 'utf8').trim().split('\n').map(l => l.split('='))
);
const KEY_ID = cfg.KEY_ID;
const ISSUER_ID = cfg.ISSUER_ID;
const privateKey = fs.readFileSync(path.join(__dirname, '..', cfg.P8_FILE), 'utf8');

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Apple подписывает ES256 в raw r||s (JOSE), а Node crypto.sign выдаёт DER — конвертируем.
function derToJose(der) {
  let offset = 2;
  offset += der[1] > 0x80 ? der[1] - 0x80 + 1 : 0;
  function readInt() {
    let len = der[offset + 1];
    offset += 2;
    let bytes = der.slice(offset, offset + len);
    offset += len;
    bytes = bytes.filter((b, i) => !(i === 0 && b === 0 && bytes.length > 32));
    while (bytes.length < 32) bytes = Buffer.concat([Buffer.from([0]), bytes]);
    return bytes;
  }
  return Buffer.concat([readInt(), readInt()]);
}

function makeToken() {
  const header = { alg: 'ES256', kid: KEY_ID, typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = { iss: ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' };
  const signingInput = base64url(JSON.stringify(header)) + '.' + base64url(JSON.stringify(payload));
  const sign = crypto.createSign('SHA256');
  sign.update(signingInput);
  const joseSig = derToJose(sign.sign(privateKey));
  const sigB64url = joseSig.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return signingInput + '.' + sigB64url;
}

module.exports = { makeToken, APP_ID: '6807451930' };
