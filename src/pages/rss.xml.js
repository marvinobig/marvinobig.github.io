import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
    const blog = await getCollection('blog');
    return rss({
        title: 'Portfolio: Marvin Obig',
        description: 'View to learn a little about me, my skills, my work experience, my projects, how to contact me and also view my portfolio blog.',
        site: 'https://marvinobig.online',
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            summary: post.data.summary,
            link: `/posts/${post.slug}/`,
          })),
        customData: `<language>en-gb</language>`,
    });
}