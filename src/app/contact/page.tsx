import React from "react";
import ContactForm from "@/components/contactpage/ContactForm";
import ContactInfo from "@/components/contactpage/ContactInfo";
import ServiceFeatures from "@/components/homepages/ServiceFeatures";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SnapShop",
  description: "Get in touch with SnapShop customer support team. We are available 24/7 to assist you with your orders and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white pb-20">
      <section className="flex flex-col self-center mt-10 md:mt-12 w-full max-w-[1170px] mx-auto px-4 md:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10 text-sm text-gray-500 flex gap-2 items-center">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Contact</span>
        </nav>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          <div className="lg:col-span-4 w-full">
            <ContactInfo />
          </div>
          <div className="lg:col-span-8 w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Support Features */}
      <div className="mt-16 md:mt-24">
        <ServiceFeatures />
      </div>
    </main>
  );
}
