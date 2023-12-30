import express from "express";
import addTask from "../controllers/addTask.js";
const router = express.Router();
router.post("/add", addTask);
export default router;
