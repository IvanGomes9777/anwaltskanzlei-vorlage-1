// Einfaches In-Memory-Rate-Limit (Sliding Window) pro Schlüssel (z. B. IP).
// Gilt pro Serverless-Instanz — ausreichend gegen einfachen Missbrauch des
// Kontaktformulars. Bei echtem Missbrauch auf einen geteilten Store
// (z. B. Upstash/Redis) wechseln.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function rateLimit(key: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    const retryAfter = Math.ceil((timestamps[0] + WINDOW_MS - now) / 1000);
    return { ok: false, retryAfter: Math.max(retryAfter, 1) };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Gelegentliches Aufräumen, damit die Map nicht unbegrenzt wächst.
  if (hits.size > 1000) {
    for (const [k, v] of hits) {
      if (v.every((t) => t <= windowStart)) hits.delete(k);
    }
  }

  return { ok: true, retryAfter: 0 };
}
