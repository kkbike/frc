import BlogList from "@/components/BlogList";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "最新公告",
    description: "這裡是最新公告的頁面，提供相關的最新公告。",
    openGraph: {
      url: `/${params.locale}/news`,
      images: "/og?title=最新公告",
      type: "website",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-4 flex w-full flex-col items-center">
        <BlogList type={"news"} />
      </div>
    </div>
  );
}
