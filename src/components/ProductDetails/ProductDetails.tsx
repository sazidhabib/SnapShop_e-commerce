"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductInfo, { ProductDetailItem } from "./ProductInfo";
import RelatedItems from "./RelatedItems";

const ProductDetails: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<ProductDetailItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <ProductInfo product={product} />
      <RelatedItems
        currentProductId={product.id}
        category={product.category}
      />
    </div>
  );
};

export default ProductDetails;
