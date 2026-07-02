# Audit-Bericht: Sicherheit, Datenschutz/DSGVO, Berufsrecht, SEO & GEO

**Projekt:** `anwaltskanzlei-vorlage-1` (Next.js 15 Vorlage für Anwaltskanzleien, next-intl DE/EN, Resend)
**Audit-Datum:** 02.07.2026
**Geprüfter Stand:** lokales Repo (Branch `claude/repo-security-compliance-audit-xb8szm`, HEAD `6fa8591`) sowie Live-Deployment
**Live-URL:** https://anwaltskanzlei-vorlage-1.vercel.app

---

## Executive Summary

Die Vorlage ist handwerklich überdurchschnittlich sauber: keine bekannten Paket-Schwachstellen (`npm audit`: 0 Findings), keine committeten Secrets, kein `dangerouslySetInnerHTML`, Impressum und Datenschutzerklärung sind als Vorlage bereits erstaunlich vollständig (inkl. Kammer, Berufsbezeichnung, BRAO/BORA/FAO/RVG/CCBE, Berufshaftpflicht-Platzhalter, § 36 VSBG, Schlichtungsstelle der Rechtsanwaltschaft — und korrekt **ohne** Verweis auf die im Juli 2025 abgeschaltete EU-ODR-Plattform). Google Fonts werden via `next/font` self-hosted (kein DSGVO-Problem à la LG München).

**Aber:** Das Audit hat einen gravierenden übergeordneten Befund ergeben:

> **Das Live-Deployment unter `anwaltskanzlei-vorlage-1.vercel.app` ist nicht mehr die Demo-Vorlage „Hoffmann · Vogel", sondern ein bereits personalisierter Auftritt einer offenbar realen Kanzlei („Lübbersmann Rechtsanwälte", Südstraße 11, 48153 Münster, RA Sascha Lübbersmann, Fachanwalt für Strafrecht) — mit weiterhin sichtbaren Platzhaltern in Impressum und Datenschutzerklärung, einer falschen Datenschutz-Aufsichtsbehörde (BayLDA statt LDI NRW) und öffentlich erreichbaren Design-Demoseiten (`/varianten/*`).** Der Code-Stand dieses Deployments liegt nicht im geprüften Repo (Repo-HEAD endet mit dem Foto-Upload; beide lokalen Branches sind identisch).

Da die Zielgruppe **Rechtsanwälte** sind (berufsrechtliche Pflichten nach BRAO/BORA, Verschwiegenheit nach § 43a Abs. 2 BRAO, DL-InfoV), sind unvollständige Pflichtangaben und der US-Versand von Kontaktanfragen keine Formalien, sondern abmahn- bzw. haftungsrelevant.

**Top-Risiken:**
1. **(Kritisch, live)** Reale Kanzlei-Website mit Platzhalter-Pflichtangaben live: USt-IdNr. „DE000000000 [Platzhalter]", Berufshaftpflichtversicherung „[Name und Anschrift des Versicherers]" (Verstoß gegen § 2 DL-InfoV / § 5 DDG), falsche Aufsichtsbehörde in der Datenschutzerklärung.
2. **(Hoch)** Kontaktanfragen — bei einer Strafrechtskanzlei regelmäßig hochsensibel — werden über Resend (US-Anbieter) versendet; die Datenschutzerklärung erwähnt Resend und die Drittlandsübermittlung (Art. 44 ff. DSGVO) **nicht**.
3. **(Hoch)** Cookie-Banner ist funktionslos (Auswahl ohne Wirkung); die OpenStreetMap-Karte lädt unabhängig von der Einwilligung und übermittelt IP-Adressen an die OSMF (UK).
4. **(Hoch)** Kontakt-API ohne Rate-Limiting; die automatische Eingangsbestätigung an beliebige Absenderadressen ist als Spam-/Mail-Bombing-Vektor missbrauchbar.
5. **(Hoch, SEO)** Keine Sitemap, keine robots.txt, keine hreflang-Alternates, keine seitenindividuellen Titles/Descriptions, kein Open Graph, kein JSON-LD — für Local SEO einer Kanzlei erhebliches ungenutztes Potenzial.
6. **(Hoch, Repo)** Porträtfoto einer realen Person (`public/team/public/team/sascha-luebbersmann.jpg`, inkl. Original unter altem Pfad in der Git-Historie) liegt in einem Vorlagen-Repository — personenbezogene Daten / Recht am eigenen Bild; gehört nicht in die Template-Codebasis.

