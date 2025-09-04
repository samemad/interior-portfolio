// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Preload the hero image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setHeroImageLoaded(true);
    img.onerror = () => {
      setImageError(true);
      setHeroImageLoaded(true); // Still show content even if image fails
    };
    img.src = `${import.meta.env.BASE_URL}hero-bg.jpg`;
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 sm:px-12 overflow-hidden">
      {/* Loading skeleton background */}
      {!heroImageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" 
               style={{ animation: 'shimmer 3s infinite' }} />
        </div>
      )}

      {/* Actual background image */}
      {heroImageLoaded && !imageError && (
        <div
          className="absolute inset-0 transition-opacity duration-1000 opacity-100"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Fallback gradient if image fails */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        heroImageLoaded ? 'bg-black/50' : 'bg-black/30'
      }`}></div>

      {/* Content - fade in after image loads */}
      <div className={`relative z-10 max-w-4xl transition-all duration-1000 ${
        heroImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'
      }`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-luxuryGold mb-4">
          Luxury Interior Design
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Award-winning interior designer crafting timeless offices, apartments,
          and hospitality spaces.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-luxuryGold text-black font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Projects
          </Link>
          <a
            href="#about"
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-full border border-luxuryGold text-luxuryGold font-semibold hover:bg-luxuryGold hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Optional: Loading indicator */}
      {!heroImageLoaded && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-luxuryGold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-luxuryGold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-luxuryGold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </section>
  );
}