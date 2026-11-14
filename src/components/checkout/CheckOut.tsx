"use client";

import React from "react";
import Link from "next/link";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";

const CheckOut: React.FC = () => {
  return (
    <div className="flex flex-col bg-white pb-20">
      <main className="flex flex-col items-start self-center mt-12 w-full max-w-[1170px] mx-auto px-4">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-500 flex gap-2 items-center">
          <Link href="/" className="hover:text-black transition-colors">
            Account
          </Link>
          <span>/</span>
          <Link href="/profile" className="hover:text-black transition-colors">
            My Account
          </Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-black transition-colors">
            Cart
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Checkout</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-gray-950 mb-10">
          Checkout &amp; Billing
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
          <BillingDetails />
          <OrderSummary />
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
