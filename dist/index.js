"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_js_1 = require("@supabase/supabase-js");
const swagger_1 = require("./utils/swagger");
const routes_1 = __importDefault(require("./routes"));
const loggingMiddleware_1 = require("./middlewares/loggingMiddleware");
const corsMiddleware_1 = require("./middlewares/corsMiddleware");
const prisma_1 = __importDefault(require("./db/prisma"));
dotenv_1.default.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
const app = (0, express_1.default)();
app.locals.supabase = supabase;
app.locals.prisma = prisma_1.default;
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
(0, corsMiddleware_1.setupCors)(app);
app.use(loggingMiddleware_1.loggingMiddleware);
app.use("/api", routes_1.default);
app.use("/docs", swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.specs));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Health check endpoint
app.get("/health", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Test database connection
        yield prisma_1.default.$queryRaw `SELECT 1`;
        res.json({
            status: "healthy",
            database: "connected",
            timestamp: new Date().toISOString(),
        });
    }
    catch (error) {
        res.status(503).json({
            status: "unhealthy",
            database: "disconnected",
            error: error instanceof Error ? error.message : "Unknown error",
            timestamp: new Date().toISOString(),
        });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Docs available at http://localhost:${port}/docs`);
    console.log(`Health check at http://localhost:${port}/health`);
});
