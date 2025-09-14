import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Project card component with animations
function ProjectCard({ project }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <Link to={`/projects/${project.id}`} key={project.id}>
      <div
        ref={ref}
        className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          hover:scale-105`}
      >
        {/* Card background with gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></div>
        
        <div className="relative bg-slate-900/80 backdrop-blur-lg border border-purple-300/20 rounded-2xl hover:border-purple-300/40 transition-all duration-500">
          {/* Project Image */}
          {project.images?.[0] && (
            <div className="relative overflow-hidden rounded-t-2xl">
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
          <div className="p-4 space-y-2">
            {/* Title */}
            <h3 className="font-light text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            
            {/* Hover indicator */}
            <div className="flex items-center space-x-2 text-xs text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
              <span>View Project</span>
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const categoryRes = await fetch(
          `https://interior-portfolio-api.onrender.com/api/categories/${categoryId}`
        );
        const projectsRes = await fetch(
          `https://interior-portfolio-api.onrender.com/api/projects/category/${categoryId}`
        );

        const categoryData = await categoryRes.json();
        const projectsData = await projectsRes.json();

        setCategory(categoryData);
        setProjects(projectsData);
      } catch (err) {
        console.error("Error fetching category data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryData();
  }, [categoryId]);

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

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="text-center py-20">
            <p className="text-gray-300 text-lg mb-6">Category not found.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500"
            >
              Back to Home
            </Link>
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
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="text-sm uppercase tracking-wide">Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
              <span className="text-purple-300 text-sm font-light tracking-[0.2em] uppercase">
                Category
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              {category.name}
            </h1>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of {category.name.toLowerCase()} projects, 
              showcasing elegant design solutions and sophisticated craftsmanship.
            </p>
          </div>

          {/* Projects Grid */}
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-3">No Projects Found</h3>
                <p className="text-gray-400 mb-6">
                  No projects found under this category yet. Check back soon for new additions.
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Project Count */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3 bg-slate-900/50 backdrop-blur-sm border border-purple-300/20 rounded-full px-6 py-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">
                    {projects.length} Project{projects.length !== 1 ? 's' : ''} Found
                  </span>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </>
          )}

          {/* Bottom decoration */}
          {/* <div className="flex justify-center mt-16">
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