"use client";

import React from "react";
import ProductCard from "../productlist/ProductCard";
import { ApiProduct, FALLBACK_PRODUCTS } from "@/lib/api";

interface RelatedItemsProps {
  currentProductId?: number;
  category?: string;
  products?: ApiProduct[];
}

const RelatedItems: React.FC<RelatedItemsProps> = ({
  currentProductId,
  category,
  products,
}) => {
  const allAvailable = products && products.length > 0 ? products : FALLBACK_PRODUCTS;

  // Filter items in the same category first (excluding currently viewed item)
  const sameCategory = allAvailable.filter(
    (p) =>
      p.id !== currentProductId &&
      (!category || p.category.toLowerCase() === category.toLowerCase())
  );

  // If fewer than 4 items in the same category, pad with other products
  let displayItems = [...sameCategory];
  if (displayItems.length < 4) {
    const others = allAvailable.filter(
      (p) => p.id !== currentProductId && !displayItems.some((item) => item.id === p.id)
    );
    displayItems = [...displayItems, ...others];
  }

  const finalItems = displayItems.slice(0, 4);

  return (
    <section className="flex flex-col mt-20 mb-16 max-w-[1170px] w-full mx-auto px-4">
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <h2 className="text-base font-semibold text-red-500">Related Item</h2>
      </div>

      <div className="flex flex-wrap gap-6 mt-10 justify-center sm:justify-between w-full">
        {finalItems.map((item, index) => {
          const discounts = ["-40%", "-35%", "-30%", "-25%"];
          const discount = discounts[index % discounts.length];
          const originalPrice = "$" + (item.price * 1.3).toFixed(2);

          return (
            <div key={item.id} className="flex justify-center">
              <ProductCard
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                originalPrice={originalPrice}
                discount={discount}
                rating={item.rating?.rate ?? 4.5}
                reviews={item.rating?.count ?? 50}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedItems;
