# Kanzlei-Abrufliste — was ich noch von Lübbersmann Rechtsanwälte brauche

> Stand: 30.09.2026. Alles Technische ist erledigt (Build grün, `npm audit` 0
> Schwachstellen, next auf Security-Stand, Code-Hygiene in PR #11). Was hier
> steht, kann ich **nicht selbst erfinden** — es sind echte Kanzlei-Angaben,
> Inhalte oder Entscheidungen. Sobald du mir die Punkte lieferst, setze ich sie
> in einem Rutsch um.

Fundstellen beziehen sich auf den Live-Stand (`main`).

---

## A) Impressum — Pflichtangaben (abmahnfähig, zuerst)

Datei: `src/app/[locale]/impressum/page.tsx`

| # | Was fehlt | Fundstelle | Was passiert, wenn's fehlt |
|---|-----------|------------|----------------------------|
| A1 | **USt-IdNr.** — echte Nummer, oder Bestätigung „keine vorhanden" (dann streiche ich die Zeile) | Zeile 64: `DE000000000 [Platzhalter]` | Falsche/leere USt-IdNr. ist abmahnfähig |
| A2 | **Berufshaftpflichtversicherung** — Name **und** Anschrift des Versicherers + räumlicher Geltungsbereich (§ 2 Abs. 1 Nr. 11 DL-InfoV) | Zeilen 88–90: `[Name und Anschrift des Versicherers]` … `[anpassen]` | Pflichtangabe fehlt → abmahnfähig |
| A3 | **Rechtsanwaltskammer bestätigen** — aktuell „RAK Hamm, Ostenallee 18, 59063 Hamm". Für Münster (OLG-Bezirk Hamm) ist das **höchstwahrscheinlich korrekt**; ich brauche nur ein „passt" | Zeile 74: `… Hamm [ggf. anpassen]` | Nur Vermerk `[ggf. anpassen]` entfernen |

**Bereits korrekt hinterlegt (nur zur Kontrolle):** Lübbersmann Rechtsanwälte,
Südstraße 11, 48153 Münster · Tel 0251 524024 · Fax 0251 531761 ·
luebbersmann@luebbersmann-rechtsanwaelte.de · Vertreten durch Sascha Lübbersmann.
→ Falls eine dieser Angaben nicht stimmt, hier korrigieren lassen.

---

## B) Inhalte ersetzen (Vorlage → echt)

| # | Was fehlt | Fundstelle | Hinweis |
|---|-----------|------------|---------|
| B1 | **Hero-Kennzahlen belegen oder streichen** — „25+ Jahre" und „1.500+ Mandate" stammen aus der Vorlage. Nur belegbare Zahlen sind erlaubt (§ 43b BRAO / § 6 BORA) | `messages/de.json` Z. 44 (`stat1Value`), Z. 48 (`stat3Value`) | Sag mir echte Zahlen oder „raus damit" |
| B2 | **Team-/Anwaltsprofile** — Namen, Rollen, Vita, Schwerpunkte, Fotos | `src/content/attorneys.ts`, Fotos `public/team/` | Aktuell als Platzhalter markiert |
| B3 | **Presse-Links** — echte statt Beispiel | `src/content/press.ts` (Platzhalter) | Optional; sonst Sektion ggf. ausblenden |
| B4 | **Google-Bewertungen** — echtes Google-Profil + ob per Google-Places-API einbinden | Komponente `reviews/…`, Button-Link | Aktuell Beispiel-Bewertungen |
| B5 | **Bilder** — Hero-Bild/Video, Büro-Foto, Kanzleiräume | `public/hero/`, `public/…` | Aktuell als „Platzhalter" gekennzeichnet |

> Wenn B1–B5 stehen, entferne ich auch die verbleibenden „Beispiel-/Platzhalter"-
> Warnhinweise auf Impressum/Datenschutz/Kosten. **Danach: alle Rechtstexte
> anwaltlich prüfen lassen.**

---

## C) Vercel-Konfiguration (machst du im Vercel-Dashboard)

Project → Settings → Environment Variables. Ohne diese läuft das Kontaktformular
im **Demo-Modus** (versendet nichts).

| # | Variable | Wert | Hinweis |
|---|----------|------|---------|
| C1 | `RESEND_API_KEY` | `re_…` (von resend.com) | Domain bei Resend verifizieren |
| C2 | `CONTACT_FROM` | `Kanzlei <kanzlei@luebbersmann-rechtsanwaelte.de>` | Verifizierte Domain |
| C3 | `CONTACT_TO_ARBEITSRECHT` | zuständige Adresse | **Zwei-„b"-Domain!** `luebbersmann-rechtsanwaelte.de` |
| C4 | `CONTACT_TO_FAMILIENRECHT` | zuständige Adresse | dito |
| C5 | `CONTACT_TO_WIRTSCHAFTSRECHT` | zuständige Adresse | dito |
| C6 | `CONTACT_TO_STRAFRECHT` | zuständige Adresse | dito |
| C7 | `CONTACT_TO_DEFAULT` | zentrales Postfach (Fallback) | **Pflicht** — ohne bricht Versand ab, statt an falsche Adresse zu gehen |
| C8 | `CONTACT_CC` *(optional)* | Kopie aller Anfragen | optional |
| C9 | `NEXT_PUBLIC_SITE_URL` | `https://<echte-domain>` | Erst beim Umzug auf die Kanzlei-Domain — Basis für Canonicals, Sitemap, robots, JSON-LD |

> ⚠️ Domain-Check 02.07.2026: Die **Ein-„b"-Variante** (`luebersmann-…`) existiert
> nicht (NXDOMAIN). Immer zwei „b": `luebbersmann-rechtsanwaelte.de`.

Ich kann diese Werte nicht selbst setzen (Vercel-Zugriff liegt bei dir). Ich kann
dir aber die exakten Klick-Schritte geben — sag Bescheid.

---

## D) Entscheidung nötig (von dir)

| # | Thema | Warum ich frage |
|---|-------|-----------------|
| D1 | **Porträtfoto aus der Git-Historie entfernen** — `sascha-luebbersmann.jpg` liegt inkl. Historie im Repo | Vollständige Entfernung = History-Rewrite (`git filter-repo` + Force-Push), **destruktiv**. Mach ich nur auf deine ausdrückliche Freigabe. Solange das Foto ohnehin live genutzt wird, betrifft es nur Historie-Hygiene |

---

## So gibst du mir's zurück (copy-paste, ausfüllen, zurückschicken)

```
A1 USt-IdNr.:                 __________  (oder: keine vorhanden)
A2 Versicherer Name+Anschrift: __________
   Geltungsbereich:           Deutschland / EU  (oder: __________)
A3 RAK Hamm passt?            ja / nein → __________

B1 Hero-Zahlen:              Jahre Erfahrung: ___   Mandate: ___   (oder: streichen)
B2 Team liefern?             ja (Daten folgen) / später
B3 Presse-Links:             __________ / keine
B4 Google-Profil-Link:       __________   Reviews per API? ja/nein
B5 Bilder:                   liefere ich / nutze Platzhalter vorerst

C  Env-Vars gesetzt?         ja / brauche Klick-Anleitung

D1 Foto aus Historie tilgen? ja, freigegeben / nein, so lassen
```

Sobald A + (optional) B/C/D da sind, setze ich A1–A3 direkt im Code um, entferne
die Warnhinweise und mache dir einen PR.
