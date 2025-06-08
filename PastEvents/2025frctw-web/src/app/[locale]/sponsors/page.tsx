import { useTranslations } from "next-intl";
import sponsors from "../../../../config/sponsors.json";
import Image from "next/image";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "贊助單位",
    description: "這裡是贊助單位的頁面，感謝他們為比賽做出的貢獻",
    openGraph: {
      url: `/${params.locale}/sponsors`,
      images: "/og?title=贊助單位",
      type: "website",
    },
  };
}

export default function Page() {
  const t = useTranslations("base");

  return (
    <div className="mx-auto min-h-screen max-w-4xl p-6">
      <h1 className="mb-6 text-3xl text-white">{t("sponsors")}</h1>
      <SponsorGrid
        sponsors={sponsors.platinum}
        typeName="鉑金贊助"
        gridClass="grid-cols-1 gap-4 md:grid-cols-2 m-4"
        imgClass="h-48 w-auto object-contain"
      />
      <SponsorGrid
        sponsors={sponsors.gold}
        typeName="金級贊助"
        gridClass="grid-cols-1 gap-4 md:grid-cols-2 m-4"
        imgClass="h-48 w-auto object-contain"
      />
      <SponsorGrid
        sponsors={sponsors.product}
        typeName="官方物資贊助"
        gridClass="grid-cols-1 gap-4 md:grid-cols-4 m-4"
        imgClass="h-32 w-auto object-contain"
      />
      <SponsorGrid
        sponsors={sponsors.event}
        typeName="活動支援夥伴"
        gridClass="grid-cols-1 gap-4 md:grid-cols-4 m-4"
        imgClass="h-16 w-auto object-contain"
      />
      <SponsorGrid
        sponsors={sponsors.supporting}
        typeName="友情贊助商"
        gridClass="grid-cols-1 gap-4 md:grid-cols-4 m-4"
        imgClass="h-16 w-auto object-contain"
      />
    </div>
  );
}

interface SponsorGridProps {
  sponsors: {
    link: string;
    logo: string;
    name: string;
  }[];
  typeName: string;
  gridClass: string;
  imgClass: string;
}

function SponsorGrid({
  sponsors,
  typeName,
  gridClass,
  imgClass,
}: SponsorGridProps) {
  return (
    <>
      {sponsors.length != 0 && (
        <span className="mt-8 text-3xl text-white">{typeName}</span>
      )}
      <div className={`grid ${gridClass}`}>
        {sponsors.map((sponsor, index) => {
          return (
            <a
              href={sponsor.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border bg-white p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={512}
                height={512}
                className={imgClass}
              />
              <h2 className="text-center text-black text-xl font-semibold">
                {sponsor.name}
              </h2>
            </a>
          );
        })}
      </div>
    </>
  );
}
