import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://victor7w7r.github.io',
  integrations: [compress(), prefetch()]
});