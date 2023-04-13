import { Router } from "express";
import rickmortroutes from "./rickmort.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/rickmort", rickmortroutes);


export default router;