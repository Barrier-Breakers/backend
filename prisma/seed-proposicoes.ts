import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

// Use DIRECT_URL for seed (no connection pooling)
const connectionString = `${process.env.DATABASE_URL}`;
console.log(process.env.DATABASE_URL)
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter }) as any;

async function main() {
	console.log("🌱 Iniciando seed de proposições...");

	try {
		// Read JSON file
		const jsonPath = path.join(__dirname, "../proposicoes-2025.json");
		const rawData = fs.readFileSync(jsonPath, "utf-8");
		const data = JSON.parse(rawData);

		console.log(`📝 Processando ${data.dados.length} proposição(ões)...`);

		let createdCount = 0;
		let skippedCount = 0;

		for (const prop of data.dados) {
			try {
				// Flatten ultimoStatus fields to root level
				const ultimoStatus = prop.ultimoStatus || {};

				const proposicaoData = {
					// Primary ID - convert to Int if necessary
					id: parseInt(prop.id.toString()),

					// Basic Info
					uri: prop.uri,
					siglaTipo: prop.siglaTipo || "",
					numero: prop.numero || 0,
					ano: prop.ano || new Date().getFullYear(),
					codTipo: prop.codTipo || 0,
					descricaoTipo: prop.descricaoTipo || "",

					// Description
					ementa: prop.ementa || "",
					ementaDetalhada: prop.ementaDetalhada || null,
					keywords: prop.keywords || null,

					// Dates and Links
					dataApresentacao: prop.dataApresentacao
						? new Date(prop.dataApresentacao)
						: null,
					uriOrgaoNumerador: prop.uriOrgaoNumerador || null,
					urlInteiroTeor: prop.urlInteiroTeor || null,

					// References to other propositions
					uriPropAnterior: prop.uriPropAnterior || null,
					uriPropPrincipal: prop.uriPropPrincipal || null,
					uriPropPosterior: prop.uriPropPosterior || null,

					// Status fields (flattened from ultimoStatus)
					statusData: ultimoStatus.data
						? new Date(ultimoStatus.data)
						: null,
					statusSequencia: ultimoStatus.sequencia || null,
					uriRelator: ultimoStatus.uriRelator || null,
					codOrgao: ultimoStatus.codOrgao || null,
					siglaOrgao: ultimoStatus.siglaOrgao || null,
					uriOrgao: ultimoStatus.uriOrgao || null,
					regime: ultimoStatus.regime || null,
					descricaoTramitacao: ultimoStatus.descricaoTramitacao || null,
					idTipoTramitacao: ultimoStatus.idTipoTramitacao || null,
					descricaoSituacao: ultimoStatus.descricaoSituacao || null,
					idSituacao: ultimoStatus.idSituacao || null,
					despacho: ultimoStatus.despacho || null,
					statusApreciacao: ultimoStatus.apreciacao || null,
					statusUrl: ultimoStatus.url || null,
				};

				// Try to create or update
				const result = await prisma.proposicao.upsert({
					where: { id: proposicaoData.id },
					update: proposicaoData,
					create: proposicaoData,
				});

				createdCount++;
				if (createdCount % 100 === 0) {
					console.log(`  ✓ Processadas ${createdCount} proposições...`);
				}
			} catch (error) {
				console.error(
					`  ❌ Erro ao processar proposição ID ${prop.id}:`,
					error instanceof Error ? error.message : "Erro desconhecido"
				);
				skippedCount++;
			}
		}

		console.log(`\n✅ Seed concluído!`);
		console.log(`  📊 Criadas/Atualizadas: ${createdCount}`);
		console.log(`  ⚠️  Falhadas: ${skippedCount}`);
	} catch (error) {
		console.error("❌ Erro durante seed:", error);
		throw error;
	} finally {
		await pool.end();
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
