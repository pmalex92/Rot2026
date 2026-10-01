// Pregătește pozele membrilor pentru site.
//
// Pune portretele în photos/profile/, cu numele persoanei în numele fișierului
// (ex. „mitica apostu profil.webp”, „calin lazar.jpg”). Scriptul le decupează pătrat
// (păstrând fața, din partea de sus a portretului), le micșorează la 480px WebP în
// public/images/membri/ și scrie lista în src/data/member-photos.json. Potrivirea cu
// numele membrilor se face în src/data/members.ts. Rulează automat la `npm run build`.

import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = join(root, 'photos', 'profile');
const OUT_DIR = join(root, 'public', 'images', 'membri');
const LIST_PATH = join(root, 'src', 'data', 'member-photos.json');
const SIZE = 480;

/** „Dan Laurențiu Tocuț profil.jpg” → „dan laurentiu tocut” */
const nameFromFile = (file) =>
  file
    .slice(0, -extname(file).length)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\bprofil(e)?\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

async function main() {
  let files = [];
  try {
    files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png|webp|avif|heic)$/i.test(f));
  } catch {}
  await mkdir(OUT_DIR, { recursive: true });

  const list = [];
  for (const file of files.sort()) {
    const name = nameFromFile(file);
    const src = join(SRC_DIR, file);
    // The content hash in the name makes browsers and Cloudflare fetch a replaced photo right away.
    const hash = createHash('sha1').update(await readFile(src)).digest('hex').slice(0, 8);
    const out = `${name.replace(/ /g, '-')}-${hash}.webp`;
    const dest = join(OUT_DIR, out);
    const exists = await stat(dest).then(() => true, () => false);
    if (!exists) {
      const image = sharp(src).rotate();
      const { width, height } = await image.metadata();
      const side = Math.min(width, height);
      // Portraits: keep the upper part, where the face is.
      const top = Math.round(Math.max(0, (height - side) * 0.15));
      await image
        .extract({ left: Math.round((width - side) / 2), top, width: side, height: side })
        .resize(SIZE, SIZE, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(dest);
    }
    list.push({ name, src: `/images/membri/${out}` });
  }

  const keep = new Set(list.map((p) => p.src.split('/').pop()));
  for (const file of await readdir(OUT_DIR)) if (!keep.has(file)) await rm(join(OUT_DIR, file));

  await writeFile(LIST_PATH, JSON.stringify(list, null, 2) + '\n', 'utf-8');
  console.log(`[member-photos] ${list.length} poze pregătite în public/images/membri/`);
}

main().catch((err) => {
  console.error('[member-photos] Eroare:', err);
  process.exitCode = 1;
});
