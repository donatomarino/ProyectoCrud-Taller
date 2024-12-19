// Donato - 18/12/2024 - Implementación ruta 'all-items' - 'search' - 'incidencias'
// Donato - 19/12/2024 - Implementación ruta 'delete-item'
// Rafa - 19/12/2024 - He añadido la ruta /all-requests

import { Router } from "express";
import { index, login, allItems, createTool, search, update, createIncidence, createRequest, deleteItem, allRequests, allIncidences } from "./controller.js";

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
router.get("/all-requests", allRequests)
router.get("/all-incidences", allIncidences)

export default router;