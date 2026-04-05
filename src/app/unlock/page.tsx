import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unlock All 50+ Travel Guides — IncredibleItinerary",
  description:
    "Get lifetime access to all 50+ destination PDF guides. One-time payment, no subscription. Rajasthan, Bali, Japan, Dubai, Kerala, Goa and more.",
  robots: { index: false, follow: false },
};

const GUIDES = [
  { emoji: "🏰", name: "Rajasthan 7 Days", sub: "Jaipur · Jodhpur · Jaisalmer" },
  { emoji: "🌴", name: "Bali 5 Days", sub: "Ubud · Seminyak · Uluwatu" },
  { emoji: "🗼", name: "Japan 10 Days", sub: "Tokyo · Kyoto · Osaka" },
  { emoji: "🏙️", name: "Dubai 4 Days", sub: "Creek · Marina · Desert" },
  { emoji: "🌊", name: "Kerala 6 Days", sub: "Munnar · Alleppey · Kovalam" },
  { emoji: "🎭", name: "Goa 5 Days", sub: "North Goa · South Goa · Hinterland" },
  { emoji: "🏔️", name: "Kashmir 6 Days", sub: "Srinagar · Gulmarg · Pahalgam" },
  { emoji: "🌅", name: "Santorini 4 Days", sub: "Oia · Fira · Akrotiri" },
  { emoji: "🍜", name: "Bangkok 4 Days", sub: "Old Town · Sukhumvit · Floating Market" },
  { emoji: "🍕", name: "Rome 5 Days", sub: "Colosseum · Vatican · Trastevere" },
  { emoji: "🏛️", name: "Athens 3 Days", sub: "Acropolis · Monastiraki · Piraeus" },
  { emoji: "✈️", name: "50+ More Guides", sub: "New destinations added weekly" },
];

export default function UnlockPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero */}
      <section className="bg-ink text-white text-center px-6 py-16 md:py-20">
        <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
          One-Time · No Subscription · Lifetime Access
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight mb-4">
          Unlock All 50+ Travel Guides
        </h1>
        <p className="text-white/65 text-base max-w-md mx-auto mb-8 font-light leading-relaxed">
          You've used your 2 free guides. Get lifetime access to every PDF we've
          made — and every guide we ever will make.
        </p>

        {/* Price block */}
        <div className="inline-flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-10 py-6 mb-8">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-1">One-time payment</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-5xl text-gold font-light">₹499</span>
            <span className="text-white/40 text-sm line-through">₹1,999</span>
          </div>
          <p className="text-white/50 text-xs">That's less than ₹10 per guide</p>
        </div>

        {/* CTA Button — replace href with your Lemon Squeezy / Razorpay link */}
        <div>
          <a
            href="https://incredibleitinerary.lemonsqueezy.com/buy/all-guides"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Lifetime Access →
          </a>
          <p className="text-white/40 text-xs mt-3">
            Secure payment · Instant access · No recurring charges
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="font-serif text-2xl text-ink text-center font-light mb-8">
          Every guide. Forever.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {GUIDES.map((g) => (
            <div
              key={g.name}
              className="bg-white rounded-xl border border-parchment-2 p-4 text-center hover:border-gold/50 transition-colors"
            >
              <span className="text-2xl block mb-2">{g.emoji}</span>
              <p className="text-sm font-medium text-ink leading-tight">{g.name}</p>
              <p className="text-[0.65rem] text-muted mt-0.5">{g.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t border-b border-parchment-2 py-12 px-6">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📄", title: "Print-Ready PDFs", desc: "A4 formatted, print from Chrome in one click. Perfect for offline use." },
            { icon: "♾️", title: "Lifetime Access", desc: "Pay once. Download anytime. We'll never take your access away." },
            { icon: "🔄", title: "Free Updates", desc: "Every guide updated annually with new prices, tips and attractions." },
          ].map((f) => (
            <div key={f.title}>
              <span className="text-3xl block mb-3">{f.icon}</span>
              <h3 className="font-serif text-ink text-lg mb-2">{f.title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-14">
        <h2 className="font-serif text-2xl text-ink text-center font-light mb-8">Questions?</h2>
        <div className="space-y-4">
          {[
            {
              q: "What format are the guides in?",
              a: "Each guide is a beautifully designed HTML file you open in Chrome and print to PDF (Ctrl+P → Save as PDF). Takes 10 seconds.",
            },
            {
              q: "How do I access my guides after purchase?",
              a: "You'll receive an email with a download link immediately after payment. You can re-download anytime.",
            },
            {
              q: "Do you add new guides?",
              a: "Yes — we add new destination guides every week. Unlock once and you get every guide we ever make, forever.",
            },
            {
              q: "Can I get a refund?",
              a: "If you're not happy within 7 days of purchase, email us at hello@incredibleitinerary.com for a full refund. No questions asked.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-white rounded-xl border border-parchment-2 p-5">
              <p className="font-medium text-sm text-ink mb-2">{item.q}</p>
              <p className="text-sm text-muted font-light leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 pb-16">
        <a
          href="https://incredibleitinerary.lemonsqueezy.com/buy/all-guides"
          className="inline-block bg-ink hover:bg-ink/90 text-white font-semibold text-base px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Lifetime Access — ₹499 →
        </a>
        <p className="text-muted text-xs">
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
