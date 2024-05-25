import { serve } from 'bun';

const server = serve({
  fetch: (request) => {
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const pathname = url.pathname;

    if (pathname === '/') {
      return new Response(Bun.file('./index.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    } else if (pathname === '/app.js') {
      return new Response(Bun.file('./dist/app.js'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    } else if (pathname === '/cars.json') {
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