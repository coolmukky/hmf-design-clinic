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
