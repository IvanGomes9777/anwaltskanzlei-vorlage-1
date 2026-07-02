# Go-Live-Checkliste

Diese Vorlage ist funktional vollständig. Vor dem echten Launch sind folgende
Schritte nötig. Alle Beispiel-/Platzhalterinhalte sind im Code mit `[Platzhalter]`
bzw. als „Beispiel" gekennzeichnet.

## 1. Kontaktformular scharfschalten (E-Mail-Routing nach Rechtsgebiet)

In **Vercel → Project → Settings → Environment Variables** setzen
(siehe auch `.env.example`). Ohne `RESEND_API_KEY` läuft das Formular im
sicheren Demo-Modus (es wird nichts versendet).

| Variable | Beispiel |
|---|---|
| `RESEND_API_KEY` | `re_…` (von resend.com) |
| `CONTACT_FROM` | `Kanzlei <kanzlei@ihre-domain.de>` (Domain bei Resend verifiziert) |
| `CONTACT_TO_ARBEITSRECHT` | zuständige Adresse |
| `CONTACT_TO_FAMILIENRECHT` | zuständige Adresse |
| `CONTACT_TO_WIRTSCHAFTSRECHT` | zuständige Adresse |
| `CONTACT_TO_STRAFRECHT` | zuständige Adresse |
| `CONTACT_TO_DEFAULT` | zentrales Postfach (Fallback / „Sonstiges") |
| `CONTACT_CC` *(optional)* | Kopie aller Anfragen |

Danach **einmal neu deployen**. Reply-To ist die Absenderadresse des Anfragenden;
zusätzlich erhält der Absender eine automatische Eingangsbestätigung (DE/EN).

## 2. Rechtstexte (Pflicht!)

- **Impressum** (`/impressum`): Kanzleiname, Anschrift, Vertretungsberechtigte,
  USt-IdNr., zuständige Rechtsanwaltskammer, Berufshaftpflichtversicherung
  (Versicherer + Anschrift + Geltungsbereich) eintragen.
- **Datenschutz** (`/datenschutz`): Verantwortlichen, eingesetzte Tools/Hosting
  und tatsächliche Verarbeitung anpassen. **Aufsichtsbehörde je Bundesland
  korrekt benennen** (z. B. LDI NRW für Nordrhein-Westfalen, BayLDA für Bayern —
  der Kanzleisitz ist maßgeblich); Speicher-/Löschfristen konkretisieren.
- **Kosten/Vergütung** (`/kosten`): Vergütungsmodell und Widerrufsbelehrung an
  die Kanzleipraxis anpassen (Fernabsatzmandate!).
- **Kennzahlen nur belegbar:** Angaben wie „25+ Jahre Erfahrung" oder
  „1.500+ Mandate" (Hero) nur verwenden, wenn sie nachweisbar zutreffen —
  irreführende Werbung verstößt gegen § 43b BRAO / BORA.
- **Barrierefreiheit (BFSG):** Seit 28.06.2025 gilt das
  Barrierefreiheitsstärkungsgesetz auch für viele Dienstleistungs-Websites.
  Prüfen, ob die Kanzlei in den Anwendungsbereich fällt, und die Seite auf
  Kontraste, Tastaturbedienung und Alternativtexte prüfen.
- **Alles vor Veröffentlichung anwaltlich prüfen lassen.**

## 3. Inhalte ersetzen

- Kanzleiname/Marke „Hoffmann · Vogel" und Monogramm „H·V"
- Anwaltsprofile (`src/content/attorneys.ts`): Namen, Rollen, Vita, Fotos
  (`public/team/member-*.webp`)
- Leistungs-Detailtexte (`src/content/practice.ts`)
- FAQ (`src/content/faq.ts`), Karriere (`src/app/[locale]/karriere/page.tsx`)
- Kontaktdaten/Adresse/Karte (`messages/*.json` → `contact`, OSM-Koordinaten in
  `src/components/contact/ContactMap.tsx`)
- Bilder: Hero-Video/-Bild (`public/hero/`), Büro-Foto (`about-office.webp`)

## 4. Google-Bewertungen

Aktuell **Beispiel-Bewertungen**. Für echte Rezensionen die Google-Places-API
anbinden und den Button-Link in `ReviewsMarqueeDark.tsx` auf das echte
Google-Profil setzen.

## 5. Domain & Feinschliff

- Eigene Domain in Vercel verbinden und `NEXT_PUBLIC_SITE_URL` setzen
  (`src/lib/site.ts` — Basis für Sitemap, robots.txt und Canonicals)
- Titel/Description in `src/app/[locale]/layout.tsx`, die `metadata` der
  Unterseiten sowie `SITE_NAME` in `src/lib/site.ts` prüfen
- Favicon (`src/app/icon.svg`) und OG-Image
  (`src/app/[locale]/opengraph-image.tsx`) bei Bedarf anpassen
- Strukturierte Daten (`src/lib/jsonld.ts`: Adresse, Telefon, Sprechzeiten)
  und `public/llms.txt` aktuell halten
- Optional: Hero-Video zusätzlich als WebM (kleiner) bereitstellen

## 6. Betrieb

- Dependabot ist aktiviert (`.github/dependabot.yml`) — Update-PRs zeitnah
  einspielen
- Vor jedem Release `npm audit` ausführen und Findings beheben
