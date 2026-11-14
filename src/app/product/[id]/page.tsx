import React from "react";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/lib/api";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import RelatedItems from "@/components/ProductDetails/RelatedItems";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return {
      title: "Product Not Found | SnapShop",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} | SnapShop`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const [product, allProducts] = await Promise.all([
    getProductById(params.id),
    getProducts(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      <ProductInfo product={product} />
      <RelatedItems
        currentProductId={product.id}
        category={product.category}
        products={allProducts}
      />
    </main>
  );
}
