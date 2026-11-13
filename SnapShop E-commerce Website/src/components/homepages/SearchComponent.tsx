"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchComponent: React.FC = () => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsSearchbarOpen((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchbarOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchbarOpen(false);
      }
    };

    if (isSearchbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchbarOpen]);

  return (
    <div ref={searchRef} className="relative flex items-center">
      {isSearchbarOpen ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center py-1.5 px-3 rounded-full bg-neutral-100 border border-gray-300 w-44 sm:w-64 md:w-72 max-w-[calc(100vw-130px)] transition-all duration-200 shadow-sm"
        >
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs sm:text-sm text-gray-800 placeholder-gray-400"
            autoFocus
          />
          <button type="submit" aria-label="Submit search" className="shrink-0 p-1 hover:opacity-80">
            <div className="relative w-4 h-4 sm:w-5 sm:h-5">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                alt="Search"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
          </button>
        </form>
      ) : (
        <button
          onClick={handleToggle}
          className="p-1 hover:opacity-80 transition-opacity flex items-center"
          type="button"
          aria-label="Toggle search bar"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              alt="Search icon"
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
