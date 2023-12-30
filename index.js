import express from "express";
import addTask from "./routes/addTask.js";

const app = express();

// middlewares

app.use("/", addTask);

// server start
app.listen("3001", () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("Working Fine You can go On!!");
});
