"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type ParsedRow = Record<string, string | number>;

/**
 * Parses a tab- or comma-separated GA4 export.
 * Handles quoted fields, strips percentages and commas from numbers.
 */
function parseCsv(input: string): { headers: string[]; rows: ParsedRow[] } {
  const lines = input.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return { headers: [], rows: [] };

  // Detect delimiter — GA4 exports are usually tab-separated if pasted from the UI
  const firstLine = lines[0];
  const delim = firstLine.includes("\t") ? "\t" : ",";

  const splitLine = (line: string): string[] => {
    if (delim === "\t") return line.split("\t");
    // CSV with quoted fields
    const out: string[] = [];
    let cur = "";
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') inQ = !inQ;
      else if (ch === "," && !inQ) {
        out.push(cur);
        cur = "";
      } else cur += ch;
    }
    out.push(cur);
    return out;
  };

  const headers = splitLine(lines[0]).map((h) => h.trim().replace(/^"|"$/g, ""));
  const rows: ParsedRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = splitLine(lines[i]);
    if (parts.length < 2) continue;
    const row: ParsedRow = {};
    headers.forEach((h, j) => {
      const raw = (parts[j] || "").trim().replace(/^"|"$/g, "");
      // Strip "(x.x%)" artifacts GA4 leaves in pasted tables
      const cleaned = raw.replace(/\s*\([\d.,% ]+\)\s*/g, "");
      const numeric = Number(cleaned.replace(/,/g, "").replace(/%$/, ""));
      row[h] = !isNaN(numeric) && cleaned !== "" ? numeric : cleaned;
    });
    rows.push(row);
  }
  return { headers, rows };
}

function classifyPage(title: string): "incredibleitinerary" | "yieldiq" | "other" {
  const t = title.toLowerCase();
  if (t.includes("yieldiq")) return "yieldiq";
  if (t.includes("incredibleitinerary") || t.includes("itinerary") || t.includes("travel guide") ||
      t.match(/\d+[- ]day/) || t.includes("honeymoon") || t.includes("trip")) return "incredibleitinerary";
  return "other";
}

