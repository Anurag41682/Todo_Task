import express from "express";
import addTask from "./routes/addTask.js";

const app = express();

// middlewares

app.use("/", addTask);
