/**
 * Public HTTP URLs for R2 objects (bucket must have “public access” enabled in Cloudflare).
 * Uses VITE_R2_PUBLIC_URL only — not the S3 API keys. Keys are for Node (r2:upload).
 * Path segments are encoded for spaces/parentheses in object keys.
 */
function encodeObjectKey(relativePath: string): string {
  return relativePath
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export function publicMediaUrl(relativePath: string): string {
  const base = import.meta.env.VITE_R2_PUBLIC_URL?.replace(/\/$/, "");
  const encodedPath = encodeObjectKey(relativePath);
  if (!base) {
    if (import.meta.env.DEV) {
      console.warn(
        `[media] VITE_R2_PUBLIC_URL is not set. Requested: ${relativePath}`
      );
    }
    return `/${encodedPath}`;
  }
  return `${base}/${encodedPath}`;
}
