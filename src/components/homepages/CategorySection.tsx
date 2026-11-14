"use client";

import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CategorySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    {
      name: "Phones",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5187a36507b8a7ad2f6b5e7570c9e17e5d24e737c7b947dde402c06a70fd19cf?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    },
    {
      name: "Computers",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4549bf9b8f26b56068f6eaaf9d4b711a1eea8143c3ee4266273c68f36575006?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    },
    {
      name: "SmartWatch",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7865315e423277f0faf29a4afb376e1d7966765a444b18e541dbe679ce438aec?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    },
    {
      name: "Camera",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6803d2698e4366024f351678a4ebb9f3df31528578f8560b471da9ecf0d1a58?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      active: true,
    },
    {
      name: "HeadPhones",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53da0cff2ed9a288cca85554827621e4d2595c143d5fc57aedfefc1f8294fff2?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    },
    {
      name: "Gaming",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52dc4e07ff4a2d672265fef1bbff73f55b4601fdd54bd52795955d2255f4fffc?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    },
  ];

  return (
    <section className="flex flex-col mt-16 md:mt-24 w-full max-w-[1170px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-9 sm:w-5 sm:h-10 bg-red-500 rounded"></div>
            <h2 className="text-sm sm:text-base font-semibold text-red-500">Categories</h2>
          </div>
          <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
            Browse By Category
          </h3>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <button
            aria-label="Previous category"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center transition-all focus:outline-none"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next category"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center transition-all focus:outline-none"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-3.5 sm:gap-6 mt-8 sm:mt-10 w-full pb-2"
      >
        {categories.map((category, index) => (
          <div key={index} className="shrink-0">
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
