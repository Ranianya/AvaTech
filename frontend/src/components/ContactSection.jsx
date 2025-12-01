import React from 'react';
import CSE_logo from '../assets/CSE_logo.png'

const COLORS = {
  textDark: 'text-[#3b2f29]', 
  socialCircle: 'bg-[#4f3a2c]', 
  contactBarBg: 'bg-[#B39C70]', 
  cardValueText: 'text-[#4f3a2c]', 
};

const ContactSection = () => {
  const logoSizeClass = "w-40";
  return (
    <section 
      className={`contact-section p-4 ${COLORS.textDark} font-serif text-center max-w-4xl mx-auto`}
    >
      
      <h2 className="text-4xl font-extrabold mb-3 tracking-wide">
        CONTACT US
      </h2>

      <p className="text-sm mb-10 leading-relaxed">
        IF YOU HAVE ANY OTHER FEEL FREE CONTACT US AND WE GET
        <br />
        BACK TO YOU AS SOON AS POSSIBLE!
      </p>

      <div 
        className={`contact-info-bar flex justify-around items-center relative ${COLORS.contactBarBg} rounded-xl p-6 sm:p-8 shadow-xl`}
      >
        
        <div className="contact-card email-card text-left px-3 relative">
          
          <img 
            src={CSE_logo}
            alt="CSE Logo" 
            className={`${logoSizeClass} absolute left-1 transform -translate-x-1/2 top-[-6px] h-auto`}
          />
          
          <p className="card-title text-xs font-bold mb-1 text-gray-800 opacity-80 uppercase pt-20">
            OUR EMAIL ADRESS
          </p>
          <p className={`card-value text-lg sm:text-xl font-bold ${COLORS.cardValueText}`}>
            CSE@ESI.DZ
          </p>
        </div>
        
        <div className="contact-card phone-card text-left px-3">
          <p className="card-title text-xs font-bold mb-1 text-gray-800 opacity-80 uppercase pt-20">
            OUR PHONE NUMBER
          </p>
          <p className={`card-value text-lg sm:text-xl font-bold ${COLORS.cardValueText}`}>
            +213 78 23 51 931
          </p>
        </div>

        <div className="social-card ml-4 pt-20">
          <a 
            href="#" 
            className={`w-16 h-16 rounded-full ${COLORS.socialCircle} text-white flex items-center justify-center transition hover:opacity-90 `}
            aria-label="Facebook Link"
          >
            <span className="text-5xl italic font-black" style={{ lineHeight: '0' }}>f</span>
          </a>
        </div>
        
        <div className="social-card ml-2 pt-20">
          <a 
            href="#" 
            className={`w-16 h-16 rounded-full ${COLORS.socialCircle} text-white flex items-center justify-center transition hover:opacity-90`}
            aria-label="Instagram Link"
          >
            <span className="text-4xl font-extrabold" style={{ fontFamily: 'Georgia, serif' }}>O</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;