// client/src/pages/AdminDashboard.jsx
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "/admin";
    return null;
  }

  // helper to produce full URL (works if backend returns "/uploads/..." or full "http...")
  const toUrl = (p) => {
    if (!p) return null;
    return p.startsWith("http") ? p : `https://interior-portfolio-api.onrender.com${p}`;
  };

  // ===== Tabs =====
  const [activeTab, setActiveTab] = useState("home"); // 'home', 'categories', 'projects'

  // ===== Categories =====
  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState({ id: null, name: "", cover: null, existingCover: null });

  // ===== Projects =====
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    id: null,
    title: "",
    description: "",
    category_id: "",
    images: [], // new File[]
    existingImages: [], // [{ id, path }]
  });

  // ===== Fetch data =====
  const fetchCategories = async () => {
    try {
      const res = await fetch("https://interior-portfolio-api.onrender.com/api/categories");
      const data = await res.json();
      // normalize cover path if needed (keep relative "/uploads/..." or full URL)
      const normalized = data.map(c => ({
        ...c,
        cover_image: c.cover_image ? c.cover_image : null
      }));
      setCategories(normalized);
    } catch (err) {
      console.error("fetchCategories err", err);
    }
  };

  const fetchProjects = async () => {
  try {
    const res = await fetch("https://interior-portfolio-api.onrender.com/api/projects");
    const data = await res.json();

    const normalized = data.map(p => {
      // p.images currently is array of { id, path } (server now returns image_path as path)
      const imgs = Array.isArray(p.images)
        ? p.images.map(img => {
            if (!img) return null;
            if (typeof img === "string") {
              return { id: null, path: toUrl(img) };
            } else {
              // img may be { id, path } or { image_id, image_path }
              const id = img.id ?? img.image_id ?? null;
              const path = img.path ?? img.image_path ?? null;
              return { id, path: toUrl(path) };
            }
          }).filter(Boolean)
        : [];

      return {
        ...p,
        images: imgs
      };
    });

    setProjects(normalized);
  } catch (err) {
    console.error("fetchProjects err", err);
  }
};

  useEffect(() => {
    fetchCategories();
    fetchProjects();
  }, []);

  // ===== Category Handlers =====
  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", categoryForm.name);
      if (categoryForm.cover) formData.append("cover", categoryForm.cover);

      const url = categoryForm.id
        ? `https://interior-portfolio-api.onrender.com/api/categories/${categoryForm.id}`
        : "https://interior-portfolio-api.onrender.com/api/categories";

      const method = categoryForm.id ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) {
        const err = await res.json().catch(()=>({error:'failed'}));
        throw new Error(err.error || "Failed to save category");
      }

      setCategoryForm({ id: null, name: "", cover: null, existingCover: null });
      await fetchCategories();
      alert("Category saved");
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save category");
    }
  };

  const handleEditCategory = (c) => {
    // c.cover_image should be relative path like "/uploads/..." or null
    setCategoryForm({ id: c.id, name: c.name, cover: null, existingCover: c.cover_image ? c.cover_image : null });
    setActiveTab("categories");
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await fetch(`https://interior-portfolio-api.onrender.com/api/categories/${id}`, { method: "DELETE" });
      await fetchCategories();
    } catch (err) {
      console.error(err);
      alert("Failed to delete category");
    }
  };

  // ===== Project Handlers =====
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", projectForm.title);
      formData.append("description", projectForm.description);
      formData.append("category_id", projectForm.category_id);

      // append new files (if any)
      if (projectForm.images && projectForm.images.length > 0) {
        Array.from(projectForm.images).forEach(file => formData.append("images", file));
      }

      const url = projectForm.id
      ? `https://interior-portfolio-api.onrender.com/api/projects/${projectForm.id}`
        : "https://interior-portfolio-api.onrender.com/api/projects";
      const method = projectForm.id ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) {
        const err = await res.json().catch(()=>({error:'failed'}));
        throw new Error(err.error || "Failed to save project");
      }

      // reset form
      setProjectForm({ id: null, title: "", description: "", category_id: "", images: [], existingImages: [] });
      await fetchProjects();
      alert("Project saved");
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save project");
    }
  };

 const handleEditProject = (p) => {
  // p.images normalized to {id, path} by fetchProjects()
  const existing = Array.isArray(p.images) ? p.images.map(img => ({ id: img.id ?? null, path: img.path ?? toUrl(img.path) })) : [];
  setProjectForm({
    id: p.id,
    title: p.title || "",
    description: p.description || "",
    category_id: p.category_id || "",
    images: [], // new files
    existingImages: existing,
  });
  setActiveTab("projects");
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await fetch(`https://interior-portfolio-api.onrender.com/api/projects/${id}`
, { method: "DELETE" });
      await fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  // Delete a single existing image (calls backend if image id exists)
  const removeExistingProjectImage = async (img, projectId = projectForm.id) => {
  if (!window.confirm("Delete this image?")) return;

  try {
    // If we have an id, tell the server to delete DB row + file
    if (img.id) {
      const res = await fetch(`https://interior-portfolio-api.onrender.com/api/projects/image/${img.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Server failed to delete image");
    }

    // Remove from projectForm.existingImages safely
    setProjectForm(prev => ({
      ...prev,
      existingImages: prev.existingImages.filter(i => {
        if (i.id && img.id) return i.id !== img.id;
        return i.path !== img.path;
      })
    }));

    // Remove the image from the projects list (so the cards reflect the change)
    setProjects(prev =>
      prev.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          images: (p.images || []).filter(ip => {
            // ip could be object or string
            if (!ip) return false;
            if (typeof ip === "string") return toUrl(ip) !== toUrl(img.path);
            if (typeof ip === "object") return (ip.id ?? null) !== (img.id ?? null);
            return true;
          })
        };
      })
    );

  } catch (err) {
    console.error("removeExistingProjectImage error:", err);
    alert("Failed to delete image");
  }
};


  // file input change handlers
  const onCategoryFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setCategoryForm(prev => ({ ...prev, cover: file }));
  };

  const onProjectFilesChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setProjectForm(prev => ({ ...prev, images: files }));
  };

  // helpers for rendering first image safely
  const firstImagePath = (p) => {
    if (!p) return null;
    if (!p.images || p.images.length === 0) return null;
    const first = p.images[0];
    if (!first) return null;
    if (typeof first === "string") return toUrl(first);
    if (typeof first === "object") return first.path ?? toUrl(first);
    return null;
  };

  return (
    <div className="flex min-h-screen bg-luxuryBg text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-luxurySurface p-6 flex flex-col gap-4">
        <button onClick={() => setActiveTab("home")} className={`py-2 px-4 rounded-lg ${activeTab==="home" ? "bg-luxuryGold text-black" : ""}`}>Home</button>
        <button onClick={() => setActiveTab("categories")} className={`py-2 px-4 rounded-lg ${activeTab==="categories" ? "bg-luxuryGold text-black" : ""}`}>Categories</button>
        <button onClick={() => setActiveTab("projects")} className={`py-2 px-4 rounded-lg ${activeTab==="projects" ? "bg-luxuryGold text-black" : ""}`}>Projects</button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Home */}
        {activeTab === "home" && (
          <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Welcome Admin!</h1>
            <p className="text-lg text-white/70">Use the buttons on the left to manage Categories and Projects.</p>
          </div>
        )}

        {/* Categories */}
        {activeTab === "categories" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>

            {/* Form */}
            <form onSubmit={handleCategorySubmit} className="mb-6 flex flex-col gap-3">
              <input type="text" value={categoryForm.name} onChange={e=>setCategoryForm({...categoryForm, name:e.target.value})} placeholder="Category Name" className="px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"/>
              
              {/* show existing cover if editing and user hasn't chosen a new file */}
              {categoryForm.existingCover && !categoryForm.cover && (
                <img src={toUrl(categoryForm.existingCover)} alt="cover" className="w-48 h-32 object-cover rounded-lg"/>
              )}

              <input type="file" accept="image/*" onChange={onCategoryFileChange} className="text-white"/>
              {categoryForm.cover && <img src={URL.createObjectURL(categoryForm.cover)} alt="preview" className="w-48 h-32 object-cover rounded-lg"/>}

              <button className="bg-luxuryGold text-black px-4 py-2 rounded-lg">{categoryForm.id ? "Save Category" : "Add Category"}</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map(c => (
                <div key={c.id} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  {c.cover_image && <img src={toUrl(c.cover_image)} alt={c.name} className="w-full h-32 object-cover"/>}
                  <div className="p-4 flex justify-between items-center">
                    <span>{c.name}</span>
                    <div className="flex gap-2">
                      <button onClick={()=>handleEditCategory(c)} className="bg-blue-600 px-2 py-1 rounded-lg text-sm">Edit</button>
                      <button onClick={()=>handleDeleteCategory(c.id)} className="bg-red-600 px-2 py-1 rounded-lg text-sm">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>

            {/* Form */}
            <form onSubmit={handleProjectSubmit} className="mb-6 flex flex-col gap-3">
              <input type="text" value={projectForm.title} onChange={e=>setProjectForm({...projectForm, title:e.target.value})} placeholder="Project Title" className="px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"/>
              <textarea value={projectForm.description} onChange={e=>setProjectForm({...projectForm, description:e.target.value})} placeholder="Project Description" className="px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"/>
              <select value={projectForm.category_id} onChange={e=>setProjectForm({...projectForm, category_id:e.target.value})} className="px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white">
                <option value="">Select Category</option>
                {categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
              </select>

              {/* Existing Images */}
              {projectForm.existingImages.length > 0 && (
                <div className="flex gap-2 mb-2 flex-wrap">
                  {projectForm.existingImages.map((img) => (
                    <div key={img.id ?? img.path} className="relative">
                      <img src={img.path} alt="project" className="w-20 h-20 object-cover rounded-lg"/>
                      <button type="button" onClick={()=>removeExistingProjectImage(img)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs">×</button>
                    </div>
                  ))}
                </div>
              )}

              {/* New files */}
              <input type="file" accept="image/*" multiple onChange={onProjectFilesChange} className="text-white"/>
              {projectForm.images && projectForm.images.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {Array.from(projectForm.images).map((f, i) => (
                    <img key={i} src={URL.createObjectURL(f)} alt={`new-${i}`} className="w-20 h-20 object-cover rounded-lg" />
                  ))}
                </div>
              )}

              <button className="bg-luxuryGold text-black px-4 py-2 rounded-lg">{projectForm.id ? "Save Project" : "Add Project"}</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(p => (
                <div key={p.id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  {firstImagePath(p) && <img src={firstImagePath(p)} alt={p.title} className="w-full h-48 object-cover"/>}
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3>{p.title}</h3>
                      <p className="text-white/60">{p.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditProject(p)} className="bg-blue-600 px-2 py-1 rounded-lg text-sm">Edit</button>
                      <button onClick={() => handleDeleteProject(p.id)} className="bg-red-600 px-2 py-1 rounded-lg text-sm">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
