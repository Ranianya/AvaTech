import React, { useState } from 'react';
// Note: We don't need a separate CSS file anymore, as Tailwind classes are inline.

// 🎨 Define the color palette based on the image (approximations)
const COLORS = {
  // Light tan background for the whole container
  bgPrimary: 'bg-[#B39C70]', 
  // Dark brown/text color
  textDark: 'text-[#3b2f29]',
  // Medium brown for the question headers
  textMedium: 'text-[#392D27]', 
  // Thin separator line color
  separator: 'border-[#c9c1b9]', 
};

const faqData = [
  {
    id: 1,
    question: "WHO CAN PARTICIPATE ?",
    answer: "Participation is open to all university students who have a passion for cybersecurity and problem-solving, regardless of their academic major.",
    expanded: false,
  },
  {
    id: 2,
    question: "WHAT IS THE ROLE OF THE SECURITY SUB-TEAM ?",
    answer: "EVERY TEAM INCLUDES A SECURITY SUB-TEAM RESPONSIBLE FOR DEFENDING THEIR PROGRESS FROM SABOTAGE ATTEMPTS. MEANWHILE, MEMBERS OF THE 'STAFF' SIMULATE ATTACKS, INFILTRATE YOUR ATTEMPTS, AND FALSE LEADS. THIS ADDS A STRATEGIC LAYER OF CYBERSECURITY DEFENSE AND COUNTER MEASURES.",
    expanded: false,
  },
  {
    id: 3,
    question: "DO I NEED ADVANCED PROGRAMMING SKILLS ?",
    answer: "While basic programming knowledge is helpful for some challenges, the event focuses more on logic, networking, security fundamentals, and critical thinking, so advanced skills are not strictly required.",
    expanded: false,
  },
  {
    id: 4,
    question: "HOW CAN I REGISTER ?",
    answer: "Registration details will be available on the ESI website starting November 30th. Look for the 'AVATECH Registration' link and follow the steps to form your team.",
    expanded: false,
  },
  {
    id: 5,
    question: "HOW LONG DOES THE EVENT LAST ?",
    answer: "AVATECH RUNS FOR THREE DAYS, FROM DECEMBER 4TH TO DECEMBER 6TH, 2025, AT THE ÉCOLE NATIONALE SUPÉRIEURE D'INFORMATIQUE (ESI).",
    expanded: false,
  },
];

const FAQSection = () => {
  // État pour gérer l'expansion des questions
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (id) => {
    // Bascule l'état 'expanded' pour l'élément cliqué
    setFaqs(
      faqs.map((faq) =>
        faq.id === id 
          ? { ...faq, expanded: !faq.expanded } // Bascule l'élément cliqué
          : faq
      )
    );
  };

  return (
    <section className={`faq-section p-4 ${COLORS.textDark} font-serif max-w-4xl mx-auto`}>
      
      {/* En-tête de la section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 leading-snug tracking-wider text-center">
        GOT QUESTIONS?<br />WE'VE GOT ANSWERS!
      </h1>

      {/* Conteneur FAQ */}
      <div 
        className={`${COLORS.bgPrimary} rounded-xl p-8 sm:p-10 shadow-xl`}
      >
        {faqs.map((faq, index) => {
          // Afficher une bordure après chaque élément, sauf le dernier
          const showBorder = index < faqs.length - 1; 

          return (
            <div 
              key={faq.id} 
              className={`faq-item py-4 ${showBorder ? `${COLORS.separator} border-b` : ''}`}
            >
              
              {/* En-tête de la question (cliquable) */}
              <div 
                className={`flex justify-between items-center cursor-pointer font-bold text-lg transition duration-200 ${COLORS.textMedium}`}
                onClick={() => toggleFAQ(faq.id)} // Rendu cliquable pour tous
              >
                
                {/* Numéro & Texte de la Question */}
                <div className="flex text-left items-start">
                    <span className="faq-number mr-3 w-6">{faq.id}.</span>
                    <span className="faq-question-text uppercase">{faq.question}</span>
                </div>

                {/* Icône de Bascule (+/-) - Affichée pour tous */}
                <span className="faq-toggle-icon text-3xl ml-4 font-normal w-6 text-right">
                    {faq.expanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Contenu de la Réponse - Affiché si 'expanded' est true */}
              {faq.expanded && (
                <div 
                  className={`faq-answer text-left pt-3 pl-9 text-sm leading-relaxed ${COLORS.textDark}`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;