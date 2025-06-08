import { getAllPosts } from "@/lib/post";

export const baseUrl = "https://www.frc.tw";

const supportedLanguages = ["zh", "en"];

const staticPages = [
  { link: "/", priority: 1.0, changefreq: "weekly" },
  { link: "/about", priority: 0.8, changefreq: "weekly" },
  { link: "/calendar", priority: 0.8, changefreq: "weekly" },
  { link: "/contact", priority: 0.8, changefreq: "weekly" },
  { link: "/news", priority: 0.8, changefreq: "weekly" },
  { link: "/sponsors", priority: 0.8, changefreq: "weekly" },
  { link: "/volunteer", priority: 0.8, changefreq: "weekly" },
  { link: "/intro", priority: 0.8, changefreq: "weekly" },
  { link: "/video", priority: 0.8, changefreq: "weekly" },
];

export default async function sitemap() {
  const staticLinks = staticPages.flatMap(({ link, priority, changefreq }) =>
    supportedLanguages.map((lang) => ({
      url: `${baseUrl}/${lang}${link === "/" ? "" : link}`,
      lastModified: new Date().toISOString(),
      changefreq,
      priority,
    })),
  );

  const newsLinks = await Promise.all(
    supportedLanguages.flatMap(async (lang) => {
      const news = getAllPosts(`posts/news/${lang}`);
      return news.map((post) => ({
        url: `${baseUrl}/${lang}/news/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt).toISOString(),
        changefreq: "monthly",
        priority: 0.6,
      }));
    }),
  );

  const aboutLinks = await Promise.all(
    supportedLanguages.flatMap(async (lang) => {
      const about = getAllPosts(`posts/about/${lang}`);
      return about.map((post) => ({
        url: `${baseUrl}/${lang}/about/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt).toISOString(),
        changefreq: "monthly",
        priority: 0.6,
      }));
    }),
  );

  const volunteerLinks = await Promise.all(
    supportedLanguages.flatMap(async (lang) => {
      const volunteer = getAllPosts(`posts/volunteer/${lang}`);
      return volunteer.map((post) => ({
        url: `${baseUrl}/${lang}/volunteer/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt).toISOString(),
        changefreq: "monthly",
        priority: 0.6,
      }));
    }),
  );

  return [
    ...staticLinks,
    ...newsLinks.flat(),
    ...aboutLinks.flat(),
    ...volunteerLinks.flat(),
  ];
}
