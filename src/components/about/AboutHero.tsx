import React from "react";
import Link from "next/link";

const AboutHero: React.FC = () => {
  return (
    <section className="flex flex-col items-start mt-10 md:mt-14 w-full max-w-[1170px] mx-auto px-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8 md:mb-12">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-black font-medium">About</span>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14 w-full">
        {/* Text Column */}
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black tracking-tight">
            Our Story
          </h1>
          <div className="mt-7 text-base leading-relaxed text-gray-700 space-y-5">
            <p>
              Launched in 2015, SnapShop is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, SnapShop has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              SnapShop has more than 1 million products to offer and is growing
              rapidly. SnapShop offers a diverse assortment across categories
              ranging from consumer electronics to fashion, lifestyle, and home essentials.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d91fe816b0043439606098c814ae8037a347c975735484665286064564d80407?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              alt="About SnapShop illustration"
              className="object-cover w-full h-auto aspect-[1.1] md:aspect-[1.15]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
