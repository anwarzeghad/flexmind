import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How can we collaborate with you?",
    answer:
      "You can contact us via email at contact@flexmind.agency or through Instagram at @flexmind_agency. We will suggest a remote or in-person meeting, or connect via call or messaging based on your preference.",
  },
  {
    question: "What is the average project delivery time?",
    answer:
      "Project delivery time depends on its complexity. However, most of our projects are delivered within 1 to 4 weeks.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Our pricing depends on the complexity of your project and the size of your company. Final pricing is always discussed and agreed upon with our sales team.",
  },
  {
    question: "Do you offer after-sales support?",
    answer:
      "Yes, we provide full support after delivery. Our team will accompany you until you are completely satisfied with the final result.",
  },
  {
    question: "What if I don’t have any visual identity or logo?",
    answer:
      "No problem! Our creative department will work closely with you to craft a custom visual identity and branding that reflects your vision and goals.",
  },
];


const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const renderConversation = () => {
    const output = [
      <div key="intro" className="text-white mb-3">
        💬 Please click on the question you’re searching an answer for:
      </div>,
    ];

    faqData.forEach((item, index) => {
      output.push(
        <button
          key={`q-${index}`}
          onClick={() => toggleIndex(index)}
          className="self-end bg-[#dcf8c6] text-black px-4 py-2 mb-2 rounded-xl text-sm text-right hover:brightness-95 transition"
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
              className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm mb-3 w-fit max-w-[85%]"
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
    <div id="faq" className="py-20 mb-24 px-4">
      <h1
          className="text-3xl md:text-5xl font-extrabold text-[#115f5c] mb-24 tracking-wide leading-tight relative inline-block slide-fade-glow"
          style={{ letterSpacing: "0.05em" }}>
          Frequently asked  <span className="text-[#12a387] ml-2 glow-text">questions</span>
        </h1>

      <div
        className="rounded-xl shadow-2xl mx-auto select-text max-w-full"
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
          <span className="ml-4 font-semibold text-green-100 text-sm">
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
          className="text-green-200 text-xs px-6 py-1 select-none"
          style={{
            backgroundColor: 'rgba(0,0,0,0.12)',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          }}
        >
          flexmind-terminal v1.0 — Ready.
        </footer>
      </div>
    </div>
  );
};

export default Faq;
