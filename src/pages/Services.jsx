import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-[#12a387] dark:text-[#a0f0dd] text-3xl" />,
    title: "Modern Web Design",
    description: "We craft fast, responsive websites with elegant designs that convert visitors into customers."
  },
  {
    icon: <FaProjectDiagram className="text-[#12a387] dark:text-[#a0f0dd] text-3xl" />,
    title: "Smart Systems",
    description: "Custom business solutions to automate workflows and boost productivity."
  },
  {
    icon: <FaShieldAlt className="text-[#12a387] dark:text-[#a0f0dd] text-3xl" />,
    title: "Security & Support",
    description: "Enterprise-grade security with proactive monitoring and support."
  }
];

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -20]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section 
      id="services"
      ref={ref}
      className="relative py-32 px-6 sm:px-10 bg-gradient-to-b from-white to-[#e9f9f8] dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute left-10 top-1/3 w-64 h-64 rounded-full bg-[#12a387]/10 dark:bg-[#a0f0dd]/10 blur-3xl"
      />
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute right-10 bottom-1/4 w-72 h-72 rounded-full bg-[#115f5c]/10 dark:bg-[#0d4d4a]/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title with scroll animation */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#115f5c] dark:text-[#a0f0dd] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#115f5c]/80 dark:text-gray-300 max-w-2xl mx-auto">
            Solutions designed to <span className="text-[#12a387] dark:text-[#12a387] font-medium">elevate</span> your digital presence
          </p>
        </motion.div>

        {/* Services cards with scroll-triggered animations */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => {
            const yCard = useTransform(scrollYProgress, 
              [0, 0.2 + i * 0.1, 1], 
              [100, 0, -30]
            );
            const opacityCard = useTransform(scrollYProgress, 
              [0, 0.2 + i * 0.1, 0.9], 
              [0, 1, 0.7]
            );

            return (
              <motion.div
                key={i}
                style={{ y: yCard, opacity: opacityCard }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-[#12a387]/20 dark:border-[#12a387]/30 transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-[#12a387]/10 dark:bg-[#12a387]/20 flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#115f5c] dark:text-[#a0f0dd] mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-[#115f5c]/80 dark:text-gray-300 text-center md:text-xl">
                  {service.description}
                </p>

                <motion.div
                  style={{ 
                    scaleX: useTransform(scrollYProgress, [0.3 + i * 0.1, 0.6 + i * 0.1], [0, 1])
                  }}
                  className="h-0.5 bg-[#12a387]/40 dark:bg-[#12a387]/60 mt-6 origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;