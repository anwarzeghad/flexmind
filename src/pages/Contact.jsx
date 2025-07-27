import React from "react";
import { motion } from "framer-motion";

const icons = {
  email: (
    <svg
      className="w-7 h-7 mr-4 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  website: (
    <svg
      className="w-7 h-7 mr-4 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  instagram: (
    <svg
      className="w-7 h-7 mr-4 text-[#a0f0dd] group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  ),
};

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-t from-[#12a387] to-[#115f5c] dark:from-[#0d4d4a] dark:to-[#093a38] text-white py-20 px-6 sm:px-10"
    >
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Titre principal */}
        <motion.div
          variants={item}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Let's <span className="text-[#a0f0dd] dark:text-[#a0f0dd]">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Ready to start your project? Contact us today for a free consultation.
          </motion.p>
        </motion.div>

        {/* Grille de contact */}
        <motion.div 
          variants={container}
          className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto"
        >
          {/* Email */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50"
          >
            <a
              href="mailto:contact@flexmind.agency"
              className="flex flex-col items-center group"
            >
              <div className="mb-6 p-4 bg-[#115f5c] dark:bg-[#0d4d4a] rounded-full">
                {icons.email}
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                contact@flexmind.agency
              </p>
            </a>
          </motion.div>

          {/* Website */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50"
          >
            <a
              href="https://www.flexmind.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="mb-6 p-4 bg-[#115f5c] dark:bg-[#0d4d4a] rounded-full">
                {icons.website}
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                www.flexmind.agency
              </p>
            </a>
          </motion.div>

          {/* Instagram */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50"
          >
            <a
              href="https://www.instagram.com/flexmind_agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="mb-6 p-4 bg-[#115f5c] dark:bg-[#0d4d4a] rounded-full">
                {icons.instagram}
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                @flexmind_agency
              </p>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Bas */}
        <motion.div
          variants={item}
          className="mt-20 pt-8 border-t border-white/20 dark:border-gray-700/50 text-center text-sm"
        >
          <p>© {new Date().getFullYear()} FlexMind Agency. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Contact;