"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import RatingBar from "../productlist/RatingBar";
import { GlobalContext } from "../../context/GlobalContext";
import LoginPromptModal from "../LoginPromptModal";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export interface ProductDetailItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ProductInfoProps {
  product: ProductDetailItem;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState<"blue" | "red">("blue");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const {
    addToCart = () => {},
    addToWishlist = () => {},
    wishlist = [],
    isLogin = false,
  } = useContext(GlobalContext) ?? {};

  const { id, title, price, description, image, rating, category } = product;
  const isWishlisted = wishlist.some((item) => item.id === id);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (!isLogin) {
      setShowLoginModal(true);
      return;
    }
    addToCart({
      id,
      title,
      price,
      image,
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleWishlistToggle = () => {
    if (!isLogin) {
      setShowLoginModal(true);
      return;
    }
    if (!isWishlisted) {
      addToWishlist({
        id,
        title,
        price,
        image,
      });
    }
  };

  return (
    <>
      {showLoginModal && <LoginPromptModal onClose={() => setShowLoginModal(false)} />}
      <div className="flex flex-col self-center mt-12 w-full max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/product" className="hover:text-black transition-colors capitalize">
            {category || "Products"}
          </Link>
          <span>/</span>
          <span className="text-black font-medium line-clamp-1 max-w-[300px]">{title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Product Image Gallery */}
          <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 bg-neutral-100 rounded-lg p-2 border border-gray-200 shrink-0 cursor-pointer hover:border-black transition-colors"
                >
                  <Image
                    src={image}
                    alt={`${title} thumbnail ${idx + 1}`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>

            <div className="relative flex-1 bg-neutral-100 rounded-lg min-h-[380px] sm:min-h-[480px] p-8 flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[400px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Details & Purchase Controls */}
          <div className="md:col-span-5 flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
              {title}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-sm">
              {rating && (
                <div className="flex items-center gap-2">
                  <RatingBar rating={rating.rate} />
                  <span className="text-gray-500 text-xs">({rating.count} Reviews)</span>
                </div>
              )}
              <span className="text-gray-300">|</span>
              <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-0.5 rounded">
                In Stock
              </span>
            </div>

            <div className="mt-4 text-3xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="my-6 border-t border-gray-200" />

            {/* Color Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900">Colours:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedColor("blue")}
                  className={`w-6 h-6 rounded-full bg-blue-500 ring-offset-2 transition-all ${
                    selectedColor === "blue" ? "ring-2 ring-black scale-110" : ""
                  }`}
                  aria-label="Select blue color"
                />
                <button
                  type="button"
                  onClick={() => setSelectedColor("red")}
                  className={`w-6 h-6 rounded-full bg-red-500 ring-offset-2 transition-all ${
                    selectedColor === "red" ? "ring-2 ring-black scale-110" : ""
                  }`}
                  aria-label="Select red color"
                />
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm font-semibold text-gray-900">Size:</span>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-9 rounded-md text-xs font-semibold flex items-center justify-center border transition-all ${
                      selectedSize === size
                        ? "bg-red-500 text-white border-red-500 shadow-sm"
                        : "border-gray-300 text-gray-800 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button
                  type="button"
                  onClick={decrementQuantity}
                  className="px-3.5 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={incrementQuantity}
                  className="px-3.5 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 min-w-[140px] px-6 py-2.5 bg-red-500 text-white font-semibold text-sm rounded-md hover:bg-red-600 transition-colors shadow-sm"
              >
                Add to Cart
              </button>

              <button
                type="button"
                onClick={handleWishlistToggle}
                className="p-2.5 border border-gray-300 rounded-md hover:border-red-500 hover:text-red-500 transition-colors"
                aria-label="Toggle wishlist"
              >
                {isWishlisted ? (
                  <MdFavorite className="text-2xl text-red-500" />
                ) : (
                  <MdFavoriteBorder className="text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {addedNotice && (
              <div className="mt-3 p-2 bg-green-50 text-green-700 border border-green-200 rounded text-xs text-center font-medium animate-in fade-in">
                ✓ Added to cart successfully!
              </div>
            )}

            {/* Service & Delivery Info Box */}
            <div className="mt-8 border border-gray-300 rounded-lg divide-y divide-gray-200">
              <div className="flex items-center gap-4 p-4">
                <div className="text-2xl text-gray-800">🚚</div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Free Delivery</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Enter your postal code for delivery availability.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="text-2xl text-gray-800">🔄</div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Return Delivery</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Free 30 Days Delivery Returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
