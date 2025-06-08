import { useTranslations } from "next-intl";
import Link from "next/link";
import pkg from "../../package.json";

export default function Footer() {
  const t = useTranslations("base");

  return (
    <footer className="bg-[#003E3E] py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center lg:flex-row lg:justify-around lg:space-y-0 lg:text-left">
          <span className="text-sm md:text-base">
            {t("version")}
            {pkg.version}
          </span>
          <span className="text-sm md:text-base">
            <Link href="https://www.codecat.tw/" target="_blank">
              <span className="mx-1 hover:underline">
                CodeCat 程式貓科技教育社群
              </span>
            </Link>
            、
            <Link href="https://www.kuang-ti.com" target="_blank">
              <span className="mx-1 hover:underline">YD 楊光地</span>
            </Link>
            、
            <Link href="https://frc.codecat.tw/" target="_blank">
              <span className="mx-1 hover:underline">FRC8569 中和高中</span>
            </Link>
            {t("develop")}
          </span>
        </div>
      </div>
    </footer>
  );
}
