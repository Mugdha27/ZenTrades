import express from "express";
import { createTask, getAllTasks, getAllUserTasks, updateTask } from "../controllers/taksController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/create").post(protect, createTask)
router.route("/").post(protect, getAllUserTasks).get(protect, getAllTasks)
router.route("/update").post(protect, updateTask)

export default router;