import { Router, Request, Response } from "express";
import { UserService, PostService } from "../services/dbService";

const router = Router();

// ==================== USER ROUTES ====================

/**
 * @route   GET /users
 * @desc    Get all users (paginated)
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/users", async (req: Request, res: Response) => {
	try {
		const skip = parseInt(req.query.skip as string) || 0;
		const take = parseInt(req.query.take as string) || 10;

		const result = await UserService.getAllUsers(skip, take);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch users" });
	}
});

/**
 * @route   GET /users/:id
 * @desc    Get user by ID
 */
router.get("/users/:id", async (req: Request, res: Response) => {
	try {
		const user = await UserService.getUserById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch user" });
	}
});

/**
 * @route   POST /users
 * @desc    Create a new user
 * @body    { email: string, name?: string, avatar?: string }
 */
router.post("/users", async (req: Request, res: Response) => {
	try {
		const { email, name, avatar } = req.body;

		if (!email) {
			return res.status(400).json({ error: "Email is required" });
		}

		const user = await UserService.createUser(email, name, avatar);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: "Failed to create user" });
	}
});

/**
 * @route   PUT /users/:id
 * @desc    Update a user
 * @body    { name?: string, avatar?: string }
 */
router.put("/users/:id", async (req: Request, res: Response) => {
	try {
		const { name, avatar } = req.body;

		const user = await UserService.updateUser(req.params.id, { name, avatar });
		res.json(user);
	} catch (error) {
		res.status(500).json({ error: "Failed to update user" });
	}
});

/**
 * @route   DELETE /users/:id
 * @desc    Delete a user
 */
router.delete("/users/:id", async (req: Request, res: Response) => {
	try {
		await UserService.deleteUser(req.params.id);
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Failed to delete user" });
	}
});

// ==================== POST ROUTES ====================

/**
 * @route   GET /posts
 * @desc    Get all posts (paginated)
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/posts", async (req: Request, res: Response) => {
	try {
		const skip = parseInt(req.query.skip as string) || 0;
		const take = parseInt(req.query.take as string) || 10;

		const result = await PostService.getAllPosts(skip, take);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch posts" });
	}
});

/**
 * @route   GET /posts/:id
 * @desc    Get post by ID with comments
 */
router.get("/posts/:id", async (req: Request, res: Response) => {
	try {
		const post = await PostService.getPostById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch post" });
	}
});

/**
 * @route   GET /users/:userId/posts
 * @desc    Get all posts by a specific user
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/users/:userId/posts", async (req: Request, res: Response) => {
	try {
		const skip = parseInt(req.query.skip as string) || 0;
		const take = parseInt(req.query.take as string) || 10;

		const result = await PostService.getPostsByUserId(req.params.userId, skip, take);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch user posts" });
	}
});

/**
 * @route   POST /posts
 * @desc    Create a new post
 * @body    { userId: string, title: string, content: string }
 */
router.post("/posts", async (req: Request, res: Response) => {
	try {
		const { userId, title, content } = req.body;

		if (!userId || !title || !content) {
			return res
				.status(400)
				.json({ error: "userId, title, and content are required" });
		}

		const post = await PostService.createPost(userId, title, content);
		res.status(201).json(post);
	} catch (error) {
		res.status(500).json({ error: "Failed to create post" });
	}
});

/**
 * @route   PUT /posts/:id
 * @desc    Update a post
 * @body    { title?: string, content?: string }
 */
router.put("/posts/:id", async (req: Request, res: Response) => {
	try {
		const { title, content } = req.body;

		const post = await PostService.updatePost(req.params.id, { title, content });
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: "Failed to update post" });
	}
});

/**
 * @route   DELETE /posts/:id
 * @desc    Delete a post
 */
router.delete("/posts/:id", async (req: Request, res: Response) => {
	try {
		await PostService.deletePost(req.params.id);
		res.json({ message: "Post deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Failed to delete post" });
	}
});

export default router;
