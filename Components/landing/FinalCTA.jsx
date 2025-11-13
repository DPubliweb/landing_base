import React from "react";
import { Calendar } from "lucide-react";

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView();
  };

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#094386' }}>
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Main Message */}
        <h2 className="text-white text-[28px] md:text-[38px] font-bold leading-snug mb-12">
          Bénéficiez d'un <span style={{ color: '#5CB000' }}>confort thermique optimal</span> 
          {' '}été comme hiver avec une maison à la{' '}
          <span style={{ color: '#5CB000' }}>bonne température</span>
        </h2>

        {/* Benefits Icons */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#5CB000' }}>
              <span className="text-3xl">🏠</span>
            </div>
            <p className="text-lg font-semibold">Confort optimal</p>
            <p className="text-sm opacity-90 mt-2">Température idéale toute l'année</p>
          </div>

          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#5CB000' }}>
              <span className="text-3xl">💰</span>
            </div>
            <p className="text-lg font-semibold">Économies garanties</p>
            <p className="text-sm opacity-90 mt-2">Réduisez vos factures drastiquement</p>
          </div>

          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#5CB000' }}>
              <span className="text-3xl">🌱</span>
            </div>
            <p className="text-lg font-semibold">Écologique</p>
            <p className="text-sm opacity-90 mt-2">Respectueux de l'environnement</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="px-16 py-6 text-white text-2xl font-extrabold transition-all duration-300 transform hover:scale-110 shadow-2xl mb-6"
          style={{
            backgroundColor: '#5CB000',
            borderRadius: '12px',
            fontFamily: 'Rubik, sans-serif'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#479E00'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#5CB000'}
        >
          J'en profite
        </button>

        {/* Deadline Notice */}
        <div className="flex items-center justify-center gap-3 text-white">
          <Calendar className="w-5 h-5" />
          <p className="text-lg font-semibold">
            Offre valable jusqu'au <span style={{ color: '#5CB000' }}>31 Décembre</span>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm mb-4">Nos garanties :</p>
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#5CB000' }}>✓</span>
              <span>Devis gratuit sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#5CB000' }}>✓</span>
              <span>Artisans certifiés RGE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#5CB000' }}>✓</span>
              <span>Garantie décennale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#5CB000' }}>✓</span>
              <span>SAV dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}