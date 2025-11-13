import React from "react";
import EligibilityForm from "./EligibilityForm";

export default function HeroSection() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-6" style={{ backgroundColor: '#FAF8DF' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Main Headline */}
        <h1 
          className="text-center text-[28px] md:text-[42px] leading-tight mb-4 md:mb-8"
          style={{ 
            fontWeight: 800,
            color: '#5CB000',
            fontFamily: 'Manrope, sans-serif'
          }}
        >
          Réduisez vos factures d'énergie en installant une pompe à chaleur
        </h1>

        {/* Subheadline */}
        <h2 
          className="text-center text-[18px] md:text-[28px] leading-snug mb-6 md:mb-12 px-2"
          style={{ fontWeight: 700 }}
        >
          <span style={{ color: '#094386' }}>Répondez à ces </span>
          <span style={{ color: '#5CB000' }}>deux questions</span>
          <span style={{ color: '#094386' }}> pour vérifier votre éligibilité et bénéficier d'une installation en </span>
          <span style={{ color: '#5CB000' }}>une semaine !</span>
        </h2>

        {/* Eligibility Form - Priority on mobile */}
        <div id="eligibility-form" className="mb-8 md:mb-12">
          <EligibilityForm />
        </div>

        {/* Partner Logos - Better Alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12 items-center max-w-[900px] mx-auto">
          <div className="flex items-center justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/5bb3d9233_logo_totalenergies.png" 
              alt="TotalEnergies" 
              className="h-[45px] md:h-[65px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/cd9653225_logo_edf.png" 
              alt="EDF ENR" 
              className="h-[45px] md:h-[65px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/455a11f90_logo_engie.png" 
              alt="Engie" 
              className="h-[45px] md:h-[65px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/85d7eec23_logo_anah.png" 
              alt="ANAH" 
              className="h-[45px] md:h-[65px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('eligibility-form').scrollIntoView()}
            className="px-8 md:px-12 py-4 md:py-5 text-white text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#5CB000',
              borderRadius: '10px',
              fontFamily: 'Rubik, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#479E00'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#5CB000'}
          >
            Mon devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
}