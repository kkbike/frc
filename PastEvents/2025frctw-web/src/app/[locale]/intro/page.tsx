import Image from "next/image";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "FRC介紹",
    description: "快速認識FRC的活動內容",
    openGraph: {
      url: `/${params.locale}/intro`,
      images: "/og?title=FRC介紹",
      type: "website",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image
              className="object-cover transition-transform duration-300 hover:scale-105"
              src={`/intro/${index + 1}.jpg`}
              alt={`Intro ${index + 1}`}
              height={512}
              width={512}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
