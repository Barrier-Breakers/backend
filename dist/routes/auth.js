"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController = __importStar(require("../controllers/authController"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const redisRateLimiter_1 = require("../utils/redisRateLimiter");
const router = (0, express_1.Router)();
// Rate limiter configurations
const signUpLimiter = (0, redisRateLimiter_1.createRateLimiter)({
    keyPrefix: "auth:signup",
    windowSec: 60,
    max: 5,
});
const signInLimiter = (0, redisRateLimiter_1.createRateLimiter)({
    keyPrefix: "auth:signin",
    windowSec: 60,
    max: 5,
});
const googleAuthLimiter = (0, redisRateLimiter_1.createRateLimiter)({
    keyPrefix: "auth:google",
    windowSec: 60,
    max: 10,
});
/**
 * @openapi
 * /api/auth/signup:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign up a new user
 *     description: Create a new user account with email and password. Rate limited to 5 requests per minute.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 6
 *                 example: strongpassword123
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                 session:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                     refresh_token:
 *                       type: string
 *                     expires_in:
 *                       type: number
 *       400:
 *         description: Bad request (missing fields or validation error)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       429:
 *         description: Rate limit exceeded (5 requests per minute)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 retryAfter:
 *                   type: number
 *       500:
 *         description: Internal server error
 */
router.post("/signup", signUpLimiter, authController.signUp);
/**
 * @openapi
 * /api/auth/signin:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Sign in with email and password
 *     description: Authenticate a user with email and password. Returns access token for use in subsequent requests. Rate limited to 5 requests per minute.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongpassword123
 *     responses:
 *       200:
 *         description: Login successful, returns user and session with access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                 session:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       description: Use this token in Authorization header for protected routes
 *                     refresh_token:
 *                       type: string
 *                     expires_in:
 *                       type: number
 *                       description: Token expiration time in seconds
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       429:
 *         description: Rate limit exceeded (5 requests per minute)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 retryAfter:
 *                   type: number
 *       500:
 *         description: Internal server error
 */
router.post("/signin", signInLimiter, authController.signIn);
/**
 * @openapi
 * /api/auth/signin/google:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Get Google OAuth redirect URL
 *     description: Initiate Google authentication flow. Returns an OAuth URL to redirect the user. Rate limited to 10 requests per minute.
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               redirectTo:
 *                 type: string
 *                 description: Callback URL after Google authentication. Defaults to APP_URL/auth/callback
 *                 example: http://localhost:3000/auth/callback
 *     responses:
 *       200:
 *         description: Google auth URL generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 url:
 *                   type: string
 *                   description: Redirect user to this URL to start Google authentication
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       429:
 *         description: Rate limit exceeded (10 requests per minute)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 retryAfter:
 *                   type: number
 *       500:
 *         description: Internal server error
 */
router.post("/signin/google", googleAuthLimiter, authController.signInWithGoogle);
/**
 * @openapi
 * /api/auth/me:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get current authenticated user
 *     description: Returns the authenticated user's information. Requires Bearer token in Authorization header.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Current user
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: e08c6ad6-802b-4957-b3e2-9190acb8c546
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     aud:
 *                       type: string
 *                       example: authenticated
 *                     role:
 *                       type: string
 *                       example: authenticated
 *       401:
 *         description: Unauthorized - missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing or invalid authorization header
 *       500:
 *         description: Internal server error
 */
router.get("/me", authMiddleware_1.authMiddleware, authController.getMe);
/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logout current user
 *     description: Sign out the currently authenticated user. Requires Bearer token in Authorization header. Invalidates the session on the server side.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logout successful
 *                 user:
 *                   type: string
 *                   example: user@example.com
 *       401:
 *         description: Unauthorized - missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
router.post("/logout", authMiddleware_1.authMiddleware, authController.logout);
exports.default = router;
