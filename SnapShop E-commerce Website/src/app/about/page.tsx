import React from "react";
import AboutHero from "@/components/about/AboutHero";
import Stats from "@/components/about/Starts";
import Team from "@/components/about/Team";
import Services from "@/components/about/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SnapShop",
  description: "Learn more about SnapShop, our mission, leadership, and our story as the premier e-commerce shopping destination.",
};

export default function AboutPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white pb-20">
      <AboutHero />
      <Stats />
      <Team />
      <Services />
    </main>
  );
}
