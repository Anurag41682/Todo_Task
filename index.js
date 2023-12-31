import express from "express";
import cors from "cors";
import addTask from "./routes/addTask.js";
import removeTask from "./routes/removeTask.js";
import getTask from "./routes/fetchData.js";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/", addTask);
app.use("/", removeTask);
app.use("/", getTask);
// server start
app.listen("3001", () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("Working Fine You can go on!!");
});
