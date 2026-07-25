# HMF Design Clinic — setup

The activity is three pages plus a small backend:

| File | What it is |
|---|---|
| `index.html` | **Participant app** — team registration, scenario + diagram, four use cases, submit → AI score, total. |
| `proctor.html` | **Proctor console** — teams, members, per-use-case scores + total; answer keys; model + AI toggle; CSV export. |
| `playbook.html` | The static playbook (pre-read reference). Optional. |
| `firebase-config.js` | Backend config + cloud adapter (Firestore). |
| `ai-eval-worker.js` + `wrangler.toml` | AI scoring worker (Anthropic). |
| `firestore.rules` | Firestore security rules. |

**Everything degrades gracefully.** With no backend configured, both pages run in
**single-device mode** (localStorage) — good for a quick look, but teams and the
proctor must be on the same browser, and AI scoring is off. Configure the backend
below for real cross-device collaboration and AI scoring.

---

## 1. Publish the pages (GitHub Pages)

Repo **Settings → Pages → Deploy from a branch → `main` / root**. After ~1 minute:

- Participant: `https://coolmukky.github.io/hmf-design-clinic/`
- Proctor:     `https://coolmukky.github.io/hmf-design-clinic/proctor.html`

---

## 2. Firebase — cross-device sync + saved submissions (fresh project)

1. **Create the project.** [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (free).
2. **Add a Web app** ( `</>` ) → copy its `firebaseConfig`.
3. **Paste it** into `firebase-config.js`, replacing every `PASTE_…` value. Commit/upload.
   *(These values are public by design — security is the rules in step 5, not hiding them.)*
4. **Create the database.** Build → **Firestore Database → Create database** → **Production** mode, US location.
5. **Publish the rules.** Firestore → **Rules** → paste all of `firestore.rules` → **Publish**.

**Verify:** open `proctor.html` — the top-left badge should read **“Live · shared”**
(green). Register a team on the participant page (another device/browser) and it
appears on the proctor console within a second.

> If the badge stays **“This device”**: the config still has `PASTE_…` values, or
> the Firestore SDK couldn’t load — check the browser console.

---

## 3. AI evaluation worker (Anthropic)

The Anthropic key must **never** ship in the browser, so scoring goes through a tiny
worker that holds the key as a server secret.

1. Install & log in once:
   ```
   npm i -g wrangler
   wrangler login
   ```
2. From the folder with `ai-eval-worker.js` + `wrangler.toml`, set your key and deploy:
   ```
   wrangler secret put ANTHROPIC_API_KEY      # paste your sk-ant-… key when prompted
   wrangler deploy
   ```
   Note the printed URL, e.g. `https://hmf-ai-eval.<you>.workers.dev`.
   *(If your pages aren’t on `https://coolmukky.github.io`, edit `ALLOW_ORIGIN` in `wrangler.toml` first.)*
3. Point the app at it — in `firebase-config.js`:
   ```js
   window.AI_EVAL_ENDPOINT = "https://hmf-ai-eval.<you>.workers.dev";
   ```
   Commit/upload, hard-refresh.
4. On `proctor.html`, tick **Enable AI evaluation**, pick a **model**, click **Test AI**
   → expect **“AI endpoint OK · <model> · <ms> ms”**.

**How scoring works:** on **Submit**, the participant app sends the team’s use-case
response + the proctor’s **answer key** for that use case to the worker; Claude returns
a **0–100 score + rationale**, saved to the team’s record and shown to the team and the
proctor. The proctor can also **Evaluate with AI** or override the score manually.

---

## 4. Running a session

1. On `proctor.html`, set an **Event** code (top-right) — e.g. `MAY24`. Everything is
   scoped to that code. Share the **participant join link** it shows (it carries `?room=`).
2. Write an **answer key** for each of the four use cases (AI Security, Cloud Edge,
   DC Edge Perimeter Firewall, Macro & Micro Segmentation) and **Save** each.
3. Teams open the participant link, **create a team** (name + members) and share their
   **team code**; teammates **join** with it and edit the same sheets together.
4. Teams work the four use cases in order; each **Submit** scores that use case and
   unlocks the next. The proctor watches scores and totals live.
5. **Export CSV** for results.

## 5. Privacy / after the session

`teams` stores participant names. When a cohort is done, delete its records in the
Firestore console (client deletes are blocked by the rules).
