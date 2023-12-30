import sqlite3 from "sqlite3";

const initializeDatabase = () => {
  const db = new sqlite3.Database("toDo.db");

  db.run(`
    CREATE TABLE IF NOT EXISTS table_name (
      CONTENT TEXT,
      ID TEXT    
    )
  `);

  return db;
};

export default initializeDatabase;
