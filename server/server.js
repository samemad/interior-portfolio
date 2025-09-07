const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ---------------- REQUEST LOGGING MIDDLEWARE -----------------
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Middleware
app.use(express.json());

// CORS configuration - allow only your GitHub Pages origin
app.use(cors({
  origin: 'https://samemad.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Add all methods
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Add this if you're sending cookies/auth headers
}));

// Health check route with performance info
app.get("/", (req, res) => {
  res.json({ 
    message: "Interior Portfolio API is running!", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    status: 'OK'
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes
const categoryRoutes = require("./routes/categoryRoutes");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/projects", projectRoutes);

// ---------------- ERROR HANDLING MIDDLEWARE -----------------
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  if (error.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'File too large! Max 5MB allowed.' });
  }
  
  if (error.message === 'Only JPEG, PNG, tif or WEBP images are allowed') {
    return res.status(400).json({ error: error.message });
  }
  
  res.status(500).json({ 
    error: 'Internal server error', 
    details: error.message 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});