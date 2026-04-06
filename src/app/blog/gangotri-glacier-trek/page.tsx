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
  title: "Gangotri & Gaumukh Glacier Trek 2026: Complete Guide — IncredibleItinerary",
  description: "Trek to the source of the Ganga — Gangotri temple, Bhojbasa camp, and Gaumukh glacier. Real permits, costs, trail details, and personal experience from June 2023.",
  alternates: { canonical: `${SITE}/blog/gangotri-glacier-trek` },
  openGraph: {
    title: "Gangotri & Gaumukh Glacier Trek 2026",
    description: "The origin of the Ganga. Bhagirathi valley, 19km trek, Gaumukh glacier. Personal experience June 2023.",
    images: [{ url: `${SITE}/images/surya/blog-gangotri-valley.jpg`, width: 1400, height: 1050 }],
  },
};

export default function GangotriGlacierTrekPage() {
  const post = getPostBySlug("gangotri-glacier-trek");

  return (
    <>
      {post && <BlogPostSchema post={post} />}
      <BlogSlugNav />

      <main className="pt-[72px] bg-cream min-h-screen">

        {/* Hero */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src="/images/surya/blog-gangotri-valley.jpg"
            alt="Bhagirathi river valley Gangotri Uttarakhand — personal photo June 2023"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                Trek & Adventure
              </span>
              <h1 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-light text-white leading-tight mt-4 mb-3">
                Gangotri & Gaumukh Glacier Trek 2026
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px]">
                The source of the Ganga — 19km through the Bhagirathi valley to the glacier snout. Real permits, costs, and what this trail looks and feels like in June.
              </p>
            </div>
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] text-white/35">
            📸 Personal photo — Gangotri valley, June 2023
          </span>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-8 pb-20">

          <AuthorByline date="April 6, 2026" readTime="13 min" />

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {[
              { icon: "🏔️", label: "Max Altitude", value: "4,255m" },
              { icon: "🥾", label: "Trek Distance", value: "19km one way" },
              { icon: "📅", label: "Best Time", value: "May – Jun, Sep – Oct" },
              { icon: "💰", label: "Budget From", value: "₹4,000/day" },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="font-serif text-lg font-light text-ink">{s.value}</p>
                <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
              The Bhagirathi valley opens up suddenly after the treeline ends — grey rock, white ice, and a sky so blue it looks edited. Standing at the glacier snout where the Ganga begins, with no other sound except water, was the most quietly powerful moment I've had in the mountains.
            </p>
            <p className="text-xs text-muted mt-3 font-light">— Surya Pratap, trekked June 2023</p>
          </blockquote>

          {/* Section: Permits */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">📋 Permits — What You Actually Need</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Gangotri to Gaumukh requires a Forest Department permit. Without it you will be turned back at the Forest Department checkpost 3km before Bhojbasa.
            </p>
            <div className="bg-white border border-parchment-2 rounded-xl p-5 space-y-3">
              {[
                ["Permit cost", "₹150/day for Indian nationals, ₹600/day for foreigners"],
                ["Where to get it", "Forest Department office at Gangotri — open 8am–2pm"],
                ["Maximum trekkers", "150 per day — book early in peak season (May–June)"],
                ["Camping permit", "Additional ₹50 for overnight at Bhojbasa"],
                ["Valid ID needed", "Aadhaar or Passport — carry original"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 text-sm">
                  <span className="font-medium text-ink w-40 flex-shrink-0">{k}</span>
                  <span className="text-muted font-light">{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Route */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">🥾 Trek Route: Gangotri → Gaumukh</h2>
            <div className="space-y-3">
              {[
                { stage: "Day 1", title: "Gangotri → Bhojbasa (14km)", desc: "Gradual ascent through birch forest then treeline. Bhojbasa GMVN camp at 3,775m. Spectacular open valley. Arrive before 4pm." },
                { stage: "Day 2", title: "Bhojbasa → Gaumukh → back to Gangotri (24km)", desc: "Early start for Gaumukh glacier snout (4,255m) — 5km from Bhojbasa. The glacier is visibly retreating year on year. Return to Gangotri the same day or stay another night at Bhojbasa." },
              ].map(s => (
                <div key={s.stage} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.65rem] bg-gold/20 text-gold-dark font-medium px-2 py-0.5 rounded-full">{s.stage}</span>
                    <span className="font-medium text-sm text-stone-900">{s.title}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Personal photo */}
          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[4/3]">
            <Image
              src="/images/surya/surya-gangotri-glacier.jpg"
              alt="Surya Pratap at Gaumukh glacier snout, June 2023"
              fill className="object-cover object-center"
              sizes="(max-width: 860px) 100vw, 860px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <p className="absolute bottom-4 left-5 text-white text-sm font-serif font-light">
              At the Gaumukh glacier snout, June 2023 — 4,255m
            </p>
            <span className="absolute bottom-2 right-3 text-[10px] text-white/40">📸 Personal photo</span>
          </div>

          {/* Section: Costs */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">💰 Real Costs (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3 font-medium text-ink text-xs">Item</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted font-light">
                  {[
                    ["Forest permit (2 days)", "₹300 (Indian)"],
                    ["Camping at Bhojbasa (GMVN)", "₹500–800/person"],
                    ["Rishikesh → Gangotri taxi", "₹3,500–5,000 (shared ₹500–800)"],
                    ["Guide (recommended)", "₹1,000–1,500/day"],
                    ["Food at Gangotri/Bhojbasa", "₹300–600/day"],
                    ["Gangotri accommodation", "₹600–1,500/night"],
                    ["Total 4-day trip", "~₹5,500 budget / ₹10,000 mid"],
                  ].map(([item, cost]) => (
                    <tr key={item} className="border-b border-parchment-2">
                      <td className="p-3 font-medium text-ink">{item}</td>
                      <td className="p-3">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">💡 Tips From Personal Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🌤️", title: "June is the sweet spot", desc: "Snow has mostly cleared, flowers are out, the valley is vivid green. Avoid July–August (monsoon, landslide risk)." },
                { icon: "🧊", title: "It's cold even in June", desc: "Bhojbasa overnight drops to 2–5°C even in June. A proper sleeping bag and down jacket are non-negotiable." },
                { icon: "🦺", title: "Hire a guide for Gaumukh", desc: "The moraine near the glacier shifts. A guide who knows the current safe path saves you from literal crevasse situations." },
                { icon: "💧", title: "Drink the river water at source", desc: "The water straight from the glacier snout at Gaumukh is clean and pure. Carry a filter just in case." },
                { icon: "📸", title: "Best light is 7–9am", desc: "The valley faces east. Morning light on the Bhagirathi peaks is extraordinary. Wake early." },
                { icon: "🏨", title: "Book GMVN Bhojbasa early", desc: "Only 40 beds at GMVN Bhojbasa. Book at gmvnl.com well in advance for peak season. Tents are an alternative." },
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
                { q: "Is Gaumukh trek difficult?", a: "Moderate. The 14km to Bhojbasa on Day 1 is long but not technically demanding. The route to Gaumukh next morning is shorter but at higher altitude. Overall easier than Kedarnath." },
                { q: "Can I do Gangotri without trekking to Gaumukh?", a: "Yes. Gangotri town and temple alone is worth the trip. The Bhagirathi gorge, the temple aarti, and the town itself are the experience. Gaumukh adds 2 more days for the serious trekker." },
                { q: "Is there mobile network at Gangotri?", a: "BSNL/MTNL works in Gangotri town. Beyond that, nothing until you're back. Download offline maps before leaving." },
                { q: "How to reach Gangotri from Delhi?", a: "Delhi → Haridwar/Rishikesh by train/bus, then Uttarkashi → Gangotri by shared jeep or taxi. Total ~14–16 hours. Break journey overnight at Rishikesh or Uttarkashi." },
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

          <AffiliateBlock destination="Gangotri" />
          <PhotoCta destination="Gangotri" />

          <div className="mt-10 pt-8 border-t border-parchment-2 flex flex-wrap gap-3">
            <Link href="/blog/char-dham-yatra-guide" className="btn-gold text-sm">Full Char Dham Guide →</Link>
            <Link href="/blog/kedarnath-trek-guide" className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all">Kedarnath Trek →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
