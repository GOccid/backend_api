import { Router } from "express";
import * as controllers from "../controllers/anotherRickMort.js"

const router = Router();

router.get("/", controllers.getrMorts);
router.get("/:id", controllers.getrMort);
router.post("/", controllers.createrMort);
router.put("/:id", controllers.updaterMort);
router.delete("/:id", controllers.deleterMort);

export default router;