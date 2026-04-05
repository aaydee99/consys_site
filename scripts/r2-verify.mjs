#!/usr/bin/env node
/**
 * Verifies R2 credentials and endpoint by listing objects (max 1 key).
 * Usage: npm run r2:verify
 */
import "dotenv/config";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { createR2Client, getBucketName } from "./r2-client.mjs";

const bucket = getBucketName();

async function main() {
  const client = createR2Client();
  const out = await client.send(
    new ListObjectsV2Command({ Bucket: bucket, MaxKeys: 1 })
  );
  console.log(`Connected to R2 bucket "${bucket}".`);
  if (out.KeyCount === 0) {
    console.log("Bucket is empty — run npm run r2:upload to upload media.");
  } else {
    console.log("Sample key:", out.Contents?.[0]?.Key);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
