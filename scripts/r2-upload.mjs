#!/usr/bin/env node
/**
 * Uploads local IIAP media to R2. Keys match src/data/iiapMediaFilenames.json → images/*, videos/*.
 * Usage: npm run r2:upload
 */
import "dotenv/config";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { createR2Client, getBucketName } from "./r2-client.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "src/assets");
const media = JSON.parse(
  readFileSync(path.join(root, "src/data/iiapMediaFilenames.json"), "utf8")
);

const FILES = [
  ...media.images.map((name) => ({
    local: name,
    key: `images/${name}`,
    contentType: "image/jpeg",
  })),
  ...media.videos.map((name) => ({
    local: name,
    key: `videos/${name}`,
    contentType: "video/mp4",
  })),
];

async function main() {
  const client = createR2Client();
  const bucket = getBucketName();

  for (const { local, key, contentType } of FILES) {
    const abs = path.join(assetsDir, local);
    const body = readFileSync(abs);
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
      })
    );
    console.log("Uploaded", key);
  }

  console.log(`\nDone. ${FILES.length} objects in "${bucket}".`);
  const pub = process.env.VITE_R2_PUBLIC_URL?.replace(/\/$/, "");
  if (pub) {
    const sample = encodeURIComponent(media.images[0]);
    console.log("Public URL example:", `${pub}/images/${sample}`);
  } else {
    console.log("Set VITE_R2_PUBLIC_URL in .env so the site can load these URLs in the browser.");
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
