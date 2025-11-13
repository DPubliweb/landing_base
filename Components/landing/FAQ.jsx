import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment fonctionne une pompe à chaleur ?",
      answer: "Une pompe à chaleur capte l'énergie présente dans l'air extérieur (même par temps froid) et la transforme en chaleur pour chauffer votre logement. C'est un système très efficace qui consomme peu d'électricité pour produire beaucoup de chaleur."
    },
    {
      question: "Quelles sont les aides financières disponibles ?",
      answer: "Vous pouvez bénéficier de MaPrimeRénov', des primes CEE (Certificats d'Économie d'Énergie), des aides de l'ANAH, et d'autres dispositifs locaux. Le montant des aides dépend de vos revenus et de votre situation. Dans certains cas, l'installation peut vous revenir à 1€ symbolique."
    },
    {
      question: "Quels sont les prérequis pour être éligible ?",
      answer: "Vous devez être propriétaire occupant ou bailleur d'un logement construit depuis plus de 2 ans. Vos revenus doivent correspondre aux plafonds définis par l'ANAH. L'installation doit être réalisée par un artisan certifié RGE (Reconnu Garant de l'Environnement)."
    },
    {
      question: "Combien de temps dure l'installation ?",
      answer: "L'installation d'une pompe à chaleur prend généralement entre 1 et 2 jours une fois le projet validé. Le délai global, du premier contact à l'installation, est d'environ une semaine, incluant la visite technique et les démarches administratives."
    },
    {
      question: "Quelle est la durée de vie d'une pompe à chaleur ?",
      answer: "Une pompe à chaleur bien entretenue a une durée de vie moyenne de 15 à 20 ans. Un entretien annuel par un professionnel est recommandé pour garantir ses performances et sa longévité. La plupart des composants sont également garantis pendant plusieurs années."
    },
    {
      question: "La pompe à chaleur fonctionne-t-elle en hiver ?",
      answer: "Oui, absolument ! Les pompes à chaleur modernes sont conçues pour fonctionner efficacement même par températures négatives (jusqu'à -15°C ou -20°C selon les modèles). Elles restent très performantes même en plein hiver."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-4" style={{ color: '#094386' }}>
          Questions fréquentes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Tout ce que vous devez savoir sur la pompe à chaleur
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-xl overflow-hidden transition-all duration-300"
              style={{ 
                borderColor: openIndex === index ? '#5CB000' : '#E0E0E0',
                backgroundColor: openIndex === index ? '#F8FFF8' : 'white'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
              >
                <span 
                  className="text-lg font-bold pr-4"
                  style={{ color: openIndex === index ? '#5CB000' : '#094386' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: openIndex === index ? '#5CB000' : '#094386' }}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: '#F0FAF5' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#094386' }}>
            Vous avez d'autres questions ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Notre équipe d'experts est là pour vous répondre
          </p>
          <button
            onClick={() => document.getElementById('eligibility-form').scrollIntoView()}
            className="px-10 py-4 text-white text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#5CB000',
              borderRadius: '10px',
              fontFamily: 'Rubik, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#479E00'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#5CB000'}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}