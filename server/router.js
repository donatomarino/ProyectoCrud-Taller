// Jaime / 18-12-2024 / Rutas del EndPoint del servidor / 1.0.1
import { Router } from "express";
import { index, login, allItems, createTool, createRequest, allRequests } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login);
router.get("/all-items", allItems);
router.post("/create-tool", createTool);
router.post("/create-query", createRequest);
router.get("/list-queries", allRequests);

export default router