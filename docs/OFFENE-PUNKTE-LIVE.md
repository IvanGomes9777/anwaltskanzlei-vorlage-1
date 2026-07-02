# Offene Punkte Live-Seite — warten auf Infos der Kanzlei

Stand: 2. Juli 2026. Diese Punkte aus dem Audit (siehe PR #6/#7) können erst
umgesetzt werden, wenn die Kanzlei die Angaben liefert. Betrifft den
Live-Stand (`main`).

## Benötigte Angaben

- [ ] **USt-IdNr.** für das Impressum — aktuell steht dort
  „DE000000000 [Platzhalter]". Entweder echte Nummer eintragen oder die Zeile
  ersatzlos streichen, falls keine USt-IdNr. vorhanden ist.
- [ ] **Berufshaftpflichtversicherung** für das Impressum (§ 2 Abs. 1 Nr. 11
  DL-InfoV): Name und Anschrift des Versicherers sowie räumlicher
  Geltungsbereich — aktuell nur Platzhalter.
- [ ] **Korrekte E-Mail-Domain** bestätigen: Im Code steht
  `…@luebersmann-rechtsanwaelte.de` (ein „b"), der Kanzleiname schreibt sich
  aber „Lübbersmann" (zwei „b"). Falls Tippfehler: `.env`-Variablen in Vercel,
  `.env.example`, `src/app/api/contact/route.ts` und ggf. Impressum/Kontakt
  korrigieren. Bis zur Klärung können Anfragen ins Leere laufen!
- [ ] Danach: verbliebene Vorlagen-Warnhinweise („Beispiel-/Platzhalterinhalt")
  auf Impressum/Datenschutz entfernen und beide Seiten anwaltlich prüfen lassen.

## Bereits erledigt (dieser Branch)

- [x] Aufsichtsbehörde in der Datenschutzerklärung auf LDI NRW korrigiert
  (vorher fälschlich BayLDA — für den Kanzleisitz Münster ist NRW zuständig).
- [x] `/varianten/*`-Demoseiten entfernt (waren live öffentlich erreichbar).

## Separat offen

- [ ] **Punkt 6 (Entscheidung nötig):** Echtes Porträtfoto
  (`sascha-luebbersmann.jpg`) inkl. Git-Historie aus dem Vorlagen-Repo
  entfernen — erfordert History-Rewrite (`git filter-repo` + Force-Push),
  destruktiv, nur nach Freigabe.
- [ ] Die Vorlagen-Verbesserungen aus PR #7 (Zwei-Klick-Karte, SEO, JSON-LD,
  Vergütungsseite …) beim Merge mit dem Lübbersmann-Stand auf `main`
  zusammenführen — Konflikte bewusst auflösen, Lübbersmann-Inhalte sind
  maßgeblich.
