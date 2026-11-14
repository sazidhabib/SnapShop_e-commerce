"use client";

import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";

interface LogoutDropdownProps {
  closeDropdown: () => void;
}

const LogoutDropdown: React.FC<LogoutDropdownProps> = ({ closeDropdown }) => {
  return (
    <div className="flex overflow-hidden z-50 flex-col p-2.5 rounded-xl bg-gray-950 text-neutral-100 shadow-2xl border border-gray-800 min-w-[210px] animate-in fade-in-50 zoom-in-95 duration-150">
      <div className="px-3 py-2 border-b border-gray-800/80 mb-1">
        <p className="text-xs text-gray-400">Welcome to SnapShop</p>
        <p className="text-xs font-semibold text-white mt-0.5">Access your account & orders</p>
      </div>

      <nav className="flex flex-col space-y-1">
        <Link
          onClick={closeDropdown}
          href="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-red-500 hover:bg-red-600 text-white font-medium transition-all"
        >
          <IoLogInOutline className="text-lg shrink-0" />
          <span>Log In</span>
        </Link>
        <Link
          onClick={closeDropdown}
          href="/signup"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-200 hover:text-white hover:bg-gray-800/70 transition-all"
        >
          <FiUserPlus className="text-base text-gray-400 shrink-0" />
          <span>Create Account</span>
        </Link>
      </nav>
    </div>
  );
};

export default LogoutDropdown;
