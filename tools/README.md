# HMF Design Clinic, Team Scoring Tool

`HMF-Scoring-Tool.html` is a single self-contained page (no build step, no server)
for scoring teams and running a leaderboard at the event. It is kept separate from
the rest of the app: its own page, its own `leaderboard` collection.

## What it does
- **Upload** a team's completed Workbook (`.docx` or `.txt`) or paste their answers.
- **Auto-scores** against the rubric: each pain point on Problem Identifier (5),
  Solution Designer (10) and Value Communicator (10) = 25; four pain points make a
  case study score out of 100; the four case studies a **cumulative score out of 400**,
  mapped to **Solution Explorer / Solution Builder / Solution Strategist**.
- **Grade with AI** (optional, more accurate): sends the team's answers and the rubric
  to Claude and fills in the four case-study scores plus feedback. See the key note below.
- **Editable**: every score is a starting point; adjust any section before saving.
- **Shared leaderboard**: saves team name, the four section scores and the cumulative
  total to the project's Firebase, so every facilitator's page shows the same board in
  real time. The pill by the leaderboard shows the state (Shared / Connecting / This device).
  **Export CSV** and **Clear all** included.

## How the auto-scorer works
It reads the answer for each pain point, matches the product the team named against the
answer key (including acceptable alternatives and the capability), and gauges the
requirement and value text against the model answer. It is a fast, deterministic estimate
to start from, not a final grade. The embedded answer key is generated from the same
content as the rest of the pack, so it stays in sync with the rubric.

## AI grading — two modes
Both send the same rubric and answer key (the `HMF-LLM-Grading-Prompt.md` content the tool
decrypts on unlock) and return a rubric-aligned score plus feedback you can still adjust
before saving.

- **Paste-key (default, no setup):** open **Grade with AI**, paste an Anthropic API key,
  pick a model, grade. The key stays in this browser tab only (sessionStorage), goes straight
  to Anthropic, and is never saved to disk or uploaded. Good when one or two proctors grade.
- **Server (no key in the browser):** deploy the Cloudflare worker so the key lives server-side
  and every proctor can grade without pasting anything:
  1. `wrangler secret put ANTHROPIC_API_KEY` (paste your key), then `wrangler deploy`
     (`ai-eval-worker.js` + `wrangler.toml`; `ALLOW_ORIGIN` is already set to the Pages origin).
  2. Rebuild the tool with the worker URL: `HMF_AI_ENDPOINT="https://hmf-ai-eval.<you>.workers.dev" node build-scoretool.js`
     (add `HMF_AI_TOKEN="…"` if you also set `EVAL_SHARED_TOKEN` on the worker as a light abuse guard).
  The tool then grades through the worker (its `mode:"workbook"` path), the API-key box hides
  automatically, and proctors just click **Grade with AI**.

AI grading and the shared leaderboard both need outbound network, so use the **hosted** page
(GitHub Pages) or open the file locally — not a locked-down sandbox.

## Hosting
- **Locally**: open the file in any modern browser (Chrome, Edge, Safari, Firefox).
- **Online**: drop it on the GitHub Pages site. The leaderboard is shared via Firebase
  (project `hmf-clinic-80732`, `leaderboard` collection). Two one-time Firebase steps:
  (1) **Authentication, Sign-in method, enable Anonymous** — the tool signs in anonymously
  so writes/deletes carry an identity; (2) publish the `leaderboard` rule block from
  `firestore.rules` (Firestore, Rules, Publish), which requires that identity. Enable
  Anonymous sign-in first, or the tightened rule sends writes to the on-device fallback.
  If Firebase is unreachable, the page falls back to an on-device leaderboard automatically.

## Facilitator passcode
The page embeds the answer key, so it opens on a **passcode gate**. The key and the AI
grading context are AES-GCM encrypted in the file (the page source shows only ciphertext);
entering the passcode decrypts them in the browser. Default passcode: **`hmf-clinic-2026`** —
share it only with proctors. To set your own, rebuild with `HMF_TOOL_PASSCODE="…"`.

_Facilitator tool: even with the gate, treat the URL as proctor-only._
_Cedarline Health Group is fictional. Cisco Secure, HMF Design Clinic._
