"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "@/components/productlist/ProductCard";
import { ApiProduct } from "@/lib/api";

interface ProductCatalogProps {
  initialProducts: ApiProduct[];
  categories: string[];
  initialQuery?: string;
  initialCategory?: string;
}

export default function ProductCatalog({
  initialProducts,
  categories,
  initialQuery = "",
  initialCategory = "all",
}: ProductCatalogProps) {
  const [search, setSearch] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSearch(initialQuery);
  }, [initialQuery]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((p) => {
        const matchesCategory =
          selectedCategory === "all" || p.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch =
          !search.trim() ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0);
        return a.id - b.id;
      });
  }, [initialProducts, selectedCategory, search, sortBy]);

  return (
    <div className="flex flex-col w-full max-w-[1170px] mx-auto px-4 mt-12 mb-20">
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">Explore All Products</h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {filteredProducts.length} of {initialProducts.length} products
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-black capitalize"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          {/* Quick Filter Input */}
          <input
            type="text"
            placeholder="Search in results..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black min-w-[200px]"
          />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8 justify-items-center">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              rating={p.rating?.rate}
              reviews={p.rating?.count}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-gray-900">No products found</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">
            We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
            }}
            className="mt-6 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
