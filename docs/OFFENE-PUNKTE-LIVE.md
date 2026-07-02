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
- [x] **E-Mail-Domain geklärt und korrigiert:** DNS-Prüfung (02.07.2026) ergab,
  dass `luebersmann-rechtsanwaelte.de` (ein „b") nicht existiert (NXDOMAIN) —
  nur `luebbersmann-rechtsanwaelte.de` (zwei „b") hat einen Mail-Server
  (Microsoft 365). Alle Code-Stellen auf
  `luebbersmann@luebbersmann-rechtsanwaelte.de` korrigiert.
  **Noch offen:** Die `CONTACT_*`-Environment-Variablen in Vercel
  (Project → Settings → Environment Variables) auf die Zwei-„b"-Domain
  prüfen/korrigieren — sonst versendet die Kontakt-API weiter an die
  nicht existierende Domain.
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
