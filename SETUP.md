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
  und tatsächliche Verarbeitung anpassen.
- **Beides vor Veröffentlichung anwaltlich prüfen lassen.**

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

- Eigene Domain in Vercel verbinden
- `metadata` (Titel/Description) in `src/app/[locale]/layout.tsx` anpassen
- Favicon/OG-Image ergänzen
- Optional: Hero-Video zusätzlich als WebM (kleiner) bereitstellen
