import { serve } from 'bun';

const server = serve({
  fetch: (request) => {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return new Response(Bun.file('./index.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    } else if (url.pathname === '/app.ts') {
      return new Response(Bun.file('./src/client/app.ts'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    } else {
      return new Response('Not found!', { status: 404 });
    }
  },
  port: 3000
});

console.log(`Listening on localhost:${server.port}`);