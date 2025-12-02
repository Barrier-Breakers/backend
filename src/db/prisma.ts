import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Use DATABASE_URL for application (with connection pooling)
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Track prisma client init timestamp for cold-start analysis
export const prismaInitTimestamp = Date.now();

// Instantiate Prisma Client
const prisma = new PrismaClient({
	adapter,
	log:
		process.env.NODE_ENV === "development"
			? ["info", "warn", "error"]
			: ["warn", "error"],
}) as any;

// Validate that the generated client contains the expected model properties
if (!prisma || !prisma.proposicao) {
	console.error('[Prisma] Generated client does not expose `proposicao` model.');
	console.error('This likely means `prisma generate` was not executed before build/start.');
}

// Handle disconnection on process exit
process.on("SIGINT", async () => {
	await prisma.$disconnect();
	process.exit(0);
});

process.on("SIGTERM", async () => {
	await prisma.$disconnect();
	process.exit(0);
});

export default prisma;

// Also expose a helper to retrieve the init timestamp (for other modules/tests)
export const getPrismaInitTimestamp = () => prismaInitTimestamp;
