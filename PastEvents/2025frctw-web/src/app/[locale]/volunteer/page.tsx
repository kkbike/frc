import BlogList from "@/components/BlogList";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "影片競賽 Robot in 5 weeks",
    description: "影片競賽 Robot in 5 weeks",
    openGraph: {
      url: `/${params.locale}/volunteer`,
      images: "/og?title=影片競賽",
      type: "website",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-4 flex w-full flex-col items-center">
        <BlogList type={"volunteer"} />
      </div>
    </div>
  );
}
