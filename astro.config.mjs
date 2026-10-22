import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://imazhar101.dev',
  markdown: {
    // Dual theme with defaultColor:false emits --shiki-light / --shiki-dark
    // custom properties instead of baked colors, so code blocks can follow the
    // site's own light/dark switch (see .astro-code in sketchnote.css).
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
