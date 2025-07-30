const DesktopMenu = ({ t }) => (
  <ul className="hidden md:flex gap-10 text-[#231f20] dark:text-gray-200 font-medium text-xl">
    <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
      <a href="#home">{t('nav.home')}</a>
    </li>
    <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
      <a href="#about">{t('nav.about')}</a>
    </li>
    <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
      <a href="#services">{t('nav.services')}</a>
    </li>
    <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
      <a href="#faq">{t('nav.faq')}</a>
    </li>
    <li className="hover:text-[#12a387] dark:hover:text-[#a0f0dd] transition-colors">
      <a href="#contact">{t('nav.contact')}</a>
    </li>
  </ul>
);

export default DesktopMenu;