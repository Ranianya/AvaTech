// components/Navbar.jsx (version avec grid)
import React from 'react';
import Avatech_logo from '../assets/Avatech_logo.png';

const Navbar = () => {
  const logoSizeClass = "w-24";
  // This padding value accounts for the w-24 (6rem) logo plus some gap
  const textOffsetClass = "pl-28"; 

  return (
    <nav className="w-[calc(100%-32px)] grid grid-cols-3 items-center p-4 absolute left-4 z-50 bg-[#D6BB89]/90 rounded-full mt-4">
      
      {/* Logo/Titre à gauche - Made RELATIVE */}
      <div className="flex items-center justify-start relative"> 
        
        {/* LOGO AVATECH - Positionné Absolument et Centré Verticalement */}
        <img 
          src={Avatech_logo} 
          alt="Avatech Logo" 
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${logoSizeClass} h-auto`} 
        />
        
        {/* Conteneur de Texte - Added PL-28 to push text past the logo */}
        <div className={`flex items-center gap-2 ${textOffsetClass}`}>
            <div className="text-3xl font-bold text-[#7B1B1B] drop-shadow-md" style={{ fontFamily: 'Macondo, cursive' }}>
              AvaTech
            </div>
            <div className="text-xl text-[#7B1B1B] italic drop-shadow-md" style={{ fontFamily: 'Macondo, cursive' }}>
              -CSE
            </div>
        </div>
        
      </div>

      {/* Navigation Buttons CENTRÉS (Justify-center for balance) */}
      <div className="flex gap-20 items-right justify-center"> 
        <button className="px-6 py-2 text-black font-medium hover:bg-black/20 transition-colors relative group border-2 border-black rounded-lg bg-transparent backdrop-blur-sm shadow-lg" style={{ fontFamily: 'Macondo, cursive' }}>
          HOME
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </button>
        <button className="px-6 py-2 text-black font-medium hover:bg-black/20 transition-colors relative group border-2 border-black rounded-lg bg-transparent backdrop-blur-sm shadow-lg" style={{ fontFamily: 'Macondo, cursive' }}>
          ABOUT
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </button>
        <button className="px-6 py-2 text-black font-medium hover:bg-black/20 transition-colors relative group border-2 border-black rounded-lg bg-transparent backdrop-blur-sm shadow-lg" style={{ fontFamily: 'Macondo, cursive' }}>
          FAQ
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </button>
        <button className="px-6 py-2 text-black font-medium hover:bg-black/20 transition-colors relative group border-2 border-black rounded-lg bg-transparent backdrop-blur-sm shadow-lg" style={{ fontFamily: 'Macondo, cursive' }}>
          CONTACT
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </button>
      </div>

      {/* Élément vide à droite pour équilibrer */}
      <div></div>
    </nav>
  );
};

export default Navbar;