import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { swaggerUi, specs } from "./utils/swagger";
import router from "./routes";
import { loggingMiddleware } from "./middlewares/loggingMiddleware";
import { setupCors } from "./middlewares/corsMiddleware";
import prisma from "./db/prisma";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.locals.supabase = supabase;
app.locals.prisma = prisma;
const port = process.env.PORT || 8080;


app.use(express.json());

setupCors(app);
app.use(loggingMiddleware);
app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Health check endpoint
app.get("/health", async (req, res) => {
	try {
		// Test database connection
		await prisma.$queryRaw`SELECT 1`;
		res.json({
			status: "healthy",
			database: "connected",
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		res.status(503).json({
			status: "unhealthy",
			database: "disconnected",
			error: error instanceof Error ? error.message : "Unknown error",
			timestamp: new Date().toISOString(),
		});
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
	console.log(`Docs available at http://localhost:${port}/docs`);
	console.log(`Health check at http://localhost:${port}/health`);
});
