# HMF Design Clinic, Team Scoring Tool

`HMF-Scoring-Tool.html` is a single self-contained page (no build step, no server,
no keys) for scoring teams and running a leaderboard at the event.

## What it does
- **Upload** a team's completed Workbook (`.docx` or `.txt`) or paste their answers.
- **Auto-scores** against the rubric: each pain point on Problem Identifier (5),
  Solution Designer (10) and Value Communicator (10) = 25; four pain points make a
  case study score out of 100; the four case studies a **cumulative score out of 400**,
  mapped to **Solution Explorer / Solution Builder / Solution Strategist**.
- **Editable**: the auto-score is a rubric-based estimate; adjust any section before saving.
- **Leaderboard**: saves team name, the four section scores, and the cumulative total,
  ranked with the grade category. **Export CSV** and **Clear all** included.

## How the auto-scorer works
It reads the answer for each pain point, matches the product the team named against the
answer key (including acceptable alternatives and the capability), and gauges the
requirement and value text against the model answer. It is a fast, deterministic estimate
to start from, not a final grade. For exact rubric judgement use the Grading Guide (a proctor)
or `HMF-LLM-Grading-Prompt.md` (an LLM). The embedded answer key is generated from the same
content as the rest of the pack, so it stays in sync with the rubric.

## Hosting
- **Locally**: open the file in any modern browser (Chrome, Edge, Safari, Firefox).
- **Online**: drop it on the GitHub Pages site. The leaderboard is stored in the browser
  on that device (a facilitator "scoring station" model); use Export CSV to keep a record.
  A shared cross-device leaderboard would need a small backend (for example the project's
  existing Firebase) wired to the save/load functions.

_Facilitator tool: it embeds the answer key, so do not hand it to participants before they finish._
_Cedarline Health Group is fictional. Cisco Secure, HMF Design Clinic._
