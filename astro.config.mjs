import { defineConfig } from 'astro/config';

// Use BASE_URL from env (set by GitHub Actions) or fall back to empty string for local dev
const base = process.env.BASE_URL || '';

export default defineConfig({
  site: process.env.SITE_URL || 'https://rubberroad-industrial.com',
  base,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
