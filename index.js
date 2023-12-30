import express from "express";
import cors from "cors";
import addTask from "./routes/addTask.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/", addTask);

// server start
app.listen("3001", () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("Working Fine You can go on!!");
});
