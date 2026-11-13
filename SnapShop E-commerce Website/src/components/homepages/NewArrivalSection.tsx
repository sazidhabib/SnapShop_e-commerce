import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewArrivalSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-28 max-w-[1170px] w-full mx-auto px-4">
      <div className="flex flex-col self-start">
        <div className="flex gap-4 items-center self-start">
          <div className="h-10 bg-red-500 rounded w-5" />
          <h2 className="text-sm font-semibold text-red-500">
            Featured
          </h2>
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-black">
          New Arrival
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full">
        {/* PS5 Featured Box */}
        <div className="relative overflow-hidden bg-black rounded-lg min-h-[460px] p-8 flex flex-col justify-end">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/257c68e85d4ec211145a399b858c738793ae6303cc07c44213626b752e7a758b?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
            alt="PlayStation 5"
            fill
            sizes="(max-width: 1024px) 100vw, 570px"
            className="object-cover"
          />
          <div className="relative z-10 text-white max-w-xs">
            <h4 className="text-2xl font-bold">PlayStation 5</h4>
            <p className="mt-2 text-xs text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href="/product"
              className="inline-block mt-4 text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right 3-box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Women Collections */}
          <div className="sm:col-span-2 relative overflow-hidden bg-neutral-950 rounded-lg min-h-[220px] p-6 flex flex-col justify-end">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b674d8f28601fdf2204e3778d077b479839f481c73ef779cd6a3e8ad34a517e?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              alt="Women's Collections"
              fill
              sizes="(max-width: 1024px) 100vw, 570px"
              className="object-cover"
            />
            <div className="relative z-10 text-white max-w-xs">
              <h4 className="text-xl font-bold">Women&apos;s Collections</h4>
              <p className="mt-1 text-xs text-gray-300">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href="/product"
                className="inline-block mt-2 text-xs font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Speakers */}
          <div className="relative overflow-hidden bg-neutral-900 rounded-lg min-h-[200px] p-4 flex flex-col justify-end">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16dde121b17351442b2a0c030d0bf38473187951e42801cd7ab240919bb600a7?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              alt="Speakers"
              fill
              sizes="270px"
              className="object-contain p-4"
            />
            <div className="relative z-10 text-white">
              <h4 className="text-base font-bold">Speakers</h4>
              <Link
                href="/product"
                className="inline-block mt-1 text-xs font-semibold underline hover:text-gray-300"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Perfume */}
          <div className="relative overflow-hidden bg-neutral-900 rounded-lg min-h-[200px] p-4 flex flex-col justify-end">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8dd2255c7c4f3d308e86cd70c570db08a89b1a05cd520223105648ebc43962d?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              alt="Perfume"
              fill
              sizes="270px"
              className="object-contain p-4"
            />
            <div className="relative z-10 text-white">
              <h4 className="text-base font-bold">Perfume</h4>
              <Link
                href="/product"
                className="inline-block mt-1 text-xs font-semibold underline hover:text-gray-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
