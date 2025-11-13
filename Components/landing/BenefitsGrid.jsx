import React from "react";
import { TrendingDown, Thermometer, Leaf, Sun, Heart, BadgeDollarSign } from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Économies jusqu'à –70 %",
      description: "Réduisez votre facture de chauffage jusqu'à –70 % grâce à la pompe à chaleur."
    },
    {
      icon: Thermometer,
      title: "Confort thermique toute l'année",
      description: "Profitez d'un confort optimal hiver comme été avec un seul système."
    },
    {
      icon: Leaf,
      title: "Chauffage écologique",
      description: "Utilise l'énergie renouvelable de l'air pour réduire votre empreinte carbone."
    },
    {
      icon: Sun,
      title: "Autoconsommation possible",
      description: "Compatible avec des panneaux solaires pour maximiser votre autonomie énergétique."
    },
    {
      icon: Heart,
      title: "Respect de la planète",
      description: "Chauffez votre maison tout en respectant l'environnement."
    },
    {
      icon: BadgeDollarSign,
      title: "Aides et subventions disponibles",
      description: "Éligible aux aides de l'État : MaPrimeRénov', primes CEE, ANAH…"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F0FAF5' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-16 leading-tight">
          <span style={{ color: '#094386' }}>Pourquoi passer à la </span>
          <span style={{ color: '#5CB000' }}>pompe à chaleur ?</span>
        </h2>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ borderColor: '#c2d5eb' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <benefit.icon className="w-8 h-8" style={{ color: '#5CB000' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#094386' }}>
                {benefit.title}
              </h3>
              
              <p className="text-base leading-relaxed text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}