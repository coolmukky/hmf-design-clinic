/* ============================================================================
   HMF Design Clinic — backend configuration (fresh, dedicated project)
   ----------------------------------------------------------------------------
   This file wires the activity app (index.html) and the proctor console
   (proctor.html) to a Firestore backend for:
     • cross-device SHARED auto-sync of team answer sheets,
     • saved submissions and scores the proctor can see live,
     • the AI-evaluation endpoint (its own worker, see ai-eval-worker.js).

   Everything degrades gracefully: if this file is absent or still has the
   PASTE_… placeholders, both pages run in single-device mode (localStorage).

   ── ONE-TIME SETUP ─────────────────────────────────────────────────────────
   1. https://console.firebase.google.com  →  Add project (free).
   2. Add a Web app ( </> )  →  copy its firebaseConfig  →  paste below,
      replacing every PASTE_… value.
   3. Build → Firestore Database → Create database (Production mode, US location).
   4. Firestore → Rules → paste the rules from firestore.rules (in this repo)
      and Publish.
   5. Deploy the AI worker (ai-eval-worker.js + wrangler.toml) and put its URL in
      AI_EVAL_ENDPOINT below. See SETUP-HMF.md for the full walkthrough.

   NOTE: Firebase web config values are NOT secrets — they are meant to ship in
   the browser. Security comes from the Firestore rules, not from hiding these.
   The Anthropic API key is NEVER placed here — it lives only as a server secret
   on the worker.
   ========================================================================== */

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyClx2RuQW5yl2rBxrov4jZDWcwiBoJoZyA",
  authDomain:        "hmf-clinic-b9258.firebaseapp.com",
  projectId:         "hmf-clinic-b9258",
  storageBucket:     "hmf-clinic-b9258.firebasestorage.app",
  messagingSenderId: "676644117052",
  appId:             "1:676644117052:web:b5ba3c913271363a228139"
};

/* AI evaluation endpoint (your deployed worker). Empty = AI scoring stays off
   and manual scoring in the proctor still works. */
window.AI_EVAL_ENDPOINT = "";   // e.g. "https://hmf-ai-eval.<you>.workers.dev"
window.AI_EVAL_TOKEN    = "";   // optional; only if you set EVAL_SHARED_TOKEN on the worker
window.AI_EVAL_MODEL    = "claude-opus-4-8";  // default; the proctor's picker overrides per-event

/* ----------------------------------------------------------------------------
   Cloud adapter — implements the small Store interface the pages use:
     write(path,obj) · read(path)->Promise · watch(path,cb)->unsub ·
     watchCollection(prefix,cb)->unsub
   Paths are "collection/docId" (e.g. "scores/EVENT__TEAM"). Loaded lazily from
   Google's CDN so the pages stay dependency-free until a real project is set.
   -------------------------------------------------------------------------- */
(function(){
  var cfg = window.FIREBASE_CONFIG || {};
  var real = cfg.apiKey && cfg.apiKey.indexOf("PASTE") < 0 && cfg.projectId && cfg.projectId.indexOf("PASTE") < 0;
  // Tell the pages whether to wait for the backend before booting.
  window.HMF_CLOUD_PENDING = !!real;
  if (!real) return;

  var V = "10.12.0";
  Promise.all([
    import("https://www.gstatic.com/firebasejs/" + V + "/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/" + V + "/firebase-firestore.js")
  ]).then(function (m) {
    var A = m[0], F = m[1];
    var db = F.getFirestore(A.initializeApp(cfg));

    function ref(path) { var i = path.indexOf("/"); return F.doc(db, path.slice(0, i), path.slice(i + 1)); }

    window.HMF_CLOUD = {
      write: function (path, obj) {
        try { F.setDoc(ref(path), obj, { merge: true }).catch(function (e) { console.warn("HMF write", path, e); }); }
        catch (e) { console.warn("HMF write", e); }
      },
      read: function (path) {
        return F.getDoc(ref(path)).then(function (s) { return s.exists() ? s.data() : null; })
                                  .catch(function () { return null; });
      },
      watch: function (path, cb) {
        return F.onSnapshot(ref(path),
          function (s) { cb(s.exists() ? s.data() : null); },
          function (e) { console.warn("HMF watch", path, e); });
      },
      watchCollection: function (prefix, cb) {
        // prefix "scores/EVENT__" -> collection "scores", id range starting "EVENT__"
        var i = prefix.indexOf("/"), col = prefix.slice(0, i), idp = prefix.slice(i + 1);
        var q = F.query(F.collection(db, col), F.orderBy(F.documentId()),
                        F.startAt(idp), F.endAt(idp + ""));
        return F.onSnapshot(q, function (snap) {
          var out = []; snap.forEach(function (d) { out.push({ path: col + "/" + d.id, data: d.data() }); });
          cb(out);
        }, function (e) { console.warn("HMF watchCollection", prefix, e); });
      }
    };

    if (typeof window.HMF_ON_CLOUD === "function") window.HMF_ON_CLOUD();
  }).catch(function (e) {
    console.warn("HMF: Firebase SDK failed to load — single-device mode.", e);
    window.HMF_CLOUD_PENDING = false;
    if (typeof window.HMF_ON_CLOUD === "function") window.HMF_ON_CLOUD();
  });
})();
