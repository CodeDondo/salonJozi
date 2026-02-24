# Contentful Integration - Portfolio

## Opsætning

Portfolio-siden henter data fra Contentful CMS.

### Environment Variables

Sørg for at `.env.local` filen indeholder:

```
CONTENTFUL_SPACE_ID=te0utied70y4
CONTENTFUL_ACCESS_TOKEN=e3b1xyrAMSufe-7qVqpfRjrnlAOFQlEp28H0giWaG2w
CONTENTFUL_PREVIEW_ACCESS_TOKEN=xz3lzL7oQaFPh4y23etyIVmYQR8ItYmwjSbcB4bBrNw
```

### Content Model i Contentful

Opret en Content Type i Contentful med navnet **"portfolio"** og følgende felter:

#### Felter:
- **title** (Short text) - Titel på portfolio item
- **description** (Long text) - Beskrivelse af projektet
- **image** (Media - Single file) - Billede af projektet

### Hvordan tilføjer jeg portfolio items?

1. Log ind på Contentful (https://app.contentful.com)
2. Vælg dit space (te0utied70y4)
3. Gå til "Content model" og opret en ny Content Type kaldet "portfolio"
4. Tilføj felterne: title, description, og image
5. Gå til "Content" og opret nye portfolio items
6. Publish dine portfolio items

### Teknisk Implementation

- **Contentful SDK**: `contentful` npm package
- **API Client**: `/src/lib/contentful.js`
- **Portfolio Side**: `/src/app/portfolio/page.js`
- **Styling**: `/src/app/portfolio/portfolio.module.css`

### Next.js Image Optimization

Billeder fra Contentful er konfigureret i `next.config.mjs` til at bruge Next.js Image Optimization.
