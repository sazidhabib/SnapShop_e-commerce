"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../context/GlobalContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const context = useContext(GlobalContext);
  const isLogin = context?.isLogin ?? false;
  const isHydrated = context?.isHydrated ?? false;

  useEffect(() => {
    if (isHydrated && !isLogin) {
      router.push("/login");
    }
  }, [isHydrated, isLogin, router]);

  if (!isHydrated) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!isLogin) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
