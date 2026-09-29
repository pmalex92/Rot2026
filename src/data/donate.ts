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
    taxTitle: string;
    taxIntro: string;
    tax: { id: string; badge: string; title: string; items: string[]; cta?: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
    contactCta: string;
  }
> = {
  ro: {
    seoTitle: 'Donează pentru comunitatea din Caransebeș — Rotary Club Caransebeș',
    seoDescription:
      'Donează către Rotary Club Caransebeș sau redirecționează 3,5% din impozit prin formularul 230 (CIF 22700404). Susține „Aripi pentru Viitor”, educația și sănătatea în Caransebeș.',
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
    taxTitle: 'Susține-ne fără să te coste nimic',
    taxIntro:
      'Rotary Club Caransebeș este fundație înscrisă în Registrul entităților pentru care se acordă deduceri fiscale, așa că poți direcționa către noi o parte din impozitul pe care îl plătești oricum statului.',
    tax: [
      {
        id: 'formular-230',
        badge: 'Persoane fizice',
        title: 'Redirecționează 3,5% din impozitul pe venit',
        items: [
          'Completează formularul 230 (salariați, pensionari) sau secțiunea dedicată din Declarația unică (venituri independente, chirii etc.).',
          `Beneficiar: ${site.bank.beneficiary}, CIF ${site.bank.cif}, IBAN ${site.bank.iban}.`,
          'Poți alege ca redirecționarea să fie valabilă 1 sau 2 ani.',
          'Depune formularul online în Spațiul Privat Virtual ANAF, la ghișeu, prin poștă sau trimite-ni-l nouă și îl depunem noi. Termenul este 25 mai, pentru veniturile anului anterior.',
        ],
        cta: 'Cere formularul precompletat',
      },
      {
        id: 'sponsorizare',
        badge: 'Firme',
        title: 'Sponsorizare deductibilă',
        items: [
          'Companiile pot scădea sponsorizarea din impozitul pe profit sau din impozitul microîntreprinderii, în limitele prevăzute de Codul fiscal.',
          'Încheiem un contract de sponsorizare și îți trimitem toate documentele necesare contabilității.',
          'Poți sponsoriza un proiect anume, de exemplu „Aripi pentru Viitor”, sau activitatea clubului în general.',
        ],
        cta: 'Discută cu noi o sponsorizare',
      },
    ],
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
        q: 'Cum redirecționez 3,5% din impozit către Rotary Club Caransebeș?',
        a: `Completezi formularul 230 (sau Declarația unică, dacă ai venituri independente) cu datele clubului: ${site.bank.beneficiary}, CIF ${site.bank.cif}, IBAN ${site.bank.iban}, și îl depui la ANAF până la 25 mai. Nu te costă nimic: suma provine din impozitul deja plătit statului. Dacă vrei, îți trimitem formularul precompletat și îl depunem noi.`,
      },
      {
        q: 'Firma mea poate sponsoriza clubul?',
        a: 'Da. Clubul este înscris în Registrul entităților pentru care se acordă deduceri fiscale, astfel că firmele pot scădea sponsorizarea din impozit, în limitele Codului fiscal. Scrie-ne și pregătim contractul de sponsorizare.',
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
      'Donate to Rotary Club Caransebeș by bank transfer or redirect 3.5% of your Romanian income tax (form 230, CIF 22700404). Support "Wings for the Future", education and health in Caransebeș.',
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
    taxTitle: 'Support us at no cost to you',
    taxIntro:
      'Rotary Club Caransebeș is a foundation listed in the Romanian register of organisations eligible for tax deductions, so Romanian taxpayers can direct part of the tax they already pay to us.',
    tax: [
      {
        id: 'formular-230',
        badge: 'Individuals',
        title: 'Redirect 3.5% of your income tax',
        items: [
          'Fill in form 230 (employees, pensioners) or the relevant section of the Declarația unică (self-employed, rental income, etc.).',
          `Beneficiary: ${site.bank.beneficiary}, CIF ${site.bank.cif}, IBAN ${site.bank.iban}.`,
          'You can choose for the redirection to apply for 1 or 2 years.',
          'Submit it online through the ANAF Virtual Private Space, in person, by post, or send it to us and we will file it. The deadline is 25 May, for the previous year\'s income.',
        ],
        cta: 'Ask for a pre-filled form',
      },
      {
        id: 'sponsorizare',
        badge: 'Companies',
        title: 'Tax-deductible sponsorship',
        items: [
          'Companies can deduct sponsorship from their profit tax or micro-enterprise tax, within the limits of the Romanian Fiscal Code.',
          'We sign a sponsorship agreement and send you all the documents your accountant needs.',
          'You can sponsor a specific project, such as "Wings for the Future", or the club\'s work in general.',
        ],
        cta: 'Talk to us about sponsorship',
      },
    ],
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
        q: 'How do I redirect 3.5% of my income tax to Rotary Club Caransebeș?',
        a: `Fill in form 230 (or the Declarația unică if you have self-employment income) with the club's details: ${site.bank.beneficiary}, CIF ${site.bank.cif}, IBAN ${site.bank.iban}, and file it with ANAF by 25 May. It costs you nothing: the amount comes from tax already paid to the state. We can also send you a pre-filled form and file it for you.`,
      },
      {
        q: 'Can my company sponsor the club?',
        a: 'Yes. The club is listed in the register of organisations eligible for tax deductions, so companies can deduct the sponsorship from their tax, within the limits of the Fiscal Code. Contact us and we will prepare the sponsorship agreement.',
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
