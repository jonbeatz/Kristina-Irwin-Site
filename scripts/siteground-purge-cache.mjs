// Flush SiteGround SuperCacher (Dynamic Cache) after a static SFTP upload.
//
// This account is SFTP-only: SSH connects but `exec` is denied, so Site Tools
// UI is not required. We drop a one-shot PHP file that issues nginx PURGE to
// 127.0.0.1 with the site Host header, hit it over HTTPS, then delete it.
//
//   npm run siteground:purge-cache
//
import SftpClient from "ssh2-sftp-client";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { randomBytes } from "node:crypto";

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

const HOSTS = ["kristinairwin.com", "www.kristinairwin.com"];

function sftpCfg() {
  const cfg = {
    host: process.env.SITEGROUND_SFTP_HOST,
    port: Number(process.env.SITEGROUND_SFTP_PORT || 18765),
    username: process.env.SITEGROUND_SFTP_USER,
    readyTimeout: 20000,
  };
  const keyRef = process.env.SITEGROUND_SFTP_KEY;
  if (keyRef && existsSync(keyRef)) {
    const raw = readFileSync(keyRef, "utf8");
    const pem = raw.match(/-----BEGIN [^-]+PRIVATE KEY-----[\s\S]*?-----END [^-]+PRIVATE KEY-----/);
    if (pem) {
      cfg.privateKey = pem[0];
      cfg.passphrase = process.env.SITEGROUND_SFTP_PASSPHRASE || process.env.SITEGROUND_SFTP_PASSWORD;
    }
  }
  if (!cfg.privateKey) cfg.password = process.env.SITEGROUND_SFTP_PASSWORD;
  if (!cfg.host || !cfg.username) {
    throw new Error("Missing SITEGROUND_SFTP_* vars in .env.local");
  }
  return cfg;
}

const php = `<?php
header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: private, no-store, no-cache');
function purge($host) {
  if (!function_exists('curl_init')) {
    return "NO_CURL host=$host\\n";
  }
  $ch = curl_init('http://127.0.0.1/*');
  curl_setopt_array($ch, [
    CURLOPT_CUSTOMREQUEST => 'PURGE',
    CURLOPT_HTTPHEADER => ['Host: '.$host],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER => true,
    CURLOPT_TIMEOUT => 10,
  ]);
  $out = curl_exec($ch);
  $err = curl_error($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return "HOST $host CODE $code ERR $err\\n$out\\n";
}
echo purge('kristinairwin.com');
echo purge('www.kristinairwin.com');
`;

const remoteDir = process.env.SITEGROUND_REMOTE_PATH;
if (!remoteDir) {
  console.error("Missing SITEGROUND_REMOTE_PATH");
  process.exit(1);
}

const name = `ki-purge-${randomBytes(8).toString("hex")}.php`;
const remotePath = `${remoteDir.replace(/\/$/, "")}/${name}`;
const cfg = sftpCfg();
let uploaded = false;

try {
  const sftp = new SftpClient();
  await sftp.connect(cfg);
  await sftp.put(Buffer.from(php, "utf8"), remotePath);
  uploaded = true;
  await sftp.end();
  console.log(`Uploaded one-shot ${name}`);

  const url = `https://kristinairwin.com/${name}`;
  const res = await fetch(url, { headers: { "Cache-Control": "no-cache", Pragma: "no-cache" } });
  const body = await res.text();
  console.log(`PURGE HTTP ${res.status}`);
  console.log(body.trim());
  if (!body.includes("Successful purge")) {
    process.exitCode = 2;
  }
} catch (err) {
  console.error("PURGE_FAIL:", err.message);
  process.exitCode = 2;
} finally {
  if (uploaded) {
    try {
      const sftp = new SftpClient();
      await sftp.connect(cfg);
      await sftp.delete(remotePath);
      await sftp.end();
      console.log(`Deleted ${name}`);
    } catch (e) {
      console.error("DELETE_FAIL (remove manually from public_html):", e.message);
      process.exitCode = 2;
    }
  }
}

if (process.exitCode && process.exitCode !== 0) process.exit(process.exitCode);

console.log("\nVerifying live titles...");
for (const host of HOSTS) {
  const res = await fetch(`https://${host}/`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
  });
  const html = await res.text();
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "(no title)";
  console.log(`  ${res.status} ${host}  ${title}  (${html.length} bytes)`);
}
