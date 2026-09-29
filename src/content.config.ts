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
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    lang,
    title: z.string(),
    category: z.enum(['realizare', 'actiune']),
    date: z.coerce.date().optional(),
    order: z.number().default(0), // tie-breaker for entries without a date (lower first)
    image: z.string().optional(),
    excerpt: z.string().optional(),
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

const members = defineCollection({
  loader: md('members'),
  schema: z.object({
    lang,
    type: z.enum(['activ', 'fost-presedinte']),
    name: z.string(),
    role: z.string().optional(),
    years: z.string().optional(), // e.g. "2018-2019", only for past presidents
    order: z.number().default(0),
    photo: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: md('gallery'),
  schema: z.object({
    lang,
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
  }),
});

export const collections = { pages, projects, events, members, gallery };
