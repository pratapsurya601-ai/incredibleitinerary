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
  title: "Char Dham Yatra 2026: Complete Guide — Kedarnath, Badrinath, Gangotri & Yamunotri",
  description: "Complete Char Dham Yatra guide — registration, best time, route order, helicopter options, real costs, and what to expect at all four dhams. Personally visited 3 of 4.",
  alternates: { canonical: `${SITE}/blog/char-dham-yatra-guide` },
  openGraph: {
    title: "Char Dham Yatra 2026: Complete Guide",
    description: "All four dhams — real costs, registration, route order, and personal experience at Kedarnath, Badrinath and Gangotri.",
    images: [{ url: `${SITE}/images/surya/blog-kedarnath-temple.jpg`, width: 1400, height: 647 }],
  },
};

export default function CharDhamYatraPage() {
  const post = getPostBySlug("char-dham-yatra-guide");

  const dhams = [
    {
      name: "Yamunotri",
      altitude: "3,291m",
      trek: "6km from Janki Chatti",
      open: "Akshaya Tritiya (May)",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
      imageAlt: "Yamunotri temple Uttarakhand",
      desc: "Source of the Yamuna river. The first and shortest dham. A manageable 6km trek through forest and hot springs.",
      personalNote: null,
      slug: null,
    },
    {
      name: "Gangotri",
      altitude: "3,048m",
      trek: "Drive-in (no trek to temple)",
      open: "Akshaya Tritiya (May)",
      image: "/images/surya/blog-gangotri-valley.jpg",
      imageAlt: "Bhagirathi valley Gangotri personal photo",
      desc: "Source of the Ganga. The most dramatic of the four — the Bhagirathi valley is stunning. Drive-in access makes it accessible. Gaumukh glacier adds a 19km optional trek.",
      personalNote: "I trekked to Gaumukh glacier in June 2023. The valley is unforgettable.",
      slug: "gangotri-glacier-trek",
    },
    {
      name: "Kedarnath",
      altitude: "3,583m",
      trek: "16km from Gaurikund",
      open: "Akshaya Tritiya (May)",
      image: "/images/surya/blog-kedarnath-temple.jpg",
      imageAlt: "Kedarnath temple marigolds snow peaks personal photo",
      desc: "The most famous of the four. A 16km trek at high altitude to one of India's most sacred Shiva temples. The most physically demanding but most rewarding.",
      personalNote: "I trekked solo in October 2022. Starting at 4am with just a headlamp is something I'll never forget.",
      slug: "kedarnath-trek-guide",
    },
    {
      name: "Badrinath",
      altitude: "3,133m",
      trek: "Drive-in (no trek required)",
      open: "April/May",
      image: "/images/surya/blog-badrinath-night.jpg",
      imageAlt: "Badrinath temple lit at night personal photo",
      desc: "Dedicated to Vishnu. Drive-in access. Spectacular setting against the Nar-Narayan peaks. The Mana village nearby is the last Indian village before Tibet.",
      personalNote: "Visited at night in October 2022. The lit-up temple against the dark sky is one of India's great sights.",
      slug: null,
    },
  ];

  return (
    <>
      {post && <BlogPostSchema post={post} />}
      <BlogSlugNav />

      <main className="pt-[72px] bg-cream min-h-screen">

        {/* Hero */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src="/images/surya/blog-kedarnath-temple.jpg"
            alt="Kedarnath temple — one of the four Char Dhams"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                Pilgrimage & Spiritual
              </span>
              <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight mt-4 mb-3">
                Char Dham Yatra 2026: Complete Guide
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px]">
                Kedarnath · Badrinath · Gangotri · Yamunotri — all four sacred dhams. Registration, route order, costs, helicopter booking, and personal experience from 3 of the 4.
              </p>
            </div>
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] text-white/35">
            📸 Kedarnath temple, Oct 2022 — personal photo
          </span>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-8 pb-20">

          <AuthorByline date="April 6, 2026" readTime="16 min" />

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {[
              { icon: "🛕", label: "Sacred Sites", value: "4 Dhams" },
              { icon: "📅", label: "Duration", value: "10–14 Days" },
              { icon: "🗓️", label: "Season", value: "May – Nov" },
              { icon: "💰", label: "Budget From", value: "₹18,000" },
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
              I've visited three of the four dhams personally — Kedarnath on a solo trek in October 2022, Badrinath the same trip, and Gangotri with the Gaumukh glacier trek in June 2023. This guide is built from those experiences, not from aggregating other blogs.
            </p>
            <p className="text-xs text-muted mt-3 font-light">— Surya Pratap</p>
          </blockquote>

          {/* Registration section */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">📋 Char Dham Registration — Do This First</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Mandatory registration for all four dhams at <strong className="text-ink">registrationandtouristcare.uk.gov.in</strong>. Free, takes 5 minutes. You will be checked at multiple points — don't skip this.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm font-medium text-amber-800 mb-3">⚠️ What you need:</p>
              <ul className="space-y-2 text-xs text-amber-700 font-light">
                <li>• Valid photo ID (Aadhaar/Passport)</li>
                <li>• Your photo</li>
                <li>• Medical certificate if above 50 years (mandatory)</li>
                <li>• Daily slots are capped — register well in advance for May–June</li>
                <li>• Print the registration or save PDF offline on your phone</li>
              </ul>
            </div>
          </section>

          {/* Correct route order */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-2">🗺️ The Correct Route Order</h2>
            <p className="text-sm text-muted font-light mb-5">
              The traditional order — and the most efficient logistically — is <strong className="text-ink">Yamunotri → Gangotri → Kedarnath → Badrinath</strong> (west to east). This minimises backtracking and follows the pilgrimage tradition.
            </p>
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {["Haridwar/Rishikesh", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Rishikesh"].map((place, i, arr) => (
                <div key={place} className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${i === 0 || i === arr.length - 1 ? 'bg-parchment-2 text-muted' : 'bg-gold/20 text-gold-dark'}`}>{place}</span>
                  {i < arr.length - 1 && <span className="text-muted text-sm">→</span>}
                </div>
              ))}
            </div>
          </section>

          {/* The four dhams */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-6">🛕 The Four Dhams</h2>
            <div className="space-y-8">
              {dhams.map((dham, i) => (
                <div key={dham.name} className="bg-white rounded-2xl border border-parchment-2 overflow-hidden">
                  <div className="relative h-52">
                    <Image
                      src={dham.image}
                      alt={dham.imageAlt}
                      fill className="object-cover"
                      sizes="860px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <span className="font-serif text-2xl font-light text-white">{dham.name}</span>
                      {dham.personalNote && (
                        <span className="text-[10px] bg-gold text-ink font-medium px-2 py-0.5 rounded-full">📸 Personal photo</span>
                      )}
                    </div>
                    <span className="absolute top-4 right-4 text-[10px] text-white/60 bg-black/30 px-2 py-0.5 rounded-full">
                      {i + 1} of 4
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-xs bg-parchment px-3 py-1 rounded-full text-muted">⛰️ {dham.altitude}</span>
                      <span className="text-xs bg-parchment px-3 py-1 rounded-full text-muted">🥾 {dham.trek}</span>
                      <span className="text-xs bg-parchment px-3 py-1 rounded-full text-muted">📅 Opens {dham.open}</span>
                    </div>
                    <p className="text-sm text-muted font-light leading-relaxed mb-3">{dham.desc}</p>
                    {dham.personalNote && (
                      <p className="text-xs text-gold-dark font-medium italic border-l-2 border-gold pl-3">
                        Personal note: {dham.personalNote}
                      </p>
                    )}
                    {dham.slug && (
                      <Link href={`/blog/${dham.slug}`} className="inline-flex items-center gap-1 text-xs text-gold-dark font-medium mt-3 hover:underline">
                        Full {dham.name} guide →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sample itinerary */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-5">📅 12-Day Itinerary</h2>
            <div className="space-y-2">
              {[
                { day: "Day 1–2", title: "Haridwar / Rishikesh", desc: "Arrive, acclimatise, Ganga aarti at Har Ki Pauri. Essential base." },
                { day: "Day 3", title: "Drive to Janki Chatti", desc: "8–9 hour drive. Overnight at Janki Chatti." },
                { day: "Day 4", title: "Yamunotri", desc: "Trek 6km each way. Visit temple. Return to Janki Chatti / Uttarkashi." },
                { day: "Day 5", title: "Drive to Gangotri", desc: "3–4 hour drive from Uttarkashi. Visit Gangotri temple. Evening aarti." },
                { day: "Day 6", title: "Gangotri → Bhojbasa", desc: "14km trek to Bhojbasa camp. Early start recommended." },
                { day: "Day 7", title: "Gaumukh → Gangotri → Drive to Guptkashi", desc: "Glacier snout visit, return to Gangotri, long drive to Guptkashi." },
                { day: "Day 8", title: "Gaurikund → Kedarnath trek", desc: "Start at 4am. 16km trek. Overnight at Kedarnath." },
                { day: "Day 9", title: "Kedarnath → Gaurikund → drive to Badrinath", desc: "Early morning darshan, descend, drive to Badrinath (~5 hrs)." },
                { day: "Day 10", title: "Badrinath", desc: "Morning darshan, Mana village, Vasudhara falls. Afternoon at leisure." },
                { day: "Day 11–12", title: "Drive back to Rishikesh / Delhi", desc: "Long drive back. Break at Devprayag if time permits." },
              ].map(s => (
                <div key={s.day} className="flex gap-4 bg-white border border-parchment-2 rounded-xl p-4">
                  <span className="text-xs bg-gold/20 text-gold-dark font-medium px-2 py-1 rounded-full whitespace-nowrap h-fit">{s.day}</span>
                  <div>
                    <p className="text-sm font-medium text-ink">{s.title}</p>
                    <p className="text-xs text-muted font-light mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Badrinath personal photo */}
          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/7]">
            <Image
              src="/images/surya/blog-badrinath-night.jpg"
              alt="Badrinath temple lit up at night — personal photo Oct 2022"
              fill className="object-cover"
              sizes="(max-width: 860px) 100vw, 860px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <p className="absolute bottom-4 left-5 text-white text-sm font-serif font-light">
              Badrinath temple at night — Oct 2022
            </p>
            <span className="absolute bottom-2 right-3 text-[10px] text-white/40">📸 Personal photo</span>
          </div>

          {/* Costs */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-4">💰 Total Char Dham Costs (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3 font-medium text-ink text-xs">Category</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Budget (12 days)</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted font-light">
                  {[
                    ["Transport (all)", "₹5,000–7,000", "₹15,000–22,000 (private cab)"],
                    ["Accommodation (11 nights)", "₹5,500–8,000", "₹14,000–22,000"],
                    ["Food", "₹3,500–5,000", "₹7,000–10,000"],
                    ["Permits/fees", "₹600–800", "₹600–800"],
                    ["Kedarnath helicopter (optional)", "—", "₹8,000–18,000 return"],
                    ["Guide (optional, recommended)", "₹2,000–3,000", "₹4,000–6,000"],
                    ["Total estimate", "~₹18,000–25,000", "~₹40,000–65,000"],
                  ].map(([cat, budget, comfort]) => (
                    <tr key={cat} className="border-b border-parchment-2">
                      <td className="p-3 font-medium text-ink">{cat}</td>
                      <td className="p-3">{budget}</td>
                      <td className="p-3">{comfort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-serif text-[1.8rem] font-light text-ink mb-5">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time for Char Dham Yatra?", a: "May–June for clear weather and post-opening crowds. September–October for thinner crowds, colder weather but crystal visibility. Avoid July–August (monsoon, landslides)." },
                { q: "Can I do all four dhams in 7 days?", a: "Technically possible but not recommended — rushed darshans, exhausted trekking, high altitude risks. 10–12 days is the minimum for a comfortable trip." },
                { q: "Is Char Dham yatra possible for senior citizens?", a: "Yes. Yamunotri, Gangotri and Badrinath have helicopter/pony options. Kedarnath also has helicopter and palki (doli) carriers. Many seniors complete all four dhams every year." },
                { q: "Is it safe in October?", a: "October is excellent — post-monsoon clarity, fewer crowds, cool but not yet freezing. The dhams close in October/November so time your trip before closing dates (announced annually)." },
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

          <AffiliateBlock destination="Char Dham Uttarakhand" />
          <PhotoCta destination="Char Dham" />

          <div className="mt-10 pt-8 border-t border-parchment-2 flex flex-wrap gap-3">
            <Link href="/blog/kedarnath-trek-guide" className="btn-gold text-sm">Kedarnath Full Guide →</Link>
            <Link href="/blog/gangotri-glacier-trek" className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all">Gangotri Trek Guide →</Link>
            <Link href="/blog/rishikesh-haridwar-3-days" className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all">Rishikesh Base Guide →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
