# Cookie Banner & GTM Setup Guide

Din cookie banner er nu installeret og opsat! Her er hvad der er implementeret:

## ✨ **Features:**

✅ **GDPR Compliant** - Alle nødvendige elementer
✅ **4 Cookie Kategorier:**
  - Nødvendige (påkrævet, kan ikke fravælges)
  - Statistik & Analyse
  - Marketing & Publicering
  - Google Tag Manager & Tracking (placeholder)

✅ **LocalStorage Persistent** - Brugers valg gemmes lokalt
✅ **Tilbagekaldelse** - Mulighed for at trække samtykke tilbage
✅ **Settings Button** - Cookie-emoji-knap i nederste højre hjørne
✅ **Modern Design** - Matcher salonens beige/guld tema
✅ **Responsive** - Fungerer på mobile, tablet og desktop

---

## 🚀 **Sådan tilføjer du Google Tag Manager senere:**

### **Trin 1: Opret GTM Konto**
1. Gå til https://tagmanager.google.com
2. Opret konto
3. Kopier din **GTM ID** (format: GTM-XXXXXX)

### **Trin 2: Tilføj GTM-ID til kode**

Åben filen: [src/app/components/CookieBanner/CookieBanner.js](../src/app/components/CookieBanner/CookieBanner.js)

Find funktionen `loadCustomTag()` omkring linje 50. Erstat kommentarsektionen:

**Find dette:**
```javascript
const loadCustomTag = () => {
  // Placeholder for Google Tag Manager or similar
  // This will be populated with the actual GTM script later
  console.log('Custom tag script should be loaded here');
  
  // Example of how to load GTM when ready:
  // if (typeof window !== 'undefined') {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  //   document.head.appendChild(script);
  //
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() {
  //     dataLayer.push(arguments);
  //   }
  //   gtag('js', new Date());
  //   gtag('config', 'G-XXXXXXXXXX');
  // }
};
```

**Erstat med:**
```javascript
const loadCustomTag = () => {
  // Load Google Tag Manager
  if (typeof window !== 'undefined') {
    // GTM Script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-XXXXXX'; // ← Erstat GTM-XXXXXX med din ID
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'GTM-XXXXXX'); // ← Erstat GTM-XXXXXX med din ID
  }
};
```

**Eksempel med riktig ID:**
```javascript
const loadCustomTag = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-ABC123XY';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'GTM-ABC123XY');
  }
};
```

### **Trin 3: Tilføj GTM NoScript**

For komplet GTM måling skal du også tilføje NoScript alternativ. 

Åbn [src/app/layout.js](../src/app/layout.js) og tilføj dette i `<body>` efter `<ScrollToTop />`:

```javascript
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>
```

---

## 🎯 **Hvordan det fungerer:**

1. **Første besøg:** Bruger ser cookie banner
2. **Bruger vælger:** Kan acceptere alt, afvise alt, eller vælge individuelt
3. **Valg gemmes:** LocalStorage husker valget (30 tage - kan ændres)
4. **Custom Tag loader:** Når bruger accepterer "Custom Tag", loader `loadCustomTag()` automatisk

---

## 📋 **Cookie Kategorier Forklaring:**

### **Nødvendige (Always On)**
- Sessions-cookies
- CSRF protection
- Sikkerhed

### **Statistik & Analyse**
- Google Analytics
- Bruger-interaktion tracking
- Site performance

### **Marketing**
- Retargeting cookies
- Social media pixels
- Conversion tracking

### **Google Tag Manager & Tracking**
- GTM container
- Custom tags
- Din egen tracking

---

## 🔧 **Avanceret: Brugerdefinerede Cookies**

Hvis du vil tilføje flere cookie-kategorier (fx Facebook Pixel), kan du:

1. Tilføj ny state i `preferences`:
```javascript
const [preferences, setPreferences] = useState({
  necessary: true,
  analytics: false,
  marketing: false,
  customTag: false,
  facebookPixel: false, // ← Ny kategori
});
```

2. Tilføj ny kategori i JSX (kopier en eksisterende `cookieCategory`)

3. Tilføj loading-logik i `useEffect`:
```javascript
useEffect(() => {
  if (preferences.facebookPixel) {
    loadFacebookPixel();
  }
}, [preferences.facebookPixel]);
```

4. Opret `loadFacebookPixel()` funktion

---

## 🧪 **Test Cookie Banner Lokalt:**

```bash
npm run dev
```

1. Åbn `http://localhost:3000`
2. Accepter/afvis cookies
3. Åbn DevTools → Application → LocalStorage
4. Se `cookiePreferences` gemmes som JSON

---

## 📝 **Privacy Policy Link**

Banner linker til `/privatlivspolitik`. Sikr at denne side eksisterer og indeholder:
- Cookie-erklæring
- GDPR info
- Dine databehandlingspolitikker

---

## ✅ **Klar til deployment:**

Banner fungerer ud af boksen med Cloudflare Pages! Husk at:
1. Test lokalt først: `npm run dev`
2. Accepter cookies og check at `localStorage` opdateres
3. Deploy til Cloudflare Pages
4. Verificer cookie banner virker på live site

---

## 🆘 **Troubleshooting:**

**Q: Cookies gemmes ikke?**
A: Check at localStorage ikke er disabled i browser. Private browsing deaktiverer ofte localStorage.

**Q: Banner vises ikke igen?**
A: Cookies gemmes i localStorage. Luk banner og gå til `/kontakt` (ny side). Hvis den skal vises igen, åbn DevTools → Application → LocalStorage og slet `cookiePreferences`.

**Q: GTM scripts loader ikke?**
A: Sikr at:
1. Du har erstattet `GTM-XXXXXX` med din rigtige ID
2. Bruger har accepteret "Custom Tag" i cookie banner
3. Check browser console for fejl

---

Lykke til! 🍪✨
