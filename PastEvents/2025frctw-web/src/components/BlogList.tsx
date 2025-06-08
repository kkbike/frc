import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { getAllPosts } from "@/lib/post";

export default function BlogList({ type }: { type: string }) {
  const locale = useLocale();
  const t = useTranslations("base");
  const posts = getAllPosts(`posts/${type}/${locale}`).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <section className="m-12 w-full max-w-(--breakpoint-lg) space-y-6">
      <h1 className="mb-6 text-2xl text-white">{t(type)}</h1>
      <div className="flex flex-col space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/${type}/${post.slug}`}
            className="flex items-start rounded-lg bg-white p-4 transition-colors duration-500 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-600"
          >
            {/* 左側的圖像或標記 */}
            <div className="mr-4 hidden h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100 md:block dark:bg-neutral-700">
              <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                <Icon
                  icon={`${post.metadata.icon || "mdi:alert-circle-outline"}`}
                  className="h-10 w-10"
                  aria-hidden="true"
                />
              </div>
            </div>
            {/* 右側內容 */}
            <div className="flex-1">
              <div className="mb-2 flex justify-between">
                <h2 className="text-lg font-semibold text-neutral-900 transition-colors dark:text-neutral-100">
                  {post.metadata.title}
                </h2>
                <p className="whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                  {post.metadata.publishedAt}
                </p>
              </div>
              <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                {post.metadata.description || "No description available"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
