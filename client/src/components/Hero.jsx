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
          cursorSize={120}
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen py-12 sm:py-16">
          {/* Left Text Content */}
          <div
            className={`space-y-6 transition-all duration-1500 delay-300 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-4">
              {/* Subtitle */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 sm:w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
                <span className="text-purple-300 text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase">
                  Award Winning Design
                </span>
              </div>

              {/* Headline */}
              <h1 className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight">
                  Luxury
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extralight text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text tracking-tight leading-tight">
                  Interior Design
                </div>
              </h1>

              {/* Description */}
              <div className="max-w-md">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                  Crafting bespoke environments where every detail tells a story
                  of elegance, functionality, and timeless sophistication.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-purple-200">
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    Offices
                  </span>
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
                    Residences
                  </span>
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-2"></div>
                    Hospitality
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link
                to="/projects"
                className="group relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative text-white font-light tracking-wide text-xs uppercase">
                  View Projects
                </span>
              </Link>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="group px-6 py-3 border border-purple-300/30 rounded-sm hover:border-purple-300/60 transition-all duration-500 backdrop-blur-sm text-center"
              >
                <span className="text-purple-200 group-hover:text-white font-light tracking-wide text-xs uppercase transition-colors duration-300">
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
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-60 md:h-68 lg:w-64 lg:h-72">
              <div className="w-full h-full border border-purple-300/20 rounded-sm relative">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-purple-400"></div>
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-pink-400"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-pink-400"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-purple-400"></div>

                {/* Inner content */}
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="text-4xl sm:text-5xl font-extralight text-purple-200">
                      6+
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-300 tracking-[0.15em] uppercase">
                      Years of Experience
                    </div>
                    <div className="w-12 sm:w-14 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
                    <div className="text-[11px] sm:text-xs text-gray-400">
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
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
              <div className="absolute inset-0 border-2 border-purple-300/20 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="space-y-2">
              <div className="text-purple-200 text-xs font-light tracking-[0.2em] uppercase">
                Loading Experience
              </div>
              <div className="flex justify-center space-x-1">
                <div
                  className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "200ms" }}
                ></div>
                <div
                  className="w-1 h-1 bg-purple-300 rounded-full animate-pulse"
                  style={{ animationDelay: "400ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      {textVisible && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-purple-300/40 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
}