export default function AnalyticsDashboardClient() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const parsed = useMemo(() => {
    if (!input.trim()) return null;
    try {
      const { headers, rows } = parseCsv(input);
      if (rows.length === 0) return null;
      return { headers, rows };
    } catch (e) {
      return null;
    }
  }, [input]);

  // Detect key columns
  const keyCols = useMemo(() => {
    if (!parsed) return null;
    const h = parsed.headers.map((x) => x.toLowerCase());
    const findCol = (patterns: string[]) => {
      for (const p of patterns) {
        const idx = h.findIndex((col) => col.includes(p));
        if (idx >= 0) return parsed.headers[idx];
      }
      return null;
    };
    return {
      title: findCol(["page title", "title", "landing page", "page path"]) || parsed.headers[0],
      views: findCol(["views", "sessions", "pageviews", "screen views"]) || parsed.headers[1],
      users: findCol(["active users", "users", "total users"]),
      engagement: findCol(["engagement time", "avg engagement", "time"]),
      source: findCol(["source", "channel", "medium"]),
    };
  }, [parsed]);

  // Summary metrics
  const summary = useMemo(() => {
    if (!parsed || !keyCols) return null;
    const total = { views: 0, users: 0, rows: parsed.rows.length };
    const bySite = { incredibleitinerary: 0, yieldiq: 0, other: 0 };
    const top: { title: string; views: number; users: number; engagement: string }[] = [];
    for (const r of parsed.rows) {
      const title = String(r[keyCols.title] || "");
      const views = Number(r[keyCols.views] || 0);
      const users = keyCols.users ? Number(r[keyCols.users] || 0) : 0;
      const engagement = keyCols.engagement ? String(r[keyCols.engagement] || "") : "";
      total.views += views;
      total.users += users;
      const cat = classifyPage(title);
      bySite[cat] += views;
      if (cat === "incredibleitinerary" && title.trim()) {
        top.push({ title, views, users, engagement });
      }
    }
    top.sort((a, b) => b.views - a.views);
    return { total, bySite, top: top.slice(0, 30) };
  }, [parsed, keyCols]);

  const reset = () => {
    setInput("");
    setError("");
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] bg-cream min-h-screen">
        <div className="max-w-[1000px] mx-auto px-6 py-12">
          <div className="mb-8">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold-dark font-medium mb-2">
              Internal Tool · Not Indexed
            </p>
            <h1 className="font-serif text-[2rem] md:text-[2.4rem] font-light text-ink mb-2">
              Analytics dashboard
            </h1>
            <p className="text-sm text-muted font-light">
              Paste any GA4 table export below. The dashboard separates IncredibleItinerary traffic
              from YieldIQ traffic and surfaces your top pages, engagement, and user share.
            </p>
          </div>

          {!parsed && (
            <div className="bg-white border border-parchment-2 rounded-2xl p-6 md:p-8">
              <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-3">
                Paste GA4 data
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste from GA4 → Reports → Pages and screens → select-all in the table → copy → paste here"
                rows={12}
                className="w-full px-4 py-3 border border-parchment-2 rounded-xl text-xs font-mono focus:border-gold-dark outline-none"
              />
              <p className="text-[11px] text-muted mt-3 font-light">
                Tip: in GA4, open <em>Reports → Engagement → Pages and screens</em>, right-click
                any cell, Copy table. Paste above. We handle tabs or commas.
              </p>
              {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
            </div>
          )}

          {parsed && summary && keyCols && (
            <>
              {/* ── Summary Cards ── */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-white border border-parchment-2 rounded-xl p-4">
                  <p className="text-[0.6rem] tracking-wider uppercase text-muted font-medium mb-1">
                    Total views
                  </p>
                  <p className="font-serif text-2xl text-ink">{summary.total.views.toLocaleString()}</p>
                </div>
                <div className="bg-white border border-parchment-2 rounded-xl p-4">
                  <p className="text-[0.6rem] tracking-wider uppercase text-muted font-medium mb-1">
                    Total users
                  </p>
                  <p className="font-serif text-2xl text-ink">{summary.total.users.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-[0.6rem] tracking-wider uppercase text-green-800 font-medium mb-1">
                    Travel views
                  </p>
                  <p className="font-serif text-2xl text-green-900">
                    {summary.bySite.incredibleitinerary.toLocaleString()}
                    <span className="text-xs text-green-700 ml-1">
                      ({((summary.bySite.incredibleitinerary / summary.total.views) * 100 || 0).toFixed(0)}%)
                    </span>
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-[0.6rem] tracking-wider uppercase text-amber-800 font-medium mb-1">
                    YieldIQ views
                  </p>
                  <p className="font-serif text-2xl text-amber-900">
                    {summary.bySite.yieldiq.toLocaleString()}
                    <span className="text-xs text-amber-700 ml-1">
                      ({((summary.bySite.yieldiq / summary.total.views) * 100 || 0).toFixed(0)}%)
                    </span>
                  </p>
                </div>
              </div>

              {summary.bySite.yieldiq > summary.bySite.incredibleitinerary * 0.2 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-900 font-light leading-relaxed">
                  <p className="font-medium mb-1">⚠️ YieldIQ is polluting your GA4 property</p>
                  <p>
                    Your GA4 property is tracking YieldIQ traffic at <strong>
                    {((summary.bySite.yieldiq / summary.total.views) * 100).toFixed(0)}%</strong> of
                    total views. Filter GA4 reports by hostname <code className="bg-red-100 px-1">
                    www.incredibleitinerary.com</code>, or create a separate GA4 property per site.
                    See setup instructions at the bottom of this page.
                  </p>
                </div>
              )}

              {/* ── Top Travel Pages ── */}
              <div className="bg-white border border-parchment-2 rounded-2xl p-6 mb-6">
                <h2 className="font-serif text-xl font-light text-ink mb-4">
                  Top travel pages (IncredibleItinerary only)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-parchment-2 text-muted">
                        <th className="text-left font-medium py-2 px-2">Page</th>
                        <th className="text-right font-medium py-2 px-2">Views</th>
                        <th className="text-right font-medium py-2 px-2">Users</th>
                        <th className="text-right font-medium py-2 px-2">Engagement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {summary.top.map((r, i) => (
                        <tr key={i} className="border-b border-parchment-2/50">
                          <td className="py-2 px-2 text-ink font-light max-w-[500px] truncate">{r.title}</td>
                          <td className="text-right py-2 px-2 tabular-nums font-medium">{r.views}</td>
                          <td className="text-right py-2 px-2 tabular-nums text-muted">{r.users || "—"}</td>
                          <td className="text-right py-2 px-2 tabular-nums text-muted text-[11px]">
                            {r.engagement || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                onClick={reset}
                className="text-xs px-4 py-2 border border-parchment-2 rounded-full text-muted hover:border-gold-dark hover:text-gold-dark transition-colors"
              >
                ← Paste new data
              </button>
            </>
          )}

          {/* ── Setup Instructions ── */}
          <div className="mt-10 bg-white border border-parchment-2 rounded-2xl p-6 md:p-8">
            <h2 className="font-serif text-xl font-light text-ink mb-4">
              How to fetch GA4 data
            </h2>

            <div className="space-y-6 text-sm text-muted font-light leading-relaxed">
              <div>
                <p className="font-medium text-ink mb-2">Option A — Manual CSV paste (what you're doing now)</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>GA4 → <em>Reports → Engagement → Pages and screens</em></li>
                  <li>Set date range (Last 28 days recommended)</li>
                  <li>Right-click the table → Copy</li>
                  <li>Paste above → dashboard auto-parses</li>
                </ol>
              </div>

              <div>
                <p className="font-medium text-ink mb-2">Option B — Automated via GA4 Data API (requires setup)</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Google Cloud Console → create a project → enable <em>Google Analytics Data API v1</em></li>
                  <li>Create a service account → download its JSON key</li>
                  <li>GA4 → Admin → Property Access Management → add the service account email as a <em>Viewer</em></li>
                  <li>Add the JSON key contents to <code className="bg-parchment px-1 rounded">GA4_SA_KEY_JSON</code> env variable in Vercel</li>
                  <li>Install <code className="bg-parchment px-1 rounded">@google-analytics/data</code> and wire up an API route</li>
                </ol>
                <p className="mt-2 text-xs text-muted italic">
                  Worth it only if you want live updates without manually exporting. Ask Claude to build the integration when you have the service account ready.
                </p>
              </div>

              <div className="pt-4 border-t border-parchment-2">
                <p className="font-medium text-ink mb-2">⚠️ Fix the YieldIQ mixing issue in GA4</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>GA4 → Admin → Data streams → check if both domains report to the same stream</li>
                  <li>
                    <strong>Best fix:</strong> create a separate GA4 property for YieldIQ. Install its
                    own measurement ID on YieldIQ. Keep <code className="bg-parchment px-1 rounded">
                    G-DE3KGWD3KS</code> exclusively on IncredibleItinerary.
                  </li>
                  <li>
                    <strong>Quick fix (until you separate):</strong> in every GA4 report, add a filter:
                    <em> Hostname contains incredibleitinerary.com</em>. This clean-slices the data but is fragile.
                  </li>
                </ol>
              </div>

              <div>
                <p className="font-medium text-ink mb-2">🔗 Distribution tracking workflow</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Generate UTM link at <a href="/tools/link-generator" className="text-gold-dark hover:underline">/tools/link-generator</a></li>
                  <li>Post it on Quora / Reddit / Twitter / etc.</li>
                  <li>GA4 auto-captures utm_source/medium/campaign from the URL</li>
                  <li>GA4 → <em>Acquisition → Traffic acquisition</em> shows which channel drove clicks</li>
                  <li>Come back here in 14 days and paste a fresh export to compare</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
