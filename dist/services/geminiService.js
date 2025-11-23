"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechBase64 = exports.summarizeText = void 0;
const genai_1 = require("@google/genai");
const dotenv = __importStar(require("dotenv"));
const ttsService = __importStar(require("./ttsService"));
dotenv.config();
if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && !process.env.GOOGLE_API_KEY && !process.env.GEMINI_API_KEY) {
    console.warn("[GeminiService] No Google Generative AI API Key found in environment variables.");
}
const ai = new genai_1.GoogleGenAI({});
const TIMEOUT_MS_SUMMARIZE = Number(process.env.GEMINI_SUMMARIZE_TIMEOUT_MS || 30000);
const TIMEOUT_MS_TTS = Number(process.env.GEMINI_TTS_TIMEOUT_MS || 360000); // default 3 minutes
const TTS_ATTEMPTS = Number(process.env.GEMINI_TTS_ATTEMPTS || 3);
function withTimeout(promise, ms, reason = "timeout") {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error(reason)), ms));
    return Promise.race([promise, timeout]);
}
const summarizeText = (content_1, ...args_1) => __awaiter(void 0, [content_1, ...args_1], void 0, function* (content, language = "pt-BR") {
    var _a, _b, _c, _d, _e, _f;
    console.log("[GeminiService] Summarize called (chars):", content === null || content === void 0 ? void 0 : content.length);
    const prompt = `Resuma o seguinte texto para uma pessoa leiga, em ${language}:\n\n${content}\n\nRetorne apenas o resultado final, sem qualquer preâmbulo ou explicação. Produza: um título, um parágrafo resumo curto, e bullets com os pontos importantes. Não inclua frases como "Aqui está o resumo" ou qualquer texto adicional; responda apenas com o resumo solicitado.`;
    const response = yield withTimeout(ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    }), TIMEOUT_MS_SUMMARIZE, "Gemini summarize timeout");
    // Prefer response.text, fallback to candidates
    const text = (response === null || response === void 0 ? void 0 : response.text) || ((_f = (_e = (_d = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.text) !== null && _f !== void 0 ? _f : "");
    console.log("[GeminiService] Summarize returned length:", text === null || text === void 0 ? void 0 : text.length);
    return text;
});
exports.summarizeText = summarizeText;
const textToSpeechBase64 = (text) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[GeminiService] TTS called (chars):", text === null || text === void 0 ? void 0 : text.length, "timeoutMs:", TIMEOUT_MS_TTS, "attempts:", TTS_ATTEMPTS);
    let lastErr = null;
    for (let attempt = 1; attempt <= TTS_ATTEMPTS; attempt++) {
        try {
            console.log(`[GeminiService] TTS attempt ${attempt}/${TTS_ATTEMPTS}`);
            const attemptTimeout = TIMEOUT_MS_TTS * attempt; // increase timeout in subsequent attempts
            // Use Cloud TTS (Chirp) instead of Gemini TTS preview
            const ttsResponse = yield withTimeout(ttsService.synthesizeChirpAudioBase64(text, {
                languageCode: 'pt-BR',
                voiceName: process.env.GEMINI_CHIRP_VOICE || 'Achernar',
                audioEncoding: 'MP3',
            }), attemptTimeout, `Cloud TTS timeout (attempt ${attempt})`);
            const data = ttsResponse; // already base64 encoded string
            if (!data)
                throw new Error("Cloud TTS generation did not return audio data");
            console.log("[GeminiService] Cloud TTS returned data (base64 length):", data === null || data === void 0 ? void 0 : data.length);
            return data; // base64 encoded audio
        }
        catch (err) {
            lastErr = err;
            const errMsg = err instanceof Error ? err.message : String(err);
            console.error(`[GeminiService] TTS attempt ${attempt} error:`, errMsg);
            if (attempt < TTS_ATTEMPTS) {
                const backoffMs = 1000 * Math.pow(2, attempt - 1);
                console.log(`[GeminiService] Waiting ${backoffMs}ms before retry...`);
                yield new Promise((resolve) => setTimeout(resolve, backoffMs));
            }
        }
    }
    throw lastErr !== null && lastErr !== void 0 ? lastErr : new Error("TTS generation failed after attempts");
});
exports.textToSpeechBase64 = textToSpeechBase64;
exports.default = { summarizeText: exports.summarizeText, textToSpeechBase64: exports.textToSpeechBase64 };
