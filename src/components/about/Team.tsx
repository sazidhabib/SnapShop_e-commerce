"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import TeamMember, { TeamMemberProps } from "./TeamMember";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const teamMembers: TeamMemberProps[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c2581c3f449bb61077d555f71b6e7dc3282deba44706a0ea087c6585879ae?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    name: "Tom Cruise",
    role: "Founder & Chairman",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b8857412b43ee5b030a6b8f3bef2b6c1563b7b65906986470fc38837f9e0b89?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    name: "Emma Watson",
    role: "Managing Director",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c431045861034878ee2dab9b00cd043db6c3d2110da911a3ef68c4c6fc4eda8b?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
    name: "Will Smith",
    role: "Product Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    name: "Sophia Rodriguez",
    role: "VP of Global Marketing",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    name: "Michael Chen",
    role: "Chief Technology Officer",
  },
];

const Team: React.FC = () => {
  // Default to index 2 (Will Smith / 3rd member) or 0
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalMembers = teamMembers.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  }, [totalMembers]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);

  // Autoplay (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // We duplicate the list to allow smooth continuous slide wrapping
  const extendedMembers = [...teamMembers, ...teamMembers];

  return (
    <section
      aria-label="Leadership Team"
      className="w-full max-w-[1170px] mx-auto px-4 mt-24 md:mt-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header with Navigation Chevrons */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <div>
          <span className="text-sm font-semibold text-[#DB4444] uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight mt-1">
            Leadership & Creators
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous team slide"
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 active:scale-95 text-black flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DB4444]"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next team slide"
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 active:scale-95 text-black flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DB4444]"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {extendedMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-10 md:mt-12">
        {teamMembers.map((member, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${member.name}`}
              className="relative flex items-center justify-center p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DB4444] rounded-full"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-3.5 h-3.5 bg-[#DB4444] ring-2 ring-[#DB4444] ring-offset-2 scale-110"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
