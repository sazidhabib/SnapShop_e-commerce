import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] max-w-[1170px] mx-auto px-4 py-20 text-center">
      <h1 className="text-7xl sm:text-9xl font-bold tracking-tight text-gray-900">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="mt-4 text-sm text-gray-500 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-8 px-10 py-3.5 bg-red-500 hover:bg-red-600 transition-colors text-white font-medium text-sm rounded shadow-sm"
      >
        Back to home page
      </Link>
    </main>
  );
}
