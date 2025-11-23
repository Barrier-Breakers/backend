"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Barrier Breakers", version: "1.0.0" },
        servers: [
            {
                url: "http://localhost:4000/api",
                description: "Development server",
            },
        ],
        security: [{ bearerAuth: [] }],
    },
    // apontar para as rotas reais a partir da raiz do projeto
    apis: ["./src/routes/**/*.ts"], // onde estão as rotas
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
