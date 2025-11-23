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
const MAX_SUMMARY_CHARS = Number(process.env.GEMINI_SUMMARY_MAX_CHARS || 600);
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
	const maxChars = MAX_SUMMARY_CHARS;
	const prompt = `Resuma o seguinte texto para uma pessoa leiga, em ${language}:\n\n${content}\n\nInstruções muito importantes: 1) Retorne APENAS o texto final (sem preâmbulo ou explicações extras); 2) O resultado deve consistir em um único parágrafo resumo (sem bullets ou listas); 3) Não utilize siglas ou abreviações — expanda-as por extenso; 4) Não use símbolos Markdown (como asteriscos, negrito, headings); 5) Mantenha o texto simples e direto; 6) O resumo inteiro (parágrafo) deve ter no máximo ${maxChars} caracteres; 7) Não inclua frases como 'Aqui está' ou 'Em resumo' — apenas o conteúdo pedido.`;

	const response: any = await withTimeout(
		ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: prompt,
		}),
		TIMEOUT_MS_SUMMARIZE,
		"Gemini summarize timeout",
	);

	// Prefer response.text, fallback to candidates
	const raw = (response as any)?.text || (response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "");
	const cleaned = sanitizeSummary(raw, MAX_SUMMARY_CHARS);
	console.log("[GeminiService] Summarize returned length:", cleaned?.length);
	return cleaned;
};

function sanitizeSummary(text: string, maxChars: number) {
	if (!text) return text;
	// Remove common markdown symbols and headings
	let out = text.replace(/\*\*|\*|__|`|###|##|#|\-|•/g, "");
	// Remove common preamble phrases (e.g., "Aqui está o resumo...")
	out = out.replace(/^(A|a)qui (está|tá) (o|um|um resumo\s*[:\-])?,?/g, "");
	out = out.replace(/^(E|e)m resumo(,|:)?\s*/g, "");
	// Expand commonly used acronyms
	const expansions: Record<string, string> = {
		FUNAI: "Fundação Nacional dos Povos Indígenas",
		PAA: "Programa de Aquisição de Alimentos",
		DOU: "Diário Oficial da União",
		PL: "Projeto de Lei",
		STF: "Supremo Tribunal Federal",
		MP: "Ministério Público",
	};
	for (const [k, v] of Object.entries(expansions)) {
		const re = new RegExp(`\\b${k}\\b`, "gi");
		out = out.replace(re, v);
	}
	// Remove leading numbered/bullet list markers per-line
	out = out.split('\n').map(line => line.replace(/^\s*([0-9]+\.|[0-9]+\)|-\s+|\*\s+|•\s+)/, '')).join(' ');
	// Normalize whitespace
	out = out.replace(/\s+/g, " ").trim();
	// If more than max chars, truncate to the last sentence before max
	if (out.length > maxChars) {
		const truncated = out.slice(0, maxChars);
		const lastDot = truncated.lastIndexOf('.');
		if (lastDot > Math.floor(maxChars / 2)) {
			out = truncated.slice(0, lastDot + 1);
		} else {
			out = truncated + '...';
		}
	}
	return out;
}

export const textToSpeechBase64 = async (text: string, opts?: { audioEncoding?: string }) => {
	const audioEncoding = (opts?.audioEncoding || 'MP3').toUpperCase();
	console.log("[GeminiService] TTS called (chars):", text?.length, "timeoutMs:", TIMEOUT_MS_TTS, "attempts:", TTS_ATTEMPTS, "audioEncoding:", audioEncoding);
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
					audioEncoding: audioEncoding,
					model: process.env.GEMINI_CHIRP_MODEL,
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
