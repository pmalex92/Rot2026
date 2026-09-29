import { site } from '../data/site';
import { nav } from '../data/navigation';
import { ui, type Lang } from '../i18n/ui';
import { localePath } from '../i18n/utils';

export type JsonLd = Record<string, unknown>;

export const SITE_URL = 'https://rotaryclubcaransebes.ro';
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const abs = (path: string) => new URL(path, SITE_URL).href;

/** The club and the website, present on every page so search engines know who publishes it. */
export function siteGraph(lang: Lang): JsonLd[] {
  return [
    {
      '@type': 'NGO',
      '@id': ORG_ID,
      name: 'Rotary Club Caransebeș',
      alternateName: 'RC Caransebeș',
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: abs('/images/logo-rotary-caransebes.png'), width: 913, height: 302 },
      image: abs('/images/og-cover.jpg'),
      description:
        lang === 'ro'
          ? 'Club Rotary din Caransebeș, fondat în 2006: proiecte pentru educație, sănătate, comunitate, tineret și cultură.'
          : 'Rotary club in Caransebeș, Romania, founded in 2006: projects for education, health, community, youth and culture.',
      foundingDate: String(site.founded),
      email: site.email,
      taxID: site.bank.cif,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Caransebeș',
        addressRegion: 'Caraș-Severin',
        addressCountry: 'RO',
      },
      areaServed: { '@type': 'City', name: 'Caransebeș' },
      sameAs: [site.facebookUrl, site.instagramUrl],
      parentOrganization: { '@type': 'Organization', name: 'Rotary International', url: 'https://www.rotary.org/' },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Rotary Club Caransebeș',
      inLanguage: ['ro-RO', 'en-GB'],
      publisher: { '@id': ORG_ID },
    },
  ];
}

/**
 * Breadcrumb trail derived from the menu: Home › section › subsection, and the page itself
 * when it is not a menu entry (e.g. a single project).
 */
export function breadcrumbs(pathname: string, lang: Lang, pageName: string): JsonLd | undefined {
  const path = pathname.replace(/^\/en(?=\/|$)/, '').replace(/\/$/, '') || '/';
  if (path === '/') return undefined;
  const t = (key: string) => ui[lang][key as keyof (typeof ui)['ro']] ?? key;
  const crumbs: { name: string; path: string }[] = [{ name: t('nav.acasa'), path: '/' }];

  const section = nav.find((item) => item.href !== '/' && (path === item.href || path.startsWith(`${item.href}/`)));
  if (section) {
    crumbs.push({ name: t(section.key), path: section.href });
    const child = section.children?.find((c) => c.href !== section.href && (path === c.href || path.startsWith(`${c.href}/`)));
    if (child) crumbs.push({ name: t(child.key), path: child.href });
  }
  if (crumbs[crumbs.length - 1].path !== path) crumbs.push({ name: pageName, path });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(localePath(lang, c.path)),
    })),
  };
}

/** Serialises a JSON-LD graph for a <script> tag; `<` is escaped so content can never close the tag. */
export function jsonLdScript(graph: JsonLd[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
