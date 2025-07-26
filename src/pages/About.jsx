import React from "react";
import { ShieldCheck, MonitorSmartphone, BarChart2 } from "lucide-react"; // Icons

const About = () => {
  const cards = [
    {
      icon: <MonitorSmartphone size={40} className="text-[#12a387]" />,
      text: "We craft high-performance websites and systems with modern, stylish design and lightning speed to boost your digital presence.",
    },
    {
      icon: <BarChart2 size={40} className="text-[#12a387]" />,
      text: "FlexMind helps you manage stock, track your projects, and streamline operations with smart tools made for your business.",
    },
    {
      icon: <ShieldCheck size={40} className="text-[#12a387]" />,
      text: "Security meets scalability. We build reliable platforms that protect your data and grow with your vision.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-b from-white to-[#e9f9f8] select-text"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-3xl md:text-5xl font-extrabold text-[#115f5c] mb-24 tracking-wide leading-tight relative inline-block slide-fade-glow"
          style={{ letterSpacing: "0.1em" }}>
          More than just
          <span className="text-[#12a387] ml-3 glow-text">a tech project</span>
        </h1>

        {/* Cartes responsives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
            key={i}
            className="w-full max-w-md mx-auto md:max-w-full md:mx-0 bg-white/90 shadow-lg rounded-2xl p-10 border-l-8 border-[#12a387] transition-transform transform hover:-translate-y-4 hover:scale-[1.05] animate-zoom-fade flex flex-col items-start text-left"
            style={{ animationDelay: `${(i + 1) * 180}ms` }}>

              <div className="mb-4">{card.icon}</div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide font-sans">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
