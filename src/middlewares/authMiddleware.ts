import { Request, Response, NextFunction } from "express";
import { SupabaseClient } from "@supabase/supabase-js";

export interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		email?: string;
		aud?: string;
		role?: string;
		[key: string]: any;
	};
}

export const authMiddleware = async (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const supabase: SupabaseClient = req.app.locals.supabase;

		if (!supabase) {
			res.status(500).json({ error: "Supabase client not initialized" });
			return;
		}

		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			res.status(401).json({ error: "Missing or invalid authorization header" });
			return;
		}

		const token = authHeader.substring(7);

		const { data, error } = await supabase.auth.getUser(token);

		if (error || !data.user) {
			res.status(401).json({ error: "Invalid or expired token" });
			return;
		}

		req.user = {
			id: data.user.id,
			email: data.user.email,
			aud: data.user.aud,
			role: data.user.role,
			...data.user.user_metadata,
		};

		next();
	} catch (err) {
		console.error("Auth middleware error:", err);
		res.status(401).json({ error: "Authentication failed" });
	}
};
