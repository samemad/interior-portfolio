// server/controllers/projectController.js
const Project = require("../models/projectModel");

async function getProjects(req, res) {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (err) {
    console.error("Error in getProjects:", err);
    res.status(500).json({ error: "Server error" });
  }
}

async function addProject(req, res) {
  try {
    const { title, description, category_id } = req.body;
    if (!title || !description || !category_id) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newProject = await Project.createProject(title, description, category_id);
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error in addProject:", err);
    res.status(500).json({ error: "Server error" });
  }
}

// ✅ ADD THIS MISSING METHOD
async function getProjectsByCategory(req, res) {
  try {
    const { id } = req.params;
    const projects = await Project.getProjectsByCategory(id);
    res.json(projects);
  } catch (err) {
    console.error("Error in getProjectsByCategory:", err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { getProjects, addProject, getProjectsByCategory };