import { serve } from 'bun';

const server = serve({
  fetch: (request) => {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return new Response(Bun.file('./index.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    } else if (url.pathname === '/app.js') {
      return new Response(Bun.file('./dist/app.js'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    } else if (url.pathname === '/cars.json') {
      const jsonData = Bun.file('./cars.json');
      return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response('Not found!', { status: 404 });
    }
  },
  port: 3000
});

console.log(`Listening on localhost:${server.port}`);