import { Router } from "express";
import authRouter from "./auth";
import dbRouter from "./db";
import proposicoesRouter from "./proposicoes";

const router = Router();

router.use("/auth", authRouter);
router.use("/db", dbRouter);
router.use("/proposicoes", proposicoesRouter);

export default router;
