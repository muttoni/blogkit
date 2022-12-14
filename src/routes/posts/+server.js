import { slugFromPath } from '$lib/util';
import { json } from '@sveltejs/kit';

export const prerender = true;

export async function GET({ url }) {
  const modules = import.meta.glob('./*.{md,svx,svelte.md}');

  const postPromises = [];
  // uncomment code to get limit query, at the cost of non-static
  //const limit = Number(url.searchParams.get('limit') ?? Infinity);

  // if (Number.isNaN(limit)) {
  //   return {
  //     status: 400
  //   };
  // }

  for (let [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path);
    const promise = resolver().then((post) => ({
      slug,
      ...post.metadata
    }));

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);

  const publishedPosts = posts.filter((post) => post.published); //.slice(0, limit);

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return json(publishedPosts);
}
