import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		output: {
			bundleStrategy: 'inline'
		},
		csrf: {
			checkOrigin: false
		}
	},
	preprocess: vitePreprocess(),
};
export default config;
