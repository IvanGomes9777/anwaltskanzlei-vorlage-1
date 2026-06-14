export interface AttorneyContent {
  role: string;
  area: string;
  vita: string[];
  focus: string[];
}

export interface Attorney {
  slug: string;
  name: string;
  img: string;
  de: AttorneyContent;
  en: AttorneyContent;
}

export const attorneys: Attorney[] = [
  {
    slug: 'katharina-hoffmann',
    name: 'Dr. Katharina Hoffmann',
    img: '/team/member-1.webp',
    de: {
      role: 'Partnerin',
      area: 'Familien- & Erbrecht',
      vita: [
        'Dr. Katharina Hoffmann gründete die Kanzlei mit und berät seit über 20 Jahren in allen Fragen des Familien- und Erbrechts.',
        'Sie verbindet juristische Präzision mit großem Einfühlungsvermögen und ist bekannt für klare, tragfähige Lösungen – auch in hochstrittigen Verfahren.',
      ],
      focus: ['Scheidung & Unterhalt', 'Sorge- & Umgangsrecht', 'Erbfolge & Pflichtteil', 'Eheverträge'],
    },
    en: {
      role: 'Partner',
      area: 'Family & Inheritance Law',
      vita: [
        'Dr. Katharina Hoffmann co-founded the firm and has advised on all matters of family and inheritance law for over 20 years.',
        'She combines legal precision with great empathy and is known for clear, durable solutions – even in highly contested proceedings.',
      ],
      focus: ['Divorce & maintenance', 'Custody & access', 'Succession & compulsory portion', 'Prenuptial agreements'],
    },
  },
  {
    slug: 'michael-vogel',
    name: 'Michael Vogel',
    img: '/team/member-2.webp',
    de: {
      role: 'Partner',
      area: 'Strafrecht',
      vita: [
        'Michael Vogel ist Strafverteidiger aus Überzeugung und seit zwei Jahrzehnten in anspruchsvollen Verfahren tätig.',
        'Diskretion, schnelle Erreichbarkeit und akribische Vorbereitung sind die Grundpfeiler seiner Verteidigung.',
      ],
      focus: ['Wirtschaftsstrafrecht', 'Verkehrsstrafrecht', 'Untersuchungshaft', 'Revision'],
    },
    en: {
      role: 'Partner',
      area: 'Criminal Law',
      vita: [
        'Michael Vogel is a defence lawyer by conviction and has handled demanding cases for two decades.',
        'Discretion, fast availability and meticulous preparation are the pillars of his defence work.',
      ],
      focus: ['White-collar crime', 'Traffic criminal law', 'Pre-trial detention', 'Appeals'],
    },
  },
  {
    slug: 'julia-brandt',
    name: 'Dr. Julia Brandt',
    img: '/team/member-3.webp',
    de: {
      role: 'Rechtsanwältin',
      area: 'Arbeitsrecht',
      vita: [
        'Dr. Julia Brandt berät Arbeitnehmer und Unternehmen in allen Fragen des individuellen und kollektiven Arbeitsrechts.',
        'Sie verhandelt hart in der Sache und bleibt dabei stets lösungsorientiert.',
      ],
      focus: ['Kündigungsschutz', 'Abfindungen', 'Arbeitsverträge', 'Aufhebungsverträge'],
    },
    en: {
      role: 'Attorney',
      area: 'Employment Law',
      vita: [
        'Dr. Julia Brandt advises employees and companies on all questions of individual and collective employment law.',
        'She negotiates firmly on the substance while remaining solution-oriented.',
      ],
      focus: ['Protection against dismissal', 'Severance', 'Employment contracts', 'Termination agreements'],
    },
  },
  {
    slug: 'stefan-keller',
    name: 'Stefan Keller',
    img: '/team/member-4.webp',
    de: {
      role: 'Rechtsanwalt',
      area: 'Vertrags- & Wirtschaftsrecht',
      vita: [
        'Stefan Keller begleitet Unternehmen, Gründer und Selbstständige von der Vertragsgestaltung bis zur Durchsetzung ihrer Ansprüche.',
        'Pragmatisch, gründlich und mit unternehmerischem Blick.',
      ],
      focus: ['Verträge & AGB', 'Gesellschaftsrecht', 'Haftungsfragen', 'Forderungen'],
    },
    en: {
      role: 'Attorney',
      area: 'Contract & Commercial Law',
      vita: [
        'Stefan Keller supports companies, founders and the self-employed from contract drafting to enforcing their claims.',
        'Pragmatic, thorough and with an entrepreneurial eye.',
      ],
      focus: ['Contracts & T&Cs', 'Corporate law', 'Liability', 'Receivables'],
    },
  },
];

export const getAttorney = (slug: string) =>
  attorneys.find((a) => a.slug === slug);
