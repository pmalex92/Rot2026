// Sincronizează ultimele postări publice de pe pagina de Facebook a clubului
// folosind Graph API și le salvează local, în src/data/facebook-posts.json.
//
// Site-ul este static: acest script NU rulează live pe server, ci trebuie
// rulat înainte de fiecare build (manual, sau automat printr-un job
// programat — vezi README.md, secțiunea "Actualizarea știrilor").
//
// Necesită variabilele de mediu FB_PAGE_ID și FB_PAGE_ACCESS_TOKEN
// (poți folosi un fișier .env local — vezi .env.example).

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'facebook-posts.json');
const GRAPH_VERSION = 'v21.0';
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

  const posts = (json.data ?? []).map((post) => ({
    id: post.id,
    message: post.message ?? '',
    createdTime: post.created_time,
    permalinkUrl: post.permalink_url,
    image: post.full_picture ?? post.attachments?.data?.[0]?.media?.image?.src ?? null,
  }));

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(
    OUTPUT_PATH,
    JSON.stringify({ syncedAt: new Date().toISOString(), posts }, null, 2) + '\n',
    'utf-8'
  );

  console.log(`[sync-facebook] Salvate ${posts.length} postări în ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('[sync-facebook] Eroare neașteptată:', err);
  process.exitCode = 1;
});
