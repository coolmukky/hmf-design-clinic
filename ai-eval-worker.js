/* ============================================================================
   HMF Design Clinic — AI evaluation worker (Anthropic / Claude)
   ----------------------------------------------------------------------------
   A tiny serverless function that holds the Anthropic API key as a SERVER
   secret and scores one team's use-case response against the proctor's
   uploaded answer key. Both the activity app (on Submit) and the proctor
   console (Evaluate with AI) POST to it; the key never touches the browser.

   Reference target: Cloudflare Workers (free tier, single file). Deploy with the
   bundled wrangler.toml. See SETUP-HMF.md.

   Environment (secrets / vars):
     ANTHROPIC_API_KEY   (required)  your Anthropic API key
     ALLOW_ORIGIN        (optional)  exact origin allowed via CORS,
                                     e.g. https://coolmukky.github.io  (default "*")
     EVAL_SHARED_TOKEN   (optional)  if set, requests must send matching
                                     "x-eval-token" header (light abuse guard)

   Request  (POST JSON):
     { ping:true }                                  -> health check
     { model, useCase:{id,title},
       response:[ {product, seResponse}, ... ],     // one per customer concern
       answerKey:{ text } | null,                   // proctor's reference answer
       rubricMax }                                  // points for this use case (default 100)
   Response (JSON):
     { total, rationale, model }
   ========================================================================== */

const ALLOWED_MODELS = ["claude-opus-4-8", "claude-sonnet-5", "claude-haiku-4-5-20251001"];
const DEFAULT_MODEL = "claude-opus-4-8";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": (env && env.ALLOW_ORIGIN) || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type, x-eval-token",
      "Access-Control-Max-Age": "86400",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ error: "POST only" }, 405, cors);

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: "invalid JSON body" }, 400, cors); }

    const model = ALLOWED_MODELS.indexOf(body.model) >= 0 ? body.model : DEFAULT_MODEL;

    // Health check for the proctor's "Test AI" button — no model call.
    if (body.ping) return json({ ok: true, model }, 200, cors);

    if (!env || !env.ANTHROPIC_API_KEY) return json({ error: "server not configured (missing ANTHROPIC_API_KEY)" }, 500, cors);
    if (env.EVAL_SHARED_TOKEN && request.headers.get("x-eval-token") !== env.EVAL_SHARED_TOKEN)
      return json({ error: "unauthorized" }, 401, cors);

    // Whole-document grading: a team's uploaded worksheet graded against the answer sheet across all use cases.
    if (body.mode === "document") return gradeDocument(body, env, model, cors);

    const max = clampInt(body.rubricMax, 1, 1000) || 100;

    const system =
      "You are an expert Cisco Solution-Engineering examiner grading a team's response in the Cedarline " +
      "Hybrid Mesh Firewall (HMF) design clinic. For the given use case, the team answered each customer " +
      "concern with a Product/platform and a Solution-Engineer response (how it addresses the concern and how " +
      "it helps). Grade the WHOLE use-case response out of the maximum. Grade primarily against the proctor's " +
      "reference answer key when one is provided; if none is provided, grade against sound Cisco Secure / HMF " +
      "architecture practice. Reward: correct/appropriate products, and SE reasoning that is specific to " +
      "Cedarline's stated constraints (encrypted-traffic compliance limits, ~10k-rule segmentation failures, " +
      "two-engineer team, three cloud policy models, inherited rulebase). Do not reward blank, vague, or " +
      "off-topic answers, or a product name with no reasoning. Always respond by calling submit_score.";

    const tool = {
      name: "submit_score",
      description: "Return the integer score (0.." + max + ") for this use-case response and a short rationale.",
      input_schema: {
        type: "object",
        properties: {
          score: { type: "integer", minimum: 0, maximum: max, description: "Overall score for the use case, 0.." + max + "." },
          rationale: { type: "string", description: "2-4 sentences: what was strong, what was missing or generic, per concern." },
        },
        required: ["score", "rationale"],
      },
    };

    let ar;
    try {
      ar = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model, max_tokens: 1024, system,
          tools: [tool], tool_choice: { type: "tool", name: "submit_score" },
          messages: [{ role: "user", content: [{ type: "text", text: buildUserText(body, max) }] }],
        }),
      });
    } catch (e) {
      return json({ error: "could not reach Anthropic API", detail: String(e && e.message || e) }, 502, cors);
    }
    if (!ar.ok) {
      const t = await ar.text();
      return json({ error: "model API error (" + ar.status + ")", detail: t.slice(0, 600) }, 502, cors);
    }
    const data = await ar.json();
    const use = (data.content || []).find(function (b) { return b.type === "tool_use"; });
    if (!use || !use.input) return json({ error: "model returned no structured score" }, 502, cors);

    const total = clampInt(use.input.score, 0, max);
    return json({ total, rationale: String(use.input.rationale || ""), model }, 200, cors);
  },
};

