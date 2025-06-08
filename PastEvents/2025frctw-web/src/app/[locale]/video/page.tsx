import VideoList from "@/components/VideoList";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "影片競賽即時排名",
    description: "這裡是影片競賽統計的頁面，記錄各校影片狀況",
    openGraph: {
      url: `/${params.locale}/video`,
      images: "/og?title=影片競賽即時排名",
      type: "website",
    },
  };
}

export default function Page() {
  return <VideoList />;
}
