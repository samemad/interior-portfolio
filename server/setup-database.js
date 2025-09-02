// server/setup-database.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://interior_portfolio_user:4G75IG2HKCGuVgnjtELVfXgDeUr0tK9V@dpg-d2rjltogjchc73alqua0-a.oregon-postgres.render.com/interior_portfolio',
  ssl: {
    rejectUnauthorized: false
  }
});

async function setupDatabase() {
  try {
    console.log('🔄 Connecting to PostgreSQL...');
    
    // Test connection
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL successfully!');

    console.log('🔄 Creating tables...');

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Users table created');

    // Create categories table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        cover_image VARCHAR(255)
      );
    `);
    console.log('✅ Categories table created');

    // Create projects table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Projects table created');

    // Create project_images table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS project_images (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        image_path VARCHAR(255) NOT NULL
      );
    `);
    console.log('✅ Project images table created');

    console.log('🔄 Inserting sample data...');

    // Insert default admin user (password: admin123)
    await pool.query(`
      INSERT INTO users (username, password) 
      VALUES ('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
      ON CONFLICT (username) DO NOTHING;
    `);
    console.log('✅ Default admin user created');

    // Insert sample categories
    const categories = [
      'Interior Design',
      'Kitchen',
      'Living Room',
      'Bedroom',
      'Bathroom',
      'Office'
    ];

    for (const category of categories) {
      await pool.query(`
        INSERT INTO categories (name) 
        VALUES ($1)
        ON CONFLICT (name) DO NOTHING;
      `, [category]);
    }
    console.log('✅ Sample categories inserted');

    console.log('🎉 Database setup completed successfully!');
    
    // Test query to show what we have
    const result = await pool.query('SELECT * FROM categories');
    console.log('📋 Categories in database:', result.rows);

  } catch (error) {
    console.error('❌ Database setup failed:', error);
  } finally {
    await pool.end();
  }
}

setupDatabase();