"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ProductCard from "./ProductCard";
import { Product } from "../../context/types";
import Link from "next/link";

const WishlistPage: React.FC = () => {
  const { wishlist, isHydrated, addToCart } = useContext(GlobalContext) ?? {
    wishlist: [],
    isHydrated: false,
    addToCart: () => {},
  };

  const handleMoveAllToBag = () => {
    wishlist.forEach((item) => {
      addToCart({ ...item, quantity: 1 });
    });
  };

  const justForYouItems = [
    {
      id: "1",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      originalPrice: "$1160",
      discount: "-35%",
      rating: 5,
      reviews: 65,
    },
    {
      id: "2",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rating: 5,
      reviews: 65,
    },
    {
      id: "3",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      isNew: true,
      rating: 5,
      reviews: 65,
    },
    {
      id: "4",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      title: "AK-900 Wired Keyboard",
      price: 200,
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col self-center mt-8 md:mt-12 max-w-[1170px] w-full mx-auto px-4 pb-20">
        <section className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Wishlist ({isHydrated ? wishlist.length : 0})
            </h2>
            {wishlist.length > 0 && (
              <button
                onClick={handleMoveAllToBag}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-black rounded-lg border border-gray-300 hover:border-black transition-colors"
              >
                Move All To Bag
              </button>
            )}
          </div>

          <div className="mt-8 w-full">
            {!isHydrated ? (
              <div className="py-12 text-center text-gray-500 animate-pulse">Loading wishlist...</div>
            ) : wishlist.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full">
                {wishlist.map((item: Product) => (
                  <div key={item.id} className="w-full flex justify-center">
                    <ProductCard
                      id={item.id.toString()}
                      image={item.image || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                      title={item.title}
                      price={item.price}
                      isWishlistItem={true}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full py-16 text-center bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-500 text-sm">Your wishlist is currently empty.</p>
                <Link
                  href="/product"
                  className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors shadow-sm"
                >
                  Explore Products
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Just For You Section */}
        <section className="flex flex-col mt-16 md:mt-24">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-3 items-center">
              <div className="h-9 w-4 sm:h-10 sm:w-5 bg-red-500 rounded" />
              <h2 className="text-lg sm:text-xl font-bold text-black">Just For You</h2>
            </div>
            <Link
              href="/product"
              className="px-6 py-2 text-xs sm:text-sm font-semibold text-black rounded-lg border border-gray-300 hover:border-black transition-colors"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center w-full">
            {justForYouItems.map((item) => (
              <div key={item.id} className="w-full flex justify-center">
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  discount={item.discount}
                  rating={item.rating}
                  reviews={item.reviews}
                  isNew={item.isNew}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WishlistPage;
