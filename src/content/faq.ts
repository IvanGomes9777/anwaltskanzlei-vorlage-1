export interface QA {
  q: string;
  a: string;
}

export const faq: { de: QA[]; en: QA[] } = {
  de: [
    {
      q: 'Was kostet ein Erstgespräch?',
      a: 'Das Erstgespräch dient dem gegenseitigen Kennenlernen und einer ersten Einschätzung. Die Kosten besprechen wir vorab transparent – häufig zu einer festen Pauschale. Die Vergütung richtet sich grundsätzlich nach dem RVG oder einer Honorarvereinbarung.',
    },
    {
      q: 'Wie schnell bekomme ich einen Termin?',
      a: 'In dringenden Fällen – etwa bei kurzen Fristen im Arbeitsrecht oder in Haftsachen – melden wir uns kurzfristig. In der Regel erhalten Sie innerhalb eines Werktags eine Rückmeldung.',
    },
    {
      q: 'Übernehmen Sie auch Mandate außerhalb von München?',
      a: 'Ja. Wir betreuen Mandantinnen und Mandanten in München und bundesweit. Vieles lässt sich heute zuverlässig per Telefon, Video und E-Mail klären.',
    },
    {
      q: 'Werden meine Angaben vertraulich behandelt?',
      a: 'Selbstverständlich. Als Rechtsanwältinnen und Rechtsanwälte unterliegen wir der gesetzlichen Verschwiegenheitspflicht. Bitte senden Sie besonders sensible Details nicht unverschlüsselt per Formular oder E-Mail.',
    },
    {
      q: 'Übernimmt meine Rechtsschutzversicherung die Kosten?',
      a: 'Bei vielen Angelegenheiten ja. Wir prüfen gern den Versicherungsschutz und holen für Sie eine Deckungszusage ein.',
    },
    {
      q: 'Was sollte ich zum Termin mitbringen?',
      a: 'Alle relevanten Unterlagen zu Ihrem Anliegen – zum Beispiel Verträge, Schreiben der Gegenseite, Bescheide oder Fristen. Je vollständiger, desto besser können wir beraten.',
    },
  ],
  en: [
    {
      q: 'How much does an initial consultation cost?',
      a: 'The initial consultation is about getting to know each other and providing a first assessment. We agree the cost transparently in advance – often as a fixed fee. Fees are generally based on the RVG or a fee agreement.',
    },
    {
      q: 'How quickly can I get an appointment?',
      a: 'In urgent cases – such as short deadlines in employment law or detention matters – we respond at short notice. Usually you will hear back within one business day.',
    },
    {
      q: 'Do you also take on cases outside Munich?',
      a: 'Yes. We support clients in Munich and nationwide. Much can be handled reliably by phone, video and email today.',
    },
    {
      q: 'Will my information be treated confidentially?',
      a: 'Of course. As attorneys we are bound by statutory confidentiality. Please do not send particularly sensitive details unencrypted via the form or email.',
    },
    {
      q: 'Will my legal expenses insurance cover the costs?',
      a: 'In many matters, yes. We are happy to check your cover and obtain confirmation from your insurer.',
    },
    {
      q: 'What should I bring to the appointment?',
      a: 'All documents relevant to your matter – for example contracts, letters from the other side, official notices or deadlines. The more complete, the better we can advise.',
    },
  ],
};
