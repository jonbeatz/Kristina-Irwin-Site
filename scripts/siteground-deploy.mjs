// SiteGround SFTP deploy for the static export (out/).
//
// SAFETY: dry-run by default — prints what WOULD upload and never changes the
// server. Pass --confirm to actually upload. Pass --clean to delete the remote
// target's contents first (DANGER: wipes whatever is there, e.g. a WordPress
// install). Override the target with --remote <path>.
//
//   node scripts/siteground-deploy.mjs                 # dry-run to default path
//   node scripts/siteground-deploy.mjs --confirm        # upload out/ -> remote
//   node scripts/siteground-deploy.mjs --remote /kristinairwin.com/kristinairwin.com/public_html/preview --confirm
//
import SftpClient from "ssh2-sftp-client";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv() {
  const p = resolve(".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^([^=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] ??= m[2].trim();
  }
}
loadEnv();

const args = process.argv.slice(2);
const confirm = args.includes("--confirm");
const clean = args.includes("--clean");
const remoteArg = args[args.indexOf("--remote") + 1];
const REMOTE =
  (args.includes("--remote") && remoteArg) ||
  process.env.SITEGROUND_REMOTE_PATH ||
  "/kristinairwin.com/kristinairwin.com/public_html";
const LOCAL = resolve("out");

if (!existsSync(LOCAL)) {
  console.error("Missing out/ — run: npm run site:build:static");
  process.exit(1);
}

const cfg = {
  host: process.env.SITEGROUND_SFTP_HOST,
  port: Number(process.env.SITEGROUND_SFTP_PORT || 18765),
  username: process.env.SITEGROUND_SFTP_USER,
  readyTimeout: 20000,
};
const keyRef = process.env.SITEGROUND_SFTP_KEY;
if (keyRef && existsSync(keyRef)) {
  const raw = readFileSync(keyRef, "utf8");
  const m = raw.match(/-----BEGIN [^-]+PRIVATE KEY-----[\s\S]*?-----END [^-]+PRIVATE KEY-----/);
  if (m) {
    cfg.privateKey = m[0];
    cfg.passphrase = process.env.SITEGROUND_SFTP_PASSPHRASE || process.env.SITEGROUND_SFTP_PASSWORD;
  }
}
if (!cfg.privateKey) cfg.password = process.env.SITEGROUND_SFTP_PASSWORD;

console.log("=== SiteGround deploy ===");
console.log(`Local:  ${LOCAL}`);
console.log(`Remote: ${REMOTE}`);
console.log(`Mode:   ${confirm ? "UPLOAD" : "DRY-RUN (no changes)"}${clean ? " + CLEAN" : ""}`);

const sftp = new SftpClient();
try {
  await sftp.connect(cfg);
  console.log("Connected.");

  if (!confirm) {
    const exists = await sftp.exists(REMOTE);
    console.log(`Remote exists: ${exists || "no"}`);
    if (exists) {
      const list = await sftp.list(REMOTE);
      console.log(`Remote currently holds ${list.length} entries (top 10):`);
      for (const e of list.slice(0, 10)) console.log(`  [${e.type}] ${e.name}`);
    }
    console.log("\nDRY-RUN complete. Re-run with --confirm to upload out/ to the remote path.");
    if (clean) console.log("NOTE: --clean would DELETE the remote contents above first.");
  } else {
    if (clean) {
      console.log("Cleaning remote target...");
      try { await sftp.rmdir(REMOTE, true); } catch (e) { console.log(`(clean skipped: ${e.message})`); }
      await sftp.mkdir(REMOTE, true);
    }
    console.log("Uploading out/ ...");
    await sftp.uploadDir(LOCAL, REMOTE);
    console.log("UPLOAD_OK");
    const list = await sftp.list(REMOTE);
    console.log(`Remote now holds ${list.length} entries.`);
  }
} catch (err) {
  console.error("DEPLOY_FAIL:", err.message);
  process.exitCode = 2;
} finally {
  await sftp.end();
}
