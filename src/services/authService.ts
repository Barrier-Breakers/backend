import { SupabaseClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();


export interface SignUpPayload {
	email: string;
	password: string;
}

export interface SignInPayload {
	email: string;
	password: string;
}

export interface GoogleAuthPayload {
	redirectTo?: string;
}

export const signUp = async (
	supabase: SupabaseClient,
	payload: SignUpPayload,
) => {
	return await supabase.auth.signUp({
		email: payload.email,
		password: payload.password,
	});
};

export const signIn = async (
	supabase: SupabaseClient,
	payload: SignInPayload,
) => {
	return await supabase.auth.signInWithPassword({
		email: payload.email,
		password: payload.password,
	});
};

export const signInWithGoogle = async (
	supabase: SupabaseClient,
	payload: GoogleAuthPayload,
) => {
	// Build callback URL with priority:
	// 1. Explicitly provided redirectTo
	// 2. APP_URL from environment
	// 3. Fallback to localhost (development only)
	const redirectTo =
		payload.redirectTo ||
		process.env.APP_URL ||
		"http://localhost:3000";

	// Ensure the callback path is appended
	const callbackUrl = redirectTo.endsWith("/auth/callback")
		? redirectTo
		: `${redirectTo}/auth/callback`;

	console.log(
		"[Google OAuth] Redirect URL configured:",
		callbackUrl
	);

	return await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: callbackUrl,
			skipBrowserRedirect: false,
		},
	});
};

export const getUserByToken = async (
	supabase: SupabaseClient,
	token: string,
) => {
	return await supabase.auth.getUser(token);
};

export const signOut = async (supabase: SupabaseClient) => {
	return await supabase.auth.signOut();
};
