// Donato - 18/12/2024 - Implementación ruta 'all-items' - 'search' - 'incidencias'
// Donato - 19/12/2024 - Implementación ruta 'delete-item'

import { Router } from "express";
import { index, login, allItems, createTool, search, update, createIncidence, createRequest, deleteItem } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login)
router.get("/all-items", allItems)
router.post("/create-tool", createTool)
router.post("/search", search)
router.patch("/update", update)
router.post("/incidencias", createIncidence)
router.post("/solicitudes", createRequest)
router.patch("/delete-item", deleteItem)

export default router;