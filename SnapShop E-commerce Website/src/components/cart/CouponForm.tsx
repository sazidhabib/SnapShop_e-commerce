"use client";

import React, { useState } from "react";

const CouponForm: React.FC = () => {
  const [coupon, setCoupon] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!coupon.trim()) return;
    if (coupon.toUpperCase() === "SNAP10") {
      setStatus("10% discount applied!");
    } else {
      setStatus("Invalid or expired coupon code.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 items-center min-w-[240px]"
      >
        <div className="flex px-4 py-3 text-black rounded border border-gray-300 min-w-[240px] w-[300px]">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code (e.g. SNAP10)"
            className="w-full bg-transparent border-none outline-none text-sm"
            aria-label="Enter coupon code"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 font-medium bg-red-500 hover:bg-red-600 transition-colors rounded text-white text-sm"
        >
          Apply Coupon
        </button>
      </form>
      {status && (
        <span className="text-xs text-gray-600 italic">{status}</span>
      )}
    </div>
  );
};

export default CouponForm;
