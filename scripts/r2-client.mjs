/**
 * S3-compatible client for Cloudflare R2 (Node only — never ship keys to the browser).
 * The website loads files via VITE_R2_PUBLIC_URL (public HTTP); this client uses SigV4 for PutObject etc.
 */
import { S3Client } from "@aws-sdk/client-s3";

export function createR2Client() {
  const endpoint = process.env.R2_S3_ENDPOINT?.replace(/\/$/, "");
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error(
      "Set R2_S3_ENDPOINT, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY in .env (see .env.example)."
    );
  }

  return new S3Client({
    region: "auto",
    endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export function getBucketName() {
  return process.env.R2_BUCKET_NAME || process.env.VITE_R2_BUCKET_NAME || "consys-storage";
}
