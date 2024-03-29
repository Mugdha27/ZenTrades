import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, adminMiddleware, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router
  .route("/:id")
  .put(protect, adminMiddleware, updateUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
