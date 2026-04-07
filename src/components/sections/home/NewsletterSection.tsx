"use client";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";
import { blogPosts } from "@/data/blog";

const PERKS = [
  { icon: "🗺️", text: "New destination guides every week" },
  { icon: "💰", text: "Real costs, verified prices, zero tourist traps" },
  { icon: "📍", text: "Insider tips locals actually use" },
  { icon: "🚫", text: "No sponsored picks, ever" },
];

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "homepage" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      trackEvent("newsletter_subscribed", { source: "homepage" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: Copy ── */}
            <div>
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-4 font-medium">
                Free · Weekly · No Spam
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-white mb-5 leading-tight">
                Get free travel guides<br />
                <em className="italic text-gold">straight to your inbox</em>
              </h2>
              <p className="text-sm text-white/60 font-light mb-8 leading-relaxed max-w-md">
                Join the newsletter — real itineraries, honest costs, no fluff. One email a week.
              </p>
              <ul className="space-y-3">
                {PERKS.map((p) => (
                  <li key={p.text} className="flex items-center gap-3">
                    <span className="text-base shrink-0">{p.icon}</span>
                    <span className="text-sm text-white/65 font-light">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: Form ── */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="font-serif text-xl font-light text-white mb-1">
                Start planning smarter
              </p>
              <p className="text-xs text-white/40 mb-6 font-light">
                {blogPosts.length}+ free guides · Real prices · Zero tourist traps
              </p>

              {status === "success" ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 text-center">
                  <p className="text-3xl mb-3">🎉</p>
                  <p className="text-base text-green-400 font-medium mb-1">You&apos;re in!</p>
                  <p className="text-sm text-white/60 font-light">
                    Check your inbox — your free guides are on their way.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name (optional)"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gold hover:bg-gold-dark text-ink font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200 disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Get Free Guides →"}
                  </button>
                  <p className="text-[0.68rem] text-white/25 text-center font-light pt-1">
                    No spam, ever. Unsubscribe with one click.
                  </p>
                </form>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400 mt-3 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
