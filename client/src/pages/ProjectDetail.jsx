// client/src/pages/ProjectDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return <p className="text-center py-10 text-white/70">Loading project…</p>;
  }

  if (err) {
    return <p className="text-center py-10 text-red-400">{err}</p>;
  }

  if (!project) {
    return <p className="text-center py-10 text-white/60">Project not found.</p>;
  }

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-10">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        {/* Category */}
        {project.category && (
          <p className="text-white/60 mb-6">{project.category}</p>
        )}

        {/* Description */}
        {project.description && (
          <p className="mb-6 leading-relaxed">{project.description}</p>
        )}

        {/* Main image */}
        {project.images?.[0] && (
          <img
            src={project.images[0].path}
            alt={project.title}
            className="w-full rounded-2xl shadow mb-6 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(0)}
          />
        )}

        {/* Extra images */}
        {project.images && project.images.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img.path}
                alt={`${project.title}-${i + 2}`}
                className="w-full h-48 object-cover rounded-xl border border-white/10 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(i + 1)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && project.images && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10 p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm z-10">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {/* Previous button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-white/10 transition z-10"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-white/10 transition z-10"
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center">
            <p className="hidden md:block">Use arrow keys or click buttons to navigate • ESC to close</p>
            <p className="md:hidden">Tap arrows to navigate • Tap outside to close</p>
          </div>
        </div>
      )}
    </>
  );
}