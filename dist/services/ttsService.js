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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.synthesizeChirpAudioBase64 = void 0;
const text_to_speech_1 = __importDefault(require("@google-cloud/text-to-speech"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.warn("[TTS Service] No Google credentials found in env var GOOGLE_APPLICATION_CREDENTIALS.");
}
// Initialize TextToSpeech client with flexible credential handling
let client;
try {
    const credentialsEnv = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (credentialsEnv) {
        // Try to interpret env var as JSON or base64-encoded JSON
        let parsed = null;
        const trimmed = credentialsEnv.trim();
        if (trimmed.startsWith("{")) {
            try {
                parsed = JSON.parse(trimmed);
            }
            catch (err) {
                parsed = null;
            }
        }
        if (!parsed) {
            // Try base64 decode
            try {
                const decoded = Buffer.from(trimmed, "base64").toString("utf8");
                if (decoded.trim().startsWith("{")) {
                    parsed = JSON.parse(decoded);
                }
            }
            catch (err) {
                parsed = null;
            }
        }
        if (parsed) {
            console.log("[TTS Service] GOOGLE_APPLICATION_CREDENTIALS looks like JSON, initializing client with inline credentials");
            client = new text_to_speech_1.default.TextToSpeechClient({
                credentials: parsed,
                apiEndpoint: "us-texttospeech.googleapis.com",
            });
        }
        else {
            // Assume it's a path to a key file
            console.log("[TTS Service] GOOGLE_APPLICATION_CREDENTIALS looks like a path, initializing client with keyFilename");
            client = new text_to_speech_1.default.TextToSpeechClient({
                keyFilename: credentialsEnv,
                apiEndpoint: "us-texttospeech.googleapis.com",
            });
        }
    }
    else {
        client = new text_to_speech_1.default.TextToSpeechClient();
    }
}
catch (err) {
    console.error("[TTS Service] Error initializing TextToSpeechClient, falling back to default client:", err);
    client = new text_to_speech_1.default.TextToSpeechClient();
}
const synthesizeChirpAudioBase64 = (text, opts) => __awaiter(void 0, void 0, void 0, function* () {
    const languageCode = (opts === null || opts === void 0 ? void 0 : opts.languageCode) || process.env.GEMINI_CHIRP_LANGUAGE || "pt-BR";
    const voiceName = (opts === null || opts === void 0 ? void 0 : opts.voiceName) || process.env.GEMINI_CHIRP_VOICE || "pt-BR-Chirp3-HD-Achernar";
    const audioEncoding = ((opts === null || opts === void 0 ? void 0 : opts.audioEncoding) || process.env.GEMINI_CHIRP_AUDIO_ENCODING || "MP3").toUpperCase();
    const speakingRate = typeof (opts === null || opts === void 0 ? void 0 : opts.speakingRate) === 'number' ? opts.speakingRate : 1.0;
    const pitch = typeof (opts === null || opts === void 0 ? void 0 : opts.pitch) === 'number' ? opts.pitch : 0.0;
    const model = (opts === null || opts === void 0 ? void 0 : opts.model) || process.env.GEMINI_CHIRP_MODEL;
    // Validate audioEncoding
    const validEncodings = ["MP3", "LINEAR16", "OGG_OPUS"];
    const chosenEncoding = validEncodings.includes(audioEncoding) ? audioEncoding : "LINEAR16";
    const request = {
        input: { text },
        voice: { languageCode, name: voiceName },
        audioConfig: { audioEncoding: chosenEncoding, speakingRate, pitch },
    };
    if (model) {
        request.voice.model = model;
    }
    const [response] = yield client.synthesizeSpeech(request);
    const audioContent = response === null || response === void 0 ? void 0 : response.audioContent;
    if (!audioContent) {
        throw new Error("Cloud TTS did not return audio content");
    }
    const buffer = Buffer.isBuffer(audioContent)
        ? audioContent
        : Buffer.from(audioContent, "binary");
    return buffer.toString("base64");
});
exports.synthesizeChirpAudioBase64 = synthesizeChirpAudioBase64;
exports.default = { synthesizeChirpAudioBase64: exports.synthesizeChirpAudioBase64 };
