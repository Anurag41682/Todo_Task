import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.resolve(__dirname, "..", "toDo.db");
const db = new sqlite3.Database(dbPath);

const fetchData = (req, res) => {
  const query = "SELECT * FROM table_name";

  db.all(query, (err, rows) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
};

export default fetchData;
