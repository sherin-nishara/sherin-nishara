import process from 'node:process';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
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
        fallback: '404.html',
        strict: false
      }),
      paths: {
        base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      }
    })
  ]
});
