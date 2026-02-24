import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getPortfolioItems() {
  try {
    const entries = await client.getEntries({
      content_type: 'salonJozi',
      order: '-sys.createdAt',
    });
    
    return { items: entries.items, error: null };
  } catch (error) {
    // Check if it's an unknown content type error
    if (error.message?.includes('unknownContentType')) {
      console.warn('Salon Jozi content type not found in Contentful. Please check the content type ID.')
      return { 
        items: [], 
        error: 'Content type "salonJozi" blev ikke fundet i Contentful. Tjek venligst at Content Type ID er korrekt.'
      };
    }
    
    console.error('Error fetching portfolio items:', error);
    return { items: [], error: 'Der opstod en fejl ved hentning af portfolio items.' };
  }
}

export default client;
