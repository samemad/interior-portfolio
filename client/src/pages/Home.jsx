import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { fetchCategories } from "../utils/api.js";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
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
    <>
      <Hero />

      {/* Categories */}
     {/* Categories */}
<section id="categories" className="max-w-6xl mx-auto px-4 mt-16">
  <h2 className="font-display text-2xl mb-4">Categories</h2>

  {loading && <p>Loading categories…</p>}
  {err && <p className="text-red-400">{err}</p>}

 <div className="flex gap-6 overflow-x-auto py-4 px-2 mt-6 scrollbar-hide">
  {categories.map((c) => (
    <CategoryCard key={c.id} item={c} />
  ))}
</div>

</section>

          {/* About */}
{/* About Section */}
<section id="about" className="max-w-6xl mx-auto px-4 mt-20">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* About Image */}
    <div className="rounded-2xl overflow-hidden border border-white/5">
      <img
        src="/hero-bg.png"
        alt="About Me"
        className="w-full h-full object-cover aspect-[4/3] rounded-2xl"
      />
    </div>

    {/* About Text */}
    <div>
      <h2 className="font-display text-3xl text-white">About Me</h2>
      <p className="text-luxuryMuted mt-4 leading-relaxed">
        I'm a luxury interior designer focused on creating functional, warm, and timeless spaces.
        My process blends meticulous planning with material sensitivity to achieve designs that age beautifully.
      </p>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-block mt-6 px-5 py-2.5 rounded-full bg-luxuryGold text-black font-semibold shadow hover:bg-yellow-400 transition"
      >
        Get in touch
      </a>
    </div>
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="max-w-6xl mx-auto px-4 mt-20 mb-16">
  <div className="rounded-2xl p-8 bg-luxurySurface border border-white/5 flex flex-col md:flex-row items-center md:justify-between gap-6">
    {/* Contact Info */}
    <div className="text-center md:text-left">
      <h2 className="font-display text-2xl text-white mb-2">Contact</h2>
      <p className="text-luxuryMuted mb-2">
        Email: <a href="mailto:hello@ainteriors.com" className="hover:text-luxuryGold">hello@ainteriors.com</a>
      </p>
      <p className="text-luxuryMuted">
        Instagram: <a href="https://www.instagram.com/ainteriors" target="_blank" rel="noopener noreferrer" className="hover:text-luxuryGold">@ainteriors</a>
      </p>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 text-2xl">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxuryGold transition">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxuryGold transition">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxuryGold transition">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</section>




    </>
  );
}
