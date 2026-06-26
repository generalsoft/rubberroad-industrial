import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rubberroad-industrial.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
