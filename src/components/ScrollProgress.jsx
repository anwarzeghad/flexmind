import React, { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "home", label: "", icon: <FaHome size={18} /> },
  { id: "about", label: "", icon: <FaInfoCircle size={18} /> },
  { id: "services", label: "", icon: <FaTools size={18} /> },
  { id: "contact", label: "", icon: <FaEnvelope size={18} /> },
];

const VerticalProgress = () => {
  const [activeSection, setActiveSection] = useState("");
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      for (let { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min((scrollTop / docHeight) * 100, 100);
      setProgressHeight(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="hidden md:flex fixed top-20 left-8 z-50 flex-col items-start">
      {/* Ligne de fond */}
      <div className="relative w-1 bg-gray-300 rounded-full h-[80vh]">
        {/* Ligne de progression */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#12a387] to-[#115f5c] rounded-full transition-all duration-300 ease-out"
          style={{ height: `${progressHeight}%` }}
        />
      </div>

      {/* Points / branches */}
      <div className="absolute top-0 left-0 w-8 h-[80vh] flex flex-col justify-between py-2">
        {sections.map(({ id, label, icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-3 cursor-pointer group focus:outline-none`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Cercle avec icône */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#12a387] border-[#12a387] shadow-lg shadow-[#12a387]/50 animate-pulse"
                      : "bg-white border-gray-400 group-hover:border-[#12a387]"
                  }`}
              >
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-[#12a387]"
                  }`}
                >
                  {icon}
                </span>
              </div>

              {/* Label */}
              <span
                className={`text-sm font-semibold transition-colors duration-300
                ${isActive ? "text-[#12a387]" : "text-gray-500 group-hover:text-[#12a387]"}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalProgress;
