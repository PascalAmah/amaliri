import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_LANG, SITE_TITLE } from '../consts';
import { withBase } from '../utils/paths';

export async function GET(context) {
  const projects = (await getCollection('projects'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(withBase('/'), context.site),
    customData: `<language>${SITE_LANG}</language>`,
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.pubDate,
      link: withBase(`/projects/${project.id}/`),
    })),
  });
}
