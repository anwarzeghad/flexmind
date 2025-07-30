import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import { ShieldCheck, MonitorSmartphone, BarChart2 } from "lucide-react";

const iconComponents = {
  MonitorSmartphone,
  BarChart2,
  ShieldCheck,
};

const cardIcons = ["MonitorSmartphone", "BarChart2", "ShieldCheck"];

const About = () => {
  const { t, i18n } = useTranslation();
  const [typingKey, setTypingKey] = useState(0);
  const [showWho, setShowWho] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // Mise à jour du Typewriter quand on entre dans la vue
  useEffect(() => {
    if (isInView) {
      setTypingKey((prev) => prev + 1);
      setShowWho(false);
      const timer = setTimeout(() => setShowWho(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, i18n.language]);

  const cards = t("about.cards", { returnObjects: true }) || [];

  const typewriterWords = t("about.typewriterWords", { returnObjects: true });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-gradient-to-b from-white to-[#e9f9f8] dark:from-gray-900 dark:to-gray-800 py-20 md:py-28 px-6 sm:px-10 select-text"
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 md:mb-20 tracking-wide text-[#115f5c] dark:text-[#a0f0dd]">
        <span className="inline-block min-h-[4rem] md:min-h-[6rem]">
          <span className="text-[#115f5c] dark:text-[#a0f0dd]">
            {Array.isArray(typewriterWords) && (
              <Typewriter
                key={typingKey}
                words={typewriterWords}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            )}
          </span>
          {showWho && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#12a387] dark:text-[#12a387] glow-text ml-2 inline-block"
            >
              {t("about.whoAreWe")}
            </motion.span>
          )}
        </span>
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-14 md:gap-20 relative z-10">
        {Array.isArray(cards) &&
          cards.map((card, i) => {
            const IconComponent = iconComponents[cardIcons[i]];
            return (
              <motion.div
                key={`card-${i}`}
                initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`relative w-full max-w-[90%] md:max-w-[85%] p-5 sm:p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 text-left text-[#115f5c] dark:text-gray-200 ${
                  i % 2 === 0 ? "self-start" : "self-end"
                } before:content-[''] before:absolute before:top-4 before:w-3 before:h-3 before:bg-white dark:before:bg-gray-800 before:rotate-45 ${
                  i % 2 === 0
                    ? "before:left-[-0.4rem] before:border-l-2 dark:before:border-gray-700"
                    : "before:right-[-0.4rem] before:border-r-2 dark:before:border-gray-700"
                } before:rounded-sm border border-[#12a387]/40 dark:border-gray-700`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {IconComponent && (
                    <IconComponent
                      size={32}
                      className="text-[#12a387] dark:text-[#a0f0dd]"
                    />
                  )}
                  <h3 className="font-bold text-base sm:text-lg dark:text-[#a0f0dd]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default About;
