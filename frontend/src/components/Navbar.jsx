// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Avatech_logo from '../assets/Avatech_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const logoSizeClass = "w-24";
  const textOffsetClass = "pl-28";

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#nations', label: 'NATIONS' },
    { href: '#events', label: 'ABOUT' },
    { href: '#teaser', label: 'TEASER' },
    { href: '#languages', label: 'SKILLS' },
    { href: '#timeline', label: 'TIMELINE' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'CONTACT' },
  ];

  // Control navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN & past 100px → hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP → show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // Get navbar height for offset
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 100;
      
      // Calculate position
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const scrollPosition = elementTop;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-[calc(100%-32px)] grid grid-cols-3 items-center p-4 left-4 z-50 bg-[#D6BB89]/90 backdrop-blur-sm rounded-full border-2 border-[#7B1B1B]/30 transition-transform duration-300 ${
      isVisible ? 'top-4 translate-y-0' : '-translate-y-full'
    }`}>
      
      {/* Logo/Titre à gauche */}
      <div className="flex items-center justify-start relative"> 
        <button onClick={() => scrollToSection('#home')} className="flex items-center">
          <img 
            src={Avatech_logo} 
            alt="Avatech Logo" 
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${logoSizeClass} h-auto`} 
          />
          
          <div className={`flex items-center gap-2 ${textOffsetClass}`}>
            <div className="text-3xl font-bold text-[#7B1B1B] drop-shadow-md" style={{ fontFamily: 'Macondo, cursive' }}>
              AvaTech
            </div>
            <div className="text-xl text-[#7B1B1B] italic drop-shadow-md" style={{ fontFamily: 'Macondo, cursive' }}>
              the last codebender
            </div>
          </div>
        </button>
      </div>

      {/* Desktop Navigation Buttons - Centered */}
      <div className="hidden md:flex gap-3 items-center justify-center flex-wrap"> 
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href)}
            className="px-3 py-2 text-black font-medium hover:bg-black/20 transition-colors relative group border-2 border-black rounded-lg bg-transparent backdrop-blur-sm shadow-lg text-xs whitespace-nowrap"
            style={{ fontFamily: 'Macondo, cursive' }}
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center">
        <button
          className="flex flex-col space-y-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-[#7B1B1B]"></span>
          <span className="w-6 h-0.5 bg-[#7B1B1B]"></span>
          <span className="w-6 h-0.5 bg-[#7B1B1B]"></span>
        </button>
      </div>

      {/* Élément vide à droite pour équilibrer (desktop) */}
      <div className="hidden md:block"></div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#D6BB89]/95 backdrop-blur-lg border-2 border-[#7B1B1B]/30 rounded-2xl mt-2 py-4 shadow-xl">
          <div className="flex flex-col space-y-2 px-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-black font-medium hover:bg-black/20 transition-colors text-left border border-[#7B1B1B]/30 rounded-lg backdrop-blur-sm"
                style={{ fontFamily: 'Macondo, cursive' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;