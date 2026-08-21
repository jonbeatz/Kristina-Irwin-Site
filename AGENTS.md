# Agent Instructions — Kristina-Irwin-Site Profile

## First time here?

1. Read **`TRUTH.md`** — constitution, core rules, connections.
2. Read **`.cursor/docs/START-HERE.md`** — daily ritual and doc order.
3. Read **`.cursor/docs/ReCall.md`** — recent session history.
4. Read **`.cursor/docs/MASTER-COMMANDS.md`** — all available commands.
5. Browse **`SKILL-INDEX.md`** — available domain skills and what they cover.

## Shared Brain Reference

This project was bootstrapped from the **shared profile content** at
`D:\Hermes\projects\_core-scripts\shared-profile-content\`. See the ecosystem
layout in **`PROJECT-STRUCTURE.md`** (in that same repo).

## Documentation Hierarchy

| Priority | Document | Purpose |
|----------|----------|---------|
| 1 | `TRUTH.md` | Constitution |
| 2 | START-HERE.md | Daily ops |
| 3 | MASTER-COMMANDS.md | Command reference |
| 4 | MEM0-LMSTUDIO.md | Memory + local LLM |
| 5 | ENV-VARS-REFERENCE.md | Env var registry |
| 6 | TOOLS-SETUP-STATUS.md | READY vs NEEDS_KEY (Hermes-wide; shared library) |
| 7 | TROUBLESHOOTING.md | Known issues |
| 8 | PROJECT-STRUCTURE.md | Ecosystem layout (in _core-scripts) |
| 9 | ReCall.md | Session history |

**Hermes tool docs (shared canonical):** `D:\Hermes\projects\_core-scripts\shared-profile-content\docs\TOOLS-*.md`

## Session Rituals

| Trigger | Action |
|---------|--------|
| **Start Project** / **Cold Start** | `-Full` stack + read TRUTH + ReCall + Mem0 + status card + voice greeting |
| **Open Project** / **Resume Session** | `session:open` probes only — no voice, no stack restart |
| **Close Project** / **Close Session** | Handoff docs + Mem0 + `session:handoff` — fleet stays up |
| **End Project** / **End Session** | Day-end docs + Mem0 + AskQuestion git/stop stack + voice + `session:stop` |
| **Update Docs** | Sync version, encoding check, align docs |
| **Backup Project** | Run interactive backup flow per project convention |

## Backup

```powershell
npm run backup:quick    # Standard backup, auto folder name, no prompts
npm run backup:full     # Full mirror — includes everything
```

Backups go to `G:\Hermes_Project_BackUpz\Kristina-Irwin-Site\` with sequential naming.

## Skills Index

Available domain skills (see `SKILL-INDEX.md` for full list with tags):

- **Design:** NovaMira-Design, Premium-UI, DesignMD, MSC-UI-Taste
- **3D:** Three.js-Ops, WebGL-UI, 3D-Modeling, 3D-Scroll
- **Git/DevOps:** GitHub-Ops, Workflow-Ops, Checkpoint-Restore
- **Deploy:** Deploy-FTP-Node, Docs-Governance
- **Automation:** Google-Workspace, Image-Workflow

## Core Rules

- **Environment:** Windows 10/11 PowerShell. No bash heredocs.
- **UTF-8:** Never rewrite .md from PowerShell without -Encoding UTF8.
- **Mem0:** Use `kristina-irwin-site_memories` collection only — never other profiles.
- **Boundaries:** Stay within this profile. Do not mix other profiles' context.
- **Recovery:** Run recovery commands yourself — don't only tell the operator.
- **Backup root:** `G:\Hermes_Project_BackUpz\Kristina-Irwin-Site\`

---

*Created: 2026-08-21*
