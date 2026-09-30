import type { Lang } from '../i18n/ui';

export interface BoardMember {
  name: string;
  role: Record<Lang, string>;
  /** Portret pătrat din public/images/membri/ (opțional; fără poză se afișează inițialele). */
  photo?: string;
}

export interface Board {
  year: string;
  members: BoardMember[];
}

// Board-ul Rotary Club Caransebeș (pagina Membrii activi).
export const clubBoard: Board = {
  year: '2026–2027',
  members: [
    { name: 'Mitică Apostu', role: { ro: 'Președinte', en: 'President' } },
    { name: 'Ciprian-Marian Mocanu', role: { ro: 'Vicepreședinte', en: 'Vice President' } },
    { name: 'Alexandru Frenț', role: { ro: 'Secretar', en: 'Secretary' } },
    { name: 'Cristian Havrileți-Smetana', role: { ro: 'Trezorier', en: 'Treasurer' } },
    { name: 'Călin Lazăr', role: { ro: 'Asistent Guvernator', en: 'Assistant Governor' } },
  ],
};

// Board-ul clubului Interact Caransebeș (pagina Interact).
export const interactBoard: Board = {
  year: '2026–2027',
  members: [
    { name: 'Razvan Lucian', role: { ro: 'Președinte', en: 'President' } },
    { name: 'Gabriel Albu', role: { ro: 'Secretar', en: 'Secretary' } },
    { name: 'Davide Stanescu', role: { ro: 'Vicepreședinte', en: 'Vice President' } },
    { name: 'Ruslana Valagiurgi', role: { ro: 'PR Manager', en: 'PR Manager' } },
    { name: 'Nicu Bosioc', role: { ro: 'Trezorier', en: 'Treasurer' } },
    { name: 'Albert Ioniță', role: { ro: 'Sergent', en: 'Sergeant-at-arms' } },
  ],
};

// Membrii activi, în ordinea în care apar pe site.
export const activeMembers: string[] = [
  'Almăjan Alina',
  'Arnăut Otilia',
  'Apostu Mitică',
  'Boba Ioan',
  'Clipa Cecilia',
  'Damian Florin',
  'Deteșan Alin Sever',
  'Franț Alexandra',
  'Frenț Alexandru',
  'Goagă Ionel',
  'Havrileți-Smetana Cristian',
  'Hrimiuc Corneliu',
  'Lazăr Călin',
  'Maftei Mariana',
  'Marin Șerban Petrișor',
  'Mocanu Ciprian-Marian',
  'Popescu Cristina',
  'Popescu Daniela',
  'Popescu Mihai Alexandru',
  'Rujan Nicoleta',
  'Tocuț Dan Laurențiu',
  'Văduva Aurel',
  'Zăt Ioan-Lucian',
];

// Foști președinți, cel mai recent an rotarian primul.
export const pastPresidents: { year: string; name: string }[] = [
  { year: '2025–2026', name: 'Călin Lazăr' },
  { year: '2024–2025', name: 'Pârvu Tania Elena' },
  { year: '2023–2024', name: 'Mocanu Ciprian-Marian' },
  { year: '2022–2023', name: 'Zăt Ioan-Lucian' },
  { year: '2021–2022', name: 'Popescu Daniela' },
  { year: '2020–2021', name: 'Perescu Elisabeta' },
  { year: '2019–2020', name: 'Lazăr Călin' },
  { year: '2018–2019', name: 'Alin Sever Deteșan' },
  { year: '2017–2018', name: 'Alina Almăjan' },
  { year: '2016–2017', name: 'Arin Ispaș' },
  { year: '2015–2016', name: 'Corina Pascotă / Cristian Havrileți-Smetana' },
  { year: '2014–2015', name: 'Cristian Havrileți-Smetana' },
  { year: '2013–2014', name: 'Renee Lidia Andronache' },
  { year: '2012–2013', name: 'Johannes Konstantin Müller' },
  { year: '2011–2012', name: 'Mariana Maftei' },
  { year: '2010–2011', name: 'Ionel Goagă' },
  { year: '2009–2010', name: 'Doru Petrică Dumitru' },
  { year: '2008–2009', name: 'Dan Laurențiu Tocut' },
  { year: '2007–2008', name: 'Nicolae Borcean' },
  { year: '2006–2007', name: 'Corina Pascotă' },
];
