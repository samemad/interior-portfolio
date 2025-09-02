// client/src/utils/api.js
const API_BASE = "http://localhost:5000/api";

// ✅ Get all categories
export async function fetchCategories() {
  const res = await fetch(`${API_BASE}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

// ✅ Get single category
export async function fetchCategory(id) {
  const res = await fetch(`${API_BASE}/categories/${id}`);
  if (!res.ok) throw new Error("Failed to fetch category");
  return res.json();
}

// ✅ Get projects by category
export async function fetchProjectsByCategory(id) {
  const res = await fetch(`${API_BASE}/projects/category/${id}`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

// ✅ Get all projects (ADD THIS FUNCTION)
export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}