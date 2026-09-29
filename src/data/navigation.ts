export type NavItem = {
  key: string;
  href: string;
  children?: { key: string; href: string }[];
};

export const nav: NavItem[] = [
  { key: 'nav.acasa', href: '/' },
  {
    key: 'nav.despre',
    href: '/despre-noi',
    children: [
      { key: 'nav.despre.rotary', href: '/despre-noi' },
      { key: 'nav.despre.aniversare', href: '/despre-noi/20-de-ani' },
      { key: 'nav.despre.membri', href: '/despre-noi/membri-activi' },
      { key: 'nav.despre.fostiPresedinti', href: '/despre-noi/fosti-presedinti' },
      { key: 'nav.despre.interact', href: '/despre-noi/interact' },
    ],
  },
  { key: 'nav.fundatia', href: '/fundatia-rotary' },
  {
    key: 'nav.membership',
    href: '/membership',
    children: [
      { key: 'nav.membership.deCe', href: '/membership/de-ce-in-rotary' },
      { key: 'nav.membership.admitere', href: '/membership/admitere-in-club' },
      { key: 'nav.membership.test', href: '/membership/testul-celor-4-cai' },
      { key: 'nav.membership.cod', href: '/membership/codul-de-conduita' },
    ],
  },
  {
    key: 'nav.proiecte',
    href: '/proiecte',
    children: [
      { key: 'nav.proiecte.realizari', href: '/proiecte/realizari' },
      { key: 'nav.proiecte.actiuni', href: '/proiecte/actiuni' },
    ],
  },
  { key: 'nav.calendar', href: '/calendar' },
  { key: 'nav.stiri', href: '/stiri' },
  { key: 'nav.contact', href: '/contact' },
];

/** Rendered as a standalone highlighted button, not part of the main list. */
export const donateItem = { key: 'nav.doneaza', href: '/doneaza' };
