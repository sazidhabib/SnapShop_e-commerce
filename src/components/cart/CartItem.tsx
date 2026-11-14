"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { Product } from "../../context/types";
import { GlobalContext } from "../../context/GlobalContext";
import { FaTrash } from "react-icons/fa";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity?: number;
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  image,
  price,
  product,
}) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(GlobalContext) ?? {
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    removeFromCart: () => {},
  };

  const qty = product?.quantity ?? 1;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 mt-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 w-full md:w-2/5">
        <button
          onClick={() => removeFromCart(id)}
          className="text-gray-400 hover:text-red-500 transition-colors p-1"
          aria-label="Remove item"
        >
          <FaTrash className="text-sm" />
        </button>
        <div className="relative w-16 h-16 bg-neutral-50 rounded p-1 shrink-0">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="64px"
              className="object-contain"
            />
          )}
        </div>
        <span className="text-sm font-medium text-gray-900 line-clamp-1">{title}</span>
      </div>

      <div className="flex items-center justify-between w-full md:w-3/5 gap-6 text-sm">
        <span className="text-gray-700 font-medium">${price.toFixed(2)}</span>

        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => decreaseQuantity(product)}
            aria-label="Decrease quantity"
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="w-10 text-center font-semibold text-xs">{qty}</span>
          <button
            onClick={() => increaseQuantity(product)}
            aria-label="Increase quantity"
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>

        <span className="font-semibold text-gray-900 min-w-[70px] text-right">
          ${(price * qty).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
