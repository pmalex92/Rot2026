import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Builds a localized path: localePath('ro', '/proiecte') -> '/proiecte', localePath('en', '/proiecte') -> '/en/proiecte' */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Swaps the current path's locale prefix, preserving the rest of the path. */
export function switchLocalePath(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let path = url.pathname;
  if (currentLang !== defaultLang) {
    path = path.replace(`/${currentLang}`, '') || '/';
  }
  return localePath(targetLang, path);
}
