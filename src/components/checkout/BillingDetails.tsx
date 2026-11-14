"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const BillingDetails: React.FC = () => {
  const { user } = useContext(GlobalContext) ?? {};

  return (
    <div className="flex flex-col w-full max-w-[530px]">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full text-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Details</h2>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-700 font-medium mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={user?.firstName || ""}
              required
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-gray-700 font-medium mb-1.5">
              Company Name (optional)
            </label>
            <input
              type="text"
              id="companyName"
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="streetAddress" className="text-gray-700 font-medium mb-1.5">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              defaultValue={user?.address || ""}
              required
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="apartment" className="text-gray-700 font-medium mb-1.5">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="townCity" className="text-gray-700 font-medium mb-1.5">
              Town/City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="townCity"
              required
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 font-medium mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              defaultValue={user?.phone || ""}
              required
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email || ""}
              required
              className="px-4 py-3 rounded bg-neutral-100 outline-none focus:ring-1 focus:ring-black text-sm"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="saveInfo"
              defaultChecked
              className="rounded text-red-500 focus:ring-red-500"
            />
            <label htmlFor="saveInfo" className="text-xs text-gray-600">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
