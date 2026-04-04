import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Athens",
  country: "Greece",
  countryFlag: "🇬🇷",
  slug: "athens-3-days",
  heroQuery: "athens acropolis parthenon greece ancient hill",
  heroAlt: "Athens Acropolis and Parthenon on rocky hill against blue sky Greece",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "The Acropolis at 8am before tour buses arrive is one of the great travel experiences — standing where democracy was invented, looking down at a city that's been continuously inhabited for 3,400 years. Add Plaka alleyways, rooftop bars with Parthenon views, and souvlaki from the place with the handwritten Greek menu.",
  stats: { duration: "3 Days", budgetFrom: "€35", bestMonths: "Apr – Jun, Sep – Oct", airport: "ATH (Eleftherios Venizelos)" },
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
        ["Schengen Visa", "Greece is in the Schengen Zone. Apply for a Schengen visa at the Greek embassy. Processing: 15–45 days. Fee: €80. Valid for 90 days within 180 days."],
        ["Documents", "Passport valid 3 months beyond stay, bank statements (€100/day), hotel bookings, travel insurance, return tickets, employment letter."],
        ["Duration", "Tourist stay up to 90 days within the Schengen area. Cannot extend — must exit before 90 days."],
        ["Insurance", "Minimum €30,000 medical travel insurance required for Schengen visa application."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, Canada, Australia, New Zealand get 90 days visa-free in the Schengen area."],
        ["ETA (2025)", "UK citizens need the new ETIAS travel authorization from 2025 — €7, valid 3 years. Apply at etias.eu.int."],
        ["Passport Check", "Ensure your passport was issued within the last 10 years and has 6 months validity remaining."],
        ["Tip", "Greece is part of Schengen — days spent in ANY Schengen country count toward your 90-day allowance."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€35–60/day",
      days: [
        {
          day: "Day 1",
          title: "Acropolis & Plaka Old Town",
          items: [
            "7:30am — Arrive at Acropolis ticket office (opens 8am, €30 combined ticket). First 30 min you're nearly alone",
            "9:30am — Parthenon, Erechtheion (Caryatid Porch), Temple of Athena Nike — give 2 hours",
            "11:30am — Acropolis Museum (included in combined ticket) — walk through artifacts that contextualize what you just saw",
            "1:30pm — Souvlaki lunch in Monastiraki — €5–7 per pita from Thanasis or Bairaktaris",
            "3:00pm — Walk through Plaka neighborhood — Ottoman and neoclassical Athens mixed together",
            "5:00pm — Tower of the Winds (Roman Agora, €8) — 2,000 year old marble clock tower",
            "7:00pm — Sunset from Filopappou Hill (free) — better Acropolis view than Lycabettus, half the tourists",
            "9:00pm — Dinner at a Plaka taverna — moussaka and carafe of house wine for €15",
          ],
          cost: "€45–55 total",
        },
        {
          day: "Day 2",
          title: "National Museum & Monastiraki Flea Market",
          items: [
            "9:00am — National Archaeological Museum (€15) — world's best collection of ancient Greek art. Mask of Agamemnon alone is worth the trip",
            "12:00pm — Lunch at Exarchia neighborhood — bohemian, cheap, authentic. Spanakopita from a bakery for €2",
            "2:30pm — Monastiraki Flea Market — every Sunday is a full market, weekdays have permanent stalls",
            "4:00pm — Ancient Agora (€10 or included in combined ticket) — where Socrates walked",
            "6:30pm — Aperitivo hour: Ouzo or tsipouro at a Monastiraki bar (€4–6 a glass, snacks included)",
            "8:00pm — Athens street food: loukoumades (Greek donuts with honey) from the stall near the flea market",
          ],
          cost: "€35–45 total",
        },
        {
          day: "Day 3",
          title: "Cape Sounion Day Trip or Piraeus",
          items: [
            "Option A: Cape Sounion KTEL bus (€7 each way from Pedion Areos terminal) — Temple of Poseidon on a cliff over the Aegean. Byron carved his name in the stone here.",
            "Option B: Athens Riviera — tram from Syntagma (€1.40) to Glyfada beach. Swim, eat fresh fish, return by evening",
            "Option C: Piraeus afternoon — free ferries to the free beaches on Aegina (€20 return ferry, most beautiful day trip from Athens)",
            "Evening: Last dinner at a local restaurant in Psyrri neighborhood (cheaper than Plaka, same food)",
          ],
          cost: "€25–50 depending on option",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–200/day",
      days: [
        {
          day: "Day 1",
          title: "Private Acropolis Tour & Rooftop Dinner",
          items: [
            "8:00am — Private guide for Acropolis (€150 for 2 hours, split between group)",
            "11:00am — Acropolis Museum with audio guide",
            "1:30pm — Lunch at Dionysus Zonar's restaurant — garden tables with Acropolis views",
            "4:00pm — Athens Segway tour of classical sites (€60 per person)",
            "7:30pm — Rooftop dinner at Gb Roof Garden, Hotel Grande Bretagne — Parthenon lit up at night while you eat",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 2",
          title: "Museum Day & Greek Food Experience",
          items: [
            "9:00am — Benaki Museum (€9) — Greek history from prehistoric to modern",
            "11:30am — Athens food tour (€65 per person) — Varvakios Central Market, Monastiraki, Psyrri, tastings included",
            "3:00pm — Cycladic Art Museum (€10) — stunning minimalist marble figures from 3000 BC",
            "7:00pm — Cocktails at A for Athens rooftop bar",
            "9:00pm — Dinner at Kuzina contemporary Greek restaurant",
          ],
          cost: "€130–160 total",
        },
        {
          day: "Day 3",
          title: "Hydra Island Day Trip",
          items: [
            "7:30am — Flying Dolphin hydrofoil from Piraeus to Hydra (€30 each way, 1.5 hrs)",
            "No cars or motorbikes on Hydra — donkeys and walking only",
            "Swim at Vlychos beach, lunch at a harbor taverna, explore the mansions",
            "4:00pm — Return hydrofoil to Piraeus",
            "Evening: Farewell dinner at To Kafeneio in Plaka — traditional Greek wine list",
          ],
          cost: "€80–120 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350+/day",
      days: [
        {
          day: "Day 1",
          title: "Suite with Acropolis View & Private Tour",
          items: [
            "Check in to Hotel Grande Bretagne or Electra Metropolis — Syntagma Square with Acropolis views",
            "Private expert-guided Acropolis tour at opening — no groups, deep historical narrative",
            "Lunch at Hytra — Michelin star, modern Greek cuisine",
            "Afternoon: Benaki Museum private after-hours tour (contact in advance)",
            "Evening: Sunset cocktails at A for Athens, dinner at Spondi (2 Michelin stars)",
          ],
          cost: "€400–600 total",
        },
        {
          day: "Day 2",
          title: "Private Athens & Lavish Dinner",
          items: [
            "Private morning food tour of Athens markets with a chef guide",
            "Afternoon: Spa treatment at Hotel Grande Bretagne",
            "Private sunset photography tour of Filopappou Hill and Acropolis light-up",
            "Dinner at Funky Gourmet (Michelin star) — avant-garde Greek tasting menu",
          ],
          cost: "€350–500 total",
        },
        {
          day: "Day 3",
          title: "Private Yacht to Cape Sounion",
          items: [
            "Full-day private yacht charter to Cape Sounion and surrounding islands (€1,500–2,500 for the boat)",
            "Swim in secluded bays, fresh seafood lunch on board",
            "Stop at Temple of Poseidon for sunset",
            "Return to Piraeus by evening. Farewell dinner at Varoulko Seaside (Michelin star in Mikrolimano harbor)",
          ],
          cost: "€500–800 total (excl. yacht)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€10–20", transport: "€3–8", activities: "€10–20", total: "€43–88/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€30–60", transport: "€15–30", activities: "€20–50", total: "€145–290/day" },
    { tier: "💎 Luxury", accommodation: "€200–500", food: "€80–200", transport: "€30–100", activities: "€100–300", total: "€410–1,100/day" },
  ],
  mistakes: [
    { icon: "🕛", title: "Arriving at Acropolis After 10am", desc: "By 10:30am, tour groups arrive in waves. You'll share the Parthenon with 500 people. The ticket office opens at 8am — be there at 7:45am. The 1.5-hour head start changes the entire experience.", color: "bg-red-50 border-red-200" },
    { icon: "🌡️", title: "Visiting in July–August", desc: "Athens in July hits 37–42°C. The Acropolis has zero shade. April–June and September–October are ideal — warm, not brutal, and 40% fewer tourists.", color: "bg-orange-50 border-orange-200" },
    { icon: "🎭", title: "Skipping the Acropolis Museum", desc: "Most first-timers spend all their time on the hill and rush the museum. The museum has the actual sculptures removed for preservation — the ones on the Parthenon now are replicas. Give it 90 minutes.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🗺️", title: "Over-Scheduling the City", desc: "Athens works best at a slow pace — getting lost in Plaka, sitting at a café for two hours, wandering into a neighborhood church. Three forced tourist sites per day leaves you exhausted and missing the city's soul.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🎟️", title: "Buy the Combined Ticket", desc: "The €30 combined ticket covers the Acropolis, Ancient Agora, Roman Agora, Kerameikos Cemetery, Hadrian's Library, and more — valid for 5 days. Individual tickets add up to €70+.", color: "bg-amber-50 border-amber-200" },
    { icon: "🌃", title: "The Acropolis is Lit Until Midnight", desc: "The Parthenon is illuminated every night until midnight and is visible from dozens of rooftop bars. The Plaka rooftops around Adrianou Street have the best views over cocktails.", color: "bg-teal-50 border-teal-200" },
    { icon: "🚇", title: "Athens Metro is Exceptional", desc: "€1.40 per journey, clean, punctual, air-conditioned — the metro itself has archaeological exhibits on display at Syntagma and Monastiraki stations (artifacts found during construction).", color: "bg-green-50 border-green-200" },
    { icon: "🍋", title: "Order What Locals Order", desc: "Avoid the tourist menus with photos. Ask the waiter what's good today — in Greece, the best dishes are seasonal and change daily. The house wine in a carafe (oinomelo) is almost always excellent and cheap.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How many days do I need in Athens?", a: "3 days is ideal — Acropolis + Acropolis Museum takes a full morning. Day 2 covers the National Archaeological Museum and neighborhood wandering. Day 3 is best used for a day trip to Cape Sounion, Hydra island, or the Athens Riviera beaches." },
    { q: "Is Athens safe?", a: "Athens is generally safe for tourists. The main risks are petty theft in crowded areas (Monastiraki flea market, metro). Keep bags in front, use inside pockets. The Exarchia neighborhood has occasional political protests but is otherwise fine for visitors during the day." },
    { q: "What's the best area to stay in Athens?", a: "Syntagma/Plaka for first-timers (walking distance to all sites). Monastiraki for lively nightlife. Psyrri for a local feel. Koukaki for a quieter, residential neighborhood just south of the Acropolis." },
    { q: "Can I drink tap water in Athens?", a: "Yes — Athens tap water is safe to drink and tastes good. The city has a high-quality water supply. You don't need to buy bottled water." },
    { q: "What Greek foods should I try in Athens?", a: "Souvlaki (grilled meat pita), moussaka (layered eggplant/meat/béchamel), spanakopita (spinach pie), loukoumades (honey donuts), fresh tzatziki, taramasalata, and proper Greek salad with block feta — not crumbled." },
  ],
  combineWith: ["santorini-4-days", "crete-5-days", "istanbul-5-days"],
  relatedSlugs: ["santorini-4-days", "crete-5-days", "rome-4-days", "barcelona-4-days"],
  galleryQuery: "athens greece acropolis parthenon ancient city plaka",
};

export const metadata: Metadata = {
  title: "Athens in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Athens plans with Acropolis timing secrets, real costs in euros, combined ticket guide, and the rooftop bars with Parthenon views nobody tells you about.",
  keywords: ["athens itinerary 3 days", "athens travel guide 2026", "acropolis guide", "athens budget travel", "greece travel guide", "athens things to do"],
  openGraph: { title: "Athens in 3 Days: Budget to Luxury 2026", description: "Acropolis timing secrets, real euro costs, rooftop bar guide.", images: [{ url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80", width: 1200, height: 630, alt: "Athens Acropolis Parthenon Greece" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Athens in 3 Days (2026)", description: "3 plans, Acropolis timing secrets, real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/athens-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Athens in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Organization", name: "IncredibleItinerary" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Athens 3 Days", item: "https://www.incredibleitinerary.com/blog/athens-3-days" }] },
    { "@type": "TouristDestination", name: "Athens, Greece", description: "The cradle of Western civilization, home to the Acropolis, Parthenon, and ancient Agora." },
  ],
};

export default function AthensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
