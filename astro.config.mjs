import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Tev969.github.io',
  base: 'productou',
  integrations: [tailwind()],
});