// client/src/pages/ProjectDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://interior-portfolio-api.onrender.com/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (e) {
        console.error(e);
        setErr(e.message || "Failed to load project");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeydown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [lightboxOpen, currentImageIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    if (!project?.images) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    if (!project?.images) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 pt-20">
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
        <div className="max-w-5xl mx-auto px-4 pt-20">
          <div className="text-center py-20">
            <p className="text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-4 inline-block mb-6">
              {err}
            </p>
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 pt-20">
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-6">Project not found.</p>
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500"
            >
              Back to Projects
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
        <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="text-sm uppercase tracking-wide">Back to Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            {/* Category */}
            {project.category && (
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
                <span className="text-purple-300 text-sm font-light tracking-[0.2em] uppercase">
                  {project.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              {project.title}
            </h1>

            {/* Description */}
            {project.description && (
              <div className="max-w-3xl">
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            )}
          </div>

          {/* Main Image */}
          {project.images?.[0] && (
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img
                  src={project.images[0].path}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/20 transition-all duration-500"
                  onClick={() => openLightbox(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Click to view indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/20">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Images */}
          {project.images && project.images.length > 1 && (
            <div>
              <h2 className="text-2xl font-light text-white mb-6">
                More <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight">Views</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></div>
                    <div className="relative">
                      <img
                        src={img.path}
                        alt={`${project.title}-${i + 2}`}
                        className="w-full h-64 object-cover rounded-xl border border-purple-300/20 cursor-pointer hover:border-purple-300/40 hover:scale-105 transition-all duration-500"
                        onClick={() => openLightbox(i + 1)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightboxOpen && project.images && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl z-10 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 hover:border-purple-300/30 transition-all duration-300"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 text-white/70 text-sm z-10 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {/* Previous button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 hover:border-purple-300/30 transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}

          {/* Next button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 hover:border-purple-300/30 transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          )}

          {/* Main image */}
          <img
            src={project.images[currentImageIndex].path}
            alt={`${project.title}-${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Instructions text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <p className="hidden md:block">Use arrow keys or click buttons to navigate • ESC to close</p>
            <p className="md:hidden">Tap arrows to navigate • Tap outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}