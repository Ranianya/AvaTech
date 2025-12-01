// components/Hero.jsx
import React from 'react';
import Hero_background from '../assets/Hero_background.png';


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Hero_background})` }}
      >
        {/* Overlay sombre pour mieux lire le texte */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content - AJOUT: pt-32 pour laisser de l'espace pour la navbar */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen pt-20">
        {/* Titre principal */}
        <div className='/50 px-5 py-7 rounded-lg shadow-2xl mb-8 border-2 border-[#7B1B1B]/20'>
            <h1 className="text-5xl md:text-7xl font-bold mb-1 font-macondo tracking-wide text-[#7B1B1B]">
                AVATECH : THE RISE OF THE FOUR NATIONS
            </h1>
        </div>
        {/* Sous-titre */}
        <p className="text-xl md:text-2xl mb-12 font-light tracking-wider text-black">
          AN ELEMENTAL TOURNAMENT BETWEEN THE FOUR NATIONS
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-3 bg-[#CBA56B] text-gray-900 rounded-lg font-semibold text-lg hover:bg-[#b8925a] transition-colors duration-200 shadow-lg">
            Learn more
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-[#CBA56B] text-black rounded-lg font-semibold text-lg hover:bg-[#CBA56B] hover:text-gray-900 transition-all duration-200">
            Join a nation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;