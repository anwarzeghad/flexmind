import React from "react";

const icons = {
  email: (
    <svg
      className="w-6 h-6 mr-3 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16v16H4z" stroke="none" />
      <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  website: (
    <svg
      className="w-6 h-6 mr-3 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  ),
  instagram: (
    <svg
      className="w-6 h-6 mr-3 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  ),
};

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-[#12a387] to-[#115f5c] text-white py-16 px-8 select-text">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
        {/* Section Contact Info */}
        <div
          className="text-center md:text-left animate-slide-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-3xl font-extrabold mb-4 tracking-wider">
            Contact Us
          </h2>
          <p className="text-lg font-light max-w-sm leading-relaxed">
            Questions? Collaborations? Feel free to reach out!
          </p>
        </div>

        {/* Coordonnées */}
        <div
          className="space-y-8 text-center md:text-left animate-slide-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          {/* Email */}
          <a
            href="mailto:contact@flexmind.agency"
            className="flex items-center justify-center md:justify-start group cursor-pointer"
            aria-label="Send Email to contact@flexmind.agency"
          >
            {icons.email}
            <span className="text-lg font-semibold text-[#a0f0dd] group-hover:text-white transition-colors duration-300 underline">
              contact@flexmind.agency
            </span>
          </a>

          {/* Website */}
          <a
            href="https://www.flexmind.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start group cursor-pointer"
            aria-label="Visit www.flexmind.agency"
          >
            {icons.website}
            <span className="text-lg font-semibold text-[#a0f0dd] group-hover:text-white transition-colors duration-300 underline">
              www.flexmind.agency
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flexmind_agency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start group cursor-pointer"
            aria-label="Visit Instagram flexmind_agency">
            {icons.instagram}
            <span className="text-lg font-semibold text-[#a0f0dd] group-hover:text-white transition-colors duration-300 underline">
              @flexmind_agency
            </span>
          </a>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-16 border-t border-white/20 pt-6 text-center text-sm font-light text-white/80 animate-fade-in">
        © {new Date().getFullYear()} FlexMind Agency — All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
