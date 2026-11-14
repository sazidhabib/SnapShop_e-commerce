import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SnapShop | Modern E-Commerce Platform",
    template: "%s | SnapShop",
  },
  description: "Exclusive deals on fashion, tech, gadgets, and lifestyle products with fast worldwide shipping.",
  keywords: ["e-commerce", "shopping", "electronics", "fashion", "deals"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900 font-sans">
        <GlobalProvider>
          <Layout />
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
