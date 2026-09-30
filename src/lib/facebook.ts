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

export function excerpt(message: string, maxLength = 220): string {
  if (message.length <= maxLength) return message;
  return message.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

export function formatPostDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
