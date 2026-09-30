// Obține, o singură dată, token-ul permanent al paginii de Facebook și îl scrie în .env.
//
// Rulează `npm run fb-token` din folderul proiectului; scriptul cere:
//   App ID și App Secret  (developers.facebook.com > aplicația ta > App settings > Basic)
//   token-ul scurt        (Graph API Explorer)
// (sau le citește din .env ca FB_APP_ID / FB_APP_SECRET / FB_USER_TOKEN, dacă există acolo).
//
// Scriptul schimbă token-ul scurt într-unul de lungă durată, găsește pagina clubului,
// scrie FB_PAGE_ID și FB_PAGE_ACCESS_TOKEN în .env și verifică dacă token-ul expiră.
// Secretul aplicației și token-ul scurt nu se salvează nicăieri.

import { chmod, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';

const ENV_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', '.env');
const GRAPH = `https://graph.facebook.com/${process.env.FB_GRAPH_VERSION || 'v26.0'}`;
const { FB_PAGE_ID } = process.env;
let { FB_APP_ID, FB_APP_SECRET, FB_USER_TOKEN } = process.env;

const mask = (token) => `${token.slice(0, 6)}…${token.slice(-4)}`;

async function graph(path, params) {
  const url = new URL(`${GRAPH}${path}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(json.error?.message ?? res.statusText);
  return json;
}

/** Sets KEY=value in .env, replacing an existing line or appending one. */
async function setEnv(values) {
  let env = '';
  try {
    env = await readFile(ENV_PATH, 'utf-8');
  } catch {}
  for (const [key, value] of Object.entries(values)) {
    const line = `${key}=${value}`;
    const pattern = new RegExp(`^${key}=.*$`, 'm');
    env = pattern.test(env) ? env.replace(pattern, line) : `${env.replace(/\n?$/, '\n')}${line}\n`;
  }
  await writeFile(ENV_PATH, env, 'utf-8');
  await chmod(ENV_PATH, 0o600);
}

/** Asks for whatever is not already in .env. */
async function askMissing() {
  if (FB_APP_ID && FB_APP_SECRET && FB_USER_TOKEN) return;
  const rl = createInterface({ input: process.stdin });
  const lines = rl[Symbol.asyncIterator]();
  const ask = async (label) => {
    process.stdout.write(label);
    const { value = '' } = await lines.next();
    return value.trim();
  };
  if (!FB_APP_ID) FB_APP_ID = await ask('App ID: ');
  if (!FB_APP_SECRET) FB_APP_SECRET = await ask('App Secret: ');
  if (!FB_USER_TOKEN) FB_USER_TOKEN = await ask('Token din Graph API Explorer: ');
  rl.close();
}

async function main() {
  await askMissing();
  if (!FB_APP_ID || !FB_APP_SECRET || !FB_USER_TOKEN) {
    console.error('[fb-token] Lipsesc App ID, App Secret sau token-ul (vezi README.md > „Configurare Facebook”).');
    process.exitCode = 1;
    return;
  }

  const { access_token: longUserToken } = await graph('/oauth/access_token', {
    grant_type: 'fb_exchange_token',
    client_id: FB_APP_ID,
    client_secret: FB_APP_SECRET,
    fb_exchange_token: FB_USER_TOKEN,
  });
  console.log('[fb-token] Token de utilizator de lungă durată obținut.');

  const { data: pages = [] } = await graph('/me/accounts', { fields: 'id,name,access_token', access_token: longUserToken });
  if (pages.length === 0) {
    console.error('[fb-token] Contul nu administrează nicio pagină sau token-ul nu are permisiunea pages_show_list.');
    process.exitCode = 1;
    return;
  }

  const page =
    pages.find((p) => p.id === FB_PAGE_ID) ??
    (pages.length === 1 ? pages[0] : pages.find((p) => /rotary/i.test(p.name) && /caransebe/i.test(p.name)));
  if (!page) {
    console.error('[fb-token] Nu știu ce pagină să aleg. Pune FB_PAGE_ID=<id> în .env și rulează din nou:');
    for (const p of pages) console.error(`  ${p.id}  ${p.name}`);
    process.exitCode = 1;
    return;
  }

  const { data: info } = await graph('/debug_token', {
    input_token: page.access_token,
    access_token: `${FB_APP_ID}|${FB_APP_SECRET}`,
  });
  const expires = info.expires_at ? new Date(info.expires_at * 1000).toLocaleString('ro-RO') : 'niciodată';

  // Only the page credentials stay on disk; the app secret and short token are cleared if they were in .env.
  await setEnv({ FB_PAGE_ID: page.id, FB_PAGE_ACCESS_TOKEN: page.access_token, FB_APP_SECRET: '', FB_USER_TOKEN: '' });
  console.log(`[fb-token] Pagina: ${page.name} (${page.id})`);
  console.log(`[fb-token] Token-ul paginii ${mask(page.access_token)} a fost salvat în .env. Expiră: ${expires}.`);
  console.log('[fb-token] Gata. Test: npm run sync-news');
}

main().catch((err) => {
  console.error('[fb-token] Eroare:', err.message);
  process.exitCode = 1;
});
