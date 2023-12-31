import initializeDatabase from "../dbInit.js";
const db = initializeDatabase();

const removeTask = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters

    const deleteQuery = "DELETE FROM table_name WHERE ID = ?";

    // Use parameterized query to prevent SQL injection
    db.run(deleteQuery, [id], function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting data");
      } else {
        res.status(204).send({ mssg: "Deleted successfully" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting data");
  }
};

export default removeTask;
