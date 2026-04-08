"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Human-readable names for each PDF slug
const SLUG_NAMES: Record<string, string> = {
  // Free
  "rajasthan-7-days":        "Rajasthan in 7 Days",
  "kerala-5-days":           "Kerala in 5 Days",
  // ₹99
  "goa-3-days":              "Goa in 3 Days",
  "india-budget-guide":      "India Budget Travel Guide",
  "varanasi-3-days":         "Varanasi in 3 Days",
  "mumbai-3-days":           "Mumbai in 3 Days",
  "delhi-3-days":            "Delhi in 3 Days",
  "agra-2-days":             "Agra in 2 Days",
  "amritsar-2-days":         "Amritsar in 2 Days",
  "hyderabad-2-days":        "Hyderabad in 2 Days",
  "pune-2-days":             "Pune in 2 Days",
  "mysore-2-days":           "Mysore in 2 Days",
  // ₹149
  "kashmir-6-days":          "Kashmir in 6 Days",
  "manali-5-days":           "Manali in 5 Days",
  "andaman-5-days":          "Andaman in 5 Days",
  "jaipur-3-days":           "Jaipur in 3 Days",
  "rishikesh-3-days":        "Rishikesh in 3 Days",
  "coorg-3-days":            "Coorg in 3 Days",
  "darjeeling-3-days":       "Darjeeling in 3 Days",
  "hampi-3-days":            "Hampi in 3 Days",
  "ooty-3-days":             "Ooty in 3 Days",
  "meghalaya-5-days":        "Meghalaya in 5 Days",
  "northeast-india-10-days":"North East India in 10 Days",
  // ₹199
  "leh-ladakh-7-days":       "Leh Ladakh in 7 Days",
  "spiti-valley-7-days":     "Spiti Valley in 7 Days",
  "char-dham-7-days":        "Char Dham in 7 Days",
  "kedarnath-trek-3-days":   "Kedarnath Trek in 3 Days",
  "gujarat-7-days":          "Gujarat in 7 Days",
  "bangkok-4-days":          "Bangkok in 4 Days",
  "bali-5-days":             "Bali in 5 Days",
  "singapore-4-days":        "Singapore in 4 Days",
  "sri-lanka-7-days":        "Sri Lanka in 7 Days",
  "malaysia-7-days":         "Malaysia in 7 Days",
  "nepal-7-days":            "Nepal in 7 Days",
  "turkey-7-days":           "Turkey in 7 Days",
  "amsterdam-4-days":        "Amsterdam in 4 Days",
  "vietnam-10-days":         "Vietnam in 10 Days",
  "thailand-10-days":        "Thailand in 10 Days",
  "bhutan-5-days":           "Bhutan in 5 Days",
  // ₹249
  "dubai-4-days":            "Dubai in 4 Days",
  "portugal-7-days":         "Portugal in 7 Days",
  "paris-5-days":            "Paris in 5 Days",
  "barcelona-5-days":        "Barcelona in 5 Days",
  "rome-5-days":             "Rome in 5 Days",
  "london-5-days":           "London in 5 Days",
  "maldives-5-days":         "Maldives in 5 Days",
  "new-york-5-days":         "New York in 5 Days",
  // ₹299
  "japan-10-days":           "Japan in 10 Days",
  "greece-10-days":          "Greece in 10 Days",
  "switzerland-7-days":      "Switzerland in 7 Days",
};

type Status = "loading" | "success" | "error" | "missing_email";

