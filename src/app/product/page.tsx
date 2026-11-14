import React from "react";
import { getProducts, getCategories } from "@/lib/api";
import ProductCatalog from "@/features/products/ProductCatalog";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products & Shop | SnapShop",
  description: "Browse our high-quality collection of electronics, jewelry, men's and women's clothing at SnapShop.",
};

interface ProductPageProps {
  searchParams: {
    q?: string;
    category?: string;
  };
}

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <ProductCatalog
        initialProducts={products}
        categories={categories}
        initialQuery={searchParams.q || ""}
        initialCategory={searchParams.category || "all"}
      />
    </main>
  );
}
