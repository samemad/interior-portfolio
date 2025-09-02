// server/controllers/categoryController.js
const pool = require("../config/db");

async function getCategories(req, res) {
  try {
    console.log('🔄 Fetching categories...');
    const result = await pool.query("SELECT * FROM categories ORDER BY id");
    console.log('✅ Categories found:', result.rows.length);
    console.log('📋 First category:', result.rows[0]);
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error in getCategories:', err.message);
    console.error('Full error:', err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}

async function addCategory(req, res) {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const result = await pool.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error in addCategory:', err);
    res.status(500).json({ error: "Server error" });
  }
}

async function getCategoryById(req, res) {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error in getCategoryById:', err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { getCategories, addCategory, getCategoryById };