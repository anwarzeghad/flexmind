import React from "react";
import { FaLaptopCode, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} className="text-[#12a387]" />,
    title: "Modern Web Design",
    description:
      "We build fast, responsive and elegant websites to make your business stand out online with a modern, impactful look.",
  },
  {
    icon: <FaProjectDiagram size={40} className="text-[#12a387]" />,
    title: "Smart Systems",
    description:
      "Automate and simplify your business with custom systems for inventory, project management, and operations.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-[#12a387]" />,
    title: "Security & Support",
    description:
      "We deliver secure, scalable platforms backed by professional support — your digital partner for the future.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 p px-8 bg-gradient-to-b from-[#e9f9f8] to-white select-text"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#115f5c] mb-24 tracking-wide leading-tight relative inline-block slide-fade-glow"
          style={{ letterSpacing: "0.05em" }}
        >
          Our <span className="text-[#12a387] ml-2 glow-text">Services</span>
        </h1>

        {/* Services grid */}
        <div className="grid gap-16 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="w-full max-w-md mx-auto md:max-w-full bg-white/90 shadow-lg rounded-2xl p-10 border-l-8 border-[#12a387] transition-transform transform hover:-translate-y-4 hover:scale-[1.05] animate-zoom-fade text-left"
              style={{ animationDelay: `${(i + 1) * 180}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#115f5c] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed tracking-wide text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
