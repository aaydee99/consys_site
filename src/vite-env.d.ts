/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Cloudflare R2 bucket name (e.g. consys-storage) — reference / future tooling */
  readonly VITE_R2_BUCKET_NAME?: string;
  /** Public origin for R2 objects — no trailing slash */
  readonly VITE_R2_PUBLIC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
