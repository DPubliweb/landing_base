import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function EligibilityForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    propertyType: '',
    heatingSystem: ''
  });
  const [hiddenFields, setHiddenFields] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    code: '',
    code_postal: '',
    utm_source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Extract hidden fields from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    setHiddenFields({
      civilite: urlParams.get('civilite') || '',
      nom: urlParams.get('nom') || '',
      prenom: urlParams.get('prenom') || '',
      email: urlParams.get('email') || '',
      telephone: urlParams.get('telephone') || '',
      code: urlParams.get('code') || '',
      code_postal: urlParams.get('code_postal') || '',
      utm_source: urlParams.get('utm_source') || ''
    });
  }, []);

  const questions = [
    {
      id: 1,
      question: "Êtes-vous propriétaire de votre logement ?",
      options: [
        { value: 'owner', label: 'Oui, propriétaire occupant' },
        { value: 'landlord', label: 'Oui, propriétaire bailleur' },
        { value: 'tenant', label: 'Non, locataire' }
      ],
      key: 'propertyType'
    },
    {
      id: 2,
      question: "Quel est votre système de chauffage actuel ?",
      options: [
        { value: 'gas', label: 'Gaz' },
        { value: 'electric', label: 'Électrique' },
        { value: 'oil', label: 'Fioul' },
        { value: 'other', label: 'Autre' }
      ],
      key: 'heatingSystem'
    }
  ];

  const currentQuestion = questions[step - 1];

  const handleAnswer = async (value) => {
    const newAnswers = { ...answers, [currentQuestion.key]: value };
    setAnswers(newAnswers);
    
    if (step < 2) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      // After second question, submit the lead automatically
      setIsSubmitting(true);
      
      try {
        await base44.entities.Lead.create({
          ...hiddenFields,
          property_type: newAnswers.propertyType,
          heating_system: value
        });
        
        setTimeout(() => {
          setIsSubmitting(false);
          setIsComplete(true);
        }, 500);
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
        setIsSubmitting(false);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  return (
    <Card className="bg-white border-2 shadow-xl max-w-3xl mx-auto" style={{ borderColor: '#5CB000' }}>
      <CardHeader className="text-center pb-4 md:pb-6 p-4 md:p-6" style={{ backgroundColor: '#F8F9FA' }}>
        <CardTitle className="text-xl md:text-2xl font-bold" style={{ color: '#094386' }}>
          Vérifiez votre éligibilité
        </CardTitle>
        <div className="flex justify-center gap-2 md:gap-3 mt-3 md:mt-4">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg transition-all duration-300"
              style={{
                backgroundColor: num <= step || isComplete ? '#5CB000' : '#E0E0E0'
              }}
            >
              {num < step || isComplete ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : num}
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 md:p-8">
        {!isComplete ? (
          <>
            {isSubmitting ? (
              <div className="text-center py-12">
                <Loader2 className="w-16 h-16 mx-auto animate-spin mb-4" style={{ color: '#5CB000' }} />
                <p className="text-lg font-semibold" style={{ color: '#094386' }}>
                  Traitement de votre demande...
                </p>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-8" style={{ color: '#094386' }}>
                  {currentQuestion.question}
                </h3>
                
                <div className="grid gap-3 md:gap-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="p-4 md:p-5 text-left border-2 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                      style={{
                        borderColor: answers[currentQuestion.key] === option.value ? '#5CB000' : '#E0E0E0',
                        backgroundColor: answers[currentQuestion.key] === option.value ? '#F0F9E8' : 'white'
                      }}
                    >
                      <span className="text-base md:text-lg font-semibold" style={{ color: '#094386' }}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-6 md:py-8">
            <div className="mb-4 md:mb-6">
              <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 mx-auto" style={{ color: '#5CB000' }} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#5CB000' }}>
              Félicitations !
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8" style={{ color: '#094386' }}>
              Vous êtes potentiellement éligible aux aides de l'État pour votre installation.
            </p>
            <Button
              className="px-8 md:px-10 py-5 md:py-6 text-lg md:text-xl font-bold shadow-lg"
              style={{
                backgroundColor: '#5CB000',
                borderRadius: '10px',
                fontFamily: 'Rubik, sans-serif'
              }}
            >
              Recevoir mon devis gratuit
            </Button>
            <p className="text-xs md:text-sm mt-3 md:mt-4 text-gray-600">
              Un conseiller vous contactera dans les 24h
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}