import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!category) return <p className="text-center py-10">Category not found.</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10">
      {/* Category Title */}
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <p className="text-white/60">No projects found under this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link to={`/projects/${p.id}`} key={p.id}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition">
                {p.images?.[0] && (
                  <img
                    src={p.images[0].path}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-white/60 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
