import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unlock Travel Guides — IncredibleItinerary",
  description:
    "Get instant access to premium PDF travel guides. India pack from ₹249 or lifetime access to all 50+ guides for ₹499. One-time payment, no subscription.",
  robots: { index: false, follow: false },
};

const INDIA_GUIDES = [
  { emoji: "🏰", name: "Rajasthan 7 Days", sub: "Jaipur · Jodhpur · Jaisalmer" },
  { emoji: "🌊", name: "Kerala 6 Days", sub: "Munnar · Alleppey · Kovalam" },
  { emoji: "🎭", name: "Goa 5 Days", sub: "North · South · Hinterland" },
  { emoji: "🏔️", name: "Kashmir 6 Days", sub: "Srinagar · Gulmarg · Pahalgam" },
  { emoji: "🌿", name: "Coorg 3 Days", sub: "Coffee · Waterfalls · Treks" },
  { emoji: "🏖️", name: "Andaman 5 Days", sub: "Port Blair · Havelock · Neil" },
  { emoji: "🕌", name: "Varanasi 3 Days", sub: "Ghats · Temples · Sarnath" },
  { emoji: "⛰️", name: "Manali 5 Days", sub: "Solang · Rohtang · Old Manali" },
  { emoji: "🌄", name: "Meghalaya 4 Days", sub: "Shillong · Cherrapunji · Mawlynnong" },
  { emoji: "🐯", name: "Jim Corbett 3 Days", sub: "Safari · Jungle · Wildlife" },
];

const ALL_GUIDES = [
  { emoji: "🗼", name: "Japan 10 Days", sub: "Tokyo · Kyoto · Osaka" },
  { emoji: "🌴", name: "Bali 5 Days", sub: "Ubud · Seminyak · Uluwatu" },
  { emoji: "🏙️", name: "Dubai 4 Days", sub: "Creek · Marina · Desert" },
  { emoji: "🌅", name: "Santorini 4 Days", sub: "Oia · Fira · Akrotiri" },
  { emoji: "🍜", name: "Bangkok 4 Days", sub: "Old Town · Sukhumvit · Floating Market" },
  { emoji: "🍕", name: "Rome 5 Days", sub: "Colosseum · Vatican · Trastevere" },
  { emoji: "✈️", name: "40+ More Guides", sub: "New destinations added weekly" },
];

