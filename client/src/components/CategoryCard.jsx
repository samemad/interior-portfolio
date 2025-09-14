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
      className={`min-w-[400px] md:min-w-[450px] lg:min-w-[500px] group relative rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105`}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
      
      {/* Main card container */}
      <div className="relative rounded-2xl overflow-hidden border border-purple-300/20 group-hover:border-purple-300/40 transition-all duration-500 bg-slate-900/50 backdrop-blur-sm">
        {/* Background image */}
        <div
          className="aspect-[16/10] bg-center bg-cover group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${item.cover_image ? toUrl(item.cover_image) : "/placeholder.jpg"})`,
          }}
        />
        
        {/* Sophisticated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Category indicator */}
          <div className="flex items-center space-x-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-xs text-purple-300 tracking-wide uppercase">Category</span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg md:text-xl font-light text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 mb-2">
            {item.name}
          </h3>
          
          {/* Hover indicator */}
          <div className="flex items-center space-x-2 text-sm text-purple-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Explore Collection</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-pink-400/0 group-hover:border-pink-400/60 transition-all duration-500"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-pink-400/0 group-hover:border-pink-400/60 transition-all duration-500"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500"></div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </Link>
  );
};

export default CategoryCard;