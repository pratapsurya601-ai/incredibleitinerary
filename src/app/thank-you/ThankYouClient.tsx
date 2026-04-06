"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const GUIDE_META: Record<string, { title: string; emoji: string; pages: number; color: string }> = {
  // Free
  "rajasthan-7-days":         { title: "Rajasthan 7 Days",        emoji: "🏰", pages: 11, color: "border-amber-200 bg-amber-50" },
  "kerala-5-days":            { title: "Kerala 5 Days",            emoji: "🌊", pages: 10, color: "border-teal-200 bg-teal-50" },
  // ₹99
  "goa-3-days":               { title: "Goa 3 Days",               emoji: "🏖️", pages: 8,  color: "border-cyan-200 bg-cyan-50" },
  "india-budget-guide":       { title: "India Budget Guide",       emoji: "🇮🇳", pages: 11, color: "border-orange-200 bg-orange-50" },
  "varanasi-3-days":          { title: "Varanasi 3 Days",          emoji: "🕌", pages: 6,  color: "border-yellow-200 bg-yellow-50" },
  "mumbai-3-days":            { title: "Mumbai 3 Days",            emoji: "🌆", pages: 7,  color: "border-blue-200 bg-blue-50" },
  "delhi-3-days":             { title: "Delhi 3 Days",             emoji: "🕌", pages: 7,  color: "border-red-200 bg-red-50" },
  "agra-2-days":              { title: "Agra 2 Days",              emoji: "🕌", pages: 5,  color: "border-stone-200 bg-stone-50" },
  "amritsar-2-days":          { title: "Amritsar 2 Days",          emoji: "✨", pages: 5,  color: "border-amber-200 bg-amber-50" },
  "hyderabad-2-days":         { title: "Hyderabad 2 Days",         emoji: "🍗", pages: 5,  color: "border-orange-200 bg-orange-50" },
  "pune-2-days":              { title: "Pune 2 Days",              emoji: "🏯", pages: 5,  color: "border-green-200 bg-green-50" },
  "mysore-2-days":            { title: "Mysore 2 Days",            emoji: "👑", pages: 5,  color: "border-purple-200 bg-purple-50" },
  // ₹149
  "kashmir-6-days":           { title: "Kashmir 6 Days",           emoji: "❄️", pages: 8,  color: "border-sky-200 bg-sky-50" },
  "manali-5-days":            { title: "Manali 5 Days",            emoji: "⛰️", pages: 8,  color: "border-slate-200 bg-slate-50" },
  "andaman-5-days":           { title: "Andaman 5 Days",           emoji: "🏝️", pages: 7,  color: "border-cyan-200 bg-cyan-50" },
  "jaipur-3-days":            { title: "Jaipur 3 Days",            emoji: "🏰", pages: 7,  color: "border-pink-200 bg-pink-50" },
  "rishikesh-3-days":         { title: "Rishikesh 3 Days",         emoji: "🌊", pages: 6,  color: "border-teal-200 bg-teal-50" },
  "coorg-3-days":             { title: "Coorg 3 Days",             emoji: "🌿", pages: 6,  color: "border-green-200 bg-green-50" },
  "darjeeling-3-days":        { title: "Darjeeling 3 Days",        emoji: "🍵", pages: 6,  color: "border-lime-200 bg-lime-50" },
  "hampi-3-days":             { title: "Hampi 3 Days",             emoji: "🏛️", pages: 6,  color: "border-amber-200 bg-amber-50" },
  "ooty-3-days":              { title: "Ooty 3 Days",              emoji: "🌸", pages: 6,  color: "border-rose-200 bg-rose-50" },
  "meghalaya-5-days":         { title: "Meghalaya 5 Days",         emoji: "🌿", pages: 7,  color: "border-emerald-200 bg-emerald-50" },
  "north-east-india-10-days": { title: "North East India 10 Days", emoji: "🌄", pages: 9,  color: "border-indigo-200 bg-indigo-50" },
  // ₹199
  "leh-ladakh-7-days":        { title: "Leh Ladakh 7 Days",        emoji: "🏔️", pages: 12, color: "border-blue-200 bg-blue-50" },
  "spiti-valley-7-days":      { title: "Spiti Valley 7 Days",      emoji: "🏔️", pages: 8,  color: "border-slate-200 bg-slate-50" },
  "char-dham-7-days":         { title: "Char Dham 7 Days",         emoji: "🙏", pages: 9,  color: "border-amber-200 bg-amber-50" },
  "kedarnath-trek-3-days":    { title: "Kedarnath Trek 3 Days",    emoji: "🙏", pages: 6,  color: "border-stone-200 bg-stone-50" },
  "gujarat-7-days":           { title: "Gujarat 7 Days",           emoji: "🦁", pages: 8,  color: "border-orange-200 bg-orange-50" },
  "bangkok-4-days":           { title: "Bangkok 4 Days",           emoji: "🇹🇭", pages: 10, color: "border-yellow-200 bg-yellow-50" },
  "bali-5-days":              { title: "Bali 5 Days",              emoji: "🌴", pages: 9,  color: "border-green-200 bg-green-50" },
  "singapore-4-days":         { title: "Singapore 4 Days",         emoji: "🇸🇬", pages: 7,  color: "border-red-200 bg-red-50" },
  "sri-lanka-7-days":         { title: "Sri Lanka 7 Days",         emoji: "🦁", pages: 8,  color: "border-amber-200 bg-amber-50" },
  "malaysia-7-days":          { title: "Malaysia 7 Days",          emoji: "🇲🇾", pages: 8,  color: "border-blue-200 bg-blue-50" },
  "nepal-7-days":             { title: "Nepal 7 Days",             emoji: "🏔️", pages: 8,  color: "border-red-200 bg-red-50" },
  "turkey-7-days":            { title: "Turkey 7 Days",            emoji: "🇹🇷", pages: 8,  color: "border-red-200 bg-red-50" },
  "amsterdam-4-days":         { title: "Amsterdam 4 Days",         emoji: "🌷", pages: 7,  color: "border-pink-200 bg-pink-50" },
  "vietnam-10-days":          { title: "Vietnam 10 Days",          emoji: "🇻🇳", pages: 8,  color: "border-red-200 bg-red-50" },
  "thailand-10-days":         { title: "Thailand 10 Days",         emoji: "🌴", pages: 8,  color: "border-yellow-200 bg-yellow-50" },
  "bhutan-5-days":            { title: "Bhutan 5 Days",            emoji: "🏔️", pages: 6,  color: "border-orange-200 bg-orange-50" },
  // ₹249
  "dubai-4-days":             { title: "Dubai 4 Days",             emoji: "🏙️", pages: 9,  color: "border-yellow-200 bg-yellow-50" },
  "portugal-7-days":          { title: "Portugal 7 Days",          emoji: "🇵🇹", pages: 8,  color: "border-green-200 bg-green-50" },
  "paris-5-days":             { title: "Paris 5 Days",             emoji: "🗼", pages: 8,  color: "border-rose-200 bg-rose-50" },
  "barcelona-5-days":         { title: "Barcelona 5 Days",         emoji: "🇪🇸", pages: 8,  color: "border-yellow-200 bg-yellow-50" },
  "rome-5-days":              { title: "Rome 5 Days",              emoji: "🇮🇹", pages: 8,  color: "border-green-200 bg-green-50" },
  "london-5-days":            { title: "London 5 Days",            emoji: "🇬🇧", pages: 8,  color: "border-blue-200 bg-blue-50" },
  "maldives-5-days":          { title: "Maldives 5 Days",          emoji: "🏝️", pages: 7,  color: "border-cyan-200 bg-cyan-50" },
  "new-york-5-days":          { title: "New York 5 Days",          emoji: "🗽", pages: 8,  color: "border-blue-200 bg-blue-50" },
  // ₹299
  "japan-10-days":            { title: "Japan 10 Days",            emoji: "🗼", pages: 10, color: "border-red-200 bg-red-50" },
  "greece-10-days":           { title: "Greece 10 Days",           emoji: "🇬🇷", pages: 10, color: "border-blue-200 bg-blue-50" },
  "switzerland-7-days":       { title: "Switzerland 7 Days",       emoji: "🇨🇭", pages: 9,  color: "border-red-200 bg-red-50" },
};

