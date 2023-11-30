import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

export default defineConfig({
  prefetch: true,
  site: 'https://victor7w7r.github.io',
  base: '/036legacy',
  integrations: [compress()]
});
