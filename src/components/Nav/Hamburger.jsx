const Hamburger = ({ isOpen, toggleMenu }) => (
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
);

export default Hamburger;