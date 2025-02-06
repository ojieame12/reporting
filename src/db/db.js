const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

// Define the file path for db.json residing in the project root
const filePath = path.join(__dirname, '..', 'db.json');
const adapter = new FileSync(filePath);
const db = low(adapter);

async function initDB() {
  await db.read();
  db.defaults({ designers: [], manualEntries: [], integrations: [] })
    .write();
}

module.exports = { db, initDB };