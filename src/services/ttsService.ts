import textToSpeech, { TextToSpeechClient } from "@google-cloud/text-to-speech";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
	console.warn(
		"[TTS Service] No Google credentials found in env var GOOGLE_APPLICATION_CREDENTIALS."
	);
}

// Initialize TextToSpeech client with flexible credential handling
let client: TextToSpeechClient;
try {
	const credentialsEnv = process.env.GOOGLE_APPLICATION_CREDENTIALS;
	if (credentialsEnv) {
		// Try to interpret env var as JSON or base64-encoded JSON
		let parsed: any | null = null;
		const trimmed = credentialsEnv.trim();
		if (trimmed.startsWith("{")) {
			try {
				parsed = JSON.parse(trimmed);
			} catch (err) {
				parsed = null;
			}
		}
		if (!parsed) {
			// Try base64 decode
			try {
				const decoded = Buffer.from(
					trimmed,
					"base64"
				).toString("utf8");
				if (decoded.trim().startsWith("{")) {
					parsed = JSON.parse(decoded);
				}
			} catch (err) {
				parsed = null;
			}
		}

		if (parsed) {
			console.log(
				"[TTS Service] GOOGLE_APPLICATION_CREDENTIALS looks like JSON, initializing client with inline credentials"
			);
			client = new textToSpeech.TextToSpeechClient({
				credentials: parsed,
			});
		} else {
			// Assume it's a path to a key file
			console.log(
				"[TTS Service] GOOGLE_APPLICATION_CREDENTIALS looks like a path, initializing client with keyFilename"
			);
			client = new textToSpeech.TextToSpeechClient({
				keyFilename: credentialsEnv,
			});
		}
	} else {
		client = new textToSpeech.TextToSpeechClient();
	}
} catch (err) {
	console.error(
		"[TTS Service] Error initializing TextToSpeechClient, falling back to default client:",
		err
	);
	client = new textToSpeech.TextToSpeechClient();
}

export interface TTSOptions {
	languageCode?: string;
	voiceName?: string;
	audioEncoding?: string; // 'MP3' | 'LINEAR16' | 'OGG_OPUS'
	speakingRate?: number;
	pitch?: number;
}

export const synthesizeChirpAudioBase64 = async (
	text: string,
	opts?: TTSOptions
) => {
	const languageCode = "pt-BR";
	const voiceName = "pt-BR-Chirp3-HD-Achernar";
	const audioEncoding = "MP3";
	const speakingRate = 1.0;
	const pitch = 0.0;

	const request: any = {
		input: { text },
		voice: { languageCode, name: voiceName },
		audioConfig: { audioEncoding, speakingRate, pitch },
	};

	const [response] = await client.synthesizeSpeech(request);
	const audioContent = response?.audioContent as
		| Buffer
		| string
		| undefined;
	if (!audioContent) {
		throw new Error("Cloud TTS did not return audio content");
	}
	const buffer = Buffer.isBuffer(audioContent)
		? audioContent
		: Buffer.from(audioContent as string, "binary");
	return buffer.toString("base64");
};

export default { synthesizeChirpAudioBase64 };
