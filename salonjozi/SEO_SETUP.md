# SEO Setup - Robots.txt & Sitemap.xml

✅ **Robots.txt og Sitemap.xml er nu opsat!**

## 📁 **Hvad er oprettet:**

### 1. **robots.js** → Genererer `/robots.txt`
- Tillader alle søgemaskiner at crawle sitet
- Blokerer `/api/` endpoints fra indexering
- Refererer til sitemap.xml

### 2. **sitemap.js** → Genererer `/sitemap.xml`
- Dynamisk XML sitemap med alle sider
- Prioriteter sat efter vigtighed
- Change frequencies for hver side
- Automatisk opdateret lastModified dato

---

## 🌐 **URLs i Sitemap:**

### **Høj Prioritet (0.8-1.0):**
- `/` - Forside (1.0)
- `/priser` - Priser (0.9)
- `/book` - Booking (0.9)
- `/om-os` - Om Os (0.8)
- `/portfolio` - Portfolio (0.8)

### **Medium Prioritet (0.7):**
- `/kontakt` - Kontakt (0.7)

### **Lav Prioritet (0.3):**
- `/privatlivspolitik`
- `/cookiepolitik`
- `/handelsbetingelser`
- `/gdpr`

---

## ✅ **Test Sitemap & Robots.txt:**

### **Lokalt:**
```bash
npm run dev
```

Gå til:
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml

### **Efter Deploy:**
- https://salonjozi.dk/robots.txt
- https://salonjozi.dk/sitemap.xml

---

## 🚀 **Næste Skridt (Efter Deploy):**

### **1. Google Search Console**
1. Gå til https://search.google.com/search-console
2. Tilføj `salonjozi.dk` som property
3. Verificer domæne (via DNS eller HTML tag)
4. Indsend sitemap: `https://salonjozi.dk/sitemap.xml`

### **2. Bing Webmaster Tools**
1. Gå til https://www.bing.com/webmasters
2. Tilføj website
3. Indsend sitemap

---

## 🔧 **Opdatering af Sitemap:**

Hvis du tilføjer nye sider senere, skal du blot tilføje dem i `sitemap.js`:

```javascript
{
  url: `${baseUrl}/ny-side`,
  lastModified: currentDate,
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

### **Change Frequency Guideline:**
- `always` - Ændres konstant (ekstremt sjældent brugt)
- `hourly` - Hver time
- `daily` - Dagligt (fx blog/nyheder)
- `weekly` - Ugentligt (fx portfolio)
- `monthly` - Månedligt (standard for de fleste sider)
- `yearly` - Årligt (fx privacy policy)
- `never` - Aldrig (arkiveret indhold)

### **Priority Guideline:**
- `1.0` - Forside (altid højeste)
- `0.8-0.9` - Vigtige sider (services, priser, booking)
- `0.5-0.7` - Almindelige sider (kontakt, blog posts)
- `0.3-0.4` - Mindre vigtige (privacy, terms)

---

## 📊 **Robots.txt Forklaring:**

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: https://salonjozi.dk/sitemap.xml
```

- `User-agent: *` - Gælder for alle bots
- `Allow: /` - Tillad alt
- `Disallow: /api/` - Bloker API routes
- `Sitemap:` - Reference til din sitemap

---

## ⚠️ **VIGTIGT:**

**Opdater domain URL** i både `robots.js` og `sitemap.js` hvis dit domæne er anderledes:

**I sitemap.js linje 2:**
```javascript
const baseUrl = 'https://salonjozi.dk'; // ← Skift hvis anderledes
```

**I robots.js linje 9:**
```javascript
sitemap: 'https://salonjozi.dk/sitemap.xml', // ← Skift hvis anderledes
```

---

## 🧪 **Verificer Sitemap Format:**

Du kan teste din sitemap på:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Google Search Console (efter upload)

---

## ✨ **Fordele:**

✅ Bedre SEO - Søgemaskiner finder alle sider
✅ Crawl-kontrol - Styrer hvilke sider bots må se
✅ Automatisk opdatering - Next.js genererer dynamisk
✅ Standards-compliant - Følger Sitemap Protocol
✅ Google-venlig - Klar til Search Console

---

**Din hjemmeside er nu SEO-ready!** 🎉
