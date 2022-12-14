import adapter from '@sveltejs/adapter-auto';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [md.mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter()
  }
};

export default config;
