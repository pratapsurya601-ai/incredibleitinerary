import type { Metadata } from "next";
import Link from "next/link";
import DownloadButton from "@/components/pdf/DownloadButton";

export const metadata: Metadata = {
  title: "Free Travel Guide PDFs — IncredibleItinerary",
  description:
    "Download free print-ready PDF travel guides. Rajasthan, Kerala, Goa, Kashmir and 50+ destinations. Day-by-day itineraries, real budgets, packing lists. 2 free per email.",
  alternates: {
    canonical: "https://www.incredibleitinerary.com/guides",
  },
  openGraph: {
    title: "Free PDF Travel Guides — IncredibleItinerary",
    description: "Download free print-ready itinerary PDFs. 50+ destinations. 2 free per email.",
    type: "website",
  },
};

const AVAILABLE = [
  {
    slug: "rajasthan-7-days",
    title: "Rajasthan 7 Days",
    sub: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
    emoji: "🏰",
    pages: 11,
    includes: ["Day-by-day plan", "Budget table (₹20k–₹3L)", "Packing list", "Route maps"],
    href: "/blog/rajasthan-7-days",
    country: "India",
    price: "Free",
  },
  {
    slug: "kerala-5-days",
    title: "Kerala 5 Days",
    sub: "Kochi · Munnar · Alleppey · Varkala",
    emoji: "🌊",
    pages: 10,
    includes: ["Houseboat booking guide", "Budget table (₹15k–₹1L)", "Packing list", "Route maps"],
    href: "/blog/kerala-5-days",
    country: "India",
    price: "Free",
  },
  {
    slug: "goa-3-days",
    title: "Goa 3 Days",
    sub: "North · South · Hinterland · Dudhsagar",
    emoji: "🏖️",
    pages: 8,
    includes: ["4 itinerary types", "Budget table (₹3k–₹12k/day)", "Scooter & shack tips", "Packing list"],
    href: "/blog/goa-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "india-budget-guide",
    title: "India Budget Guide",
    sub: "Travel India for under ₹3,000/day",
    emoji: "🇮🇳",
    pages: 11,
    includes: ["₹3k/day formula", "8-city budget table", "Scam guide", "Best apps & transport tips"],
    href: "/blog",
    country: "India",
    price: "₹99",
  },
  {
    slug: "leh-ladakh-7-days",
    title: "Leh Ladakh 7 Days",
    sub: "Pangong Lake · Nubra Valley · Khardung La",
    emoji: "🏔️",
    pages: 12,
    includes: ["AMS protocol", "Permit guide (ILP)", "Budget table", "High-altitude packing list"],
    href: "/blog/leh-ladakh-7-days",
    country: "India",
    price: "₹199",
  },
  {
    slug: "bangkok-4-days",
    title: "Bangkok 4 Days",
    sub: "Temples · Street Food · Ayutthaya · Nightlife",
    emoji: "🇹🇭",
    pages: 10,
    includes: ["Indian traveller essentials", "Street food map", "Budget in ₹ & THB", "Day trip guide"],
    href: "/blog/bangkok-4-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "kashmir-6-days",
    title: "Kashmir 6 Days",
    sub: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
    emoji: "❄️",
    pages: 8,
    includes: ["Dal Lake houseboat guide", "Gondola to 4200m", "Pashmina buying guide", "Safety tips"],
    href: "/blog/kashmir-6-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "manali-5-days",
    title: "Manali 5 Days",
    sub: "Solang Valley · Rohtang Pass · Old Manali",
    emoji: "⛰️",
    pages: 8,
    includes: ["Rohtang permit guide", "Solang activities & prices", "Kheerganga trek", "Bike rental tips"],
    href: "/blog/manali-5-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "bali-5-days",
    title: "Bali 5 Days",
    sub: "Ubud · Seminyak · Uluwatu · Nusa Penida",
    emoji: "🌴",
    pages: 9,
    includes: ["Visa on arrival guide for Indians", "Volcano trek + temples", "Beach clubs", "Budget in ₹ & USD"],
    href: "/blog/bali-5-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "dubai-4-days",
    title: "Dubai 4 Days",
    sub: "Downtown · Marina · Desert Safari · Deira",
    emoji: "🏙️",
    pages: 9,
    includes: ["UAE visa guide for Indians", "Burj Khalifa booking tips", "Desert safari guide", "Budget in ₹ & AED"],
    href: "/blog/dubai-4-days",
    country: "International",
    price: "₹249",
  },
  // Phase 2
  {
    slug: "andaman-5-days",
    title: "Andaman 5 Days",
    sub: "Port Blair · Havelock · Neil Island · Scuba",
    emoji: "🏝️",
    pages: 7,
    includes: ["Ferry booking guide", "Radhanagar + Elephant Beach", "Scuba diving guide", "Cash survival tips"],
    href: "/blog/andaman-5-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "varanasi-3-days",
    title: "Varanasi 3 Days",
    sub: "Ghats · Ganga Aarti · Kashi Vishwanath · Sarnath",
    emoji: "🕌",
    pages: 6,
    includes: ["Ganga Aarti guide", "Sunrise boat ride", "Sarnath day trip", "Silk buying guide"],
    href: "/blog/varanasi-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "singapore-4-days",
    title: "Singapore 4 Days",
    sub: "Marina Bay · Sentosa · Little India · Orchard",
    emoji: "🇸🇬",
    pages: 7,
    includes: ["eVisa guide for Indians", "MRT navigation guide", "Hawker centre map", "Budget in ₹ & SGD"],
    href: "/blog/singapore-3-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "sri-lanka-7-days",
    title: "Sri Lanka 7 Days",
    sub: "Colombo · Kandy · Ella · Yala · Galle",
    emoji: "🦁",
    pages: 8,
    includes: ["Ella train booking guide", "Yala leopard safari", "Free visa on arrival for Indians", "Budget in ₹ & LKR"],
    href: "/blog/sri-lanka-7-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "japan-10-days",
    title: "Japan 10 Days",
    sub: "Tokyo · Kyoto · Osaka · Hiroshima · Nara",
    emoji: "🗼",
    pages: 10,
    includes: ["Japan visa guide", "JR Pass buying guide (saves ₹15k+)", "Cherry blossom timing", "Budget in ₹ & JPY"],
    href: "/blog/tokyo-5-days",
    country: "International",
    price: "₹299",
  },
  // Phase 3
  {
    slug: "vietnam-10-days",
    title: "Vietnam 10 Days",
    sub: "Hanoi · Ha Long Bay · Hội An · Đà Nẵng · Saigon",
    emoji: "🇻🇳",
    pages: 8,
    includes: ["E-visa guide for Indians", "Ha Long Bay cruise guide", "North↔South route options", "Budget in ₹ & VND"],
    href: "/blog/hanoi-3-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "thailand-10-days",
    title: "Thailand 10 Days",
    sub: "Bangkok · Chiang Mai · Phuket · Phi Phi · Krabi",
    emoji: "🌴",
    pages: 8,
    includes: ["Visa on arrival for Indians (free)", "Island hopping guide", "Ethical elephant sanctuary guide", "Budget in ₹ & THB"],
    href: "/blog/phuket-5-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "bhutan-5-days",
    title: "Bhutan 5 Days",
    sub: "Paro · Thimphu · Punakha · Tiger's Nest",
    emoji: "🏔️",
    pages: 6,
    includes: ["Indians: no visa needed", "Tiger's Nest full hike guide", "SDF fee breakdown (₹1,200/night)", "Best festival dates"],
    href: "/blog",
    country: "International",
    price: "₹199",
  },
  {
    slug: "portugal-7-days",
    title: "Portugal 7 Days",
    sub: "Lisbon · Sintra · Porto · Douro Valley · Algarve",
    emoji: "🇵🇹",
    pages: 8,
    includes: ["Schengen visa guide for Indians", "Lisbon tram + miradouros route", "Porto wine cellar guide", "Budget in ₹ & EUR"],
    href: "/blog/lisbon-4-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "greece-10-days",
    title: "Greece 10 Days",
    sub: "Athens · Mykonos · Santorini · Crete · Rhodes",
    emoji: "🇬🇷",
    pages: 10,
    includes: ["Schengen visa guide", "Island hopping ferry guide", "Santorini oia sunset secrets", "Budget in ₹ & EUR"],
    href: "/blog/athens-3-days",
    country: "International",
    price: "₹299",
  },
];

