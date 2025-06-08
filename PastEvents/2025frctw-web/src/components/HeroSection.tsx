"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useLocale } from "next-intl";
import Link from "next/link";

const animationSequence = ["New Taipei City", 1000, "Taiwan", 1000];

export default function HeroSection() {
  const locale = useLocale();
  return (
    <div className="grid grid-cols-1 bg-[url('/background/bg1.jpg')] bg-center p-4 sm:grid-cols-12 md:min-h-screen">
      <div className="col-span-8 w-full place-self-center text-center">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-100 md:h-72 md:text-5xl lg:text-8xl lg:leading-normal">
          <span className="text-4xl md:text-6xl lg:text-8xl">FRC 2025 </span>
          <br></br>
          <TypeAnimation
            sequence={animationSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        {/* CTA 按鈕區塊 */}
        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
          <Link href={`/${locale}/news`}>
            <span className="rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-3 text-xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-blue-500">
              最新公告
            </span>
          </Link>
          <Link href={`/${locale}/video`}>
            <span className="rounded-xl bg-linear-to-r from-red-500 to-pink-600 px-6 py-3 text-xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-red-500">
              影片競賽
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-4 mt-4 place-self-center lg:mt-0">
        <div className="relative h-[250px] w-[250px] rounded-full bg-white lg:h-[400px] lg:w-[400px]">
          <Image
            src="/logo.png"
            alt="FRC Taiwan Logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
