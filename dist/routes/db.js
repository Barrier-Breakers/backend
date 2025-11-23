"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbService_1 = require("../services/dbService");
const router = (0, express_1.Router)();
// ==================== USER ROUTES ====================
/**
 * @route   GET /users
 * @desc    Get all users (paginated)
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const result = yield dbService_1.UserService.getAllUsers(skip, take);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
}));
/**
 * @route   GET /users/:id
 * @desc    Get user by ID
 */
router.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield dbService_1.UserService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
}));
/**
 * @route   POST /users
 * @desc    Create a new user
 * @body    { email: string, name?: string, avatar?: string }
 */
router.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, avatar } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const user = yield dbService_1.UserService.createUser(email, name, avatar);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
}));
/**
 * @route   PUT /users/:id
 * @desc    Update a user
 * @body    { name?: string, avatar?: string }
 */
router.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, avatar } = req.body;
        const user = yield dbService_1.UserService.updateUser(req.params.id, { name, avatar });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
}));
/**
 * @route   DELETE /users/:id
 * @desc    Delete a user
 */
router.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbService_1.UserService.deleteUser(req.params.id);
        res.json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
}));
// ==================== POST ROUTES ====================
/**
 * @route   GET /posts
 * @desc    Get all posts (paginated)
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const result = yield dbService_1.PostService.getAllPosts(skip, take);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
}));
/**
 * @route   GET /posts/:id
 * @desc    Get post by ID with comments
 */
router.get("/posts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield dbService_1.PostService.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
}));
/**
 * @route   GET /users/:userId/posts
 * @desc    Get all posts by a specific user
 * @query   skip: number (default: 0), take: number (default: 10)
 */
router.get("/users/:userId/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const result = yield dbService_1.PostService.getPostsByUserId(req.params.userId, skip, take);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch user posts" });
    }
}));
/**
 * @route   POST /posts
 * @desc    Create a new post
 * @body    { userId: string, title: string, content: string }
 */
router.post("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, title, content } = req.body;
        if (!userId || !title || !content) {
            return res
                .status(400)
                .json({ error: "userId, title, and content are required" });
        }
        const post = yield dbService_1.PostService.createPost(userId, title, content);
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
}));
/**
 * @route   PUT /posts/:id
 * @desc    Update a post
 * @body    { title?: string, content?: string }
 */
router.put("/posts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const post = yield dbService_1.PostService.updatePost(req.params.id, { title, content });
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update post" });
    }
}));
/**
 * @route   DELETE /posts/:id
 * @desc    Delete a post
 */
router.delete("/posts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbService_1.PostService.deletePost(req.params.id);
        res.json({ message: "Post deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete post" });
    }
}));
exports.default = router;
