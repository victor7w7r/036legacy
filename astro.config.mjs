import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

export default defineConfig({
  prefetch: true,
  integrations: [compress()]
});
