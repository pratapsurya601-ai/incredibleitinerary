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
            href="https://instagram.com/incredibleitinerary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://youtube.com/@incredibleitinerary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
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
