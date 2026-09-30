// Sincronizează ultimele postări publice de pe pagina de Facebook a clubului
// folosind Graph API și le salvează local, în src/data/facebook-posts.json.
//
// Site-ul este static: acest script NU rulează live pe server, ci trebuie
// rulat înainte de fiecare build (manual, sau automat printr-un job
// programat — vezi README.md, secțiunea "Actualizarea știrilor").
//
// Necesită variabilele de mediu FB_PAGE_ID și FB_PAGE_ACCESS_TOKEN
// (poți folosi un fișier .env local — vezi .env.example).

import { writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'facebook-posts.json');
// Pozele se salvează local: link-urile de imagini de la Facebook expiră după câteva zile/săptămâni.
const IMAGE_DIR = join(__dirname, '..', 'public', 'images', 'stiri');
const IMAGE_URL = '/images/stiri';
const GRAPH_VERSION = process.env.FB_GRAPH_VERSION || 'v23.0';
const POST_LIMIT = 12;

const FB_PAGE_ID = process.env.FB_PAGE_ID;
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

const FIELDS = [
  'id',
  'message',
  'created_time',
  'permalink_url',
  'full_picture',
  'attachments{media_type,media,url,subattachments}',
].join(',');

async function main() {
  if (!FB_PAGE_ID || !FB_PAGE_ACCESS_TOKEN) {
    console.warn(
      '[sync-facebook] FB_PAGE_ID / FB_PAGE_ACCESS_TOKEN lipsesc din mediu.\n' +
        '[sync-facebook] Sar peste sincronizare — păstrez fișierul JSON existent (dacă există).\n' +
        '[sync-facebook] Vezi README.md > "Configurare Facebook" pentru cum obții aceste valori.'
    );
    return;
  }

  const url = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${FB_PAGE_ID}/posts`);
  url.searchParams.set('fields', FIELDS);
  url.searchParams.set('limit', String(POST_LIMIT));
  url.searchParams.set('access_token', FB_PAGE_ACCESS_TOKEN);

  const res = await fetch(url);
  const json = await res.json();

  if (!res.ok || json.error) {
    console.error('[sync-facebook] Graph API a răspuns cu o eroare:', json.error ?? res.statusText);
    process.exitCode = 1;
    return;
  }

  await mkdir(IMAGE_DIR, { recursive: true });
  const posts = [];
  for (const post of json.data ?? []) {
    const remoteImage = post.full_picture ?? post.attachments?.data?.[0]?.media?.image?.src ?? null;
    posts.push({
      id: post.id,
      message: post.message ?? '',
      createdTime: post.created_time,
      permalinkUrl: post.permalink_url,
      image: remoteImage ? await saveImage(post.id, remoteImage) : null,
    });
  }

  // Șterge pozele postărilor care nu mai sunt în listă.
  const keep = new Set(posts.map((p) => p.image?.split('/').pop()));
  for (const file of await readdir(IMAGE_DIR)) {
    if (!keep.has(file)) await rm(join(IMAGE_DIR, file));
  }

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(
    OUTPUT_PATH,
    JSON.stringify({ syncedAt: new Date().toISOString(), posts }, null, 2) + '\n',
    'utf-8'
  );

  console.log(`[sync-facebook] Salvate ${posts.length} postări în ${OUTPUT_PATH}`);
}

/** Descarcă poza unei postări și o salvează ca WebP de 800px; la eroare păstrează link-ul Facebook. */
async function saveImage(postId, remoteUrl) {
  const file = `${postId.replace(/[^\w-]/g, '_')}.webp`;
  try {
    const res = await fetch(remoteUrl);
    if (!res.ok) throw new Error(res.statusText);
    await sharp(Buffer.from(await res.arrayBuffer()))
      .rotate()
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(join(IMAGE_DIR, file));
    return `${IMAGE_URL}/${file}`;
  } catch (err) {
    console.warn(`[sync-facebook] Nu am putut salva poza postării ${postId}: ${err.message}`);
    return remoteUrl;
  }
}

main().catch((err) => {
  console.error('[sync-facebook] Eroare neașteptată:', err);
  process.exitCode = 1;
});
