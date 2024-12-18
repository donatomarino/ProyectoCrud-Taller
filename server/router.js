// Donato - 18/12/2024 - Implementación ruta 'all-items' - 'search' - 'incidencias'
// Jaime / 18-12-2024 / Rutas del EndPoint del servidor / 1.0.1

import { Router } from "express";
import { index, login, allItems, createTool, createRequest, allRequests, update, search, createIncidence } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login);
router.get("/all-items", allItems);
router.post("/create-tool", createTool);
router.post("/create-query", createRequest);
router.get("/list-queries", allRequests);
router.patch("/update", update);
router.post("/search", search)
//router.post("/update", update)
router.post("/incidencias", createIncidence)

export default router;