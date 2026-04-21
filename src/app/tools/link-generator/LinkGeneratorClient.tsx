"use client";
import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SITE = "https://www.incredibleitinerary.com";

type Source = {
  id: string;
  label: string;
  medium: string;
  emoji: string;
  hint?: string;
};

const SOURCES: Source[] = [
  { id: "quora", label: "Quora", medium: "social", emoji: "❓", hint: "Use when linking from a Quora answer" },
  { id: "reddit", label: "Reddit", medium: "social", emoji: "🔗", hint: "r/travel, r/IndiaTravel, r/solotravel, etc." },
  { id: "twitter", label: "Twitter / X", medium: "social", emoji: "🐦" },
  { id: "facebook", label: "Facebook", medium: "social", emoji: "📘" },
  { id: "medium", label: "Medium", medium: "referral", emoji: "📝", hint: "Canonical link in your Medium article" },
  { id: "tripoto", label: "Tripoto", medium: "referral", emoji: "✈️" },
  { id: "pinterest", label: "Pinterest", medium: "social", emoji: "📌" },
  { id: "whatsapp", label: "WhatsApp", medium: "social", emoji: "💬" },
  { id: "linkedin", label: "LinkedIn", medium: "social", emoji: "💼" },
  { id: "email", label: "Newsletter", medium: "email", emoji: "📧" },
  { id: "instagram", label: "Instagram", medium: "social", emoji: "📷", hint: "Bio link / story swipe-up" },
  { id: "youtube", label: "YouTube", medium: "referral", emoji: "▶️", hint: "Video description / pinned comment" },
];

const POPULAR_DEST_PATHS = [
  { label: "Home", path: "/" },
  { label: "Yamunotri Guide", path: "/blog/yamunotri-temple-guide" },
  { label: "Meghalaya 5 Days", path: "/blog/meghalaya-5-days" },
  { label: "Lonavala 2 Days", path: "/blog/lonavala-2-days" },
  { label: "Meenakshi Temple", path: "/blog/meenakshi-temple-2-days" },
  { label: "Karnataka 7 Days", path: "/blog/karnataka-7-days" },
  { label: "Pachmarhi 3 Days", path: "/blog/pachmarhi-3-days" },
  { label: "Pushkar 2 Days", path: "/blog/pushkar-2-days" },
  { label: "Coonoor 2 Days", path: "/blog/coonoor-2-days" },
  { label: "Kochi 3 Days", path: "/blog/kochi-3-days" },
  { label: "India Budget Guide", path: "/blog/india-budget-guide" },
  { label: "Quiz", path: "/quiz" },
];

interface SavedLink {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  destination: string;
  createdAt: string;
}

