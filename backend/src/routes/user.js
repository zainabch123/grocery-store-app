import {Router} from "express";
const router = Router();
import { registerUser, loginUser } from "../controllers/user.js";

// Register new users:
router.post("/register", registerUser);

// Login new users:
router.get("/login", loginUser);

export default router;