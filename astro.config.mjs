import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  integrations: [compress(), prefetch()]
});
