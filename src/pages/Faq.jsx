import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const [openIndexes, setOpenIndexes] = useState([]);

  // Récupération dynamique des questions dans le fichier JSON
  const faqData = t('faq.questions', { returnObjects: true });

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const renderConversation = () => {
    const output = [
      <div key="intro" className="text-white dark:text-green-200 mb-3">
        {t('faq.intro')}
      </div>,
    ];

    faqData.forEach((item, index) => {
      output.push(
        <button
          key={`q-${index}`}
          onClick={() => toggleIndex(index)}
          className="self-end bg-[#dcf8c6] dark:bg-green-100 text-black dark:text-gray-800 px-4 py-2 mb-2 rounded-xl text-sm text-right hover:brightness-95 transition"
        >
          {item.question}
        </button>
      );

      if (openIndexes.includes(index)) {
        output.push(
          <AnimatePresence key={`a-${index}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-100 text-gray-800 dark:text-gray-900 px-4 py-2 rounded-xl text-sm mb-3 w-fit max-w-[85%]"
            >
              {item.answer}
            </motion.div>
          </AnimatePresence>
        );
      }
    });

    return output;
  };

  return (
    <div id="faq" className="py-32 px-4 dark:bg-gray-900">
      <h1
        className="text-4xl md:text-5xl font-extrabold text-[#115f5c] dark:text-[#a0f0dd] mb-24 tracking-wide leading-tight relative inline-block slide-fade-glow"
        style={{ letterSpacing: '0.05em' }}
      >
        {t('faq.title1')}{' '}
        <span className="text-[#12a387] dark:text-[#12a387] ml-2 glow-text">
          {t('faq.title2')}
        </span>
      </h1>

      <div
        className="rounded-xl shadow-2xl mx-auto select-text max-w-full dark:shadow-lg dark:border dark:border-gray-700"
        style={{
          width: '700px',
          maxWidth: '100%',
          height: '520px',
          background:
            'linear-gradient(135deg, rgba(18,163,135,0.95) 0%, rgba(11,85,69,0.85) 100%)',
          fontFamily: "'Source Code Pro', monospace",
          color: '#a8f0c6',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Barre titre */}
        <header
          className="flex items-center space-x-3 px-4 py-2"
          style={{
            backgroundColor: 'rgba(0,0,0,0.15)',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        >
          <div className="flex space-x-2">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ff5f56' }}></span>
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ffbd2e' }}></span>
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#27c93f' }}></span>
          </div>
          <span className="ml-4 font-semibold text-green-100 dark:text-green-200 text-sm">
            flexmind-terminal — bash
          </span>
        </header>

        {/* Contenu du terminal */}
        <main
          className="flex flex-1 overflow-y-auto p-4 flex-col"
          style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          {renderConversation()}
        </main>

        {/* Footer */}
        <footer
          className="text-green-200 dark:text-green-300 text-xs px-6 py-1 select-none"
          style={{
            backgroundColor: 'rgba(0,0,0,0.12)',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          }}
        >
          {t('faq.footer')}
        </footer>
      </div>
    </div>
  );
};

export default Faq;
