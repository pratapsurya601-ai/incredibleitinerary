"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call — replace with Mailchimp / ConvertKit / your endpoint
    await new Promise((res) => setTimeout(res, 1000));

    // POST example:
    // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-ink py-20 px-6 md:px-12 text-center">
      <div className="max-w-[1180px] mx-auto">
        <AnimatedSection>
          <span className="section-label text-gold">Travel Inspiration</span>
          <h2 className="serif-title text-[clamp(1.8rem,3vw,2.6rem)] text-white mb-3">
            Get India Travel Tips in Your Inbox
          </h2>
          <p className="text-sm text-white/45 font-light mb-9">
            Monthly destination guides, hidden gems, travel hacks &amp; exclusive
            offers. No spam, ever.
          </p>

          {status === "success" ? (
            <div className="inline-flex items-center gap-2 text-gold font-serif text-lg">
              ✓ You&apos;re subscribed! Welcome to the journey.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-[460px] mx-auto overflow-hidden rounded-[1px] shadow-[0_0_0_1px_rgba(201,169,110,0.35)]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white/[0.06] border-none outline-none text-white font-sans text-sm font-light placeholder:text-white/30"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3.5 bg-gold text-ink text-[0.72rem] font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-200 hover:bg-gold-dark hover:text-white disabled:opacity-60"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          <p className="text-[0.7rem] text-white/25 mt-4">
            Join 2,000+ travellers already subscribed. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
