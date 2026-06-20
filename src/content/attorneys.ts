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
  },
];

export const getAttorney = (slug: string) =>
  attorneys.find((a) => a.slug === slug);
