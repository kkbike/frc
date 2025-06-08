import { use } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/CustomMDX";
import { baseUrl } from "@/app/sitemap";
import { useLocale } from "next-intl";
import { getAllPosts } from "@/lib/post";

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const params = await props.params;
  const post = getAllPosts(`posts/about/${params.locale}`).find(
    (post) => post.slug === params.slug,
  );

  if (!post) return notFound();

  return {
    title: post.metadata.title,
    description: post.metadata.description || "No description",
    openGraph: {
      url: `/${params.locale}/about/${post.slug}`,
      images: `/og?title=${encodeURIComponent(post.metadata.title)}`,
      type: "article",
      publishedTime: post.metadata.publishedAt,
    },
  };
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const locale = useLocale();
  const post = getAllPosts(`posts/about/${locale}`).find(
    (post) => post.slug === params.slug,
  );

  if (!post) return notFound();

  return (
    <div className="m-4 min-h-screen max-w-prose bg-slate-50 p-4 antialiased lg:mx-auto">
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.description,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/tw/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "FRC Taiwan",
              },
            }),
          }}
        />
        <h1 className="title text-2xl font-semibold tracking-tighter text-black">
          {post.metadata.title}
        </h1>
        <div className="mb-8 mt-2 flex items-center justify-between text-sm">
          <p className="text-sm text-black">{post.metadata.publishedAt}</p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </div>
  );
}
