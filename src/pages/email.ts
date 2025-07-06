import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: 'mailto:jason@jasonshew.com',
    }
  });
};