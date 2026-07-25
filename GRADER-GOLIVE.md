# Solution Grader — Go live in ~10 minutes

The grader (`grader.html`) already works single-device. To turn on **AI scoring**
and **cross-device** submissions, switch on two things: the **AI worker** (Part A)
and **Firebase** (Part B). If you already set these up for the interactive app,
the grader uses the same ones — you're done, skip to **Verify**.

**You need:** an [Anthropic API key](https://console.anthropic.com) · Node/npm ·
the repo checked out locally.

---

## Part A — AI scoring (Cloudflare Worker) · ~5 min

The Anthropic key must never ship in the browser, so scoring runs through a tiny
worker that holds the key as a server secret. The repo already has
`ai-eval-worker.js` + `wrangler.toml`.

```bash
npm i -g wrangler
wrangler login

# from the repo root (folder with ai-eval-worker.js + wrangler.toml):
wrangler secret put ANTHROPIC_API_KEY      # paste your sk-ant-… key when prompted
wrangler deploy
```

Copy the printed URL, e.g. `https://hmf-ai-eval.<you>.workers.dev`.

Then point the app at it — edit **`firebase-config.js`**:

```js
window.AI_EVAL_ENDPOINT = "https://hmf-ai-eval.<you>.workers.dev";
```

Commit + push (or send me the URL and I'll push it for you). Hard-refresh
`grader.html`, open the **Proctor** tab → **Test AI** → expect **“AI endpoint OK”**.

> `wrangler.toml` presets `ALLOW_ORIGIN = https://coolmukky.github.io`. If your
> pages are on a different origin, change that line before `wrangler deploy`.

**That's the minimum for AI scoring.** On its own (no Firebase) it works on a
single browser: run the proctor and teams on the same machine, or have teams
paste/upload on the proctor's laptop.

---

## Part B — Cross-device + saved submissions (Firebase) · ~5 min

So teams submit from their own devices and the proctor sees everyone live.

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (free).
2. **Add a Web app** ( `</>` ) → copy its `firebaseConfig`.
3. Paste it into **`firebase-config.js`**, replacing every `PASTE_…`. Commit + push.
4. Build → **Firestore Database → Create database** (Production, US).
5. Firestore → **Rules** → paste all of **`firestore.rules`** → **Publish**.
   *(These already include the grader's `graderkey` + `docscores` collections.)*

Refresh `grader.html` — the top-left badge should read **“Live · shared”**.

---

## Verify (2 min)

1. **Proctor** (your laptop): open `grader.html`, set an **Event** code (e.g. `MAY24`),
   go to the **Proctor** tab, adjust the pre-filled **answer sheet** if you like → **Save**.
2. Share the link **`…/grader.html?room=MAY24`** with a team.
3. **Team** (another device): open the link, enter a team name, **upload their
   worksheet** (PDF/Word/text) or paste → **Evaluate my worksheet with AI**.
4. They see a score **/400** with per-use-case breakdown; the **proctor's**
   submissions table shows the team and score. **Export CSV** for results.

---

## Good to know

- **Same backend as everything else.** The grader shares the worker + Firebase
  with `index.html` / `proctor.html`. Set up once, all three work.
- **Answer sheet.** Pre-filled from the aligned use-case content, so grading works
  out of the box; upload your own or edit + Save to customise per event.
- **Key safety.** The Anthropic key lives only as the worker secret — never in the
  page. Firebase web-config values are public by design; security is the Firestore rules.
- **Cost.** One Anthropic call per **Evaluate** click. Optional light guard:
  `wrangler secret put EVAL_SHARED_TOKEN`, then set `window.AI_EVAL_TOKEN` to match.
- **Privacy.** `docscores` stores team names + uploaded text. Delete a cohort's
  data in the Firestore console after the session.
