import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		manakit({
			style: {
				preprocessor: 'sass',
				minimify: true
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
