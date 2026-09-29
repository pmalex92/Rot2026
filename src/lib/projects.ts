import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Newest dated projects first, then undated ones by `order`. */
export async function getProjects(lang: Lang, category?: Project['data']['category']): Promise<Project[]> {
  const entries = await getCollection('projects', (e) => e.data.lang === lang && (!category || e.data.category === category));
  return entries.sort((a, b) => {
    const da = a.data.date?.valueOf() ?? -Infinity;
    const db = b.data.date?.valueOf() ?? -Infinity;
    return da === db ? a.data.order - b.data.order : db - da;
  });
}

export const entrySlug = (id: string) => id.split('/').pop()!;

export const projectPath = (project: Project) => `/proiecte/${entrySlug(project.id)}`;

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
