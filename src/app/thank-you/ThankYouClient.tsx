"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// ── Guide metadata ─────────────────────────────────────────────────────────────
const GUIDE_META: Record<string, { title: string; emoji: string; pages: number; color: string }> = {
  "rajasthan-7-days":  { title: "Rajasthan 7 Days",      emoji: "🏰", pages: 11, color: "border-amber-200 bg-amber-50" },
  "kerala-5-days":     { title: "Kerala 5 Days",          emoji: "🌊", pages: 10, color: "border-teal-200 bg-teal-50" },
  "goa-3-days":        { title: "Goa 3 Days",             emoji: "🏖️", pages: 8,  color: "border-cyan-200 bg-cyan-50" },
  "india-budget-guide":{ title: "India Budget Guide",     emoji: "🇮🇳", pages: 11, color: "border-orange-200 bg-orange-50" },
  "leh-ladakh-7-days": { title: "Leh Ladakh 7 Days",      emoji: "🏔️", pages: 12, color: "border-blue-200 bg-blue-50" },
  "bangkok-4-days":    { title: "Bangkok 4 Days",         emoji: "🇹🇭", pages: 10, color: "border-yellow-200 bg-yellow-50" },
};

type State = "idle" | "loading" | "success" | "error";

export default function ThankYouClient() {
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [unlockedSlugs, setUnlockedSlugs] = useState<string[]>([]);
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const [isPremium, setIsPremium] = useState(false);

  // Pull Razorpay params from URL
  const paymentId       = params.get("razorpay_payment_id") || "";
  const linkId          = params.get("razorpay_payment_link_id") || "";
  const referenceId     = params.get("razorpay_payment_link_reference_id") || "";
  const status          = params.get("razorpay_payment_link_status") || "";
  const signature       = params.get("razorpay_signature") || "";
  const isValidRedirect = status === "paid" && !!paymentId;

  // Auto-fill email from URL if Razorpay passes it (doesn't usually but just in case)
  useEffect(() => {
    const urlEmail = params.get("email");
    if (urlEmail) setEmail(urlEmail);
  }, [params]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          razorpay_payment_id: paymentId,
          razorpay_payment_link_id: linkId,
          razorpay_payment_link_reference_id: referenceId,
          razorpay_payment_link_status: status,
          razorpay_signature: signature,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error || "Verification failed. Please contact support.");
        setState("error");
        return;
      }

      setUnlockedSlugs(data.unlockedSlugs || []);
      setTokens(data.tokens || {});
      setIsPremium(data.premium || false);
      setState("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  };

  const openPdf = (slug: string, token: string) => {
    window.open(`/api/serve-pdf?slug=${slug}&token=${token}`, "_blank");
  };

  // ── Not a valid Razorpay redirect ───────────────────────────────────────────
  if (!isValidRedirect) {
    return (
      <main className="min-h-screen bg-parchment flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <p className="text-5xl mb-4">🤔</p>
          <h1 className="font-serif text-2xl text-ink font-light mb-3">Nothing to verify here</h1>
          <p className="text-muted text-sm font-light mb-6">
            This page is for confirming payments. If you just paid, please use the link in your Razorpay receipt.
          </p>
          <Link href="/guides" className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors">
            Browse Free Guides →
          </Link>
        </div>
      </main>
    );
  }

  // ── Success — show downloads ─────────────────────────────────────────────────
  if (state === "success") {
    return (
      <main className="min-h-screen bg-parchment">
        {/* Hero */}
        <section className="bg-ink text-center px-6 py-14">
          <p className="text-4xl mb-3">🎉</p>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">Payment Confirmed</p>
          <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight mb-3">
            Your guides are ready to download
          </h1>
          <p className="text-white/50 text-sm font-light max-w-sm mx-auto">
            {isPremium
              ? "You have lifetime access to all 50+ guides. Download any time."
              : `${unlockedSlugs.length} guide${unlockedSlugs.length > 1 ? "s" : ""} unlocked for ${email}`}
          </p>
        </section>

        {/* Download cards */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-xl text-ink font-light mb-6">Your Downloads</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {unlockedSlugs.map((slug) => {
              const meta = GUIDE_META[slug];
              if (!meta) return null;
              const token = tokens[slug];
              return (
                <div key={slug} className={`bg-white rounded-2xl border-2 border-gold/40 overflow-hidden`}>
                  <div className="bg-gold px-4 py-1.5">
                    <span className="text-[0.6rem] font-bold tracking-widest uppercase text-ink">Unlocked</span>
                  </div>
                  <div className="p-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl mb-3 ${meta.color}`}>
                      {meta.emoji}
                    </div>
                    <p className="font-serif text-ink text-base font-light mb-0.5">{meta.title}</p>
                    <p className="text-muted text-xs mb-4">📄 {meta.pages} pages · Print-ready A4</p>
                    <button
                      onClick={() => openPdf(slug, token)}
                      className="w-full bg-ink hover:bg-ink/80 text-white text-xs font-medium py-2.5 rounded-lg transition-colors"
                    >
                      Open PDF →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Print instructions */}
          <div className="bg-white border border-parchment-2 rounded-2xl p-6 mb-8">
            <p className="font-medium text-sm text-ink mb-3">📌 How to save your PDF</p>
            <ol className="space-y-1.5 text-xs text-muted font-light list-decimal list-inside">
              <li>Click "Open PDF" — it opens in a new tab</li>
              <li>Press <kbd className="bg-parchment px-1.5 py-0.5 rounded text-ink font-mono">Ctrl+P</kbd> (Windows) or <kbd className="bg-parchment px-1.5 py-0.5 rounded text-ink font-mono">⌘+P</kbd> (Mac)</li>
              <li>Select <strong>Save as PDF</strong> as the destination</li>
              <li>Click Save — done! Works offline forever.</li>
            </ol>
          </div>

          {/* Come back any time notice */}
          <div className="bg-amber-50 border border-gold/30 rounded-2xl p-5 text-center mb-8">
            <p className="text-sm font-medium text-ink mb-1">♾️ Come back any time</p>
            <p className="text-xs text-muted font-light">
              Your guides are saved against <strong>{email}</strong>. Visit{" "}
              <Link href="/guides" className="text-gold-dark underline underline-offset-2">incredibleitinerary.com/guides</Link>
              {" "}and enter the same email to re-download any time.
            </p>
          </div>

          {/* Upsell if not premium */}
          {!isPremium && (
            <div className="bg-ink rounded-2xl px-8 py-8 text-center">
              <p className="text-gold text-xs tracking-[0.18em] uppercase font-medium mb-2">Want more?</p>
              <h3 className="font-serif text-white text-xl font-light mb-2">Unlock All 50+ Guides — ₹499</h3>
              <p className="text-white/50 text-xs font-light mb-5 max-w-xs mx-auto">
                Every guide we've made and every guide we ever will make. Pay once, download forever.
              </p>
              <a
                href="https://rzp.io/rzp/qhP2iBq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors"
              >
                Get Lifetime Access — ₹499 →
              </a>
            </div>
          )}
        </section>
      </main>
    );
  }

  // ── Email form — verify payment ──────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-parchment flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full">
        {/* Status pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Payment confirmed — ID: {paymentId.slice(0, 16)}...
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-parchment-2 shadow-sm p-8">
          <p className="text-3xl text-center mb-4">🎉</p>
          <h1 className="font-serif text-2xl text-ink font-light text-center mb-2">
            Thank you for your purchase!
          </h1>
          <p className="text-muted text-sm font-light text-center mb-7 leading-relaxed">
            Enter the email you used at checkout to claim your PDF guides. They'll be saved to your account.
          </p>

          <form onSubmit={handleVerify} className="space-y-3">
            <div>
              <label className="text-xs text-muted font-medium block mb-1.5">Your email address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-parchment-2 rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {state === "error" && (
              <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-sm py-3.5 rounded-lg transition-colors disabled:opacity-60"
            >
              {state === "loading" ? "Verifying..." : "Claim My Guides →"}
            </button>
          </form>

          <p className="text-center text-muted/50 text-xs mt-5">
            Having trouble?{" "}
            <a href="mailto:hello@incredibleitinerary.com" className="underline underline-offset-2 hover:text-ink transition-colors">
              Email us
            </a>{" "}
            with your payment ID: <span className="font-mono">{paymentId}</span>
          </p>
        </div>

        <p className="text-center text-muted/40 text-xs mt-4">
          Your payment is secured by Razorpay · SSL encrypted
        </p>
      </div>
    </main>
  );
}
