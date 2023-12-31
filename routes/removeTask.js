import express from "express";
import removeTask from "../controllers/removeTask.js";
const router = express.Router();
router.delete(`/remove/:id`, removeTask);
export default router;
