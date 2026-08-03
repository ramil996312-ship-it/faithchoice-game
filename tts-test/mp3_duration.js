// Pure-JS MP3 duration reader (no ffmpeg needed) — parses MPEG audio frame headers
// and sums each frame's sample count / sample rate. Handles CBR and VBR alike,
// skips a leading ID3v2 tag if present.
'use strict';
const fs = require('fs');

const BITRATES = {
  // [mpegVersion][layer] -> kbps table indexed by the 4-bit bitrate index (0=free, 15=bad)
  1: { 1: [0,32,64,96,128,160,192,224,256,288,320,352,384,416,448], 2: [0,32,48,56,64,80,96,112,128,160,192,224,256,320,384], 3: [0,32,40,48,56,64,80,96,112,128,160,192,224,256,320] },
  2: { 1: [0,32,48,56,64,80,96,112,128,144,160,176,192,224,256], 2: [0,8,16,24,32,40,48,56,64,80,96,112,128,144,160], 3: [0,8,16,24,32,40,48,56,64,80,96,112,128,144,160] },
};
const SAMPLERATES = {
  1: [44100, 48000, 32000],
  2: [22050, 24000, 16000],
  2.5: [11025, 12000, 8000],
};
const SAMPLES_PER_FRAME = { 1: { 1: 384, 2: 1152, 3: 1152 }, 2: { 1: 384, 2: 1152, 3: 576 } };

function skipId3v2(buf) {
  if (buf.length >= 10 && buf.toString('ascii', 0, 3) === 'ID3') {
    const size = ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
    return 10 + size;
  }
  return 0;
}

// Returns duration in seconds, or null if no valid frames found.
function mp3Duration(buf) {
  let pos = skipId3v2(buf);
  let totalSeconds = 0;
  let framesRead = 0;

  while (pos + 4 <= buf.length) {
    if (buf[pos] !== 0xff || (buf[pos + 1] & 0xe0) !== 0xe0) { pos++; continue; }

    const b1 = buf[pos + 1], b2 = buf[pos + 2];
    const versionBits = (b1 >> 3) & 0x03; // 00=2.5, 10=2, 11=1
    const layerBits = (b1 >> 1) & 0x03;   // 01=III, 10=II, 11=I
    if (versionBits === 1 || layerBits === 0) { pos++; continue; } // reserved

    const mpegVersion = versionBits === 3 ? 1 : (versionBits === 2 ? 2 : 2.5);
    const layer = layerBits === 3 ? 1 : (layerBits === 2 ? 2 : 3);
    const bitrateIndex = (b2 >> 4) & 0x0f;
    const sampleRateIndex = (b2 >> 2) & 0x03;
    const padding = (b2 >> 1) & 0x01;
    if (bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3) { pos++; continue; }

    const bitrateTable = BITRATES[mpegVersion === 2.5 ? 2 : mpegVersion][layer];
    const bitrate = bitrateTable[bitrateIndex] * 1000;
    const sampleRate = SAMPLERATES[mpegVersion][sampleRateIndex];
    const samplesPerFrame = SAMPLES_PER_FRAME[mpegVersion === 2.5 ? 2 : mpegVersion][layer];

    const frameSize = layer === 1
      ? (Math.floor((12 * bitrate / sampleRate) + padding) * 4)
      : Math.floor((samplesPerFrame / 8) * bitrate / sampleRate) + padding;

    if (frameSize <= 0) { pos++; continue; }

    totalSeconds += samplesPerFrame / sampleRate;
    framesRead++;
    pos += frameSize;
  }

  return framesRead > 0 ? totalSeconds : null;
}

function mp3DurationFile(path) {
  return mp3Duration(fs.readFileSync(path));
}

module.exports = { mp3Duration, mp3DurationFile };

if (require.main === module) {
  const path = process.argv[2];
  if (!path) { console.error('usage: node mp3_duration.js <file.mp3>'); process.exit(1); }
  const d = mp3DurationFile(path);
  console.log(d === null ? 'no valid MP3 frames found' : d.toFixed(2) + 's');
}
