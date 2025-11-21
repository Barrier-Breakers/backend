import { SupabaseClient } from "@supabase/supabase-js";

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
	return await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: payload.redirectTo || `${process.env.APP_URL}/auth/callback`,
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