type State = "idle" | "loading" | "success" | "not_found" | "error";
type Flow  = "razorpay" | "lookup";   // razorpay = came from payment, lookup = direct visit

export default function ThankYouClient() {
  const params = useSearchParams();

  // Razorpay redirect params
  const paymentId   = params.get("razorpay_payment_id") || "";
  const linkId      = params.get("razorpay_payment_link_id") || "";
  const referenceId = params.get("razorpay_payment_link_reference_id") || "";
  const status      = params.get("razorpay_payment_link_status") || "";
  const signature   = params.get("razorpay_signature") || "";
  const fromRazorpay = status === "paid" && !!paymentId;

  const flow: Flow = fromRazorpay ? "razorpay" : "lookup";

  const [email, setEmail]               = useState("");
  const [state, setState]               = useState<State>("idle");
  const [errorMsg, setErrorMsg]         = useState("");
  const [unlockedSlugs, setUnlockedSlugs] = useState<string[]>([]);
  const [tokens, setTokens]             = useState<Record<string, string>>({});
  const [isPremium, setIsPremium]       = useState(false);

  useEffect(() => {
    const urlEmail = params.get("email");
    if (urlEmail) setEmail(urlEmail);
  }, [params]);

  // ── Submit handler — picks correct API based on flow ──────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    setErrorMsg("");

    try {
      if (flow === "razorpay") {
        // Verify payment + grant access
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

      } else {
        // Look up existing access by email
        const res = await fetch("/api/my-downloads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });
        const data = await res.json();

        if (!res.ok) {
          setErrorMsg(data.error || "Something went wrong. Try again.");
          setState("error");
          return;
        }

        if (!data.found) {
          setState("not_found");
          return;
        }

        setUnlockedSlugs(data.unlockedSlugs || []);
        setTokens(data.tokens || {});
        setIsPremium(data.premium || false);
        setState("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  };

  const openPdf = (slug: string, token: string) =>
    window.open(`/api/serve-pdf?slug=${slug}&token=${token}`, "_blank");

  // ── Success screen ─────────────────────────────────────────────────────────
  if (state === "success") {
    return (
      <main className="min-h-screen bg-parchment">
        <section className="bg-ink text-center px-6 py-14">
          <p className="text-4xl mb-3">🎉</p>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
            {flow === "razorpay" ? "Payment Confirmed" : "Access Found"}
          </p>
          <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight mb-3">
            Your guides are ready
          </h1>
          <p className="text-white/50 text-sm font-light max-w-sm mx-auto">
            {isPremium
              ? "Lifetime access — download any guide, any time."
              : `${unlockedSlugs.length} guide${unlockedSlugs.length !== 1 ? "s" : ""} unlocked for ${email.trim()}`}
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-xl text-ink font-light mb-6">Your Downloads</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {unlockedSlugs.map((slug) => {
              const meta = GUIDE_META[slug];
              if (!meta) return null;
              return (
                <div key={slug} className="bg-white rounded-2xl border-2 border-gold/40 overflow-hidden">
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
                      onClick={() => openPdf(slug, tokens[slug])}
                      className="w-full bg-ink hover:bg-ink/80 text-white text-xs font-medium py-2.5 rounded-lg transition-colors"
                    >
                      Open PDF →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* How to save */}
          <div className="bg-white border border-parchment-2 rounded-2xl p-6 mb-6">
            <p className="font-medium text-sm text-ink mb-3">📌 How to save your PDF</p>
            <ol className="space-y-1.5 text-xs text-muted font-light list-decimal list-inside leading-relaxed">
              <li>Click "Open PDF" — it opens in a new browser tab</li>
              <li>Press <kbd className="bg-parchment px-1.5 py-0.5 rounded text-ink font-mono">Ctrl+P</kbd> (Windows) or <kbd className="bg-parchment px-1.5 py-0.5 rounded text-ink font-mono">⌘+P</kbd> (Mac)</li>
              <li>Set destination to <strong>Save as PDF</strong> → click Save</li>
              <li>Works offline forever — take it on your trip ✈️</li>
            </ol>
          </div>

          {/* Come back anytime */}
          <div className="bg-amber-50 border border-gold/30 rounded-2xl p-5 text-center mb-8">
            <p className="text-sm font-medium text-ink mb-1">♾️ Come back any time</p>
            <p className="text-xs text-muted font-light leading-relaxed">
              Your guides are saved to <strong>{email.trim()}</strong>. Visit{" "}
              <Link href="/thank-you" className="text-gold-dark underline underline-offset-2">
                incredibleitinerary.com/thank-you
              </Link>{" "}
              and enter the same email to re-download any time.
            </p>
          </div>

          {/* Upsell */}
          {!isPremium && (
            <div className="bg-ink rounded-2xl px-8 py-8 text-center">
              <p className="text-gold text-xs tracking-[0.18em] uppercase font-medium mb-2">Want all 50+ guides?</p>
              <h3 className="font-serif text-white text-xl font-light mb-2">Unlock Everything — ₹499</h3>
              <p className="text-white/50 text-xs font-light mb-5 max-w-xs mx-auto leading-relaxed">
                Every guide we've made + every guide we ever will make. Pay once, download forever.
              </p>
              <a
                href="https://rzp.io/rzp/oUANvqjl"
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

  // ── Not found screen ───────────────────────────────────────────────────────
  if (state === "not_found") {
    return (
      <main className="min-h-screen bg-parchment flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="font-serif text-2xl text-ink font-light mb-3">No guides found for this email</h2>
          <p className="text-muted text-sm font-light mb-6 leading-relaxed">
            We couldn't find any purchases linked to <strong>{email}</strong>. Try the email you used during payment, or contact us.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setState("idle")}
              className="w-full bg-ink text-white font-medium text-sm py-3 rounded-full transition-colors hover:bg-ink/80"
            >
              Try a different email
            </button>
            <Link
              href="/guides"
              className="w-full border border-parchment-2 text-muted font-medium text-sm py-3 rounded-full hover:border-gold hover:text-ink transition-colors text-center"
            >
              Browse free guides →
            </Link>
            <a
              href="mailto:hello@incredibleitinerary.com"
              className="text-xs text-muted underline underline-offset-2 hover:text-ink transition-colors mt-1"
            >
              Contact support →
            </a>
          </div>
        </div>
      </main>
    );
  }

  // ── Email form (idle / error) ──────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-parchment flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full">

        {fromRazorpay && (
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Payment confirmed
            </span>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-parchment-2 shadow-sm p-8">
          <p className="text-3xl text-center mb-4">{fromRazorpay ? "🎉" : "📥"}</p>
          <h1 className="font-serif text-2xl text-ink font-light text-center mb-2">
            {fromRazorpay ? "Almost there!" : "Access your guides"}
          </h1>
          <p className="text-muted text-sm font-light text-center mb-7 leading-relaxed">
            {fromRazorpay
              ? "Enter the email you used at checkout to claim your PDF guides."
              : "Enter the email you used to download or purchase guides. We'll show everything unlocked for you."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
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
              {state === "loading" ? "Looking up..." : fromRazorpay ? "Claim My Guides →" : "Show My Guides →"}
            </button>
          </form>

          {fromRazorpay && (
            <p className="text-center text-muted/50 text-xs mt-5">
              Having trouble?{" "}
              <a href={`mailto:hello@incredibleitinerary.com?subject=Download help&body=Payment ID: ${paymentId}`}
                className="underline underline-offset-2 hover:text-ink transition-colors">
                Email us
              </a>
              {" "}with your payment ID: <span className="font-mono text-[0.6rem]">{paymentId}</span>
            </p>
          )}
        </div>

        {!fromRazorpay && (
          <p className="text-center text-muted/40 text-xs mt-5">
            Haven&apos;t purchased yet?{" "}
            <Link href="/guides" className="underline underline-offset-2 hover:text-ink transition-colors">
              Browse free guides →
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
