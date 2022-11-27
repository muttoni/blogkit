# `BlogKit`

Minimalistic blog site template, built with [Svelte](https://svelte.dev), [SvelteKit](https://kit.svelte.dev) and [MDsveX](https://mdsvex.com). Originally forked from [@mehdi_vasigh](https://twitter.com/mehdi_vasigh)'s [sveltekit-mdsvex-blog](https://github.com/mvasigh/sveltekit-mdsvex-blog/).

Write in markdown, publish in Svelte! Particularly simple, suprisingly powerful.


## Features

- **Markdown & Svelte**: The convenience of markdown, with the power of Svelte
- **Code Highlighting**: Prism code highlighting (default theme is VSCode Dark)
- **Light/Dark Modes**: Light, dark and OLED themes
- **Next-gen Framework**: Bleeding edge SvelteKit compatibility with new `+server` and `+page` routing
- **SSR and SEO Friendly**: Server-side rendering (SSR) for ultra-fast loading and SEO performance.
- **RSS Feed**: Automatically generated RSS Feed

## Getting started

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/muttoni/blogkit.git my-blog
cd my-blog
```

If you want to have a fresh commit history, blow away the `.git` directory and re-initialize the repository locally:

```bash
rm -rf .git
git init
```

Next, install dependencies with NPM:

```bash
npm install
```

Finally, run the local development server:

```bash
npm run dev
```

## Building for production

This project is pre-configured with any provider. This makes deploying to static site hosts, such as Vercel or Netlify, super easy. Simply add your site's repository to your static site host of choice, configure the build command to be `npm run build` and the build output directory to be `build`.

## Disclaimer

SvelteKit is still pre-release software and APIs may change dramatically. Therefore, the code in this repository may need modifications to work with future releases of SvelteKit and MDsveX respectively. Please feel free to open an issue or raise a pull request if you find any issues!
