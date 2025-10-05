// server/controllers/categoryController.js


const pool = require("../config/db");

async function getCategories(req, res) {
  try {
    console.log('🔄 Fetching categories...');
    
    // Check cache first
    const cached = await global.getCache('categories');
    if (cached) {
      console.log('⚡ Cache hit - categories');
      return res.json(cached);
    }
    
    // Fetch from database
    const result = await pool.query("SELECT * FROM categories ORDER BY id");
    console.log('✅ Categories found:', result.rows.length);
    
    // Cache forever
    await global.setCache('categories', result.rows);
    
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error in getCategories:', err.message);
    console.error('Full error:', err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}

// Keep all your other functions the same
async function addCategory(req, res) {
  // ... existing code
}

async function getCategoryById(req, res) {
  // ... existing code
}

async function updateCategory(req, res) {
  // ... existing code
}

async function deleteCategory(req, res) {
  // ... existing code
}

module.exports = { 
  getCategories, 
  addCategory, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
};

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

// ===== ADD THESE TO categoryController.js =====

async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    
    console.log('Updating category:', id, 'with name:', name);
    
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const result = await pool.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ error: "Database error" });
  }
}

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    
    console.log('Deleting category:', id);

    const result = await pool.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ error: "Database error" });
  }
}

// Update your module.exports:
module.exports = { 
  getCategories, 
  addCategory, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
};