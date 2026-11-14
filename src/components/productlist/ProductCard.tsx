"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import RatingBar from "./RatingBar";
import { GlobalContext } from "../../context/GlobalContext";
import LoginPromptModal from "../LoginPromptModal";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Image from "next/image";

export type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  isLoggedIn?: boolean;
  quantity?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  isNew,
  rating = 0,
  reviews = 0,
}) => {
  const {
    addToWishlist = () => {},
    wishlist = [],
    addToCart = () => {},
    cart = [],
    isLogin = false,
  } = useContext(GlobalContext) ?? {};

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  const existInWishlist = wishlist.some((product) => product.id === id);
  const existInCart = cart.some((product) => product.id === id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLogin) {
      if (!existInCart) {
        addToCart({ id, image: imgSrc || image, title, price, quantity: 1 });
      }
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!existInWishlist) {
      addToWishlist({ id, image: imgSrc || image, title, price });
    }
  };

  return (
    <>
      {showLoginPrompt && (
        <LoginPromptModal onClose={() => setShowLoginPrompt(false)} />
      )}
      <div className="group relative flex flex-col w-full max-w-[270px] rounded-lg transition-all duration-200 hover:-translate-y-1">
        <div className="relative overflow-hidden flex flex-col pt-3 w-full rounded-md bg-neutral-100 h-[250px] justify-between">
          <div className="flex justify-between items-start px-3 z-10 w-full">
            <div className="flex flex-col gap-1 text-xs">
              {discount && (
                <span className="px-2.5 py-1 bg-red-500 text-white font-medium rounded text-[11px]">
                  {discount}
                </span>
              )}
              {isNew && (
                <span className="px-2.5 py-1 bg-green-500 text-white font-medium rounded text-[11px]">
                  NEW
                </span>
              )}
            </div>

            <button
              aria-label="Add to wishlist"
              className="p-1.5 rounded-full bg-white text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors shadow-sm"
              onClick={handleWishlistToggle}
            >
              {existInWishlist ? (
                <MdFavorite className="text-xl text-red-500" />
              ) : (
                <MdFavoriteBorder className="text-xl" />
              )}
            </button>
          </div>

          <Link href={`/product/${id}`} className="relative block w-full h-[140px] px-4">
            <Image
              src={imgSrc || image || "https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt={title}
              fill
              sizes="240px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgSrc("https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg")}
            />
          </Link>

          <button
            className={`w-full py-2.5 text-xs font-medium flex items-center justify-center gap-2 transition-colors ${
              existInCart
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-black text-white hover:bg-red-500"
            }`}
            aria-label="Add to Cart"
            onClick={handleAddToCart}
          >
            <span>{existInCart ? "Added to Cart" : "Add To Cart"}</span>
          </button>
        </div>

        <div className="flex flex-col items-start mt-3 text-sm font-medium">
          <Link href={`/product/${id}`} className="hover:text-red-500 transition-colors">
            <h3 className="text-black font-semibold line-clamp-1" title={title}>
              {title}
            </h3>
          </Link>
          <div className="flex gap-2.5 items-center mt-1 text-sm">
            <span className="text-red-500 font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-xs">{originalPrice}</span>
            )}
          </div>
          {rating > 0 && (
            <div className="flex gap-2 items-center mt-1 text-xs text-gray-500">
              <RatingBar rating={rating} />
              <span>({reviews})</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
