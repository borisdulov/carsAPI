import { serve } from 'bun';

const server = serve({
  fetch: async (request) => {
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const pathname = url.pathname;

    // index
    if (pathname === '/') {
      return new Response(Bun.file('./index.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    // assets
    } else if (pathname === '/app.js') {
      return new Response(Bun.file('./dist/app.js'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    } else if (pathname === '/styles.css') {
      return new Response(Bun.file('./public/styles.css'), {
        headers: { 'Content-Type': 'text/css' },
      });
    // pseudo api
    } else if (pathname === '/cars.json') {
      const data = await Bun.file('./cars.json').json();
      const curPage: number = Number(queryParams.get('curPage'));
      const perPage: number = Number(queryParams.get('perPage'));
      const pageData = data.slice((curPage - 1) * perPage, curPage * perPage);
      return new Response(JSON.stringify(pageData), {
        headers: { 'Content-Type': 'application/json' },
      });
    // for pagination
    } else if (pathname === '/carsAmmount') {
      const data = await Bun.file('./cars.json').json();
      const totalItems = data.length;
      return new Response(totalItems.toString(), {
        headers: { 'Content-Type': 'text/plain' },
      });
    // error
    } else {
      return new Response('Not found!', { status: 404 });
    }
  },
  port: 3000
});

console.log(`Listening on localhost:${server.port}`);