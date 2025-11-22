/**
 * Script para limpar a tabela de proposições
 * Use este script SOMENTE em caso de erro irrecuperável durante seed
 *
 * Uso:
 *   pnpm ts-node scripts/clean-proposicoes.ts
 */

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as readline from "readline";

dotenv.config();

const connectionString = `${process.env.DIRECT_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }) as any;

// Confirmation prompt
function askConfirmation(question: string): Promise<boolean> {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			rl.close();
			resolve(answer.toLowerCase() === "s" || answer.toLowerCase() === "y");
		});
	});
}

async function main() {
	try {
		const count = await prisma.proposicao.count();

		console.log(`\n⚠️  AVISO: Esta ação irá deletar ${count} proposições do banco!`);
		console.log(`\nIsso é útil APENAS em caso de erro durante seed e você quer recomeçar do zero.`);

		const confirmed = await askConfirmation(
			`\nDeseja realmente deletar todas as ${count} proposições? (s/n): `
		);

		if (!confirmed) {
			console.log("\n❌ Operação cancelada.");
			process.exit(0);
		}

		console.log("\n🗑️  Deletando proposições...");
		const deleted = await prisma.proposicao.deleteMany();

		console.log(`\n✅ Sucesso! ${deleted.count} proposições foram deletadas.`);
		console.log(`\n💡 Agora você pode executar:\n   pnpm run db:seed:proposicoes\n`);
	} catch (error) {
		console.error("❌ Erro ao limpar proposições:", error);
		throw error;
	} finally {
		await pool.end();
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
		process.exit(0);
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
