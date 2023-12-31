import initializeDatabase from "../dbInit.js";
const db = initializeDatabase();

const editTask = (req, res) => {
  const { id } = req.params;
  const toUpdate = req.body.content;
  try {
    if (id && toUpdate) {
      const updateQuery = "UPDATE table_name SET CONTENT = ? WHERE ID = ?";

      // Use parameterized query to prevent SQL injection
      db.run(updateQuery, [toUpdate, id], function (err) {
        if (err) {
          console.error(err);
          res.status(500).send("Error updating data");
        } else {
          // console.log(`Rows affected: ${this.changes}`);
          res.status(200).send({ message: "Updated successfully" });
        }
      });
    } else {
      res.status(400).send("Bad Request: Both id and content are required");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating data");
  }
};
export default editTask;
