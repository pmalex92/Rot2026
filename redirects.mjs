// Adresele vechiului site (WordPress) → paginile noi. Păstrează linkurile și poziția în Google.
// Dacă adaugi o linie aici, adaug-o și în deploy/nginx-redirects.conf (301 real pe server).
export const redirects = {
  '/rotary-caransebes': '/despre-noi/',
  '/presedinti': '/despre-noi/fosti-presedinti/',
  '/membrii': '/despre-noi/membri-activi/',
  '/de-ce-in-rotary/fundatia-rotary': '/fundatia-rotary/',
  '/de-ce-in-rotary/contact-us': '/contact/',
  '/de-ce-in-rotary': '/membership/de-ce-in-rotary/',
  '/admitere-in-club': '/membership/admitere-in-club/',
  '/testul-celor-4-cai': '/membership/testul-celor-4-cai/',
  '/codul-de-conduita': '/membership/codul-de-conduita/',
  '/category/proiecte': '/proiecte/',
  '/realizari': '/proiecte/realizari/',
  '/category/actiuni': '/proiecte/actiuni/',
};