const COMING_SOON = [
  { emoji: "🌿", title: "Coorg 3 Days",           sub: "Coffee · Waterfalls · Treks",              country: "India" },
  { emoji: "🏝️", title: "Maldives 5 Days",       sub: "Malé · North Malé · South Malé",           country: "International" },
  { emoji: "🏔️", title: "Spiti Valley 7 Days",   sub: "Kaza · Key · Chandratal",                  country: "India" },
  { emoji: "🌿", title: "Meghalaya 5 Days",        sub: "Shillong · Cherrapunji · Dawki",           country: "India" },
  { emoji: "🇮🇹", title: "Italy 10 Days",         sub: "Rome · Florence · Amalfi · Venice",        country: "International" },
  { emoji: "🇪🇸", title: "Spain 10 Days",         sub: "Madrid · Barcelona · Seville · Granada",   country: "International" },
  { emoji: "🇲🇾", title: "Malaysia 7 Days",       sub: "KL · Penang · Langkawi · Borneo",          country: "International" },
  { emoji: "🇹🇷", title: "Turkey 10 Days",        sub: "Istanbul · Cappadocia · Antalya · Pamukkale", country: "International" },
  { emoji: "🇳🇵", title: "Nepal 7 Days",          sub: "Kathmandu · Pokhara · Everest Base Camp",  country: "International" },
  { emoji: "🌊", title: "Andhra Pradesh 5 Days",  sub: "Vizag · Araku · Tirupati · Hampi",         country: "India" },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-parchment">

      {/* ── HERO ── */}
      <section className="bg-ink text-white text-center px-6 py-16">
        <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
          Print-Ready · Offline-Friendly · Always Free to Start
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mb-3">
          Free PDF Travel Guides
        </h1>
        <p className="text-white/60 text-base max-w-md mx-auto font-light leading-relaxed mb-6">
          Every itinerary as a downloadable PDF — day plans, budgets, packing lists,
          route maps. Download 2 guides free, unlock all 20 for ₹499.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {["📄 Print-ready A4", "✈️ Works offline", "🎁 2 free per email", "♾️ Unlock all for ₹499"].map((t) => (
            <span key={t} className="bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-white/70 text-xs">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── AVAILABLE NOW ── */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-6">
        <h2 className="font-serif text-2xl text-ink font-light mb-6">
          Available Now
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AVAILABLE.map((g) => (
            <div key={g.slug} className="bg-white rounded-2xl border border-gold/30 overflow-hidden hover:border-gold hover:shadow-md transition-all duration-200">
              {/* Tag bar */}
              <div className={`px-4 py-1.5 flex items-center justify-between ${g.price === "Free" ? "bg-gold" : "bg-ink"}`}>
                <span className={`text-[0.6rem] font-bold tracking-widest uppercase ${g.price === "Free" ? "text-ink" : "text-gold"}`}>
                  {g.price === "Free" ? "Free Download" : `${g.price} — Instant Download`}
                </span>
                <span className={`text-[0.6rem] ${g.price === "Free" ? "text-ink/60" : "text-white/50"}`}>{g.country}</span>
              </div>

              <div className="p-6">
                <span className="text-4xl block mb-3">{g.emoji}</span>
                <h3 className="font-serif text-ink text-xl font-light mb-0.5">{g.title}</h3>
                <p className="text-muted text-xs mb-4">{g.sub}</p>

                <ul className="space-y-1.5 mb-5">
                  {g.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="text-gold font-bold">✓</span>{item}
                    </li>
                  ))}
                </ul>

                <p className="text-muted/50 text-[0.65rem] mb-4">📄 {g.pages} pages · A4 · Print-ready</p>

                <div className="flex flex-col gap-2">
                  <DownloadButton slug={g.slug} title={g.title} variant="primary" className="w-full justify-center" />
                  <Link
                    href={g.href}
                    className="block text-center text-xs text-muted hover:text-ink underline underline-offset-2 transition-colors"
                  >
                    Read the full guide online →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl text-ink font-light">Coming Soon</h2>
          <span className="text-xs text-muted">Added weekly</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {COMING_SOON.map((g) => (
            <div
              key={g.title}
              className="bg-white rounded-xl border border-parchment-2 p-4 opacity-70 hover:opacity-90 transition-opacity"
            >
              <span className="text-2xl block mb-2">{g.emoji}</span>
              <p className="text-sm font-medium text-ink leading-tight">{g.title}</p>
              <p className="text-[0.62rem] text-muted mt-0.5 leading-snug">{g.sub}</p>
              <span className="inline-block mt-2 text-[0.6rem] bg-parchment-2 text-muted px-2 py-0.5 rounded-full">
                {g.country}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── UNLOCK CTA ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-ink rounded-2xl px-8 py-10 text-center">
          <p className="text-gold text-xs tracking-[0.18em] uppercase font-medium mb-3">
            One-Time · No Subscription · Lifetime Access
          </p>
          <h2 className="font-serif text-white text-[clamp(1.6rem,4vw,2.4rem)] font-light leading-tight mb-3">
            Unlock All 20+ Guides — ₹499
          </h2>
          <p className="text-white/50 text-sm font-light max-w-sm mx-auto mb-7 leading-relaxed">
            Every guide we&apos;ve made and every guide we ever will make.
            Pay once. Download forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://rzp.io/rzp/qhP2iBq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-200"
            >
              Get Lifetime Access — ₹499 →
            </a>
            <a
              href="https://rzp.io/rzp/SfJqFBV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200"
            >
              India Pack only — ₹249
            </a>
          </div>
          <p className="text-white/25 text-xs mt-4">
            UPI · Cards · Net Banking · Wallets via Razorpay
          </p>
        </div>
      </section>

    </main>
  );
}
