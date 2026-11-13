"use client";

import React from "react";
import AccountPage from "@/components/accountpage/AccountPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Profile() {
  return (
    <ProtectedRoute>
      <AccountPage />
    </ProtectedRoute>
  );
}
