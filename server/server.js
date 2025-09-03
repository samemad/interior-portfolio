const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// CORS configuration - allow only your GitHub Pages origin
app.use(cors({
  origin: 'https://samemad.github.io',
  methods: ['GET', 'POST'], // Adjust methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add headers if required
}));

// Health check route
app.get("/", (req, res) => {
  res.json({ 
    message: "Interior Portfolio API is running!", 
    timestamp: new Date().toISOString()
  });
});

// Routes
const categoryRoutes = require("./routes/categoryRoutes");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});