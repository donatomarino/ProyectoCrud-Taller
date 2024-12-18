// Donato - 18/12/2024 - Implementación ruta 'all-items' - 'search'

import { Router } from "express";
import { index, login, allItems, createTool, search, update } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login)
router.get("/all-items", allItems)
router.post("/create-tool", createTool)
router.post("/search", search)
router.post("/update", update)

export default router;