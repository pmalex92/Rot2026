import raw from '../data/facebook-posts.json';
import type { Lang } from '../i18n/ui';

export interface FacebookPost {
  id: string;
  message: string;
  createdTime: string;
  permalinkUrl: string;
  image: string | null;
}

export interface FacebookFeed {
  syncedAt: string | null;
  posts: FacebookPost[];
}

const feed = raw as FacebookFeed;
// Posts without text (shares from other pages, reels without a caption) would show up as empty cards.
const posts = feed.posts.filter((post) => post.message.trim());

export function getFacebookPosts(limit?: number): FacebookPost[] {
  return typeof limit === 'number' ? posts.slice(0, limit) : posts;
}

export function getFacebookSyncedAt(): string | null {
  return feed.syncedAt;
}

/** Splits a post into paragraphs the way Facebook shows it: blank lines separate paragraphs. */
export function paragraphs(message: string): string[] {
  return message
    .replace(/\r\n?/g, '\n')
    .split(/\n[ \t]*\n+/)
    .map((p) => p.replace(/[ \t]+\n/g, '\n').trim())
    .filter(Boolean);
}

/** Splits text into plain parts and links, so URLs in a post stay clickable (no raw HTML involved). */
export function linkParts(text: string): { text: string; href?: string }[] {
  return text
    .split(/(https?:\/\/[^\s]*[^\s.,;:!?)\]])/g)
    .filter(Boolean)
    .map((part) => (/^https?:\/\//.test(part) ? { text: part.replace(/^https?:\/\/(www\.)?/, ''), href: part } : { text: part }));
}

export function formatPostDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
