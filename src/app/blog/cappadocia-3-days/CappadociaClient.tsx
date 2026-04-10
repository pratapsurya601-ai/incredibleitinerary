"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const CAPPADOCIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Cappadocia Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
];

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
function ShareBar() {
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Cappadocia 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Cappadocia in 3 Days — hot air balloons, fairy chimneys and underground cities&url=${pageUrl}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/cappadocia-3-days"
        imageUrl="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=80"
        description="Cappadocia in 3 Days: hot air balloon booking guide, cave hotels in Göreme, Derinkuyu underground city, and real Turkish Lira costs."
      />
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function CappadociaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CAPPADOCIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cappadocia hot air balloons fairy chimneys turkey sunrise dawn"
            fallback="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1600&q=80"
            alt="Cappadocia hot air balloons rising over fairy chimney rock formations at dawn Turkey"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Cappadocia 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cappadocia in 3 Days:
                <em className="italic text-amber-300"> Balloons, Caves &amp; Fairy Chimneys</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                200 hot air balloons at dawn, cave hotels carved into volcanic rock, underground cities 8 floors deep, and a lunar landscape that doesn&apos;t look real. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇹🇷 Cappadocia, Turkey</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₺400/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A dawn balloon flight over 200 floating hot air balloons is the most surreal experience in travel — the entire valley turns rose-gold as baskets rise silently between the fairy chimneys. Add cave hotels carved into volcanic rock, underground cities 8 floors deep built by early Christians, and a lunar landscape that makes you question what planet you&apos;re on.
            </p>
          </blockquote>

          {/* ── WHAT CAPPADOCIA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cappadocia Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Cappadocia is not a single city — it&apos;s a region in central Turkey defined by one of the strangest landscapes on earth. Millions of years ago, volcanic eruptions from Mount Erciyes and Hasan buried the plateau in thick ash that hardened into a soft rock called tufa. Wind and water then carved this into the fairy chimney formations you see today — conical spires, mushroom-shaped pillars, and honeycombed cliffs that early Christians and Byzantine communities carved into homes, churches, and entire underground cities.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Göreme Open Air Museum, now a UNESCO World Heritage Site, contains rock-cut churches decorated with frescoes dating from the 10th to 12th centuries. Derinkuyu Underground City descends 8 floors below ground — a city of tunnels and chambers that sheltered up to 20,000 people from Arab raids in the Byzantine era. The volcanic geography also means Cappadocia produces excellent wine from indigenous grapes, and the mineral-rich soil gives the landscape its deep ochre and russet tones that photograph so dramatically at sunrise.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The hot air balloon industry launched here in 1991 and has grown into one of the world&apos;s most concentrated balloon operations. On a good morning you can see 100 to 200 balloons in the air simultaneously over the Göreme valley — a spectacle that exists nowhere else on the planet. Booking this flight is the single most important logistical step of any Cappadocia trip.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="NAV / KYA" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Nov" />
              <StatCard icon="🎈" label="Balloon Operators" value="30+ active" />
              <StatCard icon="💰" label="Budget From" value="₺400/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cappadocia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Peak Season",
                  d: "15–24°C, wildflowers covering the valleys, excellent balloon flying conditions. April and May are the ideal months — long days, comfortable temperatures for hiking Rose Valley and Ihlara, and the landscape is still green. Book balloons and cave hotels well in advance; this is the busiest window.",
                  b: "Best overall",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Hot and Busy",
                  d: "28–35°C. Peak tourist crowds, highest hotel prices, and the heat makes afternoon hiking uncomfortable. Balloon flights still operate reliably. If you travel in summer, start all outdoor activities before 9am and rest between noon and 4pm. The valleys feel significantly hotter than the air temperature.",
                  b: "Manageable with care",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Second Best Window",
                  d: "10–22°C, golden light, harvest season, and excellent balloon conditions. September and October are almost as good as spring — comfortable temperatures, fewer crowds than July–August, and the low afternoon sun turns the fairy chimneys a deep copper. November gets cold fast; bring a warm layer for early morning balloon launches.",
                  b: "Highly recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "❄️",
                  t: "Winter — Cold but Magical",
                  d: "−2–8°C. Snow-dusted fairy chimneys and balloon silhouettes against a winter sky are breathtaking. But balloon flights cancel more frequently in winter (wind and snow), cave hotels are cold at night, and some restaurants and tour operators close. Dress in layers and have a backup plan if your balloon is cancelled.",
                  b: "For adventurous travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cappadocia</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cappadocia has two airports — <strong className="font-medium">Nevşehir Kapadokya (NAV)</strong>, 40km from Göreme, and <strong className="font-medium">Kayseri Erkilet (ASR)</strong>, 75km away. Kayseri often has cheaper flights. Both airports have shuttle buses (servis) directly to Göreme for ₺80–₺150 per person.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly from Istanbul (recommended)",
                  d: "Istanbul (IST or SAW) → Nevşehir (NAV) or Kayseri (ASR): 1 hour, ₺400–₺800 one way on Pegasus, AnadoluJet, or Turkish Airlines. Check both airports — Kayseri is often ₺100–₺200 cheaper. Airport shuttles to Göreme run every few hours and cost ₺80–₺150. Total door-to-door: 3 hours.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Overnight Bus from Istanbul",
                  d: "Istanbul → Göreme direct overnight bus: 10–12 hours, ₺500–₺700. Metro Turizm and Göreme Seyahat run comfortable coaches with reclining seats. Departs around 9–10pm, arrives early morning in time for a balloon launch day. A genuinely viable option for budget travellers who want to save on a night&apos;s accommodation.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From India (direct or via Istanbul)",
                  d: "No direct India–Cappadocia flights. Best route: fly to Istanbul (IndiGo/Air India codeshare or Turkish Airlines from Delhi/Mumbai, 7–8 hrs), then connect to Nevşehir or Kayseri (1 hr). Total journey: 10–12 hours. Turkish Airlines has the best connection times at Istanbul Airport. E-Visa required for Indian passport holders — $60 at evisa.gov.tr.",
                  b: "Indian travellers",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Ankara or Konya",
                  d: "Ankara → Göreme: 280km, 3.5 hours via D300. Konya → Göreme: 240km, 3 hours. Renting a car in Cappadocia itself (₺800–₺1,200/day) is excellent value — Love Valley, Devrent, Derinkuyu and Ihlara are all easy drives and touring independently is far better than group tours.",
                  b: "Flexible",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Cappadocia Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The balloon flight is placed on Day 3 so you can experience the landscape first and fully appreciate the aerial view. If your balloon cancels, you still have backup days in the trip.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Göreme Open Air Museum · Rose Valley Hike · Sunset Viewpoint"
                cost="₺600–₺900 (~$20–$30)"
                items={[
                  "Arrive in Göreme and check in to your cave hotel. Even budget options (₺300–₺500/night for a private cave room) give you the volcanic tufa walls and the feeling of sleeping inside the landscape. Drop your bags and walk the village immediately — Göreme is small enough to cover on foot.",
                  "10:00am — Göreme Open Air Museum (₺400, ~$13): a UNESCO-listed cluster of rock-cut churches, monasteries and refectories carved into the valley walls between the 10th and 12th centuries. The Dark Church (Karanlık Kilise) has the best-preserved Byzantine frescoes in Turkey — deep blues and reds depicting the life of Christ. Arrive at opening to beat tour groups.",
                  "1:00pm — Lunch at a Göreme restaurant. Try gözleme (stuffed flatbread with spinach, potato or cheese) from a street stall for ₺80–₺100, or a full sit-down lunch for ₺150–₺200. The village has dozens of options along the main street.",
                  "3:00pm — Rose Valley hike (free, 2–3 hrs): the most beautiful walk in Cappadocia. The trail winds between fairy chimneys, abandoned cave churches with faded frescoes, pigeon houses carved into cliff faces, and orchards of apricot and apple. Start from the Cavusin end for the best light. The valley turns deep crimson and rose as the sun drops — this is not hyperbole.",
                  "Sunset from the Rose Valley viewpoint or the Uçhisar Castle hill (₺120, ~$4). The entire landscape — hundreds of fairy chimneys, the Göreme valley, the distant volcanic peak of Erciyes — turns orange and gold. The best free photography in Turkey.",
                  "8:00pm — Dinner in Göreme: testi kebabı (meat and vegetables slow-cooked in a sealed clay pot, broken at the table) for ₺200–₺300, ~$7–$10. Order this at least once — it&apos;s the signature dish of the region.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Derinkuyu Underground City · Love Valley Hike · Uçhisar Castle · Avanos Pottery"
                cost="₺800–₺1,200 (~$27–$40)"
                items={[
                  "9:00am — Derinkuyu Underground City (₺500, ~$17): the most extraordinary archaeological site in Cappadocia. This underground city descends 8 floors below the surface — tunnels, ventilation shafts, wine cellars, stables, churches, a school, and living quarters for an estimated 20,000 people. Built during the Byzantine era as protection from Arab raids. The tunnels are tight — not suitable for claustrophobia — but the scale of human engineering is genuinely staggering. Budget 1.5 hours.",
                  "10:30am — En route back north, stop at Kaymakli Underground City (₺500) — slightly smaller but less crowded than Derinkuyu, and the two together on the same day gives you a complete picture. Choose one if time is tight; most guides say Derinkuyu is the more impressive of the two.",
                  "1:00pm — Lunch at Belisırma village (if you extend south to Ihlara Valley) or back in Göreme at any of the cave restaurants. Budget ₺150–₺200.",
                  "3:00pm — Love Valley hike (free): the valley of phallic-shaped fairy chimneys that every travel photographer has visited but nobody describes accurately. The formations here are 20–30 metres tall and completely unlike anything in Rose Valley. The 2km walking trail from the Göreme end takes about 45 minutes one way. ATV rentals (₺400/hr) are available at the trailhead if you want to cover more ground.",
                  "5:00pm — Uçhisar Castle (₺120, ~$4): the highest point in Cappadocia, a natural tufa rock formation riddled with cave rooms that served as a defensive fortress. The panoramic view from the summit — Rose Valley to the east, Göreme to the south, the volcanic peaks to the north — is the best landscape overview in the region. Arrive for golden hour.",
                  "After sunset: Avanos (15 minutes north of Göreme) for pottery watching. Avanos is the pottery capital of Turkey — craftspeople here have been using Red River clay and traditional wheel-throwing techniques for 4,000 years. Watching a master potter is free; a lesson costs ₺200–₺400. Browse the workshops along the main street and buy directly from the craftspeople, not the tourist shops.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hot Air Balloon at Sunrise · Devrent Valley · Paşabağ Fairy Chimneys"
                cost="₺3,500–₺5,500 balloon day (~$115–$180)"
                items={[
                  "4:30am — Balloon company pickup from your hotel lobby. Every balloon company collects guests from Göreme in minibuses and drives to the launch site. You&apos;ll be offered hot tea and light breakfast while the balloon is inflated. Budget operators charge ₺3,000–₺4,000 (~$100–$130); premium operators (Royal Balloon, Butterfly Balloons, Göreme Balloons) charge ₺5,000–₺7,000 (~$165–$230). All include hotel pickup, 1-hour flight, champagne toast on landing, and a flight certificate.",
                  "5:30am — Launch. The moment the burner fires and the basket lifts off the field is genuinely unlike anything else in travel. At peak height you can see 100 to 200 other balloons simultaneously over the Göreme valley — drifting silently between fairy chimneys as the landscape below turns gold. The pilot can descend into the valleys between the rock formations and rise again above the plateau. One hour passes in about ten minutes.",
                  "7:30am — Return to hotel for breakfast. Cave hotel breakfasts (included at most mid-range properties) are generous: Turkish cheeses, olives, cucumber, tomato, eggs, and börek (flaky pastry). After 4:30am, this will feel like the best meal you have ever eaten.",
                  "10:00am — Devrent Valley (Imagination Valley, free): a plateau of naturally eroded fairy chimneys in animal shapes — a camel, a snake, a seal — that tour guides have been naming for tourists for decades. It&apos;s genuinely odd and photogenic. Combine with Paşabağ (Monks Valley, free): a cluster of triple-capped fairy chimneys that are the most photographed formations in Cappadocia and where the hermit monk Simeon carved a chapel into the top of one chimney in the 5th century.",
                  "1:00pm — Late lunch back in Göreme or Avanos. Pide (Turkish flatbread pizza) is the local lunch staple — ₺80–₺150 depending on toppings. Kavurma (slow-cooked lamb) with rice is the other regional dish worth trying.",
                  "Afternoon: Pack, check out. Shuttle bus or transfer to Nevşehir or Kayseri airport for your onward flight. If you have time before departure, a final wander through the Göreme village streets — past the cave churches, the pigeon houses, and the fairy chimneys — is the right way to end.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cappadocia" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Cappadocia Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 — most landmarks require a separate ticket.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Göreme Open Air Museum",
                  e: "₺400 (~$13)",
                  d: "UNESCO World Heritage cluster of rock-cut churches and monasteries with 10th–12th century Byzantine frescoes. The Dark Church (Karanlık Kilise) has the best-preserved paintings. Arrive at 9am opening to beat tour groups. Budget 1.5–2 hours.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Derinkuyu Underground City",
                  e: "₺500 (~$17)",
                  d: "An 8-floor underground city descending 55 metres below the surface. Tunnels, stables, wine cellars, churches, schools and living quarters for 20,000 people. Built during the Byzantine era. The engineering is remarkable — ventilation shafts still function after 1,500 years. Not suitable for severe claustrophobia.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Hot Air Balloon Flight",
                  e: "₺3,000–₺7,000 (~$100–$230)",
                  d: "The defining Cappadocia experience. Budget operators deliver the same landscape as premium ones; premium operators offer smaller basket sizes (4–8 people vs 16–24) and more experienced pilots. Book 4–6 weeks ahead for peak season. Flights cancel in wind — have a backup morning.",
                  t: "Unmissable · 1 hr flight",
                },
                {
                  n: "Rose Valley (Güllüdere Vadisi)",
                  e: "Free",
                  d: "The most beautiful hike in Cappadocia — 2–3 hours through fairy chimneys, abandoned cave churches with faded frescoes, and pigeon houses. Start from Cavusin end for the best light. The valley turns deep crimson at sunset. One of the finest free walks in Turkey.",
                  t: "Must do · 2–3 hrs",
                },
                {
                  n: "Uçhisar Castle",
                  e: "₺120 (~$4)",
                  d: "The highest point in Cappadocia — a natural tufa rock riddled with cave rooms that served as a fortress. The panoramic view from the top encompasses the entire Göreme valley, Rose Valley, and the volcanic peaks. Best at golden hour. 15 minutes from Göreme.",
                  t: "Sunset · 45 mins",
                },
                {
                  n: "Paşabağ (Monks Valley)",
                  e: "Free",
                  d: "The most-photographed fairy chimneys in Cappadocia — triple-capped formations where the 5th-century monk Simeon carved a chapel into the top of one chimney. Combine with Devrent Valley (Imagination Valley) 5 minutes north for the eroded animal-shaped formations.",
                  t: "Underrated · 45 mins",
                },
                {
                  n: "Avanos Pottery Village",
                  e: "Free to browse",
                  d: "4,000-year-old pottery tradition using Red River clay. Watch masters on the wheel in the workshops along the main street. A lesson costs ₺200–₺400. Buy directly from the craftspeople. The pottery here — bowls, vases, traditional iznik-style pieces — makes excellent gifts that won&apos;t break in a padded bag.",
                  t: "Cultural stop · 1 hr",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Cappadocia — Balloons, Fairy Chimneys &amp; Cave Hotels"
            subtitle="The volcanic landscape of central Turkey at its most surreal."
            spots={[
              {
                name: "Hot Air Balloons at Sunrise",
                query: "cappadocia hot air balloons sunrise fairy chimneys turkey dawn",
                desc: "Up to 200 balloons rising simultaneously over the Göreme valley at dawn — the most photographed morning in Turkey.",
              },
              {
                name: "Göreme Open Air Museum",
                query: "goreme open air museum cappadocia rock churches byzantine frescoes turkey",
                desc: "Rock-cut churches with 10th–12th century Byzantine frescoes carved into the volcanic tufa cliffs.",
              },
              {
                name: "Rose Valley Fairy Chimneys",
                query: "rose valley cappadocia fairy chimneys sunset turkey hiking",
                desc: "Rose Valley at sunset — the volcanic rock turns deep crimson as the sun drops below the plateau.",
              },
              {
                name: "Cave Hotel Interior Göreme",
                query: "cave hotel interior goreme cappadocia turkey volcanic rock suite",
                desc: "Cave hotels carved into the volcanic tufa — some of the world&apos;s most unique accommodation.",
              },
              {
                name: "Derinkuyu Underground Tunnels",
                query: "derinkuyu underground city cappadocia turkey tunnels cave ancient",
                desc: "The 8-floor underground city of Derinkuyu — Byzantine tunnels designed to shelter 20,000 people.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The balloon flight is the biggest single cost in any Cappadocia trip — budget ₺3,000–₺7,000 (~$100–$230) for that one experience. Everything else is very reasonable by European standards.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (₺ / $)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (₺ / $)</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury (₺ / $)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "₺300–500 (~$10–17)", "₺1,500–2,500 (~$50–83)", "₺5,000–12,000 (~$165–400)"],
                    ["🍽️ Food (per day)", "₺150–250 (~$5–8)", "₺400–800 (~$13–27)", "₺1,000–3,000 (~$33–100)"],
                    ["🎈 Balloon flight (once)", "₺3,000–4,000 (~$100–130)", "₺5,000–7,000 (~$165–230)", "₺7,000–10,000 (~$230–330)"],
                    ["🚗 Local transport/ATV", "₺100–200 (~$3–7)", "₺300–600 (~$10–20)", "₺500–2,000 (~$17–67)"],
                    ["🏛️ Entry fees (3 days)", "₺900–1,200 (~$30–40)", "₺900–1,200 (~$30–40)", "₺900–1,200 (~$30–40)"],
                    ["TOTAL (3 days, per person)", "₺5,500–7,000 (~$183–233)", "₺10,000–16,000 (~$333–533)", "₺20,000–40,000 (~$667–1,333)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₺400–700/day, ~$13–23)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Cave hostel or private cave room in Göreme, gözleme and street food, free hikes, ATV rental. The balloon flight is the only big expense — save elsewhere and splurge on the balloon.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (₺1,500–3,000/day, ~$50–100)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Cave suite hotel with terrace view, sit-down dinners including testi kebabı, premium balloon operator, private transport to Derinkuyu and Ihlara. This is the sweet spot for Cappadocia.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (₺5,000+/day, ~$165+)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Museum Hotel or Argos in Cappadocia, private sunrise balloon with champagne breakfast on the landing field, private archaeologist guide, helicopter tour of the valleys.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cappadocia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Göreme is the best base for most travellers — walkable, central, with the most balloon companies and cave hotels at every price point. Ürgüp is larger with better restaurants. Uçhisar is quieter and more scenic. Stay in Göreme for your first visit.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Museum Hotel",
                  type: "Luxury cave hotel · Uçhisar",
                  price: "From ₺8,000/night (~$267)",
                  badge: "Most acclaimed",
                  desc: "The most awarded hotel in Turkey — carved into the cliffs of Uçhisar with panoramic valley views from every terrace. Antique-furnished cave suites, an exceptional restaurant (Lil&apos;a), and a wine cave with 30,000 bottles. If budget allows one luxury splurge in Cappadocia, this is it.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Argos in Cappadocia",
                  type: "Boutique cave hotel · Uçhisar",
                  price: "From ₺6,000/night (~$200)",
                  badge: "Best atmosphere",
                  desc: "A labyrinthine complex of cave rooms built into a Seljuk-era citadel in Uçhisar. Atmospheric corridors, a winery, infinity pool overlooking the valleys, and one of Cappadocia&apos;s best restaurants. More intimate than Museum Hotel and slightly more affordable.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Kelebek Special Cave Hotel",
                  type: "Mid-range cave hotel · Göreme",
                  price: "From ₺1,500/night (~$50)",
                  badge: "Best mid-range",
                  desc: "The most consistently recommended mid-range cave hotel in Göreme. Cave rooms and fairy chimney suites with valley views, excellent breakfast terrace, helpful staff for balloon bookings. Central location. The sweet spot between authentic cave experience and reliable comfort.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Budget Cave Guesthouses · Göreme",
                  type: "Budget · Various operators",
                  price: "₺300–₺600/night (~$10–$20)",
                  badge: "Best budget",
                  desc: "Several small family-run guesthouses in Göreme offer private cave rooms for ₺300–₺600. The volcanic tufa walls make even budget rooms distinctive. Look for places along the main Göreme streets — Sultan Cave Suites and Traveller&apos;s Cave Pension are reliably clean and well-reviewed.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cappadocia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cappadocian food is hearty central Anatolian cuisine — clay pot dishes, flatbreads, lamb, and excellent local wine. Testi kebabı (clay pot kebab broken at the table) is the regional signature and worth ordering at least once.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Topdeck Cave Restaurant",
                  t: "Cave dining · Göreme village",
                  d: "Set into the cliff face above Göreme with panoramic valley views from the terrace. The testi kebabı here is the standard by which others are judged — slow-cooked in a sealed clay pot, brought to the table dramatically and broken open in front of you. ₺250–₺400/person. Booking recommended in peak season.",
                  b: "Best testi kebabı",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dibek Restaurant",
                  t: "Ottoman cave · Göreme",
                  d: "One of the oldest restaurants in Göreme — a restored Ottoman cave house with stone walls, copper vessels and candlelight. The menu features traditional Cappadocian dishes including tarhana soup, mantı (Turkish dumplings) and baked güveç (clay pot stew). ₺200–₺350/person. Atmospheric without being tourist-trap expensive.",
                  b: "Most atmospheric",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Gözlemeci Street Stalls",
                  t: "Street food · Göreme main street",
                  d: "The best budget meal in Cappadocia. Local women make gözleme (thin flatbread folded around spinach, potato, cheese or minced meat on a griddle) for ₺60–₺100. Fresh, filling, and genuinely local. The stalls near the Göreme bus station and along the main street are the most reliable. This is what local people eat for lunch.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Local Pide Houses · Ürgüp",
                  t: "Casual restaurant · Ürgüp town",
                  d: "Ürgüp has better everyday restaurants than Göreme. Look for pide salonu (flatbread restaurants) in the back streets near the main square — pide with kavurma (cured lamb), beyaz peynir (white cheese) or eggs costs ₺80–₺150. These are where local workers eat lunch. No frills, excellent food, no tourist pricing.",
                  b: "Authentic local",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Cappadocia Turkey"
            hotels={[
              {
                name: "Museum Hotel Uçhisar",
                type: "Luxury cave hotel · Panoramic valley views",
                price: "From ₺8,000/night (~$267)",
                rating: "5",
                badge: "Most acclaimed",
                url: "https://www.booking.com/hotel/tr/museum-uchisar.html?aid=2820480",
              },
              {
                name: "Argos in Cappadocia",
                type: "Boutique cave hotel · Uçhisar",
                price: "From ₺6,000/night (~$200)",
                rating: "5",
                badge: "Best atmosphere",
                url: "https://www.booking.com/hotel/tr/argos-in-cappadocia.html?aid=2820480",
              },
              {
                name: "Kelebek Special Cave Hotel",
                type: "Mid-range cave hotel · Göreme",
                price: "From ₺1,500/night (~$50)",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/tr/kelebek-special-cave.html?aid=2820480",
              },
              {
                name: "Sultan Cave Suites",
                type: "Cave suites · Central Göreme",
                price: "From ₺900/night (~$30)",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/tr/sultan-cave-suites.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hot Air Balloon Flight Cappadocia",
                duration: "1 hr flight + transfer",
                price: "From ₺3,000/person (~$100)",
                badge: "Unmissable",
                url: "https://www.getyourguide.com/s/?q=cappadocia+hot+air+balloon&partner_id=PSZA5UI",
              },
              {
                name: "Cappadocia Full Day Tour",
                duration: "8–10 hrs",
                price: "From ₺800/person (~$27)",
                badge: "Best overview",
                url: "https://www.getyourguide.com/s/?q=cappadocia+full+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Derinkuyu Underground City Tour",
                duration: "3–4 hrs",
                price: "From ₺500/person (~$17)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=derinkuyu+underground+city&partner_id=PSZA5UI",
              },
              {
                name: "ATV Safari Cappadocia Valleys",
                duration: "2–3 hrs",
                price: "From ₺400/person (~$13)",
                url: "https://www.getyourguide.com/s/?q=cappadocia+atv+safari&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Cappadocia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎈",
                  title: "Not Booking the Balloon Far Enough Ahead",
                  desc: "Balloon flights sell out 4–6 weeks ahead in peak season (April–June, September–November). Book the moment you fix your travel dates via the company website directly — tour agencies add a 15–20% markup. Flights cancel for wind — book on your first available morning so you have backup days if it&apos;s cancelled.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚌",
                  title: "Booking Group Tour Buses for Everything",
                  desc: "Group tours rush you through Derinkuyu and Ihlara Valley in 20-minute stops. Renting a car (₺800–₺1,200/day) or an ATV (₺400/hr) lets you linger in the valleys, stop at unnamed viewpoints, and visit the less-crowded sites. The Cappadocia region is small enough to navigate confidently without a guide.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "☔",
                  title: "Not Getting Travel Insurance for the Balloon",
                  desc: "Balloon companies cancel flights roughly 20% of the time year-round due to wind — more in winter and spring. If your balloon cancels and you have no flexibility in your itinerary, you may lose the experience entirely. Buy travel insurance that covers activity cancellations and build an extra day into your trip if balloon flying is a priority.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📸",
                  title: "Going to the Balloon Viewpoint Instead of Riding",
                  desc: "The Göreme balloon viewpoint is popular and free. But watching from the ground is completely different from floating above 200 other balloons, looking down into the valleys in silence. Do both if budget allows. The viewpoint gives you the iconic photo; the balloon gives you the experience.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🌡️",
                  title: "Visiting in Peak July–August Heat",
                  desc: "Cappadocia in July hits 32–35°C. Hiking Rose Valley and Love Valley in that heat is exhausting and the sites are at maximum tourist capacity. April–June and September–November are significantly more comfortable — wildflowers in spring, golden light in autumn, and up to 30% lower hotel prices than August.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏨",
                  title: "Staying Outside Göreme on Your First Visit",
                  desc: "Ürgüp and Uçhisar are lovely but they require transport for everything. Göreme puts you 5 minutes from the Open Air Museum, walking distance from balloon launch points, and in the middle of the best restaurant and nightlife strip. Stay in Göreme for at least 2 of your 3 nights.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cappadocia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "The 4:30am Wakeup is Worth It",
                  desc: "Balloon flights launch at 5:30–6:00am to catch the thermal winds. The pickup comes at 4:30am. Every traveller who complains about the early start says the same thing afterwards: &apos;I&apos;d do it again in a second.&apos; The morning light over the fairy chimneys is the entire point.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦅",
                  title: "Hike Rose Valley at 5pm",
                  desc: "Rose Valley turns a deep crimson at sunset as the volcanic rock catches the low light. Start the hike at 5pm (2–3 hours to complete) and you&apos;ll finish just as it&apos;s getting dark. Bring a headlamp for the last stretch — the valley path is clear but unlit.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍷",
                  title: "Cappadocia Wine is Genuinely Good",
                  desc: "The volcanic soil of Cappadocia produces excellent wine from indigenous grapes — Öküzgözü and Boğazkere for reds, Emir for whites. Kocabağ and Turasan wineries near Ürgüp offer free or cheap tastings. A bottle costs ₺150–₺300 (~$5–$10). Better value than most European wine regions.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏺",
                  title: "Buy Pottery Directly from the Potter",
                  desc: "The pottery workshops in Avanos let you watch wheel throwing using the Red River clay technique — unchanged for 4,000 years. Buy directly from the craftspeople working in their workshops, not the tourist shops on the main street. Negotiate politely and you&apos;ll pay 30–50% less.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🔦",
                  title: "Bring a Torch for Underground Cities",
                  desc: "Derinkuyu and Kaymakli have basic lighting but the tunnels get genuinely dark in the lower levels. A small pocket torch or phone torch helps considerably. Wear non-slip shoes — the stone steps are worn smooth and can be slippery. The underground temperature stays around 13°C year-round — bring a layer.",
                  color: "bg-stone-50 border-stone-200",
                },
                {
                  icon: "🗺️",
                  title: "Rent a Car for Derinkuyu and Ihlara",
                  desc: "The southern sites — Derinkuyu Underground City, Ihlara Valley, and Selime Monastery — are 40–60km from Göreme. A rental car (₺800–₺1,200/day) lets you combine all three in one day at your own pace. Group tours rush through them. The Ihlara Valley canyon walk alone is worth the drive.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cappadocia" />

          {/* Combine With */}
          <CombineWith currentSlug="cappadocia-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How much does a Cappadocia balloon flight cost?",
                  a: "Budget operators charge ₺3,000–₺4,000 per person (~$100–$130). Mid-range operators (Royal Balloon, Butterfly Balloons, Göreme Balloons) cost ₺5,000–₺7,000 (~$165–$230). All include hotel pickup, champagne on landing, and a flight certificate. Book directly via the company website — tour agencies add a 15–20% markup. Premium operators offer smaller basket sizes (4–8 people vs 16–24) which makes a meaningful difference to the experience.",
                },
                {
                  q: "What if my balloon flight is cancelled?",
                  a: "Balloon companies cancel flights when winds exceed safe limits — this happens roughly 20% of days year-round, more in winter and during spring storms. Most companies reschedule you to the next available morning. Build extra days into your trip if balloon flying is a priority. Buy travel insurance that covers activity cancellations. If your entire trip has only one day for the balloon and it&apos;s cancelled, there is no refund — just a reschedule.",
                },
                {
                  q: "Which is better — Göreme or Ürgüp as a base?",
                  a: "Göreme for first-time visitors. It is more central, walkable, with better access to balloon companies, the Open Air Museum, and the main valleys. Ürgüp is slightly bigger with better restaurants and more upscale hotels but requires transport for most activities. Uçhisar is the most scenic but least practical. If your budget allows, stay 2 nights in Göreme and 1 night in Uçhisar at a luxury cave hotel.",
                },
                {
                  q: "How do I get from Istanbul to Cappadocia?",
                  a: "Fly (1 hour, ₺400–₺800 one way on Pegasus or AnadoluJet to Nevşehir or Kayseri — cheapest option, most recommended). Overnight bus (10–12 hours, ₺500–₺700 including reclining seat-bed, viable for budget travellers). Driving from Istanbul is 750km, 8 hours via E80 through Ankara — worth it if you have time to stop at Konya (Mevlana Museum). Flying is recommended for trips of 3 days or fewer.",
                },
                {
                  q: "Can I see Cappadocia in 2 days?",
                  a: "2 days covers the essentials — one day for the Open Air Museum, Rose Valley hike, and Uçhisar Castle; one day for the balloon flight and Devrent/Paşabağ valleys. 3 days adds Derinkuyu Underground City and Love Valley, which are essential for understanding the full Cappadocia story. If your balloon flight cancels on Day 1, a 3-day trip gives you Day 2 as backup — a 2-day trip does not.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cappadocia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cappadocia", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cappadocia-balloon-guide", label: "Balloon booking guide", icon: "🎈" },
                { href: "/blog/istanbul-5-days", label: "Istanbul 5 Days", icon: "🕌" },
                { href: "/blog/turkey-travel-tips", label: "Turkey travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="cappadocia-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Turkey &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Istanbul in 5 Days — Mosques, Markets &amp; the Bosphorus", href: "/blog/istanbul-5-days" },
                { label: "Antalya in 3 Days — Turquoise Coast &amp; Old City", href: "/blog/antalya-3-days" },
                { label: "Athens in 3 Days — Acropolis &amp; Ancient Greece", href: "/blog/athens-3-days" },
                { label: "Dubai in 4 Days — Desert, Architecture &amp; Culture", href: "/blog/dubai-4-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
