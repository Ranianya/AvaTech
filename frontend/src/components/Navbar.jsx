// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-end items-center p-4 bg-[#F0EFEB] ">
      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-gray-800 font-medium hover:text-gray-900 transition-colors relative group border border-gray-800 rounded bg-[#CBA56B]" style={{ fontFamily: 'Macondo, cursive' }}>
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </button>
        <button className="px-4 py-2 text-gray-800 font-medium hover:text-gray-900 transition-colors relative group border border-gray-800 rounded bg-[#CBA56B]" style={{ fontFamily: 'Macondo, cursive' }}>
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </button>
        <button className="px-4 py-2 text-gray-800 font-medium hover:text-gray-900 transition-colors relative group border border-gray-800 rounded bg-[#CBA56B]" style={{ fontFamily: 'Macondo, cursive' }}>
          Agenda
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;