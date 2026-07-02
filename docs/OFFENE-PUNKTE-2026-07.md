# Offene Punkte nach dem Audit (Juli 2026)

Basiert auf dem Audit-Bericht `docs/AUDIT-2026-07-SECURITY-DATENSCHUTZ-SEO.md`.
Stand: 2. Juli 2026 · Live: https://anwaltskanzlei-vorlage-1.vercel.app

**Wichtig:** Das Live-Deployment ist bereits eine teilpersonalisierte Website einer
realen Kanzlei („Lübbersmann Rechtsanwälte", Münster). Dieser Code-Stand liegt
**nicht** in diesem Repo — die kritischen Punkte unten betreffen die Live-Seite und
müssen dort (bzw. im dazugehörigen Code-Stand) behoben werden.

## Bereits umgesetzt (PR „Deep-Audit", Branch `claude/repo-security-compliance-audit-xb8szm`)

- [x] Security-Header komplett (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS), X-Powered-By entfernt
- [x] Kontakt-API gehärtet: Rate-Limit 5/Min./IP (429 + Retry-After), Feldlängen-Limits, Zeilenumbruch-Stripping (Header-Injection), Fehler statt Fallback an `info@example.com`, kein PII-Logging im Demo-Modus
- [x] `robots.ts` (sperrt `/api/` und `/{locale}/varianten`) und `sitemap.ts` (alle Locales, hreflang, Rechtsgebiets- & Anwalts-Slugs)
- [x] `/varianten`-Demoseiten auf noindex
- [x] `metadataBase` über zentrale `src/lib/site.ts` (`NEXT_PUBLIC_SITE_URL`)
- [x] Datenschutzerklärung (DE/EN): Resend-Abschnitt (Art. 28 / Art. 46 DSGVO, US-Übermittlung), `NEXT_LOCALE`-Cookie benannt, Aufsichtsbehörde als neutraler Platzhalter
- [x] `.gitignore` auf `.env*` erweitert

## KRITISCH — Live-Seite (sofort, abmahnfähig)

| # | Aufgabe | Wo |
|---|---------|-----|
| 1 | **Impressum vervollständigen:** USt-IdNr. „DE000000000 [Platzhalter]" ersetzen oder Zeile entfernen; Berufshaftpflichtversicherung mit Name/Anschrift/Geltungsraum eintragen (§ 2 DL-InfoV); Vorlagen-Warnhinweise entfernen. Bis dahin Site auf noindex oder Passwortschutz. | live `/impressum` |
| 2 | **Datenschutzerklärung:** Aufsichtsbehörde auf **LDI NRW** korrigieren (aktuell BayLDA — falsch für Münster); alle „[Platzhalter]/[ggf. anpassen]"-Reste tilgen. | live `/datenschutz` |
| 3 | **E-Mail-Domain prüfen:** mutmaßlicher Tippfehler `luebersmann-` vs. `luebbersmann-rechtsanwaelte.de` — Anfragen könnten ins Leere laufen. | live Kontakt/Impressum |
| 4 | **`/varianten/*` von der Live-Seite entfernen** (öffentlich erreichbar, HTTP 200). | live |
| 5 | **Live-Code ins Repo zurückführen** — sonst laufen Vorlage und Produktion dauerhaft auseinander und die gemergten Fixes erreichen die Live-Seite nie. | Repo/Deployment |

## Entscheidung nötig

| # | Aufgabe | Hinweis |
|---|---------|---------|
| 6 | **Echtes Porträtfoto entfernen:** `sascha-luebbersmann.jpg` liegt inkl. Git-Historie im Vorlagen-Repo. Vollständige Entfernung erfordert History-Rewrite (`git filter-repo` + Force-Push) — destruktiv, nur nach Freigabe. | `public/team/…` |

## Verbesserungen — umgesetzt (PR #7, Juli 2026, angepasst auf den Live-Stand)

- [x] **7 — Karte:** Zwei-Klick-Lösung für die Google-Maps-Karte (`MapConsent.tsx`); Datenschutz auf Einwilligung umgestellt
- [x] **8 — SEO:** Canonical/OG/Twitter pro Seite (`src/lib/metadata.ts`), Title-Template, OG-Image, Favicon; Sitemap-Fix (nicht existierende Indexrouten entfernt)
- [x] **9 — JSON-LD:** LegalService/LocalBusiness im Layout, Attorney auf Team-Seiten; `public/llms.txt`
- [x] **10 — Rechtsseiten:** `/kosten` um Mandatsbedingungen + Widerrufsbelehrung erweitert; Datenschutz um Mandats-Abschnitt (§ 43a BRAO, Art. 9 DSGVO) und Speicherfristen
- [x] **11 — Kleinkram:** picsum-Hotlinks lokalisiert (CSP bereinigt), `nav.home`-Duplikat entfernt, SETUP.md-Prüfpunkte ergänzt
- [x] **12 — Betrieb:** Dependabot aktiviert, `npm audit` als Release-Prüfpunkt (0 Schwachstellen)

Verbleibende offene Punkte: siehe `docs/OFFENE-PUNKTE-LIVE.md`.

---

*Hinweis: Technische Prüfung, keine Rechtsberatung — Impressum, Datenschutzerklärung und Mandatsunterlagen vor Go-Live anwaltlich prüfen lassen.*
