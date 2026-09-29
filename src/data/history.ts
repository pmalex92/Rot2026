// Conținut preluat din broșura aniversară „20 de ani de implicare în comunitate” (2006–2026).
import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export interface TimelineItem {
  year: string;
  /** File name in public/images/istoric/ (without extension). */
  img?: string;
  /** Slug of a page in src/content/projects/ with more details. */
  project?: string;
  /** Any other internal page with more details (without the /en prefix). */
  link?: string;
  title: Text;
  text: Text;
}

export interface Era {
  id: string;
  years: string;
  title: Text;
  intro: Text;
  outro?: Text;
  items: TimelineItem[];
}

export const tagline: Record<Lang, string[]> = {
  ro: ['20 de ani de solidaritate.', '20 de ani de prietenie.', '20 de ani aproape de comunitate.'],
  en: ['20 years of solidarity.', '20 years of friendship.', '20 years close to the community.'],
};

export const intro: Record<Lang, string[]> = {
  ro: [
    'De două decenii, Rotary Club Caransebeș înseamnă implicare, demnitate și grijă față de comunitate.',
    'Această ediție aniversară este o mărturie a drumului parcurs împreună — ani în care proiectele dedicate sănătății, educației, vieții sociale și culturale au adus speranță, sprijin și continuitate.',
    'Fondat în 2006, clubul a construit în timp o prezență constantă în viața comunității, prin parteneriate, voluntariat și proiecte cu impact real.',
  ],
  en: [
    'For two decades, Rotary Club Caransebeș has stood for involvement, dignity and care for the community.',
    'This anniversary edition bears witness to the road travelled together — years in which projects dedicated to health, education, social and cultural life brought hope, support and continuity.',
    'Founded in 2006, the club has built a constant presence in the life of the community over time, through partnerships, volunteering and projects with real impact.',
  ],
};

export const figures: { value: string; label: Text }[] = [
  { value: '500.000+ €', label: { ro: 'valoarea proiectelor derulate', en: 'total value of projects delivered' } },
  { value: '7', label: { ro: 'arii de acțiune Rotary acoperite', en: 'Rotary areas of focus covered' } },
  { value: '45+', label: { ro: 'proiecte în educație, sănătate și social', en: 'projects in education, health and social support' } },
  { value: '20+', label: { ro: 'inițiative culturale și rotariene', en: 'cultural and Rotary initiatives' } },
  { value: '20+', label: { ro: 'acțiuni sportive și de mediu', en: 'sports and environmental actions' } },
];

export const messages: { author: string; role: Text; paragraphs: Record<Lang, string[]> }[] = [
  {
    author: 'Călin Lazăr',
    role: { ro: 'Președinte Rotary Club Caransebeș, 2025–2026', en: 'President, Rotary Club Caransebeș, 2025–2026' },
    paragraphs: {
      ro: [
        'Cu emoție și recunoștință marcăm 20 de ani de activitate ai Rotary Club Caransebeș, un drum început în 2006 și construit, pas cu pas, prin implicare, solidaritate și respect față de comunitate. Această aniversare este, înainte de toate, un moment de reflecție asupra binelui făcut împreună și asupra oamenilor care au dat sens fiecărui proiect, fiecărei inițiative și fiecărui gest de sprijin.',
        'De-a lungul acestor două decenii, clubul nostru a fost prezent acolo unde a fost nevoie de speranță, de sprijin și de încredere: în sănătate, educație, social, cultură, mediu și în proiecte dedicate tinerilor. Fie că am susținut spitale, școli, copii, seniori, familii vulnerabile sau inițiative menite să apropie oamenii, am rămas fideli aceleiași convingeri: că adevărata forță a unei comunități stă în capacitatea ei de a fi solidară.',
        'Privim cu respect către toți cei care au contribuit la această istorie: foști președinți, membri ai clubului, parteneri, sponsori, voluntari și prieteni ai Rotary. Fără încrederea, generozitatea și consecvența lor, această poveste nu ar fi fost posibilă.',
        'La acest moment aniversar, mulțumim tuturor celor care au fost și rămân alături de Rotary Club Caransebeș. Cu aceeași responsabilitate și cu aceeași credință în puterea binelui făcut împreună, privim înainte și ne asumăm să continuăm această misiune cu seriozitate, discreție și devotament.',
      ],
      en: [
        'With emotion and gratitude we mark 20 years of Rotary Club Caransebeș, a journey that began in 2006 and was built step by step through involvement, solidarity and respect for the community. This anniversary is, above all, a moment to reflect on the good we have done together and on the people who gave meaning to every project, every initiative and every gesture of support.',
        'Over these two decades our club has been present wherever hope, support and trust were needed: in health, education, social support, culture, the environment and in projects for young people. Whether we supported hospitals, schools, children, seniors, vulnerable families or initiatives that bring people together, we stayed true to the same conviction: that the real strength of a community lies in its ability to stand together.',
        'We look with respect to everyone who has contributed to this story: past presidents, club members, partners, sponsors, volunteers and friends of Rotary. Without their trust, generosity and consistency, this story would not have been possible.',
        'At this anniversary, we thank everyone who has stood and still stands beside Rotary Club Caransebeș. With the same responsibility and the same faith in the power of doing good together, we look ahead and commit to continuing this mission with seriousness, discretion and dedication.',
      ],
    },
  },
  {
    author: 'Andrei Botez',
    role: { ro: 'Guvernator, District 2241 România și Republica Moldova, 2025–2026', en: 'Governor, District 2241 Romania and Republic of Moldova, 2025–2026' },
    paragraphs: {
      ro: [
        'La aniversarea a 20 de ani de activitate a Rotary Club Caransebeș, adresez cele mai sincere felicitări tuturor celor care au contribuit, de-a lungul acestor două decenii, la construirea unei prezențe rotariene puternice, respectate și profund ancorate în viața comunității.',
        'Douăzeci de ani înseamnă mai mult decât o succesiune de mandate, proiecte și evenimente. Înseamnă continuitate, încredere, responsabilitate și capacitatea de a transforma valorile Rotary în gesturi concrete, cu impact real asupra oamenilor. Prin activitatea sa, Rotary Club Caransebeș a demonstrat că spiritul de solidaritate, prietenia și dorința de a servi mai presus de sine pot deveni o forță autentică de bine în comunitate.',
        'Aniversarea de astăzi este, în egală măsură, un moment de bilanț și un prilej de a privi înainte cu încredere. Sunt convins că Rotary Club Caransebeș va continua să inspire, să unească și să slujească această comunitate cu aceeași demnitate și aceeași energie care i-au definit parcursul până acum.',
      ],
      en: [
        'On the 20th anniversary of Rotary Club Caransebeș, I extend my warmest congratulations to everyone who, over these two decades, has helped build a strong, respected Rotary presence deeply rooted in the life of the community.',
        'Twenty years means more than a succession of terms, projects and events. It means continuity, trust, responsibility and the ability to turn Rotary values into concrete gestures with real impact on people. Through its work, Rotary Club Caransebeș has shown that solidarity, friendship and the wish to serve above self can become a genuine force for good in the community.',
        "Today's anniversary is both a moment of reckoning and an occasion to look ahead with confidence. I am convinced that Rotary Club Caransebeș will continue to inspire, unite and serve this community with the same dignity and energy that have defined its journey so far.",
      ],
    },
  },
  {
    author: 'Alin Sever Deteșan',
    role: { ro: 'Asistent Guvernator, District 2241 România și Republica Moldova', en: 'Assistant Governor, District 2241 Romania and Republic of Moldova' },
    paragraphs: {
      ro: [
        'Au trecut 20 de ani de când un grup de oameni cu spirit de voluntariat au pus bazele, în capitala Țării Gugulanilor, a unui club rotarian dedicat comunității. De-a lungul acestor ani, prin implicarea membrilor săi, clubul caransebeșean a dezvoltat numeroase proiecte, în valoare de peste 500.000 de euro, acoperind toate cele șapte arii de acțiune Rotary, cu o atenție deosebită acordată domeniilor sănătății, educației, socialului și culturii.',
        'Unul dintre proiectele de suflet, cu impact pe termen lung, este înființarea clubului Interact. Aici, tinerii noștri, sub îndrumarea clubului Rotary, dezvoltă an de an acțiuni sociale și educaționale tot mai valoroase.',
        'Felicit toți colegii pentru dăruirea și determinarea arătate în proiectele clubului, dar și pentru faptul că oferă pro bono unul dintre cele mai valoroase lucruri personale: timpul. Și, mai presus de toate, să vă bucurați de prietenia rotariană.',
      ],
      en: [
        'Twenty years have passed since a group of people with a spirit of volunteering founded, in the capital of the Land of the Gugulans, a Rotary club dedicated to the community. Over these years, through the involvement of its members, the club has developed numerous projects worth more than 500,000 euros, covering all seven Rotary areas of focus, with particular attention to health, education, social support and culture.',
        'One of the projects closest to our hearts, with long-term impact, is the founding of the Interact club. Here our young people, guided by the Rotary club, develop ever more valuable social and educational actions year after year.',
        'I congratulate all my colleagues for the dedication and determination shown in the club’s projects, and for giving pro bono one of the most valuable things they have: their time. And, above all, enjoy the Rotary friendship.',
      ],
    },
  },
];

