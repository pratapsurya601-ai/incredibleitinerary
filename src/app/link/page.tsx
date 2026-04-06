import type { Metadata } from "next";
import Link from "next/link";
import DownloadButton from "@/components/pdf/DownloadButton";

export const metadata: Metadata = {
  title: "IncredibleItinerary — Free Travel Guides",
  description:
    "Day-by-day travel itineraries with real budgets. Download free PDF guides for India & worldwide. 20+ destinations.",
  alternates: {
    canonical: "https://www.incredibleitinerary.com/link",
  },
  openGraph: {
    title: "IncredibleItinerary — Free PDF Travel Guides",
    description: "Download free travel guides. 20+ destinations. Real budgets. Day-by-day plans.",
    type: "website",
  },
};

const FREE_GUIDES = [
  { slug: "rajasthan-7-days", title: "Rajasthan 7 Days", emoji: "🏰", sub: "Jaipur · Jodhpur · Udaipur" },
  { slug: "kerala-5-days",    title: "Kerala 5 Days",    emoji: "🌿", sub: "Backwaters · Munnar · Kochi" },
];

const PAID_GUIDES = [
  { slug: "goa-3-days",        title: "Goa 3 Days",        emoji: "🏖️", price: "₹99" },
  { slug: "kashmir-6-days",    title: "Kashmir 6 Days",    emoji: "❄️", price: "₹149" },
  { slug: "manali-5-days",     title: "Manali 5 Days",     emoji: "⛰️", price: "₹149" },
  { slug: "leh-ladakh-7-days", title: "Leh Ladakh 7 Days", emoji: "🏔️", price: "₹199" },
  { slug: "bali-5-days",       title: "Bali 5 Days",       emoji: "🌴", price: "₹199" },
  { slug: "bangkok-4-days",    title: "Bangkok 4 Days",    emoji: "🇹🇭", price: "₹199" },
  { slug: "singapore-4-days",  title: "Singapore 4 Days",  emoji: "🇸🇬", price: "₹199" },
  { slug: "dubai-4-days",      title: "Dubai 4 Days",      emoji: "🏙️", price: "₹249" },
  { slug: "japan-10-days",     title: "Japan 10 Days",     emoji: "🗼", price: "₹299" },
  { slug: "vietnam-10-days",   title: "Vietnam 10 Days",   emoji: "🇻🇳", price: "₹199" },
  { slug: "thailand-10-days",  title: "Thailand 10 Days",  emoji: "🌴", price: "₹199" },
  { slug: "portugal-7-days",   title: "Portugal 7 Days",   emoji: "🇵🇹", price: "₹249" },
  { slug: "greece-10-days",    title: "Greece 10 Days",    emoji: "🇬🇷", price: "₹299" },
];

const BLOG_LINKS = [
  { href: "/blog/rajasthan-7-days", title: "Rajasthan 7-Day Guide",    emoji: "🏰" },
  { href: "/blog/kerala-5-days",    title: "Kerala 5-Day Guide",        emoji: "🌿" },
  { href: "/blog/goa-3-days",       title: "Goa 3-Day Guide",           emoji: "🏖️" },
  { href: "/blog/leh-ladakh-7-days",title: "Leh Ladakh 7-Day Guide",    emoji: "🏔️" },
  { href: "/blog/kashmir-6-days",   title: "Kashmir 6-Day Guide",       emoji: "❄️" },
  { href: "/blog/bali-5-days",      title: "Bali 5-Day Guide",          emoji: "🌴" },
  { href: "/blog/bangkok-4-days",   title: "Bangkok 4-Day Guide",       emoji: "🇹🇭" },
  { href: "/blog/tokyo-5-days",     title: "Japan Travel Guide",        emoji: "🗼" },
];

