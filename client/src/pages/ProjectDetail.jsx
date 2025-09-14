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
            <p className="text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-4 inline-block">
              {err}
            </p>
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
            <p className="text-gray-300 text-lg">Project not found.</p>
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
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              {project.title}
            </h1>

            {/* Category */}
            {project.category && (
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300 text-sm font-light tracking-wide uppercase">
                  {project.category}
                </span>
              </div>
            )}

            {/* Description */}
            {project.description && (
              <div className="max-w-3xl">
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            )}
          </div>

          {/* Main image */}
          {project.images?.[0] && (
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img
                  src={project.images[0].path}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/20 transition-all duration-500 border border-purple-300/20"
                  onClick={() => openLightbox(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )}

          {/* Extra images */}
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></div>
                  <div className="relative">
                    <img
                      src={img.path}
                      alt={`${project.title}-${i + 2}`}
                      className="w-full h-48 object-cover rounded-xl border border-purple-300/20 cursor-pointer hover:border-purple-300/40 hover:scale-105 transition-all duration-300"
                      onClick={() => openLightbox(i + 1)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Original Lightbox Modal - Only styled, functionality unchanged */}
      {lightboxOpen && project.images && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10 p-2 rounded-full hover:bg-purple-500/20 hover:border hover:border-purple-300/30 transition-all duration-300"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm z-10 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-300/20">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {/* Previous button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-purple-500/20 hover:border hover:border-purple-300/30 transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Next button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-purple-500/20 hover:border hover:border-purple-300/30 transition-all duration-300 z-10"
              aria-label="Next image"
            >
              ›
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-300/10">
            <p className="hidden md:block">Use arrow keys or click buttons to navigate • ESC to close</p>
            <p className="md:hidden">Tap arrows to navigate • Tap outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}