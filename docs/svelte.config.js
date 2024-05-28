import adapter from '@sveltejs/adapter-auto';
import remarkHeadingID from 'remark-heading-id';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

// node
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			remarkPlugins: [remarkHeadingID],
			extensions: ['.svelte.md'],
			layout: {
				docs: dirname(fileURLToPath(import.meta.url)) + '/src/lib/mdsvex/template-docs.svelte'
			}
		}),
		vitePreprocess()
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
