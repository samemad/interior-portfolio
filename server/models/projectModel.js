// server/models/projectModel.js
const pool = require("../config/db");

async function getAllProjects() {
  const [rows] = await pool.query(`
    SELECT p.id, p.title, p.description, c.name AS category, i.id AS image_id, i.image_path
    FROM projects p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN project_images i ON p.id = i.project_id
    ORDER BY p.created_at DESC
  `);

  // Group images under each project
  const projects = {};
  rows.forEach(row => {
    if (!projects[row.id]) {
      projects[row.id] = {
        id: row.id,
        title: row.title,
        description: row.description,
        category: row.category,
        images: []
      };
    }
    if (row.image_path) {
      // If image_path is not a full URL, keep your existing localhost prefix behavior
      const url = row.image_path.startsWith("http") ? row.image_path : `http://localhost:5000${row.image_path}`;
      projects[row.id].images.push(url);
    }
  });

  return Object.values(projects);
}

async function createProject(title, description, categoryId) {
  const [result] = await pool.query(
    "INSERT INTO projects (title, description, category_id) VALUES (?, ?, ?)",
    [title, description, categoryId]
  );
  return { id: result.insertId, title, description, categoryId };
}

// NEW: getProjectsByCategory
async function getProjectsByCategory(categoryId) {
  const [rows] = await pool.query(`
    SELECT p.id AS project_id, p.title, p.description, c.name AS category, i.id AS image_id, i.image_path
    FROM projects p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN project_images i ON p.id = i.project_id
    WHERE p.category_id = ?
    ORDER BY p.created_at DESC
  `, [categoryId]);

  const projects = {};
  rows.forEach(row => {
    if (!projects[row.project_id]) {
      projects[row.project_id] = {
        id: row.project_id,
        title: row.title,
        description: row.description,
        category: row.category,
        images: []
      };
    }
    if (row.image_path) {
      const url = row.image_path.startsWith("http") ? row.image_path : `http://localhost:5000${row.image_path}`;
      projects[row.project_id].images.push(url);
    }
  });

  return Object.values(projects);
}

// NEW: getProjectById
async function getProjectById(id) {
  const [rows] = await pool.query(`
    SELECT p.id AS project_id, p.title, p.description, c.name AS category, i.id AS image_id, i.image_path
    FROM projects p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN project_images i ON p.id = i.project_id
    WHERE p.id = ?
  `, [id]);

  if (rows.length === 0) return null;

  const project = { images: [] };
  rows.forEach(row => {
    project.id = row.project_id;
    project.title = row.title;
    project.description = row.description;
    project.category = row.category;
    if (row.image_path) {
      const url = row.image_path.startsWith("http") ? row.image_path : `http://localhost:5000${row.image_path}`;
      project.images.push({ id: row.image_id, path: url });
    }
  });

  return project;
}

// NEW: updateProject
async function updateProject(id, title, description, categoryId) {
  const [result] = await pool.query(
    "UPDATE projects SET title = ?, description = ?, category_id = ? WHERE id = ?",
    [title, description, categoryId, id]
  );

  if (result.affectedRows === 0) return null;

  // Return the latest project structure (with images)
  return await getProjectById(id);
}

// NEW: deleteProject
async function deleteProject(id) {
  // Delete project_images rows first
  await pool.query("DELETE FROM project_images WHERE project_id = ?", [id]);

  // Delete project
  const [result] = await pool.query("DELETE FROM projects WHERE id = ?", [id]);
  return result.affectedRows > 0;
}

module.exports = { 
  getAllProjects, 
  createProject,
  getProjectsByCategory,
  getProjectById,
  updateProject,
  deleteProject
};
