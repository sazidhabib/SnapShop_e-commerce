"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import { FiUser, FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

interface AccountDropdownProps {
  closeDropdown: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ closeDropdown }) => {
  const { setLogin, user } = useContext(GlobalContext) ?? {
    setLogin: () => {},
  };

  const handleLogOut = (e: React.MouseEvent) => {
    e.preventDefault();
    setLogin(false, undefined);
    closeDropdown();
  };

  const displayName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.username
    : "Shopper";

  return (
    <div className="flex overflow-hidden z-50 flex-col p-2 rounded-xl bg-gray-950 text-neutral-100 shadow-2xl border border-gray-800 min-w-[220px] animate-in fade-in-50 zoom-in-95 duration-150">
      {/* User Info Header */}
      <div className="px-3 py-2.5 border-b border-gray-800/80 mb-1">
        <p className="text-xs text-gray-400 font-medium">Signed in as</p>
        <p className="text-sm font-semibold text-white truncate">{displayName}</p>
        {user?.email && (
          <p className="text-[11px] text-gray-400 truncate mt-0.5">{user.email}</p>
        )}
      </div>

      <nav className="flex flex-col space-y-1">
        <Link
          onClick={closeDropdown}
          href="/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-200 hover:text-white hover:bg-gray-800/70 transition-all text-left"
        >
          <FiUser className="w-4 h-4 text-gray-400 shrink-0" />
          <span>Manage My Account</span>
        </Link>

        <Link
          onClick={closeDropdown}
          href="/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-200 hover:text-white hover:bg-gray-800/70 transition-all text-left"
        >
          <FiPackage className="w-4 h-4 text-gray-400 shrink-0" />
          <span>My Orders</span>
        </Link>

        <div className="pt-1 mt-1 border-t border-gray-800/80">
          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all text-left"
          >
            <TbLogout className="w-4 h-4 text-red-400 shrink-0" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AccountDropdown;
