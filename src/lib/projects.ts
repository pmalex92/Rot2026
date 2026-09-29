import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Latest year mentioned in `period` ("2022–2025" -> 2025), used when there is no exact date. */
const periodYear = (period?: string) => {
  const years = period?.match(/\d{4}/g);
  return years ? Math.max(...years.map(Number)) : undefined;
};

const sortKey = (p: Project) => {
  if (p.data.date) return p.data.date.valueOf();
  const year = periodYear(p.data.period);
  return year ? Date.UTC(year, 0, 1) : -Infinity;
};

/** Published projects, newest first; `order` breaks ties within the same year. */
export async function getProjects(lang: Lang, category?: Project['data']['category']): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    (e) => e.data.lang === lang && !e.data.draft && (!category || e.data.category === category)
  );
  return entries.sort((a, b) => {
    const ka = sortKey(a);
    const kb = sortKey(b);
    if (ka !== kb) return kb - ka;
    return a.data.order - b.data.order;
  });
}

export const entrySlug = (id: string) => id.split('/').pop()!;

export const projectPath = (project: Project) => `/proiecte/${entrySlug(project.id)}`;

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Human-readable date for a project: the period if given, otherwise the exact date. */
export function projectWhen(project: Project, lang: Lang): string | undefined {
  if (project.data.period) return project.data.period;
  return project.data.date ? formatDate(project.data.date, lang) : undefined;
}
