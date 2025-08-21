import {Router} from "express";
const router = Router();
import { registerUser } from "../controllers/user.js";

// Register new users:
router.post("/register", registerUser);

export default router;