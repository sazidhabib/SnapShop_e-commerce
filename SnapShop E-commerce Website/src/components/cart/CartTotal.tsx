"use client";

import React from "react";
import Link from "next/link";

interface CartTotalProps {
  total: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ total }) => {
  return (
    <div className="flex overflow-hidden flex-col px-6 py-8 text-black rounded-lg border-2 border-black min-w-[280px] w-full md:w-[470px]">
      <h2 className="self-start text-xl font-bold">Cart Total</h2>
      <div className="flex justify-between items-center mt-6 text-sm">
        <span>Subtotal:</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <div className="shrink-0 my-3 h-px bg-gray-200" />
      <div className="flex justify-between items-center text-sm">
        <span>Shipping:</span>
        <span className="text-green-600 font-medium">Free</span>
      </div>
      <div className="shrink-0 my-3 h-px bg-gray-200" />
      <div className="flex justify-between items-center text-base font-bold">
        <span>Total:</span>
        <span className="text-red-500">${total.toFixed(2)}</span>
      </div>
      <Link
        href="/checkout"
        className="mt-6 w-full py-4 text-center font-medium bg-red-500 hover:bg-red-600 transition-colors rounded text-white text-sm"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartTotal;
