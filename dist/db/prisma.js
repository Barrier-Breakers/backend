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
exports.getPrismaInitTimestamp = exports.prismaInitTimestamp = void 0;
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
// Use DATABASE_URL for application (with connection pooling)
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
// Track prisma client init timestamp for cold-start analysis
exports.prismaInitTimestamp = Date.now();
// Instantiate Prisma Client
const prisma = new client_1.PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development"
        ? ["info", "warn", "error"]
        : ["warn", "error"],
});
// Validate that the generated client contains the expected model properties
if (!prisma || !prisma.proposicao) {
    console.error('[Prisma] Generated client does not expose `proposicao` model.');
    console.error('This likely means `prisma generate` was not executed before build/start.');
}
// Handle disconnection on process exit
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    process.exit(0);
}));
process.on("SIGTERM", () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    process.exit(0);
}));
exports.default = prisma;
// Also expose a helper to retrieve the init timestamp (for other modules/tests)
const getPrismaInitTimestamp = () => exports.prismaInitTimestamp;
exports.getPrismaInitTimestamp = getPrismaInitTimestamp;
