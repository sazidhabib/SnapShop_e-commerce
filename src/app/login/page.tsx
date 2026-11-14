"use client";

import React from "react";
import LoginForm from "@/components/login/LoginFrom";
import SideImage from "@/components/login/SideImage";

export default function LoginPage() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center py-10 md:py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center max-w-[1170px] w-full mx-auto">
        <SideImage />
        <LoginForm />
      </div>
    </main>
  );
}
