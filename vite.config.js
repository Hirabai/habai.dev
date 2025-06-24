/*
 * I am thinking that Vite would be a good framework to learn while building this project.
 * Why Vite? Because it's french and the front page of their website looked fancy enough.
 */ 

import Markdown from 'vite-plugin-md';

export default {
	plugins: [Markdown()],
	build: {
		outDir: 'dist',
	},
	resolve: {
	alias: {
	'#': '/src',
}
}
};
