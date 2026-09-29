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

## Actualizarea conținutului

Tot conținutul editabil este în fișiere Markdown, în `src/content/`. Fiecare intrare are o versiune `.ro.md` și una `.en.md`.

| Ce vrei să schimbi | Unde |
|---|---|
| Despre noi, Fundația Rotary, paginile Membership | `src/content/pages/` |
| Proiecte (Realizări / Acțiuni) | `src/content/projects/` — `category: realizare` sau `actiune` |
| Calendar | `src/content/events/` |
| Membrii activi / Foști președinți | `src/content/members/` — `type: activ` sau `fost-presedinte` |
| Galerie foto | `src/content/gallery/` + pozele în `public/images/galerie/` |
| Textele paginii principale (hero, Cine suntem, Ce facem, Misiunea, Implică-te) | `src/data/home.ts` |
| Email, întâlniri, date bancare, cifrele „Impactul nostru”, Facebook/Instagram, video-ul din hero (ID Vimeo) | `src/data/site.ts` |
| Textele din interfață (meniu, butoane, titluri) | `src/i18n/ui.ts` |

Pentru a adăuga, de exemplu, un proiect nou, copiază un fișier existent din `src/content/projects/`, schimbă-i numele și câmpurile din antet, apoi rulează `npm run build`.
Numele fișierului devine adresa paginii: `premiem-excelenta.ro.md` → `/proiecte/premiem-excelenta` (și `/en/proiecte/premiem-excelenta` pentru `.en.md`).
Proiectele cu `date` apar primele (cele mai noi întâi); cele fără dată sunt ordonate după `order`.
Pozele se pun în `public/images/...` și se referă cu calea `/images/...`.

> Fișierele numite `exemplu-*.md` și textele marcate „De completat” sunt conținut demonstrativ — înlocuiește-le cu informațiile reale ale clubului.

### Video-ul din hero

Pagina principală folosește ca fundal un video Vimeo (`heroVimeoId` în `src/data/site.ts`), în modul „background”: pornește automat, fără sunet, în buclă, și funcționează și pe telefoane.
Pentru vizitatorii care au activat „mișcare redusă” sau economisirea datelor, video-ul nu se încarcă și rămâne fundalul albastru.
În setările video-ului pe Vimeo, la *Privacy → Embed*, trebuie permisă încorporarea (oriunde sau cel puțin pe `rotaryclubcaransebes.ro` și `localhost`).

## Configurare Facebook (secțiunea Știri)

Știrile sunt preluate din pagina de Facebook prin Graph API **la momentul build-ului** și salvate în `src/data/facebook-posts.json`.
Fără configurare, build-ul funcționează în continuare și păstrează ultimele postări salvate.

1. Creează o aplicație pe [developers.facebook.com](https://developers.facebook.com/apps) (tip „Business”).
2. Din **Graph API Explorer**, cu un cont care este administrator al paginii clubului, generează un *User Token* cu permisiunile `pages_show_list`, `pages_read_engagement` și `pages_read_user_content`.
3. Transformă-l într-un token cu durată lungă, apoi obține *Page Access Token*-ul paginii (`GET /me/accounts`). Page token-urile obținute dintr-un user token de lungă durată nu expiră cât timp nu se schimbă parola / permisiunile.
4. Copiază `.env.example` în `.env` și completează:
   ```
   FB_PAGE_ID=...
   FB_PAGE_ACCESS_TOKEN=...
   ```
5. `npm run sync-news` (sau direct `npm run build`).

Fișierul `.env` nu se urcă niciodată în git sau pe server.

## Actualizarea știrilor

Site-ul fiind static, știrile noi apar după un nou build + upload.
Variante:

- **Manual:** `npm run build` și urci din nou `dist/`.
- **Automat (ulterior):** un job GitHub Actions programat (ex. la 6 ore) care rulează build-ul și urcă `dist/` prin FTP/SFTP. Necesită doar datele FTP ale hosting-ului ca *secrets* în GitHub.

## Identitate vizuală

- Logo original: `public/images/logo-rotary-caransebes.png`
- Variantele derivate (logo pentru fundal închis, favicon-uri, imaginea de share `og-cover.jpg`) se regenerează cu:
  ```bash
  node scripts/generate-brand-assets.mjs
  ```
- Culorile și fonturile sunt definite în `src/styles/global.css` (blocul `@theme`).
