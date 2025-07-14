import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			external: ['three'],
			output: {
				globals: {
					three: 'THREE'
				}
			}
		}
	},
	base: './',
});
