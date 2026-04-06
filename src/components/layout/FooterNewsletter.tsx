"use client";
import { useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="border-b border-white/[0.06] pb-10 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left copy */}
        <div>
          <p className="font-serif text-lg font-light text-white mb-1">
            Get free guides in your inbox
          </p>
          <p className="text-xs text-white/40 font-light">
            Weekly itineraries · Real costs · Zero tourist traps
          </p>
        </div>

        {/* Right form */}
        {status === "success" ? (
          <div className="flex items-center gap-2 text-sm text-green-400 font-light">
            <span>✓</span>
            <span>You&apos;re in! Check your inbox for free guides.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto sm:max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-[#1c1208] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 bg-gold hover:bg-gold-dark text-ink font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs text-red-400 mt-1">Something went wrong. Try again.</p>
        )}
      </div>
    </div>
  );
}