export default function LinkPage() {
  return (
    <main className="min-h-screen bg-[#0d0a04] text-white">

      {/* ── PROFILE HEADER ── */}
      <section className="pt-12 pb-6 px-5 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
          <span className="text-3xl">✈️</span>
        </div>
        <h1 className="font-serif text-2xl font-light text-white mb-1">
          IncredibleItinerary
        </h1>
        <p className="text-white/50 text-sm font-light mb-1">
          Free travel guides · Real budgets · Day-by-day plans
        </p>
        <p className="text-gold text-xs tracking-widest uppercase font-medium mb-6">
          20+ Destinations · India & Worldwide
        </p>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-5 mb-2">
          <a
            href="https://www.linkedin.com/in/surya-pratap-singh-490a18320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── FREE GUIDES CTA ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <div className="bg-gradient-to-br from-gold/20 to-amber-700/10 border border-gold/30 rounded-2xl p-5 text-center">
          <p className="text-gold text-[0.65rem] tracking-[0.18em] uppercase font-medium mb-1">Start Here</p>
          <h2 className="font-serif text-xl font-light text-white mb-2">
            2 Free PDF Guides
          </h2>
          <p className="text-white/50 text-sm font-light mb-4 leading-relaxed">
            Rajasthan & Kerala — day-by-day plans, real budgets, packing lists. Download free.
          </p>
          <div className="flex flex-col gap-2">
            {FREE_GUIDES.map((g) => (
              <div key={g.slug} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{g.emoji}</span>
                  <div className="text-left">
                    <p className="text-white text-sm font-medium leading-tight">{g.title}</p>
                    <p className="text-white/40 text-xs">{g.sub}</p>
                  </div>
                </div>
                <DownloadButton slug={g.slug} title={g.title} variant="primary" className="text-xs !py-1.5 !px-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL ACCESS BUNDLE ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <a
          href="https://rzp.io/rzp/qhP2iBq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-gold hover:bg-gold-dark text-[#0d0a04] font-semibold rounded-2xl px-5 py-4 transition-colors duration-200 shadow-lg"
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-0.5 opacity-70">Best Value</p>
            <p className="text-base font-bold leading-tight">All 20+ Guides — ₹499</p>
            <p className="text-xs font-medium opacity-60 mt-0.5">One-time · Lifetime access · All future guides</p>
          </div>
          <span className="text-2xl ml-3">→</span>
        </a>
      </section>

      {/* ── INDIA PACK ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <a
          href="https://rzp.io/rzp/SfJqFBV"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border border-white/20 hover:border-white/40 text-white rounded-2xl px-5 py-4 transition-colors duration-200"
        >
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-0.5 text-white/50">India Only</p>
            <p className="text-base font-semibold leading-tight">India Pack — ₹249</p>
            <p className="text-xs text-white/40 mt-0.5">10 India destinations · Rajasthan, Kerala, Goa + more</p>
          </div>
          <span className="text-xl ml-3 text-white/50">→</span>
        </a>
      </section>

      {/* ── INDIVIDUAL GUIDES ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <p className="text-white/30 text-xs tracking-widest uppercase font-medium text-center mb-3">Individual Guides</p>
        <div className="grid grid-cols-2 gap-2">
          {PAID_GUIDES.map((g) => (
            <div key={g.slug} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{g.emoji}</span>
                <div>
                  <p className="text-white text-xs font-medium leading-tight">{g.title}</p>
                  <p className="text-gold text-xs font-semibold">{g.price}</p>
                </div>
              </div>
              <DownloadButton slug={g.slug} title={g.title} variant="primary" className="text-[0.65rem] !py-1.5 !px-2 w-full justify-center" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <p className="text-white/30 text-xs tracking-widest uppercase font-medium text-center mb-3">Read Online (Free)</p>
        <div className="flex flex-col gap-2">
          {BLOG_LINKS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="flex items-center justify-between border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/8 rounded-xl px-4 py-3 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{b.emoji}</span>
                <span className="text-sm text-white/80 font-light">{b.title}</span>
              </div>
              <span className="text-white/30 text-sm">→</span>
            </Link>
          ))}
          <Link
            href="/blog"
            className="flex items-center justify-center text-center border border-white/10 hover:border-white/25 rounded-xl px-4 py-3 text-sm text-white/50 hover:text-white/80 transition-all duration-200"
          >
            View all 80+ guides →
          </Link>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="px-4 max-w-md mx-auto mb-5">
        <a
          href="mailto:hello@incredibleitinerary.com"
          className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 rounded-2xl px-5 py-4 text-white/60 hover:text-white transition-all duration-200 text-sm"
        >
          <span>✉️</span>
          <span>hello@incredibleitinerary.com</span>
        </a>
      </section>

      {/* ── FOOTER ── */}
      <section className="px-4 max-w-md mx-auto pb-12 text-center">
        <p className="text-white/20 text-xs">
          © 2026 IncredibleItinerary · Free travel guides · UPI · Cards via Razorpay
        </p>
      </section>

    </main>
  );
}
