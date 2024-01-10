import express from "express";
import cors from "cors";
import addTask from "./routes/addTask.js";
import removeTask from "./routes/removeTask.js";
import getTask from "./routes/fetchData.js";
import editTask from "./routes/editTask.js";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/", addTask);
app.use("/", removeTask);
app.use("/", getTask);
app.use("/", editTask);

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening to PORT : ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Working Fine You can go on <--------KingAnurag------->!!");
});
