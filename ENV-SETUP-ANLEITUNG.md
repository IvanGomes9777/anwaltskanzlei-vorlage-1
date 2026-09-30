# Kontaktformular scharfschalten — Env-Vars in Vercel

Ziel: Das Kontaktformular versendet echte E-Mails (Anfrage an die Kanzlei +
automatische Eingangsbestätigung an den Absender). Ohne `RESEND_API_KEY` läuft
alles im **Demo-Modus** (Formular „funktioniert", sendet aber nichts).

Reihenfolge: **Resend einrichten → DNS verifizieren → API-Key → Vercel-Vars → Deploy → Test.**

---

## 1. Resend-Konto + Absender-Domain verifizieren

1. Konto auf **resend.com** anlegen (Free-Tier reicht zum Start: 3.000 Mails/Monat).
2. **Domains → Add Domain** → `luebbersmann-rechtsanwaelte.de` eintragen.
   - Empfehlung: Als Sende-Subdomain **`send.luebbersmann-rechtsanwaelte.de`**
     verwenden. Vorteil: Die DNS-Records fürs Senden berühren **nicht** die
     bestehende E-Mail-Zustellung (MX/SPF) der Hauptdomain.
3. Resend zeigt dir **DNS-Records** an (DKIM = CNAME, dazu ein SPF-/MX-Eintrag
   für die Subdomain). Diese Records beim **DNS-Anbieter der Domain** eintragen
   (dort, wo die Domain-DNS liegt — z. B. GoDaddy oder der Mail-Hoster).
   - ⚠️ **Kein zweiter SPF-TXT-Eintrag** auf derselben (Sub-)Domain. Falls schon
     ein `v=spf1`-Eintrag existiert, den Resend-Include **in den bestehenden**
     mergen, nicht einen neuen anlegen.
4. In Resend auf **Verify** klicken (DNS-Propagierung kann bis ~1 h dauern).
   Status muss auf **Verified** stehen, sonst schlägt der Versand fehl.

## 2. API-Key erzeugen

- Resend → **API Keys → Create API Key** (Sending-Rechte) → Wert kopieren
  (beginnt mit `re_…`). Das wird gleich `RESEND_API_KEY`.

---

## 3. Vercel — Environment Variables setzen

**Vercel → Projekt `anwaltskanzlei-vorlage-1` → Settings → Environment Variables.**
Für jede Variable **Production** ankreuzen (Preview optional, aber sinnvoll zum Testen).

| Variable | Wert | Pflicht? |
|---|---|---|
| `RESEND_API_KEY` | `re_…` (aus Schritt 2) | **ja** — ohne bleibt Demo-Modus |
| `CONTACT_FROM` | `Lübbersmann Rechtsanwälte <kanzlei@send.luebbersmann-rechtsanwaelte.de>` | ja — Adresse muss zur verifizierten (Sub-)Domain passen |
| `CONTACT_TO_DEFAULT` | zentrales Postfach, z. B. `kanzlei@luebbersmann-rechtsanwaelte.de` | **ja** — Fallback + „Sonstiges"; ohne bricht Versand ab |
| `CONTACT_TO_MEDIZINSTRAFRECHT` | zuständige Adresse | optional* |
| `CONTACT_TO_WIRTSCHAFTSSTRAFRECHT` | zuständige Adresse | optional* |
| `CONTACT_TO_STEUERSTRAFRECHT` | zuständige Adresse | optional* |
| `CONTACT_CC` | Kopie aller Anfragen | optional |

\* Wenn ein Gebiet **nicht** gesetzt ist, geht die Anfrage automatisch an
`CONTACT_TO_DEFAULT`. Du kannst also klein anfangen: nur `RESEND_API_KEY`,
`CONTACT_FROM` und `CONTACT_TO_DEFAULT` — dann landet alles in einem Postfach.

**Merke:**
- Empfänger-Domain immer mit **zwei „b"**: `luebbersmann-rechtsanwaelte.de`
  (die Ein-„b"-Variante existiert nicht → E-Mails würden ins Leere laufen).
- Die **Empfänger** (`CONTACT_TO_*`) sind eure echten Postfächer und müssen
  **nicht** bei Resend verifiziert sein. Nur die **Absender-Domain**
  (`CONTACT_FROM`) muss verifiziert sein.
- `replyTo` ist automatisch die E-Mail des Anfragenden — Antworten gehen direkt
  an ihn.

---

## 4. Neu deployen

Env-Vars greifen erst nach einem neuen Build:
- Vercel → **Deployments → … (⋯) beim letzten Prod-Deploy → Redeploy**,
  **oder** einen kleinen Commit auf `main` pushen.

## 5. Test

1. Auf der Live-Seite eine Testanfrage über das Formular schicken.
2. Prüfen: Kommt die interne Mail an (`CONTACT_TO_*`/`DEFAULT`)? Kommt beim
   Absender die Eingangsbestätigung an?
3. Falls nichts ankommt: Resend → **Logs** ansehen (dort steht der Grund, z. B.
   Domain nicht verified, oder From-Adresse passt nicht zur Domain).

---

## Kurz-Checkliste

- [ ] Resend-Konto + (Sub-)Domain **Verified**
- [ ] `RESEND_API_KEY` gesetzt
- [ ] `CONTACT_FROM` = Adresse auf verifizierter Domain
- [ ] `CONTACT_TO_DEFAULT` gesetzt (Pflicht-Fallback)
- [ ] Optional: die drei `CONTACT_TO_<Gebiet>` + `CONTACT_CC`
- [ ] Redeploy gemacht
- [ ] Testanfrage kommt an + Eingangsbestätigung kommt an
