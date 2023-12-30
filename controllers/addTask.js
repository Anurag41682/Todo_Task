import initializeDatabase from "../dbInit.js";

const db = initializeDatabase();

const addTask = (req, res) => {
  const { id, content } = req.body; // Sanitize or validate input here
  db.run(
    "INSERT INTO table_name (ID, CONTENT) VALUES (?, ?)",
    [id, content],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.send("Item added successfully!");
      }
    }
  );
};

export default addTask;