/* ---- whole-document grading ---------------------------------------------- */
async function gradeDocument(body, env, model, cors) {
  const answerKey = (body.answerKey && body.answerKey.text) ? String(body.answerKey.text) : String(body.answerKeyText || "");
  const submission = String(body.submissionText || "");
  if (!submission.trim()) return json({ error: "no submission text provided" }, 400, cors);

  var useCases = Array.isArray(body.useCases) && body.useCases.length ? body.useCases : [
    { title: "AI Security", max: 100 },
    { title: "Cloud Edge", max: 100 },
    { title: "DC Edge · Perimeter Firewall", max: 100 },
    { title: "Macro & Micro Segmentation", max: 100 },
  ];
  var perMax = 100;
  var totalMax = useCases.reduce(function (s, u) { return s + (u.max || perMax); }, 0);
  var titles = useCases.map(function (u) { return u.title; });

  const system =
    "You are an expert Cisco Solution-Engineering examiner. A team has uploaded a completed worksheet for the " +
    "Cedarline Hybrid Mesh Firewall (HMF) design clinic. Grade the WHOLE worksheet across these use cases: " +
    titles.join("; ") + ". For each use case, award 0–" + perMax + " based on how well the team named the right/" +
    "appropriate Cisco products AND gave Solution-Engineer reasoning that addresses each customer concern and is " +
    "specific to Cedarline's constraints (encrypted-traffic compliance limits, ~10k-rule segmentation failures, " +
    "two-engineer team, three cloud policy models, inherited rulebase, AI assets across clouds). Grade primarily " +
    "against the proctor's ANSWER KEY when provided; otherwise against sound Cisco Secure / HMF practice. Do not " +
    "reward blank, vague, or off-topic answers, or product names with no reasoning. Some use cases may be absent " +
    "from the worksheet — score those 0 and say so. Always respond by calling submit_doc_score.";

  const userText =
    "=== PROCTOR ANSWER KEY ===\n" + (answerKey ? answerKey : "(none provided — grade against sound Cisco Secure / HMF practice)") +
    "\n\n=== TEAM'S UPLOADED WORKSHEET (grade this) ===\n" + submission.slice(0, 45000) +
    "\n\nScore each use case 0–" + perMax + " and call submit_doc_score.";

  const tool = {
    name: "submit_doc_score",
    description: "Return per-use-case scores and a short overall rationale.",
    input_schema: {
      type: "object",
      properties: {
        scores: {
          type: "array",
          description: "One entry per use case, in the same order given.",
          items: {
            type: "object",
            properties: {
              useCase: { type: "string" },
              score: { type: "integer", minimum: 0, maximum: perMax },
              note: { type: "string", description: "1–2 sentences: what was strong / missing." },
            },
            required: ["useCase", "score", "note"],
          },
        },
        rationale: { type: "string", description: "2–4 sentences overall." },
      },
      required: ["scores", "rationale"],
    },
  };

  let ar;
  try {
    ar = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model, max_tokens: 1500, system, tools: [tool], tool_choice: { type: "tool", name: "submit_doc_score" }, messages: [{ role: "user", content: [{ type: "text", text: userText }] }] }),
    });
  } catch (e) {
    return json({ error: "could not reach Anthropic API", detail: String(e && e.message || e) }, 502, cors);
  }
  if (!ar.ok) { const t = await ar.text(); return json({ error: "model API error (" + ar.status + ")", detail: t.slice(0, 600) }, 502, cors); }
  const data = await ar.json();
  const use = (data.content || []).find(function (b) { return b.type === "tool_use"; });
  if (!use || !use.input || !Array.isArray(use.input.scores)) return json({ error: "model returned no structured score" }, 502, cors);

  const perUseCase = titles.map(function (title, i) {
    const found = use.input.scores.find(function (s) { return s.useCase && s.useCase.toLowerCase().indexOf(title.toLowerCase().slice(0, 8)) >= 0; }) || use.input.scores[i] || {};
    return { title: title, score: clampInt(found.score, 0, perMax), note: String(found.note || "") };
  });
  const total = perUseCase.reduce(function (s, u) { return s + u.score; }, 0);
  return json({ perUseCase: perUseCase, total: total, totalMax: totalMax, rationale: String(use.input.rationale || ""), model: model }, 200, cors);
}

function buildUserText(body, max) {
  const uc = body.useCase || {};
  const key = body.answerKey && body.answerKey.text ? String(body.answerKey.text) : "";
  const resp = Array.isArray(body.response) ? body.response : [];
  const lines = [];
  lines.push("USE CASE: " + (uc.title || uc.id || "?"));
  lines.push("MAXIMUM SCORE: " + max);
  lines.push("");
  lines.push("=== PROCTOR REFERENCE ANSWER KEY ===");
  lines.push(key ? key : "(none provided — grade against sound Cisco Secure / HMF architecture practice)");
  lines.push("");
  lines.push("=== TEAM'S RESPONSE (grade this) ===");
  if (!resp.length) lines.push("(empty)");
  resp.forEach(function (r, i) {
    lines.push("Concern " + (i + 1) + ":");
    lines.push("  Product/platform: " + (r.product || "—"));
    lines.push("  SE response: " + (r.seResponse || "—"));
  });
  lines.push("");
  lines.push("Grade the whole use-case response out of " + max + " and call submit_score.");
  return lines.join("\n");
}

function clampInt(v, min, max) { v = parseInt(v, 10); if (isNaN(v)) return min; if (v < min) v = min; if (v > max) v = max; return v; }

function json(o, status, cors) {
  return new Response(JSON.stringify(o), { status: status, headers: Object.assign({ "content-type": "application/json" }, cors) });
}
