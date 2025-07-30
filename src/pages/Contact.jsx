import React from "react";
import { motion } from "framer-motion";
import { Instagram, Globe, Mail } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

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

  const year = new Date().getFullYear();

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
        <motion.div variants={item} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {t("contact.subtitle")}
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
                <Mail className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.email.title")}</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                {t("contact.email.text")}
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
                <Globe className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.website.title")}</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                {t("contact.website.text")}
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
                <Instagram className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.instagram.title")}</h3>
              <p className="text-[#a0f0dd] group-hover:text-white transition-colors duration-300 text-center">
                {t("contact.instagram.text")}
              </p>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Bas */}
        <motion.div
          variants={item}
          className="mt-20 pt-8 border-t border-white/20 dark:border-gray-700/50 text-center text-sm"
        >
          <p>{t("contact.footer", { year })}</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Contact;
