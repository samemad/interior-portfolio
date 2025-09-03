// server/models/categoryModel.js
const pool = require("../config/db");

async function getAllCategories() {
  const [rows] = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(id) {
  const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [id]);
  return rows[0];
}

// Accept optional cover_image (keeps backward compatibility)
async function createCategory(name, cover_image = null) {
  const [result] = await pool.query(
    "INSERT INTO categories (name, cover_image) VALUES (?, ?)",
    [name, cover_image]
  );
  return { id: result.insertId, name, cover_image };
}

// NEW: updateCategory
async function updateCategory(id, name, cover_image = null) {
  const [result] = await pool.query(
    "UPDATE categories SET name = ?, cover_image = ? WHERE id = ?",
    [name, cover_image, id]
  );

  // If no rows affected → not found
  if (result.affectedRows === 0) return null;

  return { id: parseInt(id, 10), name, cover_image };
}

// NEW: deleteCategory
async function deleteCategory(id) {
  const [result] = await pool.query("DELETE FROM categories WHERE id = ?", [id]);
  return result.affectedRows > 0; // true if deleted
}

module.exports = { 
  getAllCategories, 
  getCategoryById, 
  createCategory,
  updateCategory,
  deleteCategory
};
