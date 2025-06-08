import BlogList from "@/components/BlogList";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "關於我們",
    description: "這裡是關於我們的頁面，提供相關的關於我們。",
    openGraph: {
      url: `/${params.locale}/about`,
      images: "/og?title=關於我們",
      type: "website",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-4 flex w-full flex-col items-center">
        <BlogList type={"about"} />
      </div>
    </div>
  );
}
