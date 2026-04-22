const db = require('../lib/db');

console.log('Initializing database...');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS demos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT NOT NULL
        )
    `);
});

console.log('Database initialized successfully');
const { getDatabase } = require('../lib/db');

async function initializeDb() {
  console.log('Initializing database...');

  try {
    await getDatabase();
    console.log('✓ Database initialized successfully');
    console.log('✓ Tables created');
    console.log('✓ Indexes created');
    console.log('\nDatabase setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error initializing database:', error);
    process.exit(1);
  }
}

initializeDb();
