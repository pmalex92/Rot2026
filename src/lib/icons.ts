// 24x24 stroke icons (currentColor), rendered by components/Icon.astro.
export const icons = {
  education: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
  health:
    '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/><path d="M3.5 12H9l1.5-3 3 6 1.5-3h5.5"/>',
  community:
    '<circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.85"/>',
  youth: '<path d="M7 20h10"/><path d="M12 20v-9"/><path d="M12 11C12 7.5 9.5 5 5 5c0 4 2.5 6 7 6z"/><path d="M12 13c0-3 2-5.5 6-5.5 0 3.5-2 5.5-6 5.5z"/>',
  culture: '<path d="M3 21h18"/><path d="M5 21V11"/><path d="M9.5 21V11"/><path d="M14.5 21V11"/><path d="M19 21V11"/><path d="M12 3 3 8v1h18V8z"/>',
  relations: '<path d="M9 7H7a5 5 0 0 0 0 10h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/>',
  environment:
    '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.2-6.1 2.5-.5 5-2 6.8-3.9"/>',
  development: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  diversity: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
  leaders: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  ethics: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  peace: '<path d="M12 21s-7-4.4-7-10V5l7-2 7 2v6c0 5.6-7 10-7 10z"/><path d="M8.5 11.5c1.2-1.8 2.5-2.5 3.5-2.5s2.3.7 3.5 2.5"/><path d="M12 9V6.5"/>',
  disease: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8"/><path d="M8 12h8"/>',
  water: '<path d="M12 2.5s6 6.6 6 11.5a6 6 0 0 1-12 0c0-4.9 6-11.5 6-11.5z"/><path d="M9 14.5a3 3 0 0 0 3 3"/>',
  maternal: '<circle cx="9" cy="5" r="2.5"/><path d="M5 21v-6a4 4 0 0 1 8 0"/><circle cx="16.5" cy="11.5" r="2"/><path d="M13.5 21v-3a3 3 0 0 1 6 0v3"/>',
  economy: '<path d="M3 21h18"/><path d="M6 17v-4"/><path d="M11 17V9"/><path d="M16 17v-6"/><path d="m4 9 5-4 4 3 7-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  facebook: '<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l1-4h-4V7.5a1 1 0 0 1 1-1h2z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
} as const;

export type IconName = keyof typeof icons;
