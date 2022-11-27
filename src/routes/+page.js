export async function load({ fetch }) {
  const res = await fetch(`/posts`);

  if (res.ok) {
    return { posts: await res.json() };
  } else {
    console.log("Could not fetch posts.")
  }
}
