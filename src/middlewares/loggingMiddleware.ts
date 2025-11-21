import { Request, Response, NextFunction } from "express";

export const loggingMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const startTime = Date.now();
	const method = req.method;
	const path = req.path;

	// Captura o método original res.send para interceptar quando a resposta é enviada
	const originalSend = res.send;

	res.send = function (data: any) {
		const duration = Date.now() - startTime;
		const status = res.statusCode;

		// Cor baseada no status
		let statusColor = "\x1b[32m"; // verde (2xx)
		if (status >= 300 && status < 400) {
			statusColor = "\x1b[36m"; // cyan (3xx)
		} else if (status >= 400 && status < 500) {
			statusColor = "\x1b[33m"; // amarelo (4xx)
		} else if (status >= 500) {
			statusColor = "\x1b[31m"; // vermelho (5xx)
		}

		const reset = "\x1b[0m";
		const blue = "\x1b[34m";
		const bold = "\x1b[1m";

		console.log(
			`${blue}${bold}[REQUEST]${reset} ${method} ${path} ${statusColor}${status}${reset} ${bold}${duration}ms${reset}`,
		);

		// Chama o método original
		return originalSend.call(this, data);
	};

	next();
};
