# START HERE — Kristina-Irwin-Site Daily Ops

If an agent is new to this profile, read this file first.

**Profile root:** D:\\Hermes\\projects\\Kristina-Irwin-Site
**Hermes slug:** kristina-irwin-site

**Now (2026-09-03):** Active `Kristina-Irwin-Site-Project-v3` (3.0.0). Frozen v2 @ `f1fac14`. Live https://kristinairwin.com has Involve polish. Redeploy: `site:build:static` → `siteground:deploy:clean` → **Site Tools Dynamic Cache Flush** (scripted `siteground:purge-cache` broken as of 2026-09-03 — see SiteGround-Deploy.md).

**Local images (this PC, $0):** `npm run comfy:start:qwen` then App Mode **Lightning**. Card: [LOCAL-COMFY-2512-LIGHTNING.md](./LOCAL-COMFY-2512-LIGHTNING.md).

---

## Operator Profile

- **Operator:** Jon
- **Handshake (required):**
  - Startup: **"Ok Jon — Kristina-Irwin-Site profile loaded, ready."**
  - Closeout: **"Great work Jon — session saved."**

---

## Source-of-Truth Order

When docs differ, use this priority:

1. `TRUTH.md` — Profile constitution
2. `START-HERE.md` (this file)
3. `MASTER-COMMANDS.md` — Command reference
4. `MEM0-LMSTUDIO.md` — Memory + local LLM
5. Skills in SKILL-INDEX.md — Domain expertise
6. `ReCall.md` / `project-log.md` — Session history
7. **`TOOLS-WATCHLIST.md`** / **`TOOLS-SETUP-STATUS.md`** — Hermes-wide tool grades + setup checklist (from shared library)

**Shared canonical:** `D:\Hermes\projects\_core-scripts\shared-profile-content\docs\TOOLS-*.md`

---

## Start Project (cold boot)

Say **Start Project** or **Cold Start**.

**Agent must:**
1. Run `npm run session:start -- -Full` from profile root (auto-launches LM Studio if offline, starts DeepSeek + ngrok)
2. Run `npm run mem0:preflight` → if offline, alert operator to start LM Studio manually
3. Run `npm run mem0:search -- "test"` as smoke test → if fails, ask operator to load `qwen3-4b-instruct-2507` in LM Studio GUI
4. Read `TRUTH.md`, this file, and `ReCall.md`
5. Search Mem0 for "current priorities"
6. Print session status card (ports, services, Mem0)

---

## Open Project (resume — keep fleet)

Say **Open Project** or **Resume Session** when switching into this workspace (LiteLLM/ngrok may already be up).

**Agent must:**
1. Run `npm run session:open` (light probes only — no `-Full`)
2. Read `TRUTH.md`, this file, and `ReCall.md`
3. `npm run mem0:search -- "current priorities"`
4. Print status card — **no** `draven:speak`

---

## Close Project (switch away — keep fleet)

Say **Close Project** or **Close Session** when leaving this folder for another Hermes project.

**Agent must:**
1. Summarize + update `ReCall.md` and `project-log.md` (note fleet left running)
2. Mem0 + `npm run session:handoff`
3. **AskQuestion** for git — never auto-commit
4. **Do not** run `session:stop` or `draven:speak`
5. **Do not** stop dev on `:3000` unless operator is quitting Cursor — another project uses `:3001` if `:3000` is busy

---

## End Project (day-end)

Say **End Project**, **End Session**, or **Done for today**.

**Agent must:**
1. Summarize what was done
2. Update `ReCall.md` and `project-log.md`
3. Mem0 + vault
4. **AskQuestion** for git, then **AskQuestion** to stop dev on **:3000** when listening (recommend stop before quitting Cursor), then **AskQuestion** for stop LiteLLM + ngrok (recommend stop)
5. `draven:speak` farewell, then `npm run session:stop` (with `-StopDeepSeek` if confirmed)

**LM Studio:** Keep **off** Windows Startup autostart. `session:start -- -Full` launches when needed. See `FLEET-BOOT-SESSION.md`.

---

## Local Services

| Service | URL |
|---------|-----|
| LiteLLM (paid) | http://localhost:4000 |
| LM Studio (free) | http://localhost:1234 |
| ngrok inspector | http://localhost:4040 |

---

## Mem0 Quick Reference

```powershell
npm run mem0:preflight   # Verify LM Studio
npm run mem0:search -- "query"
npm run mem0:add -- "text to remember"
npm run mem0:list
```

Default model: **qwen3-4b-instruct-2507** @ LM Studio `:1234`
Collection: `kristina-irwin-site_memories`

---

## Environment Variables

See `ENV-VARS-REFERENCE.md` for the full registry of env vars this profile uses. Key vars are set in `.env.local`.

---

## Fitness Check

To check if this project is missing shared skeleton features:

```powershell
powershell -File D:\Hermes\projects\_core-scripts\shared-profile-content\scripts\check-shared-version.ps1
```

Or read `D:\Hermes\projects\_core-scripts\shared-profile-content\docs\FITNESS-CHECK.md` for the full checklist.

## Docs & UTF-8 Hygiene

Before doc commits:

```powershell
npm run encoding:check   # mojibake scan
npm run docs:sync        # alignment audit
```

Never bulk-rewrite markdown from PowerShell without `-Encoding UTF8`.

---

*Created: 2026-08-21*
