// test-db.js
const pool = require('./config/db');

async function testDatabase() {
  try {
    console.log('🔄 Testing database connection...');
    
    // Test basic connection
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    console.log('⏰ Current time:', result.rows[0].now);
    
    // Test if categories table exists and has data
    const categoriesResult = await pool.query('SELECT * FROM categories LIMIT 5');
    console.log('📋 Categories found:', categoriesResult.rows.length);
    console.log('📝 Sample categories:', categoriesResult.rows);
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await pool.end();
  }
}

testDatabase();