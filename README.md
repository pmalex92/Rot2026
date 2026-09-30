# Rotary Club Caransebeș — site

Site static, bilingv (RO/EN), optimizat pentru mobil, construit cu [Astro](https://astro.build) și Tailwind CSS.
Rezultatul build-ului este un folder de fișiere HTML/CSS/JS (`dist/`) care poate fi urcat pe orice hosting.

## Pornire rapidă

Necesită **Node.js 22+**.

```bash
npm install
npm run dev        # server local pe http://localhost:4321
npm run build      # sincronizează știrile din Facebook + generează site-ul în dist/
npm run preview    # previzualizează build-ul final
```

## Publicare pe server

1. `npm run build`
2. Urcă **conținutul** folderului `dist/` în rădăcina site-ului (ex. `public_html/`) prin FTP/SFTP.

Nu este nevoie de PHP, Node sau bază de date pe server.

### Setări recomandate pe server (viteză + SEO)

Toate linkurile interne se termină cu `/` (ex. `/doneaza/`), exact cum sunt servite paginile, deci nu apare niciun redirect la click. Pe un VPS cu **nginx**:

```nginx
server {
    server_name rotaryclubcaransebes.ro;
    root /var/www/rotaryclubcaransebes.ro;   # conținutul lui dist/

    # www → fără www (o singură adresă canonică pentru Google)
    # (bloc separat: server_name www.rotaryclubcaransebes.ro; return 301 https://rotaryclubcaransebes.ro$request_uri;)

    error_page 404 /404.html;
    location / { try_files $uri $uri/ =404; }

    # Fișierele din /_astro/ au hash în nume → pot fi ținute în cache un an.
    location /_astro/ { expires 1y; add_header Cache-Control "public, immutable"; }
    location /images/ { expires 30d; }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml application/xml;
}
```

**Redirecturi de la vechiul site:** lista e în `redirects.mjs` (site-ul generează pagini de rezervă care redirecționează). Pentru un 301 real, adaugă în blocul `server` din nginx `include /calea/proiectului/deploy/nginx-redirects.conf;` și dă reload la nginx. Când adaugi un redirect nou, pune-l în ambele fișiere.

Pe Apache (`.htaccess`) echivalentul minim este `ErrorDocument 404 /404.html`.

După publicare, adaugă site-ul în **Google Search Console** și trimite `https://rotaryclubcaransebes.ro/sitemap-index.xml`. `robots.txt` indică deja sitemap-ul.

### SEO

- Titlul, descrierea și imaginea de share ale fiecărei pagini vin din frontmatter (`title`, `description`, `image`/`shareImage`).
- Datele structurate (Organizație, breadcrumbs, articole de proiect, FAQ și acțiunea de donație) se generează automat — vezi `src/lib/seo.ts`.
- Textele paginii **Donează** (titlu SEO, pași, întrebări frecvente) se editează în `src/data/donate.ts`.

## Actualizarea conținutului

Tot conținutul editabil este în fișiere Markdown, în `src/content/`. Fiecare intrare are o versiune `.ro.md` și una `.en.md`.

| Ce vrei să schimbi | Unde |
|---|---|
| Despre noi, Fundația Rotary, paginile Membership | `src/content/pages/` |
| Proiecte (Realizări / Acțiuni) | `src/content/projects/` — `category: realizare` sau `actiune` |
| Calendar | `src/content/events/` |
| Membrii activi / Foști președinți | `src/data/members.ts` |
| Pagina „20 de ani” (cronologie, cifre) | `src/data/history.ts` + pozele în `public/images/istoric/` |
| Textele paginii principale (hero, Cine suntem, Ce facem, Misiunea, Implică-te) | `src/data/home.ts` |
| Email, întâlniri, date bancare, cifrele „Impactul nostru”, Facebook/Instagram, video-ul din hero (ID Vimeo) | `src/data/site.ts` |
| Textele din interfață (meniu, butoane, titluri) | `src/i18n/ui.ts` |

Pentru a adăuga, de exemplu, un proiect nou, copiază un fișier existent din `src/content/projects/`, schimbă-i numele și câmpurile din antet, apoi rulează `npm run build`.
Numele fișierului devine adresa paginii: `premiem-excelenta.ro.md` → `/proiecte/premiem-excelenta` (și `/en/proiecte/premiem-excelenta` pentru `.en.md`).
Câmpuri utile în antetul unui proiect:

- `date: 2024-02-23` (data exactă) sau `period: "2022–2025"` (afișat în locul datei) — proiectele cele mai recente apar primele; `order` departajează proiectele din același an;
- `image` — fotografie mare (cel puțin ~1200px lățime), afișată pe tot cardul;
- `thumb` — fotografie mică, afișată ca medalion când nu există una mare;
- `draft: true` — proiectul nu apare pe site până nu e completat.
Pozele se pun în `public/images/...` și se referă cu calea `/images/...`.

> Fișierele numite `exemplu-*.md` și textele marcate „De completat” sunt conținut demonstrativ — înlocuiește-le cu informațiile reale ale clubului.

### Video-ul din hero

Pagina principală folosește ca fundal un video Vimeo (`heroVimeoId` în `src/data/site.ts`), în modul „background”: pornește automat, fără sunet, în buclă, și funcționează și pe telefoane. Un buton discret în colțul din dreapta-jos permite oprirea lui.
Până pornește video-ul (sau dacă nu poate porni), se vede ilustrația Caransebeșului de pe coperta broșurii aniversare.

Dacă video-ul nu apare:

- în setările video-ului pe Vimeo, la *Privacy → Embed*, încorporarea trebuie permisă (oriunde, sau cel puțin pe `rotaryclubcaransebes.ro` și `localhost`);
- modul „background” (fără butoane, în buclă) poate necesita un cont Vimeo plătit — verifică în contul Vimeo dacă opțiunile de încorporare permit redarea automată fără controale;
- pe iPhone, în modul *Low Power*, iOS blochează redarea automată a oricărui video — se vede doar ilustrația;
- în browser, consola (F12) afișează un mesaj `[hero video]` dacă player-ul Vimeo raportează o eroare.

## Configurare Facebook (secțiunea Știri)

Știrile sunt preluate din pagina de Facebook prin Graph API **la momentul build-ului** și salvate în `src/data/facebook-posts.json`; pozele postărilor se descarcă în `public/images/stiri/` (link-urile de la Facebook expiră).
Fără configurare, build-ul funcționează în continuare și păstrează ultimele postări salvate.

Ai nevoie de un cont de Facebook care este **administrator al paginii** clubului. Pașii se fac o singură dată:

1. **Aplicația.** Pe [developers.facebook.com/apps](https://developers.facebook.com/apps) → *Create app* → cazul de utilizare „Other” → tip **Business**. Nume: ex. „Site Rotary Caransebeș”. Aplicația poate rămâne în modul *Development*: citește doar pagina ta, deci nu are nevoie de aprobare (App Review).
2. **ID-ul și secretul aplicației.** În aplicație: *App settings → Basic* → copiază **App ID** și **App Secret**.
3. **Token-ul scurt.** Deschide [Graph API Explorer](https://developers.facebook.com/tools/explorer/), alege aplicația ta sus-dreapta, la *User or Page* lasă „User Token”, adaugă permisiunile `pages_show_list` și `pages_read_engagement` → *Generate Access Token* → autorizează pagina clubului → copiază token-ul.
4. **În folderul proiectului** (pe calculator sau direct pe VPS) rulează `npm run fb-token`. Scriptul îți cere App ID, App Secret și token-ul scurt, îl schimbă într-unul permanent, găsește pagina clubului și scrie în `.env` doar `FB_PAGE_ID` și `FB_PAGE_ACCESS_TOKEN` (trebuie să afișeze „Expiră: niciodată”). Secretul aplicației nu se salvează.
5. Test: `npm run sync-news` → „Salvate N postări…”. Apoi `npm run build` (pe VPS: `scripts/update-site.sh`).

Token-ul paginii rămâne valabil până când administratorul își schimbă parola, iese din rolul de admin al paginii sau șterge aplicația; atunci repeți pașii 3–5.

Fișierul `.env` nu se urcă niciodată în git. Pe VPS îl creezi manual, în folderul proiectului.

## Actualizarea știrilor (automat, pe VPS)

Site-ul fiind static, postările noi apar după un nou build. Pe VPS, `scripts/update-site.sh` face totul: ia ultima versiune din git, preia postările, construiește site-ul și îl copiază în folderul servit de nginx.

O singură dată, pe server (necesită Node.js 22+, git și rsync):

```bash
git clone https://github.com/pmalex92/Rot2026.git ~/rotary-site   # repo privat → folosește un deploy key
cd ~/rotary-site && nano .env                                      # FB_PAGE_ID și FB_PAGE_ACCESS_TOKEN
WEB_ROOT=/var/www/rotaryclubcaransebes.ro ./scripts/update-site.sh # prima rulare
```

Apoi `crontab -e` și adaugă (rulează la fiecare 3 ore):

```
0 */3 * * * WEB_ROOT=/var/www/rotaryclubcaransebes.ro $HOME/rotary-site/scripts/update-site.sh >> $HOME/rotary-site/update.log 2>&1
```

Același script publică și orice modificare de conținut făcută în git (proiecte, membri, texte). Dacă Facebook răspunde cu eroare, build-ul se oprește și rămâne online versiunea anterioară a site-ului; motivul apare în `update.log`.

Manual, fără VPS: `npm run build` local și urci din nou conținutul lui `dist/`.

## Identitate vizuală

- Logo original: `public/images/logo-rotary-caransebes.png`
- Variantele derivate (logo pentru fundal închis, favicon-uri, imaginea de share `og-cover.jpg`) se regenerează cu:
  ```bash
  node scripts/generate-brand-assets.mjs
  ```
- Roata Rotary folosită decorativ: `public/images/rotary-wheel.svg` (aplicată ca mască, deci ia culoarea textului din jur — componenta `RotaryWheel.astro`).
- Culorile și fonturile sunt definite în `src/styles/global.css` (blocul `@theme`).
