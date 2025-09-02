-- -- Users (for admin login)
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(50) UNIQUE NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Categories (Interior, Kitchen, Living Room, etc.)
-- CREATE TABLE categories (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) UNIQUE NOT NULL
-- );

-- -- Projects (portfolio projects)
-- CREATE TABLE projects (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(200) NOT NULL,
--   description TEXT,
--   category_id INT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
-- );

-- -- Project Images (each project can have multiple images)
-- CREATE TABLE project_images (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   project_id INT,
--   image_url VARCHAR(255) NOT NULL,
--   FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
-- );
-- PostgreSQL Schema for Interior Portfolio Database

-- Users table (for admin login)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table (Interior, Kitchen, Living Room, etc.)
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  cover_image VARCHAR(255)
);

-- Projects table (portfolio projects)
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Project Images table (each project can have multiple images)
CREATE TABLE project_images (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  image_path VARCHAR(255) NOT NULL
);

-- Insert default admin user (password: admin123)
INSERT INTO users (username, password) VALUES 
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Insert sample categories
INSERT INTO categories (name) VALUES 
('Interior Design'),
('Kitchen'),
('Living Room'),
('Bedroom'),
('Bathroom'),
('Office');