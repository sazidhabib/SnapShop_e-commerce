"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-md mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
      <p className="text-sm text-gray-500 mt-2">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-gray-900 text-white rounded text-sm font-medium hover:bg-black transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
