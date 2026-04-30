import initSqlJs, { Database as SqlJsDatabase } from 'sql.js';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'demos.db');

let db: SqlJsDatabase | null = null;
let SQL: Awaited<ReturnType<typeof initSqlJs>> | null = null;

async function initializeSQL() {
  if (!SQL) {
    SQL = await initSqlJs();
  }
  return SQL;
}

export async function getDatabase(): Promise<SqlJsDatabase> {
  if (!db) {
    const sql = await initializeSQL();

    if (fs.existsSync(dbPath)) {
      const buffer = fs.readFileSync(dbPath);
      db = new sql.Database(buffer);
    } else {
      db = new sql.Database();
    }

    initializeDatabase();
  }

  return db;
}

function initializeDatabase() {
  if (!db) return;

  db.run(`
    CREATE TABLE IF NOT EXISTS demos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      phone TEXT,
      message TEXT,
      projectOfInterest TEXT,
      preferredDemoDate TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try {
    db.run(`CREATE INDEX IF NOT EXISTS idx_email ON demos(email);`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_created_at ON demos(created_at);`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_status ON demos(status);`);
  } catch (error) {
    // Indexes may already exist in older database files.
    void error;
  }

  saveDatabase();
}

export interface DemoRequest {
  id?: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  projectOfInterest?: string;
  preferredDemoDate?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

function saveDatabase() {
  if (!db) return;

  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

export async function saveDemoRequest(data: DemoRequest): Promise<DemoRequest> {
  const database = await getDatabase();

  const stmt = database.prepare(`
    INSERT INTO demos (name, email, company, phone, message, projectOfInterest, preferredDemoDate)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  try {
    stmt.bind([
      data.name,
      data.email,
      data.company,
      data.phone || null,
      data.message || null,
      data.projectOfInterest || null,
      data.preferredDemoDate || null,
    ]);

    stmt.step();
    stmt.free();

    saveDatabase();

    const countStmt = database.prepare('SELECT last_insert_rowid() as id');
    countStmt.step();
    const result = countStmt.getAsObject();
    countStmt.free();

    return {
      ...data,
      id: (result as { id?: number })?.id || 0,
      created_at: new Date().toISOString(),
      status: 'new',
    };
  } catch (error) {
    console.error('Error saving demo request:', error);
    throw error;
  }
}

export async function getAllDemoRequests(
  limit = 100,
  offset = 0
): Promise<DemoRequest[]> {
  const database = await getDatabase();
  const stmt = database.prepare(`
    SELECT * FROM demos
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `);

  stmt.bind([limit, offset]);
  const results: DemoRequest[] = [];

  while (stmt.step()) {
    results.push(stmt.getAsObject() as unknown as DemoRequest);
  }

  stmt.free();
  return results;
}

export async function getDemoRequestById(
  id: number
): Promise<DemoRequest | undefined> {
  const database = await getDatabase();
  const stmt = database.prepare('SELECT * FROM demos WHERE id = ?');

  stmt.bind([id]);

  if (stmt.step()) {
    const result = stmt.getAsObject() as unknown as DemoRequest;
    stmt.free();
    return result;
  }

  stmt.free();
  return undefined;
}

export async function updateDemoStatus(
  id: number,
  status: string
): Promise<boolean> {
  const database = await getDatabase();
  const stmt = database.prepare(`
    UPDATE demos
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);

  try {
    stmt.bind([status, id]);
    stmt.step();
    stmt.free();

    saveDatabase();
    return true;
  } catch (error) {
    console.error('Error updating demo status:', error);
    return false;
  }
}

export function closeDatabaseConnection() {
  if (db) {
    saveDatabase();
    db.close();
    db = null;
  }
}
