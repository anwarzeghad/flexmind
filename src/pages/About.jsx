import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-8 bg-gradient-to-b from-white to-[#e9f9f8] select-text"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre : police plus fine, lettre espacées, légère ombre, tracking et line-height */}
        <h1
          className="text-3xl md:text-5xl font-extrabold text-[#115f5c] mb-24 tracking-wide leading-tight relative inline-block slide-fade-glow"
          style={{ letterSpacing: "0.1em" }}>
          Who are
          <span className="text-[#12a387] ml-3 glow-text"> we ?</span>
        </h1>

        {/* Cartes : fond légèrement translucide, arrondies, ombre douce, padding généreux */}
        <div className="grid gap-16 md:grid-cols-1">
          {[
            `FlexMind is a visionary tech collective built by passionate minds trained in leading institutions in France and Algeria. We champion a new ethos for system and web development: secure, efficient, and elegantly designed.`,
            `At the heart of our work is a commitment to robust system engineering, scalable web apps, and airtight cybersecurity. We turn complex technical challenges into seamless digital experiences.`,
            `We go beyond code. We create solutions that connect, protect, and perform — supporting businesses with powerful systems and secure platforms that scale.`,
          ].map((text, i) => (
            <div
              key={i}
              className={`bg-white/90 shadow-lg rounded-2xl p-10 border-l-8 border-[#12a387] transition-transform transform hover:-translate-y-4 hover:scale-[1.05] animate-zoom-fade`}
              style={{ animationDelay: `${(i + 1) * 180}ms` }}>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed tracking-wide font-sans">
                {i === 2 ? (
                  <>
                    We go beyond code. We create solutions that{" "}
                    <span className="font-semibold text-[#12a387]">connect</span>,{" "}
                    <span className="font-semibold text-[#12a387]">protect</span>, and{" "}
                    <span className="font-semibold text-[#12a387]">perform</span> — supporting businesses with powerful systems and secure platforms that scale.
                  </>
                ) : (
                  text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