**Einordnung:** Für die *Vorlage* sind viele Punkte konzeptionsgemäß („[Platzhalter]"-Kennzeichnung, Demo-Modus des Formulars, SETUP.md-Checkliste — vorbildlich). Alle hier gelisteten Findings sind jedoch **zwingend vor dem Go-Live einer echten Kanzlei zu beheben** — und für die bereits live geschaltete Lübbersmann-Instanz **sofort**.

---

## 1. Sicherheit (Code & Infrastruktur)

### S-01 — Keine HTTP-Security-Header konfiguriert
- **Schweregrad:** Hoch
- **Fundort:** `next.config.mjs` (gesamte Datei, kein `headers()`-Block); live bestätigt: `curl -I https://anwaltskanzlei-vorlage-1.vercel.app/` liefert nur `strict-transport-security` (Vercel-Default), aber **kein** `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Beschreibung:** Ohne CSP/XFO ist die Seite gegen Clickjacking und (im Fall künftiger XSS-Lücken) Script-Injection ungeschützt; ohne `Referrer-Policy` können URL-Pfade (z. B. Rechtsgebiets-Seiten, die Rückschlüsse auf das Anliegen zulassen) an Dritte (OSM-Iframe, Google-Link) übertragen werden — bei einer Kanzlei ein Vertraulichkeitsthema.
- **Empfehlung:** In `next.config.mjs` einen `headers()`-Block ergänzen, mindestens:
  `Content-Security-Policy` (inkl. `frame-src https://www.openstreetmap.org` solange die Karte genutzt wird), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.

### S-02 — Kontakt-API ohne Rate-Limiting; Auto-Reply als Missbrauchsvektor
- **Schweregrad:** Hoch
- **Fundort:** `src/app/api/contact/route.ts:26-102` (insb. Z. 90-95 Auto-Reply)
- **Beschreibung:** Die Route hat gute Grundlagen (Honeypot Z. 40/44, Pflicht-Consent Z. 46, E-Mail-Regex Z. 23-24, reine Text-Mails, generische Fehlermeldungen, sicherer Demo-Modus ohne API-Key). Es fehlen aber: (a) **Rate-Limiting/Throttling** — ein Angreifer kann das Formular skriptgesteuert fluten; (b) die **automatische Eingangsbestätigung an die vom Absender angegebene Adresse** macht den Endpunkt zum „Backscatter"-/Mail-Bombing-Werkzeug (beliebige Opfer-Adresse eintragen, Name-Feld als Freitext in der Mail); (c) **keine Längenbegrenzung** für `name`, `message` etc. (Kosten-/Missbrauchsrisiko, Resend-Kontingent); (d) `name` fließt ungefiltert in den Mail-Betreff (Z. 70) — die Resend-API kapselt zwar Header (kein klassisches CRLF-Injection-Risiko), Zeilenumbrüche/Steuerzeichen sollten dennoch entfernt werden.
- **Empfehlung:** Rate-Limit pro IP (z. B. Upstash Ratelimit oder Vercel WAF), Feld-Längenlimits (z. B. name ≤ 200, message ≤ 5000 Zeichen), `name`/`phone` auf eine Zeile normalisieren (`.replace(/[\r\n]+/g, ' ')`), Auto-Reply optional erst nach Double-Opt-in oder zumindest stark ratenlimitiert; zusätzlich zeitbasierte Spam-Heuristik (min. Ausfüllzeit) oder Turnstile/Friendly Captcha (DSGVO-freundlich) erwägen.

### S-03 — `.gitignore` schützt `.env` nicht
- **Schweregrad:** Mittel
- **Fundort:** `.gitignore` (Eintrag `\.env*.local` — es fehlt `.env`)
- **Beschreibung:** Nur `.env*.local` ist ignoriert. Legt jemand nach `.env.example`-Vorbild eine `.env` mit echtem `RESEND_API_KEY` an, würde sie committed. Aktuell sind **keine Secrets im Repo** (geprüft: keine `re_…`/`sk-…`/API-Key-Muster, `.env.example` enthält nur Leerwerte) — das Risiko ist präventiv.
- **Empfehlung:** `.env` und `.env*` (mit Ausnahme `!.env.example`) in `.gitignore` aufnehmen.

### S-04 — Externe Bild-Hotlinks (picsum.photos) in Hero-Varianten
- **Schweregrad:** Mittel
- **Fundort:** `src/components/heroes/HeroImageBg.tsx:16`, `src/components/heroes/HeroSplitPhoto.tsx:76`
- **Beschreibung:** Zwei Varianten-Komponenten laden Bilder direkt von `picsum.photos` (plain `<img>`, nicht über `next/image`; `next.config.mjs` erlaubt zudem `images.unsplash.com` als Remote-Pattern, das nirgends genutzt wird). Jeder Aufruf übermittelt IP/Referrer an einen Drittanbieter — auf einer Kanzleiseite ohne Rechtsgrundlage/Erwähnung in der Datenschutzerklärung; zudem Verfügbarkeits-/Integritätsrisiko.
- **Empfehlung:** Platzhalterbilder lokal unter `public/` ablegen; ungenutztes `remotePatterns` für Unsplash entfernen.

### S-05 — PII-Logging im Demo-Modus
- **Schweregrad:** Niedrig
- **Fundort:** `src/app/api/contact/route.ts:57`
- **Beschreibung:** Im Demo-Modus werden Name, E-Mail und Rechtsgebiet des Anfragenden in die Server-Logs (Vercel Log Drain) geschrieben. Rechtsgebiet + Identität ist bei einer Kanzlei bereits sensibel.
- **Empfehlung:** Logzeile auf ein anonymes `console.log('[contact] DEMO – Anfrage empfangen')` reduzieren.

### S-06 — Fallback-Empfänger `info@example.com`
- **Schweregrad:** Niedrig
- **Fundort:** `src/app/api/contact/route.ts:20`
- **Beschreibung:** Ist `CONTACT_TO_DEFAULT` nicht gesetzt, aber `RESEND_API_KEY` vorhanden, gehen echte Mandatsanfragen an `info@example.com` (Domain Dritter) — stiller Datenabfluss + Anfragenverlust.
- **Empfehlung:** Ohne konfigurierten Empfänger mit `500`/Fehler antworten statt an eine Fremd-Domain zu senden.

### S-07 — `Access-Control-Allow-Origin: *` auf Live-HTML-Antworten
- **Schweregrad:** Niedrig
- **Fundort:** Live-Header der Startseite (`curl -I https://anwaltskanzlei-vorlage-1.vercel.app/`)
- **Beschreibung:** Die HTML-Auslieferung sendet `access-control-allow-origin: *`. Für eine statische, cookie-lose Seite geringes Risiko, aber unnötig breit (und im Repo nicht konfiguriert — stammt aus dem Live-Setup/Projekt-Settings).
- **Empfehlung:** Im Vercel-Projekt prüfen und entfernen, sofern nicht bewusst gesetzt.

### S-08 — Abhängigkeiten (npm audit)
- **Schweregrad:** Info
- **Fundort:** `package.json` / `package-lock.json` (next 15.5.19, next-intl 4.13.0, resend 6.12.4, react 19.0.0)
- **Beschreibung:** `npm audit` meldet zum Audit-Zeitpunkt **0 Schwachstellen**. Die bekannten Next-15-Advisories (u. a. Middleware-Authorization-Bypass CVE-2025-29927, SSRF-/Cache-Themen aus 2025) betreffen ältere Stände; 15.5.19 ist gepatcht. Positiv: `overrides` für postcss gesetzt.
- **Empfehlung:** Dependabot/Renovate aktivieren; vor jedem Go-Live `npm audit` wiederholen.

### Positivbefunde Sicherheit
- Kein `dangerouslySetInnerHTML`, keine `NEXT_PUBLIC_`-Env-Leaks im Client (geprüft per Grep).
- Locale-Injection abgesichert: `layout.tsx:41` validiert gegen `routing.locales`, ebenso `src/i18n/request.ts`; Nachrichten-Import nur mit validiertem Locale.
- Externe Links konsequent mit `rel="noopener noreferrer"`.
- Honeypot antwortet „still erfolgreich" (kein Oracle für Bots).

---

## 2. Datenschutz / DSGVO

### D-01 — Resend (US-Dienstleister) fehlt vollständig in der Datenschutzerklärung
- **Schweregrad:** Hoch
- **Fundort:** `src/app/[locale]/datenschutz/page.tsx:74-83` (Abschnitt 5 „Kontaktformular") vs. `src/app/api/contact/route.ts` (tatsächliche Verarbeitung); identisch auf der Live-Seite `/datenschutz`.
- **Beschreibung:** Kontaktanfragen (Name, E-Mail, Telefon, Rechtsgebiet, Nachricht — bei einer Kanzlei potenziell Gesundheits-/Strafdaten i. S. v. Art. 9/10 DSGVO) werden über **Resend Inc. (USA)** versendet, inkl. Auto-Reply. Die Datenschutzerklärung nennt Resend nicht: keine Angabe des Auftragsverarbeiters (Art. 28), keine Drittlandsübermittlung (Art. 44 ff.; EU-US Data Privacy Framework bzw. SCC), keine Speicherdauer beim Dienstleister. Informationspflichten nach Art. 13 DSGVO sind damit unvollständig. Für eine Strafrechtskanzlei kollidiert der US-Transfer zusätzlich mit der Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO, § 2 BORA) — mindestens ein Hinweis-/Abwägungsthema.
- **Empfehlung:** Eigenen Abschnitt „E-Mail-Versanddienstleister Resend" ergänzen (Anbieter, Zweck, Rechtsgrundlage, DPF/SCC, AV-Vertrag, Speicherdauer). Besser: EU-Alternative (z. B. Scaleway TEM, Mailjet EU, eigener SMTP bei EU-Hoster) anbieten bzw. in SETUP.md als empfohlene Option dokumentieren. Zusätzlich in Abschnitt 5 die konkrete Speicher-/Löschfrist benennen.

### D-02 — Cookie-Banner ohne Funktion; OSM-Karte lädt ohne Einwilligung
- **Schweregrad:** Hoch
- **Fundort:** `src/components/CookieBanner.tsx` (Auswahl wird nur in `localStorage['cookie-consent']` gespeichert, Z. 17-20, sonst wirkungslos); `src/components/contact/ContactMap.tsx` (OSM-Iframe `https://www.openstreetmap.org/export/embed.html…` lädt bedingungslos); Bannertext `messages/de.json → cookie.text` verspricht: „Optionale Dienste (z. B. eingebundene Karten) nutzen wir nur mit Ihrer Einwilligung."
- **Beschreibung:** Der Banner suggeriert eine Einwilligungssteuerung, die es nicht gibt: Die OpenStreetMap-Karte wird unabhängig von Akzeptieren/Ablehnen geladen und übermittelt IP-Adresse und Referrer an die OSM Foundation (UK). Das ist (a) ein Verstoß gegen § 25 Abs. 1 TDDDG / Art. 6 DSGVO, sofern man die Karte als nicht technisch notwendig einordnet (herrschende Aufsichtspraxis), und (b) ein irreführender Consent-Mechanismus — selbst ein Abmahnrisiko. Positiv: Es gibt kein Tracking, keine Analytics, keine Google-Dienste; der einzige echte Cookie ist `NEXT_LOCALE` (technisch notwendig, § 25 Abs. 2 TDDDG).
- **Empfehlung:** Entweder (empfohlen) **Zwei-Klick-Lösung** für die Karte (statisches Vorschaubild, Iframe erst nach Klick/Einwilligung laden, Zustand aus `cookie-consent` respektieren) — oder Karte durch statisches Bild + Link zu OSM/Google Maps ersetzen und den Banner komplett entfernen (dann genügt die Cookie-Sektion der Datenschutzerklärung). Den `NEXT_LOCALE`-Cookie namentlich in der Datenschutzerklärung aufführen.

### D-03 — Live-Datenschutzerklärung: falsche Aufsichtsbehörde und Platzhalter
- **Schweregrad:** Kritisch (Live-Instanz) / systembedingt in der Vorlage
- **Fundort:** Live `https://anwaltskanzlei-vorlage-1.vercel.app/datenschutz` (Verantwortlicher: „Lübbersmann Rechtsanwälte, Südstraße 11, 48153 Münster"); Vorlage: `src/app/[locale]/datenschutz/page.tsx:109-114`
- **Beschreibung:** Die Live-Seite einer Kanzlei in **Münster (NRW)** nennt als Aufsichtsbehörde weiterhin das **Bayerische Landesamt für Datenschutzaufsicht (BayLDA)** samt Vorlagen-Vermerk „[ggf. anpassen]" — zuständig wäre die **LDI NRW** (Kavalleriestraße 2-4, 40213 Düsseldorf). Außerdem sind Vorlagen-Hinweise („Vorlage – vor Veröffentlichung anwaltlich prüfen lassen", „[Falls keine Tracking-Cookies eingesetzt werden, hier vermerken.]") öffentlich sichtbar.
- **Empfehlung:** Live sofort korrigieren. In der Vorlage die Behörde neutraler formulieren („die für den Kanzleisitz zuständige Landesdatenschutzbehörde [einsetzen]") und in SETUP.md als Pflichtschritt listen.

### D-04 — Mutmaßlicher Tippfehler in der Live-Kontakt-/Verantwortlichen-E-Mail
- **Schweregrad:** Hoch (Live-Instanz)
- **Fundort:** Live `/impressum` und `/datenschutz`: `luebbersmann@luebersmann-rechtsanwaelte.de`
- **Beschreibung:** Local-Part „lue**bb**ersmann", Domain „lue**b**ersmann-rechtsanwaelte.de" (nur ein „b"). Ist die Domain falsch geschrieben, laufen Betroffenenanfragen (Art. 15 ff. DSGVO) und Mandatsanfragen ins Leere oder — schlimmer — an eine registrierbare Fremd-Domain.
- **Empfehlung:** Domain-Schreibweise sofort verifizieren und vereinheitlichen.

### D-05 — Beispiel-Google-Bewertungen (4,9 ★ / „127 Google-Bewertungen")
- **Schweregrad:** Mittel (Vorlage) / Kritisch, falls unverändert live für eine echte Kanzlei
- **Fundort:** `messages/de.json → reviews.*`, `src/components/reviews/ReviewsMarqueeDark.tsx:77-95` (Link auf Google-Suche „Hoffmann Vogel")
- **Beschreibung:** Erfundene Bewertungen mit konkreter Zahl/Note wären für eine reale Kanzlei irreführende geschäftliche Handlung (§ 5, § 5b Abs. 3 UWG — Pflicht zu Angaben über Echtheitsprüfung von Bewertungen) und verstoßen gegen das Sachlichkeitsgebot (§ 43b BRAO, § 6 BORA). Positiv: als „Beispiel-Bewertungen" gekennzeichnet (`reviews.placeholder`) und auf der Live-Lübbersmann-Startseite bereits entfernt.
- **Empfehlung:** In SETUP.md ist der Austausch dokumentiert — zusätzlich einen Build-Hinweis/Kommentar direkt in `ReviewsMarqueeDark.tsx` setzen („Vor Go-Live entfernen oder echte Google-Places-Daten anbinden"). Bewertungssektion standardmäßig deaktivieren.

### D-06 — Porträtfoto einer realen Person im Vorlagen-Repository
- **Schweregrad:** Hoch (Repo-Hygiene/Persönlichkeitsrechte)
- **Fundort:** `public/team/public/team/sascha-luebbersmann.jpg` (fehlerhaft verschachtelter Pfad); Git-Historie: Commit `42d824d` („Add files via upload", Original `public/team/sascha_luebersmann-porträt.jpg`) und `6fa8591` (Rename)
- **Beschreibung:** Das Foto eines realen Rechtsanwalts liegt in der generischen Vorlage — inklusive alter Dateiversion in der Git-Historie. Jeder, der die Vorlage klont/weiterverwendet, verbreitet personenbezogene Daten (Bildnis, § 22 KUG / Art. 6 DSGVO) weiter. Zudem ist der Pfad offensichtlich versehentlich doppelt verschachtelt (Rename-Fehler); die Datei wird im Vorlagen-Code nirgends referenziert.
- **Empfehlung:** Datei entfernen und mittels `git filter-repo`/BFG auch aus der Historie löschen; kanzleispezifische Assets gehören ausschließlich in den kundenspezifischen Fork/Branch.

### D-07 — Kontaktformular: Einwilligung & Vertraulichkeitshinweis (Positivbefund mit Lücke)
- **Schweregrad:** Niedrig
- **Fundort:** `src/components/contact/ContactForm.tsx:144-149`, `messages/de.json → contact.consent / contact.confidential`; Server-Validierung `route.ts:46`
- **Beschreibung:** Positiv: Pflicht-Checkbox mit Verweis auf die Datenschutzerklärung, serverseitig erzwungen; Hinweis, keine vertraulichen Details zu übermitteln; Datenminimierung (Telefon optional). Lücke: Der Consent-Text verlinkt die Datenschutzerklärung nicht klickbar; das Formular wird über TLS übertragen, ein expliziter TLS-Hinweis (laut Briefing §6 gefordert) fehlt im Formular.
- **Empfehlung:** `contact.consent` mit Link auf `/datenschutz` versehen (Rich-Text-Message); Hinweistext um „Übertragung erfolgt TLS-verschlüsselt" ergänzen.

### D-08 — Speicherdauer, Datenschutzbeauftragter, Mandantendaten
- **Schweregrad:** Mittel
- **Fundort:** `src/app/[locale]/datenschutz/page.tsx` (Abschnitte 5, fehlende Abschnitte)
- **Beschreibung:** Es fehlen: konkrete Speicherfristen (nur Generalklausel), Abschnitt zum (ggf. nicht bestellten) Datenschutzbeauftragten, sowie ein kanzleispezifischer Abschnitt zur Verarbeitung im Rahmen der **Mandatsanbahnung/Mandatsverhältnis** (Aufbewahrungspflichten § 50 BRAO – 6 Jahre, steuerrechtlich bis 10 Jahre; Verschwiegenheit § 43a BRAO; beA-Kommunikation). Für die Vorlage einer Anwaltskanzlei ist das der fachlich wichtigste Baustein.
- **Empfehlung:** Abschnitt „Datenverarbeitung im Rahmen des Mandats" mit Rechtsgrundlagen (Art. 6 Abs. 1 lit. b/c/f, Art. 9 Abs. 2 lit. f DSGVO) und Aufbewahrungsfristen ergänzen.

---

## 3. Impressum / Berufsrecht

### I-01 — Vorlagen-Impressum: strukturell vollständig (Positivbefund)
- **Schweregrad:** Info
- **Fundort:** `src/app/[locale]/impressum/page.tsx`
- **Beschreibung:** Enthalten sind: Angaben nach § 5 DDG, Vertretungsberechtigte, Kontakt, USt-IdNr. (§ 27a UStG, Platzhalter), gesetzliche Berufsbezeichnung mit Verleihungsstaat, zuständige Rechtsanwaltskammer (Beispiel RAK München), berufsrechtliche Regelungen (BRAO, BORA, FAO, RVG, CCBE) mit Link auf brak.de, Berufshaftpflichtversicherung (Platzhalter für Name/Anschrift/Geltungsbereich gem. § 2 Abs. 1 Nr. 11 DL-InfoV), Erklärung nach § 36 VSBG samt Hinweis auf die Schlichtungsstelle der Rechtsanwaltschaft, Verantwortlicher nach § 18 Abs. 2 MStV. **Korrekt: kein Verweis mehr auf die zum 20.07.2025 abgeschaltete EU-ODR-Plattform.** DE- und EN-Fassung inhaltlich parallel.
- **Empfehlung:** Beibehaltung; kleine Ergänzungen s. I-02/I-03.

### I-02 — Live-Impressum der realen Kanzlei mit Pflichtangaben-Platzhaltern
- **Schweregrad:** Kritisch (Live-Instanz)
- **Fundort:** Live `https://anwaltskanzlei-vorlage-1.vercel.app/impressum`
- **Beschreibung:** Für „Lübbersmann Rechtsanwälte" sind live: USt-IdNr. = „DE000000000 [Platzhalter]", Berufshaftpflichtversicherung = „[Name und Anschrift des Versicherers] … [anpassen]", Kammer = RAK Hamm mit Vermerk „[ggf. anpassen]", dazu der Vorlagen-Warnhinweis. Fehlende Angaben zur Berufshaftpflicht verstoßen gegen § 2 Abs. 1 Nr. 11 DL-InfoV, eine falsche/fehlende USt-IdNr. gegen § 5 Abs. 1 Nr. 6 DDG — abmahnfähig und für eine Kanzlei reputationskritisch.
- **Empfehlung:** Sofort vervollständigen oder die Live-Site bis dahin per Passwortschutz/`X-Robots-Tag: noindex` deaktivieren. (Hinweis: solange keine USt-IdNr. erteilt ist, ist die Angabe entbehrlich — dann Zeile entfernen statt Platzhalter.)

### I-03 — AGB / Mandatsbedingungen / Vergütung fehlen in der Vorlage
- **Schweregrad:** Mittel
- **Fundort:** Seitenstruktur `src/app/[locale]/…` (keine AGB-/Mandats-/Vergütungsseite); live existiert bereits eine `/kosten`-Seite (HTTP 200), die es in der Vorlage nicht gibt.
- **Beschreibung:** Klassische AGB sind für Kanzleien unüblich; sinnvoll sind stattdessen **Mandatsbedingungen** und eine **Vergütungsseite** (RVG-Hinweis, Erstberatungskosten § 34 RVG, ggf. Vergütungsvereinbarung § 3a RVG). Wichtig bei Online-Mandatsanbahnung durch Verbraucher: **Widerrufsbelehrung** (§§ 312 ff. BGB) und Pflichtinformationen nach Art. 246a EGBGB fehlen als Baustein komplett.
- **Empfehlung:** Vorlagen-Seite „Vergütung/Mandatsbedingungen" inkl. Widerrufsbelehrungs-Baustein ergänzen; die Live-`/kosten`-Seite in die Vorlage zurückportieren.

### I-04 — Werbliche Kennzahlen und Fachanwalts-Logik
- **Schweregrad:** Niedrig
- **Fundort:** `messages/de.json → hero.stat1-3` („25+ Jahre", „1.500+ betreute Mandate"), Team-Rollen
- **Beschreibung:** Kennzahlen und Bezeichnungen sind als Platzhalter zulässig, für echte Kanzleien aber nur, wenn belegbar (Sachlichkeitsgebot § 43b BRAO, § 6 BORA); Bezeichnungen wie „Fachanwalt" dürfen nur nach FAO geführt werden (live: „Fachanwalt für Strafrecht" — zu verifizieren).
- **Empfehlung:** In SETUP.md einen Prüfpunkt „Kennzahlen/Titel nur, wenn nachweisbar (BRAO/BORA/FAO)" ergänzen.

---

## 4. Cookies / Tracking

| Punkt | Befund |
|---|---|
| Gesetzte Cookies | `NEXT_LOCALE` (next-intl, technisch notwendig, live per `set-cookie` bestätigt) |
| localStorage | `cookie-consent` (Banner-Entscheidung) |
| Tracking/Analytics | Keine (kein GA, kein Pixel, keine Fonts-CDNs — `next/font` self-hosted) ✔ |
| Drittinhalte | OpenStreetMap-Iframe (ohne Consent geladen → D-02), picsum.photos in 2 Varianten (→ S-04), Google-Suchlink (nur Link, unkritisch) |
| Consent-Banner | Vorhanden, aber wirkungslos (→ D-02); „Ablehnen" gleichwertig gestaltet ✔ |

**Fazit:** Der Banner ist in der aktuellen Form eher schädlich als nützlich. Entweder echte Steuerung (Karte gaten) oder Banner entfernen.

---

## 5. SEO

### SEO-01 — Metadaten: nur ein globaler, statischer Titel; Platzhalter-Description
- **Schweregrad:** Hoch
- **Fundort:** `src/app/[locale]/layout.tsx:23-26` (einziges `metadata`-Objekt im Projekt; kein `generateMetadata` auf irgendeiner Seite)
- **Beschreibung:** Alle Seiten (Startseite, Rechtsgebiete, Team-Profile, FAQ, Karriere, Impressum, Datenschutz) teilen denselben Titel „Hoffmann · Vogel – Rechtsanwälte" und die Description „Anwaltskanzlei – **Vorlage**. …". Es fehlen: `metadataBase`, Canonical-URLs, **`alternates.languages` (hreflang de/en/x-default — bei next-intl-Mehrsprachigkeit essenziell, sonst Duplicate-Content-Risiko zwischen /de und /en)**, Open Graph, Twitter Cards, OG-Image, Favicon. Die EN-Metadaten sind nicht einmal englisch.
- **Empfehlung:** Pro Seite `generateMetadata` mit lokalisierten Titeln/Descriptions aus `messages/*.json`; zentral `metadataBase` + `alternates` (hreflang über die next-intl-Routing-Helfer) setzen; OG-Image (1200×630) ergänzen.

### SEO-02 — Keine `robots.ts` und keine `sitemap.ts`
- **Schweregrad:** Hoch
- **Fundort:** `src/app/` (Dateien fehlen); live: `GET /robots.txt` und `/sitemap.xml` → **404** (liefern die HTML-Fehlerseite)
- **Beschreibung:** Ohne Sitemap werden die Locale-Varianten und Detailseiten (Rechtsgebiete, Anwaltsprofile) schlechter erfasst; ohne robots.txt gibt es keine Steuerung (auch nicht für die `/varianten/*`-Demoseiten oder AI-Crawler).
- **Empfehlung:** `src/app/robots.ts` und `src/app/sitemap.ts` ergänzen; Sitemap muss **beide Locales** und alle `generateStaticParams`-Slugs enthalten (next-intl `getPathname`-Helfer nutzen), inkl. hreflang-Alternates in der Sitemap.

### SEO-03 — Kein strukturiertes Markup (JSON-LD)
- **Schweregrad:** Hoch (Chance)
- **Fundort:** projektweit (Grep nach `ld+json`: 0 Treffer; auch live nicht vorhanden)
- **Beschreibung:** Für Kanzleien besonders wertvolles Markup fehlt komplett: `LegalService`/`Attorney` (Name, Adresse, Öffnungszeiten, Telefon, `areaServed`, `knowsAbout`), `FAQPage` (FAQ-Inhalte existieren bereits in `src/content/faq.ts`!), `BreadcrumbList`. NAP-Daten (Name/Adresse/Telefon `+49 89 1234 567`, Öffnungszeiten „Mo–Fr 9:00–18:00") sind in `messages/*.json → contact` konsistent gepflegt — ideal als Quelle für `openingHoursSpecification`.
- **Empfehlung:** JSON-LD-Komponente im Layout (LegalService/LocalBusiness) + FAQPage-Schema auf `/faq` + Attorney-Schema auf Team-Profilseiten.

### SEO-04 — `/varianten/*` Demoseiten öffentlich und indexierbar
- **Schweregrad:** Mittel
- **Fundort:** `src/app/[locale]/varianten/{hero,leistungen,kanzlei,team,bewertungen,kontakt}/page.tsx`; live bestätigt: `/varianten/hero` → HTTP 200 auf der realen Kanzlei-Site
- **Beschreibung:** Interne Design-Vergleichsseiten (mit Ansprache „Scrolle durch alle fünf Entwürfe und sag mir die Nummer…") sind ohne `noindex` erreichbar — Duplicate Content und auf einer Live-Kanzleiseite hochgradig unprofessionell.
- **Empfehlung:** Vor Go-Live löschen; mindestens `robots: { index: false }` per Metadata und Ausschluss in robots.txt.

### SEO-05 — Grundgerüst solide (Positivbefunde + Kleinigkeiten)
- **Schweregrad:** Niedrig
- **Fundort:** diverse
- **Beschreibung:** `lang`-Attribut pro Locale ✔ (`layout.tsx:48`), genau ein `<h1>` pro Seite ✔, Alt-Texte vorhanden und als Platzhalter gekennzeichnet ✔, semantische Struktur (header/main/footer/section) ✔, OSM-Iframe mit `title` ✔. Kleinigkeiten: doppelter JSON-Key `nav.home` in `messages/de.json` **und** `messages/en.json` (Z. 8/14 — zweiter überschreibt den ersten); kein Favicon/`icon`-Asset; Hero-Video ohne `preload`-Feintuning/WebM (Core Web Vitals, in SETUP.md bereits notiert).
- **Empfehlung:** Doppelten Key entfernen; Favicon + `apple-icon` ergänzen.

---

## 6. GEO (Generative Engine Optimization)

### GEO-01 — Keine `llms.txt`, keine AI-Crawler-Steuerung
- **Schweregrad:** Mittel (Chance)
- **Fundort:** `public/` (keine `llms.txt`); keine robots.txt (→ SEO-02), damit sind GPTBot, ClaudeBot, PerplexityBot, Google-Extended implizit erlaubt, aber ungesteuert.
- **Beschreibung:** Für Kanzleien werden AI-Antwortmaschinen („beste Kanzlei für Arbeitsrecht in München") zunehmend zum Empfehlungskanal. Es fehlt eine bewusste Entscheidung + maschinenlesbare Aufbereitung.
- **Empfehlung:** (a) `public/llms.txt` mit Kurzprofil, Rechtsgebieten, Standort, Kontakt und Links auf die wichtigsten Seiten; (b) in `robots.ts` AI-Crawler explizit erlauben (oder bewusst blocken); (c) FAQPage-/LegalService-JSON-LD (→ SEO-03) — dieselben Daten speisen AI-Zitierbarkeit.

### GEO-02 — Inhaltlich gute Ausgangslage (Positivbefund)
- **Schweregrad:** Info
- **Fundort:** `src/content/faq.ts` (FAQ mit DE/EN), `src/content/practice.ts` (4 Rechtsgebiets-Detailseiten mit Leistungslisten), `src/content/attorneys.ts` (Profile mit Vita/Schwerpunkten)
- **Beschreibung:** Klar strukturierte, thematisch fokussierte Seiten pro Rechtsgebiet und FAQ-Inhalte sind genau das, was generative Engines zitieren. Es fehlt nur die maschinenlesbare Schicht (Schema, llms.txt) und pro Rechtsgebiet eine lokale Verortung („Arbeitsrecht in München").
- **Empfehlung:** Ortsbezug in Rechtsgebiets-Intros; FAQ pro Rechtsgebiet erwägen.

---

## 7. Live-Check & Repo-vs-Live-Abweichungen

**Gefundene Produktions-URL:** `https://anwaltskanzlei-vorlage-1.vercel.app` (Vercel, Repo `IvanGomes9777/anwaltskanzlei-vorlage-1`; zweite geratene URL `…-ivangomes9777.vercel.app` → DEPLOYMENT_NOT_FOUND).

| Aspekt | Repo (geprüfter Stand) | Live |
|---|---|---|
| Identität | „Hoffmann · Vogel" (Platzhalter, München) | **„Lübbersmann Rechtsanwälte", Münster — reale Kanzlei**, RA Sascha Lübbersmann (Fachanwalt für Strafrecht) |
| Sprachen | DE + EN (`/de`, `/en`, Prefix immer) | Nur DE; `/de/impressum` → 307 → `/impressum`; `/en` → 404 (i18n entfernt/umkonfiguriert) |
| Navigation | Start/Leistungen/Kanzlei/Team/Bewertungen/Kontakt | Rechtsgebiete/Kanzlei/Anwälte/**Presse**/**Kosten**/Kontakt (neue Seiten, nicht im Repo) |
| Bewertungen | Beispiel-Marquee (4,9/127) | entfernt ✔ |
| Team-Foto | `member-*.webp` (KI-Platzhalter) | `/_next/image?url=%2Fteam%2Fsascha-luebbersmann.jpg` (echtes Porträt) |
| Impressum/Datenschutz | Platzhalter, als Vorlage gekennzeichnet | Teilpersonalisiert, **Platzhalter + Vorlagen-Warnhinweise noch sichtbar, Aufsichtsbehörde falsch (BayLDA statt LDI NRW)** |
| Platzhalter im Content | überall gekennzeichnet | u. a. „[Name folgt]" (Anwalt), „Beispiel-Einträge – echte Presse-Links folgen" |
| Security-Header | keine konfiguriert | nur HSTS (Vercel-Default); zusätzlich `access-control-allow-origin: *` |
| robots/sitemap/llms.txt | fehlen | 404 |
| `/varianten/*` | vorhanden | **öffentlich erreichbar (200)** |
| Kontakt-API | `POST /api/contact` (Demo ohne Key) | vorhanden (GET → 405); ob `RESEND_API_KEY` live gesetzt ist, von außen nicht feststellbar |

**Konsequenz:** Der Live-Stand basiert auf Commits, die im geprüften Repo-Checkout nicht enthalten sind (beide lokalen Branches enden bei `6fa8591`). Der Code der Live-Anpassungen (Lübbersmann-Personalisierung, /kosten, /presse, i18n-Umbau) sollte ins Repo zurückgeführt werden, sonst laufen Audit/Fixes und Produktion auseinander.

---

## 8. Priorisierte Maßnahmenliste

| # | Prio | Bereich | Maßnahme | Fundort |
|---|---|---|---|---|
| 1 | Kritisch | Berufsrecht (Live) | Live-Impressum vervollständigen: Berufshaftpflichtversicherer (Name/Anschrift/Geltungsbereich), USt-IdNr. eintragen oder Zeile entfernen; Vorlagen-Warnhinweise entfernen — bis dahin Site auf noindex/Passwortschutz | live `/impressum` |
| 2 | Kritisch | DSGVO (Live) | Aufsichtsbehörde auf LDI NRW korrigieren; alle „[Platzhalter]/[ggf. anpassen]"-Reste in der Live-Datenschutzerklärung tilgen | live `/datenschutz` |
| 3 | Kritisch | Live-Betrieb | E-Mail-Domain-Schreibweise verifizieren (`luebersmann-` vs. `luebbersmann-rechtsanwaelte.de`); `/varianten/*` von der Live-Site entfernen; Live-Code ins Repo zurückführen | live gesamt |
| 4 | Hoch | DSGVO | Resend in Datenschutzerklärung aufnehmen (Auftragsverarbeiter, US-Übermittlung Art. 44 ff., DPF/SCC, Speicherdauer); EU-Versandalternative dokumentieren | `datenschutz/page.tsx` |
| 5 | Hoch | Cookies | Zwei-Klick-Lösung für OSM-Karte (Consent aus Banner respektieren) oder Karte statisch + Banner entfernen; `NEXT_LOCALE` in DS-Erklärung nennen | `CookieBanner.tsx`, `ContactMap.tsx` |
| 6 | Hoch | Sicherheit | Security-Header in `next.config.mjs` (CSP, XFO, XCTO, Referrer-Policy, Permissions-Policy) | `next.config.mjs` |
| 7 | Hoch | Sicherheit | Kontakt-API härten: Rate-Limit, Feldlängen-Limits, Zeilenumbrüche aus `name` strippen, Auto-Reply absichern; Fallback `info@example.com` durch Fehler ersetzen | `api/contact/route.ts` |
| 8 | Hoch | Repo-Hygiene | `sascha-luebbersmann.jpg` (+ Historie via filter-repo) aus dem Vorlagen-Repo entfernen | `public/team/public/team/…` |
| 9 | Hoch | SEO | `generateMetadata` pro Seite (lokalisiert), `metadataBase`, Canonicals, hreflang-`alternates`, Open Graph + OG-Image, Favicon | `src/app/[locale]/**` |
| 10 | Hoch | SEO | `robots.ts` + `sitemap.ts` (alle Locales & Slugs, hreflang in Sitemap); `/varianten/*` auf noindex | `src/app/` |
| 11 | Mittel | SEO/GEO | JSON-LD: LegalService/LocalBusiness (NAP + Öffnungszeiten), FAQPage, Attorney; `llms.txt`; AI-Crawler-Regeln in robots | Layout, `/faq`, `public/` |
| 12 | Mittel | Recht | Seite „Vergütung/Mandatsbedingungen" + Widerrufsbelehrungs-Baustein für Verbraucher-Fernabsatzmandate ergänzen | neue Seite |
| 13 | Mittel | DSGVO | Datenschutzerklärung ergänzen: Speicherfristen, Mandats-Abschnitt (§ 50, § 43a BRAO, Art. 9 DSGVO), Behörde als neutralen Platzhalter | `datenschutz/page.tsx` |
| 14 | Mittel | Sicherheit | `.gitignore` um `.env`/`.env*` erweitern; picsum-Hotlinks lokalisieren; ungenutztes Unsplash-remotePattern entfernen | `.gitignore`, Hero-Varianten |
| 15 | Niedrig | Diverses | PII-Logging im Demo-Modus entfernen; doppelten `nav.home`-Key fixen; Consent-Text mit klickbarem DS-Link + TLS-Hinweis; `ACAO: *` im Vercel-Projekt prüfen | s. Findings |
| 16 | Info | Betrieb | Dependabot/Renovate; `npm audit` vor jedem Release; SETUP.md um Prüfpunkte „Aufsichtsbehörde je Bundesland", „Kennzahlen nur belegbar (BRAO/BORA)", „Barrierefreiheit BFSG" erweitern | Prozess |

---

*Hinweis: Dieser Bericht ist eine technische und formale Prüfung, keine Rechtsberatung. Impressum, Datenschutzerklärung und Mandatsunterlagen sind vor Veröffentlichung durch die verantwortliche Kanzlei anwaltlich zu prüfen (so auch der eigene Hinweis der Vorlage).*
