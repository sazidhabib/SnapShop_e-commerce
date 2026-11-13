"use client";

import React from "react";
import CheckOut from "@/components/checkout/CheckOut";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CheckoutPage() {
  return (
    <ProtectedRoute>
      <CheckOut />
    </ProtectedRoute>
  );
}
