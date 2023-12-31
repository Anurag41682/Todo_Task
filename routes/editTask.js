import express from "express";
import editTask from "../controllers/editTask.js";
const router = express.Router();

router.patch("/update/:id", editTask);
export default router;
