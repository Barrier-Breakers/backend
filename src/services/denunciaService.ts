import prisma from "../db/prisma";
import { randomUUID } from "crypto";

export class DenunciaService {
	static async createDenuncia(
		userId: string,
		titulo: string,
		descricao: string | null,
		medias: string[] | undefined = [],
		tags: string[] | undefined = [],
		lat: number,
		lng: number
	) {
		try {
			const id = randomUUID();
			// Use raw SQL to set geography location with ST_MakePoint
			await prisma.$executeRaw`
        INSERT INTO denuncias (id, "userId", titulo, descricao, medias, status, tags, location, upvotes, downvotes, "createdAt", "updatedAt")
        VALUES (${id}, ${userId}, ${titulo}, ${descricao}, ${medias}, 'aberta', ${tags}, ST_MakePoint(${lng}, ${lat})::geography, 0, 0, now(), now())
      `;
			return { id };
		} catch (error) {
			console.error("Error creating denuncia:", error);
			throw error;
		}
	}

	static async getDenunciasInRadius(
		userId: string | null,
		lat: number | null,
		lng: number | null,
		radiusMeters: number = 2000,
		skip = 0,
		take = 20
	) {
		try {
			if (lat == null || lng == null) {
				const [rows, total] = await Promise.all([
					prisma.$queryRaw`SELECT * FROM denuncias ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}`,
					prisma.$queryRaw`SELECT COUNT(*)::int FROM denuncias`,
				]);

				// attach comments for each denuncia
				const ids = (rows as any[]).map((r) => r.id);
				let comments: any[] = [];
				if (ids.length > 0) {
					comments = await prisma.denunciaComentario.findMany({
						where: { denunciaId: { in: ids } },
						orderBy: { createdAt: "asc" },
					});
				}
				const commentsById: Record<string, any[]> = {};
				for (const c of comments) {
					commentsById[c.denunciaId] = commentsById[c.denunciaId] || [];
					commentsById[c.denunciaId].push(c);
				}

				const rowsWithComments = (rows as any[]).map((r) => ({ ...r, comentarios: commentsById[r.id] || [], mine: userId && r.userId === userId ? "yes" : undefined }));
				return {
					denuncias: rowsWithComments,
					total: (total as any)[0].count,
				};
			}

			const rows: any = await prisma.$queryRaw`
	        SELECT * FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters}) ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}
	      `;

			// attach comments for each denuncia
			const ids = (rows as any[]).map((r) => r.id);
			let comments: any[] = [];
			if (ids.length > 0) {
				comments = await prisma.denunciaComentario.findMany({
					where: { denunciaId: { in: ids } },
					orderBy: { createdAt: "asc" },
				});
			}
			const commentsById: Record<string, any[]> = {};
			for (const c of comments) {
				commentsById[c.denunciaId] = commentsById[c.denunciaId] || [];
				commentsById[c.denunciaId].push(c);
			}
			const rowsWithComments = (rows as any[]).map((r) => ({ ...r, comentarios: commentsById[r.id] || [], mine: userId && r.userId === userId ? "yes" : undefined }));
			const totalRes: any = await prisma.$queryRaw`
        SELECT COUNT(*)::int AS count FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters})
      `;
			return { denuncias: rowsWithComments, total: totalRes[0].count };
		} catch (error) {
			console.error("Error fetching denuncias:", error);
			throw error;
		}
	}

	static async addComment(
		denunciaId: string,
		userId: string,
		texto: string,
		medias: string[] | undefined = []
	) {
		try {
			return await prisma.denunciaComentario.create({
				data: {
					id: randomUUID(),
					denunciaId,
					userId,
					texto,
					medias,
				},
			});
		} catch (error) {
			console.error("Error adding comment:", error);
			throw error;
		}
	}

	static randomBetween(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	static offsetLatLng(lat: number, lng: number, distanceMeters: number, bearingRadians: number) {
		const R = 6378137; // Earth radius in meters
		const dDivR = distanceMeters / R;
		const lat1 = (lat * Math.PI) / 180;
		const lng1 = (lng * Math.PI) / 180;
		const lat2 = Math.asin(
			Math.sin(lat1) * Math.cos(dDivR) + Math.cos(lat1) * Math.sin(dDivR) * Math.cos(bearingRadians)
		);
		const lng2 = lng1 + Math.atan2(
			Math.sin(bearingRadians) * Math.sin(dDivR) * Math.cos(lat1),
			Math.cos(dDivR) - Math.sin(lat1) * Math.sin(lat2)
		);
		return [(lat2 * 180) / Math.PI, (lng2 * 180) / Math.PI];
	}

	static async createMockDenuncias(
		userId: string | null,
		lat: number,
		lng: number,
		count: number = 10,
		minDistanceMeters: number = 10,
		maxDistanceMeters: number = 100
	) {
		try {
			let actualUserId = userId;
			if (!actualUserId) {
				const user = await prisma.user.findFirst();
				if (!user) throw new Error("No user found. Provide a valid userId in the request body.");
				actualUserId = user.id;
			}
			const createdIds: string[] = [];
			for (let i = 0; i < count; i++) {
				const distance = Math.round(this.randomBetween(minDistanceMeters, maxDistanceMeters));
				const bearing = this.randomBetween(0, Math.PI * 2);
				const [newLat, newLng] = this.offsetLatLng(lat, lng, distance, bearing);
				const titulo = `Mock Denúncia ${i + 1}`;
				const descricao = `Denúncia mock gerada automaticamente a ~${distance}m do ponto fornecido.`;
				const { id } = await this.createDenuncia(actualUserId as string, titulo, descricao, [], ["mock"], newLat, newLng);
				createdIds.push(id);
			}
			return { created: createdIds.length, ids: createdIds };
		} catch (error) {
			console.error("Error creating mock denuncias:", error);
			throw error;
		}
	}
}
