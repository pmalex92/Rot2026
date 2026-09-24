import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is used for sitemap.xml and canonical / Open Graph URLs.
export default defineConfig({
  site: 'https://rotaryclubcaransebes.ro',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ro',
        locales: { ro: 'ro-RO', en: 'en-GB' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
