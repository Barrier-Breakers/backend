import cors from "cors";
import { Express } from "express";

export const setupCors = (app: Express): void => {
	const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000")
		.split(",")
		.map((origin) => origin.trim());

	const corsOptions = {
		origin: (
			origin: string | undefined,
			callback: (err: Error | null, allow?: boolean) => void,
		) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		optionsSuccessStatus: 200,
	};

	app.use(cors(corsOptions));
};
