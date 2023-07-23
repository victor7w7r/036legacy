import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  server: { port: 4000 },
  integrations: [
    compress(), prefetch()
  ],
});