"use client";

import Experience from "@/components/home/Experience";
import Expert from "@/components/home/Expert";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Social from "@/components/layout/social";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
        .then((reg) => console.log("✅ Service Worker registered!", reg))
        .catch((error) => console.log("❌ Service Worker registration failed:", error));
    }
  }, []);
  return (
    <main className="min-h-screen bg-white">

      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero /> 

      {/* Experience Section */}
      <Experience />

      {/* Services Section */}
      <Services />

      {/* Expert Section */}
      <Expert />

      {/* Selected Work Section */}
      <SelectedWork />

      {/* Skills Section */}
      <Skills />
      
      {/* Testimonial Section */}
      <Testimonial />

      {/* Social Links */}
      <Social />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}