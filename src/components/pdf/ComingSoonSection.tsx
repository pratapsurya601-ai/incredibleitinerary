"use client";
import { useState } from "react";

type ComingSoonItem = {
  emoji: string;
  title: string;
  sub: string;
  country: string;
};

export default function ComingSoonSection({ items }: { items: ComingSoonItem[] }) {
  const [email, setEmail]     = useState("");
  const [status, setStatus]   = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), source: "coming-soon-guides" }),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl text-ink font-light">Coming Soon</h2>
        <span className="text-xs text-muted">Added weekly</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
        {items.map((g) => (
          <div
            key={g.title}
            className="bg-white rounded-xl border border-parchment-2 p-4 opacity-70 hover:opacity-90 transition-opacity"
          >
            <span className="text-2xl block mb-2">{g.emoji}</span>
            <p className="text-sm font-medium text-ink leading-tight">{g.title}</p>
            <p className="text-[0.62rem] text-muted mt-0.5 leading-snug">{g.sub}</p>
            <span className="inline-block mt-2 text-[0.6rem] bg-parchment-2 text-muted px-2 py-0.5 rounded-full">
              {g.country}
            </span>
          </div>
        ))}
      </div>

      {/* Notify strip */}
      <div className="bg-ink rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-white text-sm font-medium mb-0.5">
            🔔 Get notified when new guides drop
          </p>
          <p className="text-white/45 text-xs font-light">
            We add new destinations every week — be the first to know.
          </p>
        </div>

        {status === "done" ? (
          <p className="text-gold text-sm font-medium whitespace-nowrap">
            ✓ You&apos;re on the list!
          </p>
        ) : (
          <form onSubmit={handleNotify} className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 sm:w-52 px-3 py-2.5 rounded-lg text-sm text-ink bg-white border border-white/20 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs">Something went wrong — try again.</p>
        )}
      </div>
    </section>
  );
}
