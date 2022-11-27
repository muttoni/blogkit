<script>
  import { page } from '$app/stores';
  import { BLOG_TITLE } from '$lib/constants';

  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  import '../app.css';
  import '../prism.css';
</script>

<header>
  <a href="/"><h1 class:small={$page.url.pathname !== '/'}>{ BLOG_TITLE }</h1></a>
  <ThemeToggle />
</header>

<main>
  <slot />
</main>

<footer>
  <p>
    <a href="/rss.xml">RSS Feed</a> – <a class="secondary" href="https://github.com/muttoni/blogkit">Github</a>
  </p>
</footer>

<style>
  h1 {
    margin: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .small {
    font-size: 1.6rem;
    transition: font-size 0.5s ease;
  }

  footer {
    margin-top: calc(var(--spacing-unit) * 8);
  }
</style>
