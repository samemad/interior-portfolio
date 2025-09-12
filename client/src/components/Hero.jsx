// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiquidEther from "./LiquidEther.jsx";

export default function Hero() {
  const [liquidEtherLoaded, setLiquidEtherLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLiquidEtherLoaded(true);
      setTimeout(() => setTextVisible(true), 300);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={15}
          cursorSize={160} // bigger cursor
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
          resolution={0.4}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-16 sm:py-20 lg:py-24">
          {/* Left Text Content */}
          <div
            className={`space-y-8 transition-all duration-1500 delay-300 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6">
              {/* Subtitle */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 sm:w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
                <span className="text-purple-300 text-sm sm:text-base font-light tracking-[0.25em] uppercase">
                  Award Winning Design
                </span>
              </div>

              {/* Headline */}
              <h1 className="space-y-2">
                <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight">
                  Luxury
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extralight text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text tracking-tight leading-tight">
                  Interior Design
                </div>
              </h1>

              {/* Description */}
              <div className="max-w-lg">
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-6">
                  Crafting bespoke environments where every detail tells a story
                  of elegance, functionality, and timeless sophistication.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-purple-200">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Offices
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                    Residences
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
                    Hospitality
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative text-white font-light tracking-wide text-sm sm:text-base uppercase">
                  View Projects
                </span>
              </Link>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="group px-8 py-4 border border-purple-300/30 rounded-sm hover:border-purple-300/60 transition-all duration-500 backdrop-blur-sm text-center"
              >
                <span className="text-purple-200 group-hover:text-white font-light tracking-wide text-sm sm:text-base uppercase transition-colors duration-300">
                  About Me
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`flex items-center justify-center transition-all duration-1500 delay-700 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[460px]">
              <div className="w-full h-full border border-purple-300/20 rounded-sm relative">
                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-5 h-5 sm:w-7 sm:h-7 border-l-2 border-t-2 border-purple-400"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 border-r-2 border-t-2 border-pink-400"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-7 sm:h-7 border-l-2 border-b-2 border-pink-400"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 border-r-2 border-b-2 border-purple-400"></div>

                {/* Inner content */}
                <div className="absolute inset-4 sm:inset-5 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md flex items-center justify-center">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-purple-200">
                      6+
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-gray-300 tracking-[0.15em] uppercase">
                      Years of Experience
                    </div>
                    <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
                    <div className="text-sm sm:text-base md:text-lg text-gray-400">
                      Crafting luxury spaces
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {!liquidEtherLoaded && (
        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
              <div className="absolute inset-0 border-2 border-purple-300/20 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="space-y-2">
              <div className="text-purple-200 text-sm sm:text-base font-light tracking-[0.25em] uppercase">
                Loading Experience
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      {textVisible && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-300/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
}
