import React from "react";

export default function ComfortSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-10 md:mb-16 leading-tight">
          <span style={{ color: '#094386' }}>Optimisez votre </span>
          <span style={{ color: '#5CB000' }}>confort</span>
          <span style={{ color: '#094386' }}> et réalisez des </span>
          <span style={{ color: '#5CB000' }}>économies</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6915b08fcd8bce51e8f22cf3/4ed05fd99_https___appunbouncecom_publish_assets_c4c08942-0bc0-43d5-8370-171d13af7929_8f8d8db9-whatsapp-image-2024-10-09-at-15-43-51_10bm09600000000000001o.jpeg"
              alt="Couple heureux devant leur maison avec pompe à chaleur"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#094386' }}>
                Installation rapide et professionnelle
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Bénéficiez d'une <strong>installation en une semaine</strong> par des artisans RGE locaux, 
                certifiés et expérimentés. Nos professionnels vous garantissent une pose de qualité 
                pour une performance optimale.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#094386' }}>
                Des économies substantielles
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Réalisez <strong style={{ color: '#5CB000' }}>jusqu'à –70%</strong> d'économie sur votre facture de chauffage. 
                La pompe à chaleur utilise l'énergie renouvelable de l'air pour chauffer votre logement 
                de manière ultra-efficace.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#094386' }}>
                Éligibilité aux aides de l'État
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Profitez des dispositifs <strong>MaPrimeRénov'</strong>, des primes CEE, 
                et des aides de l'ANAH. Votre installation peut vous revenir à partir de 
                <strong style={{ color: '#5CB000' }}> 1€ symbolique</strong> sous conditions d'éligibilité.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Logos - Only RGE and Ministry */}
        <div className="flex justify-center items-end gap-12 md:gap-20 pt-6 md:pt-8 border-t-2 border-gray-200">
          <div className="text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/f1d45015b_logo_ministere.png"
              alt="Ministère Transition Écologique"
              className="h-[80px] md:h-[120px] object-contain mx-auto mb-2"
            />
            <p className="text-sm md:text-base font-semibold" style={{ color: '#094386' }}>
              Ministère de la Transition<br />Écologique
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/2c943b4aa_design_sans_titre_10.png"
              alt="RGE"
              className="h-[80px] md:h-[120px] object-contain mx-auto mb-2"
            />
            <p className="text-sm md:text-base font-semibold" style={{ color: '#094386' }}>
              Reconnu Garant<br />de l'Environnement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}