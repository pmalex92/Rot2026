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

/** Adds the trailing slash pages are served with, keeping any #hash or ?query: '/proiecte#x' -> '/proiecte/#x'. */
export function withSlash(path: string): string {
  const match = path.match(/^([^?#]*)(.*)$/)!;
  const pathname = match[1].endsWith('/') ? match[1] : `${match[1]}/`;
  return pathname + match[2];
}

/** Builds a localized path: localePath('ro', '/proiecte') -> '/proiecte/', localePath('en', '/proiecte') -> '/en/proiecte/' */
export function localePath(lang: Lang, path: string): string {
  const clean = withSlash(path.startsWith('/') ? path : `/${path}`);
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Swaps the current path's locale prefix, preserving the rest of the path. */
export function switchLocalePath(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let path = url.pathname;
  if (currentLang !== defaultLang) {
    path = path.slice(currentLang.length + 1) || '/';
  }
  return localePath(targetLang, path);
}
