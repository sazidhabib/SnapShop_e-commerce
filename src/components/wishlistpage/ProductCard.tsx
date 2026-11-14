"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";
import { FaTrash } from "react-icons/fa";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price: string | number;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  isWishlistItem?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  isNew,
  rating,
  reviews,
  isWishlistItem = false,
}) => {
  const { removeFromWishlist, addToCart } = useContext(GlobalContext) ?? {
    removeFromWishlist: () => {},
    addToCart: () => {},
  };

  const numericId = parseInt(id, 10) || 0;
  const numPrice = typeof price === "number" ? price : parseFloat(price) || 0;

  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  const handleAddToCart = () => {
    addToCart({
      id: numericId,
      image,
      title,
      price: numPrice,
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col w-full max-w-[270px]">
      <div className="relative overflow-hidden flex flex-col justify-between pt-3 w-full rounded-lg bg-neutral-100 h-[250px]">
        <div className="flex justify-between items-start px-3 w-full">
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

          {isWishlistItem && (
            <button
              onClick={() => removeFromWishlist(numericId)}
              className="p-1.5 rounded-full bg-white text-gray-400 hover:text-red-500 transition-colors shadow-sm"
              aria-label="Remove from wishlist"
            >
              <FaTrash className="text-sm" />
            </button>
          )}
        </div>

        <Link href={`/product/${numericId}`} className="relative w-full h-[140px] flex items-center justify-center px-4">
          <div className="relative w-full h-full">
            <Image
              src={imgSrc || image || "https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt={title}
              fill
              sizes="240px"
              className="object-contain"
              onError={() => setImgSrc("https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg")}
            />
          </div>
        </Link>

        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 bg-black hover:bg-red-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
        >
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col items-start mt-3 text-sm font-medium">
        <Link href={`/product/${numericId}`} className="hover:text-red-500 transition-colors">
          <h3 className="text-black font-semibold line-clamp-1">{title}</h3>
        </Link>
        <div className="flex gap-2.5 items-center mt-1">
          <span className="text-red-500 font-bold">${numPrice.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-xs">{originalPrice}</span>
          )}
        </div>
        {rating && (
          <div className="text-xs text-gray-500 mt-1">
            ⭐ {rating} ({reviews} reviews)
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
