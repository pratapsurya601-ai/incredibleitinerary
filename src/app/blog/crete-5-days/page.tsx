import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Crete",
  country: "Greece",
  countryFlag: "🇬🇷",
  slug: "crete-5-days",
  heroQuery: "crete greece beach coast blue water gorge cliff",
  heroAlt: "Crete Greece turquoise coast with dramatic cliffs and clear Mediterranean water",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "14 min read",
  intro: "Greece's largest island has the palace of the Minotaur at Knossos, Europe's longest gorge at Samaria, a beach with naturally pink sand at Balos Lagoon, and a lamb slow-cooked since dawn that arrives at your table at 2pm. Crete is what Greece was before mass tourism — raw, beautiful, and extraordinarily hospitable.",
  stats: { duration: "5 Days", budgetFrom: "€50", bestMonths: "Apr – Jun, Sep – Oct", airport: "HER (Heraklion Nikos Kazantzakis)" },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["Schengen Visa", "Apply at Greek embassy. €80 fee. Processing 15–45 days. Required for all non-EU nationals."],
        ["Documents", "Proof of funds (€100/day), travel insurance, return tickets, accommodation bookings."],
        ["Getting to Crete", "Direct flights from Athens (45 min) or ferry from Piraeus (9 hrs overnight). Summer charter flights from many European cities."],
        ["Tip", "Renting a car in Crete unlocks the best of the island — remote beaches, mountain villages, gorges. International license not required for EU rental companies with Indian license."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "90 days visa-free in Schengen area for USA, UK, Canada, Australia, NZ."],
        ["Direct Flights", "Summer charter flights to Heraklion and Chania from UK, Germany, Netherlands, Scandinavia."],
        ["Car Rental", "Renting a car is essential for western Crete and the Samaria Gorge. Book in advance in summer."],
        ["Tip", "Crete is large — east (Heraklion/Agios Nikolaos) and west (Chania/Rethymnon) are very different. This itinerary covers the west, which most travelers prefer."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€50–80/day",
      days: [
        {
          day: "Day 1",
          title: "Heraklion & Knossos",
          items: [
            "Arrive Heraklion. Check in to hostel or budget guesthouse (€20–35/night)",
            "10:00am — Knossos Palace (€15) — Minoan civilization palace dating to 1700 BC, Europe's oldest city",
            "1:00pm — Lunch: Cretan mezedes in Heraklion — dakos (barley rusk salad), fresh cheese, olives for €12",
            "3:00pm — Heraklion Archaeological Museum (€15 or combined ticket with Knossos) — world's best Minoan collection",
            "6:00pm — Walk Heraklion's Venetian harbor and El Greco park",
            "8:00pm — Dinner at a traditional Cretan restaurant in the old town",
          ],
          cost: "€55–70 total",
        },
        {
          day: "Day 2",
          title: "Drive West to Chania",
          items: [
            "Rent a car (€25–35/day including basic insurance) or take the KTEL bus (€14)",
            "Stop at Rethymnon old town — Venetian harbor, lighthouse, old city walls (2 hours)",
            "Lunch at a Rethymnon harbor taverna — fresh mussels for €12",
            "Afternoon: Arrive Chania. Walk the old Venetian harbor — most beautiful in Crete",
            "Evening: Sunset from the lighthouse at the harbor entrance (free)",
            "Dinner in Chania's old town — swordfish or lamb chops at a rooftop restaurant",
          ],
          cost: "€50–70 total (excl. car rental)",
        },
        {
          day: "Day 3",
          title: "Samaria Gorge Hike",
          items: [
            "6:00am — Early bus from Chania to Omalos (€7) — the gorge entrance",
            "7:30am — Enter Samaria Gorge (€5 entry) — 16km hike, 6–7 hours, Europe's longest gorge",
            "The narrowest section (Iron Gates) is just 3.5m wide with 300m walls on either side",
            "End point: Agia Roumeli village on the Libyan Sea — swim in crystal water, eat grilled fish",
            "5:00pm — Ferry from Agia Roumeli to Hora Sfakion (€15)",
            "6:30pm — Bus back to Chania (€5) or stay overnight in Sfakia (budget €35)",
          ],
          cost: "€35–50 total (tough hike day — low spending)",
        },
        {
          day: "Day 4",
          title: "Balos Lagoon & Falasarna Beach",
          items: [
            "9:00am — Drive to Balos Lagoon (45 min from Chania on dirt road, 4WD not required in dry season)",
            "Or take the boat from Kissamos port (€20 return, easier but 1.5 hrs)",
            "Balos: Pink-white sand, turquoise shallow lagoon, flamingos in shoulder season",
            "2:00pm — Drive to Falasarna beach (30 min) — huge expanse of golden sand, surf waves",
            "Evening: Return to Chania. Dinner at Tamam restaurant — best creative Cretan cuisine",
          ],
          cost: "€40–60 total",
        },
        {
          day: "Day 5",
          title: "Mountain Village & Farewell",
          items: [
            "Morning: Drive up to Elos or Topolia village in the Chania mountains (30 min from town)",
            "Walk through the chestnut forests, see traditional architecture",
            "Lunch at a village café — slow-roasted lamb, village wine, €15",
            "Afternoon: Platanias beach or Agia Marina beach near Chania for a last swim",
            "Return car, fly or ferry back to Athens",
          ],
          cost: "€40–55 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€150–250/day",
      days: [
        {
          day: "Day 1",
          title: "Heraklion & Private Knossos Tour",
          items: ["Private guided Knossos tour (€60 per person)", "Heraklion Archaeological Museum", "Lunch at Peskesi — farm-to-table Cretan cuisine", "Boutique hotel check-in in Chania old town (€80–120/night)"],
          cost: "€150–200",
        },
        {
          day: "Day 2",
          title: "Scenic Drive West",
          items: ["Rethymnon private walking tour", "Lunch at Avli restaurant in Rethymnon garden", "Chania harbor sunset from rooftop bar", "Dinner at To Maridaki seafood restaurant"],
          cost: "€120–180",
        },
        {
          day: "Day 3",
          title: "Samaria Gorge & Sfakia",
          items: ["Private transport to Omalos (€80 for the car)", "Samaria Gorge hike with local guide", "Overnight at Sfakia harbor village — fresh caught fish dinner"],
          cost: "€150–200",
        },
        {
          day: "Day 4",
          title: "Private Boat to Balos",
          items: ["Private boat charter to Balos and Gramvousa island (€300–400 for the boat)", "Snorkeling, cliff swimming, secluded lunch on Gramvousa", "Return via Falasarna beach"],
          cost: "€200–300",
        },
        {
          day: "Day 5",
          title: "Mountain Villages & Spa",
          items: ["Morning olive oil tasting at local producer in Vamos village", "Lunch at an agritourism farm", "Afternoon spa at Westin Resort Naousa (day pass €60)", "Farewell dinner at Meli restaurant"],
          cost: "€150–200",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€400+/day",
      days: [
        { day: "Days 1–5", title: "Luxury Crete at Your Pace", items: ["Base at Blue Palace Resort (Elounda) or Amirandes Grecotel", "Private archaeologist guide for Knossos and Minoan sites", "Helicopter transfer from Heraklion to Chania", "Private yacht for Balos, Gramvousa, and surrounding sea caves", "Cooking masterclass with Cretan chef using estate-grown produce", "Tasting menu at Thea restaurant, Blue Palace resort"], cost: "€600–1,200/day" },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–25", transport: "€10–20", activities: "€15–30", total: "€60–115/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€40–80", transport: "€25–50", activities: "€30–60", total: "€175–340/day" },
    { tier: "💎 Luxury", accommodation: "€250–600", food: "€80–200", transport: "€100–300", activities: "€100–400", total: "€530–1,500/day" },
  ],
  mistakes: [
    { icon: "🚗", title: "Not Renting a Car", desc: "Crete's best places — Balos Lagoon, Samaria Gorge, mountain villages, hidden beaches — are inaccessible without a car. Bus schedules are limited and tours are rushed. A car costs €25–40/day and transforms the experience.", color: "bg-red-50 border-red-200" },
    { icon: "🥾", title: "Underestimating Samaria Gorge", desc: "The 16km gorge is Europe's longest and takes 6–7 hours. It's not technically difficult but it is long. Wear proper shoes (not sandals), bring 2L of water, start early, and don't rush the descent.", color: "bg-orange-50 border-orange-200" },
    { icon: "🏖️", title: "Only Staying in Heraklion", desc: "Heraklion is good for one day (Knossos + museum). The beauty of Crete is in the west — Chania's old town, Samaria Gorge, Balos Lagoon, mountain villages. Base yourself in Chania for 3+ nights.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "📅", title: "Trying Samaria in July–August", desc: "4,000+ people enter the gorge daily in peak summer — it becomes a queue. The gorge is best in April–June and September–October when it's cooler and emptier. Summer hikers get heat exhaustion regularly.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🍯", title: "Thyme Honey from the Mountain Villages", desc: "Cretan thyme honey is the best honey in the world — bees feed on wild mountain thyme. Buy it directly from producers in Elos or Agia Triada villages. A 450g jar costs €8–12.", color: "bg-amber-50 border-amber-200" },
    { icon: "🏛️", title: "Knossos at 8am vs 11am", desc: "The site opens at 8am. In summer, it's full of tour groups by 10:30am. Go at opening, spend 2 hours exploring the reconstructed frescoes and ancient plumbing system, and leave before the rush.", color: "bg-teal-50 border-teal-200" },
    { icon: "🦞", title: "Eat at Agia Roumeli After the Gorge", desc: "After completing Samaria Gorge, the tiny village of Agia Roumeli (accessible only by boat) has tavernas serving the freshest grilled octopus and fish you'll eat in Greece. Celebrate finishing the gorge here.", color: "bg-green-50 border-green-200" },
    { icon: "🌊", title: "Balos in the Morning, Not Afternoon", desc: "The Balos boat tours arrive at midday filling the lagoon. The dirt road from the Gramvousa peninsula (1 hour hike or 30 min drive) lets you arrive at 9am — alone on the most beautiful beach in Greece.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Do I need a car in Crete?", a: "For seeing the best of Crete — yes. The bus network covers main towns but Balos Lagoon, mountain villages, and the Samaria Gorge approach are only practical with a car. Car rental is €25–35/day including insurance. International driving license not required for Indian drivers at most agencies." },
    { q: "How hard is the Samaria Gorge hike?", a: "Moderate difficulty. The distance is 16km mostly downhill. The main challenge is the length (6–7 hours), the rough terrain in places, and the heat in summer. Proper walking shoes, 2L of water, and an early start are essential. Children aged 8+ can complete it." },
    { q: "How long should I spend in Crete?", a: "5 days is the minimum to cover the best of the island. 7–10 days lets you see both eastern and western Crete (very different characters). 2–3 days only allows Heraklion, Knossos, and Chania without the gorge or remote beaches." },
    { q: "What is Cretan food like?", a: "One of the world's great regional cuisines — olive oil, fresh vegetables, local cheeses (graviera, anthotyros), slow-roasted lamb, fresh fish, dakos barley rusk salad, and the best honey you've ever tasted. Cretans eat late (dinner 9–11pm) and portions are enormous." },
    { q: "Is Crete better than Santorini?", a: "Different experiences. Santorini is all about the dramatic volcanic scenery and romance — better for 2–4 days. Crete is a real destination with archaeology, hiking, local culture, and diverse landscapes — better for 5+ days. Most visitors to Greece choose one, but Crete is almost always the better value." },
  ],
  combineWith: ["athens-3-days", "santorini-4-days", "rome-4-days"],
  relatedSlugs: ["athens-3-days", "santorini-4-days", "amalfi-coast-4-days", "istanbul-5-days"],
  galleryQuery: "crete greece samaria gorge balos lagoon chania venetian harbor",
};

export const metadata: Metadata = {
  title: "Crete in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "5-day Crete guide covering Knossos, Samaria Gorge, Balos Lagoon, Chania old town, mountain villages. Real costs, car rental advice, and the Cretan food you must try.",
  keywords: ["crete itinerary 5 days", "crete travel guide 2026", "samaria gorge guide", "balos lagoon crete", "chania travel guide", "greece crete"],
  openGraph: { title: "Crete in 5 Days: Budget to Luxury 2026", description: "Samaria Gorge, Balos Lagoon, Knossos — real euro costs.", images: [{ url: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=80", width: 1200, height: 630, alt: "Crete Greece coast beach" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Crete in 5 Days (2026)", description: "Samaria Gorge, Balos Lagoon, Knossos guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/crete-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Crete in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Crete 5 Days", item: "https://www.incredibleitinerary.com/blog/crete-5-days" }] },
    { "@type": "TouristDestination", name: "Crete, Greece", description: "Greece's largest island with Minoan ruins at Knossos, Europe's longest gorge at Samaria, and the pink sand lagoon at Balos." },
  ],
};

export default function CretePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
