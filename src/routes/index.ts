import { Router } from "express";
import authRouter from "./auth";
import dbRouter from "./db";
import proposicoesRouter from "./proposicoes";
import denunciasRouter from "./denuncias";

const router = Router();

router.use("/auth", authRouter);
router.use("/db", dbRouter);
router.use("/proposicoes", proposicoesRouter);
router.use("/denuncias", denunciasRouter);

export default router;
