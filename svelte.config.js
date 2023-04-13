import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoPreprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [autoPreprocess({
		scss: {
			prependData: "@import './src/scss/styles.scss';",
		}
	}), vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
