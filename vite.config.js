import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		exclude: ['@codemirror']
	},
	plugins: [sveltekit()],
	resolve:{
		alias:{
			'$components':'/src/components',
			'$assets':'/src/assets'
		}
	}
});
