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
import Breadcrumb from "@/components/blog/Breadcrumb";
import { usePageUrl } from "@/lib/hooks";

const MOUNTABU_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "\uD83D\uDCC5", label: "Day-by-Day Itinerary" },
  { id: "places",    emoji: "\uD83D\uDED5", label: "Key Sights" },
  { id: "budget",    emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mount Abu 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Mount Abu in 2 Days guide&url=${pageUrl}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
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
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function MountAbuClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFE8", label: "Comfortable", sub: "₹6k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MOUNTABU_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mount Abu" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mount abu rajasthan dilwara temple marble hills"
            fallback="https://images.unsplash.com/photo-1609766856923-7e0a7a3b0908?w=1600&q=85"
            alt="Mount Abu hills with Dilwara temple marble architecture in Rajasthan"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Mount Abu 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mount Abu in 2 Days: Dilwara Temples,
                <em className="italic text-gold-light"> Nakki Lake &amp; Guru Shikhar</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, honest reviews, and why Rajasthan&apos;s only hill station deserves a spot on your itinerary.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dilwara Temples are the single most extraordinary piece of marble carving in India &mdash; more detailed than the Taj Mahal, and I&apos;m not exaggerating. The ceiling of Luna Vasahi temple looks like it was carved by angels, not humans.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-4">
            Mount Abu is Rajasthan&apos;s only hill station and most Rajasthan tourists skip it for the desert cities. That&apos;s their loss &mdash; it&apos;s 15{"°"}C cooler than Jaipur and has zero crowds. While everyone fights for selfie space at Amber Fort and Mehrangarh, you get world-class Jain architecture, a hilltop lake, the highest peak in the state, and genuinely pleasant weather &mdash; all in a compact town you can explore in 2 days.
          </p>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Mount Abu sits at 1,220 metres in the Aravalli Range. It&apos;s the kind of place where you show up expecting a minor hill station detour and leave thinking it was a highlight of your Rajasthan trip. The Dilwara Temples alone justify the trip. Everything else is a bonus.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDED5"} label="Key Sight" value="Dilwara Temples" />
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹3,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Oct–Mar" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDD3"} Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mount Abu is pleasant most of the year compared to the rest of Rajasthan, but October to March is when the weather is genuinely perfect for walking and trekking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct-Mar", emoji: "\u2705", title: "Best Season", desc: "October-November is warm and clear (12-28°C). December-February gets chilly, especially at night (4-20°C) — carry a jacket. The temples, lake, and Guru Shikhar are at their most photogenic. Minimal crowds compared to Rajasthan's desert cities.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr-Jun", emoji: "\uD83D\uDD25", title: "Warm but Bearable", desc: "Temperatures reach 33-36°C — hot for a hill station but still 10-15°C cooler than the Rajasthan plains. Many Gujarati and Rajasthani families come here specifically to escape the heat. It's crowded on weekends but manageable on weekdays.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul-Sep", emoji: "\uD83C\uDF27\uFE0F", title: "Monsoon", desc: "Heavy rain, lush greenery, waterfalls come alive. The hills are stunning but trails get slippery, Guru Shikhar can be foggy, and some roads close temporarily. Trevor's Tank and the wildlife sanctuary are at their best in late monsoon. Carry rain gear.", color: "bg-amber-50 border-amber-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Mount Abu is very affordable for a hill station.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Basic guesthouses near Nakki Lake</td><td className="py-2.5 px-4">Heritage hotels, resorts with valley views</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared autos + walking</td><td className="py-2.5 px-4">Private cab for the full trip</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Street food + local dhabas</td><td className="py-2.5 px-4">Hotel restaurants + quality cafes</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">{"₹"}3,500-5,000</td><td className="py-2.5 px-4 font-medium text-teal">{"₹"}6,000-15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Dilwara Jain Temples morning {"→"} Nakki Lake {"→"} Sunset Point. Day 2: Guru Shikhar {"→"} Achalgarh Fort {"→"} Trevor&apos;s Tank {"→"} Wildlife Sanctuary.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Dilwara Temples, Nakki Lake & Sunset Point"
                items={[
                  "8:00am: Start at the Dilwara Jain Temples. This is the reason you came to Mount Abu and possibly the most underrated architectural site in India. Five temples built between the 11th and 13th centuries, and the marble carving inside is beyond anything you've seen. The ceiling of Vimal Vasahi (1031 AD) and Luna Vasahi (1230 AD) temples features marble carved so thin it's almost translucent. No photography allowed inside — put your phone away and just look up.",
                  "The temples are free to enter and open 12:00-5:00pm for non-Jains. Morning hours (6:00-11:00am) are reserved for Jain worshippers, but you can enter during these hours if you're quiet and respectful. The morning slot has far fewer tourists. Allow 1.5-2 hours minimum.",
                  activeTab === "A"
                    ? "Stay at budget guesthouses or hotels near Nakki Lake: ₹600-1,200/night. Mount Abu has plenty of affordable options, especially on weekdays. Walk-ins work outside peak season."
                    : "Stay at Hotel Hillock, Cama Rajputana Club Resort, or Palace Hotel (Bikaner House): ₹3,000-8,000/night. The heritage properties have valley views and colonial-era charm. Book ahead for weekends.",
                  "11:00am: Walk to Nakki Lake. The lake is the social centre of Mount Abu — a natural lake at 1,200 metres surrounded by hills and strange rock formations. The Toad Rock on the south shore actually looks like a toad. Pedal boats cost ₹100-200 for 30 minutes. The lakeside walk is pleasant and takes about 40 minutes for the full loop.",
                  activeTab === "A"
                    ? "12:30pm: Lunch at a local dhaba near the market. Gujarati and Rajasthani thalis for ₹80-150. The market area behind Nakki Lake has the cheapest and most authentic food. Dal-baati-churma is the must-try."
                    : "12:30pm: Lunch at Arbuda Restaurant or Jodhpur Bhojanalaya — both serve excellent Rajasthani food at ₹200-400 per meal. Sit-down restaurants with proper service and good thali options.",
                  "2:00pm: Rest during the afternoon. Even though Mount Abu is cooler than the plains, the midday sun at altitude is still strong. Explore the market for souvenirs — sandalwood items, Rajasthani textiles, and Sirohi silver are the best buys.",
                  "4:30pm: Head to Sunset Point. Sunset Point is named accurately but it's packed by 5pm. The viewing area gets genuinely crowded with domestic tourists, especially on weekends. The sunset itself — over the Aravalli hills with the plains stretching to the horizon — is beautiful. Get there by 4:30pm for a decent spot.",
                  "7:00pm: Dinner and evening stroll along the lake. Nakki Lake at night is peaceful — fairy lights, street food stalls, families walking. The temperature drops quickly after sunset (carry a jacket Oct-Feb). Try the local kulfi and masala corn from the lakeside vendors.",
                ]}
                cost={activeTab === "A" ? "₹1,200-2,000" : "₹4,000-7,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Guru Shikhar, Achalgarh Fort & Wildlife Sanctuary"
                items={[
                  "7:00am: Early start for Guru Shikhar. At 1,722 metres, Guru Shikhar is the highest peak in the entire Aravalli Range and the highest point in Rajasthan. It's 15km from Mount Abu town. You can drive most of the way and then climb 300-400 stone steps to the summit. There's a small Dattatreya temple at the top.",
                  "Sunset Point is named accurately but it's packed by 5pm. Guru Shikhar gives you the same sunset with 360-degree views and maybe 10 other people. For sunrise, it's even more dramatic — the light hitting the Aravalli ridgeline with the plains below is one of the best views in Rajasthan. The early morning drive up is cool and quiet.",
                  activeTab === "A"
                    ? "Transport to Guru Shikhar: Shared auto from town ₹30-50 per person, or hire a return auto for ₹300-500. The road is good but narrow in places."
                    : "Transport to Guru Shikhar: Private cab for the day covering Guru Shikhar, Achalgarh Fort, and Trevor's Tank: ₹1,200-2,000. Much more comfortable and saves time.",
                  "9:30am: Achalgarh Fort. On the way back from Guru Shikhar, stop at Achalgarh Fort — a 14th-century Paramara dynasty fort rebuilt by Maharana Kumbha. The fort is partially in ruins but the Achaleshwar Mahadev Temple inside is remarkable — it has a toe-print of Lord Shiva instead of the usual lingam. The Mandakini Lake nearby has three stone buffalo statues from the original fort period. Free entry, 45 minutes to explore.",
                  "11:00am: Trevor's Tank (Trevor's Crocodile Park). A small artificial lake about 5km from town, named after a British engineer. The draw here isn't the crocodiles (you may or may not see them) — it's the birdwatching. The area around the tank is thick forest and attracts grey herons, cormorants, painted storks, and in winter, migratory species. Peaceful spot, 30-45 minutes.",
                  activeTab === "A"
                    ? "11:45am: Brunch at a budget option back in town. Poha, kachori, and chai from the market stalls: ₹50-100. Mount Abu market food is cheap and fills you up."
                    : "11:45am: Brunch at a hotel restaurant or Chacha Cafe near the lake: ₹200-400. Good coffee, decent continental options alongside Rajasthani food.",
                  "1:00pm: Mount Abu Wildlife Sanctuary. The sanctuary covers 290 sq km around the town and is home to sloth bears, leopards (rarely seen), sambhar deer, langurs, and over 250 bird species. The entry point is near the town itself. A short nature walk along the marked trails (2-3km) takes 1.5-2 hours. Entry fee: ₹10-20 for Indians, ₹80-100 for foreigners. Keep noise low and you'll spot langurs and deer easily.",
                  "3:30pm: Final walk around Nakki Lake and the market. Pick up last-minute souvenirs. The sandalwood and bamboo crafts are genuinely good quality here.",
                  activeTab === "A"
                    ? "4:30pm: Depart. Shared taxi to Abu Road station: ₹50-80 per person, 30-40 minutes. Trains to Ahmedabad (4 hours), Jaipur (8 hours), and Delhi (12 hours). Or take a direct bus to Udaipur: 4 hours, ₹200-350."
                    : "4:30pm: Depart. Private cab to Abu Road station: ₹500-800. Or hire a cab directly to Udaipur (3.5-4 hours, ₹2,500-4,000) — the drive through the Aravalli hills is scenic and worth doing in daylight.",
                ]}
                cost={activeTab === "A" ? "₹800-1,500" : "₹3,000-6,000"}
              />
            </div>
          </section>

          {/* ── KEY SIGHTS ── */}
          <section id="places" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDED5"} Key Sights</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything worth seeing in Mount Abu, ranked by importance. The town is compact and all sights are within 15km of Nakki Lake.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Dilwara Jain Temples", detail: "11th-13th century marble temples · Free entry · 1.5-2 hours", note: "The finest marble carving in India, full stop. Five temples with ceilings that defy belief — the marble is carved so thin light passes through it. Vimal Vasahi (1031 AD) and Luna Vasahi (1230 AD) are the showstoppers. No photography inside. Morning hours (6-11am) are for Jain worshippers but quieter. Afternoon (12-5pm) is open to all.", emoji: "\uD83D\uDED5", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "Guru Shikhar", detail: "Highest peak in Rajasthan · 1,722m · Free · 1-1.5 hours", note: "The roof of Rajasthan. Drive 15km from town, climb 300-400 steps, and get a 360-degree panorama of the Aravallis. A small Dattatreya temple sits at the summit. Far quieter than Sunset Point with better views. Go early morning for sunrise or late afternoon for sunset.", emoji: "\u26F0\uFE0F", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Nakki Lake", detail: "Natural hill lake · Free · 1-2 hours", note: "The heart of Mount Abu. A natural lake at 1,200m surrounded by hills and distinctive rock formations (Toad Rock is the famous one). Pedal boats ₹100-200 for 30 minutes. The lakeside walk is 40 minutes for the full loop. Best at dawn and after dark when the fairy lights come on.", emoji: "\uD83C\uDF0A", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Achalgarh Fort", detail: "14th-century fort with Shiva temple · Free · 45 min", note: "Partially ruined Paramara fort rebuilt by Maharana Kumbha. The Achaleshwar Mahadev Temple has a unique Shiva toe-print instead of a lingam. Mandakini Lake with stone buffalo statues is worth the stop. On the road to Guru Shikhar, so combine the two.", emoji: "\uD83C\uDFF0", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", name: "Trevor's Tank", detail: "Lake · Birdwatching · 30-45 min", note: "Small artificial lake 5km from town, surrounded by thick forest. Excellent for birdwatching — herons, cormorants, painted storks, and winter migrants. You might spot marsh crocodiles. The forest walk around the tank is peaceful and a nice break from temple-hopping.", emoji: "\uD83E\uDDA2", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", name: "Mount Abu Wildlife Sanctuary", detail: "290 sq km · ₹10-100 · 1.5-2 hours", note: "Home to sloth bears, leopards, sambhar deer, langurs, and 250+ bird species. The sanctuary surrounds the town, so you're technically inside it the whole time. Short nature walks on marked trails are the best way to explore. Mornings are best for wildlife spotting. Keep quiet and you'll see deer and langurs easily.", emoji: "\uD83C\uDF3F", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.name} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.detail}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rajasthani dal baati churma traditional food thali"
              fallback="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80"
              alt="Rajasthani dal baati churma and traditional thali"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mount Abu food is honest Rajasthani-Gujarati fare &mdash; dal-baati-churma is the must-try, and the market dhabas behind Nakki Lake are where the locals actually eat.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "\uD83D\uDCB0", total: "₹3,500-5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1-2 nights)", "₹600-1,800"], ["Transport", "₹400-1,000"], ["Food", "₹500-1,000"], ["Entry Fees", "₹20-100"], ["Shopping", "₹500-1,500"]] },
                { plan: "Comfortable", emoji: "\uD83C\uDFE8", total: "₹6,000-15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1-2 nights)", "₹3,000-8,000"], ["Transport", "₹1,200-3,000"], ["Food", "₹1,000-2,500"], ["Entry Fees", "₹50-200"], ["Shopping", "₹1,000-3,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Does not include travel to/from Mount Abu. Budget assumes basic guesthouses, shared transport, and dhaba food. Most temples are free. Wildlife sanctuary entry is nominal.
            </p>
          </section>

          <AffiliateBlock destination="Mount Abu" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Rushing through Dilwara Temples", desc: "Many tourists walk through in 20 minutes and leave. The marble ceilings need slow, careful observation to appreciate — the detail is fractal. Budget 1.5-2 hours minimum. Go in the morning for fewer crowds and better light filtering through the marble.", icon: "\uD83D\uDED5" },
                { title: "Going to Sunset Point on a weekend", desc: "Sunset Point on weekends is a zoo — hundreds of tourists, honking cars, vendors shouting. Guru Shikhar gives you a superior sunset with a fraction of the crowd. If you must do Sunset Point, go on a weekday and arrive by 4:30pm.", icon: "\uD83C\uDF05" },
                { title: "Skipping Guru Shikhar because it sounds hard", desc: "It's not a trek — you drive to a parking lot and walk 300-400 steps. Anyone who can climb stairs can do this. The view from the highest point in Rajasthan is worth every step. Don't miss it.", icon: "\u26F0\uFE0F" },
                { title: "Visiting only in summer", desc: "Mount Abu is marketed as a summer escape, but it still hits 33-36°C in peak summer. October-March is genuinely pleasant at 10-25°C. The winter months are the best time for temple visits and trekking to Guru Shikhar.", icon: "\uD83C\uDF21\uFE0F" },
                { title: "Not carrying cash", desc: "Many smaller shops, autos, and the wildlife sanctuary entry only accept cash. ATMs exist in town but can run out on weekends. Carry ₹2,000-3,000 in cash for a 2-day trip.", icon: "\uD83D\uDCB5" },
                { title: "Expecting Shimla or Manali vibes", desc: "Mount Abu is a small, quiet Rajasthani hill station — not a Himachali hill town. It's about temples, a lake, and gentle walks, not snow or adventure sports. Adjust your expectations and you'll love it.", icon: "\uD83C\uDFD4\uFE0F" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "Sunrise at Guru Shikhar", desc: "Skip Sunset Point entirely and do Guru Shikhar for sunrise instead. Leave town by 5:30am, drive 15km, climb the steps in the dark (carry a torch). The sunrise from the highest point in Rajasthan is extraordinary and you'll have the summit to yourself.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDED5", title: "Dilwara Morning Slot", desc: "The temples are officially for Jain worshippers from 6-11am, but non-Jains can enter if quiet and respectful. The morning light filtering through the marble carvings is a different experience from the afternoon. Far fewer people too.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE8C", title: "Abu Road Is Your Gateway", desc: "Mount Abu town has no railway station. Abu Road station (28km downhill) connects to Ahmedabad, Jaipur, Jodhpur, and Delhi. Shared taxis to Mount Abu cost ₹50-80 per person. The ghat road drive up is scenic — sit on the right side for the best views.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDDE5", title: "Carry Layers Oct-Feb", desc: "Mount Abu temperatures drop sharply after sunset in winter. Daytime might be 20°C but nights hit 4-8°C. A light jacket or fleece is essential. The Guru Shikhar sunrise trip is especially cold.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDC26", title: "Birdwatching at Trevor's Tank", desc: "Carry binoculars if you have them. Trevor's Tank has grey herons, cormorants, painted storks, and in winter, migrants from Central Asia. Early morning (7-8am) is best. The forest around the tank is genuinely pristine.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDED2", title: "Shopping Tips", desc: "Sandalwood items, Sirohi silver, and Rajasthani textiles are the best buys. The market near Nakki Lake has fixed-price government emporiums alongside bargain shops. Bargain at private shops — start at 50% of asking price. Avoid ‘marble’ souvenirs that are actually resin.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group &mdash; we&apos;ll send a personalised Mount Abu &amp; Rajasthan itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mount Abu Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Mount Abu?", a: "2 days is the sweet spot. Day 1 covers Dilwara Jain Temples, Nakki Lake, and Sunset Point. Day 2 covers Guru Shikhar, Achalgarh Fort, Trevor's Tank, and the Wildlife Sanctuary. 1 day means you'll rush through the Dilwara Temples (a crime), and 3 days means you'll run out of things to do." },
                { q: "What is the best time to visit Mount Abu?", a: "October to March. November-February is peak with 10-25°C temperatures, perfect for sightseeing and the Guru Shikhar trek. Mount Abu stays 10-15°C cooler than the Rajasthan plains year-round, so even summer is bearable — but winter is genuinely ideal." },
                { q: "Are the Dilwara Temples really that impressive?", a: "Yes. The marble carving at Dilwara is widely considered the finest in India. The ceilings of Vimal Vasahi and Luna Vasahi temples feature marble carved so thin that light passes through it. Many visitors consider the detail more intricate than the Taj Mahal. No photography inside — you have to see it in person." },
                { q: "How do I get to Mount Abu?", a: "Abu Road railway station is 28km downhill, connected to Ahmedabad (4 hours), Jaipur (8 hours), Jodhpur (5 hours), and Delhi (12 hours). Shared taxis from Abu Road cost ₹50-80 per person, private taxis ₹500-800. Direct buses run from Udaipur (4 hours) and Ahmedabad (5 hours)." },
                { q: "Is Guru Shikhar a difficult trek?", a: "Not at all. You drive to a parking lot 15km from town and walk 300-400 stone steps to the summit. It takes 15-20 minutes to climb. Anyone who can manage stairs can do this. The reward is the highest point in Rajasthan with 360-degree Aravalli views." },
                { q: "Can I combine Mount Abu with other Rajasthan destinations?", a: "Absolutely. Mount Abu to Udaipur is 4 hours by road and the most popular combination. Mount Abu to Jodhpur is 5 hours. You can also continue to Ranakpur (stunning Jain temple, 3 hours) or head south to Ahmedabad (5 hours) to start a Gujarat trip." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Mount Abu — Highlights"
            subtitle="The best of Mount Abu in photos."
            spots={[
              { name: "Mount Abu Landscape", query: "mount abu india landscape scenic beautiful travel", desc: "The stunning landscapes of Mount Abu." },
              { name: "Mount Abu Temple", query: "mount abu temple architecture heritage india", desc: "Historic temples and architecture in Mount Abu." },
              { name: "Mount Abu Street Scene", query: "mount abu street market local culture india", desc: "Local life and culture in Mount Abu." },
              { name: "Mount Abu Nature", query: "mount abu nature hills forest river india", desc: "Natural beauty around Mount Abu." },
              { name: "Mount Abu Sunset", query: "mount abu sunset golden hour india travel", desc: "Mount Abu at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Udaipur — 3 Day Lake City Guide", href: "/blog/udaipur-3-days", soon: false },
                { label: "Jaipur — 3 Day Pink City Guide", href: "/blog/jaipur-3-days", soon: false },
                { label: "Jodhpur — 3 Day Blue City Guide", href: "/blog/jodhpur-3-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="mount-abu-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
