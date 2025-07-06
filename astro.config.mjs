import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // or `@astrojs/vercel/edge` if using edge

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});