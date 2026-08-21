# Kristina-Irwin-Site — Kristina Irwin one-page website — client SiteGround rebuild (successor to archived Kristina-Irwin).

**Hermes AI profile — self-contained workspace with Mem0, local LLM, and agent ops.**

[![Platform](https://img.shields.io/badge/Platform-Windows_10%2F11-0078D6?logo=windows)](https://github.com/jonbeatz/Kristina-Irwin-Site)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/jonbeatz/Kristina-Irwin-Site/releases)
[![Release](https://img.shields.io/github/v/release/jonbeatz/Kristina-Irwin-Site?label=release&sort=semver)](https://github.com/jonbeatz/Kristina-Irwin-Site/releases)
[![Repo](https://img.shields.io/badge/GitHub-jonbeatz%2FKristina-Irwin-Site-181717?logo=github)](https://github.com/jonbeatz/Kristina-Irwin-Site)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Mem0](https://img.shields.io/badge/Mem0-kristina-irwin-site-purple)](.cursor/docs/MEM0-LMSTUDIO.md)
[![LM Studio](https://img.shields.io/badge/LM_Studio-port_1234-blue)](http://localhost:1234)

----

> **Single source of truth:** Read **[`TRUTH.md`](TRUTH.md)** first, then **[`.cursor/docs/START-HERE.md`](.cursor/docs/START-HERE.md)**.

## 📊 Current Status

| Metric | Value |
| :--- | :--- |
| **Version** | `v1.0.0` · [Latest release](https://github.com/jonbeatz/Kristina-Irwin-Site/releases/tag/v1.0.0) |
| **Stack** | Next.js 15 App Router + Tailwind v4 — LACCD Seat 2 one-pager |
| **Memory** | 🧠 Mem0 + Qdrant — `kristina-irwin-site_memories` collection |
| **Live Site** | https://kristinairwin.com — **still old Senate site** until SiteGround deploy |
| **Status** | One-pager on `Kristina-Irwin-Site-Project-v1` — client review, then deploy |

----

## 1. Project Overview

Kristina-Irwin-Site is a **self-contained Hermes AI profile** at `D:\\Hermes\\projects\\Kristina-Irwin-Site`.

**Profile root:** `D:\\Hermes\\projects\\Kristina-Irwin-Site`

----

## 2. Quick Start

```powershell
cd D:\\Hermes\\projects\\Kristina-Irwin-Site
npm install
npm run env:setup          # Seed .env.local (local operator machine)
npm run session:start -- -Full
```

Say **Start Project** in Cursor to load TRUTH, START-HERE, and ReCall.

----

## 3. Available Commands

| Command | Purpose |
|---------|---------|
| `npm run session:start -- -Full` | Cold boot stack |
| `npm run mem0:search -- "query"` | Search project memory |
| `npm run version:sync` | Sync README badges from `package.json` |
| `npm run release` | Tag + GitHub release |
| `npm run backup:quick` | Backup to `G:\Hermes_Project_BackUpz\Kristina-Irwin-Site\` |

----

## 4. Documentation

| Doc | Purpose |
|-----|---------|
| [`TRUTH.md`](TRUTH.md) | Constitution |
| [`.cursor/docs/START-HERE.md`](.cursor/docs/START-HERE.md) | Daily ops |
| [`.cursor/docs/ReCall.md`](.cursor/docs/ReCall.md) | Session memory |
| [`.cursor/docs/GITHUB-SETUP.md`](.cursor/docs/GITHUB-SETUP.md) | GitHub README + releases |

----

## License

MIT — see [LICENSE](LICENSE).
