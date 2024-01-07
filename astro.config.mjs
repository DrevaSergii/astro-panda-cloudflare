import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  integrations: [react(), pandacss()],
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
    },
  }),
});
