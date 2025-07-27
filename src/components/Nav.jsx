import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Vérifie les préférences système et le localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Toggle menu mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  // Applique le dark mode au document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-5 md:top-20 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-5xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-md z-50 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img 
        src="/logo.svg" 
        alt="logo" 
        className="h-10 w-auto dark:invert dark:brightness-0 dark:contrast-100"
        />

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 text-[#231f20] dark:text-gray-200 font-medium text-xl">
          <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
            <a href="#faq">FAQ</a>
          </li>
          <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right side - Dark mode toggle + Get Started */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Get Started desktop */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-[#115f5c] to-[#12a387] dark:from-[#0d4d4a] dark:to-[#0e8c7a] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-1 w-full bg-[#115f5c] dark:bg-[#a0f0dd] rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#115f5c] dark:bg-[#a0f0dd] rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#115f5c] dark:bg-[#a0f0dd] rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile compact */}
      <div
        className={`absolute top-full right-6 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-start py-2 space-y-3 text-base font-semibold text-[#115f5c] dark:text-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        } md:hidden z-40`}
      >
        <a href="#home" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
          Home
        </a>
        <a href="#about" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
          About
        </a>
        <a href="#services" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
          Services
        </a>
        <a href="#faq" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
          FAQ
        </a>
        <a href="#contact" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
          Contact
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="bg-gradient-to-r from-[#115f5c] to-[#12a387] dark:from-[#0d4d4a] dark:to-[#0e8c7a] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white shadow-lg hover:scale-105 transition-all mx-4"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Nav;