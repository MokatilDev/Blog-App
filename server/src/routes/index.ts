import { Router } from "express";
import registerRouter from "./auth/register";

const router = Router();

router.use("/api/v1/auth/register",registerRouter)

export default router;