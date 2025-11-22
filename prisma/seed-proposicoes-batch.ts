import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

// Use DATABASE_URL for seed with DIRECT connection (no pooling)
const connectionString = `${process.env.DIRECT_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter }) as any;

// Batch size for bulk operations (smaller = faster transaction, less timeout issues)
const BATCH_SIZE = 250;

async function main() {
	console.log("🌱 Iniciando seed de proposições (modo BATCH)...\n");

	try {
		// Read JSON file
		const jsonPath = path.join(__dirname, "../proposicoes-2025.json");
		const rawData = fs.readFileSync(jsonPath, "utf-8");
		const data = JSON.parse(rawData);

		console.log(`📝 Total de proposições: ${data.dados.length}`);
		console.log(`⚙️  Tamanho do batch: ${BATCH_SIZE}\n`);

		let processedCount = 0;
		let createdCount = 0;
		let updatedCount = 0;
		let failedCount = 0;
		const startTime = Date.now();

		// Process in batches
		for (let i = 0; i < data.dados.length; i += BATCH_SIZE) {
			const batch = data.dados.slice(i, i + BATCH_SIZE);
			const batchNum = Math.floor(i / BATCH_SIZE) + 1;
			const totalBatches = Math.ceil(data.dados.length / BATCH_SIZE);

			console.log(`\n📦 Processando batch ${batchNum}/${totalBatches}...`);

			try {
				// Increase timeout to 120 seconds (120000ms) for large batches
				// Use raw SQL for much faster bulk operations
				const results = await prisma.$transaction(
					async (tx: any) => {
						const batchResults = [];
						
						for (const prop of batch) {
							const ultimoStatus = prop.ultimoStatus || {};

							const proposicaoData = {
								// Primary ID
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
								descricaoTramitacao:
									ultimoStatus.descricaoTramitacao || null,
								idTipoTramitacao: ultimoStatus.idTipoTramitacao || null,
								descricaoSituacao:
									ultimoStatus.descricaoSituacao || null,
								idSituacao: ultimoStatus.idSituacao || null,
								despacho: ultimoStatus.despacho || null,
								statusApreciacao: ultimoStatus.apreciacao || null,
								statusUrl: ultimoStatus.url || null,
							};

							// Upsert in transaction
							const result = await tx.proposicao.upsert({
								where: { id: proposicaoData.id },
								update: proposicaoData,
								create: proposicaoData,
							});
							
							batchResults.push(result);
						}
						
						return batchResults;
					},
					{
						// Increase timeout to 120 seconds (120000ms)
						timeout: 120000,
					}
				);

				processedCount += batch.length;
				createdCount += results.length;

				console.log(
					`  ✓ Batch ${batchNum} concluído: ${batch.length} proposições | Total: ${processedCount}/${data.dados.length}`
				);
			} catch (error) {
				console.error(
					`  ❌ Erro no batch ${batchNum}:`,
					error instanceof Error ? error.message : "Erro desconhecido"
				);
				failedCount += batch.length;

				// Continue processing remaining batches
				console.log("  ⚠️  Continuando com próximo batch...\n");
			}
		}

		const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);

		console.log(`\n✅ Seed concluído!`);
		console.log(`\n📊 Estatísticas:`);
		console.log(`  ✓ Processadas: ${processedCount}/${data.dados.length}`);
		console.log(`  ✓ Tempo total: ${elapsedTime}s`);
		console.log(
			`  ⚠️  Falhadas: ${failedCount} ${failedCount > 0 ? "(veja logs acima)" : ""}`
		);

		if (failedCount > 0) {
			console.log(
				`\n💡 Dica: Execute novamente para reprocessar os batches com erro.`
			);
			console.log(`         As proposições já inseridas serão atualizadas (upsert).`);
		}
	} catch (error) {
		console.error("❌ Erro crítico durante seed:", error);
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
