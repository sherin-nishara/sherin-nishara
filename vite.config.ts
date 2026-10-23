import process from 'node:process';
\import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-netlify';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
		  compilerOptions: {
		    runes: ({ filename }) =>
		      filename.split(/[/\\]/).includes('node_modules') ? undefined : true
		  },
		  adapter: adapter({
		    edge: false,
		    split: false
		  }),
		  paths: {
		    base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		  }
		})
	]
});
