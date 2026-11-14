import React from "react";
import ProductCard from "../productlist/ProductCard";
import Link from "next/link";
import { ApiProduct, FALLBACK_PRODUCTS } from "@/lib/api";

interface TopRatedProductsProps {
  products?: ApiProduct[];
}

const TopRatedProducts: React.FC<TopRatedProductsProps> = ({ products }) => {
  const rawProducts = products && products.length > 0 ? products : FALLBACK_PRODUCTS;

  // Sort descending by rating score and take top 4
  const topRated = [...rawProducts]
    .sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0))
    .slice(0, 4);

  return (
    <section className="flex flex-col mt-16 md:mt-24 w-full max-w-[1170px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="w-4 h-9 sm:w-5 sm:h-10 bg-red-500 rounded"></div>
            <h2 className="text-sm sm:text-base font-semibold text-red-500">
              This Month
            </h2>
          </div>
          <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
            Top Rated Products
          </h3>
        </div>
        <Link
          href="/product"
          className="self-start sm:self-auto px-6 sm:px-10 py-2.5 sm:py-3.5 bg-red-500 text-white font-medium text-xs sm:text-sm rounded-lg hover:bg-red-600 transition-colors shadow-sm"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12 w-full justify-items-center">
        {topRated.map((product) => {
          const originalPrice = "$" + (product.price * 1.25).toFixed(2);
          return (
            <div key={product.id} className="w-full flex justify-center">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={originalPrice}
                rating={product.rating?.rate ?? 5}
                reviews={product.rating?.count ?? 80}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopRatedProducts;
