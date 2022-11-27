import { PUBLIC_URL, BLOG_TITLE } from '../../lib/constants';
const months = ',Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

function formatPubdate(str) {
  const [y, m, d] = str.split('-');
  return `${d} ${months[+m]} ${y} 12:00 +0000`;
}

function escapeHTML(html) {
  const chars = {
    '"': 'quot',
    "'": '#39',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
  };

  return html.replace(/["'&<>]/g, (c) => `&${chars[c]};`);
}

const get_rss = (posts) =>
  `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
	<title>${BLOG_TITLE}</title>
	<link>https://github.com/muttoni/blogkit</link>
	<description>This is a minimalistic example of a blog built with SvelteKit.</description>
	<image>
		<url>${PUBLIC_URL}/favicon.png</url>
		<title>${BLOG_TITLE}</title>
		<link>https://github.com/muttoni/blogkit</link>
	</image>
	${posts
    .filter((post) => !post.draft)
    .map(
      (post) => `
		<item>
			<title>${escapeHTML(post.title)}</title>
			<link>${PUBLIC_URL}/${post.slug}</link>
			<description>${escapeHTML(post.description)}</description>
			<pubDate>${formatPubdate(post.date)}</pubDate>
		</item>
	`
    )
    .join('')}
</channel>

</rss>
`
    .replace(/>[^\S]+/gm, '>')
    .replace(/[^\S]+</gm, '<')
    .trim();

export async function GET({ fetch }) {
  const posts = await (await fetch(`/posts`)).json();

  return new Response(get_rss(posts), {
    headers: {
      'Cache-Control': `max-age=${30 * 60 * 1e3}`,
      'Content-Type': 'application/rss+xml'
    }
  });
}
