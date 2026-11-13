"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";
import AccountManagement from "./AccountManagement";
import ProfileEdit from "./ProfileEdit";

const AccountPage: React.FC = () => {
  const { user } = useContext(GlobalContext) ?? {
    user: undefined,
  };

  return (
    <div className="flex flex-col bg-white pb-20">
      <main className="flex flex-col items-center max-w-[1170px] w-full mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mt-12 w-full text-sm">
          <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-black font-medium">My Account</span>
          </nav>
          <div className="text-sm font-medium">
            Welcome! <span className="text-red-500 font-semibold">{user?.firstName || "Shopper"}</span>
          </div>
        </div>

        <section className="mt-12 w-full">
          <div className="flex gap-8 flex-col md:flex-row">
            <AccountManagement />
            <ProfileEdit />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountPage;