export default function ShopSuccessClient() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [email, setEmail] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [manualEmailError, setManualEmailError] = useState("");
  const [unlockedSlugs, setUnlockedSlugs] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [paymentId, setPaymentId] = useState("");

  const razorpay_payment_id            = params.get("razorpay_payment_id") ?? "";
  const razorpay_payment_link_id       = params.get("razorpay_payment_link_id") ?? "";
  const razorpay_payment_link_reference_id = params.get("razorpay_payment_link_reference_id") ?? "";
  const razorpay_payment_link_status   = params.get("razorpay_payment_link_status") ?? "";
  const razorpay_signature             = params.get("razorpay_signature") ?? "";

  useEffect(() => {
    setPaymentId(razorpay_payment_id);
    let storedEmail = "";
    try { storedEmail = localStorage.getItem("ii_pending_email") || ""; } catch {}

    // If payment params are missing, show error
    if (!razorpay_payment_id || razorpay_payment_link_status !== "paid") {
      setStatus("error");
      setErrorMsg(
        razorpay_payment_id
          ? "Payment was not completed. No charge was made. Please try again or contact us."
          : "No payment data found. If you just paid, please email us with your Razorpay payment confirmation."
      );
      return;
    }

    // If email is missing, ask user to enter it
    if (!storedEmail) {
      setStatus("missing_email");
      return;
    }

    verifyPayment(storedEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function verifyPayment(userEmail: string) {
    setEmail(userEmail);
    setStatus("loading");
    try {
      const res = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          razorpay_payment_id,
          razorpay_payment_link_id,
          razorpay_payment_link_reference_id,
          razorpay_payment_link_status,
          razorpay_signature,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setUnlockedSlugs(data.unlockedSlugs ?? []);
        setStatus("success");
        try { localStorage.removeItem("ii_pending_email"); } catch {}
      } else {
        throw new Error(data.error ?? "Verification failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        `We verified your payment but hit a technical error unlocking your guides. ` +
        `Please email us at hello@incredibleitinerary.com with payment ID: ${razorpay_payment_id} ` +
        `and we will manually grant access within 1 hour.`
      );
    }
  }

  function handleManualEmail(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = manualEmail.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setManualEmailError("Please enter a valid email address.");
      return;
    }
    setManualEmailError("");
    try { localStorage.setItem("ii_pending_email", trimmed); } catch {}
    verifyPayment(trimmed);
  }

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (status === "loading") {
    return (
      <>
        <Navbar onPlanTrip={() => {}} />
        <main className="bg-cream min-h-screen pt-[72px] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-2 border-gold border-t-transparent rounded-full mx-auto mb-5" />
            <p className="text-muted text-sm font-light">Verifying your payment…</p>
            <p className="text-muted/60 text-xs font-light mt-1">This only takes a second</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Missing email — ask user to type it ─────────────────────────────────────
  if (status === "missing_email") {
    return (
      <>
        <Navbar onPlanTrip={() => {}} />
        <main className="bg-cream min-h-screen pt-[72px]">
          <div className="max-w-lg mx-auto py-20 px-6 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h1 className="font-serif text-2xl text-ink mb-3">One last step</h1>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Your payment was successful! We just need your email address to unlock
              your guides. Enter the email you&apos;d like your PDFs sent to.
            </p>
            <form onSubmit={handleManualEmail} className="space-y-3 text-left">
              <input
                type="email"
                value={manualEmail}
                onChange={(e) => { setManualEmail(e.target.value); setManualEmailError(""); }}
                placeholder="yourname@gmail.com"
                className="w-full px-4 py-3 border border-parchment-2 rounded-lg text-sm text-ink focus:outline-none focus:border-gold transition-colors"
                autoFocus
                required
              />
              {manualEmailError && (
                <p className="text-xs text-red-500">{manualEmailError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-ink py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200"
              >
                Unlock My Guides →
              </button>
            </form>
            <p className="text-xs text-muted font-light mt-4">
              Payment ID: <span className="font-mono text-muted/70">{paymentId}</span>
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Error ────────────────────────────────────────────────────────────────────
  if (status === "error") {
    return (
      <>
        <Navbar onPlanTrip={() => {}} />
        <main className="bg-cream min-h-screen pt-[72px]">
          <div className="max-w-lg mx-auto py-20 px-6 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="font-serif text-2xl text-ink mb-3">Something went wrong</h1>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">{errorMsg}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hello@incredibleitinerary.com"
                className="btn-gold inline-flex justify-center"
              >
                Email Us →
              </a>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm font-light rounded-[1px] hover:border-gold hover:text-gold transition-all"
              >
                Back to Shop
              </Link>
            </div>
            {paymentId && (
              <p className="text-xs text-muted font-light mt-6">
                Payment ID: <span className="font-mono">{paymentId}</span>
              </p>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Success ──────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar onPlanTrip={() => {}} />
      <main className="bg-cream min-h-screen pt-[72px]">
        <div className="max-w-lg mx-auto py-16 px-6">

          {/* Hero */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-light text-ink mb-3">
              Payment Successful!
            </h1>
            <p className="text-sm text-muted font-light leading-relaxed">
              Your guides are unlocked for{" "}
              <strong className="text-ink font-medium">{email}</strong>.<br />
              Head to the downloads page and enter your email to access them.
            </p>
          </div>

          {/* Unlocked guides list */}
          {unlockedSlugs.length > 0 && (
            <div className="bg-white rounded-2xl border border-parchment-2 p-6 mb-6 shadow-sm">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted font-medium mb-4">
                ✓ Your unlocked guides
              </p>
              <ul className="space-y-2">
                {unlockedSlugs.map((slug) => (
                  <li key={slug} className="flex items-center gap-3 text-sm text-ink font-light">
                    <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal text-xs">✓</span>
                    </span>
                    {SLUG_NAMES[slug] ?? slug}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How to download */}
          <div className="bg-amber-50 border border-gold/30 rounded-2xl p-5 mb-6">
            <p className="text-xs font-semibold text-amber-800 mb-2">📥 How to download your guides</p>
            <ol className="space-y-1.5">
              {[
                'Click "Download Your Guides" below',
                `Enter your email: ${email}`,
                "Click the download button next to each guide",
                "Save to your phone or laptop — works offline!",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-amber-700 font-light">
                  <span className="font-semibold flex-shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/guides"
              className="btn-gold flex-1 inline-flex justify-center"
            >
              Download Your Guides →
            </Link>
            <Link
              href="/blog"
              className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm font-light rounded-[1px] hover:border-gold hover:text-gold transition-all"
            >
              Browse More Guides
            </Link>
          </div>

          {/* Support strip */}
          <div className="mt-6 bg-parchment border border-parchment-2 rounded-xl px-5 py-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-2xl">🙋</span>
            <div className="flex-1">
              <p className="text-xs font-medium text-ink mb-0.5">Need help accessing your guides?</p>
              <p className="text-xs text-muted font-light">Email us with your payment ID and we&apos;ll sort it within 1 hour.</p>
            </div>
            <a
              href={`mailto:hello@incredibleitinerary.com?subject=Guide access help&body=Payment ID: ${paymentId}`}
              className="text-xs bg-ink text-white px-4 py-2 rounded-lg hover:bg-ink/80 transition-colors whitespace-nowrap"
            >
              Email Support →
            </a>
          </div>

          {/* Share */}
          <div className="mt-6 pt-6 border-t border-parchment-2 text-center">
            <p className="text-xs text-muted font-light mb-3">
              Loved it? Tell a fellow traveller 🙏
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/surya-pratap-singh-490a18320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://wa.me/?text=Just%20bought%20a%20travel%20guide%20from%20IncredibleItinerary%20%E2%80%94%20best%20₹199%20I've%20spent.%20incredibleitinerary.com/shop`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-green-600 transition-colors"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
