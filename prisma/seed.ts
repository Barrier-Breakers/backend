import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { randomUUID } from "crypto";
import * as dotenv from "dotenv";

dotenv.config();

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
                interestTopics: [],
			},
		});

		const user2 = await prisma.user.upsert({
			where: { email: "user@barrierbreakers.com" },
			update: {},
			create: {
				email: "user@barrierbreakers.com",
				name: "Sample User",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
                interestTopics: [],
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

		// Create additional sample users for denuncias and votes
		console.log("📝 Creating additional users for denuncias...");
		const userMaria = await prisma.user.upsert({
			where: { email: "maria@city.com" },
			update: {},
			create: {
				email: "maria@city.com",
				name: "Maria Oliveira",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
                interestTopics: ["limpeza","segurança"],
			},
		});
		const userJoao = await prisma.user.upsert({
			where: { email: "joao@city.com" },
			update: {},
			create: {
				email: "joao@city.com",
				name: "João Silva",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
                interestTopics: ["segurança","infraestrutura"],
			},
		});
		const userCarla = await prisma.user.upsert({
			where: { email: "carla@city.com" },
			update: {},
			create: {
				email: "carla@city.com",
				name: "Carla Souza",
				avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carla",
                interestTopics: ["direitos","preconceito"],
			},
		});

		console.log("✅ Additional users created", { userMaria, userJoao, userCarla });

		// Media links that can be used in denuncias
		const MEDIA_LINKS = {
			pneu: "https://s2-g1.glbimg.com/tJP1NftDANqg277qHwzH2y4bLIs=/0x0:1024x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/p/j/RPbB6AR0OzftIcHvBzFw/whatsapp-image-2023-06-20-at-10.02.06-3-.jpeg",
			lixo: "https://s2-g1.glbimg.com/aBzrLtc2IaA2h30oNeTaW_YnXqA=/0x0:1700x1275/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/F/k/WrEgc9QKan93ja46A5iw/lixo-luzia-ok.jpg",
			obra: "https://mpmt.mp.br/site/storage/webdisco/imagens/Anual/2019/29%20-%20Mirassol%20DOeste.JPG",
			deslizamento: "https://cnm.org.br/cms/images/stories/comunicacao_novo/defesa_civil/28062018_area_de_risco_Manu_Dias_Governo_da_Bahia.jpg",
			furto: "https://blog.alliate.com.br/wp-content/uploads/2018/07/219147-entenda-as-principais-diferencas-entre-furto-e-roubo.jpg",
			abuso: "https://redacao.rhpravoce.com.br/wp-content/uploads/2023/06/As-Cadeias-do-Preconceito-de-Genero.jpg",
			preconceito: "https://www.generonumero.media/wp-content/uploads/2019/10/nappy-2.jpeg",
		};

		// Coordinates example base (São Paulo center)
		const baseLat = -23.55052;
		const baseLng = -46.633308;

		// Create several denuncias with sensible data
		console.log("📝 Creating sample denuncias...");
		const denuncias = [
			{
				id: randomUUID(),
				userId: userMaria.id,
				titulo: "Pneu largado no meio da rua",
				descricao: "Pneu abandonado no meio da rua atrapalhando a passagem de pedestres e veículos.",
				medias: [MEDIA_LINKS.pneu],
				status: "baixo",
				tags: ["pneu", "obstrução"],
				lat: baseLat - 0.001,
				lng: baseLng + 0.001,
				upvotes: 2,
				downvotes: 0,
			},
			{
				id: randomUUID(),
				userId: userJoao.id,
				titulo: "Acúmulo de lixo em esquina",
				descricao: "Lixo acumulado há dias na esquina, causando mau cheiro e atraindo animais.",
				medias: [MEDIA_LINKS.lixo],
				status: "medio",
				tags: ["lixo", "saúde"],
				lat: baseLat + 0.002,
				lng: baseLng - 0.003,
				upvotes: 5,
				downvotes: 1,
			},
			{
				id: randomUUID(),
				userId: userCarla.id,
				titulo: "Obra inacabada sem tapume",
				descricao: "Obra parada e sem isolamento, oferecendo risco para pedestres e crianças.",
				medias: [MEDIA_LINKS.obra],
				status: "medio",
				tags: ["obra", "segurança", "infância"],
				lat: baseLat + 0.0015,
				lng: baseLng + 0.0025,
				upvotes: 3,
				downvotes: 0,
			},
			{
				id: randomUUID(),
				userId: userMaria.id,
				titulo: "Área de risco com deslizamento",
				descricao: "Trecho íngreme com risco de deslizamento próximo a uma encosta instável.",
				medias: [MEDIA_LINKS.deslizamento],
				status: "alto",
				tags: ["deslizamento", "risco"],
				lat: baseLat - 0.0025,
				lng: baseLng - 0.0015,
				upvotes: 10,
				downvotes: 0,
			},
			{
				id: randomUUID(),
				userId: user2.id,
				titulo: "Vídeo de furto próximo ao comércio local",
				descricao: "Vídeo mostra tentativa de furto em plena luz do dia na região central.",
				medias: [MEDIA_LINKS.furto],
				status: "alto",
				tags: ["furto", "segurança"],
				lat: baseLat + 0.004,
				lng: baseLng - 0.002,
				upvotes: 6,
				downvotes: 2,
			},
			{
				id: randomUUID(),
				userId: userCarla.id,
				titulo: "Relato de abuso e preconceito",
				descricao: "Pessoa agredida verbalmente e alvo de preconceito na parada de ônibus.",
				medias: [MEDIA_LINKS.abuso, MEDIA_LINKS.preconceito],
				status: "alto",
				tags: ["abuso", "preconceito", "violência"],
				lat: baseLat - 0.0005,
				lng: baseLng + 0.005,
				upvotes: 8,
				downvotes: 1,
			},
		];

		// Insert denuncias using raw SQL to set geography location
		for (const d of denuncias) {
			await prisma.$executeRaw`
			INSERT INTO denuncias (id, "userId", titulo, descricao, medias, status, tags, location, upvotes, downvotes, "createdAt", "updatedAt")
			VALUES (${d.id}, ${d.userId}, ${d.titulo}, ${d.descricao}, ${d.medias}, ${d.status}, ${d.tags}, ST_MakePoint(${d.lng}, ${d.lat})::geography, ${d.upvotes}, ${d.downvotes}, now(), now())
			`;
		}

		console.log("✅ Denuncias created: ", denuncias.map((d) => ({ id: d.id, titulo: d.titulo })));

		// Create some comments for denuncias
		console.log("📝 Creating denuncia comentarios...");
		const comments = [
			{
				id: randomUUID(),
				denunciaId: denuncias[0].id,
				userId: userJoao.id,
				texto: "Esse pneu já está aqui há uns dias, perigoso pra crianças.",
				medias: [],
			},
			{
				id: randomUUID(),
				denunciaId: denuncias[1].id,
				userId: user2.id,
				texto: "Com certeza precisa de limpeza urgente.",
				medias: [MEDIA_LINKS.lixo],
			},
			{
				id: randomUUID(),
				denunciaId: denuncias[3].id,
				userId: userCarla.id,
				texto: "Já comuniquei a defesa civil, mas ninguém apareceu.",
				medias: [],
			},
		];
		for (const c of comments) {
			await prisma.denunciaComentario.create({ data: c });
		}
		console.log("✅ Denuncia comentarios created");

		// Create votos for denuncias (1 -> upvote, -1 -> downvote)
		console.log("📝 Creating denuncia votos...");
		const votos = [
			{ id: randomUUID(), denunciaId: denuncias[0].id, userId: userJoao.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[0].id, userId: user2.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[1].id, userId: userMaria.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[1].id, userId: userCarla.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[4].id, userId: userMaria.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[4].id, userId: userJoao.id, voto: -1 },
			{ id: randomUUID(), denunciaId: denuncias[5].id, userId: user2.id, voto: 1 },
			{ id: randomUUID(), denunciaId: denuncias[5].id, userId: userMaria.id, voto: 1 },
		];
		for (const v of votos) {
			await prisma.denunciaVoto.create({ data: v });
		}
		console.log("✅ Denuncia votos created");

		// Create 10 additional denuncias with random-ish data around base point
		console.log("📝 Creating 10 additional sample denuncias...");
		function pickRandom<T>(arr: T[]) {
			return arr[Math.floor(Math.random() * arr.length)];
		}

		function getRandomOffset(maxDegrees = 0.01) {
			return (Math.random() - 0.5) * 2 * maxDegrees;
		}

		const allUsers = [user1, user2, userMaria, userJoao, userCarla];
		const mediaKeys = Object.keys(MEDIA_LINKS) as (keyof typeof MEDIA_LINKS)[];

		const additionalDenuncias: any[] = [];
		for (let i = 0; i < 10; i++) {
			const key = pickRandom(mediaKeys);
			const chosenMedia = MEDIA_LINKS[key];
			const author = pickRandom(allUsers);
			const status = pickRandom(["baixo", "medio", "alto"]);
			const tags = [key, status === "alto" ? "urgente" : ""]
				.filter(Boolean)
				.concat(["cidade"]);
			const d = {
				id: randomUUID(),
				userId: author.id,
				titulo: `Denúncia adicional ${i + 1} — ${key}`,
				descricao: `Exemplo de denúncia contendo ${key} na região, precisa de atenção.`,
				medias: chosenMedia ? [chosenMedia] : [],
				status,
				tags,
				lat: baseLat + getRandomOffset(0.005),
				lng: baseLng + getRandomOffset(0.005),
				upvotes: 0,
				downvotes: 0,
			};
			additionalDenuncias.push(d);
			await prisma.$executeRaw`
			INSERT INTO denuncias (id, "userId", titulo, descricao, medias, status, tags, location, upvotes, downvotes, "createdAt", "updatedAt")
			VALUES (${d.id}, ${d.userId}, ${d.titulo}, ${d.descricao}, ${d.medias}, ${d.status}, ${d.tags}, ST_MakePoint(${d.lng}, ${d.lat})::geography, ${d.upvotes}, ${d.downvotes}, now(), now())
			`;
		}

		console.log("✅ 10 additional denuncias created");

		// Now add comments and votos for the additional denuncias
		const commentTexts = [
			"Concordo, precisa ser removido.",
			"Isso vem de longa data, ninguém resolve.",
			"Boa denúncia, obrigado por reportar.",
			"Já abri chamado na prefeitura.",
			"A situação é perigosa, cuidado!",
		];

		const additionalComments: any[] = [];
		const additionalVotos: any[] = [];

		for (const d of additionalDenuncias) {
			// create 1-3 comments
			const commentsCount = Math.floor(Math.random() * 3) + 1; // 1 to 3
			for (let i = 0; i < commentsCount; i++) {
				const author = pickRandom(allUsers);
				const c = {
					id: randomUUID(),
					denunciaId: d.id,
					userId: author.id,
					texto: pickRandom(commentTexts),
					medias: [],
				};
				additionalComments.push(c);
				await prisma.denunciaComentario.create({ data: c });
			}

			// create 0-4 votos from unique users
			const voters = [...allUsers].sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 4));
			let up = 0;
			let down = 0;
			for (const voter of voters) {
				const vote = Math.random() > 0.2 ? 1 : -1; // bias to upvote
				additionalVotos.push({ id: randomUUID(), denunciaId: d.id, userId: voter.id, voto: vote });
				await prisma.denunciaVoto.create({ data: additionalVotos[additionalVotos.length - 1] });
				if (vote === 1) up++;
				else down++;
			}

			// update counts on denuncia for consistency
			if (up !== 0 || down !== 0) {
				await prisma.$executeRaw`
				UPDATE denuncias
				SET upvotes = upvotes + ${up}, downvotes = downvotes + ${down}, "updatedAt" = now()
				WHERE id = ${d.id}`;
			}
		}

		console.log("✅ Additional denuncia comentarios and votos created");
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
