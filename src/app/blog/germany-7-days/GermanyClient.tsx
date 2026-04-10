"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PhotoCta from "@/components/blog/PhotoCta";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import SmartImage from "@/components/ui/SmartImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const GERMANY_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Germany Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️", label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks", emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Germany 7-Day Itinerary&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Germany in 7 Days — Munich, Neuschwanstein, Rothenburg, Frankfurt & Berlin&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/germany-7-days"
        imageUrl="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80"
        description="Germany in 7 Days: Munich beer halls, Neuschwanstein Castle, medieval Rothenburg, Frankfurt apple wine, and Berlin Wall history — complete travel guide with real euro costs."
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
export default function GermanyClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GERMANY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Germany" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="germany neuschwanstein castle bavaria alps autumn"
            fallback="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=80"
            alt="Neuschwanstein Castle Bavaria Germany surrounded by autumn forest Alps"
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
              <span className="text-white/70">Germany 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Germany in 7 Days:
                <em className="italic text-amber-300"> Munich, Neuschwanstein, Rothenburg &amp; Berlin</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Beer halls, fairy-tale castles, medieval walls, and the divided city that changed the world — all connected by Europe&apos;s most efficient rail network. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="17 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇩🇪 Germany, Europe</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Seven days in Germany spans more centuries, landscapes, and moods than almost any other European route of the same length — from Munich&apos;s baroque grandeur and beer hall culture to Berlin&apos;s layered history of trauma and reinvention, all connected by one of Europe&apos;s most efficient rail networks.
            </p>
          </blockquote>

          {/* ── WHAT GERMANY ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Germany Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Germany is Europe&apos;s largest economy and a country of extraordinary cultural, historical, and natural diversity. It is not one place — it is a federation of 16 states, each with its own dialect, cuisine, and identity. Bavaria in the south has more in common with Austria than with Berlin. The Rhineland is half-French in temperament. Hamburg is a Baltic merchant city that still feels like an independent republic.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What a 7-day Germany circuit gives you is a diagonal slash through this variety: Frankfurt arrival, the medieval Romantic Road at Rothenburg ob der Tauber, Munich&apos;s baroque magnificence and beer culture, a day trip to the absurdly beautiful Neuschwanstein Castle, and then north by ICE train to Berlin — a city that contains more history per square kilometre than anywhere else in Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The train network is the backbone of a German trip. Deutsche Bahn&apos;s ICE high-speed trains run Munich–Frankfurt in 3h10min, Frankfurt–Cologne in 1h15min, and Cologne–Berlin in 4h30min. Book ICE Sparpreis (saver) tickets 6–8 weeks ahead and pay €30–70 per journey. Buy the day before and pay €100–130. The price difference is significant enough to justify planning.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airports" value="FRA / MUC / BER" />
              <StatCard icon="🌡️" label="Best Months" value="May–Sep" />
              <StatCard icon="🏰" label="Duration" value="7 Days" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Germany</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best All-Round",
                  d: "15–22°C, long daylight hours (sunset after 9pm by June), beer gardens open in earnest, Neuschwanstein queues manageable. Rothenburg&apos;s half-timbered facades look best in soft spring light. The single best window for this circuit.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Oktoberfest & Foliage",
                  d: "12–20°C, spectacular alpine foliage for Neuschwanstein (castle in orange-gold forest), and Munich&apos;s Oktoberfest runs mid-September to early October. Book tent reservations months in advance for Oktoberfest. Excellent photography light throughout.",
                  b: "Oktoberfest season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "22–30°C. Long days, outdoor cafes and beer gardens at their best. But Neuschwanstein tickets sell out weeks ahead, Berlin and Munich are at peak crowds, and prices spike. Book everything 6–8 weeks in advance. Worth it if planned properly.",
                  b: "Book well ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Apr",
                  i: "❄️",
                  t: "Winter — Christmas Markets",
                  d: "0–8°C. Germany&apos;s Christmas markets (Weihnachtsmärkte) transform every city centre from late November — Nuremberg, Cologne, and Berlin have the most famous. Beer gardens close. Neuschwanstein is quieter but can be snow-closed. A completely different but genuinely magical trip.",
                  b: "Christmas markets",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Germany</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Recommended entry point:</strong> Fly into <strong className="font-medium">Frankfurt Airport (FRA)</strong> — Europe&apos;s second-busiest hub, with direct connections from virtually every major city worldwide. Exit via Berlin Brandenburg (BER) or Munich (MUC) to avoid backtracking. Frankfurt to Berlin by ICE takes 4h30min; Frankfurt to Munich is 3h10min.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Frankfurt (FRA) — recommended",
                  d: "Frankfurt Airport is the best entry point for this circuit. Direct flights from London (1h40min), New York (9h), Dubai (6h30min), Singapore (12h), Mumbai (8h30min). The airport has a direct ICE train station — you can board an ICE to Munich, Cologne, or Berlin directly from Terminal 1 without leaving the airport complex.",
                  b: "Best entry",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Munich (MUC) — for Bavaria-first route",
                  d: "Munich Airport has excellent international connections and the S-Bahn S8/S1 connects to Munich Hauptbahnhof in 40 minutes (€13.60). Start in Munich, do Neuschwanstein and Rothenburg, then head north to Frankfurt, Cologne, and Berlin. This reverses the circuit but works well.",
                  b: "Bavaria-first",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "ICE Train Network — the backbone of this trip",
                  d: "Deutsche Bahn&apos;s ICE trains run Frankfurt–Munich (3h10min, €30–80 Sparpreis), Frankfurt–Cologne (1h15min, €15–55), Cologne–Berlin (4h30min, €35–80). Book at bahn.de at least 6 weeks ahead for Sparpreis fares. The Deutschlandticket (€58/month) covers all regional trains — excellent for day trips but not valid on ICE.",
                  b: "Essential planning",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Car Rental — best for Romantic Road",
                  d: "A rental car makes the Rothenburg–Neuschwanstein–Munich stretch far more flexible — you can stop at the small Romantic Road villages (Dinkelsbühl, Nördlingen) that train routes skip. Major rental companies at all three airports. Germany has no motorway speed limit — drive accordingly.",
                  b: "Romantic Road only",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Germany Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is collapsible. This circuit runs Frankfurt → Rothenburg → Munich → Neuschwanstein → Berlin (3 nights). ICE trains connect the major legs. Book Neuschwanstein tickets at hohenschwangau.de before booking anything else — this sells out first.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Frankfurt Arrival — Römerberg, Sachsenhausen & Apple Wine"
                cost="€50–75"
                items={[
                  "Arrive Frankfurt Airport (FRA). The S-Bahn S8 or S9 runs from Terminal 1 to Frankfurt Hauptbahnhof in 11 minutes (€5.35). Check in near the Hauptbahnhof or the Bahnhofsviertel neighbourhood — well-positioned for the evening and easy for tomorrow&apos;s early train.",
                  "Römerberg: Frankfurt&apos;s medieval old town square — the half-timbered Ostzeile houses facing the Römer (medieval town hall) are the classic image of old Frankfurt. The Dom-Römer archaeological quarter nearby opened in 2018 with faithfully reconstructed medieval buildings over excavated Roman foundations. Free to walk.",
                  "Lunch: Zum Struwwelpeter (Günthersburgallee 51) — a classic Frankfurt Gasthaus serving the two iconic Frankfurt dishes: Grüne Soße (seven-herb green sauce with boiled eggs and potatoes, the Frankfurt signature) and Handkäse mit Musik (curd cheese marinated in oil, vinegar and onions — the name means &apos;music&apos; because of what it does to digestion). Both €8–14.",
                  "Sachsenhausen Apple Wine Quarter: cross the Main river to Frankfurt&apos;s traditional south-bank neighbourhood. The Äpfelwein (Ebbelwoi) taverns on Schweizer Straße are the authentic Frankfurt experience — a Bembel (stone jug) of still, dry apple cider served in ribbed glasses, €2–3 per glass. Wagner Apfelwein Wirtschaft (Schweizer Str. 71) is one of the most atmospheric.",
                  "Museumsufer: 14 museums line 1km of the Main riverbank. The Städel (€16, Botticelli to Bacon) is the standout if you have time. Goethe-Haus (€10, the birthplace of Germany&apos;s greatest literary figure, authentically restored) is 15 minutes&apos; walk from the river.",
                  "Evening: Zur letzten Instanz (Waisenstraße 14–16) — Berlin&apos;s oldest restaurant, founded 1621, but if you&apos;re staying in Frankfurt first, the equivalent Frankfurt institution is Wagner Sachsenhausen. Dinner with Schnitzel and apple wine, €15–22.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Rothenburg ob der Tauber — Medieval Walls & Night Watchman Tour"
                cost="€45–70"
                items={[
                  "Morning train Frankfurt → Würzburg → Steinach → Rothenburg ob der Tauber (2–2.5 hours total, €25–35, requires 1–2 changes). The final approach to Rothenburg on the branch line crosses the Tauber valley — the towers of the medieval town visible from the train.",
                  "Stadtmauer (town walls): Rothenburg&apos;s complete circuit of medieval walls and towers is walkable in 1.5 hours — the covered walkway atop the walls gives views over half-timbered rooftops and the Tauber valley in every direction. Free, open year-round. Do not skip this — it is why Rothenburg is special.",
                  "Marktplatz and Rathaus tower: the Gothic town hall has a tower climb (€2.50, around 200 steps) with a panoramic view of the entire town and valley. The Ratstrinkstube across the square has an hourly mechanical clock show — the famous Meistertrunk legend of the mayor drinking a 3.25-litre Maß to save the town.",
                  "Schneeball: Rothenburg&apos;s unique local pastry — a fried ball of shortcrust pastry dough, available plain or coated in chocolate, marzipan, cinnamon or icing sugar. Every bakery in town sells them for €2–3. Käthe Wohlfahrt Christmas Village (free entry) sells year-round Christmas decorations in a surreal year-round Christmas shop — genuine Rothenburg institution since 1977.",
                  "Dinner at Zur Höll (Burggasse 8): the oldest house in Rothenburg, built around 900 CE, now a restaurant serving Franconian wine and slow-roasted Schäuferla (pork shoulder, €14–18) in a low-ceilinged medieval interior. Reserve a table in advance for evening.",
                  "Night Watchman Tour (€9, 8pm, English, nightly April–December): Hans Georg Baumgartner has led this lantern-lit tour in period costume for 30+ years. The 75-minute walk through dark medieval streets with genuine wit, dark humour, and real history consistently ranks among the best tours in all of Germany. Meet at Marktplatz at 8pm.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Munich Arrival — Marienplatz, Hofbräuhaus & Englischer Garten"
                cost="€70–100"
                items={[
                  "Morning train Rothenburg → Steinach → Ansbach → Munich (2.5–3 hours, €25–40). Arrive Munich Hauptbahnhof — one of Germany&apos;s great railway stations, with U-Bahn, S-Bahn, trams and buses all connecting here. Check in near the Hauptbahnhof (A&O Hostel for budget at €20–35/night dorm, Motel One for mid-range at €80–120).",
                  "Marienplatz: Munich&apos;s central square with the Gothic New Town Hall (Neues Rathaus). The Glockenspiel carillon performs at 11am, noon, and 5pm daily — 43 bells and 32 gilded figures re-enacting two medieval stories: a jousting tournament and the Schäfflertanz (coopers&apos; dance celebrating the end of the plague). Free. The square is the pulse of Munich.",
                  "Viktualienmarkt: Munich&apos;s legendary open-air market, established 1807, 140 stalls running Monday–Saturday. Buy a Weißwurst (white veal sausage, Munich&apos;s signature breakfast food — eaten before noon, peeled from the skin with a spoon or sucked out, with sweet mustard and a pretzel, €5–7) and a Weißbier at one of the market stalls.",
                  "Englischer Garten (Englischer Garten, free): one of the world&apos;s largest urban parks at 3.7km², bigger than Central Park in New York. Walk to the stone bridge on Prinzregentenstraße to watch the Eisbach surfer — a single standing wave on the Eisbach river channel where surfers ride year-round, in all weather, for free. One of Munich&apos;s most surreal and memorable sights.",
                  "Hofbräuhaus (Am Platzl 9, free entry): the world&apos;s most famous beer hall, established by Duke Wilhelm V in 1589. A 1-litre Maß of Hofbräu Original costs €12.80. Order Obatzda (Bavarian cheese spread, €6) and a Brezel (pretzel, €4.50). It is loud, touristy, and essential once. The ground-floor hall seats 1,300 people under painted vaulted ceilings.",
                  "Evening: If Oktoberfest is running (mid-September to first Sunday in October), the fairground at Theresienwiese is 15 minutes&apos; walk from the Hauptbahnhof. Note: to sit in the main beer tents you need a reserved table, booked months in advance. The outdoor fairground and smaller tents are accessible freely.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Neuschwanstein Castle Day Trip — Bavaria at Its Most Theatrical"
                cost="€65–95"
                items={[
                  "6:30am: Train from Munich Hauptbahnhof to Füssen (2 hours, hourly departures — cheapest with the Bayern Ticket at €27.90 for one person covering all regional trains in Bavaria for a full day). The journey through the Alpine foothills is scenic in itself — the Alps appear on the horizon about an hour in.",
                  "CRITICAL BOOKING NOTE: Neuschwanstein Castle tickets (€18) must be pre-booked online at hohenschwangau.de — in summer (June–September) book 4–8 weeks in advance. Your ticket shows a timed entry window and you cannot change it on the day. Same-day tickets are essentially unavailable in peak season. The castle that inspired Walt Disney&apos;s Sleeping Beauty castle was never completed — Ludwig II died mysteriously in 1886 after only 17 years of construction.",
                  "8:30am: Arrive Füssen station. Bus 73 or 78 to Hohenschwangau (€4.50 return, 10 minutes). The walk up through the spruce forest to the castle entrance takes about 40 minutes, or horse-drawn carriage (€7) and shuttle bus (€3.50) are available.",
                  "Marienbrücke (Mary&apos;s Bridge): a 10-minute walk uphill from the castle entrance spans the Pöllat Gorge 90 metres above the valley floor. The view of Neuschwanstein framed by spruce forest, the Bavarian Alps behind, is the single most photographed view in Germany. Arrive early — by 10am the bridge has queues. Free.",
                  "The 35-minute guided tour inside covers the throne room (never completed — the ceiling was never installed), the Singer&apos;s Hall (also never used — Wagner&apos;s operas inspired every painted surface but Liszt, not Wagner, was the first to play here), and Ludwig&apos;s surprisingly modest personal apartments.",
                  "Option: Hohenschwangau Castle (€21 or €30 combo with Neuschwanstein): Ludwig II&apos;s yellow childhood home, directly below Neuschwanstein. More intimate and better preserved than Neuschwanstein, with original Wittelsbach furnishings and the frescoes depicting the Swan Knight legend that directly inspired Ludwig&apos;s entire architectural obsession. Return to Munich by 7pm.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Munich — Museum Island of Bavaria: Deutsches Museum & Dachau"
                cost="€50–80"
                items={[
                  "Morning: Deutsches Museum (€15): the world&apos;s largest science and technology museum, on an island in the Isar river. The aviation hall (with original WWII-era aircraft including a Messerschmitt Bf109 and a Junkers Ju88), the mining display (walk into a full-scale replica mine), and the musical instruments collection are the highlights. You could spend two days here — budget a focused 2.5 hours on the halls that interest you most.",
                  "BMW Museum (€10, adjacent to BMW World showroom — which is free): the museum&apos;s spiral ramp display of historic BMW cars, motorcycles, and aircraft engines since 1916 is architecturally as impressive as a contemporary art museum. BMW World next door is a showroom and delivery centre — free to enter, extraordinary futuristic architecture. Near the Olympic Park.",
                  "Afternoon: Dachau Concentration Camp Memorial (45 minutes from Munich Hauptbahnhof by S2 train + bus 726, free entry to memorial, transport €5.35): Dachau was the first Nazi concentration camp, established in March 1933 — two months after Hitler became Chancellor. The preserved barracks, the crematorium, and the documentation museum are deeply moving and historically essential. Budget 3 hours. This is not entertainment — it is understanding.",
                  "Return to Munich for dinner at Augustiner Bräustuben (Landsberger Straße 19): Augustiner-Bräu is the oldest Munich brewery (1328) and the most respected among locals. The Bräustuben is the brewery&apos;s own restaurant — more authentic than the tourist-facing Hofbräuhaus. A 1-litre Augustiner Edelstoff (Munich&apos;s most elegant pale lager) costs €10.80. Order Schweinshaxe (roasted pork knuckle, €16) or Steckerlfisch (grilled whole fish on a stick, €12). No reservation needed before 7pm.",
                  "Evening option: Augustiner-Keller beer garden (Arnulfstraße 52, open May–September) — Munich&apos;s oldest beer garden (1812), under 100-year-old chestnut trees. Self-service food stalls, families, locals. More atmospheric than any tourist beer hall.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Munich → Berlin by ICE — Brandenburg Gate, East Side Gallery & Museum Island"
                cost="€60–90 (excl. train)"
                items={[
                  "ICE train Munich → Berlin (6 hours, departs Munich Hauptbahnhof from 06:00 onwards, €40–80 Sparpreis booked in advance — book at least 4 weeks ahead for the best fares). Arrive Berlin Hauptbahnhof by midday. The glass-and-steel Hauptbahnhof is Europe&apos;s largest railway station, built for the 2006 World Cup.",
                  "Check in: Generator Berlin Mitte (€22–35/night dorm, good location near Museum Island) for budget, or 25hours Hotel Bikini Berlin (Budapester Str. 40, overlooking the Berlin Zoo, €130–190) for mid-range. Berlin&apos;s accommodation is 15–20% cheaper than Munich for equivalent quality.",
                  "Brandenburg Gate (Brandenburger Tor, free): the 18th-century Neoclassical gate is Berlin&apos;s defining symbol. Designed by Carl Gotthard Langhans and completed in 1791, it has been successively a Prussian triumphal arch, a Nazi backdrop, the sealed border between East and West, and finally the place where Berliners danced on the night the Wall fell in November 1989. Walk through it slowly.",
                  "Holocaust Memorial (Denkmal für die ermordeten Juden Europas, free): 2,711 concrete slabs of varying heights on a sloping surface — as you walk deeper in, the slabs tower overhead and the city disappears entirely. The underground Information Centre (free, book a time slot online) tells individual stories of Jewish families murdered during the Holocaust. Allow 45 minutes minimum. The silence is deliberate.",
                  "East Side Gallery (free): the longest preserved section of the Berlin Wall (1.3km) along Mühlenstraße, now the world&apos;s largest open-air gallery. 105 murals painted by international artists in 1990, including Dmitri Vrubel&apos;s famous &apos;Fraternal Kiss&apos; (Brezhnev and Honecker kissing). Better value than the paid Checkpoint Charlie museum (€15, largely reproductions).",
                  "Museum Island (Museumsinsel): five world-class museums on an island in the Spree. The Pergamon Museum (€18, currently partially closed through 2027 but Islamic Art and Antiquities wings remain open) and the Neues Museum (€18, home of the Nefertiti bust — the 3,300-year-old painted limestone portrait is even more extraordinary in person than in photographs) are the highlights. Combined day ticket €24.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Berlin — Reichstag Dome, Checkpoint Charlie & Kreuzberg"
                cost="€45–75"
                items={[
                  "Reichstag (free, mandatory pre-registration at bundestag.de — book at least 3 days ahead, ideally 2–3 weeks): Sir Norman Foster&apos;s glass dome atop the rebuilt German parliament building offers a 360° panoramic view of Berlin and a mirrored cone that bounces natural light down into the plenary chamber below. The political symbolism — the transparent government beneath the people walking above — is deliberate. Register online for a free timed slot; bring your passport.",
                  "Checkpoint Charlie (free, outdoors): the former Allied checkpoint between East and West Berlin on Friedrichstraße. The current guard house is a replica — the original is in a museum in Washington D.C. Skip the paid Checkpoint Charlie Museum (€15, mostly reproductions) and instead read the outdoor information boards at the crossing itself, which cover the wall crossing attempts and Cold War history for free.",
                  "Topography of Terror (free): on the site of the former Gestapo and SS headquarters on Niederkirchnerstraße, the outdoor and indoor exhibitions document the systematic persecution apparatus of the Nazi state in exhaustive and unflinching detail. One of Berlin&apos;s most important (and most sobering) museums. Free entry, open daily.",
                  "Berliner Dom (€9): the huge neo-baroque Protestant cathedral on Museum Island, completed 1905. Climb to the dome for panoramic views. The crypt beneath houses the Hohenzollern dynasty — the Prussian royal family. More architecturally spectacular than spiritually moving.",
                  "Kreuzberg neighbourhood: Berlin&apos;s most culturally mixed district, the centre of alternative culture since the 1970s. Walk along the Landwehrkanal, explore the street art on Oranienstraße, eat at one of the dozens of excellent and cheap international restaurants — Turkish, Vietnamese, Korean, Indian, all at €8–15/person. The best Döner Kebab in the world (the Berlin Döner is a distinct style) costs €5–7 from any of the Turkish-German snack bars.",
                  "Farewell dinner: Zur letzten Instanz (Waisenstraße 14–16) — Berlin&apos;s oldest restaurant, opened in 1621. Napoleon ate here. The menu is classic Berliner Küche: Eisbein (pickled pork knuckle with sauerkraut, €18), Königsberger Klopse (meatballs in caper sauce, the Berlin signature dish, €16), and Berliner Kindl beer at €3.80/glass. Reserve in advance.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Germany" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites across the 7-day circuit, in priority order. Entry fees as of 2026. Free sites first — Germany has more high-quality free attractions than almost any other European destination.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Neuschwanstein Castle",
                  e: "€18 (pre-book at hohenschwangau.de)",
                  d: "The fairy-tale castle that inspired Disney&apos;s Sleeping Beauty, built by Ludwig II from 1869 but never completed. The 35-minute guided tour covers the throne room, Singer&apos;s Hall, and Ludwig&apos;s apartments. Pre-booking is mandatory — same-day tickets are essentially unavailable June–September. The Marienbrücke viewpoint (free) is 10 minutes uphill and gives the definitive view.",
                  t: "Must book ahead · 3–4 hrs",
                },
                {
                  n: "Brandenburg Gate, Berlin",
                  e: "Free",
                  d: "Berlin&apos;s defining symbol — the 18th-century Neoclassical gate that separated East and West for 28 years. Walk through it from east to west, the same direction millions walked when the Wall fell on November 9, 1989. The Quadriga (goddess of victory in a four-horse chariot) on top was removed by Napoleon in 1806 and returned in 1814.",
                  t: "Must see · 30 min",
                },
                {
                  n: "East Side Gallery, Berlin",
                  e: "Free",
                  d: "The world&apos;s largest open-air gallery — 1.3km of authentic Berlin Wall murals painted by 105 international artists in 1990. Dmitri Vrubel&apos;s fraternal kiss is the most famous image, but the full walk reveals dozens of equally powerful works. Far better than the paid Checkpoint Charlie museum.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Rothenburg ob der Tauber Town Walls",
                  e: "Free",
                  d: "The complete circuit of medieval city walls surrounding Rothenburg — a covered walkway atop the walls that can be walked in 1.5 hours. Almost entirely undamaged in WWII (a single American general&apos;s personal decision). The views over half-timbered rooftops and the Tauber valley are picture-perfect in every direction.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Museum Island, Berlin — Neues Museum",
                  e: "€18 (or €24 combined day ticket)",
                  d: "Home of the Nefertiti bust — the 3,300-year-old painted limestone portrait of Akhenaten&apos;s queen, discovered in 1912. Photographs do not prepare you for the reality: the paintwork is still vivid, one eye preserved in perfect detail. The Neues Museum was bombed in 1943 and its ruined shell was preserved within the restoration — you walk through architectural time.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "Marienplatz Glockenspiel, Munich",
                  e: "Free",
                  d: "The carillon in the New Town Hall tower performs at 11am, noon, and 5pm daily. 43 bells and 32 gilded mechanical figures in two tiers: the upper tier depicts a jousting tournament; the lower tier the Schäfflertanz (coopers&apos; dance from the plague era). The 12-minute show is genuinely charming rather than just tourist spectacle.",
                  t: "Free · 15 min",
                },
                {
                  n: "Reichstag Dome, Berlin",
                  e: "Free (pre-register at bundestag.de — bring passport)",
                  d: "Sir Norman Foster&apos;s glass dome atop the German parliament. A mirrored cone reflects natural light into the chamber; a walking ramp spirals to the top for panoramic views over the city. Register online for a free timed slot at least 3 days ahead. The combination of political symbolism and architectural beauty is unique in Europe.",
                  t: "Book ahead · 1 hr",
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
            title="Germany — Castles, Beer Halls &amp; the Wall"
            subtitle="Seven days across Bavaria, the Romantic Road, and Berlin."
            spots={[
              {
                name: "Neuschwanstein Castle Bavaria",
                query: "neuschwanstein castle bavaria alps autumn forest germany",
                desc: "Neuschwanstein Castle in the Bavarian Alps — the fairy-tale castle that inspired Walt Disney, photographed from the Marienbrücke at golden hour.",
              },
              {
                name: "Brandenburg Gate Berlin",
                query: "brandenburg gate berlin germany historic neoclassical night",
                desc: "The Brandenburg Gate at night — Berlin&apos;s defining symbol and the place where the Wall fell on 9 November 1989.",
              },
              {
                name: "Rothenburg ob der Tauber",
                query: "rothenburg ob der tauber medieval town walls germany romantic road",
                desc: "Rothenburg ob der Tauber&apos;s perfectly preserved medieval half-timbered streetscapes and town walls — the finest medieval town in Germany.",
              },
              {
                name: "Marienplatz Munich Glockenspiel",
                query: "marienplatz munich glockenspiel new town hall bavaria germany",
                desc: "Munich&apos;s Marienplatz with the Gothic New Town Hall and Glockenspiel — the beating heart of Bavaria&apos;s capital.",
              },
              {
                name: "East Side Gallery Berlin Wall",
                query: "east side gallery berlin wall murals art friedrichshain spree",
                desc: "The East Side Gallery — 1.3km of authentic Berlin Wall murals, the world&apos;s largest open-air gallery, painted in 1990.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Germany is a mid-to-high-cost destination in Western European terms — roughly comparable to France but cheaper than Scandinavia and the UK. The main variable is accommodation. Inter-city ICE train fares are the other major cost and are dramatically cheaper booked in advance.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation/night", "€18–35 (hostel dorm)", "€80–160 (hotel)", "€300–900 (grand hotel)"],
                    ["🍽️ Food/day", "€15–25", "€40–70", "€100–300"],
                    ["🚂 ICE trains (total 7 days)", "€90–150 (advance Sparpreis)", "€150–280", "€200–400 (first class)"],
                    ["🎟️ Activities/day", "€15–30", "€25–50", "€100–350"],
                    ["🚌 Local transport/day", "€5–10", "€10–20", "€20–60"],
                    ["TOTAL (per person, 7 days)", "€380–770", "€1,100–2,200", "€3,800–8,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–110/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms in all cities (€18–35), market lunches (€5–8), supermarket dinners (€5–10), ICE trains booked 6+ weeks ahead. The Deutschlandticket (€58/month) covers all regional trains — excellent for day trips.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (€170–330/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Design hotels (Motel One, 25hours), restaurant dinners at €20–35/person, Städel and major museum entries, ICE booked 4 weeks ahead. The most comfortable balance for this circuit.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€550–1,750/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Kempinski, Hotel Adlon, Excelsior Ernst. Michelin-starred dinners (Reinstoff Berlin, Tantris Munich), first-class ICE, private guides for castles and history tours. Germany&apos;s top end is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Germany</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              This itinerary requires accommodation in Frankfurt (1 night), Rothenburg (1 night), Munich (2 nights), and Berlin (2 nights). Book Munich and Berlin accommodation early — both cities fill up quickly, especially during Oktoberfest (Munich, mid-September to early October) and major events.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Generator Berlin Mitte",
                  type: "Hostel · Berlin, central location",
                  price: "From €22/night (dorm)",
                  badge: "Best budget Berlin",
                  desc: "Well-designed hostel in central Berlin, 15 minutes&apos; walk from Museum Island. Clean dorms, good bar, reliable Wi-Fi. The best budget option for first-time Berlin visitors who want to be near the main sights.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Motel One München-Hauptbahnhof",
                  type: "Design hotel · Munich, central",
                  price: "From €75/night",
                  badge: "Best mid-range Munich",
                  desc: "Excellent-value design hotel two minutes from Munich Hauptbahnhof. Sleek rooms, good breakfast, extremely well-located for Marienplatz, the Englischer Garten, and the Hauptbahnhof ICE connections. One of the best value hotels in Munich.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotel Eisenhut, Rothenburg",
                  type: "Historic hotel · Rothenburg ob der Tauber",
                  price: "From €120/night",
                  badge: "Best Rothenburg stay",
                  desc: "Four 16th-century patrician houses combined into one hotel in the heart of Rothenburg. The finest accommodation in the medieval town — beamed ceilings, antique furnishings, and a location that puts you inside the walled city rather than outside it.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Adlon Kempinski Berlin",
                  type: "Grand hotel · Berlin, Brandenburg Gate",
                  price: "From €400/night",
                  badge: "Most storied address",
                  desc: "Berlin&apos;s most famous hotel, directly beside the Brandenburg Gate on Unter den Linden. The original Adlon was destroyed in 1945; this rebuilt version (1997) maintains the tradition of hosting heads of state and royalty. Michael Jackson dangled his baby from a window here in 2002.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Germany</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              German cuisine is far more varied than its international stereotype of sausage and sauerkraut. Each region has a distinct food identity: Bavaria has its pork knuckles, pretzels, and Weißwurst; Frankfurt its Grüne Soße and Äpfelwein; Cologne its Sauerbraten and Kölsch culture; Berlin its Turkish-influenced Döner and international Kreuzberg kitchens.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Zur letzten Instanz, Berlin",
                  t: "Historic tavern · Waisenstraße 14–16, Berlin-Mitte",
                  d: "Berlin&apos;s oldest restaurant, opened in 1621. Napoleon ate here in 1806; the original beer cellar is still in use. Menu: Eisbein mit Sauerkraut (pickled pork knuckle, €18), Königsberger Klopse (Berlin&apos;s signature meatballs in caper sauce, €16), Berliner Kindl beer €3.80. Reserve ahead for dinner. The building survived WWII bombing and the Wall — the interior is genuinely 17th-century at its core.",
                  b: "Must visit Berlin",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Augustiner Bräustuben, Munich",
                  t: "Brewery restaurant · Landsberger Straße 19, Munich",
                  d: "Augustiner-Bräu is Munich&apos;s oldest brewery (founded 1328) and the brand most respected by Münchners themselves. The Bräustuben is the brewery&apos;s own tavern — more authentic and less crowded than the Hofbräuhaus. Augustiner Edelstoff lager (pale, elegant, €10.80 per litre Maß), Schweinshaxe (roasted pork knuckle, €16), Steckerlfisch (grilled fish on a stick, €12), Obatzda (Bavarian cheese spread, €6). Legendary.",
                  b: "Best Munich beer food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Zum Struwwelpeter, Frankfurt",
                  t: "Traditional Gasthaus · Günthersburgallee 51, Frankfurt",
                  d: "A proper Frankfurt Gasthaus serving the two dishes that define Frankfurt cuisine: Grüne Soße (green herb sauce made from seven specific herbs — parsley, chives, watercress, sorrel, lovage, borage, and salad burnet — served with boiled eggs and potatoes, €12) and Handkäse mit Musik (marinated curd cheese with onion, oil and vinegar — the &apos;music&apos; is the digestive consequence, €8). Apfelwein from the Bembel jug throughout.",
                  b: "Authentic Frankfurt",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Zur Höll, Rothenburg ob der Tauber",
                  t: "Medieval restaurant · Burggasse 8, Rothenburg",
                  d: "The oldest building in Rothenburg, constructed around 900 CE — over 1,100 years old. Now a restaurant serving Franconian wine and slow-roasted Schäuferla (pork shoulder, €14–18) in low-ceilinged medieval rooms. The Tauber Valley Silvaner is the wine to order. Reserve in advance for evening sittings — the dining rooms are small.",
                  b: "900-year-old building",
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
            destination="Germany"
            hotels={[
              {
                name: "Generator Berlin Mitte",
                type: "Hostel · Berlin city centre",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget Berlin",
                url: "https://www.booking.com/hotel/de/generator-berlin-mitte.html?aid=2820480",
              },
              {
                name: "Motel One München-Hauptbahnhof",
                type: "Design hotel · Munich central",
                price: "From €75/night",
                rating: "4",
                badge: "Best mid-range Munich",
                url: "https://www.booking.com/hotel/de/motel-one-muenchen-hauptbahnhof.html?aid=2820480",
              },
              {
                name: "Hotel Eisenhut Rothenburg",
                type: "Historic hotel · Medieval town centre",
                price: "From €120/night",
                rating: "4",
                badge: "Best Rothenburg",
                url: "https://www.booking.com/hotel/de/eisenhut.html?aid=2820480",
              },
              {
                name: "Hotel Adlon Kempinski Berlin",
                type: "Grand luxury · Brandenburg Gate",
                price: "From €400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/de/adlon.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Berlin Wall & History Walking Tour",
                duration: "3.5 hrs",
                price: "From €20/person",
                badge: "Best-selling Berlin",
                url: "https://www.getyourguide.com/s/?q=berlin+wall+history+tour&partner_id=PSZA5UI",
              },
              {
                name: "Neuschwanstein Castle Guided Tour from Munich",
                duration: "Full day",
                price: "From €45/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=neuschwanstein+castle+day+trip+munich&partner_id=PSZA5UI",
              },
              {
                name: "Munich Beer Hall Evening Experience",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Iconic experience",
                url: "https://www.getyourguide.com/s/?q=munich+beer+hall+tour&partner_id=PSZA5UI",
              },
              {
                name: "Rothenburg Night Watchman Tour",
                duration: "75 min",
                price: "€9/person",
                badge: "Unmissable",
                url: "https://www.getyourguide.com/s/?q=rothenburg+night+watchman+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Germany</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏰",
                  title: "Not Pre-Booking Neuschwanstein Tickets",
                  desc: "Neuschwanstein Castle sells out completely on summer days — arriving without a pre-booked timed entry ticket at hohenschwangau.de means you cannot enter, period. In June–September, same-day tickets are essentially unavailable by 9am. Book your timed entry weeks or months in advance. The ticket also specifies your exact entry time — you cannot change it on the day. This is the single most common Germany travel disaster.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚂",
                  title: "Buying Expensive ICE Tickets Last Minute",
                  desc: "Deutsche Bahn&apos;s ICE trains have dynamic pricing — the same Munich–Berlin journey can cost €35 booked 6 weeks ahead or €130 bought the day before. The Sparpreis (saver fare) requires advance booking but is non-refundable. For flexibility, the Flexpreis is fully refundable but significantly more expensive. Budget travellers: the €58/month Deutschlandticket covers ALL regional (non-ICE) trains — a slower but dramatically cheaper option.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎉",
                  title: "Visiting Oktoberfest Without a Tent Reservation",
                  desc: "Oktoberfest&apos;s main beer tents require advance table reservations made months earlier — some as early as January for the following September. Without a reservation, you can only enter the tents if there is standing room, which is unpredictable. The outside fairground is always accessible. The authentic tent experience — 6,000-person singing, Maß-clanking, dirndl-and-lederhosen Bavaria — requires planning months in advance. Book through Munich&apos;s official tourist office.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏘️",
                  title: "Skipping Rothenburg ob der Tauber",
                  desc: "Many Germany itineraries jump Munich → Frankfurt → Cologne → Berlin and skip Rothenburg entirely as &apos;too far off the route.&apos; This is a mistake. Rothenburg fits naturally between Frankfurt and Munich (2 hours from Frankfurt, 3 from Munich). It is the most perfectly preserved medieval walled city in Germany and the Night Watchman tour (€9) is consistently cited as one of the best experiences in the entire country.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Germany</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "The Bayern Ticket Is Extraordinary Value",
                  desc: "The Bayern Ticket (Bavaria Ticket) costs €27.90 for one person (€5 per additional person, up to 5 total) and covers all regional trains, S-Bahns, buses and trams in Bavaria for one full day from 9am. Munich to Füssen for Neuschwanstein, Munich to Berchtesgaden, Munich to Nuremberg — all covered. For a group of three, it costs €37.90 total: barely more than a single regular ICE ticket.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Neuschwanstein at 8am Before the Crowds",
                  desc: "The castle grounds open at 8am. Walking up to the Marienbrücke viewpoint at 8:15am, before the first tour coaches have arrived, gives you the castle in morning mist with almost no other people in the frame. By 10:30am, hundreds of people are on the bridge simultaneously. The castle itself: the first guided tour of the day is at 9am and has the fewest people.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🧱",
                  title: "East Side Gallery is Free — Skip the Checkpoint Charlie Museum",
                  desc: "The East Side Gallery is 1.3km of authentic Berlin Wall murals, completely free. The paid Checkpoint Charlie Museum (€15) is largely reproductions and dramatizations — the actual historic content is mostly available on the free outdoor information boards at the crossing itself. Save the €15 for a Berlin Döner and two beers at a Kreuzberg Kneipe.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏛️",
                  title: "Reichstag Dome Registration — Do It Now",
                  desc: "The Reichstag glass dome is free but requires online registration at bundestag.de with passport details. You must book a specific time slot. During busy periods (summer, Christmas), slots fill 2–3 weeks ahead. Register as soon as your travel dates are confirmed — it is genuinely one of the best free experiences in Berlin and worth the 5-minute online registration.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⚽",
                  title: "Bayern Munich Match at Allianz Arena",
                  desc: "If your trip coincides with a home Bayern Munich Bundesliga match (August–May, roughly every two weeks), attending is one of the best live football experiences in Europe. Tickets range from €15 (standing terrace — the Bundesliga standing culture is safe and electric) to €120 for covered seats. Check fc-ticketcenter.de or the official Bayern website — some matches sell out weeks ahead.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🍺",
                  title: "Kölsch in Cologne: the Auto-Refill Rule",
                  desc: "In a Cologne Brauhaus, Kölsch is served in straight 0.2-litre Stangen glasses. The Köbes (waiter) keeps bringing new glasses automatically — without being asked — and marks each one on your coaster. To stop the auto-refill, put your coaster on top of the glass. This is not folklore: it is genuinely what happens. Kölsch is only brewed within Cologne — it cannot legally be called Kölsch if brewed elsewhere.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Germany" />

          {/* Combine With */}
          <CombineWith currentSlug="germany-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Germany?",
                  a: "Yes. Indian passport holders require a Schengen short-stay visa (Type C) to enter Germany. Apply through VFS Global India or the Goethe Institut visa application centres in Mumbai, Delhi, Chennai, Kolkata, Hyderabad, or Pune. Fee: €80 plus service charges. Processing time: 15–45 days. Apply at least 8 weeks before travel — German visa appointments fill up quickly in spring and summer. Required documents: bank statements showing adequate funds (€100+/day), confirmed hotel bookings for all nights, return flight tickets, employment letter, and travel insurance with minimum €30,000 medical coverage.",
                },
                {
                  q: "How do I book Neuschwanstein Castle tickets?",
                  a: "Go directly to hohenschwangau.de and book a timed entry ticket (€18). In summer (June–September), book 4–8 weeks in advance — on busy days, same-day tickets are completely gone by early morning. Your ticket specifies an exact entry time and you cannot change it on the day. The guided tour inside takes 35 minutes and is mandatory — there is no self-guided option. The ticket office in Hohenschwangau village is the only sales point on the day; there is no booking at the castle gate itself.",
                },
                {
                  q: "What is the best time to visit Germany?",
                  a: "May–June is the best all-round window: pleasant temperatures (15–22°C), long daylight hours, beer gardens open, and Neuschwanstein crowds still manageable. September–October is excellent for autumn foliage at Neuschwanstein, Oktoberfest in Munich (mid-September to early October), and generally lower crowds outside Munich. July–August is peak season with the best weather but highest prices and largest crowds — book everything well in advance.",
                },
                {
                  q: "Is a German rail pass worth buying?",
                  a: "For most visitors doing the Frankfurt–Rothenburg–Munich–Neuschwanstein–Berlin route, individual advance-purchase Sparpreis ICE tickets (booked at bahn.de 6+ weeks ahead) are usually cheaper than a rail pass. However, the Deutschlandticket (€58/month, valid on all regional trains, S-Bahns, and local buses across Germany) is extraordinary value for day trips from Munich — Neuschwanstein, Dachau, Berchtesgaden. For the inter-city ICE legs, individual Sparpreis tickets beat any pass on price.",
                },
                {
                  q: "Is Berlin more expensive than Munich?",
                  a: "Berlin is generally 15–20% cheaper than Munich for accommodation, food, and nightlife. A hostel dorm in Berlin costs €22–35, versus €25–40 in Munich. A restaurant dinner for a mid-range meal costs €15–22 in Berlin versus €18–28 in Munich. Munich&apos;s beer hall culture (Maß of beer at €11–13) is one area where Berlin is clearly cheaper — a half-litre in a Berlin bar costs €4–5. Overall, Berlin is more affordable, but neither city is cheap by European backpacker standards.",
                },
                {
                  q: "What German foods should I try beyond sausages?",
                  a: "Germany&apos;s food culture extends well beyond Bratwurst. Weißwurst (Munich white veal sausage eaten before noon with sweet mustard and a pretzel, €5–7), Schäuferla (Bavarian slow-roasted pork shoulder, €14–18), Grüne Soße (Frankfurt&apos;s seven-herb green sauce with boiled eggs and potatoes — the city&apos;s signature dish), Sauerbraten (Rhine-marinated pot roast, a Cologne and Rhine speciality), Schneeballen (Rothenburg&apos;s fried pastry snowball, €2–3), and Königsberger Klopse (Berlin meatballs in caper sauce, €14–16). For drinks: Kölsch in Cologne (served only in straight 0.2-litre glasses), Weißbier in Bavaria (cloudy wheat beer, €4–5), and Äpfelwein in Frankfurt (dry still apple cider from ceramic Bembel jugs, €2–3/glass).",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Germany trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-germany", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/germany-budget-breakdown", label: "Full budget guide", icon: "💰" },
                { href: "/blog/neuschwanstein-castle-guide", label: "Neuschwanstein secrets", icon: "🏰" },
                { href: "/blog/germany-train-guide", label: "Train & rail tips", icon: "🚂" },
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
          <RelatedGuides currentSlug="germany-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Amsterdam in 4 Days — Canals &amp; Culture", href: "/blog/amsterdam-4-days" },
                { label: "Paris in 5 Days — Art &amp; Architecture", href: "/blog/paris-5-days" },
                { label: "Vienna in 4 Days — Habsburg &amp; Coffee Houses", href: "/blog/vienna-4-days" },
                { label: "Prague in 4 Days — Old Town &amp; Baroque", href: "/blog/prague-4-days" },
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
