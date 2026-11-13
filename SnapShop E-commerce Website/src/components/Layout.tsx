"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Layout: React.FC = () => {
  return (
    <header className="w-full bg-black text-neutral-50 py-2.5 px-4 text-xs">
      <div className="max-w-[1170px] w-full mx-auto flex flex-col sm:flex-row gap-2 items-center justify-between text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="text-gray-200">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            href="/product"
            className="font-bold underline text-white hover:text-red-400 transition-colors"
          >
            Shop Now
          </Link>
        </div>

        <div className="hidden sm:flex gap-1.5 items-center cursor-pointer text-gray-300 hover:text-white transition-colors">
          <span>English</span>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c458026ddcb4daaaca9291897ab1b8ab8e65bd1233e48db8bbc95eb90ee3e16?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
            className="object-contain"
            alt="Language selector"
            width={16}
            height={16}
          />
        </div>
      </div>
    </header>
  );
};

export default Layout;
