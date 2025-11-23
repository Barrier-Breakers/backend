import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import * as ttsService from "./ttsService";

dotenv.config();

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && !process.env.GOOGLE_API_KEY && !process.env.GEMINI_API_KEY) {
	console.warn(
		"[GeminiService] No Google Generative AI API Key found in environment variables."
	);
}

const ai = new GoogleGenAI({});

const TIMEOUT_MS_SUMMARIZE = Number(process.env.GEMINI_SUMMARIZE_TIMEOUT_MS || 30_000);
const TIMEOUT_MS_TTS = Number(process.env.GEMINI_TTS_TIMEOUT_MS || 360_000); // default 3 minutes
const TTS_ATTEMPTS = Number(process.env.GEMINI_TTS_ATTEMPTS || 3);

function withTimeout<T>(promise: Promise<T>, ms: number, reason = "timeout") {
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error(reason)), ms),
	);
	return Promise.race([promise, timeout]);
}

export const summarizeText = async (content: string, language = "pt-BR") => {
	console.log("[GeminiService] Summarize called (chars):", content?.length);
	const prompt = `Resuma o seguinte texto para uma pessoa leiga, em ${language}:\n\n${content}\n\nRetorne um texto claro e objetivo com título, um parágrafo de resumo curto, e bullets com os pontos importantes. Use linguagem simples e evite jargões.`;

	const response: any = await withTimeout(
		ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: prompt,
		}),
		TIMEOUT_MS_SUMMARIZE,
		"Gemini summarize timeout",
	);

	// Prefer response.text, fallback to candidates
	const text = (response as any)?.text || (response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "");
	console.log("[GeminiService] Summarize returned length:", text?.length);
	return text;
};

export const textToSpeechBase64 = async (text: string) => {
	console.log("[GeminiService] TTS called (chars):", text?.length, "timeoutMs:", TIMEOUT_MS_TTS, "attempts:", TTS_ATTEMPTS);
	let lastErr: Error | null = null;
	for (let attempt = 1; attempt <= TTS_ATTEMPTS; attempt++) {
		try {
			console.log(`[GeminiService] TTS attempt ${attempt}/${TTS_ATTEMPTS}`);
			const attemptTimeout = TIMEOUT_MS_TTS * attempt; // increase timeout in subsequent attempts
			// Use Cloud TTS (Chirp) instead of Gemini TTS preview
			const ttsResponse = await withTimeout(
				ttsService.synthesizeChirpAudioBase64(text, {
					languageCode: 'pt-BR',
					voiceName: process.env.GEMINI_CHIRP_VOICE || 'Achernar',
					audioEncoding: 'MP3',
				}),
				attemptTimeout,
				`Cloud TTS timeout (attempt ${attempt})`,
			);

			const data = ttsResponse; // already base64 encoded string
			if (!data) throw new Error("Cloud TTS generation did not return audio data");

			console.log("[GeminiService] Cloud TTS returned data (base64 length):", data?.length);
			return data; // base64 encoded audio
		} catch (err) {
			lastErr = err as Error;
			const errMsg = err instanceof Error ? err.message : String(err);
			console.error(`[GeminiService] TTS attempt ${attempt} error:`, errMsg);
			if (attempt < TTS_ATTEMPTS) {
				const backoffMs = 1000 * Math.pow(2, attempt - 1);
				console.log(`[GeminiService] Waiting ${backoffMs}ms before retry...`);
				await new Promise((resolve) => setTimeout(resolve, backoffMs));
			}
		}
	}

	throw lastErr ?? new Error("TTS generation failed after attempts");
};

export default { summarizeText, textToSpeechBase64 };
