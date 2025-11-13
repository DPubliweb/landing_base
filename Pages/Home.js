import React, { useEffect } from "react";
import HeroSection from "../components/landing/HeroSection";
import ComfortSection from "../components/landing/ComfortSection";
import BenefitsGrid from "../components/landing/BenefitsGrid";
import AdvantagesSection from "../components/landing/AdvantagesSection";
import FinalCTA from "../components/landing/FinalCTA";
import FAQ from "../components/landing/FAQ";

export default function Home() {
  useEffect(() => {
    // Load Manrope font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Rubik:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <HeroSection />
      <ComfortSection />
      <BenefitsGrid />
      <AdvantagesSection />
      <FinalCTA />
      <FAQ />
    </div>
  );
}