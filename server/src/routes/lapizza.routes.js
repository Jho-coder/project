import { Router } from "express";
import { getLista } from "../controllers/lapizza.controllers.js";

const router = Router();
router.get("/lista", getLista);

export default router;