export default function LinkGeneratorClient() {
  const [path, setPath] = useState("/");
  const [source, setSource] = useState<Source>(SOURCES[0]);
  const [campaign, setCampaign] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<SavedLink[]>([]);

  // Load history
  useEffect(() => {
    try {
      const raw = localStorage.getItem("utm_history");
      if (raw) setHistory(JSON.parse(raw));
    } catch {}
  }, []);

  const fullUrl = useMemo(() => {
    const base = path.startsWith("http") ? path : `${SITE}${path.startsWith("/") ? path : "/" + path}`;
    try {
      const u = new URL(base);
      u.searchParams.set("utm_source", source.id);
      u.searchParams.set("utm_medium", source.medium);
      if (campaign.trim()) u.searchParams.set("utm_campaign", campaign.trim().toLowerCase().replace(/\s+/g, "-"));
      if (content.trim()) u.searchParams.set("utm_content", content.trim().toLowerCase().replace(/\s+/g, "-"));
      return u.toString();
    } catch {
      return "";
    }
  }, [path, source, campaign, content]);

  const save = () => {
    if (!fullUrl) return;
    const entry: SavedLink = {
      url: fullUrl,
      source: source.id,
      medium: source.medium,
      campaign: campaign.trim(),
      destination: path,
      createdAt: new Date().toISOString(),
    };
    const next = [entry, ...history].slice(0, 100);
    setHistory(next);
    try {
      localStorage.setItem("utm_history", JSON.stringify(next));
    } catch {}
  };

  const copy = async () => {
    if (!fullUrl) return;
    await navigator.clipboard.writeText(fullUrl);
    save();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem("utm_history");
    } catch {}
  };

  const exportCsv = () => {
    const rows = [
      ["created_at", "source", "medium", "campaign", "destination", "url"].join(","),
      ...history.map((h) =>
        [
          h.createdAt,
          h.source,
          h.medium,
          h.campaign,
          h.destination,
          `"${h.url}"`,
        ].join(",")
      ),
    ].join("\n");
    const blob = new Blob([rows], { type: "text/csv" });
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = `utm-links-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(u);
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] bg-cream min-h-screen">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          <div className="mb-8">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold-dark font-medium mb-2">
              Internal Tool · Not Indexed
            </p>
            <h1 className="font-serif text-[2rem] md:text-[2.4rem] font-light text-ink mb-2">
              UTM Link Generator
            </h1>
            <p className="text-sm text-muted font-light">
              Generate UTM-tagged links for every channel so GA4 attributes clicks correctly.
              All links you create are saved to this browser and exportable to CSV.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="bg-white border border-parchment-2 rounded-2xl p-6 md:p-8 mb-8">
            {/* Destination */}
            <div className="mb-6">
              <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-2">
                1. Destination page
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {POPULAR_DEST_PATHS.map((d) => (
                  <button
                    key={d.path}
                    onClick={() => setPath(d.path)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      path === d.path
                        ? "bg-gold-dark text-white border-gold-dark"
                        : "bg-white border-parchment-2 text-muted hover:border-gold"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                placeholder="/blog/your-slug or full URL"
                className="w-full px-4 py-2.5 border border-parchment-2 rounded-xl text-sm font-light focus:border-gold-dark outline-none"
              />
            </div>

            {/* Source */}
            <div className="mb-6">
              <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-2">
                2. Where are you posting this link?
              </label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {SOURCES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSource(s)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-light transition-colors ${
                      source.id === s.id
                        ? "bg-gold-dark text-white border-gold-dark"
                        : "bg-white border-parchment-2 text-muted hover:border-gold"
                    }`}
                  >
                    <span>{s.emoji}</span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
              {source.hint && (
                <p className="text-[11px] text-muted mt-2 font-light italic">{source.hint}</p>
              )}
            </div>

            {/* Campaign + Content */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-2">
                  Campaign (optional)
                </label>
                <input
                  type="text"
                  value={campaign}
                  onChange={(e) => setCampaign(e.target.value)}
                  placeholder="e.g. india-apr-2026"
                  className="w-full px-4 py-2.5 border border-parchment-2 rounded-xl text-sm font-light focus:border-gold-dark outline-none"
                />
                <p className="text-[11px] text-muted mt-1 font-light">Groups related posts together</p>
              </div>
              <div>
                <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-2">
                  Content tag (optional)
                </label>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="e.g. answer-id-12345"
                  className="w-full px-4 py-2.5 border border-parchment-2 rounded-xl text-sm font-light focus:border-gold-dark outline-none"
                />
                <p className="text-[11px] text-muted mt-1 font-light">Distinguishes multiple posts of same source</p>
              </div>
            </div>

            {/* Output */}
            <div className="bg-parchment border border-parchment-2 rounded-xl p-4">
              <label className="text-xs font-medium text-ink uppercase tracking-wider block mb-2">
                Your tagged link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={fullUrl}
                  className="flex-1 px-4 py-2.5 bg-white border border-parchment-2 rounded-xl text-xs font-mono text-ink focus:border-gold-dark outline-none"
                />
                <button
                  onClick={copy}
                  disabled={!fullUrl}
                  className="px-5 py-2.5 bg-gold-dark text-white rounded-xl text-sm font-medium hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {copied ? "✓ Copied" : "Copy & Save"}
                </button>
              </div>
            </div>
          </div>

          {/* ── History ── */}
          {history.length > 0 && (
            <div className="bg-white border border-parchment-2 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-xl font-light text-ink">
                  Recent links ({history.length})
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={exportCsv}
                    className="text-xs px-3 py-1.5 border border-parchment-2 rounded-full hover:border-gold text-muted hover:text-gold-dark transition-colors"
                  >
                    Export CSV
                  </button>
                  <button
                    onClick={clearHistory}
                    className="text-xs px-3 py-1.5 border border-parchment-2 rounded-full hover:border-red-400 text-muted hover:text-red-600 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-parchment-2 text-muted">
                      <th className="text-left font-medium py-2 px-2">When</th>
                      <th className="text-left font-medium py-2 px-2">Source</th>
                      <th className="text-left font-medium py-2 px-2">Destination</th>
                      <th className="text-left font-medium py-2 px-2">URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((h, i) => (
                      <tr key={i} className="border-b border-parchment-2/50">
                        <td className="py-2 px-2 text-muted font-light whitespace-nowrap">
                          {new Date(h.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-2 px-2">
                          <span className="inline-block px-2 py-0.5 bg-parchment rounded-full text-[10px] font-medium text-ink">
                            {h.source}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-muted font-light truncate max-w-[180px]">
                          {h.destination}
                        </td>
                        <td className="py-2 px-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(h.url);
                              alert("Copied");
                            }}
                            className="text-gold-dark hover:underline font-mono text-[10px]"
                          >
                            copy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-light leading-relaxed">
            <p className="font-medium mb-1">💡 How to use this with GA4</p>
            <p>
              Paste the tagged link wherever you post. When a visitor clicks it, GA4 automatically
              records the source/medium/campaign in reports under <em>Acquisition → Traffic acquisition</em>.
              Open the <a href="/tools/analytics" className="underline text-amber-900 hover:text-amber-700">analytics dashboard</a> to see live traffic by channel.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
