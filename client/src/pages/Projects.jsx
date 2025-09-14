import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/api";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Separate component for each project card
function ProjectCard({ project }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <Link
      to={`/projects/${project.id}`}
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105`}
    >
      {/* Card background with gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></div>
      
      <div className="relative bg-slate-900/80 backdrop-blur-lg border border-purple-300/20 rounded-2xl p-4 hover:border-purple-300/40 transition-all duration-500">
        {/* Project Image */}
        {project.images?.[0] && (
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img
              src={project.images[0].path}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        
        {/* Project Info */}
        <div className="space-y-2">
          {/* Category */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-xs text-purple-300 tracking-wide uppercase">{project.category}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-light text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Hover indicator */}
          <div className="flex items-center space-x-2 text-xs text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
            <span>View Project</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProjects();
        setProjects(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        setErr(e.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="flex justify-center items-center py-20">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-2 border-purple-300/20 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="text-center py-20">
            <p className="text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-4 inline-block">
              {err}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"></div>
      
      <div className="relative">
        <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
              <span className="text-purple-300 text-sm font-light tracking-[0.2em] uppercase">
                Portfolio
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              Our <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight">Projects</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated collection of luxury interior designs, 
              each project telling its own story of elegance and sophistication.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Bottom decoration
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}