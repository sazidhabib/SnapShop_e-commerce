"use client";

import React, { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { GlobalContext } from "../context/GlobalContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FiUser, FiChevronDown, FiSearch, FiHeart, FiShoppingCart, FiPackage, FiChevronRight } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import SearchComponent from "./homepages/SearchComponent";
import AccountDropdown from "./homepages/AccountDropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    cart = [],
    wishlist = [],
    isLogin = false,
    isHydrated = false,
    user,
    setLogin,
  } = useContext(GlobalContext) ?? {
    setLogin: () => {},
  };

  // Mount safety for client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCartItems = isHydrated
    ? cart.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  const totalWishlistItems = isHydrated ? wishlist.length : 0;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "ShopNow", href: "/product" },
    { label: "Contact", href: "/contact" },
  ];

  const allCategories = [
    { label: "Woman's Fashion", href: "/product?category=women's%20clothing" },
    { label: "Men's Fashion", href: "/product?category=men's%20clothing" },
    { label: "Electronics", href: "/product?category=electronics" },
    { label: "Jewelry & Luxury", href: "/product?category=jewelery" },
    { label: "Bags & Backpacks", href: "/product?q=backpack" },
    { label: "Casual & Sportswear", href: "/product?q=casual" },
    { label: "Jackets & Outerwear", href: "/product?q=jacket" },
    { label: "Gaming & Storage", href: "/product?q=ssd" },
  ];

  const displayName = user
    ? user.firstName || user.username || "Shopper"
    : "Shopper";

  const initials = user
    ? (
        (user.firstName?.[0] || "") + (user.lastName?.[0] || "")
      ).toUpperCase() || (user.username?.[0] || "U").toUpperCase()
    : "U";

  const isAuthenticated = (mounted || isHydrated) && isLogin;

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearch.trim()) {
      router.push(`/product?q=${encodeURIComponent(mobileSearch.trim())}`);
      setIsOpen(false);
      setMobileSearch("");
    }
  };

  const handleLogout = () => {
    setLogin(false, undefined);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white px-4 py-3.5 relative border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1170px] w-full mx-auto flex justify-between items-center relative">
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-950">
            SnapShop
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black underline underline-offset-8 decoration-2 decoration-red-500 font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Icons & Search */}
        <div className="flex gap-3 sm:gap-5 items-center">
          <SearchComponent />

          <div className="flex gap-2 sm:gap-4 items-center">
            {/* Wishlist Link with Badge */}
            <Link
              href="/wishlist"
              className="p-1 hover:opacity-80 transition-opacity relative flex items-center"
              aria-label="Wishlist"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0123583f55d849d761c5aafb62524e58e76f4578ffd0ca775554d42933ddc549?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                className="object-contain w-6 h-6 sm:w-7 sm:h-7"
                alt="Wishlist icon"
                width={28}
                height={28}
              />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1.5 -right-2 flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-red-500 rounded-full animate-in zoom-in-75">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Link with Badge */}
            <Link
              href="/cart"
              className="p-1 hover:opacity-80 transition-opacity relative flex items-center"
              aria-label="Shopping Cart"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e6583cc2b0ad6384fa0e09ba54d132ea13906a2c9553ea3ae9481ef2628ff7?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                className="object-contain w-6 h-6 sm:w-7 sm:h-7"
                alt="Cart icon"
                width={28}
                height={28}
              />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-2 flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-red-500 rounded-full animate-in zoom-in-75">
                  {totalCartItems}
                </span>
              )}
            </Link>

            {/* User Account / Profile Section */}
            <div className="flex items-center">
              {isAuthenticated ? (
                /* Logged In: Personalized Avatar with User Name */
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-gray-100 focus:outline-none transition-all group border border-transparent hover:border-gray-200"
                    aria-label={`User profile for ${displayName}`}
                  >
                    {/* Avatar Circle */}
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-tr from-red-600 to-rose-400 text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-red-500/30 group-hover:ring-red-500 transition-all shrink-0">
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt={displayName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{initials}</span>
                      )}
                    </div>

                    {/* User Name & Subtitle beside avatar */}
                    <div className="hidden sm:flex flex-col text-left leading-tight">
                      <span className="text-xs font-semibold text-gray-900 group-hover:text-red-500 transition-colors max-w-[85px] truncate">
                        {displayName}
                      </span>
                      <span className="text-[10px] text-gray-500 font-normal">
                        My Account
                      </span>
                    </div>

                    <FiChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 z-50">
                      <AccountDropdown closeDropdown={() => setIsDropdownOpen(false)} />
                    </div>
                  )}
                </div>
              ) : (
                /* Guest State: Direct link to /login with User Icon */
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                  aria-label="Log In"
                >
                  <FiUser className="text-sm" />
                  <span className="hidden xs:inline">Log In</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden flex items-center ml-1">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none p-1.5 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Full Slide-Down / Slide-Over Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white md:hidden flex flex-col overflow-y-auto overscroll-contain transition-all duration-300 ease-out shadow-2xl ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Sticky Mobile Drawer Header with SnapShop Logo & Prominent Close Button */}
        <div className="sticky top-0 bg-white z-20 flex items-center justify-between px-5 py-4 border-b border-gray-100 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-gray-950">SnapShop</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Menu
            </span>
          </div>

          {/* Dedicated Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 active:scale-95 text-gray-700 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Close mobile menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="flex flex-col p-5 space-y-6 pb-36">
          {/* Quick Search in Mobile Drawer */}
          <form onSubmit={handleMobileSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-red-500 transition-colors"
            />
            <FiSearch className="absolute left-3.5 top-3.5 text-gray-400 text-base" />
          </form>

          {/* Primary Navigation Links */}
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-1">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <FiChevronRight className="text-gray-400 text-sm" />
                </Link>
              );
            })}
          </div>

          {/* Quick Shortcuts: Cart & Wishlist */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              href="/wishlist"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-300 transition-all text-sm font-medium text-gray-800"
            >
              <div className="flex items-center gap-2">
                <FiHeart className="text-red-500 text-base" />
                <span>Wishlist</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                {totalWishlistItems}
              </span>
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-300 transition-all text-sm font-medium text-gray-800"
            >
              <div className="flex items-center gap-2">
                <FiShoppingCart className="text-red-500 text-base" />
                <span>Cart</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                {totalCartItems}
              </span>
            </Link>
          </div>

          {/* All Product Categories (Full List) */}
          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-1">
            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                All Categories
              </span>
              <span className="text-[11px] text-gray-400">8 Categories</span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-50">
              {allCategories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {cat.label}
                  </span>
                  <FiChevronRight className="text-gray-300 group-hover:text-red-500 text-xs transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* User Profile & Auth Section (Always fully visible and scrollable!) */}
          <div className="pt-4 border-t border-gray-100">
            {isAuthenticated ? (
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 flex flex-col space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 text-white flex items-center justify-center font-bold text-sm ring-2 ring-red-500/20 shadow-sm shrink-0">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={displayName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-sm font-bold text-gray-900 truncate">
                      {displayName}
                    </span>
                    <span className="text-xs text-gray-500 truncate">
                      {user?.email || "Shopper"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200/60">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:border-black transition-colors"
                  >
                    <FiUser className="text-sm text-gray-500" />
                    <span>Account</span>
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:border-black transition-colors"
                  >
                    <FiPackage className="text-sm text-gray-500" />
                    <span>Orders</span>
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors"
                >
                  <TbLogout className="text-sm" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 flex flex-col space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Welcome to SnapShop</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Sign in for orders, wishlist, and member discounts.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2.5 px-4 text-center rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2.5 px-4 text-center rounded-xl bg-white border border-gray-300 hover:border-black text-gray-800 text-xs font-bold transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
