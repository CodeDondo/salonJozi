# Kontaktformular Setup - Email Konfiguration

Din kontaktformular er nu sat op! For at få den til at virke med email-forsendelse, skal du følge disse trin:

## Setup Instruktioner

### 1. **Vælg Email Service**

Jeg har sat kontaktformularen op til at bruge **Resend** (anbefalet), men du kan også bruge:
- **Resend** (anbefalet - mest brugervenlig)
- **SendGrid** (mere powerful)
- **Mailgun** (billig og flexibel)

### 2. **Setup med Resend (Anbefalet)**

#### Step 1: Opret Resend Konto
1. Gå til https://resend.com
2. Tilmeld dig med din email
3. Bekræft email og opret konto

#### Step 2: Få API Key
1. Log ind på Resend Dashboard
2. Gå til "API Keys" eller "Settings"
3. Kopier din API Key

#### Step 3: Sæt Miljøvariabel
Tilføj din API-nøgle til `.env.local` fil i roden af dit projekt:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

#### Step 4: Installér Resend SDK (valgfrit, men anbefalet)
```bash
npm install resend
```

### 3. **Cloudflare Pages Setup**

Når du deployer til Cloudflare Pages, skal du også sætte miljøvariablen der:

1. Gå til dit Cloudflare Pages projekt
2. Settings → Functions → Environment Variables
3. Tilføj: `RESEND_API_KEY` = (din API key fra Resend)

### 4. **Verifikation af Sender Email** 

I begyndelsen skal emails sendes fra `onboarding@resend.dev`. For at sende fra din egen email-domæne:

1. I Resend Dashboard, verificer din domæne
2. Tilføj DNS records (Resend giver vejledning)
3. Ændre `from` i [send-email/route.js](src/app/api/send-email/route.js) fra:
   ```javascript
   from: 'Salon Jozi <onboarding@resend.dev>'
   ```
   til:
   ```javascript
   from: 'Salon Jozi <noreply@salonjozi.dk>' // eller din email
   ```

### 5. **Test Formularen Lokalt**

```bash
npm run dev
```

Naviger til `/kontakt` og test med en besked. Du burde modtage en email på `info@salonjozi.dk`

---

## Alternativ: SendGrid Setup

Hvis du foretrækker SendGrid:

1. Gå til https://sendgrid.com
2. Opret konto og generer API Key under "API Keys"
3. Tilføj til `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxx
   ```

4. Installer SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

5. Jeg kan lave route filen til SendGrid hvis du ønsker det

---

## Hvad Skal du Oplyse Mig?

For at jeg kan hjælpe med setup:

1. **Domæne**: Dit eget domæne (fx salonjozi.dk) hvis du har det
2. **Email Service Valg**: Resend (anbefalet) eller SendGrid?
3. **Any Branding**: Logo eller farver til email-template?

---

## API Validering

Formularen validerer:
- ✅ Navn (påkrævet)
- ✅ Email (gyldig format)
- ✅ Emne (påkrævet)
- ✅ Besked (påkrævet)
- ⚠️ Telefon (valgfri)

---

## Fejlfinding

**Fejl: "Email-tjeneste er ikke konfigureret"**
- Check at `RESEND_API_KEY` er sat i `.env.local`

**Fejl: "Alle felter er påkrævet"**
- Sørg for at navn, email, emne og besked udfyldes

**Email kommer ikke frem**
- Check Spam-folder
- Verificer API Key er korrekt
- Check Resend dashboard for fejl-logs

---

## Deployment til Cloudflare Pages

1. Push kode til GitHub/GitLab
2. Cloudflare Pages: Connect dit repo
3. Build Command: `npm run build`
4. Sæt miljøvariabel i Cloudflare: `RESEND_API_KEY`
5. Deploy!

Du er nu klar til at modtage beskeder! 🎉