export const eras: Era[] = [
  {
    id: 'inceputurile',
    years: '2006–2008',
    title: { ro: 'Începuturile', en: 'The beginnings' },
    intro: {
      ro: 'Primii ani ai Rotary Club Caransebeș au așezat direcția care avea să definească identitatea clubului: prezență activă în comunitate, parteneriate locale solide și proiecte cu impact social și cultural.',
      en: 'The first years of Rotary Club Caransebeș set the direction that would define the club: an active presence in the community, solid local partnerships and projects with social and cultural impact.',
    },
    items: [
      {
        year: '2006',
        img: '2006-iluminat',
        title: { ro: 'Iluminatul public pentru sărbătorile de iarnă', en: 'Festive lighting for the winter holidays' },
        text: {
          ro: 'În parteneriat cu Primăria Caransebeș, clubul a contribuit la iluminatul festiv al orașului, aducând atmosferă de sărbătoare și bucurie în comunitate.',
          en: "In partnership with Caransebeș City Hall, the club contributed to the town's festive lighting, bringing holiday atmosphere and joy to the community.",
        },
      },
      {
        year: '2007',
        img: '2007-concert',
        title: { ro: 'Concert simfonic de Crăciun și Lumina Sfântă de la Betleem', en: 'Christmas symphony concert and the Holy Light from Bethlehem' },
        text: {
          ro: 'Concertele simfonice de Crăciun, susținute de Orchestra Filarmonicii din Timișoara în Catedrala Episcopală Ortodoxă, au adus în Caransebeș un reper cultural de ținută.',
          en: 'Christmas symphony concerts performed by the Timișoara Philharmonic Orchestra in the Orthodox Episcopal Cathedral brought a cultural landmark of real standing to Caransebeș.',
        },
      },
      {
        year: '2008',
        img: '2008-orasel',
        title: { ro: 'Orășelul copiilor și proiectul comun cu Rotary Dortmund', en: "Children's town and a joint project with Rotary Dortmund" },
        text: {
          ro: 'A fost creat Orășelul copiilor în parteneriat cu Primăria Caransebeș, iar împreună cu Rotary Dortmund clubul a început un proiect de sprijin pentru copiii din familii defavorizate, prin oferirea de hrană pe o perioadă de 3 ani.',
          en: "A children's town was created in partnership with Caransebeș City Hall, and together with Rotary Dortmund the club started a project providing food for children from disadvantaged families for 3 years.",
        },
      },
    ],
  },
  {
    id: 'consolidare',
    years: '2009–2014',
    title: { ro: 'Consolidare și diversificare', en: 'Consolidation and diversification' },
    intro: {
      ro: 'Clubul și-a extins aria de implicare și a construit proiecte tot mai clare în sănătate, educație și cultură — inițiative care au început să lase urme tot mai vizibile în viața comunității.',
      en: 'The club broadened its involvement and built increasingly focused projects in health, education and culture — initiatives that began to leave ever more visible marks on community life.',
    },
    items: [
      {
        year: '2009',
        img: '2009-himalaya',
        title: { ro: 'Sponsorizarea unei expediții pe Himalaya', en: 'Sponsoring a Himalayan expedition' },
        text: {
          ro: 'Clubul a susținut participarea lui Cornel „Coco” Galescu în expediția pe Himalaya, încurajând performanța și curajul sportivilor locali.',
          en: 'The club supported Cornel "Coco" Galescu’s participation in a Himalayan expedition, encouraging the achievement and courage of local athletes.',
        },
      },
      {
        year: '2009',
        img: '2009-scaune',
        title: { ro: 'Donație de scaune pentru persoane cu dizabilități', en: 'Wheelchairs for people with disabilities' },
        text: {
          ro: 'Un gest concret de sprijin pentru membrii vulnerabili ai comunității, dedicat mobilității și integrării sociale.',
          en: 'A concrete gesture of support for vulnerable members of the community, dedicated to mobility and social inclusion.',
        },
      },
      {
        year: '2010',
        img: '2010-auditiv',
        title: { ro: 'Aparatul auditiv MB11 pentru nou-născuți', en: 'MB11 hearing screening device for newborns' },
        text: {
          ro: 'Unul dintre primele proiecte medicale importante ale clubului, dedicat depistării timpurii a problemelor de auz.',
          en: "One of the club's first major medical projects, dedicated to the early detection of hearing problems.",
        },
      },
      {
        year: '2011',
        img: '2011-targ-jucarii',
        title: { ro: 'Târg de jucării vechi', en: 'Second-hand toy fair' },
        text: {
          ro: 'Un eveniment comunitar care a încurajat reciclarea și spiritul de solidaritate în rândul copiilor și familiilor.',
          en: 'A community event that encouraged recycling and solidarity among children and families.',
        },
      },
      {
        year: '2012',
        img: '2012-traditie',
        title: { ro: '„Tradiție și Solidaritate în Banatul Montan”', en: '"Tradition and Solidarity in the Mountain Banat"' },
        text: {
          ro: 'Eveniment cultural dedicat identității locale și spiritului de solidaritate.',
          en: 'A cultural event dedicated to local identity and the spirit of solidarity.',
        },
      },
      {
        year: '2012',
        img: '2012-burse',
        title: { ro: 'Burse pentru elevii eminenți', en: 'Scholarships for outstanding pupils' },
        text: {
          ro: 'Prin premierea excelenței școlare, clubul a susținut performanța și educația.',
          en: 'By rewarding academic excellence, the club supported achievement and education.',
        },
      },
      {
        year: '2013',
        img: '2013-happy',
        title: { ro: 'Happy Caransebeș', en: 'Happy Caransebeș' },
        text: {
          ro: 'Un proiect care a adus energie, vizibilitate și bucurie comunității locale.',
          en: 'A project that brought energy, visibility and joy to the local community.',
        },
      },
      {
        year: '2013',
        img: '2013-monumente',
        title: { ro: '„Un oraș fără monumente este un oraș fără istorie”', en: '"A town without monuments is a town without history"' },
        text: {
          ro: 'Proiect cultural dedicat patrimoniului și memoriei orașului.',
          en: "A cultural project dedicated to the town's heritage and memory.",
        },
      },
      {
        year: '2014',
        img: '2014-scanteie',
        title: { ro: '„O scânteie de viață”', en: '"A spark of life"' },
        text: {
          ro: 'Donație de echipament anti-apnee pentru nou-născuți.',
          en: 'A donation of anti-apnea equipment for newborns.',
        },
      },
      {
        year: '2014',
        img: '2014-incubator',
        title: { ro: 'Incubator pentru secția Pediatrie', en: 'Incubator for the Paediatrics ward' },
        text: {
          ro: 'Achiziționat în cadrul proiectului „Salvați Copiii”, pentru Spitalul Municipal din Caransebeș.',
          en: 'Purchased through the "Save the Children" project for the Caransebeș Municipal Hospital.',
        },
      },
      {
        year: '2014',
        img: '2014-india',
        title: { ro: 'Vernisajul expoziției „INDIA pe urmele lui Eliade”', en: 'Opening of the exhibition "INDIA in Eliade’s footsteps"' },
        text: {
          ro: 'Eveniment cultural semnat de fotograful Doru Dumitru.',
          en: 'A cultural event by photographer Doru Dumitru.',
        },
      },
    ],
  },
  {
    id: 'extindere',
    years: '2015–2016',
    title: { ro: 'Extindere și vizibilitate', en: 'Growth and visibility' },
    intro: {
      ro: 'O diversificare clară a proiectelor: sănătate, educație, sprijin social, cultură și proiecte cu deschidere regională. Clubul devine tot mai prezent prin inițiative concrete și evenimente care dau vizibilitate valorilor rotariene.',
      en: 'A clear diversification of projects: health, education, social support, culture and projects with a regional reach. The club becomes ever more present through concrete initiatives and events that give visibility to Rotary values.',
    },
    items: [
      {
        year: '2015',
        img: '2015-sanatate',
        title: { ro: 'Sprijin pentru sănătate și siguranță', en: 'Support for health and safety' },
        text: {
          ro: 'Au fost susținute dotarea Salvamont Muntele Mic și achiziția unui perimetru oftalmologic pentru Spitalul Municipal de Urgență Caransebeș.',
          en: 'The club supported equipping the Muntele Mic mountain rescue team and purchasing an ophthalmic perimeter for the Caransebeș Municipal Emergency Hospital.',
        },
      },
      {
        year: '2015',
        img: '2015-educatie',
        title: { ro: 'Educație și solidaritate', en: 'Education and solidarity' },
        text: {
          ro: 'Alimente pentru Școala Specială Caransebeș, concursul de desene pentru copii, Calendarul Rotary 2015 și donația de carte românească pentru Uzdin, în Banatul Sârbesc.',
          en: 'Food for the Caransebeș Special School, a drawing contest for children, the 2015 Rotary Calendar and a donation of Romanian books to Uzdin, in the Serbian Banat.',
        },
      },
      {
        year: '2015',
        img: '2015-comunitate',
        title: { ro: 'Comunitate și evenimente', en: 'Community and events' },
        text: {
          ro: 'Prima ediție a Expoziției Canine „Banatul Montan”, participarea la Tour International Danubien și prima ediție a Promenadei Inimilor.',
          en: 'The first "Banatul Montan" Dog Show, participation in the Tour International Danubien and the first Promenade of Hearts.',
        },
      },
      {
        year: '2016',
        img: '2016-umanitar',
        title: { ro: 'Proiecte medicale și umanitare', en: 'Medical and humanitarian projects' },
        text: {
          ro: 'Saltele speciale pentru secția de neonatologie și ajutor umanitar în Serbia, în urma inundațiilor catastrofale.',
          en: 'Special mattresses for the neonatology ward and humanitarian aid for Serbia after catastrophic floods.',
        },
      },
      {
        year: '2016',
        img: '2016-educatie',
        title: { ro: 'Sprijin pentru educație și identitate culturală', en: 'Support for education and cultural identity' },
        text: {
          ro: 'Cărți pentru Glogoni, instrumente muzicale și calculatoare pentru copiii din Uzdin, sprijin pentru eleva Elena Molea la Festivalul „Ziua Zâmbetului de Copil” și pentru apariția volumului „Istoria Banatului”.',
          en: 'Books for Glogoni, musical instruments and computers for the children of Uzdin, support for pupil Elena Molea at the "Children’s Smile Day" festival and for the publication of the volume "History of the Banat".',
        },
      },
      {
        year: '2016',
        img: '2016-deschidere',
        title: { ro: 'Implicare și deschidere', en: 'Involvement and openness' },
        text: {
          ro: 'Clubul s-a asociat cu proiecte de vizibilitate precum Raliul Budapesta–Bamako și a organizat a II-a ediție a Expoziției Canine „Banatul Montan”.',
          en: 'The club joined high-visibility projects such as the Budapest–Bamako Rally and organised the second "Banatul Montan" Dog Show.',
        },
      },
    ],
  },
  {
    id: 'referinta',
    years: '2017–2019',
    title: { ro: 'Proiecte de referință', en: 'Landmark projects' },
    intro: {
      ro: 'Una dintre cele mai importante etape din istoria clubului: proiecte de anvergură, parteneriate internaționale solide și investiții concrete în sănătate, educație și comunitate.',
      en: "One of the most important chapters in the club's history: large-scale projects, solid international partnerships and concrete investment in health, education and the community.",
    },
    outro: {
      ro: 'Între 2017 și 2019, clubul a consolidat proiecte de tradiție și a dus mai departe inițiative cu impact real și durabil în comunitate.',
      en: 'Between 2017 and 2019, the club consolidated long-standing projects and carried forward initiatives with real and lasting impact on the community.',
    },
    items: [
      {
        year: '2017',
        img: '2017-teatru',
        title: { ro: 'Festival de teatru pentru tineret', en: 'Youth theatre festival' },
        text: {
          ro: 'Sponsorizare care a susținut exprimarea artistică și implicarea tinerilor în viața culturală a comunității.',
          en: "Sponsorship supporting young people's artistic expression and involvement in the community's cultural life.",
        },
      },
      {
        year: '2017',
        img: '2017-gulas',
        title: { ro: '„Gulașul caritabil”', en: 'The "Charity Goulash"' },
        text: {
          ro: 'Una dintre principalele surse de strângere de fonduri pentru modernizarea spitalului.',
          en: 'One of the main fundraising events for modernising the hospital.',
        },
      },
      {
        year: '2017',
        img: '2017-cupa-canina',
        title: { ro: 'Cupa Canină „Banatul Montan”, ediția a III-a', en: '"Banatul Montan" Dog Show, 3rd edition' },
        text: {
          ro: 'Clubul a continuat tradiția evenimentelor dedicate comunității, consolidând implicarea locală.',
          en: 'The club continued its tradition of community events, strengthening local involvement.',
        },
      },
      {
        year: '2017',
        img: '2017-masquerade',
        title: { ro: 'Strângere de fonduri pentru trupa de teatru MASQUERADE', en: 'Fundraising for the MASQUERADE amateur theatre group' },
        text: {
          ro: 'Fondurile obținute în decembrie 2017 au fost direcționate către susținerea activității trupei.',
          en: "The funds raised in December 2017 went to supporting the group's activity.",
        },
      },
      {
        year: '2018',
        img: '2018-global-grant',
        project: 'global-grant-spitalul-municipal-caransebes',
        title: { ro: 'Global Grant – 75.850 $ pentru Spitalul Caransebeș', en: 'Global Grant – $75,850 for Caransebeș Hospital' },
        text: {
          ro: 'Clubul a demarat unul dintre cele mai importante proiecte ale sale: aparatură medicală, calculatoare, mobilier specific și modernizarea infrastructurii medicale.',
          en: "The club launched one of its most important projects: medical equipment, computers, specialised furniture and modernised medical infrastructure.",
        },
      },
      {
        year: '2018',
        img: '2018-cupa-canina',
        title: { ro: 'Expoziția / Cupa Canină „Banatul Montan”, ediția a IV-a', en: '"Banatul Montan" Dog Show, 4th edition' },
        text: {
          ro: 'Unul dintre cele mai cunoscute evenimente locale, care a consolidat legătura cu comunitatea.',
          en: 'One of the best-known local events, strengthening ties with the community.',
        },
      },
      {
        year: '2018',
        img: '2018-promenada',
        project: 'promenada-inimilor',
        title: { ro: 'Promenada Inimilor Caransebeș', en: 'Promenade of Hearts, Caransebeș' },
        text: {
          ro: 'Eveniment dedicat sănătății și mișcării, care a adus comunitatea împreună pentru un stil de viață activ.',
          en: 'An event for health and movement that brought the community together for an active lifestyle.',
        },
      },
      {
        year: '2018',
        img: '2018-cana-excelenta',
        title: { ro: '„O cană pentru EXCELENȚĂ”', en: '"A cup for EXCELLENCE"' },
        text: {
          ro: 'Una dintre principalele surse de strângere de fonduri pentru proiectul Global Grant și pentru mobilizarea partenerilor clubului.',
          en: "One of the main fundraisers for the Global Grant project and for mobilising the club's partners.",
        },
      },
      {
        year: '2019',
        img: '2019-global-grant',
        project: 'global-grant-spitalul-municipal-caransebes',
        title: { ro: 'Continuarea proiectului Global Grant', en: 'The Global Grant continues' },
        text: {
          ro: 'În februarie 2019 au fost donate Spitalului Caransebeș două autocamioane cu mobilier și aparatură medicală.',
          en: 'In February 2019, two truckloads of furniture and medical equipment were donated to Caransebeș Hospital.',
        },
      },
      {
        year: '2019',
        img: '2019-bronhoscop',
        project: 'global-grant-spitalul-municipal-caransebes',
        title: { ro: 'Predarea bronhoscopului Storz', en: 'Handover of the Storz bronchoscope' },
        text: {
          ro: 'La 21 februarie 2019 a fost predat bronhoscopul marca Storz, în valoare de 148.000 lei.',
          en: 'On 21 February 2019, a Storz bronchoscope worth 148,000 lei was handed over.',
        },
      },
      {
        year: '2019',
        img: '2019-olimpici',
        title: { ro: '„Sprijinim prezentul pentru viitor”', en: '"Supporting the present for the future"' },
        text: {
          ro: 'Premierea elevilor olimpici și a sportivilor cu rezultate remarcabile.',
          en: 'Awards for olympiad pupils and athletes with outstanding results.',
        },
      },
    ],
  },
  {
    id: 'continuitate',
    years: '2020–2021',
    title: { ro: 'Continuitate în ani dificili', en: 'Continuity in difficult years' },
    intro: {
      ro: 'Anii 2020 și 2021 au adus provocări speciale, dar clubul a rămas activ acolo unde era nevoie de sprijin concret — pentru sănătate, siguranță și comunitate.',
      en: 'The years 2020 and 2021 brought special challenges, but the club stayed active wherever concrete support was needed — for health, safety and the community.',
    },
    outro: {
      ro: 'Clubul a rămas aproape de comunitate prin grijă concretă, sprijin pentru sănătate, siguranță în școli și gesturi de solidaritate dedicate celor mai vulnerabili.',
      en: 'The club stayed close to the community through concrete care, support for health, safety in schools and gestures of solidarity for the most vulnerable.',
    },
    items: [
      {
        year: '2020',
        img: '2020-covid',
        title: { ro: 'Echipamente de protecție pentru cadrele medicale', en: 'Protective equipment for medical staff' },
        text: {
          ro: 'În august 2020, clubul a susținut personalul medical printr-o campanie dedicată echipamentelor de protecție în contextul pandemiei COVID-19.',
          en: 'In August 2020, the club supported medical staff with a campaign for protective equipment during the COVID-19 pandemic.',
        },
      },
      {
        year: '2021',
        img: '2021-dispensere',
        title: { ro: 'Dispensere pentru școlile din Caransebeș', en: 'Sanitiser dispensers for Caransebeș schools' },
        text: {
          ro: 'Dotarea școlilor din municipiu cu dispensere pentru soluții sanitizante, pentru siguranța elevilor în timpul pandemiei.',
          en: "Equipping the town's schools with sanitiser dispensers to keep pupils safe during the pandemic.",
        },
      },
      {
        year: '2021',
        img: '2021-sah',
        project: 'turneul-de-sah-cupa-rotary-caransebes',
        title: { ro: 'Cupa Rotary Șah', en: 'Rotary Chess Cup' },
        text: {
          ro: 'Organizată la 3 august 2021, competiția a adus în prim-plan fair-play-ul și performanța tinerilor.',
          en: 'Held on 3 August 2021, the competition put fair play and young talent in the spotlight.',
        },
      },
      {
        year: '2021',
        img: '2021-fonduri',
        title: { ro: 'Acțiune de strângere de fonduri', en: 'Fundraising action' },
        text: {
          ro: 'În decembrie 2021, clubul a menținut viu spiritul solidarității printr-o acțiune dedicată strângerii de fonduri.',
          en: 'In December 2021, the club kept the spirit of solidarity alive with a fundraising action.',
        },
      },
      {
        year: '2021',
        img: '2021-cadouri',
        title: { ro: 'Cadouri de Crăciun pentru copii defavorizați', en: 'Christmas gifts for disadvantaged children' },
        text: {
          ro: 'În decembrie 2021, clubul a oferit cadouri pentru clase de copii defavorizați.',
          en: 'In December 2021, the club gave gifts to classes of disadvantaged children.',
        },
      },
    ],
  },
  {
    id: 'impuls',
    years: '2022–2023',
    title: { ro: 'Un nou impuls', en: 'A new momentum' },
    intro: {
      ro: 'Un nou ritm al proiectelor, cu accent pe educație, sănătate, comunitate și mediu. Prin acțiuni recurente și inițiative noi, clubul și-a reconfirmat legătura directă cu nevoile reale ale comunității.',
      en: "A new pace of projects, focused on education, health, community and the environment. Through recurring actions and new initiatives, the club reaffirmed its direct connection with the community's real needs.",
    },
    items: [
      {
        year: '2022',
        img: '2022-prim-ajutor',
        title: { ro: 'Conștientizarea procedurilor de prim-ajutor', en: 'First aid awareness' },
        text: {
          ro: 'Clubul a adus în atenție importanța cunoașterii procedurilor de prim-ajutor, ca formă esențială de responsabilitate față de cei din jur.',
          en: 'The club highlighted the importance of knowing first aid procedures as an essential form of responsibility towards others.',
        },
      },
      {
        year: '2022',
        img: '2022-gugulan',
        project: 'gugulan-mtb-run-caransebes',
        title: { ro: 'Gugulan MTB & RUN Caransebeș', en: 'Gugulan MTB & RUN Caransebeș' },
        text: {
          ro: 'Susținerea evenimentului sportiv dedicat mișcării și vieții active, desfășurat în Parcul Teiuș.',
          en: 'Support for the sports event dedicated to movement and active living, held in Teiuș Park.',
        },
      },
      {
        year: '2022',
        img: '2022-gulas-educatie',
        title: { ro: '„Gulaș pentru educație”', en: '"Goulash for education"' },
        text: {
          ro: 'La Serbările Cetății, clubul a strâns fonduri pentru proiecte educaționale destinate comunității.',
          en: 'At the Citadel Festival, the club raised funds for educational projects for the community.',
        },
      },
      {
        year: '2022',
        img: '2022-promenada',
        project: 'promenada-inimilor',
        title: { ro: 'Promenada Inimilor', en: 'Promenade of Hearts' },
        text: {
          ro: 'Proiectul dedicat sănătății cardiovasculare și importanței mișcării a continuat.',
          en: 'The project dedicated to cardiovascular health and the importance of exercise continued.',
        },
      },
      {
        year: '2022',
        img: '2022-imprimanta',
        project: 'educatie-pentru-noua-generatie',
        title: { ro: 'Educație pentru noua generație', en: 'Education for the new generation' },
        text: {
          ro: 'O imprimantă pentru Școala Gimnazială din Armeniș, în cadrul proiectului districtual dedicat învățământului rural.',
          en: 'A printer for the Armeniș secondary school, as part of the district project for rural education.',
        },
      },
      {
        year: '2023',
        img: '2023-casuta',
        title: { ro: '„Căsuța” și cadourile de Crăciun', en: 'The "Little House" and Christmas gifts' },
        text: {
          ro: 'Donațiile din vânzarea băuturilor calde au mers către proiectele clubului, iar copiii de la Balta Sărată au primit daruri de Crăciun.',
          en: 'Donations from hot drink sales went to club projects, and the children of Balta Sărată received Christmas gifts.',
        },
      },
      {
        year: '2023',
        img: '2023-planteaza',
        project: 'rotary-planteaza',
        title: { ro: 'Rotary Plantează', en: 'Rotary Plants Trees' },
        text: {
          ro: 'Cele două acțiuni de împădurire din martie 2023 au continuat angajamentul clubului față de protecția mediului.',
          en: "Two afforestation actions in March 2023 continued the club's commitment to protecting the environment.",
        },
      },
      {
        year: '2023',
        img: '2023-ziua-copilului',
        title: { ro: 'Ziua Copilului', en: "Children's Day" },
        text: {
          ro: 'Copiii din Caransebeș au primit gratuit spectacolul de teatru „Greierele și furnica”, iar în Parcul Teiuș au participat la primele lecții de prim ajutor.',
          en: 'The children of Caransebeș enjoyed a free performance of "The Cricket and the Ant", and took their first first-aid lessons in Teiuș Park.',
        },
      },
      {
        year: '2023',
        img: '2023-table-smart',
        project: 'educatie-pentru-noua-generatie',
        title: { ro: 'Table smart pentru școlile din mediul rural', en: 'Smart boards for rural schools' },
        text: {
          ro: 'Trei table smart donate școlilor din Armeniș, Băuțar și Rusca Montană.',
          en: 'Three smart boards donated to the schools in Armeniș, Băuțar and Rusca Montană.',
        },
      },
      {
        year: '2023',
        img: '2023-erbach',
        project: 'parteneriat-rotary-club-erbach-michelstadt',
        title: { ro: 'Parteneriatul cu Rotary Club Erbach-Michelstadt', en: 'Partnership with Rotary Club Erbach-Michelstadt' },
        text: {
          ro: 'Întâlnirile din vara lui 2023 au deschis o nouă etapă de colaborare în domeniul social.',
          en: 'Meetings in the summer of 2023 opened a new chapter of collaboration in the social field.',
        },
      },
      {
        year: '2023',
        img: '2023-christmas-for-everyone',
        project: 'craciun-2023-o-zi-cu-mos-craciun',
        title: { ro: 'Christmas for Everyone', en: 'Christmas for Everyone' },
        text: {
          ro: 'Interact a împărțit cadouri copiilor de la Grădinița din Balta Sărată, iar seniorii Rotary au oferit dulciuri elevilor de la Școala Generală nr. 1 Balta Sărată.',
          en: 'Interact handed out gifts to the children of the Balta Sărată kindergarten, and the Rotary seniors gave sweets to the pupils of Balta Sărată School No. 1.',
        },
      },
      {
        year: '2023',
        img: '2023-mos-craciun',
        project: 'craciun-2023-o-zi-cu-mos-craciun',
        title: { ro: 'Spectacolul interactiv „O zi cu Moș Crăciun”', en: 'Interactive show "A day with Santa Claus"' },
        text: {
          ro: 'În parteneriat cu Primăria și Casa de Cultură „George Suru”, peste 400 de copii au participat la spectacol.',
          en: 'In partnership with City Hall and the "George Suru" House of Culture, more than 400 children attended the show.',
        },
      },
    ],
  },
  {
    id: 'recent',
    years: '2024–2026',
    title: { ro: 'Solidaritate, educație și continuitate', en: 'Solidarity, education and continuity' },
    intro: {
      ro: 'În anii recenți, clubul a continuat să îmbine sprijinul social, educația, proiectele comunitare și inițiativele dedicate tinerilor — o etapă a continuității și a unei energii noi.',
      en: 'In recent years the club has kept combining social support, education, community projects and initiatives for young people — a chapter of continuity and new energy.',
    },
    outro: {
      ro: 'Anii 2024–2026 vorbesc despre un Rotary Club Caransebeș viu, prezent și atent la nevoile reale ale comunității, un club care își păstrează valorile, își continuă proiectele și devine tot mai puternic prin generațiile care îi duc mai departe misiunea.',
      en: 'The years 2024–2026 speak of a Rotary Club Caransebeș that is alive, present and attentive to the real needs of the community — a club that keeps its values, continues its projects and grows stronger through the generations carrying its mission forward.',
    },
    items: [
      {
        year: '2024',
        img: '2024-super-bal',
        project: 'super-balul-interact-2024',
        title: { ro: 'Solidaritate pentru comunitate', en: 'Solidarity for the community' },
        text: {
          ro: 'Super Balul Interact din 23 februarie 2024 a strâns 7.500 lei pentru Cristi, un copil cu tetrapareză spastică, iar 12.000 lei au fost direcționați către Asociația pentru Autism Infantil din Caransebeș.',
          en: 'The Interact Super Ball on 23 February 2024 raised 7,500 lei for Cristi, a child with spastic tetraparesis, and 12,000 lei went to the Caransebeș Childhood Autism Association.',
        },
      },
      {
        year: '2024',
        img: '2024-varstnici',
        project: 'ingrijirea-persoanelor-varstnice',
        title: { ro: 'Sprijin pentru îngrijirea persoanelor vârstnice', en: 'Support for elderly home care' },
        text: {
          ro: 'O donație de 12.500 lei către Congregația Surorilor Franciscane și Fundația Caritas Timișoara, pentru îngrijirea la domiciliu a vârstnicilor.',
          en: 'A donation of 12,500 lei to the Franciscan Sisters and Caritas Timișoara Foundation for home care of elderly people.',
        },
      },
      {
        year: '2024',
        img: '2024-copacul-prieteniei',
        project: 'parteneriat-rotary-club-erbach-michelstadt',
        title: { ro: 'Copacul prieteniei româno-germane', en: 'The Romanian-German friendship tree' },
        text: {
          ro: 'La 10 aprilie 2024 a fost plantat, împreună cu președintele Rotary Club Erbach-Michelstadt, copacul prieteniei rotariene.',
          en: 'On 10 April 2024, the Rotary friendship tree was planted together with the president of Rotary Club Erbach-Michelstadt.',
        },
      },
      {
        year: '2024',
        img: '2024-gugulan',
        project: 'gugulan-mtb-run-caransebes',
        title: { ro: 'Susținerea sportului și a performanței', en: 'Supporting sport and achievement' },
        text: {
          ro: 'Clubul a susținut financiar competiția Gugulan MTB & Run Caransebeș, promovând un stil de viață activ.',
          en: 'The club financially supported the Gugulan MTB & Run Caransebeș competition, promoting an active lifestyle.',
        },
      },
      {
        year: '2024',
        img: '2024-bursa',
        project: 'bursa-pentru-un-student-la-medicina',
        title: { ro: 'Sprijin pentru educație și viitor', en: 'Support for education and the future' },
        text: {
          ro: 'Un sprijin de 4.500 lei anual, pe parcursul studiilor, pentru Abel, student la Medicină.',
          en: 'Support of 4,500 lei a year throughout his studies for Abel, a medical student.',
        },
      },
      {
        year: '2025',
        img: '2025-mediu',
        project: 'rotary-planteaza',
        title: { ro: 'Grijă pentru comunitate și mediu', en: 'Caring for the community and the environment' },
        text: {
          ro: 'Acțiuni de ecologizare, plantare și proiecte care au pus în valoare spațiile cu semnificație pentru oraș.',
          en: 'Clean-up and planting actions and projects that highlighted places of significance for the town.',
        },
      },
      {
        year: '2025',
        img: '2025-campanii',
        title: { ro: 'Solidaritate și campanii caritabile', en: 'Solidarity and charity campaigns' },
        text: {
          ro: 'Au continuat inițiativele de ajutor pentru copii și cazuri vulnerabile, campaniile de prevenție medicală și acțiunile de Crăciun alături de Interact.',
          en: 'Help for children and vulnerable cases, medical prevention campaigns and Christmas actions with Interact continued.',
        },
      },
      {
        year: '2025',
        img: '2025-unite-for-good',
        project: 'unite-for-good',
        title: { ro: '„UNITE FOR GOOD”', en: '"UNITE FOR GOOD"' },
        text: {
          ro: '2.000 lei pentru comunitățile afectate de fenomene meteo extreme, la apelul Rotary Club Fălticeni, și 1.000 € pentru campania „Împreună pentru Adriana”.',
          en: '2,000 lei for communities hit by extreme weather, answering Rotary Club Fălticeni’s appeal, and €1,000 for the "Together for Adriana" campaign.',
        },
      },
      {
        year: '2025',
        img: '2025-gugulan',
        project: 'gugulan-mtb-run-caransebes',
        title: { ro: 'Gugulan MTB & RUN Caransebeș', en: 'Gugulan MTB & RUN Caransebeș' },
        text: {
          ro: 'Prezență, sponsorizare și strângere de fonduri la un eveniment devenit deja tradiție.',
          en: 'Presence, sponsorship and fundraising at an event that has become a tradition.',
        },
      },
      {
        year: '2025',
        img: '2025-promenada',
        project: 'promenada-inimilor',
        title: { ro: 'Promenada Inimilor 2025', en: 'Promenade of Hearts 2025' },
        text: {
          ro: 'Una dintre acțiunile recurente ale clubului, dedicată prevenției și sănătății cardiovasculare.',
          en: "One of the club's recurring actions, dedicated to prevention and cardiovascular health.",
        },
      },
      {
        year: '2025',
        img: '2025-suflete-mici',
        project: 'donatie-sectia-psihiatrie-pediatrica',
        title: { ro: '„O mână de ajutor pentru sufletele mici”', en: '"A helping hand for little souls"' },
        text: {
          ro: 'Campanie pentru dotarea Secției de Psihiatrie Pediatrică și îmbunătățirea condițiilor oferite copiilor internați.',
          en: 'A campaign to equip the Paediatric Psychiatry ward and improve conditions for hospitalised children.',
        },
      },
      {
        year: '2026',
        img: '2026-prim-ajutor',
        link: '/despre-noi/interact',
        title: { ro: 'Prim ajutor pentru tinerii din Interact', en: 'First aid training for Interact members' },
        text: {
          ro: 'Tinerii au participat la sesiuni practice de prim ajutor, în spiritul responsabilității.',
          en: 'Young members took part in practical first aid sessions, in a spirit of responsibility.',
        },
      },
      {
        year: '2026',
        img: '2026-ryla',
        link: '/despre-noi/interact',
        title: { ro: 'Interact Caransebeș la RYLA', en: 'Interact Caransebeș at RYLA' },
        text: {
          ro: 'Prin Rotary Youth Leadership Awards, membrii Interact au trăit o experiență de leadership și dezvoltare personală.',
          en: 'Through the Rotary Youth Leadership Awards, Interact members gained experience in leadership and personal growth.',
        },
      },
      {
        year: '2026',
        img: '2026-superbal',
        project: 'superbal-interact-2026',
        title: { ro: 'SuperBal 2026', en: 'SuperBal 2026' },
        text: {
          ro: 'Organizat de Interact Caransebeș cu sprijinul clubului, evenimentul a reunit tineri, energie și solidaritate.',
          en: 'Organised by Interact Caransebeș with the club’s support, the event brought together young people, energy and solidarity.',
        },
      },
      {
        year: '2026',
        img: '2026-psihiatrie-pediatrica',
        project: 'donatie-sectia-psihiatrie-pediatrica',
        title: { ro: 'Donație pentru Secția de Psihiatrie Pediatrică', en: 'Donation to the Paediatric Psychiatry ward' },
        text: {
          ro: 'Campania s-a concretizat prin donația unui frigider și a 8 noptiere, pentru condiții mai bune copiilor internați.',
          en: 'The campaign resulted in the donation of a refrigerator and 8 bedside tables, improving conditions for hospitalised children.',
        },
      },
      {
        year: '2026',
        img: '2026-concurs-arta',
        project: 'concurs-de-arta-plastica-caransebesul-meu',
        title: { ro: 'Concursul de artă plastică „Caransebeșul meu”', en: 'Art contest "My Caransebeș"' },
        text: {
          ro: 'Un proiect pentru copii și tineri, care a adus în prim-plan patrimoniul local, creativitatea și apartenența la comunitate.',
          en: 'A project for children and young people that highlighted local heritage, creativity and belonging to the community.',
        },
      },
      {
        year: '2026',
        img: '2026-muzeu',
        project: 'o-seara-magica-la-muzeul-din-caransebes',
        title: { ro: '„O seară magică la Muzeul din Caransebeș”', en: '"A magical evening at the Caransebeș Museum"' },
        text: {
          ro: 'Storytelling, patrimoniu local și valorile culturale ale orașului, într-un format cald și memorabil.',
          en: "Storytelling, local heritage and the town's cultural values in a warm and memorable format.",
        },
      },
      {
        year: '2026',
        project: 'tinerii-trebuie-sa-stie',
        img: '2026-tinerii-trebuie-sa-stie',
        title: { ro: 'Educație și memorie istorică pentru tineri', en: 'Education and historical memory for young people' },
        text: {
          ro: 'Cu Rotary Club Reșița și Fundația Internațională Zoly Kovacs, proiectul „Tinerii trebuie să știe”: cărți donate către 27 de licee din Caraș-Severin și întâlniri cu autorul.',
          en: 'With Rotary Club Reșița and the Zoly Kovacs International Foundation, the "Young people must know" project: books donated to 27 high schools in Caraș-Severin and meetings with the author.',
        },
      },
    ],
  },
];

