const pool = require("../config/db");

async function getAllProjects() {
  const [rows] = await pool.query(`
    SELECT p.id, p.title, p.description, c.name AS category, i.image_path
    FROM projects p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN project_images i ON p.id = i.project_id
    ORDER BY p.created_at DESC
  `);

  // ✅ Group images under each project
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
      projects[row.id].images.push(`http://localhost:5000${row.image_path}`);
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

module.exports = { getAllProjects, createProject };
