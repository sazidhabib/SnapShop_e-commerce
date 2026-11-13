"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";
import CartItem from "./CartItem";
import CouponForm from "./CouponForm";
import CartTotal from "./CartTotal";

const Cart: React.FC = () => {
  const { cart, isHydrated } = useContext(GlobalContext) ?? {
    cart: [],
    isHydrated: false,
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col self-center mt-12 w-full max-w-[1170px] mx-auto px-4 pb-20">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 flex gap-2 items-center mb-10">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Cart</span>
        </nav>

        <section className="flex flex-col w-full">
          <div className="hidden md:flex justify-between items-center px-8 py-5 text-sm font-semibold text-gray-700 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="w-2/5">Product</div>
            <div className="flex justify-between w-3/5">
              <span>Price</span>
              <span>Quantity</span>
              <span className="min-w-[70px] text-right">Subtotal</span>
            </div>
          </div>

          {!isHydrated ? (
            <div className="py-16 text-center text-gray-500 animate-pulse">Loading cart...</div>
          ) : cart.length > 0 ? (
            <div className="flex flex-col space-y-2 mt-2">
              {cart.map((item) => (
                <CartItem key={item.id} {...item} product={item} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <span className="text-5xl mb-3">🛒</span>
              <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
              <p className="text-gray-500 text-sm mt-1">Looks like you haven't added anything to your cart yet.</p>
              <Link
                href="/product"
                className="mt-6 px-8 py-3 bg-red-500 text-white rounded-md font-medium text-sm hover:bg-red-600 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}

          {cart.length > 0 && (
            <>
              <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
                <Link
                  href="/product"
                  className="px-8 py-3 rounded-md border border-gray-400 font-medium text-sm text-gray-800 hover:border-black transition-colors"
                >
                  Return To Shop
                </Link>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start mt-16 gap-10">
                <CouponForm />
                <CartTotal total={totalAmount} />
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Cart;
