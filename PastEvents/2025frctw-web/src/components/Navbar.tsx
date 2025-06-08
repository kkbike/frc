"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("base");

  const handleLocaleSwitch = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    window.location.href = `/${newLocale}`;
  };

  const navigation = [
    { name: t("news"), href: `/${locale}/news` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("calendar"), href: `/${locale}/calendar` },
    { name: t("sponsors"), href: `/${locale}/sponsors` },
    { name: t("volunteer"), href: `/${locale}/volunteer` },
    { name: t("intro"), href: `/${locale}/intro` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <nav className="sticky left-0 right-0 top-0 z-1000 select-none bg-[#EAC100] shadow-md">
      <div className="mx-auto px-4 lg:px-24">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex flex-row items-center space-x-4">
                <Image
                  className="h-10 w-auto cursor-pointer"
                  src="/logo.png"
                  alt="logo"
                  width={64}
                  height={64}
                  priority
                />
                <span className="w-52 text-xl font-semibold text-black">
                  FRC{" "}
                  <TypeAnimation
                    sequence={["Taiwan", 3000, "New Taipei City", 3000]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden items-center lg:flex lg:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
                  {item.name}
                </span>
              </Link>
            ))}
            <button
              onClick={handleLocaleSwitch}
              className="rounded-md bg-gray-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-400"
            >
              {locale === "en" ? "中文" : "English"}
            </button>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <Icon icon="mdi:close" className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Icon icon="mdi:menu" className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="text-center lg:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span
                  className="block cursor-pointer border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <button
              onClick={() => {
                handleLocaleSwitch();
                setMobileMenuOpen(false);
              }}
              className="block w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50"
            >
              {locale === "en" ? "中文" : "English"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
