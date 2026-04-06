import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "../[slug]/BlogSlugNav";
import AuthorByline from "@/components/blog/AuthorByline";
import PhotoCta from "@/components/blog/PhotoCta";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import { BlogPostSchema } from "@/components/SchemaMarkup";
import { getPostBySlug } from "@/data/blog";

const SITE = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Kedarnath Trek 2026: Complete Guide (Registration, Route, Cost) — IncredibleItinerary",
  description: "Everything about the Kedarnath trek — online registration, Gaurikund to Kedarnath route, helicopter booking, real costs, what to pack, and what the 4am trail actually feels like.",
  alternates: { canonical: `${SITE}/blog/kedarnath-trek-guide` },
  openGraph: {
    title: "Kedarnath Trek 2026: Complete Guide",
    description: "3,583m above sea level. 16km on foot. Everything I learned trekking Kedarnath solo.",
    images: [{ url: `${SITE}/images/surya/blog-kedarnath-temple.jpg`, width: 1400, height: 647 }],
  },
};

export default function KedarnathTrekPage() {
  const post = getPostBySlug("kedarnath-trek-guide");

  return (
    <>
      {post && <BlogPostSchema post={post} />}
      <BlogSlugNav />

      <main className="pt-[72px] bg-cream min-h-screen">

        {/* Hero */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src="/images/surya/blog-kedarnath-temple.jpg"
            alt="Kedarnath temple decorated with marigolds, snow Himalayan peaks behind"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                Trek & Adventure
              </span>
              <h1 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-light text-white leading-tight mt-4 mb-3">
                Kedarnath Trek 2026: Complete Guide
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px]">
                3,583m above sea level. 16km on foot from Gaurikund. Everything I learned trekking here solo — registration, real costs, the 4am trail, and what nobody tells you beforehand.
              </p>
            </div>
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] text-white/35">
            📸 Personal photo — Kedarnath, Oct 2022
          </span>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-8 pb-20">

          <AuthorByline date="April 6, 2026" readTime="14 min" />

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {[
              { icon: "⛰️", label: "Altitude", value: "3,583m" },
              { icon: "🥾", label: "Trek Distance", value: "16–19km" },
              { icon: "📅", label: "Open", value: "May – Nov" },
              { icon: "💰", label: "Budget From", value: "₹3,500/day" },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="font-serif text-lg font-light text-ink">{s.value}</p>
                <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Personal intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
              I started from Gaurikund at 4am. No phone signal after the first 3km. Just a headlamp, the sound of the Mandakini river below, and a few hundred other pilgrims moving in silence up the mountain. By the time the temple appeared through the mist, I understood why people come here.
            </p>
            <p className="text-xs text-muted mt-3 font-light">— Surya Pratap, trekked Oct 2022</p>
          </blockquote>

          {/* Section: Registration */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">📋 Registration — Do This First</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kedarnath registration is mandatory and free. Without it, you will be turned back at checkpoints. Register at <strong className="text-ink">registrationandtouristcare.uk.gov.in</strong> before you leave home.
            </p>
            <div className="bg-white border border-parchment-2 rounded-xl p-5 space-y-3">
              {[
                ["Register online", "registrationandtouristcare.uk.gov.in — free, takes 5 minutes"],
                ["Documents needed", "Aadhaar or Passport + your photo"],
                ["Slot system", "Daily entry is capped — register early, especially May–June"],
                ["Medical certificate", "Required if you're above 50 or have health conditions"],
                ["Print or save", "Keep your registration PDF on your phone offline"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 text-sm">
                  <span className="font-medium text-ink w-40 flex-shrink-0">{k}</span>
                  <span className="text-muted font-light">{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: How to reach */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">🚗 How to Reach Gaurikund</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Gaurikund (1,982m) is the base camp. All treks start here. The nearest major city is Rishikesh.
            </p>
            <div className="space-y-3">
              {[
                { from: "Delhi → Rishikesh", how: "Bus (Volvo AC, ₹400–600) or train to Haridwar + taxi. ~7 hrs.", },
                { from: "Rishikesh → Sonprayag", how: "Shared jeep or bus, ~8–9 hours. Break journey at Rudraprayag or Ukhimath.", },
                { from: "Sonprayag → Gaurikund", how: "Mandatory shared jeep from Sonprayag (₹30–50 per person, 5km).", },
                { from: "Nearest airport", how: "Jolly Grant Airport, Dehradun (~250km). Taxi to Rishikesh then onward.", },
              ].map(r => (
                <div key={r.from} className="bg-parchment rounded-xl p-4 border border-parchment-2">
                  <p className="text-sm font-medium text-ink mb-1">{r.from}</p>
                  <p className="text-xs text-muted font-light">{r.how}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Trek route */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">🥾 The Trek Route</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              The standard route is Gaurikund to Kedarnath temple — 16km one way, ascending 1,600m. Most people do it in one day up, one day down. Fit trekkers do it in 5–6 hours up.
            </p>
            <div className="space-y-3">
              {[
                { km: "0–3km", label: "Gaurikund to Jungle Chatti", desc: "Steep initial climb through forest. This is where most people slow down. Pace yourself." },
                { km: "3–7km", label: "Jungle Chatti to Bheembali", desc: "Gradient eases slightly. Tea stalls every 1km. River views open up. Beautiful section." },
                { km: "7–12km", label: "Bheembali to Lincholi", desc: "The most scenic stretch. Rocky, open terrain. Snow patches possible even in October." },
                { km: "12–16km", label: "Lincholi to Kedarnath", desc: "Final push. The temple appears in the valley. Emotional for everyone regardless of faith." },
              ].map(s => (
                <div key={s.km} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.65rem] bg-gold/20 text-gold-dark font-medium px-2 py-0.5 rounded-full">{s.km}</span>
                    <span className="font-medium text-sm text-stone-900">{s.label}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Personal photo */}
          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/7]">
            <Image
              src="/images/surya/surya-kedarnath-ridge.jpg"
              alt="Surya Pratap sitting at Kedarnath ridge with snow peaks behind, Oct 2022"
              fill className="object-cover object-top"
              sizes="(max-width: 860px) 100vw, 860px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <p className="absolute bottom-4 left-5 text-white text-sm font-serif font-light">
              At the ridge above Kedarnath, Oct 2022 — altitude ~3,800m
            </p>
            <span className="absolute bottom-2 right-3 text-[10px] text-white/40">📸 Personal photo</span>
          </div>

          {/* Section: Helicopter */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">🚁 Helicopter vs Trek — Honest Take</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-amber-800 mb-3">🥾 Trek (recommended)</h3>
                <ul className="space-y-2 text-xs text-amber-700 font-light">
                  <li>✓ The journey is the experience — don't skip it</li>
                  <li>✓ ₹0 extra cost beyond basics</li>
                  <li>✓ You earn the arrival</li>
                  <li>✗ 6–8 hours of hard walking</li>
                  <li>✗ Altitude sickness risk if you rush</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-blue-800 mb-3">🚁 Helicopter</h3>
                <ul className="space-y-2 text-xs text-blue-700 font-light">
                  <li>✓ 7 minutes Sitapur to Kedarnath</li>
                  <li>✓ Good for elderly, health issues</li>
                  <li>✓ Book at heliyatra.irctc.co.in</li>
                  <li>✗ ₹4,000–9,000 per person one way</li>
                  <li>✗ Cancels in bad weather with no refund guarantee</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Costs */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">💰 Real Costs (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3 font-medium text-ink text-xs">Item</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Budget</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Mid-range</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted font-light">
                  {[
                    ["Delhi → Rishikesh bus", "₹400", "₹600 (Volvo AC)"],
                    ["Rishikesh → Sonprayag", "₹250 (shared)", "₹1,800 (private cab)"],
                    ["Gaurikund accommodation", "₹400–600/night", "₹1,200–2,000/night"],
                    ["Trek guide (optional)", "—", "₹800–1,200/day"],
                    ["Kedarnath accommodation", "₹500–800 (GMVN)", "₹1,500–2,500"],
                    ["Food on trek", "₹300–500/day", "₹600–900/day"],
                    ["Pony/Doli (skip it)", "₹2,000–4,000", "—"],
                    ["Total 4-day trip", "~₹4,500", "~₹8,500–12,000"],
                  ].map(([item, budget, mid]) => (
                    <tr key={item} className="border-b border-parchment-2">
                      <td className="p-3 font-medium text-ink">{item}</td>
                      <td className="p-3">{budget}</td>
                      <td className="p-3">{mid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Tips */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">💡 Things I Wish I Knew</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "⏰", title: "Start at 4am — no negotiation", desc: "The trail gets crowded by 7am. Starting at 4am means cooler temps, fewer people, and you reach before afternoon clouds roll in." },
                { icon: "🌦️", title: "Afternoon weather changes fast", desc: "Clear morning skies turn stormy by 2pm regularly. Be at the temple or on your way back before 1pm." },
                { icon: "🏔️", title: "Acclimatise one day at Sonprayag", desc: "Don't rush straight to Gaurikund and trek the same day. One night at Sonprayag prevents altitude headaches." },
                { icon: "💧", title: "Water is not a problem", desc: "Free drinking water at multiple points on the trail from GMVN stalls. Don't overload yourself with bottles." },
                { icon: "🎒", title: "Keep your bag under 8kg", desc: "Every kilo feels like 3kg above 3,000m. Leave the non-essentials at your Rishikesh hotel." },
                { icon: "📵", title: "No signal after km 3", desc: "BSNL works intermittently. Tell family your plans before you lose signal. The offline Maps.me app is useful here." },
              ].map(t => (
                <div key={t.title} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{t.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{t.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-5">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Is Kedarnath trek difficult?", a: "Moderately difficult. 16km, 1,600m ascent. Anyone in reasonable fitness who walks regularly can do it. The key is pace — slow and steady beats fast and exhausted." },
                { q: "When is Kedarnath open in 2026?", a: "The temple opens on Akshaya Tritiya (usually May) and closes on Bhai Dooj (usually November). Exact dates are announced a few weeks prior." },
                { q: "Can I do Kedarnath without a guide?", a: "Yes, easily. The trail is well-marked with checkpoints. Many people including myself did it completely solo." },
                { q: "Is it safe for solo female travellers?", a: "Generally yes — it's a well-monitored pilgrimage route with CISF and police presence throughout. Solo women trek here regularly." },
                { q: "What about altitude sickness?", a: "Gaurikund is at 1,982m and Kedarnath at 3,583m. Most people are fine if they acclimatise overnight at Sonprayag and trek at a steady pace. Carry Diamox if you're sensitive." },
              ].map(f => (
                <details key={f.q} className="border border-parchment-2 rounded-xl overflow-hidden bg-white group">
                  <summary className="px-5 py-4 text-sm font-medium text-ink cursor-pointer hover:bg-parchment transition-colors list-none flex justify-between items-center">
                    {f.q}<span className="text-amber-800 text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-parchment-2">
                    <p className="text-sm text-muted font-light leading-relaxed">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <AffiliateBlock destination="Kedarnath" />
          <PhotoCta destination="Kedarnath" />

          <div className="mt-10 pt-8 border-t border-parchment-2 flex flex-wrap gap-3">
            <Link href="/blog/char-dham-yatra-guide" className="btn-gold text-sm">
              Full Char Dham Guide →
            </Link>
            <Link href="/blog/gangotri-glacier-trek" className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all">
              Gangotri Trek Guide →
            </Link>
            <Link href="/blog/rishikesh-haridwar-3-days" className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all">
              Rishikesh Guide →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
