// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

// Replace your scrollToSectionLocal function with this:

const scrollToSectionLocal = (id) => {
  const el = document.getElementById(id);
  if (!el) return false;
  
  // Calculate navbar height dynamically
  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.offsetHeight : 64;
  const additionalOffset = 20; // Extra spacing from top
  const NAV_Y_OFFSET = -(navbarHeight + additionalOffset);
  
  const y = el.getBoundingClientRect().top + window.pageYOffset + NAV_Y_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
};
  // Called by both desktop and mobile links
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);

    // If we're already on home, try scrolling immediately
    if (location.pathname === "/") {
      scrollToSectionLocal(sectionId);
      return;
    }

    // Otherwise navigate to home and pass the target section via location.state
    navigate("/", { state: { scrollTo: sectionId } });
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-luxuryBg/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Home */}
        <button
          onClick={handleHomeClick}
          className="font-display text-xl tracking-wide text-left"
          aria-label="Go to home"
        >
          <span className="text-luxuryGold">A.</span> Interiors
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <button
            onClick={handleHomeClick}
            className="hover:text-luxuryGold"
          >
            Home
          </button>

           <button onClick={() => handleNavClick("categories")} className="hover:text-luxuryGold">
            Categories
          </button>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-luxuryGold" : "hover:text-luxuryGold"}>
            Projects
          </NavLink>

         
          <button onClick={() => handleNavClick("about")} className="hover:text-luxuryGold">
            About
          </button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-luxuryGold">
            Contact
          </button>
        </nav>

        {/* CV (desktop) */}
        <a
          href="/cv.pdf"
          className="hidden md:inline text-sm border border-luxuryGold/30 hover:border-luxuryGold/60 px-3 py-1.5 rounded-full hover:shadow-glow transition"
          download
        >
          Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu - smooth slide / fade */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-luxuryBg/95 backdrop-blur border-t border-white/10`}
      >
        <nav className="flex flex-col items-center py-4 gap-4">
          <button
            onClick={() => {
              // Home logic for mobile
              setMenuOpen(false);
              handleHomeClick();
            }}
            className="hover:text-luxuryGold"
          >
            Home
          </button>

          <NavLink to="/projects" className="hover:text-luxuryGold" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>

          <button onClick={() => handleNavClick("categories")} className="hover:text-luxuryGold">
            Categories
          </button>
          <button onClick={() => handleNavClick("about")} className="hover:text-luxuryGold">
            About
          </button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-luxuryGold">
            Contact
          </button>

          <a
            href="/cv.pdf"
            className="text-sm border border-luxuryGold/30 hover:border-luxuryGold/60 px-3 py-1.5 rounded-full hover:shadow-glow transition"
            download
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
