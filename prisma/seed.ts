import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Use DIRECT_URL for seed (no connection pooling)
const connectionString = `${process.env.DIRECT_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter }) as any;

async function main() {
	console.log("🌱 Starting database seed...");

	try {
		// Clean existing data (optional - uncomment if needed)
		// await prisma.comment.deleteMany({});
		// await prisma.post.deleteMany({});
		// await prisma.session.deleteMany({});
		// await prisma.user.deleteMany({});

		// Create sample users
		console.log("📝 Creating sample users...");
		const user1 = await prisma.user.upsert({
			where: { email: "admin@barrierbreakers.com" },
			update: {},
			create: {
				email: "admin@barrierbreakers.com",
				name: "Admin User",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
			},
		});

		const user2 = await prisma.user.upsert({
			where: { email: "user@barrierbreakers.com" },
			update: {},
			create: {
				email: "user@barrierbreakers.com",
				name: "Sample User",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
			},
		});

		console.log("✅ Users created:", { user1, user2 });

		// Create sample posts
		console.log("📝 Creating sample posts...");
		const post1 = await prisma.post.create({
			data: {
				title: "Welcome to Barrier Breakers",
				content: "This is the first post on our platform!",
				userId: user1.id,
			},
		});

		const post2 = await prisma.post.create({
			data: {
				title: "Getting Started Guide",
				content: "Learn how to use Barrier Breakers effectively.",
				userId: user2.id,
			},
		});

		console.log("✅ Posts created:", { post1, post2 });

		// Create sample comments
		console.log("📝 Creating sample comments...");
		const comment1 = await prisma.comment.create({
			data: {
				content: "Great start! Looking forward to more content.",
				userId: user2.id,
				postId: post1.id,
			},
		});

		console.log("✅ Comments created:", { comment1 });

		// Create audit log entry
		console.log("📝 Creating audit log...");
		await prisma.auditLog.create({
			data: {
				action: "SEED_DATABASE",
				entity: "DATABASE",
				entityId: "seed",
				changes: {
					users: 2,
					posts: 2,
					comments: 1,
				},
			},
		});

		console.log("✅ Audit log created");
		console.log("🎉 Database seed completed successfully!");
	} catch (error) {
		console.error("❌ Error during seed:", error);
		throw error;
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
