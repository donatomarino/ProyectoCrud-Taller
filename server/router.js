import { Router } from "express";
import { index, register, login } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/register", register)
router.post("/login", login)

export default router