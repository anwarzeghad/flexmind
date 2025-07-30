import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import Hamburger from "./Hamburger";
import { useTranslation } from 'react-i18next';

const NavMain = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const toggleLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

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
        <img 
          src="/logo.svg" 
          alt="logo" 
          className="h-10 w-auto dark:invert dark:brightness-0 dark:contrast-100"
        />

        <DesktopMenu t={t} />
        
        <div className="flex items-center gap-4">
          <LanguageToggle currentLang={lang} onChangeLanguage={toggleLanguage} />
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <a
            href="#formulaire"
            className="hidden md:inline-block bg-gradient-to-r from-[#115f5c] to-[#12a387] dark:from-[#0d4d4a] dark:to-[#0e8c7a] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            {t('nav.getStarted')}
          </a>
        </div>

        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} t={t} />
    </nav>
  );
};

export default NavMain;
