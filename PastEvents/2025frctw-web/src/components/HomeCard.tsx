import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function HomeCard() {
  const t = useTranslations("home");
  const locale = useLocale();
  const cards = [
    {
      href: "/news",
      icon: "/icons/news.png",
      title: t("card1title"),
      description: t("card1describe"),
    },
    {
      href: "/about",
      icon: "/icons/about.png",
      title: t("card2title"),
      description: t("card2describe"),
    },
    {
      href: "/volunteer",
      icon: "/icons/volunteer.png",
      title: t("card3title"),
      description: t("card3describe"),
    },
    {
      href: "/intro",
      icon: "/icons/frc.png",
      title: t("card4title"),
      description: t("card4describe"),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 bg-[#092d50] p-8 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Link key={index} href={`${locale}/${card.href}`}>
          <span className="flex h-full flex-col items-center rounded-lg bg-linear-to-b from-[#52be9c] to-[#217e96] p-6 text-center transition-transform duration-300 hover:scale-105">
            <Image src={card.icon} alt={card.title} width={64} height={64} />
            <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
            <span className="text-gray-100">{card.description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
