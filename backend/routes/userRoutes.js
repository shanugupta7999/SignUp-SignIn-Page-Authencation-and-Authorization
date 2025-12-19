import { Router } from "express";
import {signin, signup} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = Router();

// Signup route
router.post("/signup", signup);
// Signin route
router.post("/signin", signin);
// Protected route example
router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to your dashboard", user: req.user });
});

export default router; 