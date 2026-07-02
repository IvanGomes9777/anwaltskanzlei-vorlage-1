# Offene Punkte Live-Seite — Merkliste

Stand: 2. Juli 2026 (nach Merge von PR #6, #7 und #8). Betrifft den
Live-Stand (`main`).

## Warten auf Angaben der Kanzlei

- [ ] **USt-IdNr.** für das Impressum — aktuell steht dort
  „DE000000000 [Platzhalter]". Entweder echte Nummer eintragen oder die Zeile
  ersatzlos streichen, falls keine USt-IdNr. vorhanden ist.
- [ ] **Berufshaftpflichtversicherung** für das Impressum (§ 2 Abs. 1 Nr. 11
  DL-InfoV): Name und Anschrift des Versicherers sowie räumlicher
  Geltungsbereich — aktuell nur Platzhalter.
- [ ] **Rechtsanwaltskammer bestätigen:** Im Impressum steht „RAK Hamm
  [ggf. anpassen]" — für Münster plausibel, aber von der Kanzlei bestätigen
  lassen und den Vermerk entfernen.
- [ ] **Hero-Kennzahlen belegen oder entfernen:** „25+ Jahre Erfahrung" und
  „1.500+ betreute Mandate" stammen aus der Vorlage. Nur belegbare Angaben
  verwenden (§ 43b BRAO / BORA), sonst streichen.
- [ ] Danach: verbliebene Vorlagen-Warnhinweise („Beispiel-/Platzhalterinhalt")
  auf Impressum/Datenschutz/Kosten entfernen und alle Rechtstexte anwaltlich
  prüfen lassen.

## Aufgaben außerhalb des Codes (Vercel)

- [ ] **`CONTACT_*`-Environment-Variablen prüfen** (Project → Settings →
  Environment Variables): Empfänger-Adressen müssen die Zwei-„b"-Domain
  `luebbersmann-rechtsanwaelte.de` verwenden — die Ein-„b"-Variante existiert
  nicht (DNS-Prüfung 02.07.2026: NXDOMAIN). Ohne gesetzte Variablen läuft das
  Formular im Demo-Modus; ohne `CONTACT_TO_DEFAULT` schlägt der Versand mit
  Fehler an, statt an eine falsche Adresse zu senden.
- [ ] Bei Domain-Umzug auf die Kanzlei-Domain: `NEXT_PUBLIC_SITE_URL` setzen
  (Basis für Canonicals, Sitemap, robots.txt, JSON-LD-URLs).

## Entscheidung nötig

- [ ] **Porträtfoto aus Git-Historie entfernen (Audit Punkt 6):**
  `sascha-luebbersmann.jpg` liegt inkl. Historie im Repo. Vollständige
  Entfernung erfordert History-Rewrite (`git filter-repo` + Force-Push) —
  destruktiv, nur nach ausdrücklicher Freigabe. Solange die Kanzlei das Foto
  auf der Live-Seite nutzt, betrifft das nur die Historie-Hygiene.

## Bereits erledigt (Juli 2026)

- [x] Aufsichtsbehörde auf LDI NRW korrigiert (PR #8)
- [x] `/varianten/*`-Demoseiten entfernt (PR #8)
- [x] E-Mail-Adresse überall auf `luebbersmann@luebbersmann-rechtsanwaelte.de`
  korrigiert (PR #8)
- [x] Zwei-Klick-Lösung für die Google-Maps-Karte (PR #7)
- [x] SEO: Canonicals, OpenGraph, OG-Image, Favicon, Sitemap-Fix (PR #7)
- [x] JSON-LD (LegalService/LocalBusiness, Attorney) + `llms.txt` (PR #7)
- [x] Mandatsbedingungen + Widerrufsbelehrung auf `/kosten`; Datenschutz um
  Mandats-Abschnitt und Speicherfristen erweitert (PR #7)
- [x] Dependabot aktiviert, `npm audit` 0 Schwachstellen (PR #7)
- [x] Security-Header, gehärtete Kontakt-API, robots/sitemap (PR #6)
