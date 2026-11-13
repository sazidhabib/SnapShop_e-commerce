"use client";

import React, { useRef, useState, useEffect } from "react";
import ProductCard from "../productlist/ProductCard";
import { ApiProduct, FALLBACK_PRODUCTS } from "@/lib/api";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface FlashSaleSectionProps {
  products?: ApiProduct[];
}

const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({ products }) => {
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

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const discounts = ["-40%", "-35%", "-30%", "-25%", "-20%"];
  const rawProducts = products && products.length > 0 ? products : FALLBACK_PRODUCTS;
  const flashSaleItems = rawProducts.slice(0, 8);

  return (
    <section className="flex flex-col mt-16 md:mt-28 w-full max-w-[1170px] mx-auto px-4">
      {/* Header with Title, Countdown & Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-14">
          <div className="flex flex-col">
            <div className="flex gap-2.5 items-center">
              <div className="h-9 w-4 sm:h-10 sm:w-5 bg-red-500 rounded"></div>
              <h2 className="text-sm sm:text-base font-semibold text-red-500">Today's</h2>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
              Flash Sales
            </h3>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 sm:gap-3 text-black">
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Days</span>
              <span className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {pad(timeLeft.days)}
              </span>
            </div>
            <span className="text-red-500 font-bold text-lg sm:text-2xl mt-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Hours</span>
              <span className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {pad(timeLeft.hours)}
              </span>
            </div>
            <span className="text-red-500 font-bold text-lg sm:text-2xl mt-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Minutes</span>
              <span className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {pad(timeLeft.minutes)}
              </span>
            </div>
            <span className="text-red-500 font-bold text-lg sm:text-2xl mt-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Seconds</span>
              <span className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5 text-red-500">
                {pad(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Chevrons */}
        <div className="flex gap-2 self-end sm:self-auto">
          <button
            aria-label="Previous flash sale product"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center transition-all focus:outline-none"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next flash sale product"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center transition-all focus:outline-none"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Product Scroller */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 mt-8 pb-4 w-full"
      >
        {flashSaleItems.map((product, index) => {
          const discount = discounts[index % discounts.length];
          const discountNum = Math.abs(parseInt(discount, 10));
          const originalPrice = "$" + (product.price / (1 - discountNum / 100)).toFixed(2);

          return (
            <div
              key={product.id}
              className="min-w-[220px] sm:min-w-[250px] md:min-w-[270px] shrink-0"
            >
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={originalPrice}
                discount={discount}
                rating={product.rating?.rate ?? 4}
                reviews={product.rating?.count ?? 50}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FlashSaleSection;
