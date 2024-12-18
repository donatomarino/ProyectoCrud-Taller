import { Router } from "express";
import { index, login, allItems, createTool,search } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login)
router.get("/all-items", allItems)
router.post("/create-tool", createTool)
router.post("/search", search)

export default router