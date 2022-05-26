import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
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
      },
    },
  },
};

export default config;
