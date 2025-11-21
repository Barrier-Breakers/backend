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
	static async createUser(email: string, name?: string, avatar?: string) {
		try {
			return await prisma.user.create({
				data: {
					email,
					name,
					avatar,
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
		data: { name?: string; avatar?: string }
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
