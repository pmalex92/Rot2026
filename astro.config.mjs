import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is used for sitemap.xml and canonical / Open Graph URLs.
export default defineConfig({
  site: 'https://rotaryclubcaransebes.ro',
  // Pages are served as folders (/doneaza/index.html); linking with the slash avoids a redirect on every click.
  trailingSlash: 'always',
  // Load the next page in the background as soon as a link is hovered or focused.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
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
