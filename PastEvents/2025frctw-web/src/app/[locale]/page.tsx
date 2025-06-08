import HeroSection from "@/components/HeroSection";
import Video from "@/components/Video";
import HomeCard from "@/components/HomeCard";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "FRC Taiwan",
    description: "FRC Taiwan 賽區網站",
    openGraph: {
      url: `/${params.locale}`,
      images: "/og?title=FRC Taiwan",
      type: "website",
    },
  };
}

export default function Page() {
  return (
    <div className="mx-auto bg-[#071822]">
      <div>
        <HeroSection />
      </div>
      <div className="max-w">
        <Video />
      </div>
      <HomeCard />
    </div>
  );
}
