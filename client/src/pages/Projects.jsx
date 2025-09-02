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
      className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4 transition-transform duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-2xl`}
    >
      {project.images?.[0] && (
        <img
          src={project.images[0].path}
          alt={project.title}
          className="w-full h-48 object-cover rounded-2xl mb-4"
        />
      )}

      <div>
        <div className="text-xs text-white/60">{project.category}</div>
        <h3 className="font-medium mt-1">{project.title}</h3>
        <p className="text-sm text-white/60 mt-1 line-clamp-3">{project.description}</p>
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

  if (loading) return <p className="text-white/70 py-10">Loading projects…</p>;
  if (err) return <p className="text-red-400 py-10">{err}</p>;
  if (!projects.length) return <p className="text-white/60 py-10">No projects found.</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10">
      <h1 className="font-display text-3xl mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
