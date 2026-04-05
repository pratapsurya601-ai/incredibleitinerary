import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Oslo",
  country: "Norway",
  countryFlag: "🇳🇴",
  slug: "oslo-3-days",
  heroQuery: "oslo norway city hall waterfront fjord",
  heroAlt: "Oslo waterfront at golden hour with the Oslofjord and city skyline",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Oslo punches far above its weight for a capital of just 700,000 people — a world-class Viking Ship Museum, the haunting Munch canvases, Vigeland's extraordinary outdoor sculpture park, and an Aker Brygge waterfront that rivals Copenhagen. Three days is enough to kayak the inner Oslofjord in the morning, lunch on open-faced smorbrод sandwiches in a covered market, and end the evening at a cosy Frognerseteren log cabin restaurant with pine forest views. Norway is expensive, but Oslo rewards every krone spent.",
  stats: {
    duration: "3 Days",
    budgetFrom: "NOK 700",
    bestMonths: "Jun–Aug or Dec",
    airport: "OSL",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Vikings & Waterfront" },
    { id: "day2", emoji: "📅", label: "Day 2 — Munch & Vigeland" },
    { id: "day3", emoji: "📅", label: "Day 3 — Fjord & Forest" },
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
        ["Fee", "NOK 900 (approx. €80)"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Norwegian Embassy or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Norway is Schengen but not EU — apply well in advance. Biometric appointment required."],
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
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free but subject to 90/180 Schengen rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "NOK 700–900/day",
      days: [
        {
          day: "Day 1",
          title: "Viking Ship Museum & Aker Brygge",
          items: [
            "10:00 — Take the T-bane (Oslo Metro, line 30) to Majorstuen, then bus 30 to Bygdoy peninsula — the Viking Ship Museum houses three intact 9th-century longships; the Oseberg ship is the most ornate burial vessel ever excavated in Scandinavia",
            "12:30 — Walk along the Bygdoy waterfront to the Norwegian Folk Museum — the open-air collection of 160 historic buildings includes a 12th-century stave church; entry NOK 180 but free with Oslo Pass",
            "14:30 — Ferry back to Aker Brygge waterfront (NOK 35 per ride, also covered by the transit day pass) — grab a bench by the dock and watch the harbour scene; the City Hall and Opera House are both visible from here",
            "16:00 — Matstreet food hall in Vulkan neighbourhood — smorbrod open sandwiches (prawn, smoked salmon, or beef tartare) for NOK 85–130; this is the authentic Norwegian lunch tradition brought to dinner",
            "18:00 — Walk the Aker Brygge promenade and Tjuvholmen sculpture park, both free — the Astrup Fearnley Museum of Modern Art exterior alone is worth the walk along the waterfront",
          ],
          cost: "NOK 350–500 (transit day pass NOK 130, food, museum)",
        },
        {
          day: "Day 2",
          title: "Munch Museum & Vigeland Sculpture Park",
          items: [
            "09:30 — Munch Museum (Munchmuseet) at Bjorvika opened in 2021 and holds the world's largest Edvard Munch collection — The Scream, The Madonna, and 26,000 other works; entry NOK 160, free under 18",
            "12:00 — Walk to Gronland neighbourhood for cheap and excellent lunch — kebab wraps for NOK 80, or a warm bowl of Norwegian fish soup at a cafe for NOK 120; this is Oslo's most multicultural and affordable eating district",
            "14:00 — Tram to Vigeland Sculpture Park in Frogner (free to enter, always open) — 212 granite and bronze sculptures by Gustav Vigeland spread across 80 acres; the Monolith of 121 human figures is one of the most remarkable single sculptures in the world",
            "17:00 — Frogner Park evening walk — the park is even quieter at dusk; the reflecting pool and bridge lined with intertwined figures are best photographed in the low light",
            "19:00 — Dinner at a neighbourhood restaurant in Majorstuen: baked cod with root vegetables for NOK 195, or a burger at a budget spot for NOK 150",
          ],
          cost: "NOK 400–550 (museum, tram, food)",
        },
        {
          day: "Day 3",
          title: "Fjord Kayaking & Departure",
          items: [
            "08:30 — Rent a kayak from Bjorvika or Tjuvholmen marina (NOK 250–350 for 2 hours) — paddling the inner Oslofjord with views of the Opera House and Akershus Fortress is the most memorable free-form activity in Oslo",
            "11:00 — Return kayak and walk to the Oslo Opera House rooftop — the sloping marble roof is a public plaza; entry is free and the views over the fjord and city are panoramic",
            "12:30 — Lunch at the Mathallen Oslo food hall in Vulkan — one of Scandinavia's best covered markets with 30+ vendors; cinnamon bun (bolle) for NOK 40 and a hot dish for NOK 110–150",
            "14:30 — Walk Grunerlokka neighbourhood — Oslo's creative district with vintage shops, independent cafes, and street art along the Akerselva river; free afternoon stroll",
            "16:30 — Airport Express train (Flytoget) from Oslo Central Station to OSL airport — NOK 230, departs every 10 minutes, 19-minute journey",
          ],
          cost: "NOK 600–800 (kayak, food, airport train)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "NOK 1,600–2,200/day",
      days: [
        {
          day: "Day 1",
          title: "Bygdoy Museums & Waterfront Dinner",
          items: [
            "10:00 — Check in to a 3-star hotel near Majorstuen or Aker Brygge (NOK 1,100–1,600/night) — Majorstuen gives walking access to Vigeland Park and excellent restaurant options",
            "11:00 — Oslo Pass (NOK 595 for 48 hours) covers all public transport plus entry to 30+ museums including the Viking Ship Museum, Munch Museum, and Bygdoy collections — essential value for mid-range visitors",
            "11:30 — Bygdoy peninsula: Viking Ship Museum followed by the Fram Museum (Roald Amundsen's polar expedition ship, extraordinary exhibit) — both covered by Oslo Pass",
            "14:30 — Return by ferry to Aker Brygge and walk the Tjuvholmen waterfront to Astrup Fearnley Museum (entry NOK 160 or included with some passes)",
            "19:00 — Dinner at Aker Brygge: fresh shrimp from the harbourside boat vendors (buy a bag for NOK 200–250, eat on the dock) or a proper restaurant meal for NOK 350–450/pp",
          ],
          cost: "NOK 1,800–2,200 (hotel, Oslo Pass, dinner)",
        },
        {
          day: "Day 2",
          title: "Munch, Vigeland & Norwegian Food Tour",
          items: [
            "09:30 — Munch Museum guided tour (NOK 160 entry, guided tours in English at 11:00 and 14:00 for NOK 80 extra) — the guide reveals the stories behind The Scream's contested theft and recovery",
            "13:00 — Lunch at Maaemo-adjacent neighbourhood restaurant in Bjørvika — new Nordic cuisine bistro lunch menus run NOK 395–595 for 3 courses; exceptional value for the calibre",
            "15:00 — Vigeland Sculpture Park deep-dive with the on-site Vigeland Museum (NOK 100) — the museum shows the full creative process: sketches, models, and the casting of the Monolith",
            "18:00 — Smorbrod dinner at Palmen Restaurant in Grand Hotel (NOK 280–350/pp) — Norway's most famous open-sandwich restaurant, where Henrik Ibsen had his regular table for the last years of his life",
            "20:30 — Evening walk along Karl Johans Gate, Oslo's main boulevard, past the Royal Palace and National Theatre",
          ],
          cost: "NOK 1,700–2,000 (hotel, museums, meals)",
        },
        {
          day: "Day 3",
          title: "Fjord Kayaking, Forest Cabin & Departure",
          items: [
            "08:00 — Guided kayak tour of the inner Oslofjord (2.5 hours, NOK 695 including equipment) — guided tours reach the islands of Hovedoya and Nakholmen not accessible on solo rental routes",
            "11:30 — Holmenkollen ski jump observation deck (NOK 175) — ride the T-bane line 1 to the end of the line for panoramic views over the entire city and fjord; the jump is 67 metres high",
            "14:00 — Frognerseteren log cabin restaurant (NOK 250–350 for a traditional Norwegian lunch) — a 19th-century log building at the edge of Nordmarka forest, reached by tram line 1 from the city; the apple cake is legendary",
            "17:00 — Return to city for luggage and take Flytoget airport express (NOK 230) or T-bane to OSL",
          ],
          cost: "NOK 1,600–1,900 (kayak tour, museums, cabin lunch, airport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "NOK 5,000–9,000/day",
      days: [
        {
          day: "Day 1",
          title: "Private Museum Tour & Harbour Dinner",
          items: [
            "12:00 — Check in to The Thief hotel on Tjuvholmen island (NOK 3,500–6,000/night) — the design hotel houses a private art collection and the rooms have direct views across the Oslofjord toward Akershus Fortress",
            "14:00 — Private guided tour of the Viking Ship Museum (2 hours, NOK 2,500 for a private Egyptologist-archaeologist guide) — learn about Norse burial rituals, the Oseberg queen's identity, and the ships' navigation technology in depth",
            "17:00 — Astrup Fearnley Museum private collection viewing followed by champagne on The Thief terrace",
            "20:00 — Dinner at Maaemo (3 Michelin stars, NOK 3,500–4,500/pp) — Norway's most celebrated restaurant serves a 20-course tasting menu of Norwegian landscapes on a plate; book 2–3 months ahead",
          ],
          cost: "NOK 8,000–12,000 (hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Fjord Sailing & Nordic Spa",
          items: [
            "09:00 — Private sailing charter on the Oslofjord (half-day, NOK 6,000–8,000 for up to 6 people) — a skipper takes you past the archipelago islands of Langoyene and Bleikoya with champagne and smoked salmon aboard",
            "13:00 — Lunch at Statholdergaarden (1 Michelin star) for a leisurely 4-course Norwegian tasting menu (NOK 1,200/pp) — housed in a 17th-century merchant mansion in the old city",
            "16:00 — KOK Oslo rooftop sauna and cold plunge on the Oslofjord (NOK 800/session) — the Scandinavian wellness ritual of heat, cold water, and open-air relaxation with fjord views",
            "20:00 — Private chef dinner in The Thief suite arranged by concierge (NOK 4,000–6,000) — a personal chef prepares a Norwegian ingredients tasting menu with wine pairing in your suite",
          ],
          cost: "NOK 10,000–15,000 (sailing, meals, spa, private chef)",
        },
        {
          day: "Day 3",
          title: "Holmenkollen, Forest & VIP Departure",
          items: [
            "09:00 — Private helicopter tour over Oslo and the Oslofjord (30 minutes, NOK 8,000) — see the city, the fjord islands, and the forest from above; some operators fly over the Vigeland Park sculpture rooftop",
            "12:00 — Frognerseteren log cabin private dining room (book in advance, NOK 1,500/pp for set menu) — a 19th-century royal hunting lodge at the forest edge serving reindeer, elk, and cloudberry desserts",
            "15:00 — Norwegian Design shopping at Aker Brygge and Tjuvholmen: Dale of Norway knitwear (NOK 2,000+), hand-blown glass from Norwegian artisans, and Helly Hansen flagship",
            "18:00 — Private transfer to OSL airport in a Tesla S (NOK 1,500) — hotel concierge arranges; Norwegian chauffeur service includes complimentary snacks and newspapers",
          ],
          cost: "NOK 8,000–12,000 (helicopter, lunch, shopping, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Backpacker",
      accommodation: "NOK 180–250 (hostel dorm, 6–8 bed)",
      food: "NOK 100–160 (self-catering + supermarket)",
      transport: "NOK 42 (single-zone single trips)",
      activities: "NOK 0–80 (free parks + one museum)",
      total: "NOK 380–550/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "NOK 250–450 (hostel private or budget guesthouse)",
      food: "NOK 200–300 (food halls, markets, self-catering)",
      transport: "NOK 130 (day pass covers all transit)",
      activities: "NOK 160–300 (select museums)",
      total: "NOK 700–900/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "NOK 1,100–1,600 (3-star hotel)",
      food: "NOK 450–650 (restaurants + food halls)",
      transport: "NOK 200–400 (day passes + Oslo Pass)",
      activities: "NOK 400–600 (Oslo Pass museums + tours)",
      total: "NOK 1,600–2,200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "NOK 3,500–6,000 (The Thief or Grand Hotel)",
      food: "NOK 2,000–4,500 (Michelin + fine dining)",
      transport: "NOK 500–1,500 (private car or helicopter)",
      activities: "NOK 2,000–5,000 (private tours, sailing, spa)",
      total: "NOK 5,000–9,000+/day",
    },
    {
      tier: "👑 Ultra-Luxury",
      accommodation: "NOK 8,000–15,000 (penthouse suite)",
      food: "NOK 5,000–10,000 (private chef + Maaemo tasting)",
      transport: "NOK 2,000–8,000 (helicopter + private yacht)",
      activities: "NOK 5,000–12,000 (private Arctic charter)",
      total: "NOK 15,000–30,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "💳",
      title: "Not buying the Oslo Pass early",
      desc: "The Oslo Pass (NOK 595/48h) covers unlimited public transport plus entry to 30+ museums. Without it, just two museum visits plus transit passes cost more. Buy it online before arrival to save time at ticket counters.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Visiting in January or February without a plan",
      desc: "Oslo in winter is dark (only 6 hours of daylight) and cold (-5 to -10C). Unless you are there for the Christmas markets or skiing at Holmenkollen, June to August gives 18+ hours of daylight and outdoor life on the fjord.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Eating at tourist restaurants near the harbour",
      desc: "Aker Brygge restaurants charge NOK 350–500 for a main course. Walk 10 minutes to Vulkan, Grunerlokka, or Gronland and get the same quality for 40% less. Mathallen food hall is the best value gourmet eating in Oslo.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Skipping the Bygdoy peninsula",
      desc: "Most visitors rush to Vigeland Park but miss the Bygdoy museums entirely. The Viking Ship Museum and Fram Museum together require 3 hours and are among the best history museums in Northern Europe. Ferry from Aker Brygge runs every 30 minutes in summer.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏔️",
      title: "Not going to Holmenkollen or Frognerseteren",
      desc: "The T-bane line 1 to the end gives you the ski jump view, forest walks, and the Frognerseteren log cabin restaurant. Most tourists stay in the city centre and miss the forested hillside that Osloites escape to every weekend.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🛶",
      title: "Kayak the Oslofjord for a unique city perspective",
      desc: "Paddling past the Opera House, Akershus Fortress, and Aker Brygge from water level is completely different from walking the waterfront. Rentals from NOK 250 for 2 hours. Book guided fjord kayak tours at https://www.getyourguide.com/s/?q=Oslo+kayak&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥪",
      title: "Order smorbrod at a proper smorbrod restaurant",
      desc: "The Norwegian open sandwich tradition (smorbrod, pronounced smer-bruh) involves artfully arranged toppings on dense rye bread. Prawn, gravlax, roast beef, and egg varieties exist. Palmen at Grand Hotel and Aker Brygge market stalls are the best introductions.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Use the T-bane metro to reach the forest in minutes",
      desc: "Oslo's T-bane lines 1–6 are some of the world's most scenic urban metro lines, climbing into the Nordmarka forest within 20 minutes of the city centre. Line 1 to Frognerseteren takes you from urban pavement to pine forest trails in 30 minutes for NOK 42.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎫",
      title: "Buy museum tickets online to skip queues",
      desc: "The Munch Museum and Viking Ship Museum both have timed entry slots that sell out in summer. Book at least 3 days ahead online. The Oslo Pass includes entry but you still need to reserve your time slot. Visit https://www.getyourguide.com/s/?q=Oslo&partner_id=PSZA5UI for guided tour options. Book hotels at https://www.booking.com/city/no/oslo.html?aid=" + process.env.NEXT_PUBLIC_BOOKING_AID,
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How expensive is Oslo and what is the daily budget?",
      a: "Oslo is one of Europe's most expensive cities. Budget travellers staying in hostels and eating at food halls spend NOK 700–900/day (roughly €60–75). Mid-range visitors in a 3-star hotel with restaurant meals spend NOK 1,600–2,200/day. The Oslo Pass at NOK 595 for 48 hours dramatically reduces costs by covering all museums and unlimited public transport.",
    },
    {
      q: "What is the best way to get from Oslo Airport (OSL) to the city?",
      a: "The Flytoget airport express train (NOK 230 one-way) runs every 10 minutes and reaches Oslo Central Station in 19 minutes. The cheaper regional NSB train (NOK 130) takes 22 minutes and runs less frequently. Taxi costs NOK 700–900. The Flytoget is the most reliable option and worth the price difference.",
    },
    {
      q: "What is smorbrod and where should I try it?",
      a: "Smorbrod (literally 'butter bread') is Norway's iconic open-faced sandwich tradition. Dense dark rye bread is topped with combinations of prawns with mayonnaise and dill, smoked salmon with cream cheese, roast beef with remoulade, or herring with onion. The best places to try it in Oslo are Palmen restaurant at the Grand Hotel, Mathallen food hall in Vulkan, and the Aker Brygge harbourside market stalls.",
    },
    {
      q: "Is the Viking Ship Museum worth visiting in Oslo?",
      a: "Absolutely — it is one of the most remarkable museums in the world. The three preserved longships (Oseberg, Gokstad, and Tune) are 1,100 years old and largely intact. The Oseberg ship is decorated with intricate carved wooden panels and was a burial vessel for two high-status women. Entry is NOK 180 or free with the Oslo Pass. Arrive when it opens to avoid school groups. Allow 1.5–2 hours minimum.",
    },
  ],
  combineWith: ["norway-fjords-6-days", "stockholm-4-days", "copenhagen-3-days"],
  relatedSlugs: ["norway-fjords-6-days", "stockholm-4-days", "copenhagen-3-days", "reykjavik-4-days"],
};

export const metadata: Metadata = {
  title: "Oslo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Oslo itinerary — Viking Ship Museum, Munch Museum, Vigeland Park, fjord kayaking, Frognerseteren log cabin, and smorbrod. Budget NOK 700/day to luxury hotels. All visa info included.",
  keywords: [
    "Oslo itinerary",
    "Oslo 3 days",
    "Oslo travel guide 2026",
    "Oslo budget travel",
    "Viking Ship Museum Oslo",
    "Vigeland Sculpture Park",
    "Munch Museum Oslo",
    "Oslo visa Indian passport",
  ],
  openGraph: {
    title: "Oslo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Viking Ship Museum, Munch Museum, Vigeland Park, fjord kayaking, and smorbrod culture — Oslo in 3 days from NOK 700/day to luxury.",
    type: "article",
    url: `${siteUrl}/blog/oslo-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Oslo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Viking Ship Museum, Munch Museum, Vigeland Park, fjord kayaking, and smorbrod culture — Oslo in 3 days from NOK 700/day to luxury.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/oslo-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Oslo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oslo in 3 Days",
          item: `${siteUrl}/blog/oslo-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Oslo",
      description:
        "Oslo, Norway — Viking Ship Museum, Munch Museum, Vigeland Sculpture Park, Aker Brygge waterfront, and fjord kayaking in the capital of Norway.",
      geo: { "@type": "GeoCoordinates", latitude: 59.9139, longitude: 10.7522 },
    },
  ],
};

export default function OsloPage() {
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
