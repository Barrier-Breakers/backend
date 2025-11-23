"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const db_1 = __importDefault(require("./db"));
const proposicoes_1 = __importDefault(require("./proposicoes"));
const denuncias_1 = __importDefault(require("./denuncias"));
const router = (0, express_1.Router)();
router.use("/auth", auth_1.default);
router.use("/db", db_1.default);
router.use("/proposicoes", proposicoes_1.default);
router.use("/denuncias", denuncias_1.default);
exports.default = router;
