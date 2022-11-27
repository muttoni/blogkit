<script>
  import PageHead from '$lib/components/PageHead.svelte';
  import Article from '../../../lib/components/Article.svelte';
  import ArticleTitle from '$lib/components/ArticleTitle.svelte';
  import ArticleMeta from '$lib/components/ArticleMeta.svelte';

  export let data;
</script>

<PageHead title={data.title} description={data.description} />

<Article>
  <ArticleTitle title={data.title} />
  <ArticleMeta author={data.author} date={data.date} />
  <svelte:component this={data.content} />
</Article>
