import { Router } from "express";
import authRouter from "./auth";
import dbRouter from "./db";

const router = Router();

router.use("/auth", authRouter);
router.use("/db", dbRouter);

export default router;
