import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
