export interface TimelineEntry {
  year: string;
  items: string[];
}

export interface Attorney {
  slug: string;
  name: string;
  role: string;
  teaser: string;
  img: string;
  werdegang: TimelineEntry[];
}

export const attorneys: Attorney[] = [
  {
    slug: 'sascha-luebbersmann',
    name: 'Sascha Lübbersmann',
    role: 'Rechtsanwalt · Fachanwalt für Strafrecht',
    teaser:
      'Als Fachanwalt für Strafrecht und langjähriger Dozent verteidigt Sascha Lübbersmann mit Präzision und Erfahrung – mit Schwerpunkten im Wirtschafts-, Medizin- und Steuerstrafrecht.',
    img: '/team/sascha-luebbersmann.jpg',
    werdegang: [
      { year: '1973', items: ['Geboren in Münster'] },
      {
        year: '1992',
        items: [
          'Abitur am Gymnasium Paulinum, Münster',
          'Studium der Rechtswissenschaften in Marburg und Münster',
          'Dozent und Fachautor für Strafrecht, Repetitorium Alpmann Schmidt',
        ],
      },
      { year: '2003', items: ['Zulassung als Rechtsanwalt'] },
      {
        year: '2003–2007',
        items: [
          'Alpmann Fröhlich Rechtsanwaltsgesellschaft mbH, Münster und Emsdetten',
          'Fachanwaltslehrgang Strafrecht, Fernuniversität Hagen',
        ],
      },
      {
        year: '2008–2009',
        items: ['Kanzlei Minoggio Rechtsanwälte und Strafverteidiger, Hamm und Münster'],
      },
      {
        year: '2009',
        items: [
          'Dozent für Strafrecht, Kaiserseminare in Dortmund',
          'Promotionsstudium, Ruhr-Universität Bochum',
        ],
      },
    ],
  },
  {
    slug: 'rechtsanwaeltin',
    name: '[Name folgt]',
    role: 'Rechtsanwältin',
    teaser: 'Kurzprofil folgt in Kürze.',
    // TODO: echtes Foto und Daten ergänzen
    img: '/team/member-1.webp',
    werdegang: [
      { year: '—', items: ['Der Werdegang folgt in Kürze.'] },
    ],
  },
];

export const getAttorney = (slug: string) =>
  attorneys.find((a) => a.slug === slug);
