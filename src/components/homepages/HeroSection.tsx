"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface HeroSlide {
  id: number;
  brand: string;
  brandIcon?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
  bgGradient: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    { label: "Woman's Fashion", href: "/product?category=women's%20clothing", hasArrow: true },
    { label: "Men's Fashion", href: "/product?category=men's%20clothing", hasArrow: true },
    { label: "Electronics", href: "/product?category=electronics", hasArrow: false },
    { label: "Jewelry & Luxury", href: "/product?category=jewelery", hasArrow: false },
    { label: "Bags & Backpacks", href: "/product?q=backpack", hasArrow: false },
    { label: "Casual & Sportswear", href: "/product?q=casual", hasArrow: false },
    { label: "Jackets & Outerwear", href: "/product?q=jacket", hasArrow: false },
    { label: "Gaming & Storage", href: "/product?q=ssd", hasArrow: false },
  ];

  const slides: HeroSlide[] = [
    {
      id: 1,
      brand: "iPhone 14 Series",
      brandIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/772cdd422d5a0b6b8b1c31e773a46607fc2b11be93b509419d37c3091dc8a920?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      title: "Up to 10% off Voucher",
      subtitle: "Experience next-generation performance and sleek titanium design.",
      ctaText: "Shop Now",
      ctaLink: "/product?category=electronics",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a0ad3dc472dc513c9563b3a674837965896bb7a86d13e583e04f974a1dff669d?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      imageAlt: "iPhone 14 Pro",
      bgGradient: "from-black via-zinc-950 to-neutral-900",
    },
    {
      id: 2,
      brand: "PlayStation 5",
      title: "Next-Gen Gaming Console",
      subtitle: "Ultra-high speed SSD and stunning ray tracing for immersive play.",
      ctaText: "Shop Gaming",
      ctaLink: "/product?q=gaming",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/257c68e85d4ec211145a399b858c738793ae6303cc07c44213626b752e7a758b?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      imageAlt: "PlayStation 5 Console",
      bgGradient: "from-neutral-950 via-zinc-900 to-black",
    },
    {
      id: 3,
      brand: "Women's Collection",
      title: "Up to 50% Off Top Styles",
      subtitle: "Curated dresses, seasonal outfits and elevated modern essentials.",
      ctaText: "Explore Fashion",
      ctaLink: "/product?category=women's%20clothing",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1b674d8f28601fdf2204e3778d077b479839f481c73ef779cd6a3e8ad34a517e?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      imageAlt: "Women's Fashion Collection",
      bgGradient: "from-zinc-950 via-stone-900 to-neutral-900",
    },
    {
      id: 4,
      brand: "Smart Audio",
      title: "Next-Gen Sound Experience",
      subtitle: "High-fidelity wireless acoustics with deep bass and crystal clarity.",
      ctaText: "Upgrade Audio",
      ctaLink: "/product?category=electronics",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/16dde121b17351442b2a0c030d0bf38473187951e42801cd7ab240919bb600a7?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      imageAlt: "Smart Sound Speakers",
      bgGradient: "from-black via-gray-950 to-neutral-900",
    },
  ];

  // Auto-slide every 5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="flex flex-col items-center w-full max-w-[1170px] mx-auto px-4">
      <div className="w-full">
        <div className="flex gap-8 max-md:flex-col">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden md:flex flex-col w-[220px] shrink-0 border-r border-gray-200 pr-6 pt-10">
            <ul className="flex flex-col space-y-3.5 text-sm text-gray-800 font-medium">
              {categories.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-red-500 transition-colors flex justify-between items-center group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.label}
                    </span>
                    {item.hasArrow && <span className="text-gray-400 text-xs">›</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Hero Slider Banner */}
          <main className="flex-1 pt-4 md:pt-10 relative w-full">
            <div
              className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${activeSlide.bgGradient} text-white p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[340px] sm:min-h-[380px] shadow-sm transition-all duration-500`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left / Right Arrow Buttons */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none"
              >
                <FiChevronLeft className="text-lg sm:text-xl" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none"
              >
                <FiChevronRight className="text-lg sm:text-xl" />
              </button>

              {/* Slide Content */}
              <div className="flex flex-col items-start z-10 max-w-sm px-2 sm:px-0">
                <div className="flex gap-2.5 items-center">
                  {activeSlide.brandIcon && (
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                      <Image
                        src={activeSlide.brandIcon}
                        alt="Brand logo"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300">
                    {activeSlide.brand}
                  </span>
                </div>

                <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  {activeSlide.title}
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-gray-400 line-clamp-2">
                  {activeSlide.subtitle}
                </p>

                <Link
                  href={activeSlide.ctaLink}
                  className="inline-flex items-center gap-2 mt-5 sm:mt-6 text-xs sm:text-sm font-semibold underline underline-offset-8 hover:text-red-400 transition-colors"
                >
                  <span>{activeSlide.ctaText}</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Slide Image */}
              <div className="relative w-full md:w-[320px] lg:w-[360px] h-[170px] sm:h-[230px] md:h-[260px] mt-4 md:mt-0 flex items-center justify-center">
                <Image
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-contain transition-all duration-500 p-2"
                />
              </div>

              {/* Clickable Pagination Indicator Dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      i === currentSlide
                        ? "w-6 bg-red-500 shadow-sm"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
