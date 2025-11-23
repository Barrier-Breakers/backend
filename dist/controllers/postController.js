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
exports.remove = exports.update = exports.create = exports.getByUserId = exports.getById = exports.getAll = void 0;
const dbService_1 = require("../services/dbService");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const result = yield dbService_1.PostService.getAllPosts(skip, take);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield dbService_1.PostService.getPostById(req.params.id);
        if (!post) {
            res.status(404).json({ error: "Post not found" });
            return;
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
});
exports.getById = getById;
const getByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const result = yield dbService_1.PostService.getPostsByUserId(req.params.userId, skip, take);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch user posts" });
    }
});
exports.getByUserId = getByUserId;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, title, content } = req.body;
        if (!userId || !title || !content) {
            res.status(400).json({ error: "userId, title, and content are required" });
            return;
        }
        const post = yield dbService_1.PostService.createPost(userId, title, content);
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const post = yield dbService_1.PostService.updatePost(req.params.id, { title, content });
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update post" });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbService_1.PostService.deletePost(req.params.id);
        res.json({ message: "Post deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete post" });
    }
});
exports.remove = remove;
