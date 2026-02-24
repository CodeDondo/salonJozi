import { getPortfolioItems } from '@/lib/contentful';

// Force dynamic rendering - don't pre-render during build
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { items, error } = await getPortfolioItems();
    
    if (error) {
      return new Response(JSON.stringify({ error, items: [] }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return new Response(JSON.stringify({ items, error: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error', items: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
