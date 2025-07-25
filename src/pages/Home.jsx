import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Terminal from "../components/terminal";

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex items-start justify-center pt-5 bg-white">
      <div className="flex flex-row items-center gap-16 max-w-7xl w-full">
        
        {/* Texte à gauche */}
        <section className="text-left max-w-md">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#115f5c]">Your vision.</span>{" "} <br />
            <span className="text-[#12a387]">
              <Typewriter
                words={["Our mission"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg md:text-3xl font-normal text-gray-600">
            We help startups and small businesses transform their ideas into
            powerful software solutions that drive growth and efficiency.
          </p>
        </section>

        {/* Terminal à droite */}
        <section className="flex flex-col items-center">
          <Terminal />
        </section>
      </div>
    </div>
  );
};

export default Home;
