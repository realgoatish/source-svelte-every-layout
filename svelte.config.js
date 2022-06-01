import adapter from '@sveltejs/adapter-auto';
import autoPreprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: autoPreprocess(),
	kit: {
		adapter: adapter(),
    package: {
      dir: 'svelte-every-layout',
      emitTypes: true
    }
	},
  vite: {
    resolve: {
      alias: {
        $lib: resolve('./src/lib'),
        $prod: resolve('./svelte-every-layout')
      },
    },
  },
};

export default config;
