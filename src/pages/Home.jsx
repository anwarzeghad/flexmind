import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Terminal from "../components/terminal";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-b from-white to-[#e9f9f8]"
    >
      {/* Texte à gauche */}
      <section className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl mt-20 md:text-5xl font-extrabold leading-tight mb-20 tracking-wide text-[#115f5c]">
          <span style={{ whiteSpace: 'nowrap' }}>Your vision.</span>
          <br />
          <span
            className="text-[#12a387] inline-block mt-2"
            style={{ whiteSpace: 'nowrap' }}
          >
            <Typewriter
              words={["Our mission"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
          We help startups and small businesses transform their ideas into
          powerful software solutions that drive growth and efficiency.
        </p>
      </section>

      {/* Terminal à droite */}
      <section className="mt-12 mb-20 md:mb-0 md:mt-0 md:ml-20 flex justify-center w-full md:w-auto">
        <Terminal />
      </section>
    </div>
  );
};

export default Home;
