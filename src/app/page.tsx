import React from "react";
import HeroSection from "@/components/homepages/HeroSection";
import FlashSaleSection from "@/components/homepages/FlashSaleSection";
import CategorySection from "@/components/homepages/CategorySection";
import TopRatedProducts from "@/components/homepages/TopRatedProducts";
import NewArrivalSection from "@/components/homepages/NewArrivalSection";
import ServiceFeatures from "@/components/homepages/ServiceFeatures";
import Image from "next/image";
import type { Metadata } from "next";
import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "SnapShop | Premium E-Commerce Experience",
  description: "Shop the best deals on electronics, fashion, and lifestyle essentials at SnapShop.",
};

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="flex overflow-hidden flex-col bg-white relative pb-16">
      <HeroSection />
      <FlashSaleSection products={products} />
      <CategorySection />
      <TopRatedProducts products={products} />
      
      {/* Featured Banner */}
      <div className="flex justify-center mt-24 px-4 w-full max-w-[1170px] mx-auto">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df6ac03ddfea8c230a9930e390a638ce1ab1abb6377bcd7761859019e109c730?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          alt="Featured product banner"
          width={1170}
          height={500}
          priority
        />
      </div>

      <NewArrivalSection />
      <ServiceFeatures />
    </main>
  );
}
