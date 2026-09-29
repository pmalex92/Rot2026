// Date specifice clubului, folosite în mai multe locuri din site.
export const site = {
  founded: 2006,
  facebookUrl: 'https://www.facebook.com/RotaryClubCaransebes',
  instagramUrl: 'https://www.instagram.com/rotaryclubcaransebes/',
  email: 'secretariat@rotaryclubcaransebes.ro',
  phone: '',
  address: 'Caransebeș, jud. Caraș-Severin',
  heroVimeoId: '1091412996',
  meeting: {
    ro: {
      when: 'În fiecare marți, ora 19:00',
      where: 'Casa de Cultură „George Suru”, Str. Episcopiei nr. 6, Caransebeș, Caraș-Severin',
    },
    en: {
      when: 'Every Tuesday, 7:00 PM',
      where: '„George Suru” House of Culture, 6 Episcopiei Street, Caransebeș, Caraș-Severin',
    },
    mapQuery: 'Casa de Cultura George Suru, Strada Episcopiei 6, Caransebes',
  },
  // Cifrele din secțiunea „Impactul nostru” de pe prima pagină.
  stats: {
    years: 20,
    projects: 100,
    beneficiaries: 5000,
    partners: 50,
  },
  bank: {
    beneficiary: 'Rotary Club Caransebeș',
    cif: '22700404',
    iban: 'RO50BTRL01101205G98376XX',
    bankName: 'Banca Transilvania',
  },
};

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.meeting.mapQuery)}`;
