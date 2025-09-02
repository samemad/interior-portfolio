const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const { upload, uploadToCloudinary, deleteFromCloudinary } = require("../middleware/cloudinaryUpload");

// Helper function to extract Cloudinary public ID from URL
const getPublicIdFromUrl = (url) => {
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  return `interior-portfolio/${filename.split('.')[0]}`;
};

// ===== GET all projects with category + images =====
router.get("/", async (req, res) => {
  try {
    const query = `
      SELECT p.id AS project_id, p.title, p.description, p.category_id, c.name AS category,
             i.id AS image_id, i.image_path
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN project_images i ON p.id = i.project_id
      ORDER BY p.created_at DESC
    `;

    const result = await pool.query(query);
    const rows = result.rows;

    const projects = {};
    rows.forEach(row => {
      if (!projects[row.project_id]) {
        projects[row.project_id] = {
          id: row.project_id,
          title: row.title,
          description: row.description,
          category_id: row.category_id,
          category: row.category,
          images: [],
        };
      }
      if (row.image_path) {
        projects[row.project_id].images.push({
          id: row.image_id,
          path: row.image_path, // Now this will be Cloudinary URL
        });
      }
    });

    res.json(Object.values(projects));
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== GET projects by category =====
router.get("/category/:id", async (req, res) => {
  try {
    const query = `
      SELECT p.id AS project_id, p.title, p.description, p.category_id, c.name AS category,
             i.id AS image_id, i.image_path
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN project_images i ON p.id = i.project_id
      WHERE p.category_id = $1
      ORDER BY p.created_at DESC
    `;

    const result = await pool.query(query, [req.params.id]);
    const rows = result.rows;

    const projects = {};
    rows.forEach(row => {
      if (!projects[row.project_id]) {
        projects[row.project_id] = {
          id: row.project_id,
          title: row.title,
          description: row.description,
          category_id: row.category_id,
          category: row.category,
          images: [],
        };
      }
      if (row.image_path) {
        projects[row.project_id].images.push({
          id: row.image_id,
          path: row.image_path,
        });
      }
    });

    res.json(Object.values(projects));
  } catch (err) {
    console.error("Error fetching projects by category:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== ADD PROJECT with Cloudinary =====
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const { title, description, category_id } = req.body;
    if (!title || !description || !category_id) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Insert project first
    const projectQuery = `
      INSERT INTO projects (title, description, category_id, created_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING id
    `;
    const projectResult = await pool.query(projectQuery, [title, description, category_id]);
    const projectId = projectResult.rows[0].id;

    const uploadedImages = [];

    // Upload images to Cloudinary if any
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        try {
          const cloudinaryResult = await uploadToCloudinary(file.buffer, 'interior-portfolio/projects');
          
          // Insert image URL into database
          const imageQuery = `INSERT INTO project_images (project_id, image_path) VALUES ($1, $2) RETURNING id`;
          const imageResult = await pool.query(imageQuery, [projectId, cloudinaryResult.secure_url]);
          
          uploadedImages.push({
            id: imageResult.rows[0].id,
            path: cloudinaryResult.secure_url,
          });
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
        }
      }
    }

    const newProject = {
      id: projectId,
      title,
      description,
      category_id: parseInt(category_id),
      images: uploadedImages,
    };

    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error creating project:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== GET single project by id =====
router.get("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;

    const query = `
      SELECT p.id AS project_id, p.title, p.description, p.category_id, c.name AS category,
             i.id AS image_id, i.image_path
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN project_images i ON p.id = i.project_id
      WHERE p.id = $1
    `;

    const result = await pool.query(query, [projectId]);
    const rows = result.rows;

    if (rows.length === 0) return res.status(404).json({ error: "Project not found" });

    const project = { images: [] };
    rows.forEach(row => {
      project.id = row.project_id;
      project.title = row.title;
      project.description = row.description;
      project.category_id = row.category_id;
      project.category = row.category;
      if (row.image_path) {
        project.images.push({
          id: row.image_id,
          path: row.image_path,
        });
      }
    });

    res.json(project);
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== UPDATE PROJECT =====
router.put("/:id", upload.array("images", 10), async (req, res) => {
  try {
    const projectId = req.params.id;
    const { title, description, category_id } = req.body;

    if (!title || !description || !category_id) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Update project details
    const updateQuery = `UPDATE projects SET title=$1, description=$2, category_id=$3 WHERE id=$4`;
    await pool.query(updateQuery, [title, description, category_id, projectId]);

    // Upload new images if any
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        try {
          const cloudinaryResult = await uploadToCloudinary(file.buffer, 'interior-portfolio/projects');
          
          const imageQuery = `INSERT INTO project_images (project_id, image_path) VALUES ($1, $2)`;
          await pool.query(imageQuery, [projectId, cloudinaryResult.secure_url]);
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
        }
      }
    }

    // Return updated project
    const query = `
      SELECT p.id AS project_id, p.title, p.description, p.category_id, c.name AS category, 
             i.id AS image_id, i.image_path
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN project_images i ON p.id = i.project_id
      WHERE p.id = $1
    `;

    const result = await pool.query(query, [projectId]);
    const rows = result.rows;

    const project = { images: [] };
    rows.forEach(row => {
      project.id = row.project_id;
      project.title = row.title;
      project.description = row.description;
      project.category_id = row.category_id;
      project.category = row.category;
      if (row.image_path) {
        project.images.push({
          id: row.image_id,
          path: row.image_path,
        });
      }
    });

    res.json(project);
  } catch (err) {
    console.error("Error updating project:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== DELETE PROJECT =====
router.delete("/:id", async (req, res) => {
  try {
    // Get all image URLs for this project
    const imageResult = await pool.query("SELECT image_path FROM project_images WHERE project_id=$1", [req.params.id]);
    
    // Delete images from Cloudinary
    for (const row of imageResult.rows) {
      if (row.image_path && row.image_path.includes('cloudinary.com')) {
        try {
          const publicId = getPublicIdFromUrl(row.image_path);
          await deleteFromCloudinary(publicId);
        } catch (deleteError) {
          console.error('Error deleting from Cloudinary:', deleteError);
        }
      }
    }

    // Delete from database
    await pool.query("DELETE FROM project_images WHERE project_id=$1", [req.params.id]);
    await pool.query("DELETE FROM projects WHERE id=$1", [req.params.id]);

    res.json({ message: "Project deleted" });
  } catch (err) {
    console.error("Error deleting project:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ===== DELETE single image =====
router.delete("/image/:id", async (req, res) => {
  try {
    const imageId = req.params.id;

    // Get image URL
    const result = await pool.query("SELECT image_path FROM project_images WHERE id = $1", [imageId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Image not found" });
    }

    const imageUrl = result.rows[0].image_path;

    // Delete from Cloudinary if it's a Cloudinary URL
    if (imageUrl && imageUrl.includes('cloudinary.com')) {
      try {
        const publicId = getPublicIdFromUrl(imageUrl);
        await deleteFromCloudinary(publicId);
      } catch (deleteError) {
        console.error('Error deleting from Cloudinary:', deleteError);
      }
    }

    // Delete from database
    await pool.query("DELETE FROM project_images WHERE id = $1", [imageId]);

    res.json({ message: "Image deleted" });
  } catch (err) {
    console.error("Error deleting image:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;