export const future: Record<Lang, { title: string; paragraphs: string[]; quote: string }> = {
  ro: {
    title: 'Ce urmează: continuitate, implicare și noi proiecte pentru comunitate',
    paragraphs: [
      'Privind spre anii următori, Rotary Club Caransebeș își propune să ducă mai departe proiectele care au definit clubul în ultimele două decenii și să răspundă, cu aceeași responsabilitate, nevoilor actuale ale comunității: educație, sănătate, sprijin social și formarea tinerei generații.',
      'În centrul acestor planuri se află susținerea excelenței școlare, activitățile pentru elevi, continuarea cursurilor de prim-ajutor și a proiectelor pentru siguranța în școli, sprijinul pentru sistemul medical, precum și inițiativele dedicate copiilor, seniorilor și persoanelor vulnerabile.',
    ],
    quote: 'Viitorul se construiește prin aceeași credință care ne-a însoțit mereu: binele făcut împreună poate schimba o comunitate.',
  },
  en: {
    title: 'What comes next: continuity, involvement and new projects for the community',
    paragraphs: [
      'Looking ahead, Rotary Club Caransebeș aims to carry forward the projects that have defined the club over the last two decades and to respond, with the same responsibility, to the current needs of the community: education, health, social support and the formation of the young generation.',
      'At the heart of these plans are supporting academic excellence, activities for pupils, continuing first aid courses and school safety projects, support for the medical system, and initiatives for children, seniors and vulnerable people.',
    ],
    quote: 'The future is built on the same belief that has always guided us: good done together can change a community.',
  },
};

