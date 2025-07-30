const MobileMenu = ({ isOpen, toggleMenu, t}) => (
  <div
    className={`absolute top-full right-6 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-start py-2 space-y-3 text-base font-semibold text-[#115f5c] dark:text-gray-200 transition-all duration-300 ease-in-out ${
      isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
    } md:hidden z-40`}
  >
    <a href="#home" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
      {t('nav.home')}
    </a>
    <a href="#about" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
      {t('nav.about')}
    </a>
    <a href="#services" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
      {t('nav.services')}
    </a>
    <a href="#faq" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
       {t('nav.faq')}
    </a>
    <a href="#contact" onClick={toggleMenu} className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] px-4 w-full transition-colors">
      {t('nav.contact')}
    </a>
    <a
      href="#formulaire"
      onClick={toggleMenu}
      className="bg-gradient-to-r from-[#115f5c] to-[#12a387] dark:from-[#0d4d4a] dark:to-[#0e8c7a] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white shadow-lg hover:scale-105 transition-all mx-4"
    >
      {t('nav.getStarted')}
    </a>
  </div>
);

export default MobileMenu;