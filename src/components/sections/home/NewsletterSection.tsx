"use client";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";
import { blogPosts } from "@/data/blog";

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
    <section className="bg-parchment py-16 px-6 md:px-12 border-t border-parchment-2">
      <div className="max-w-[640px] mx-auto text-center">
        <FadeIn>
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold-dark block mb-3 font-medium">
            Stay in the loop
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.4rem)] font-light text-ink mb-3">
            Monthly India Travel Intel
          </h2>
          <p className="text-sm text-muted font-light mb-8 max-w-md mx-auto leading-relaxed">
            New destination guides, seasonal deals, price updates, and the insider tips we don&apos;t put on the blog. One email a month. No spam. Unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="text-lg text-green-800 font-medium mb-1">You&apos;re in! &#x1f389;</p>
              <p className="text-sm text-green-700 font-light">Check your inbox — we just sent you links to our free destination guides.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                className="form-field sm:w-36 text-center sm:text-left"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="form-field flex-1 text-center sm:text-left"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold whitespace-nowrap justify-center disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Join Free"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600 mt-3">Something went wrong. Try again or email us directly.</p>
          )}

          <p className="text-xs text-muted/40 mt-4 font-light">
            {blogPosts.length}+ free destination guides &middot; New content added regularly &middot; No spam
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