export const labels: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    figuresTitle: string;
    timelineTitle: string;
    details: string;
    emblemEyebrow: string;
    emblemTitle: string;
    emblemText: string;
    messagesTitle: string;
    thanksTitle: string;
    thanksText: string;
    teaserCta: string;
  }
> = {
  ro: {
    eyebrow: '2006–2026',
    title: '20 de ani de implicare în comunitate',
    figuresTitle: '20 de ani în cifre',
    timelineTitle: 'Proiecte notabile',
    details: 'Detalii',
    emblemEyebrow: 'Un proiect-emblemă',
    emblemTitle: 'Global Grant pentru Spitalul Municipal de Urgență Caransebeș',
    emblemText:
      'Un buget de 75.850 USD, cluburi partenere din Germania, Belgia, Austria și Serbia, 15 calculatoare, 15 imprimante multifuncționale, un defibrilator, mobilier, aparatură medicală și un bronhoscop Storz de 148.000 lei.',
    messagesTitle: 'Mesaje aniversare',
    thanksTitle: 'Vă mulțumim!',
    thanksText:
      'Adresăm întreaga noastră recunoștință tuturor celor care au fost alături de Rotary Club Caransebeș: membri, foști președinți, parteneri, sponsori, colaboratori, voluntari și prieteni ai clubului. Cu aceeași credință în puterea solidarității, mergem mai departe.',
    teaserCta: 'Descoperă povestea noastră',
  },
  en: {
    eyebrow: '2006–2026',
    title: '20 years of service to the community',
    figuresTitle: '20 years in numbers',
    timelineTitle: 'Notable projects',
    details: 'Details',
    emblemEyebrow: 'A flagship project',
    emblemTitle: 'Global Grant for the Caransebeș Municipal Emergency Hospital',
    emblemText:
      'A budget of USD 75,850, partner clubs from Germany, Belgium, Austria and Serbia, 15 computers, 15 multifunction printers, a defibrillator, furniture, medical equipment and a Storz bronchoscope worth 148,000 lei.',
    messagesTitle: 'Anniversary messages',
    thanksTitle: 'Thank you!',
    thanksText:
      'We extend our deepest gratitude to everyone who has stood by Rotary Club Caransebeș: members, past presidents, partners, sponsors, collaborators, volunteers and friends of the club. With the same faith in the power of solidarity, we move forward.',
    teaserCta: 'Discover our story',
  },
};
