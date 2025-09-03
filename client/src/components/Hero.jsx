// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 sm:px-12"
      style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}

    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl">
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
            className="px-6 py-3 rounded-full bg-luxuryGold text-black font-semibold shadow-lg hover:bg-yellow-400 transition"
          >
            Explore Projects
          </Link>
          <a
            href="#about"
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-full border border-luxuryGold text-luxuryGold font-semibold hover:bg-luxuryGold hover:text-black transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
