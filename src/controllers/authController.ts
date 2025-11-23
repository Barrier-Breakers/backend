import { Response } from "express";
import { SupabaseClient } from "@supabase/supabase-js";
import * as authService from "../services/authService";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { UserService } from "../services/dbService";

interface SignUpRequest extends AuthenticatedRequest {
	body: {
		email: string;
		password: string;
		name: string;
	};
}

interface SignInRequest extends AuthenticatedRequest {
	body: {
		email: string;
		password: string;
	};
}

interface GoogleAuthRequest extends AuthenticatedRequest {
	body: {
		redirectTo?: string;
	};
}

interface OnboardingRequest extends AuthenticatedRequest {
	body: {
		race: string;
		gender: string;
		ageRange: string;
		interestTopics: string[];
	};
}

export const signUp = async (
	req: SignUpRequest,
	res: Response,
): Promise<void> => {
	try {
		const supabase: SupabaseClient = req.app.locals.supabase;
		const { email, password, name } = req.body;

		if (!supabase) {
			res.status(500).json({ error: "Supabase client not initialized" });
			return;
		}

		if (!email || !password || !name) {
			res.status(400).json({ error: "Email, password, and name are required" });
			return;
		}

		const { data, error } = await authService.signUp(supabase, {
			email,
			password,
			name,
		});

		if (error) {
			res.status(400).json({ error: error.message });
			return;
		}

		if (!data.user) {
			res.status(500).json({ error: "User creation failed" });
			return;
		}

		// Create user in database
		try {
			await UserService.createUser(data.user.id, data.user.email || "", name);
		} catch (dbError) {
			console.error("Error creating user in database:", dbError);
			// Continue, as auth user is created
		}

		res.status(201).json({
			message: "User registered successfully",
			user: data.user,
			session: data.session,
		});
	} catch (err) {
		console.error("SignUp error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const signIn = async (
	req: SignInRequest,
	res: Response,
): Promise<void> => {
	try {
		const supabase: SupabaseClient = req.app.locals.supabase;
		const { email, password } = req.body;

		if (!supabase) {
			res.status(500).json({ error: "Supabase client not initialized" });
			return;
		}

		if (!email || !password) {
			res.status(400).json({ error: "Email and password are required" });
			return;
		}

		const { data, error } = await authService.signIn(supabase, {
			email,
			password,
		});

		if (error) {
			res.status(401).json({ error: error.message });
			return;
		}

		res.status(200).json({
			message: "Login successful",
			user: data.user,
			session: data.session,
		});
	} catch (err) {
		console.error("SignIn error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const signInWithGoogle = async (
	req: GoogleAuthRequest,
	res: Response,
): Promise<void> => {
	try {
		const supabase: SupabaseClient = req.app.locals.supabase;
		// Get redirectTo from body, or use APP_URL from env
		const redirectTo = req.body.redirectTo || `${process.env.APP_URL || "http://localhost:3000"}/auth/callback`;

		if (!supabase) {
			res.status(500).json({ error: "Supabase client not initialized" });
			return;
		}

		const { data, error } = await authService.signInWithGoogle(supabase, {
			redirectTo,
		});

		if (error) {
			res.status(400).json({ error: error.message });
			return;
		}

		res.status(200).json({
			message: "Google auth URL generated",
			url: data.url,
			redirectTo,
		});
	} catch (err) {
		console.error("Google SignIn error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMe = async (
	req: AuthenticatedRequest,
	res: Response,
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({ error: "User not authenticated" });
			return;
		}

		// Ensure user exists in database
		let dbUser = await UserService.getUserById(req.user.id);
		if (!dbUser) {
			try {
				const name = req.user.user_metadata?.display_name || req.user.email;
				await UserService.createUser(req.user.id, req.user.email || "", name);
				dbUser = await UserService.getUserById(req.user.id);
			} catch (dbError) {
				console.error("Error creating user in database:", dbError);
			}
		}

		res.status(200).json({
			message: "Current user",
			user: req.user,
			dbUser,
		});
	} catch (err) {
		console.error("GetMe error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const logout = async (
	req: AuthenticatedRequest,
	res: Response,
): Promise<void> => {
	try {
		const supabase: SupabaseClient = req.app.locals.supabase;

		if (!supabase) {
			res.status(500).json({ error: "Supabase client not initialized" });
			return;
		}

		if (!req.user) {
			res.status(401).json({ error: "User not authenticated" });
			return;
		}

		// Sign out from Supabase
		const { error } = await authService.signOut(supabase);

		if (error) {
			console.error("Supabase logout error:", error);
		}

		res.status(200).json({
			message: "Logout successful",
			user: req.user.email,
		});
	} catch (err) {
		console.error("Logout error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const completeOnboarding = async (
	req: OnboardingRequest,
	res: Response,
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({ error: "User not authenticated" });
			return;
		}

		const { race, gender, ageRange, interestTopics } = req.body;

		if (!race || !gender || !ageRange || !interestTopics || !Array.isArray(interestTopics)) {
			res.status(400).json({ error: "All onboarding fields are required" });
			return;
		}

		// Update user in database
		const updatedUser = await UserService.updateUser(req.user.id, {
			race,
			gender,
			ageRange,
			interestTopics,
		});

		res.status(200).json({
			message: "Onboarding completed successfully",
			user: updatedUser,
		});
	} catch (err) {
		console.error("Complete onboarding error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};
