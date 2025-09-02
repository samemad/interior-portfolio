// server/models/categoryModel.js
const pool = require("../config/db");

async function getAllCategories() {
  const [rows] = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(id) {  // ✅ ADD THIS FUNCTION
  const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [id]);
  return rows[0];
}

async function createCategory(name) {
  const [result] = await pool.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name]
  );
  return { id: result.insertId, name };
}

module.exports = { getAllCategories, getCategoryById, createCategory }; // ✅ EXPORT IT