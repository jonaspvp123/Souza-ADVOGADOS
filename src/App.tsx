import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Differentiators from "./components/Differentiators";
import HowItWorks from "./components/HowItWorks";
import InteractiveDiagnostic from "./components/InteractiveDiagnostic";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-nude-soft selection:bg-rose-gold/30 selection:text-gold-bronze antialiased">
      
      {/* Premium Glass Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* HERO Fold with luxury visuals */}
        <Hero />

        {/* INSTITUCIONAL about the firm */}
        <About />

        {/* PRACTICE AREAS with interactive detail popups */}
        <PracticeAreas />

        {/* KEY PREMIUM DIFFERENTIATORS checklist */}
        <Differentiators />

        {/* 4 STAGES of visual connected experience */}
        <HowItWorks />

        {/* HIGH-CONVERSION CONCIERGE DIAGNOSTIC TOOL */}
        <InteractiveDiagnostic />

        {/* VERIFIED CUSTOMER REVIEWS */}
        <Testimonials />

        {/* ACCORDION FAQ */}
        <FAQ />

        {/* FINAL CLOSING CTA BANNER */}
        <CTA />

      </main>

      {/* FULL REGULATORY & ADDRESS FOOTER */}
      <Footer />

      {/* PULSING CORNER WHATSAPP CTA */}
      <FloatingWhatsApp />

    </div>
  );
}
