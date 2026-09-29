import type { Lang } from '../i18n/ui';
import { site } from './site';

/** SEO copy and frequently asked questions for the donate page (edit the texts here). */
export const donate: Record<
  Lang,
  {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; items: string[] };
    faqTitle: string;
    faq: { q: string; a: string }[];
    contactCta: string;
  }
> = {
  ro: {
    seoTitle: 'Donează pentru comunitatea din Caransebeș — Rotary Club Caransebeș',
    seoDescription:
      'Donează prin transfer bancar către Rotary Club Caransebeș și susține bursa „Aripi pentru Viitor”, educația, sănătatea și tinerii din Caransebeș. IBAN, CIF și pașii pentru donație.',
    eyebrow: 'Implică-te',
    title: 'Donează pentru comunitatea din Caransebeș',
    intro:
      'Fiecare contribuție se transformă în proiecte concrete: burse pentru elevi, echipamente pentru spital, sprijin pentru familii și tineri din Caransebeș.',
    steps: {
      title: 'Cum donezi în 3 pași',
      items: [
        'Copiază IBAN-ul de mai jos în aplicația băncii tale.',
        'Beneficiar: Rotary Club Caransebeș. Alege suma pe care o dorești.',
        'La detalii plată scrie „Donație” sau numele proiectului, de exemplu „Aripi pentru Viitor”.',
      ],
    },
    faqTitle: 'Întrebări frecvente despre donații',
    faq: [
      {
        q: 'Cum pot dona către Rotary Club Caransebeș?',
        a: `Prin transfer bancar în contul asociației: beneficiar ${site.bank.beneficiary}, IBAN ${site.bank.iban}, ${site.bank.bankName}, CIF ${site.bank.cif}. Poți face transferul din aplicația băncii, de la ghișeu sau din internet banking.`,
      },
      {
        q: 'Pot alege proiectul pe care îl susțin?',
        a: 'Da. Scrie numele proiectului la detaliile plății, de exemplu „Aripi pentru Viitor”, iar suma va fi direcționată către acel proiect. Dacă scrii doar „Donație”, banii merg acolo unde nevoia este cea mai mare.',
      },
      {
        q: 'La ce folosesc banii donați?',
        a: 'Donațiile finanțează proiectele clubului din Caransebeș și împrejurimi: burse și dotări pentru școli, sprijin pentru spital, ajutoare pentru familii vulnerabile, proiecte pentru tineri și cultură. Rezultatele le publicăm pe pagina Proiecte și pe Facebook.',
      },
      {
        q: 'Ce este proiectul „Aripi pentru Viitor”?',
        a: 'Este programul prin care Rotary Club Caransebeș susține trei elevi merituoși pe toată durata liceului, timp de 4 ani, astfel încât lipsa resurselor să nu îi oprească din studiu.',
      },
      {
        q: 'Pot dona și din străinătate?',
        a: `Da, printr-un transfer internațional către IBAN-ul clubului (${site.bank.bankName}, cod SWIFT/BIC BTRLRO22). Pentru orice detaliu scrie-ne la ${site.email}.`,
      },
      {
        q: 'Cum pot ajuta dacă nu pot dona bani?',
        a: 'Poți deveni voluntar sau partener al unui proiect, poți oferi produse ori servicii sau poți distribui campaniile noastre. Scrie-ne pe pagina de contact și găsim împreună cea mai bună formă de implicare.',
      },
    ],
    contactCta: 'Ai o întrebare? Scrie-ne',
  },
  en: {
    seoTitle: 'Donate to support Caransebeș, Romania — Rotary Club Caransebeș',
    seoDescription:
      'Donate by bank transfer to Rotary Club Caransebeș and support the "Wings for the Future" scholarships, education, health care and young people in Caransebeș, Romania. IBAN and how to give.',
    eyebrow: 'Get involved',
    title: 'Donate to the Caransebeș community',
    intro:
      'Every contribution turns into concrete projects: scholarships for pupils, hospital equipment and support for families and young people in Caransebeș.',
    steps: {
      title: 'Donate in 3 steps',
      items: [
        'Copy the IBAN below into your banking app.',
        'Beneficiary: Rotary Club Caransebeș. Choose any amount you like.',
        'As payment reference write "Donation" or a project name, e.g. "Aripi pentru Viitor".',
      ],
    },
    faqTitle: 'Donation FAQ',
    faq: [
      {
        q: 'How can I donate to Rotary Club Caransebeș?',
        a: `By bank transfer to the club's account: beneficiary ${site.bank.beneficiary}, IBAN ${site.bank.iban}, ${site.bank.bankName}, tax ID (CIF) ${site.bank.cif}.`,
      },
      {
        q: 'Can I choose which project I support?',
        a: 'Yes. Write the project name in the payment reference, e.g. "Aripi pentru Viitor", and your gift goes to that project. If you only write "Donation", it goes where the need is greatest.',
      },
      {
        q: 'What are donations used for?',
        a: 'Donations fund the club\'s projects in and around Caransebeș: scholarships and equipment for schools, support for the hospital, help for vulnerable families, youth and cultural projects. We publish the results on the Projects page and on Facebook.',
      },
      {
        q: 'What is "Wings for the Future"?',
        a: 'It is the programme through which Rotary Club Caransebeș supports three deserving pupils throughout their four years of high school, so that a lack of means never stops their education.',
      },
      {
        q: 'Can I donate from abroad?',
        a: `Yes, with an international transfer to the club's IBAN (${site.bank.bankName}, SWIFT/BIC BTRLRO22). For any details, email us at ${site.email}.`,
      },
      {
        q: 'How can I help if I cannot give money?',
        a: 'You can volunteer or partner on a project, offer goods or services, or share our campaigns. Get in touch through the contact page and we will find the best way for you to help.',
      },
    ],
    contactCta: 'Have a question? Contact us',
  },
};
