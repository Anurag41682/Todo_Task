import initializeDatabase from "../dbInit.js";

const db = initializeDatabase();

const addTask = async (req, res) => {
  const { id, content } = req.body;
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
