import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cinque Terre",
  country: "Italy",
  countryFlag: "🇮🇹",
  slug: "cinque-terre-3-days",
  heroQuery: "cinque terre manarola vernazza cliff villages italy",
  heroAlt: "Manarola village clinging to colourful cliffs above the Ligurian Sea, Cinque Terre",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Five villages bolted to vertical cliffs above one of the most photogenic stretches of coastline in the world — Cinque Terre is Italy's most concentrated dose of drama. The Sentiero Azzurro coastal trail stitches the villages together on foot, the fishing boats still go out at dawn, and the focaccia sold from a tiny window in Vernazza has been made the same way for decades. Three days lets you hike the best trails, swim in hidden coves, eat pesto pasta at the source in Genoa's backyard, and watch the sun drop into the Ligurian Sea from the village rooftops.",
  stats: { duration: "3 Days", budgetFrom: "€55", bestMonths: "Apr–Jun or Sep–Oct", airport: "PSA" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Arrival & Manarola" },
    { id: "day2", emoji: "📅", label: "Day 2 — Sentiero Azzurro Hike" },
    { id: "day3", emoji: "📅", label: "Day 3 — Vernazza & Departure" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Italian Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Cinque Terre falls under Italy's Schengen zone. Apply 6–8 weeks before travel. Biometric appointment required."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register at travel-europe.eu before departure)"],
        ["Passport", "Must be valid 3+ months beyond your return date"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to the 90/180 Schengen day limit."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Manarola & Riomaggiore",
          items: [
            "12:00 — Arrive at Pisa Galileo Galilei Airport (PSA) and take the direct train to La Spezia Centrale (1 hour, €8); from La Spezia take the Cinque Terre train to Manarola (20 min, €5 or covered by Cinque Terre Card) — staying in a hostel or guesthouse in Manarola or Riomaggiore costs €20–35/night",
            "14:00 — Buy the Cinque Terre Trekking Card (€7.50/day or €14.50 for 2 days) at any train station — it covers all park trail access; without it, hiking the Sentiero Azzurro trails is technically not permitted and rangers do check",
            "15:00 — Walk the Via dell'Amore (Lover's Lane) between Riomaggiore and Manarola — recently reopened after years of restoration (€5 extra, or included in the premium card); the cliff-cut path above the sea is the most romantic walk in Italy",
            "17:30 — Climb to Manarola's upper vineyards at sunset — free, 15-minute walk from the village centre, and the view down over the coloured houses and harbour is the postcard shot most visitors miss because they stay at sea level",
            "19:30 — Dinner in Riomaggiore: pasta al pesto (fresh basil pesto, the Ligurian original) for €10 at a village trattoria; skip the harbour-front restaurants and go one street back for half the price",
          ],
          cost: "€35–45 (transport, Cinque Terre Card, dinner)",
        },
        {
          day: "Day 2",
          title: "Sentiero Azzurro — Full Coastal Hike",
          items: [
            "07:30 — Start hiking from Monterosso al Mare (take the early train) and hike south: Monterosso to Vernazza (90 min, moderate) — the most dramatic stretch of the Sentiero Azzurro with steep steps and Vernazza's harbour appearing suddenly below a rocky headland",
            "10:30 — Stop in Vernazza for a coffee and focaccia from Ananasso Bar near the harbour — Vernazza's tiny castle tower (€1.50) gives the best overhead view of the village and the trail ahead",
            "11:00 — Hike Vernazza to Corniglia (90 min, challenging — 300 steps to reach Corniglia from its train station) — the most isolated and least-visited village perched on a headland with no harbour; buy a lemon granita from the bar at the top of the steps",
            "13:30 — Lunch in Corniglia: a focaccia sandwich and glass of local Sciacchetrà white wine (€10 total) eaten on the terrace overlooking the sea",
            "15:00 — Train from Corniglia to Manarola (or continue hiking if energy allows, 45 min more): swim from the rocky inlet below Manarola at Nessun Dorma cliff bar — the famous blue water swimming hole costs nothing to use",
            "19:00 — Dinner back in your base village: trofie al pesto (the classic Ligurian pasta shape) and a carafe of local white wine for €14",
          ],
          cost: "€25–35 (Cinque Terre Card, food, one train)",
        },
        {
          day: "Day 3",
          title: "Vernazza, Swim & Departure",
          items: [
            "08:00 — Take the morning train to Vernazza and arrive before the 10am tourist surge — Vernazza's harbour is completely different in the early morning: fishermen returning, bars just opening, the castle catching the first light",
            "09:30 — Swim in Vernazza's harbour (free) — the water is crystal clear in the morning before boats start moving; locals swim from the steps next to the castle",
            "11:00 — Hike the Vernazza to Monterosso trail (90 min, moderate-hard) for the sea views looking back toward the southern villages — this is the hardest trail but has the most dramatic coastal scenery",
            "13:00 — Lunch in Monterosso: focaccia al formaggio (cheese-stuffed focaccia, a Ligurian speciality, €4) and a gelato; Monterosso has the only real sandy beach in Cinque Terre (free section at the north end)",
            "15:30 — Train from Monterosso to La Spezia (20 min) and then to Pisa or your onward destination (1 hour to Pisa, €8)",
          ],
          cost: "€20–30 (transport, food, final swim)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Vernazza Check-In",
          items: [
            "12:00 — Arrive at Pisa Airport and take the train to La Spezia (1 hour, €8); continue to Vernazza by Cinque Terre train (25 min) — check in to a seaview B&B or hotel room in Vernazza (€100–140/night) with harbour views from the terrace",
            "14:00 — Cinque Terre Card for 2 days (€14.50) or the daily card with boat option — buy at the Vernazza station kiosk; it covers all trails and national park access",
            "15:00 — Via dell'Amore walk (Riomaggiore to Manarola, €5) in the afternoon light — the cliff-cut path with the sea 50m below is one of Italy's most spectacular short walks",
            "17:30 — Sunset aperitivo at Nessun Dorma bar above Manarola's harbour (€8 for a Cinque Terre spritz) — the terrace built into the cliff has the most jaw-dropping view in the region; arrive by 5pm to get a seat",
            "19:30 — Dinner at Gambero Rosso in Vernazza (€35/pp) — one of the best restaurants in Cinque Terre; the trofie al pesto and the grilled fresh fish are exceptional; reserve ahead for harbour-view tables",
          ],
          cost: "€160–180 (hotel, transport, card, dinner)",
        },
        {
          day: "Day 2",
          title: "Hike Monterosso to Riomaggiore & Boat Tour",
          items: [
            "07:30 — Morning hike from Monterosso to Vernazza: depart early on the first train and hike in the quiet morning before the tourist trail fills up; this is the most dramatic 90-minute hike on the coast",
            "10:00 — Vernazza for a mid-morning coffee at Bar Belforte in the castle tower; the castle terrace has a harbour view that's genuinely difficult to photograph because it's so good",
            "11:30 — Shared boat trip along the coast (departs Vernazza, €20, 1 hour) — see the villages from the sea, swim in a cove only reachable by boat, and understand the geological scale of the cliffs from the water",
            "14:00 — Lunch at a Manarola restaurant with vine-shaded terrace: pasta with bottarga (cured fish roe) and a glass of local Vermentino white wine (€25/pp)",
            "16:00 — Snorkelling from the rocks below Manarola (rent snorkel gear in La Spezia for €8/day) or swimming at Monterosso's free beach north section",
            "20:00 — Dinner back in Vernazza: the restaurants around the small main piazza serve excellent Ligurian cuisine; try the local focaccia followed by grilled branzino (sea bass) with Ligurian olive oil (€35/pp)",
          ],
          cost: "€130–150 (hotel, boat, meals, swimming)",
        },
        {
          day: "Day 3",
          title: "Corniglia & Departure via Pisa",
          items: [
            "08:00 — Train to Corniglia, the only village not on the sea — a 300-step staircase (Lardarina) climbs from the station to the hilltop village; in the morning mist with the sea on three sides, it feels like a fortress in the clouds",
            "10:00 — Corniglia village walk and the Punto Belvita viewpoint (free, 15-min walk from village centre) — the headland viewpoint looks both north toward Vernazza and south toward Manarola simultaneously; the best landscape photography spot in Cinque Terre",
            "11:30 — Final swim at Guvano beach (accessible by a short tunnel below Corniglia, or by sea kayak) — a secluded pebble beach with extraordinarily clear water; the most private swimming spot in the region",
            "13:30 — Lunch in Corniglia or back in La Spezia before departure: a pesto pasta and a glass of Pigato white wine",
            "15:00 — Train from La Spezia to Pisa (1 hour, €8); if time allows, a 2-hour stop in Pisa for the Leaning Tower (€18 to climb, pre-booking essential)",
          ],
          cost: "€120–140 (transport, Pisa tower if visited, meals)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Helicopter Arrival & Private Villa",
          items: [
            "12:00 — Helicopter transfer from Pisa Airport to a landing pad near La Spezia (€400 for the helicopter, 20 min) — arrive dramatically above the Ligurian cliffs before checking in to a private villa or boutique hotel in Vernazza or Manarola",
            "14:00 — Check in to Hotel Porto Roca in Monterosso (€300–500/night) — the finest hotel in Cinque Terre with private terraces cantilevered above the sea; some rooms have outdoor bathtubs overlooking the Ligurian coast",
            "16:00 — Private boat charter (€200 for 2 hours) along the entire Cinque Terre coastline — swim in sea caves, anchor in hidden coves between the villages, and see the cliffs from the perspective the postcard photographers use",
            "19:00 — Sunset aperitivo at Nessun Dorma with reserved terrace table (hotel concierge can arrange) — Sciacchetrà sweet wine and local focaccia (€20/person)",
            "20:30 — Private dining experience at your hotel or at Gambero Rosso in Vernazza with a pre-arranged chef's tasting menu (€80/pp) featuring Ligurian seafood, pesto, and Cinque Terre wine",
          ],
          cost: "€600–900 (helicopter, hotel, private boat, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Guide Hike & Sea Kayak",
          items: [
            "07:00 — Private hiking guide for the Sentiero Azzurro from Monterosso to Vernazza (€80/hour, 2 hours) — a certified guide explains the terraced viticulture, the geology of the cliffs, and the history of each village while carrying your day bag",
            "10:00 — Private sea kayaking tour from Vernazza (€80/pp, 2 hours) — paddle beneath the cliffs between villages, enter sea caves inaccessible on foot, and stop at a completely isolated swimming cove; depart before the day tour boats arrive",
            "13:00 — Lunch at Il Pirata delle Cinque Terre in Vernazza (€45/pp) — local seafood pasta and the freshest catch; the restaurant is run by twin brothers who have worked the Ligurian coast for decades",
            "15:30 — Afternoon wine and olive oil tasting with a local Cinque Terre winemaker (€60/pp) — the terraced hillside Sciacchetrà vineyards are worked entirely by hand; visiting during harvest (October) means you can participate",
            "20:00 — Private chef dinner at your hotel villa using ingredients bought from the morning's La Spezia market (€120/pp for private chef experience, arrange through hotel concierge)",
          ],
          cost: "€500–700 (hotel, private guide, kayak, wine tasting, private dinner)",
        },
        {
          day: "Day 3",
          title: "Portofino Day Trip & Departure",
          items: [
            "08:00 — Private boat from Monterosso to Portofino (1.5 hours by fast private launch, €250) — combine Cinque Terre with Italy's most glamorous fishing village; only 45 minutes from Cinque Terre by sea",
            "10:00 — Portofino village walk and coffee at a harbourside café (€10 for two coffees — worth every cent for the setting); Castello Brown above the harbour is free to visit with extraordinary coastal views",
            "12:30 — Lunch at Il Pitosforo in Portofino (€80/pp) — Portofino's finest restaurant with a terrace over the bay; the fresh pasta with Ligurian pesto and seafood risotto are the signature dishes",
            "15:00 — Private boat back to La Spezia (1 hour) for the train to Pisa Airport (1 hour, €8); or continue the private boat to Genoa (2 hours by sea) for an international flight from Genoa Airport (GOA)",
          ],
          cost: "€500–700 (private boat, Portofino lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–35 (hostel/guesthouse in villages)",
      food: "€15–20 (focaccia, pesto pasta, street food)",
      transport: "€10–15 (Cinque Terre Card + trains)",
      activities: "€7.50–15 (Cinque Terre Card trails)",
      total: "€55–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€100–140 (seaview B&B or small hotel)",
      food: "€35–50 (village restaurants + wine)",
      transport: "€15–25 (Card + boat trips)",
      activities: "€25–40 (boat tour + swimming + card)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€300–500 (boutique cliff hotel or villa)",
      food: "€100–200 (fine dining + private chef)",
      transport: "€100–300 (private boat + helicopter)",
      activities: "€80–200 (private guide + kayak + winery)",
      total: "€300–500+/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Visiting in July and August",
      desc: "Cinque Terre has become severely overcrowded in summer — the trails now have daily entry limits and the villages can feel like theme parks by 11am. April–June and September–October offer trails you can actually hike without queuing, and swimming conditions are just as good.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚂",
      title: "Not buying the Cinque Terre Card",
      desc: "The Cinque Terre Trekking Card (€7.50/day, €14.50 for 2 days) is mandatory for hiking the Sentiero Azzurro trails — rangers check it on the path. It also includes ecological messaging and trail maintenance funds. Without it, you're technically trespassing and can be fined.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Trying to visit all 5 villages in one day trip",
      desc: "Day trippers from Florence or Rome try to 'do' all five villages in a single day — they spend 20 minutes in each village and understand nothing. Staying overnight means you experience the villages after the day-tripper trains leave at 6pm and the atmosphere completely transforms.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌊",
      title: "Missing the hiking trails",
      desc: "Most visitors take the train between villages and miss why Cinque Terre is special — the cliff-top paths with sea views 100m below, the terraced vineyards, and the sudden appearance of each village from above. Even the one easy section (Via dell'Amore) is worth it for the cliff-face scenery.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍴",
      title: "Not eating pesto pasta immediately",
      desc: "Liguria invented pesto and the version you eat here — made with Genovese basil DOP, Ligurian olive oil, and pine nuts — bears no resemblance to the jarred sauce. Order trofie al pesto in any village trattoria for €9–12. It is one of the fundamental Italian food experiences.",
      color: "bg-green-50 border-green-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Buy the Cinque Terre Card — it's mandatory, not optional",
      desc: "The Cinque Terre Trekking Card (€7.50/day) is required to hike any trail in the national park. The 2-day card at €14.50 is the best value for a 3-day trip. The card with train travel (€16/day) adds unlimited trains between the 5 villages. Buy at La Spezia or any village station. Book guided hikes at https://www.getyourguide.com/s/?q=Cinque+Terre&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🕖",
      title: "Arrive in any village before 9am or after 5pm",
      desc: "The day-tripper trains from Florence and Genoa arrive between 9am and 3pm, filling the villages. The same streets that are shoulder-to-shoulder at noon are quiet and photographic at 7am. Staying overnight in any of the five villages automatically gives you these golden hours.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍇",
      title: "Try Sciacchetrà wine — it only exists here",
      desc: "Sciacchetrà is a rare sweet amber wine made from partially dried Bosco, Albarola, and Vermentino grapes grown on the steep Cinque Terre terraces. It's produced in tiny quantities and virtually impossible to find outside Liguria. A 100ml glass costs €6–10 — sip it with anchovies or aged local cheese.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🚢",
      title: "Take the ferry between villages at least once",
      desc: "The Cinque Terre seasonal ferry runs between all five villages and La Spezia. A single hop costs €8 and a day pass is €30. The ferry view of each village from the sea — the only way to see the full cliff scale — is completely different from the train view. Worth doing on Day 2 at minimum.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Which is the best village to stay in for Cinque Terre?",
      a: "Vernazza is widely considered the most beautiful village with the best restaurants and a natural harbour for swimming. Manarola has the best sunset viewpoint and is slightly less crowded. Monterosso is the largest, has the only real sandy beach, and the most accommodation options. Budget travellers often find better value in Riomaggiore, which has the most budget guesthouses. Avoid Corniglia if you have heavy luggage — there's no direct sea access and 300 steps from the train station.",
    },
    {
      q: "Is the Sentiero Azzurro coastal trail open?",
      a: "Trail conditions change frequently due to landslides and storm damage. As of 2026, Via dell'Amore (Riomaggiore–Manarola) is fully open after its 2024 restoration. The Monterosso–Vernazza and Vernazza–Corniglia sections are the most consistently open and most hiked. Always check the official Cinque Terre National Park website (parconazionale5terre.it) before your trip as sections can close without notice after heavy rain.",
    },
    {
      q: "How do I get to Cinque Terre from Pisa?",
      a: "Take the train from Pisa Centrale to La Spezia Centrale (1 hour, €8 on regional Trenitalia). From La Spezia, buy the Cinque Terre Card and take the Cinque Terre train to your village (15–25 minutes, covered by the Card with train option at €16/day). Riomaggiore is the first village from La Spezia, Monterosso the last.",
    },
    {
      q: "Can I visit Cinque Terre in 1 day from Florence?",
      a: "Technically yes — the train from Florence Santa Maria Novella to La Spezia takes 2.5 hours (€20). You'd arrive at 11am and need to leave by 5pm for 6 hours in the region. You can see 2–3 villages by train, do a 1-hour hike, and swim briefly. But staying overnight completely transforms the experience — the villages after 6pm when day-trippers leave feel like a different destination.",
    },
  ],
  combineWith: ["venice-4-days", "florence-4-days", "rome-5-days"],
  relatedSlugs: ["venice-4-days", "florence-4-days", "rome-5-days", "sicily-7-days"],
  galleryQuery: "cinque terre vernazza manarola cliffs ligurian sea italy",
};

export const metadata: Metadata = {
  title: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Cinque Terre itinerary — hiking the Sentiero Azzurro, swimming in cliff coves, pesto pasta at the source, and all 5 villages. Budget €55/day to luxury cliff hotels.",
  keywords: [
    "Cinque Terre itinerary",
    "Cinque Terre 3 days",
    "Cinque Terre travel guide 2026",
    "Sentiero Azzurro hike",
    "Cinque Terre Card",
    "Vernazza Manarola",
    "Cinque Terre budget travel",
    "Ligurian coast Italy",
    "Cinque Terre visa Indian passport",
  ],
  openGraph: {
    title: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Five cliff villages, the Sentiero Azzurro coastal trail, pesto pasta, and Ligurian swimming coves — Cinque Terre in 3 days from €55/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cinque-terre-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cinque Terre in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/cinque-terre-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cinque Terre",
      description:
        "Cinque Terre, Liguria, Italy — five cliff-side fishing villages, the Sentiero Azzurro coastal trail, pesto pasta, and the Ligurian Sea.",
      geo: { "@type": "GeoCoordinates", latitude: 44.1277, longitude: 9.7073 },
    },
  ],
};

export default function CinqueTerrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
