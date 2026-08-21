// Read-only SiteGround SFTP connectivity test. Loads .env.local, connects,
// lists the remote home directory. Does NOT upload or change anything.
//   node scripts/siteground-test.mjs
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

const cfg = {
  host: process.env.SITEGROUND_SFTP_HOST,
  port: Number(process.env.SITEGROUND_SFTP_PORT || 18765),
  username: process.env.SITEGROUND_SFTP_USER,
  readyTimeout: 20000,
};

// SiteGround SFTP prefers key auth. Extract the PEM block from the reference .md.
const keyRef = process.env.SITEGROUND_SFTP_KEY;
if (keyRef && existsSync(keyRef)) {
  const raw = readFileSync(keyRef, "utf8");
  const m = raw.match(/-----BEGIN [^-]+PRIVATE KEY-----[\s\S]*?-----END [^-]+PRIVATE KEY-----/);
  if (m) {
    cfg.privateKey = m[0];
    cfg.passphrase = process.env.SITEGROUND_SFTP_PASSPHRASE || process.env.SITEGROUND_SFTP_PASSWORD;
    console.log("Auth: private key + passphrase");
  }
}
if (!cfg.privateKey) {
  cfg.password = process.env.SITEGROUND_SFTP_PASSWORD;
  console.log("Auth: password");
}

if (!cfg.host || !cfg.username) {
  console.error("Missing SITEGROUND_SFTP_* vars in .env.local");
  process.exit(1);
}

const sftp = new SftpClient();
try {
  console.log(`Connecting to ${cfg.username}@${cfg.host}:${cfg.port} ...`);
  await sftp.connect(cfg);
  console.log("CONNECT_OK");
  const cwd = await sftp.cwd();
  console.log(`Remote home: ${cwd}`);
  const list = await sftp.list(cwd);
  console.log(`Entries (${list.length}):`);
  for (const e of list) console.log(`  [${e.type}] ${e.name}`);
  // Probe for a www / public_html structure to guide the deploy path
  for (const probe of ["www", "public_html", "domains"]) {
    const hit = list.find((e) => e.name === probe);
    if (hit) console.log(`Found: ${cwd}/${probe} (${hit.type})`);
  }
} catch (err) {
  console.error("CONNECT_FAIL:", err.message);
  process.exitCode = 2;
} finally {
  await sftp.end();
}
