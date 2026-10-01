import type { IconName } from '../lib/icons';
import type { Lang } from '../i18n/ui';

type Feature = { icon: IconName; title: string; text: string };
/** `image` (din public/images/icons/) înlocuiește iconița desenată, dacă există. */
type Area = Feature & { image?: string };

interface HomeContent {
  hero: { eyebrow: string; title: string; since: string; text: string; ctaSupport: string; ctaJoin: string; scroll: string; pauseVideo: string; playVideo: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; cta: string };
  domains: { eyebrow: string; title: string; intro: string; items: Area[] };
  impact: { eyebrow: string; title: string; labels: { years: string; projects: string; projectValueEur: string; beneficiaries: string; partners: string; areas: string } };
  mission: { eyebrow: string; title: string; paragraphs: string[]; values: Feature[] };
  projects: { eyebrow: string; title: string; intro: string; readMore: string; all: string };
  join: { eyebrow: string; title: string; text: string; meetings: string; map: string; ctaSupport: string; ctaJoin: string };
}

export const home: Record<Lang, HomeContent> = {
  ro: {
    hero: {
      eyebrow: 'Service above self',
      title: 'În slujba Caransebeșului',
      since: 'din 2006',
      text: 'Suntem oameni de acțiune care cred în puterea comunității și în impactul fiecărui gest bine făcut.',
      ctaSupport: 'Susține un proiect',
      ctaJoin: 'Devino membru',
      scroll: 'Descoperă mai mult',
      pauseVideo: 'Oprește video-ul',
      playVideo: 'Pornește video-ul',
    },
    about: {
      eyebrow: 'Cine suntem',
      title: 'Oameni de acțiune pentru Caransebeș',
      paragraphs: [
        'Rotary Club Caransebeș reunește profesioniști și lideri locali care aleg să își dedice timpul, energia și resursele pentru a crea schimbări reale în comunitatea noastră.',
        'Prin proiecte sustenabile, parteneriate solide și implicare constantă, aducem speranță, educație și sprijin acolo unde este cea mai mare nevoie.',
      ],
      cta: 'Află mai multe',
    },
    domains: {
      eyebrow: 'Ce facem',
      title: 'Domeniile Rotary de implicare',
      intro: 'Intervenim strategic acolo unde comunitatea are nevoie de stabilitate, dezvoltare și continuitate.',
      items: [
        { icon: 'peace', image: '/images/icons/arii-pace.webp', title: 'Consolidarea păcii și prevenirea conflictelor', text: 'Promovăm dialogul, toleranța și înțelegerea, formând tineri care construiesc punți între oameni și comunități.' },
        { icon: 'disease', image: '/images/icons/arii-sanatate.webp', title: 'Prevenirea și tratarea bolilor', text: 'Susținem prevenția, depistarea și accesul la tratament, inclusiv eradicarea poliomielitei, prioritatea globală Rotary.' },
        { icon: 'water', image: '/images/icons/arii-apa.webp', title: 'Apă, sanitație și igienă', text: 'Sprijinim accesul la apă curată, condiții sanitare decente și educația pentru igienă în școli și comunități.' },
        { icon: 'maternal', image: '/images/icons/arii-maternal.webp', title: 'Sănătatea mamei și a copilului', text: 'Contribuim la îngrijiri de calitate pentru mame și copii, prin dotări medicale, prevenție și educație pentru sănătate.' },
        { icon: 'education', image: '/images/icons/arii-educatie.webp', title: 'Educație de bază și alfabetizare', text: 'Investim în burse, dotări pentru școli și programe care oferă fiecărui copil șansa la o educație de calitate.' },
        { icon: 'economy', image: '/images/icons/arii-comunitate.webp', title: 'Dezvoltare economică a comunității', text: 'Încurajăm antreprenoriatul, formarea profesională și inițiativele care creează oportunități pentru oamenii locului.' },
        { icon: 'environment', image: '/images/icons/arii-mediu.webp', title: 'Mediu', text: 'Susținem proiecte de protejare a naturii, ecologizare și folosire responsabilă a resurselor.' },
      ],
    },
    impact: {
      eyebrow: 'Impactul nostru',
      title: 'Rezultate care contează',
      labels: {
        years: 'ani de activitate în comunitate',
        projects: 'proiecte implementate',
        projectValueEur: 'valoarea proiectelor derulate',
        beneficiaries: 'beneficiari direcți',
        partners: 'parteneri și sponsori',
        areas: 'arii de acțiune Rotary acoperite',
      },
    },
    mission: {
      eyebrow: 'Misiunea Rotary Caransebeș',
      title: 'Misiunea noastră',
      paragraphs: [
        'Misiunea Rotary este să creeze schimbare durabilă – la nivel local, național și global – prin proiecte care sprijină educația, sănătatea, mediul înconjurător, tinerii și valorile etice.',
        'În Caransebeș, punem accent pe dezvoltarea comunității, susținerea tinerilor și mediul înconjurător.',
      ],
      values: [
        { icon: 'relations', title: 'Consolidarea relațiilor', text: 'Construim prietenii și parteneriate bazate pe încredere și respect.' },
        { icon: 'environment', title: 'Mediu înconjurător', text: 'Promovăm proiecte care protejează mediul și resursele naturale.' },
        { icon: 'development', title: 'Dezvoltarea comunității', text: 'Susținem proiecte care aduc beneficii reale comunității.' },
        { icon: 'diversity', title: 'Diversitate și incluziune', text: 'Încurajăm diversitatea și respectul în toate acțiunile noastre.' },
        { icon: 'leaders', title: 'Susținerea tinerilor', text: 'Investim în educația și dezvoltarea tinerilor lideri.' },
        { icon: 'ethics', title: 'Etică și integritate', text: 'Acționăm cu etică, integritate și în spiritul valorilor Rotary.' },
      ],
    },
    projects: {
      eyebrow: 'Proiectele noastre',
      title: 'Noutăți și inițiative Rotary Caransebeș',
      intro:
        'Fiecare proiect Rotary pornește de la o nevoie concretă și se transformă într-o soluție cu impact pe termen lung. De la educație și sănătate, până la sprijin social și dezvoltare comunitară, acționăm acolo unde este nevoie, cu rezultate măsurabile și durabile.',
      readMore: 'Citește mai mult',
      all: 'Toate proiectele',
    },
    join: {
      eyebrow: 'Implică-te',
      title: 'Vrei să faci parte din schimbare?',
      text: 'Alătură-te Rotary Club Caransebeș și implică-te în proiecte care aduc impact real în comunitatea noastră.',
      meetings: 'Întâlnirile clubului',
      map: 'Vezi pe hartă',
      ctaSupport: 'Susține un proiect',
      ctaJoin: 'Devino membru',
    },
  },
  en: {
    hero: {
      eyebrow: 'Service above self',
      title: 'Serving Caransebeș',
      since: 'since 2006',
      text: 'We are people of action who believe in the power of community and in the impact of every good deed.',
      ctaSupport: 'Support a project',
      ctaJoin: 'Become a member',
      scroll: 'Discover more',
      pauseVideo: 'Pause video',
      playVideo: 'Play video',
    },
    about: {
      eyebrow: 'Who we are',
      title: 'People of action for Caransebeș',
      paragraphs: [
        'Rotary Club Caransebeș brings together professionals and local leaders who choose to dedicate their time, energy and resources to creating real change in our community.',
        'Through sustainable projects, solid partnerships and constant involvement, we bring hope, education and support where they are needed most.',
      ],
      cta: 'Learn more',
    },
    domains: {
      eyebrow: 'What we do',
      title: "Rotary's areas of focus",
      intro: 'We step in strategically where the community needs stability, development and continuity.',
      items: [
        { icon: 'peace', image: '/images/icons/arii-pace.webp', title: 'Peacebuilding and conflict prevention', text: 'We promote dialogue, tolerance and understanding, and help young people build bridges between people and communities.' },
        { icon: 'disease', image: '/images/icons/arii-sanatate.webp', title: 'Disease prevention and treatment', text: "We support prevention, screening and access to treatment, including polio eradication, Rotary's global priority." },
        { icon: 'water', image: '/images/icons/arii-apa.webp', title: 'Water, sanitation and hygiene', text: 'We support access to clean water, decent sanitation and hygiene education in schools and communities.' },
        { icon: 'maternal', image: '/images/icons/arii-maternal.webp', title: 'Maternal and child health', text: 'We contribute to quality care for mothers and children through medical equipment, prevention and health education.' },
        { icon: 'education', image: '/images/icons/arii-educatie.webp', title: 'Basic education and literacy', text: 'We invest in scholarships, school equipment and programmes that give every child a chance at a good education.' },
        { icon: 'economy', image: '/images/icons/arii-comunitate.webp', title: 'Community economic development', text: 'We encourage entrepreneurship, vocational training and initiatives that create opportunities for local people.' },
        { icon: 'environment', image: '/images/icons/arii-mediu.webp', title: 'Environment', text: 'We support projects that protect nature, clean up the environment and use resources responsibly.' },
      ],
    },
    impact: {
      eyebrow: 'Our impact',
      title: 'Results that matter',
      labels: {
        years: 'years of service in the community',
        projects: 'projects delivered',
        projectValueEur: 'total value of projects',
        beneficiaries: 'direct beneficiaries',
        partners: 'partners and sponsors',
        areas: 'Rotary areas of focus covered',
      },
    },
    mission: {
      eyebrow: 'The mission of Rotary Caransebeș',
      title: 'Our mission',
      paragraphs: [
        "Rotary's mission is to create lasting change – locally, nationally and globally – through projects that support education, health, the environment, young people and ethical values.",
        'In Caransebeș, we focus on community development, supporting young people and the environment.',
      ],
      values: [
        { icon: 'relations', title: 'Building relationships', text: 'We build friendships and partnerships based on trust and respect.' },
        { icon: 'environment', title: 'Environment', text: 'We promote projects that protect the environment and natural resources.' },
        { icon: 'development', title: 'Community development', text: 'We support projects that bring real benefits to the community.' },
        { icon: 'diversity', title: 'Diversity and inclusion', text: 'We encourage diversity and respect in everything we do.' },
        { icon: 'leaders', title: 'Supporting young people', text: 'We invest in the education and growth of young leaders.' },
        { icon: 'ethics', title: 'Ethics and integrity', text: 'We act with ethics, integrity and in the spirit of Rotary values.' },
      ],
    },
    projects: {
      eyebrow: 'Our projects',
      title: 'News and initiatives from Rotary Caransebeș',
      intro:
        'Every Rotary project starts from a concrete need and becomes a solution with long-term impact. From education and health to social support and community development, we act where we are needed, with measurable and lasting results.',
      readMore: 'Read more',
      all: 'All projects',
    },
    join: {
      eyebrow: 'Get involved',
      title: 'Want to be part of the change?',
      text: 'Join Rotary Club Caransebeș and get involved in projects that make a real difference in our community.',
      meetings: 'Club meetings',
      map: 'View on map',
      ctaSupport: 'Support a project',
      ctaJoin: 'Become a member',
    },
  },
};
