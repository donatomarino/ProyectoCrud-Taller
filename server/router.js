import { Router } from "express";
import { index, login, allItems, search } from "./controller.js";

const router = Router();

router.get("/", index);
router.post("/login", login)
router.get("/all-items", allItems)
router.get("/search", search)

export default router