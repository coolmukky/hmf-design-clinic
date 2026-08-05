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

## How AI grading works
Open **Grade with AI**, paste an Anthropic API key, pick a model, and grade. The key is
held in this browser tab only (sessionStorage), sent straight to Anthropic, and is never
saved to disk or uploaded anywhere. The request carries the same rubric and answer key as
`HMF-LLM-Grading-Prompt.md` and returns a rubric-aligned score plus feedback, which you can
still adjust before saving. AI grading and the shared leaderboard both need outbound network,
so use the **hosted** page (GitHub Pages) or open the file locally, not a locked-down sandbox.

## Hosting
- **Locally**: open the file in any modern browser (Chrome, Edge, Safari, Firefox).
- **Online**: drop it on the GitHub Pages site. The leaderboard is shared via Firebase
  (project `hmf-clinic-80732`, `leaderboard` collection). Publish the `leaderboard` rule
  block from `firestore.rules` once (Firebase Console, Firestore, Rules, Publish) so writes
  are allowed. If Firebase is unreachable, the page falls back to an on-device leaderboard.

_Facilitator tool: it embeds the answer key, so do not hand it to participants before they finish._
_Cedarline Health Group is fictional. Cisco Secure, HMF Design Clinic._