export default function UnlockPage() {
  return (
    <main className="min-h-screen bg-parchment">

      {/* ── HERO ── */}
      <section className="bg-ink text-white text-center px-6 py-14 md:py-18">
        <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
          One-Time · No Subscription · Instant Access
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mb-3">
          You've used your 2 free guides
        </h1>
        <p className="text-white/60 text-base max-w-md mx-auto font-light leading-relaxed">
          Unlock premium PDF guides — day-by-day itineraries, real budgets,
          packing lists and route maps. Print-ready, offline-friendly.
        </p>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-5">

          {/* ── INDIA PACK ₹249 ── */}
          <div className="bg-white rounded-2xl border border-parchment-2 overflow-hidden flex flex-col">
            <div className="px-7 pt-7 pb-6 flex-1">
              <p className="text-xs tracking-[0.18em] uppercase text-muted font-medium mb-4">
                India Pack
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-5xl text-ink font-light">₹249</span>
              </div>
              <p className="text-muted text-xs mb-6">One-time · Instant download</p>

              <ul className="space-y-3 mb-8">
                {[
                  "10 India destination PDF guides",
                  "Rajasthan, Kerala, Goa, Kashmir + more",
                  "Day-by-day itineraries with real costs",
                  "Packing lists & route maps",
                  "Free updates for 1 year",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="text-gold mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-7 pb-7">
              <a
                href="https://rzp.io/rzp/aRVZcSi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border-2 border-ink hover:bg-ink text-ink hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Get India Pack — ₹249 →
              </a>
            </div>
          </div>

          {/* ── ALL ACCESS ₹499 ── HIGHLIGHTED ── */}
          <div className="bg-ink rounded-2xl overflow-hidden flex flex-col relative">
            {/* Best value badge */}
            <div className="absolute top-5 right-5">
              <span className="bg-gold text-ink text-[0.65rem] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                Best Value
              </span>
            </div>

            <div className="px-7 pt-7 pb-6 flex-1">
              <p className="text-xs tracking-[0.18em] uppercase text-gold font-medium mb-4">
                Lifetime Access
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-5xl text-white font-light">₹499</span>
                <span className="text-white/30 text-sm line-through">₹1,999</span>
              </div>
              <p className="text-white/40 text-xs mb-6">One-time · Never expires · ₹10/guide</p>

              <ul className="space-y-3 mb-8">
                {[
                  "50+ destination PDF guides worldwide",
                  "Every India guide + International guides",
                  "New guides added every week — free",
                  "Lifetime access — pay once, yours forever",
                  "Free updates forever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="text-gold mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-7 pb-7">
              <a
                href="https://rzp.io/rzp/oUANvqjl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg"
              >
                Get Lifetime Access — ₹499 →
              </a>
              <p className="text-white/30 text-[0.65rem] text-center mt-3">
                UPI · Cards · Net Banking · Wallets
              </p>
            </div>
          </div>

        </div>

        {/* Trust line */}
        <p className="text-center text-muted text-xs mt-6">
          🔒 Secure payment via Razorpay · Instant access · 7-day money-back guarantee
        </p>
      </section>

      {/* ── INDIA PACK GUIDES ── */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="font-serif text-xl text-ink text-center font-light mb-6">
          What's in the India Pack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
          {INDIA_GUIDES.map((g) => (
            <div
              key={g.name}
              className="bg-white rounded-xl border border-parchment-2 p-3.5 text-center hover:border-gold/40 transition-colors"
            >
              <span className="text-2xl block mb-1.5">{g.emoji}</span>
              <p className="text-xs font-medium text-ink leading-tight">{g.name}</p>
              <p className="text-[0.6rem] text-muted mt-0.5 leading-snug">{g.sub}</p>
            </div>
          ))}
        </div>

        {/* All Access extras */}
        <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 mt-4">
          <p className="text-xs font-semibold text-amber-800 mb-2 uppercase tracking-wide">
            ✈️ Lifetime Access also includes these international guides:
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_GUIDES.map((g) => (
              <span
                key={g.name}
                className="inline-flex items-center gap-1.5 bg-white border border-amber-200 rounded-full px-3 py-1 text-xs text-ink"
              >
                {g.emoji} {g.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white border-t border-b border-parchment-2 py-12 px-6">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "💳", title: "Pay Once", desc: "UPI, Cards, Net Banking — choose what's convenient. Processed securely by Razorpay." },
            { icon: "📧", title: "Instant Access", desc: "Download link sent to your email within seconds. No waiting, no approval." },
            { icon: "📄", title: "Print to PDF", desc: "Open in Chrome → Ctrl+P → Save as PDF. Takes 10 seconds. Works offline forever." },
          ].map((f) => (
            <div key={f.title}>
              <span className="text-3xl block mb-3">{f.icon}</span>
              <h3 className="font-serif text-ink text-lg mb-2">{f.title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="font-serif text-2xl text-ink text-center font-light mb-7">Questions?</h2>
        <div className="space-y-4">
          {[
            {
              q: "What format are the guides?",
              a: "Beautifully designed HTML files you open in Chrome and print to PDF (Ctrl+P → Save as PDF). Takes 10 seconds. Works on any device.",
            },
            {
              q: "How do I get my guides after paying?",
              a: "You'll receive an email with your download link immediately after payment. You can re-download anytime.",
            },
            {
              q: "What payment methods are accepted?",
              a: "UPI (Google Pay, PhonePe, Paytm), all Indian debit/credit cards, Net Banking, and digital wallets — via Razorpay.",
            },
            {
              q: "Do you add new guides?",
              a: "Yes — new destination guides every week. Lifetime Access means you get every guide we ever make, forever, at no extra cost.",
            },
            {
              q: "Can I get a refund?",
              a: "Not happy within 7 days? Email hello@incredibleitinerary.com for a full refund, no questions asked.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-white rounded-xl border border-parchment-2 p-5">
              <p className="font-medium text-sm text-ink mb-1.5">{item.q}</p>
              <p className="text-sm text-muted font-light leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="text-center px-6 pb-16">
        <p className="text-muted text-sm mb-5 font-light">Still deciding?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://rzp.io/rzp/aRVZcSi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-ink hover:bg-ink text-ink hover:text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
          >
            India Pack — ₹249
          </a>
          <a
            href="https://rzp.io/rzp/oUANvqjl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Lifetime Access — ₹499 →
          </a>
        </div>
        <p className="text-muted text-xs mt-5">
          Or{" "}
          <Link href="/blog" className="text-gold hover:text-gold-dark underline underline-offset-2">
            keep reading our free guides
          </Link>{" "}
          — no pressure.
        </p>
      </section>

    </main>
  );
}
