import prisma from "../db/prisma";

export class UserService {
	/**
	 * Get a user by ID
	 */
	static async getUserById(userId: string) {
		try {
			return await prisma.user.findUnique({
				where: { id: userId },
				include: {
					posts: true,
					sessions: true,
				},
			});
		} catch (error) {
			console.error("Error fetching user:", error);
			throw error;
		}
	}

	/**
	 * Get a user by email
	 */
	static async getUserByEmail(email: string) {
		try {
			return await prisma.user.findUnique({
				where: { email },
			});
		} catch (error) {
			console.error("Error fetching user by email:", error);
			throw error;
		}
	}

	/**
	 * Create a new user
	 */
	static async createUser(id: string, email: string, name?: string, avatar?: string) {
		try {
			return await prisma.user.create({
				data: {
					id,
					email,
					name,
					avatar,
					race: null,
					gender: null,
					ageRange: null,
					interestTopics: [],
				},
			});
		} catch (error) {
			console.error("Error creating user:", error);
			throw error;
		}
	}

	/**
	 * Update a user
	 */
	static async updateUser(
		userId: string,
		data: { name?: string; avatar?: string; race?: string; gender?: string; ageRange?: string; interestTopics?: string[] }
	) {
		try {
			return await prisma.user.update({
				where: { id: userId },
				data,
			});
		} catch (error) {
			console.error("Error updating user:", error);
			throw error;
		}
	}

	/**
	 * Delete a user
	 */
	static async deleteUser(userId: string) {
		try {
			return await prisma.user.delete({
				where: { id: userId },
			});
		} catch (error) {
			console.error("Error deleting user:", error);
			throw error;
		}
	}

	/**
	 * Get all users (paginated)
	 */
	static async getAllUsers(skip: number = 0, take: number = 10) {
		try {
			const [users, total] = await Promise.all([
				prisma.user.findMany({
					skip,
					take,
					include: {
						_count: {
							select: { posts: true, comments: true },
						},
					},
				}),
				prisma.user.count(),
			]);

			return {
				users,
				total,
				page: Math.floor(skip / take) + 1,
				pages: Math.ceil(total / take),
			};
		} catch (error) {
			console.error("Error fetching all users:", error);
			throw error;
		}
	}
}

export class PostService {
	/**
	 * Get a post by ID
	 */
	static async getPostById(postId: string) {
		try {
			return await prisma.post.findUnique({
				where: { id: postId },
				include: {
					user: true,
					comments: {
						include: {
							user: true,
						},
					},
				},
			});
		} catch (error) {
			console.error("Error fetching post:", error);
			throw error;
		}
	}

	/**
	 * Get all posts by a user
	 */
	static async getPostsByUserId(userId: string, skip: number = 0, take: number = 10) {
		try {
			const [posts, total] = await Promise.all([
				prisma.post.findMany({
					where: { userId },
					skip,
					take,
					include: {
						user: true,
						_count: {
							select: { comments: true },
						},
					},
					orderBy: { createdAt: "desc" },
				}),
				prisma.post.count({ where: { userId } }),
			]);

			return {
				posts,
				total,
				page: Math.floor(skip / take) + 1,
				pages: Math.ceil(total / take),
			};
		} catch (error) {
			console.error("Error fetching user posts:", error);
			throw error;
		}
	}

	/**
	 * Create a new post
	 */
	static async createPost(userId: string, title: string, content: string) {
		try {
			return await prisma.post.create({
				data: {
					title,
					content,
					userId,
				},
				include: {
					user: true,
				},
			});
		} catch (error) {
			console.error("Error creating post:", error);
			throw error;
		}
	}

	/**
	 * Update a post
	 */
	static async updatePost(postId: string, data: { title?: string; content?: string }) {
		try {
			return await prisma.post.update({
				where: { id: postId },
				data,
				include: {
					user: true,
				},
			});
		} catch (error) {
			console.error("Error updating post:", error);
			throw error;
		}
	}

	/**
	 * Delete a post
	 */
	static async deletePost(postId: string) {
		try {
			return await prisma.post.delete({
				where: { id: postId },
			});
		} catch (error) {
			console.error("Error deleting post:", error);
			throw error;
		}
	}

	/**
	 * Get all posts (paginated)
	 */
	static async getAllPosts(skip: number = 0, take: number = 10) {
		try {
			const [posts, total] = await Promise.all([
				prisma.post.findMany({
					skip,
					take,
					include: {
						user: true,
						_count: {
							select: { comments: true },
						},
					},
					orderBy: { createdAt: "desc" },
				}),
				prisma.post.count(),
			]);

			return {
				posts,
				total,
				page: Math.floor(skip / take) + 1,
				pages: Math.ceil(total / take),
			};
		} catch (error) {
			console.error("Error fetching all posts:", error);
			throw error;
		}
	}
}

export class DenunciaService {
	static async createDenuncia(userId: string, titulo: string, descricao: string | null, medias: string[] | undefined = [], tags: string[] | undefined = [], lat: number, lng: number) {
		try {
			const id = require("crypto").randomUUID();
			// Use raw SQL to set geography location with ST_MakePoint
			const result = await prisma.$executeRaw`
				INSERT INTO denuncias (id, "userId", titulo, descricao, medias, status, tags, location, upvotes, downvotes, "createdAt", "updatedAt")
				VALUES (${id}, ${userId}, ${titulo}, ${descricao}, ${medias}, 'aberta', ${tags}, ST_MakePoint(${lng}, ${lat})::geography, 0, 0, now(), now())
			`;
			return { id };
		} catch (error) {
			console.error("Error creating denuncia:", error);
			throw error;
		}
	}

	static async getDenunciasInRadius(userId: string | null, lat: number | null, lng: number | null, radiusMeters: number = 2000, skip = 0, take = 20) {
		try {
			if (lat == null || lng == null) {
				const [rows, total] = await Promise.all([
					prisma.$queryRaw`SELECT * FROM denuncias ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}`,
					prisma.$queryRaw`SELECT COUNT(*)::int FROM denuncias`,
				]);
				return { denuncias: rows, total: total[0].count };
			}

			const rows: any = await prisma.$queryRaw`
				SELECT * FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters}) ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}
			`;
			const totalRes: any = await prisma.$queryRaw`
				SELECT COUNT(*)::int AS count FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters})
			`;
			return { denuncias: rows, total: totalRes[0].count };
		} catch (error) {
			console.error("Error fetching denuncias:", error);
			throw error;
		}
	}

	static async addComment(denunciaId: string, userId: string, texto: string, medias: string[] | undefined = []) {
		try {
			return await prisma.denunciaComentario.create({
				data: { id: require("crypto").randomUUID(), denunciaId, userId, texto, medias },
			});
		} catch (error) {
			console.error("Error adding comment:", error);
			throw error;
		}
	}
}

