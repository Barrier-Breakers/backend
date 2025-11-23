import { randomUUID } from "crypto";

export type AudioTaskStatus = "pending" | "completed" | "failed" | "processing";

export interface AudioTask {
  id: string;
  createdAt: number;
  status: AudioTaskStatus;
  audioBase64?: string | null;
  error?: string | null;
}

const TASKS = new Map<string, AudioTask>();
const TTL_MS = Number(process.env.AUDIO_TASK_TTL_MS || 15 * 60 * 1000); // default 15 minutes

export const createTask = (): AudioTask => {
  const id = randomUUID();
  const task: AudioTask = { id, createdAt: Date.now(), status: "pending", audioBase64: null, error: null };
  TASKS.set(id, task);
  return task;
};

export const setTaskProcessing = (id: string) => {
  const t = TASKS.get(id);
  if (!t) return;
  t.status = "processing";
  TASKS.set(id, t);
};

export const setTaskCompleted = (id: string, audioBase64: string) => {
  const t = TASKS.get(id);
  if (!t) return;
  t.status = "completed";
  t.audioBase64 = audioBase64;
  TASKS.set(id, t);
};

export const setTaskFailed = (id: string, error: string) => {
  const t = TASKS.get(id);
  if (!t) return;
  t.status = "failed";
  t.error = error;
  TASKS.set(id, t);
};

export const getTask = (id: string) => TASKS.get(id) ?? null;

// Cleanup loop
setInterval(() => {
  const now = Date.now();
  for (const [id, task] of TASKS) {
    if (now - task.createdAt > TTL_MS) {
      TASKS.delete(id);
    }
  }
}, Math.min(TTL_MS, 60_000));

export default {
  createTask,
  setTaskProcessing,
  setTaskCompleted,
  setTaskFailed,
  getTask,
};
