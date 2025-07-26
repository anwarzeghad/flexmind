import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-5 md:top-20 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-5xl bg-white/80 backdrop-blur-sm rounded-full shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="h-10 w-auto" />

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 text-[#231f20] font-medium text-xl">
          <li className="hover:text-[#12a387]"><a href="#home">Home</a></li>
          <li className="hover:text-[#12a387]"><a href="#about">About</a></li>
          <li className="hover:text-[#12a387]"><a href="#services">Services</a></li>
          <li className="hover:text-[#12a387]"><a href="#faq">FAQ</a></li>
          <li className="hover:text-[#12a387]"><a href="#contact">Contact</a></li>
        </ul>

        {/* Get Started desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-[#115f5c] to-[#12a387] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition"
        >
          Get Started
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-1 w-full bg-[#115f5c] rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#115f5c] rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#115f5c] rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile compact */}
      <div
        className={`absolute top-full right-6 mt-2 w-48 bg-white rounded-lg shadow-lg flex flex-col items-start py-2 space-y-3 text-base font-semibold text-[#115f5c] transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        } md:hidden z-40`}
      >
        <a href="#home" onClick={toggleMenu} className="hover:text-[#12a387] px-4 w-full">
          Home
        </a>
        <a href="#about" onClick={toggleMenu} className="hover:text-[#12a387] px-4 w-full">
          About
        </a>
        <a href="#services" onClick={toggleMenu} className="hover:text-[#12a387] px-4 w-full">
          Services
        </a>
         <a href="#services" onClick={toggleMenu} className="hover:text-[#12a387] px-4 w-full">
          FAQ
        </a>
        <a href="#contact" onClick={toggleMenu} className="hover:text-[#12a387] px-4 w-full">
          Contact
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="bg-gradient-to-r from-[#115f5c] to-[#12a387] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white shadow-lg hover:scale-105 transition mx-4"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Nav;
