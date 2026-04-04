import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Santorini",
  country: "Greece",
  countryFlag: "🇬🇷",
  slug: "santorini-4-days",
  heroQuery: "santorini oia white buildings blue domes caldera sunset greece",
  heroAlt: "Santorini Oia village white buildings blue domed churches caldera sunset Greece",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "13 min read",
  intro: "The most photographed sunset on earth is worth every tourist — if you position yourself at Oia Castle by 5:30pm, not 7pm when the crowds are 10-deep. Add black sand beaches that stay warm after dark, wine grown in volcanic soil with a mineral taste you won't find anywhere else, and cave hotels carved into the caldera cliff.",
  stats: { duration: "4 Days", budgetFrom: "€80", bestMonths: "Apr – Jun, Sep – Oct", airport: "JTR (Santorini/Thira)" },
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
        ["Schengen Visa", "Apply at Greek embassy for Schengen tourist visa. €80 fee, processed in 15–45 days."],
        ["Documents", "Bank statements showing €100/day of stay, travel insurance (min €30,000 coverage), hotel bookings, return tickets."],
        ["Getting There", "Fly direct Athens–Santorini (30 min, €40–120 one way) or take the ferry from Piraeus (7.5 hrs overnight, €40–60 in a cabin)."],
        ["Tip", "Book Santorini accommodation 3–6 months ahead for July–August. April/October are sweet spots — half the price, 40% fewer tourists."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, Canada, Australia, NZ get 90 days visa-free in Schengen zone."],
        ["Best Routes", "Direct flights from London, Amsterdam, Frankfurt, Paris to Santorini in summer. Via Athens year-round."],
        ["Ferry Option", "The 7.5-hour overnight ferry from Athens is a classic experience — book a cabin rather than deck seats."],
        ["Tip", "Santorini airport is tiny — 2 flights can land at the same time. Collect luggage fast, taxi queues build quickly."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€80–130/day",
      days: [
        {
          day: "Day 1",
          title: "Fira Town & Caldera Walk",
          items: [
            "Arrive and check in to hostel or budget studio in Fira (€35–60/night for private room)",
            "Afternoon: Walk the caldera path from Fira to Firostefani and Imerovigli (3km, free, best caldera views)",
            "5:30pm — Sunset from Skaros Rock above Imerovigli — fewer crowds than Oia, equally stunning",
            "7:30pm — Dinner in Fira — gyros or souvlaki for €8, or a taverna with caldera view for €20–30",
            "9:00pm — Walk Fira's main street at night — quieter, cooler, beautiful lights",
          ],
          cost: "€70–90 total",
        },
        {
          day: "Day 2",
          title: "Black Sand Beach & Perissa Village",
          items: [
            "Take the local bus from Fira to Perissa (€2.30, 30 min) — runs every 30–60 min",
            "Morning at Perissa Black Sand Beach — volcanic black sand, warm water, sunbed €10/day optional",
            "Lunch at a beach taverna — fresh fish meze for €15–20",
            "3:00pm — Walk the cliff path to Perivolos beach (20 min, equal beauty, slightly less crowded)",
            "6:00pm — Bus back to Fira. Optional wine tasting at Santo Wines (€20 for 3 wines, caldera views)",
            "8:00pm — Cook your own dinner at the hostel or cheap taverna in Fira",
          ],
          cost: "€50–70 total",
        },
        {
          day: "Day 3",
          title: "Oia Sunset & Akrotiri Ruins",
          items: [
            "9:00am — Bus to Akrotiri Archaeological Site (€16) — the 'Pompeii of the Aegean', Bronze Age city preserved under volcanic ash",
            "11:30am — Akrotiri Red Beach (short walk from ruins) — dramatic red cliff, swimming, €5 sunbed",
            "1:30pm — Bus to Oia (via Fira, €3 total)",
            "2:30pm — Explore Oia on foot — the famous blue domes, art galleries, windmills",
            "5:15pm — Position at Oia Castle for sunset — arrive 45 min early for a good spot",
            "8:00pm — Dinner in Oia (more expensive than Fira — budget €25–35 for a sit-down meal)",
          ],
          cost: "€60–90 total",
        },
        {
          day: "Day 4",
          title: "Volcano Hike & Hot Springs",
          items: [
            "8:30am — Boat tour to Nea Kameni volcano (€20–25) from Fira's old port",
            "Hike to the active crater of Nea Kameni — 45 min up, views of entire caldera",
            "11:00am — Hot springs at Palea Kameni (sulfuric, turns your swimwear orange — wear an old one)",
            "12:30pm — Optional stop at Thirassia island (few tourists, authentic Greek village)",
            "3:00pm — Return to Fira. Afternoon swim at Kamari beach",
            "7:00pm — Farewell sunset cocktail from any caldera-facing café in Fira",
          ],
          cost: "€45–65 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Caldera Views",
          items: [
            "Check in to a caldera-view hotel in Fira or Imerovigli (€100–180/night)",
            "Private wine tasting tour at Domaine Sigalas or Hatzidakis (€45–65 per person)",
            "Sunset from Skaros Rock with a picnic of local cheeses and Assyrtiko wine",
            "Dinner at Koukoumavlos — innovative Greek cuisine",
          ],
          cost: "€200–280 total",
        },
        {
          day: "Day 2",
          title: "Beach Hopping & Boat Tour",
          items: [
            "Morning: Private taxi to Kamari beach (€15 each way) — pebbly black beach, quieter than Perissa",
            "Afternoon: Catamaran sailing tour (€90–120 per person) — hot springs, cliff swim, sunset sail",
            "Evening: Dinner at Selene restaurant, Fira — benchmark Greek fine dining",
          ],
          cost: "€250–320 total",
        },
        {
          day: "Day 3",
          title: "Oia Day & Cooking Class",
          items: [
            "Morning: Cooking class in Oia (€70–90) — make fava spread, tomato fritters, fresh fish",
            "Afternoon: Gallery hopping in Oia, visit Ammoudi Bay for fresh octopus at the harbor tavernas",
            "5:00pm — Best position for Oia sunset at the ruins of the Byzantine castle",
            "Dinner in Oia — worth splurging one night for the views",
          ],
          cost: "€180–250 total",
        },
        {
          day: "Day 4",
          title: "Volcano & Thirassia",
          items: [
            "Private boat charter for volcano, hot springs, and Thirassia (€300–400 for the day boat, split 4–8 people)",
            "Lunch on Thirassia — an island most tourists don't visit, authentic fishing village",
            "Late afternoon swim in caldera water from the boat",
            "Farewell dinner: Metaxy Mas in Exo Gonia — best local taverna on the island away from tourist trap prices",
          ],
          cost: "€200–280 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€500+/day",
      days: [
        {
          day: "Day 1",
          title: "Caldera Cave Suite & Vineyard",
          items: [
            "Check in to Canaves Oia Epitome or Grace Santorini — infinity pools into the caldera",
            "Private vineyard tour and sommelier-led tasting of Assyrtiko whites",
            "Sunset from your private terrace with champagne — better than any public viewpoint",
            "Dinner at Lycabettus restaurant, Oia — fine dining with caldera panorama",
          ],
          cost: "€800–1,200 total",
        },
        {
          day: "Day 2",
          title: "Helicopter Tour & Spa",
          items: [
            "Morning: Helicopter island tour (€400–600 per person for 30 min)",
            "Afternoon: Spa at Canaves Oia — volcanic stone massage, caldera views",
            "Private catamaran sunset sail with chef's seafood spread on board",
          ],
          cost: "€800–1,500 total",
        },
        {
          day: "Days 3–4",
          title: "Private Island & Exclusive Experiences",
          items: [
            "Full-day private yacht charter to surrounding islands and secluded swimming spots (€1,500–3,000)",
            "Private chef dinner on your villa terrace",
            "Exclusive after-hours access to Akrotiri ruins (contact tour operators)",
            "Helicopter transfer to Athens for onward travel",
          ],
          cost: "€1,000–2,500/day",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€30–60", food: "€20–35", transport: "€5–15", activities: "€15–30", total: "€70–140/day" },
    { tier: "✨ Mid-Range", accommodation: "€120–200", food: "€50–100", transport: "€20–40", activities: "€50–100", total: "€240–440/day" },
    { tier: "💎 Luxury", accommodation: "€300–800", food: "€100–300", transport: "€50–200", activities: "€200–600", total: "€650–1,900/day" },
  ],
  mistakes: [
    { icon: "⏰", title: "Arriving at Oia Sunset at 7pm", desc: "The famous Oia sunset in summer is around 8:30pm. By 7pm the castle viewpoint is 10-people deep. Arrive at 5:30pm, claim your spot, and enjoy two hours of light changing over the caldera.", color: "bg-red-50 border-red-200" },
    { icon: "📅", title: "Visiting in July–August", desc: "Santorini in peak summer has 15,000+ tourists per day on a tiny island. Accommodation prices triple. Roads clog. The same island in April or October is half the price with a quarter of the people.", color: "bg-orange-50 border-orange-200" },
    { icon: "🚌", title: "Relying on Buses Without Checking Times", desc: "Buses run every 30–90 min depending on the route. The Fira–Oia bus fills up before it reaches some stops in summer. Check the live tracking app or book a taxi for time-sensitive trips.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🏨", title: "Booking a Non-Caldera Hotel to Save Money", desc: "Santorini has two sides — caldera view (Fira, Oia, Imerovigli) and east coast (Kamari, Perissa). The east is cheaper and great for beach days but you miss the famous views. First-timers should prioritize the caldera side.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🍷", title: "Drink Assyrtiko Wine from the Volcano", desc: "Santorini's volcanic soil produces Assyrtiko — a unique white wine with mineral, citrus, and saline notes unlike any wine in the world. Santo Wines, Domaine Sigalas, and Hatzidakis are the top producers. Bottle costs €15–25 locally.", color: "bg-amber-50 border-amber-200" },
    { icon: "🌋", title: "Akrotiri is Underrated", desc: "Most tourists skip Akrotiri Archaeological Site (the Bronze Age city buried by the same eruption that created the caldera). It's smaller than Pompeii but arguably better preserved — and 95% of the artifacts are still being excavated.", color: "bg-teal-50 border-teal-200" },
    { icon: "🏊", title: "The Hot Springs Turn Swimwear Orange", desc: "The hot springs at Palea Kameni have sulfur that permanently stains light-colored swimwear orange-yellow. Wear dark colors or an old swimsuit you don't care about.", color: "bg-green-50 border-green-200" },
    { icon: "🌅", title: "Skaros Rock for Sunset Without Crowds", desc: "Skaros Rock in Imerovigli has views equal to Oia but with a fraction of the tourists. You can sit on the rock with local wine and watch the same sunset in peace. Takes 15 min to hike up from Imerovigli village.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How many days do you need in Santorini?", a: "4 days is ideal — one day to settle in and explore Fira/caldera walk, one day for beaches, one day for Oia and Akrotiri, one day for the volcano boat tour. 2–3 days feels rushed. 5+ days starts to feel repetitive unless you're truly relaxing." },
    { q: "Is Santorini worth the price?", a: "Yes — for a honeymoon, anniversary, or special trip. For a budget holiday with lots of sightseeing, it's not the right destination. The island's magic is in slowing down, which takes time and costs money in a high-end location." },
    { q: "What's the best area to stay in Santorini?", a: "Oia for romance and sunsets (most expensive). Imerovigli for caldera views without the Oia crowds. Fira for restaurants, nightlife, and convenience. Perissa/Kamari for budget travelers who want beach access." },
    { q: "When is the best time to visit Santorini?", a: "April–June and September–October. Weather is warm (22–28°C), crowds are manageable, prices are lower than peak season, and everything is open. July–August is extremely crowded and hot. November–March many businesses close." },
    { q: "How do I get from Athens to Santorini?", a: "Flying is fastest — 45 min from Athens, flights from €40–120. The overnight ferry from Piraeus (Athens port) takes 7.5 hours and is a classic experience — book a cabin for €40–60 extra for a bed and private bathroom." },
  ],
  combineWith: ["athens-3-days", "crete-5-days", "mykonos-3-days"],
  relatedSlugs: ["athens-3-days", "crete-5-days", "amalfi-coast-4-days", "rome-4-days"],
  galleryQuery: "santorini greece oia blue domes white buildings caldera sunset",
};

export const metadata: Metadata = {
  title: "Santorini in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "4-day Santorini guide with Oia sunset timing secrets, best beaches, volcano tour, wine guide, and how to do it on a budget vs luxury cave hotel. Real costs included.",
  keywords: ["santorini itinerary 4 days", "santorini travel guide 2026", "oia sunset guide", "santorini budget travel", "santorini things to do", "greece island travel"],
  openGraph: { title: "Santorini in 4 Days: Budget to Luxury 2026", description: "Oia sunset timing, volcano tour, wine guide, real euro costs.", images: [{ url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80", width: 1200, height: 630, alt: "Santorini Oia blue domes Greece" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Santorini in 4 Days (2026)", description: "Oia sunset secrets, volcano tour, wine guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/santorini-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Santorini in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Organization", name: "IncredibleItinerary" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Santorini 4 Days", item: "https://www.incredibleitinerary.com/blog/santorini-4-days" }] },
    { "@type": "TouristDestination", name: "Santorini, Greece", description: "Greek island in the Cyclades known for its white cubic architecture, blue-domed churches, caldera views, and volcanic black sand beaches." },
  ],
};

export default function SantoriniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
