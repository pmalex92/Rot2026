// Generează din logo-ul oficial: varianta pentru fundal închis, favicon-uri și imaginea Open Graph.
// Rulează din nou doar dacă se schimbă logo-ul: node scripts/generate-brand-assets.mjs
import sharp from 'sharp';

const SRC = 'public/images/logo-rotary-caransebes.png';
const OUT = 'public/images';
const NAVY = { r: 11, g: 47, b: 99, alpha: 1 };

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

// Blue wordmark pixels -> white; the gold wheel keeps its color.
const light = Buffer.from(data);
for (let i = 0; i < light.length; i += 4) {
  const [r, b, a] = [light[i], light[i + 2], light[i + 3]];
  if (a > 0 && b > r) {
    light[i] = light[i + 1] = light[i + 2] = 255;
  }
}
await sharp(light, { raw: info }).png().toFile(`${OUT}/logo-rotary-caransebes-light.png`);

// The wheel sits in the right part of the logo; find its bounding box from gold pixels.
let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * 4;
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    if (a > 128 && r > 200 && g > 120 && b < 100) {
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }
}
const size = Math.max(maxX - minX, maxY - minY) + 1;
const wheel = await sharp(SRC)
  .extract({ left: minX, top: minY, width: Math.min(size, info.width - minX), height: Math.min(size, info.height - minY) })
  .toBuffer();

for (const [name, px] of [['favicon-32.png', 32], ['favicon.png', 192], ['apple-touch-icon.png', 180]]) {
  await sharp(wheel).resize(px, px, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(`${OUT}/${name}`);
}

// 1200x630 share image: light logo centered on navy.
const ogLogo = await sharp(`${OUT}/logo-rotary-caransebes-light.png`).resize({ width: 820 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NAVY } })
  .composite([{ input: ogLogo, gravity: 'center' }])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-cover.jpg`);

console.log('Brand assets generated. Wheel box:', { minX, minY, size });
