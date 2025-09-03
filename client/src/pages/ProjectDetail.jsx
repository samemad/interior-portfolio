// client/src/pages/ProjectDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

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
          className="w-full rounded-2xl shadow mb-6"
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
              className="w-full h-48 object-cover rounded-xl border border-white/10"
            />
          ))}
        </div>
      )}
    </section>
  );
}
