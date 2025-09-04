// client/src/components/CategoryCard.jsx
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const CategoryCard = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // helper: handle both relative and full URLs
  const toUrl = (p) => {
    if (!p) return null;
    return p.startsWith("http") ? p : `https://interior-portfolio-api.onrender.com${p}`;
  };

  return (
    <Link
      to={`/category/${item.id}`}
      ref={ref}
      className={`min-w-[400px] md:min-w-[450px] lg:min-w-[500px] group relative rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 transition-transform duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-2xl`}
    >
      {/* Image container with better responsiveness */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={item.cover_image ? toUrl(item.cover_image) : "/placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Smaller, more professional text */}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-lg md:text-xl font-medium group-hover:text-luxuryGold transition-colors duration-300">
          {item.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;