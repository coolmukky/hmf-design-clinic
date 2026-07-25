# HMF Design Clinic

A complete, self-contained team activity: participants act as Cisco Solution
Engineers for a fictional customer (**Cedarline Health Group**), read the
customer scenario, and work **four use cases** — for each, they answer the
customer's concerns with a **product/platform** and a **Solution-Engineer
response**. Answers are scored (0–100 per use case, **400 total**).

**Live:** https://coolmukky.github.io/hmf-design-clinic/ · Proctor: `/proctor.html`

---

## What's in this package

### 🌐 The website (runs on GitHub Pages)
| File | What it is |
|---|---|
| `index.html` | **Participant app** — team registration, the customer scenario with a Hybrid Mesh Firewall diagram, the four use cases, submit → AI score → running total. Shared auto-sync with a single-device fallback. |
| `proctor.html` | **Proctor console** — every team, members, per-use-case scores + total; per-use-case answer keys; AI model picker + on/off; CSV export. |
| `playbook.html` | The static **playbook** (pre-read reference). |
| `grader.html` | **Solution Grader** — a side tool for the *offline* flow: teams upload their completed worksheet (PDF / Word / text), the proctor uploads (or edits) the answer sheet, and the AI scores each team's document across the four use cases (0–100 each, /400). Reuses the same backend + AI worker. |
| `hmf-data.js` | Shared content — all **27 customer pain points** across the four use cases, plus the reference answer keys the AI grades against (generated from the aligned use-case sheet). Consumed by both `index.html` and `proctor.html`. |

### ⚙️ The backend (optional — turns on multi-device + AI scoring)
| File | What it is |
|---|---|
| `firebase-config.js` | Firestore config + cloud adapter (shared real-time sync, saved submissions/scores). |
| `firestore.rules` | Firestore security rules. |
| `ai-eval-worker.js` + `wrangler.toml` | Cloudflare Worker that scores answers with Claude (holds the Anthropic key server-side). |
| `SETUP-HMF.md` | Step-by-step setup for Pages, Firebase, and the worker. |

### 📄 The offline pack (paper backup — `offline-pack/`)
| File | For |
|---|---|
| `HMF-Team-Workbook.docx` | Each team — one fill-in workbook: cover, scenario, all four use cases with guided answer boxes, tips, and a scoreboard. |
| `HMF-Proctor-Scoring-Sheet.docx` | Proctor — one landscape page: all teams × four use cases, totals /400, scoring bands. |
| `HMF-Proctor-Guide.docx` | Proctor — reference answers per use case + 0–100 scoring bands. |
| `HMF-Activity-Guide.docx` | Optional one-page overview of the task and scoring. |

---

## The four use cases

1. **AI Security** — signature-based detection misses unknown attacks; most traffic is encrypted and can't be decrypted for compliance.
2. **Cloud Edge** — AWS + Azure + GCP, three policy models; nobody can report posture across all three.
3. **DC Edge · Perimeter Firewall** — mixed-vendor estate, three consoles, weeks-long backlog, an inherited rulebase, two engineers.
4. **Macro & Micro Segmentation** — flat data centre, east-west lateral movement; segmentation died three times on ~10,000 hand-written rules.

Each use case is scored out of 100 → **400 total**. Grading rewards naming the
right product **and** Solution-Engineer reasoning that is specific to Cedarline.

---

## Run it — two ways

### A) Online (recommended)
1. **Publish** — repo **Settings → Pages → Deploy from a branch → `main` / root**. Live in ~1–2 min.
2. **(Optional) Backend** — follow `SETUP-HMF.md`: create a Firebase project and paste its config into `firebase-config.js`, publish `firestore.rules`, then deploy `ai-eval-worker.js` with your Anthropic key and set `AI_EVAL_ENDPOINT`.
3. **Proctor** opens `/proctor.html`, sets an **event code**, writes the four **answer keys**, and shares the participant join link.

> With no backend configured, the site still runs in **single-device mode** (one screen, no cross-device sync, manual/no AI scoring).

### B) Offline (paper fallback)
Print from `offline-pack/`: give each team the **Team Workbook**, keep the
**Proctor Scoring Sheet** and **Proctor Guide**. Same activity, same scoring,
no infrastructure.

---

_Cedarline Health Group is fictional. Cisco Secure · HMF Design Clinic._
