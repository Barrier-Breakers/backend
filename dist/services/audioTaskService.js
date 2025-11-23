"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = exports.setTaskFailed = exports.setTaskCompleted = exports.setTaskProcessing = exports.createTask = void 0;
const crypto_1 = require("crypto");
const TASKS = new Map();
const TTL_MS = Number(process.env.AUDIO_TASK_TTL_MS || 15 * 60 * 1000); // default 15 minutes
const createTask = () => {
    const id = (0, crypto_1.randomUUID)();
    const task = { id, createdAt: Date.now(), status: "pending", audioBase64: null, error: null };
    TASKS.set(id, task);
    return task;
};
exports.createTask = createTask;
const setTaskProcessing = (id) => {
    const t = TASKS.get(id);
    if (!t)
        return;
    t.status = "processing";
    TASKS.set(id, t);
};
exports.setTaskProcessing = setTaskProcessing;
const setTaskCompleted = (id, audioBase64) => {
    const t = TASKS.get(id);
    if (!t)
        return;
    t.status = "completed";
    t.audioBase64 = audioBase64;
    TASKS.set(id, t);
};
exports.setTaskCompleted = setTaskCompleted;
const setTaskFailed = (id, error) => {
    const t = TASKS.get(id);
    if (!t)
        return;
    t.status = "failed";
    t.error = error;
    TASKS.set(id, t);
};
exports.setTaskFailed = setTaskFailed;
const getTask = (id) => { var _a; return (_a = TASKS.get(id)) !== null && _a !== void 0 ? _a : null; };
exports.getTask = getTask;
// Cleanup loop
setInterval(() => {
    const now = Date.now();
    for (const [id, task] of TASKS) {
        if (now - task.createdAt > TTL_MS) {
            TASKS.delete(id);
        }
    }
}, Math.min(TTL_MS, 60000));
exports.default = {
    createTask: exports.createTask,
    setTaskProcessing: exports.setTaskProcessing,
    setTaskCompleted: exports.setTaskCompleted,
    setTaskFailed: exports.setTaskFailed,
    getTask: exports.getTask,
};
