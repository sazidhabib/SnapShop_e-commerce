"use client";

import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { FALLBACK_PRODUCTS, ApiProduct } from "@/lib/api";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  ratingRate: number;
  ratingCount: number;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProductHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Could not fetch remote products");
      }

      const data = await response.json();
      const transformedProduct: Product[] = data.map((p: any) => ({
        id: p.id,
        image: p.image,
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        ratingRate: p.rating?.rate ?? 4.5,
        ratingCount: p.rating?.count ?? 50,
      }));
      setProducts(transformedProduct);
    } catch (err) {
      console.warn("Using verified fallback products catalog:", err);
      const transformedFallback: Product[] = FALLBACK_PRODUCTS.map((p: ApiProduct) => ({
        id: p.id,
        image: p.image,
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        ratingRate: p.rating?.rate ?? 4.5,
        ratingCount: p.rating?.count ?? 80,
      }));
      setProducts(transformedFallback);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductHandler();
  }, [fetchProductHandler]);

  return (
    <div className="flex overflow-hidden flex-col bg-white pb-20">
      <main className="flex flex-col w-full max-w-[1170px] mx-auto px-4 mt-8 md:mt-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Shop Now</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Explore Our Products
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Browse top picks across electronics, fashion, jewelery, and daily essentials.
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
            {products.length} Products
          </span>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 my-10 justify-items-center w-full">
            {products.map((item) => (
              <div key={item.id} className="w-full flex justify-center">
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.ratingRate}
                  reviews={item.ratingCount}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-500">
            <p className="text-lg font-medium">No products available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;
