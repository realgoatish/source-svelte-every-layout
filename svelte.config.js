import adapter from '@sveltejs/adapter-auto';
// import sveltePreprocess from 'svelte-preprocess'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
//     package: {
//       dir: 'svelte-every-layout',
//       emitTypes: true
//     }
// 	},
//   plugins: [
//     svelte({
//       preprocess: [sveltePreprocess({ typescript: true })]
//     })
//   ]
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
  preprocess: preprocess()
};

export default config;
