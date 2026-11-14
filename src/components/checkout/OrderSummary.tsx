"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../../context/GlobalContext";

const OrderSummary: React.FC = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "cod">("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { cart, removeFromCart } = useContext(GlobalContext) ?? {
    cart: [],
    removeFromCart: () => {},
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderPlaced(true);
    // Clear cart
    cart.forEach((item) => removeFromCart(item.id));
    setTimeout(() => {
      router.push("/");
    }, 2500);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl border border-green-200 text-center w-full max-w-[460px]">
        <span className="text-5xl mb-4">🎉</span>
        <h3 className="text-xl font-bold text-green-800">Order Placed Successfully!</h3>
        <p className="text-sm text-green-700 mt-2">
          Thank you for shopping with SnapShop! A confirmation email has been dispatched.
        </p>
        <span className="text-xs text-green-600 mt-4">Redirecting to homepage...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-[460px] bg-neutral-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="flex flex-col space-y-4 max-h-[300px] overflow-y-auto pr-2">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded p-1 border border-gray-200 shrink-0">
                  {item.image && (
                    <Image
                      src={item.image || "https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg"}
                      alt={item.title}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  )}
                </div>
                <span className="line-clamp-1 text-gray-800 max-w-[180px] font-medium">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500">x{item.quantity || 1}</span>
              </div>
              <span className="font-semibold text-gray-900">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic py-4">No items in your cart.</p>
        )}
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-green-600 font-semibold">Free</span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-bold">
          <span>Total:</span>
          <span className="text-red-500">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-8 space-y-3">
        <label className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 cursor-pointer hover:border-black transition-colors">
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
            className="text-red-500 focus:ring-red-500"
          />
          <span className="text-sm font-medium text-gray-800">Bank Transfer / Card</span>
        </label>
        <label className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 cursor-pointer hover:border-black transition-colors">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
            className="text-red-500 focus:ring-red-500"
          />
          <span className="text-sm font-medium text-gray-800">Cash on delivery</span>
        </label>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={cart.length === 0}
        className="w-full mt-6 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm rounded shadow-sm transition-colors disabled:opacity-50"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
