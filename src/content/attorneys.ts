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
    teaser:
      'Strafverteidigung aus Überzeugung – mit Schwerpunkten im Wirtschafts-, Steuer- und Medizinstrafrecht. Bundesweite Beratung und Verteidigung für Unternehmen und Privatpersonen, von Compliance und Nebenklage bis zu Zoll- und Approbationsverfahren.',
    // TODO: echter Name und Foto ergänzen (Werdegang aus „Über mich"-PDF übernommen)
    img: '/team/member-1.webp',
    werdegang: [
      {
        year: 'Studium',
        items: [
          'International Baccalaureate (IB) in England',
          'Studium der Rechtswissenschaften an der Universität Regensburg',
          'Vertiefung im Strafrecht und in der Strafverteidigung bei Prof. Dr. Bockemühl, Regensburg',
          'Praktika bei Birkenstock Rechtsanwälte, Köln',
          'Erstes Staatsexamen in Bayern (Prüfungsort Regensburg)',
        ],
      },
      {
        year: 'Referendariat',
        items: [
          'Referendariat am Oberlandesgericht Düsseldorf',
          'Zweites Staatsexamen in Düsseldorf',
          'Wahlstation bei Lübbersmann Rechtsanwälte, Münster',
        ],
      },
      {
        year: 'Anwaltliche Tätigkeit',
        items: [
          'Rechtsanwältin bei Lübbersmann Rechtsanwälte, Münster',
          'Schwerpunkte: Wirtschaftsstrafrecht, Steuerstrafrecht und Medizinstrafrecht',
        ],
      },
      {
        year: 'Schwerpunkte',
        items: [
          'Bundesweite Verteidigung und Beratung im gesamten Strafrecht für Unternehmen und Privatpersonen',
          'Compliance, Nebenklage, Steuerstrafrecht sowie Verfahren durch den Zoll',
          'Medizinstrafrecht inkl. Approbations- und Disziplinarverfahren, Verfahren vor der Kassenärztlichen Vereinigung sowie Maßnahmen der Bezirksregierung',
        ],
      },
    ],
  },
];

export const getAttorney = (slug: string) =>
  attorneys.find((a) => a.slug === slug);
