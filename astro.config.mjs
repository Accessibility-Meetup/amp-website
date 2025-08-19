// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isStaging = process.env.NODE_ENV === 'staging';

// https://astro.build/config
export default defineConfig({
  site: isStaging ? 'https://accessibility-meetup.github.io' : 'https://accessibilitymeetup.pl',
  base: isStaging ? '/amp-website' : '',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});