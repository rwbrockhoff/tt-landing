import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tidytrek.co',
	base: process.env.PUBLIC_BASE_PATH || '/',
});
