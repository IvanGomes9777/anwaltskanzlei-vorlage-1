export interface TimelineEntry {
  year: string;
  items: string[];
}

export interface Attorney {
  slug: string;
  name: string;
  role: string;
  teaser: string;
  /** Optionaler „Über mich"-Fließtext (Absätze), wird über dem Werdegang angezeigt. */
  intro?: string[];
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
    // TODO: echter Name und Foto ergänzen (Werdegang & Intro aus „Über mich"-PDF übernommen)
    img: '/team/member-1.webp',
    intro: [
      'Mein juristischer Weg begann nach dem International Baccalaureate (IB) in England mit dem Studium der Rechtswissenschaften an der Universität Regensburg. Bereits während des Studiums entwickelte sich meine besondere Leidenschaft für das Strafrecht und die Strafverteidigung – ein Schwerpunkt, den ich bei Prof. Dr. Bockemühl vertiefte.',
      'Diese Rechtsgebiete verbinden komplexe rechtliche Fragestellungen mit häufig weitreichenden persönlichen und wirtschaftlichen Konsequenzen. Gerade deshalb ist mir eine individuelle, vertrauensvolle und zugleich klare Beratung besonders wichtig – und eine Begleitung, die auch mögliche Folgeverfahren und die verschiedenen rechtlichen Ebenen im Blick behält.',
      'Meine Tätigkeit ist geprägt von einer sorgfältigen Analyse des jeweiligen Sachverhalts, einer strategischen Herangehensweise und einer konsequenten Wahrnehmung der Interessen meiner Mandantinnen und Mandanten. Dabei lege ich großen Wert auf eine persönliche Betreuung und darauf, auch komplexe Zusammenhänge verständlich und transparent zu vermitteln.',
      'Mein beruflicher Weg hat mich von Köln über Regensburg und Düsseldorf nach Münster geführt. Heute verbinde ich meine frühe Spezialisierung auf das Strafrecht mit meiner anwaltlichen Erfahrung und meinem besonderen Interesse an den Schnittstellen von Strafrecht, Wirtschaft, Steuern und Medizin.',
    ],
    werdegang: [
      {
        year: 'Studium',
        items: [
          'International Baccalaureate (IB) in England',
          'Studium der Rechtswissenschaften an der Universität Regensburg',
          'Vertiefung im Strafrecht und in der Strafverteidigung bei Prof. Dr. Bockemühl, Regensburg',
          'Praktika bei Birkenstock Rechtsanwälte in Köln (Heimatstadt)',
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
