export default {
  entrypoints: ['/src/client/app.ts'],
  outdir: './dist',
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    Bun.css(),
  ],
};