import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { fetchCategories } from "../utils/api.js";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  
  // Image loading states
  const [aboutImageLoaded, setAboutImageLoaded] = useState(false);
  
  // handle scroll requests coming from Navbar navigation (navigate("/", { state: { scrollTo } }))
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const targetId = location.state.scrollTo;

    // small helper: wait for element to exist (in case of slower render)
    const waitForElAndScroll = (id, maxWait = 1000) => {
      const start = Date.now();
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -64; // match Navbar offset
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          // clear state so it doesn't scroll again on future navigations
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }
        if (Date.now() - start < maxWait) {
          requestAnimationFrame(tryScroll);
        } else {
          // final attempt
          const el2 = document.getElementById(id);
          if (el2) {
            const yOffset = -64;
            const y = el2.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      };
      tryScroll();
    };

    waitForElAndScroll(targetId, 1200);
  }, [location]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (e) {
        setErr(e.message || "Failed to load categories");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section id="categories" className="relative py-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
              <span className="text-purple-300 text-xs font-light tracking-[0.2em] uppercase">
                Our Services
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Design <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight">Categories</span>
            </h2>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-2 border-purple-300/20 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>
          )}
          
          {err && (
            <div className="text-center py-8">
              <p className="text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-4 py-2 inline-block">
                {err}
              </p>
            </div>
          )}

          {/* Categories Scroll Container */}
          <div 
            className="flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide touch-pan-x"
            style={{
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={(e) => {
              e.currentTarget.touchStartY = e.touches[0].clientY;
            }}
            onTouchMove={(e) => {
              const touchY = e.touches[0].clientY;
              const startY = e.currentTarget.touchStartY;
              const deltaY = Math.abs(touchY - startY);
              const deltaX = Math.abs(e.touches[0].clientX - (e.currentTarget.touchStartX || e.touches[0].clientX));
              
              if (deltaX > deltaY) {
                e.preventDefault();
              }
            }}
          >
            {categories.map((c) => (
              <CategoryCard key={c.id} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* About Image with sophisticated styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-300/20 backdrop-blur-sm min-h-[300px]">
                
                {/* Loading skeleton */}
                {!aboutImageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-purple-900/20 to-slate-800 animate-pulse rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" 
                         style={{ animation: 'shimmer 2s infinite' }} />
                  </div>
                )}
                
                <img 
                  src={`${import.meta.env.BASE_URL}hero-bg.png`} 
                  alt="About Me"
                  className={`mx-auto rounded-2xl object-cover transition-opacity duration-700 ${
                    aboutImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
                  loading="eager"
                  onLoad={() => setAboutImageLoaded(true)}
                  onError={() => {
                    console.log('Image failed to load');
                    setAboutImageLoaded(true);
                  }}
                />

                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-purple-400"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-pink-400"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-pink-400"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400"></div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              {/* Section label */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
                <span className="text-purple-300 text-xs font-light tracking-[0.2em] uppercase">
                  About Designer
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                About <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight">Me</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                I'm a luxury interior designer focused on creating functional, warm, and timeless spaces.
                My process blends meticulous planning with material sensitivity to achieve designs that age beautifully.
              </p>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500"
              >
                Get in touch
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
              <span className="text-purple-300 text-xs font-light tracking-[0.2em] uppercase">
                Get In Touch
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Let's <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight">Connect</span>
            </h2>
          </div>

          {/* Contact Card */}
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl p-8 lg:p-12 bg-slate-900/80 backdrop-blur-lg border border-purple-300/20">
              
              <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
                {/* Contact Info */}
                <div className="text-center lg:text-left space-y-4">
                  <h3 className="text-2xl font-light text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Email:</span>
                      <a href="mailto:shaimaaemad2020@gmail.com" className="text-purple-300 hover:text-pink-300 transition-colors duration-300">
                        shaimaaemad2020@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">Instagram:</span>
                      <a href="https://www.instagram.com/shaimaa_alathwary" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-pink-300 transition-colors duration-300">
                        @Shaimaa Al-athwary
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                  <a href="https://www.facebook.com/Shaimaa Al-athwary" target="_blank" rel="noopener noreferrer" 
                     className="group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <i className="fab fa-facebook-f text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"></i>
                  </a>
                  
                  <a href="https://www.instagram.com/shaimaa_alathwary" target="_blank" rel="noopener noreferrer" 
                     className="group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <i className="fab fa-instagram text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"></i>
                  </a>
                  
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <i className="fab fa-linkedin-in text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}