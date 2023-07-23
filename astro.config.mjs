import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://victor7w7r.github.io',
  base: '/036legacy',
  integrations: [compress(), prefetch()]
});