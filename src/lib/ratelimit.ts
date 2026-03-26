import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Inisialisasi koneksi ke Redis Upstash
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Buat aturan: Maksimal 10 request dalam 1 menit per IP
export const uploadRateLimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});