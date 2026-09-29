import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lang = z.enum(['ro', 'en']);
// Files are named `<slug>.<lang>.md`; ids become `<lang>/<slug>` so both translations can share a slug.
const md = (dir: string) =>
  glob({
    pattern: '**/*.md',
    base: `./src/content/${dir}`,
    generateId: ({ entry }) => {
      const match = entry.match(/^(.+)\.(ro|en)\.md$/);
      return match ? `${match[2]}/${match[1]}` : entry.replace(/\.md$/, '');
    },
  });

const pages = defineCollection({
  loader: md('pages'),
  schema: z.object({
    lang,
    path: z.string(), // URL path without leading slash and without /en prefix, e.g. "membership/admitere-in-club"
    title: z.string(),
    description: z.string(),
    board: z.enum(['interact']).optional(), // shows the current board cards under the page header
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    lang,
    title: z.string(),
    category: z.enum(['realizare', 'actiune']),
    date: z.coerce.date().optional(),
    period: z.string().optional(), // shown instead of the date, e.g. "2024" or "2022–2025"
    order: z.number().default(0), // tie-breaker within the same year (lower first)
    image: z.string().optional(), // large photo (at least ~1200px wide)
    thumb: z.string().optional(), // small photo, shown as a medallion when there is no large one
    excerpt: z.string().optional(),
    draft: z.boolean().default(false), // hidden from the site until completed
    cta: z.enum(['donate']).optional(), // shows a "support this project" box at the end of the page
    shareImage: z.string().optional(), // JPG/PNG used when the page is shared on social media
  }),
});

const events = defineCollection({
  loader: md('events'),
  schema: z.object({
    lang,
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { pages, projects, events };
