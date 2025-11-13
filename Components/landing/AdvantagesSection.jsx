import React from "react";

export default function AdvantagesSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E8F5E9' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Main Highlight */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight">
            <span style={{ color: '#094386' }}>Jusqu'à </span>
            <span style={{ color: '#5CB000', fontSize: '48px' }}>–70 %</span>
            <span style={{ color: '#094386' }}> d'économie</span>
            <br />
            <span style={{ color: '#094386' }}>sur vos factures de chauffage</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info Blocks */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#5CB000' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#094386' }}>
                Augmentez la valeur de votre propriété
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Une installation moderne de pompe à chaleur valorise votre logement et améliore 
                sa performance énergétique. Travaux réalisés par des <strong>artisans locaux 
                certifiés RGE</strong>, garantissant qualité et conformité aux normes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#5DBA8C' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#094386' }}>
                Profitez des aides de l'État
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Accédez aux dispositifs <strong>MaPrimeRénov'</strong>, <strong>ANAH</strong>, 
                et aux <strong>primes CEE</strong>. Votre installation peut revenir à{' '}
                <strong style={{ color: '#5CB000' }}>1 € symbolique</strong> sous conditions 
                d'éligibilité (revenus, type de logement, ancienneté).
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-2" style={{ borderColor: '#5CB000' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5CB000' }}>
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#094386' }}>
                    Installation rapide et garantie
                  </h4>
                  <p className="text-base text-gray-700">
                    Installation complète en <strong>une semaine</strong> avec garantie 
                    décennale et service après-vente de qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heat Pump Image */}
          <div className="order-first md:order-last">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/03f673008_design_sans_titre_2.png"
              alt="Pompe à chaleur extérieure"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#5CB000' }}>
              1 semaine
            </p>
            <p className="text-lg font-semibold" style={{ color: '#094386' }}>
              Délai d'installation
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#5CB000' }}>
              –70%
            </p>
            <p className="text-lg font-semibold" style={{ color: '#094386' }}>
              Économie moyenne annuelle
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#5CB000' }}>
              100%
            </p>
            <p className="text-lg font-semibold" style={{ color: '#094386' }}>
              Artisans certifiés RGE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}