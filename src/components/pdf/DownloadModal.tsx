"use client";
import { useState } from "react";

// ── Razorpay URLs (always use the new links with callback) ───────────────────
const RZP_ALL    = "https://rzp.io/rzp/oUANvqjl"; // All 50+ guides — ₹499
const RZP_INDIA  = "https://rzp.io/rzp/aRVZcSi";  // India Pack — ₹249

type Step = "email" | "loading" | "success" | "paywall" | "already_owned";

interface DownloadModalProps {
  slug: string;
  title: string;
  onClose: () => void;
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function DownloadModal({ slug, title, onClose }: DownloadModalProps) {
  const [step, setStep]           = useState<Step>("email");
  const [email, setEmail]         = useState("");
  const [error, setError]         = useState("");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [isLast, setIsLast]       = useState(false);
  const [pdfToken, setPdfToken]   = useState("");

  async function handleDownload(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStep("loading");

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), slug }),
      });

      const data = await res.json();

      if (res.status === 402 || data.paywall) {
        try { localStorage.setItem("ii_email", email.toLowerCase().trim()); } catch {}
        setStep("paywall");
        return;
      }

      if (!res.ok || !data.success) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStep("email");
        return;
      }

      // Save email for other components
      try {
        localStorage.setItem("ii_subscribed", "true");
        localStorage.setItem("ii_email", email.toLowerCase().trim());
      } catch {}

      // If user already owned this guide, show a friendly "re-open" step
      if (data.alreadyOwned) {
        setPdfToken(data.token);
        setStep("already_owned");
        return;
      }

      // Open guide in new tab
      const url = `/api/serve-pdf?slug=${encodeURIComponent(slug)}&token=${encodeURIComponent(data.token)}`;
      window.open(url, "_blank", "noopener");

      setRemaining(data.remaining ?? null);
      setIsLast(data.isLast ?? false);
      setStep("success");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStep("email");
    }
  }

  function openPdf(token: string) {
    const url = `/api/serve-pdf?slug=${encodeURIComponent(slug)}&token=${encodeURIComponent(token)}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <div
      className="fixed inset-0 z-[600] flex items-center justify-center bg-ink/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Download guide"
    >
      <div className="bg-[#FAF7F2] rounded-2xl shadow-2xl max-w-[440px] w-full overflow-hidden">
        {/* Gold top bar */}
        <div className="h-1.5 bg-gradient-to-r from-gold via-amber-400 to-gold" />

        <div className="relative px-6 pt-6 pb-7">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-parchment-2 transition-all text-lg"
          >
            ✕
          </button>

          {/* ── STEP: email form ──────────────────────────────────────────── */}
          {step === "email" && (
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-4" aria-hidden="true">📄</span>
              <h2 className="font-serif text-ink text-2xl font-semibold mb-1 leading-tight">
                Get Your Free Guide
              </h2>
              <p className="text-muted text-sm mb-1 max-w-xs leading-relaxed">
                <span className="font-medium text-ink">{title}</span>
              </p>
              <p className="text-muted text-sm mb-5 max-w-xs leading-relaxed">
                Enter your email — your guide opens instantly in a new tab.
              </p>

              <span className="inline-flex items-center gap-1.5 border border-gold/30 bg-gold/10 text-gold-dark text-xs rounded-full px-3 py-1 mb-5 font-medium">
                🎁 2 guides free · No credit card needed
              </span>

              <form onSubmit={handleDownload} className="w-full flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="w-full rounded-lg border border-parchment-2 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-gold/40 transition"
                />

                {error && (
                  <p className="text-red-500 text-xs text-left">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Download Free PDF →
                </button>
              </form>

              <p className="text-muted/80 text-[0.7rem] mt-3">
                🔒 No spam · Unsubscribe anytime · 2 free guides per email
              </p>
            </div>
          )}

          {/* ── STEP: loading ─────────────────────────────────────────────── */}
          {step === "loading" && (
            <div className="flex flex-col items-center text-center py-6">
              <Spinner />
              <p className="text-muted text-sm mt-4">Preparing your guide…</p>
            </div>
          )}

          {/* ── STEP: already owned ───────────────────────────────────────── */}
          {step === "already_owned" && (
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-4" aria-hidden="true">📂</span>
              <h2 className="font-serif text-ink text-2xl font-semibold mb-2 leading-tight">
                You already have this!
              </h2>
              <p className="text-muted text-sm mb-5 max-w-xs leading-relaxed">
                <strong className="text-ink">{title}</strong> is already in your library.
                Click below to open it again — no re-download needed.
              </p>
              <button
                onClick={() => { openPdf(pdfToken); onClose(); }}
                className="w-full rounded-lg bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 transition-colors duration-200 mb-3"
              >
                Open Guide Again →
              </button>
              <button
                onClick={onClose}
                className="text-muted/80 hover:text-muted text-xs underline underline-offset-2 transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {/* ── STEP: success ─────────────────────────────────────────────── */}
          {step === "success" && (
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-4" aria-hidden="true">✅</span>
              <h2 className="font-serif text-ink text-2xl font-semibold mb-2 leading-tight">
                Your guide is open!
              </h2>
              <p className="text-muted text-sm mb-4 max-w-xs leading-relaxed">
                A new tab has opened with your guide. Press{" "}
                <kbd className="bg-parchment-2 border border-parchment-2 px-1.5 py-0.5 rounded text-xs font-mono">Ctrl+P</kbd>{" "}
                → <strong>Save as PDF</strong> → tick <strong>Background graphics</strong>.
              </p>

              {isLast ? (
                <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-left">
                  <p className="text-amber-800 text-xs font-medium mb-1">⚠️ That was your last free guide</p>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    You&apos;ve used both free downloads. Unlock all{" "}
                    <strong>50+ guides forever</strong> for a one-time payment.
                  </p>
                  <a
                    href={RZP_ALL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-gold text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
                  >
                    Unlock All 50+ Guides — ₹499 →
                  </a>
                </div>
              ) : remaining !== null && remaining > 0 ? (
                <div className="w-full bg-green-50 border border-green-200 rounded-xl p-3 mb-4 text-left">
                  <p className="text-green-700 text-xs">
                    ✅ You have <strong>{remaining} free guide{remaining > 1 ? "s" : ""}</strong> remaining.
                  </p>
                </div>
              ) : null}

              <button
                onClick={onClose}
                className="rounded-lg border border-gold/40 hover:border-gold text-gold-dark hover:text-gold font-medium text-sm px-6 py-2.5 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}

          {/* ── STEP: paywall ─────────────────────────────────────────────── */}
          {step === "paywall" && (
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-4" aria-hidden="true">🔒</span>
              <h2 className="font-serif text-ink text-2xl font-semibold mb-2 leading-tight">
                You&apos;ve used 2 free guides
              </h2>
              <p className="text-muted text-sm mb-5 max-w-xs leading-relaxed">
                Unlock <strong className="text-ink">all 50+ guides forever</strong> with a
                single one-time payment. No subscription. No renewals.
              </p>

              <ul className="w-full text-left space-y-2 mb-6">
                {[
                  "50+ destination PDF guides",
                  "New guides added every week",
                  "Day-by-day itineraries with real budgets",
                  "Packing lists, local tips, route maps",
                  "Lifetime access — pay once",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={RZP_ALL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors duration-200 mb-2"
              >
                All 50+ Guides — ₹499 one-time →
              </a>
              <a
                href={RZP_INDIA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-ink/20 hover:border-ink text-ink font-medium text-sm px-6 py-3 rounded-lg transition-colors duration-200 mb-3"
              >
                India Pack only — ₹249 →
              </a>

              <button
                onClick={onClose}
                className="text-muted/80 hover:text-muted text-xs underline underline-offset-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
