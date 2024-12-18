import { Router } from "express";
import { index, login, allItems, createTool } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login)
router.get("/all-items", allItems)
router.post("/create-tool", createTool)

export default router