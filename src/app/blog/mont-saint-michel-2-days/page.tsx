import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Mont Saint-Michel",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "mont-saint-michel-2-days",
  heroQuery: "mont saint michel island abbey tidal normandy france mist",
  heroAlt: "Mont Saint-Michel island abbey rising from tidal flats in morning mist Normandy France",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro:
    "Mont Saint-Michel is one of those rare places that genuinely looks like the photographs — a Gothic abbey perched on a rocky island, rising from tidal flats that flood twice daily, connected to the mainland by a causeway that the sea swallows at high tide. Combine it with D-Day beaches for one of France's great road trips.",
  stats: {
    duration: "2 Days",
    budgetFrom: "€40",
    bestMonths: "Apr–Jun, Sep–Oct",
    airport: "RNS (Rennes) or CDG (Paris, 4hr drive)",
  },
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
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Schengen Visa", "France is in the Schengen Zone. Apply at the French embassy or VFS Global centre. Fee: €80. Processing time: 15–45 working days. Apply at least 6–8 weeks before travel."],
        ["Documents Required", "Valid passport (3+ months beyond stay), bank statements (€100/day minimum), hotel bookings, return flight tickets, travel insurance (minimum €30,000 medical coverage), employment letter or proof of ties to home country."],
        ["Duration Allowed", "Up to 90 days within any 180-day period across the entire Schengen area. Days spent in any Schengen country count toward the same 90-day quota."],
        ["Apply via VFS Global", "VFS Global manages French visa applications across India. Book your appointment at vfsglobal.com/France/India. Biometric data collection required for first-time applicants."],
      ],
    },
    {
      flag: "🌍",
      title: "EU, USA, UK, Canada, Australia",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "EU/EEA citizens move freely. US, Canadian, Australian, and New Zealand passport holders get 90 days visa-free in the Schengen area within any 180-day period."],
        ["ETIAS from 2025", "Non-EU travellers (USA, UK, AU, CA) will need ETIAS travel authorisation — €7 fee, valid for 3 years. Apply at travel-europe.europa.eu before your trip."],
        ["UK Passports", "UK citizens no longer have EU freedom of movement. Your passport must be valid for the duration of stay and issued within the last 10 years. Border agents stamp passports on entry and exit."],
        ["Schengen Quota", "Days in France count toward the 90-day Schengen quota shared with all Schengen member states. Track your days if combining with other Schengen countries."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€40–65/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Tidal Walk & Medieval Grand Rue",
          items: [
            "Arrive afternoon — drive or take the bus from Rennes (40 min, €8 one way) or from Paris by train to Pontorson then bus (4.5 hours total)",
            "Check tide tables at ot-montsaintmichel.com before arrival — the highest coefficient tides (80+) are the most spectacular. Time your causeway walk to coincide with the incoming or outgoing tide",
            "Free tidal causeway walk from the car park — the 1.5km causeway gives excellent views of the island approaching from the mainland. The free shuttle bus is also available",
            "Rampart walk (free) — the medieval defensive walls encircle the entire lower island. The views from the ramparts over the bay and tidal flats are exceptional at any tide state",
            "Grand Rue exploration — the main medieval street climbing steeply from the gate to the abbey. Medieval buildings, small chapels, salt and butter shops. Touristy but genuinely atmospheric at off-peak hours (early morning or after 6pm)",
            "Dinner at a crêperie in the village — Normandy is crêpe country. Galettes (savoury buckwheat crêpes) with local Camembert or andouille sausage, €12–18 per person. Mont Thabor crêperie is one of the better options on the island",
            "Stay in Pontorson (€40–70/night, 10km from MSM) or Avranches (€45–75/night, 23km) for dramatically cheaper accommodation than on the island itself",
          ],
          cost: "€40–60 total",
        },
        {
          day: "Day 2",
          title: "Abbey Tour & Bay Crossing on Foot",
          items: [
            "8:30am — Arrive at Mont Saint-Michel before tour groups. The free shuttle runs from 7:30am. The island is radically different in the early morning with few visitors",
            "9:00am — Abbey of Mont Saint-Michel opens (€13 adults, audioguide included). Allow 1.5–2 hours for a thorough visit",
            "Abbey highlights: the Cloisters (12th-century Romanesque garden with delicate double columns), the Refectory (monks' dining hall with extraordinary light), the Crypts beneath the main abbey (supporting the weight of the upper church), the Knights' Hall, and the views from the abbey terrace over the bay",
            "11:30am — Exit before the main tour group crush arrives (typically 10am–3pm on summer days)",
            "12:30pm — Picnic lunch on the ramparts or return to Pontorson for a proper meal at local prices",
            "2:00pm — Bay crossing on foot with a certified guide (€10–15 per person, approximately 2 hours. Book at decouvertebaie.com or guide-baie.com). The crossing reveals the real character of the bay — you understand the quicksand, the horse-speed tidal bore, and why medieval pilgrims died making this journey",
            "5:00pm — Drive 1 hour south to Bayeux for dinner — the city with the 11th-century tapestry depicting the Norman Conquest, and the gateway to the D-Day beaches",
          ],
          cost: "€50–70 total including guide",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Staying On the Island & Sunset Ramparts",
          items: [
            "Check in to Auberge Saint-Pierre or Hôtel La Mère Poulard — the primary accommodation options on the island itself (€150–250/night). Staying on the island means the day-trippers leave by evening, and you have Mont Saint-Michel almost entirely to yourself after 7pm",
            "Check tide tables — plan your arrival to coincide with a high coefficient tide (80+) for the most dramatic sea views",
            "Afternoon: Rampart walk at leisure, Grand Rue without the crowds, the garden of the Maison de la Baie with sea views",
            "Sunset from the ramparts — the light on the tidal flats at dusk is exceptional. In summer, sunset comes after 9pm and the island is lit beautifully after dark",
            "Dinner at La Mère Poulard — the island's most famous restaurant. The signature dish is their legendary omelette (€40–60 per person for the full menu), beaten and cooked over an open wood fire in the traditional manner. Theatrical and genuinely delicious",
          ],
          cost: "€200–280 total",
        },
        {
          day: "Day 2",
          title: "Abbey with Private Guide & D-Day Beaches",
          items: [
            "8:00am — Abbey of Mont Saint-Michel with a private guide (€50–80 for a 2-hour guided tour) — the history of the Benedictine monastery, the three crypts below the church, the construction phases from Carolingian to Flamboyant Gothic over 1,000 years",
            "11:00am — Bay crossing with a naturalist guide — ecological and geological context of one of Europe's largest tidal ranges (up to 14m), the Couesnon River, the Normandy salt marsh ecology",
            "Lunch at La Mère Poulard or the island bistro",
            "2:00pm — Drive 1 hour to D-Day beaches: Omaha Beach (American sector, the most emotionally affecting), the American Cemetery at Colleville-sur-Mer (free, 9,387 white marble crosses overlooking the beach), Utah Beach Museum (€9)",
            "5:30pm — Bayeux: the 11th-century Bayeux Tapestry in its dedicated museum (€10) — 70 metres of embroidered narrative depicting the Norman Conquest of England in 1066",
            "Evening dinner in Bayeux — Normandy cuisine: moules marinières, sole normande, Camembert cheese, Calvados apple brandy",
          ],
          cost: "€160–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€300+/day",
      days: [
        {
          day: "Day 1",
          title: "Hôtel La Mère Poulard & Private Bay Experience",
          items: [
            "Check in to Hôtel La Mère Poulard (€200–350/night) — the only true luxury hotel on Mont Saint-Michel island itself. Historic building, sea-facing rooms, immediate abbey access",
            "Private bay crossing with a geologist specialising in the bay's unique hydrology and the extraordinary tidal mechanics. The Baie du Mont Saint-Michel has one of the largest tidal ranges in the world — up to 14 metres",
            "Helicopter flight over the bay (seasonal availability, weather dependent — contact local operators near Granville or Saint-Malo). Viewing Mont Saint-Michel from the air puts the geography — the vast tidal plain, the causeway, the tiny rocky island — into immediate perspective",
            "Evening on the island after all day-trippers have departed — the nocturnal illumination of the abbey is exceptional. Dinner at La Mère Poulard with the full Normandy tasting menu",
          ],
          cost: "€500–800 total",
        },
        {
          day: "Day 2",
          title: "D-Day with Military Historian Guide",
          items: [
            "Morning: Abbey private guided visit with expert historian — the full monastic history, the political relationship between the abbey and the French monarchy, the role of Mont Saint-Michel during the Hundred Years' War as the only unconquered fortress in Normandy",
            "Drive to D-Day beaches with a specialist military historian guide (Overlord Museum and D-Day Academy offer full-day private tours from €400 for the vehicle)",
            "Pointe du Hoc (US Rangers scaled these cliffs on D-Day morning), Omaha Beach, the American Cemetery at Colleville-sur-Mer, Utah Beach Museum",
            "Lunch at a farm restaurant near Bayeux — Normandy duck, local cider, Camembert de Normandie",
            "Bayeux Tapestry private evening viewing (possible to arrange with the museum for groups)",
          ],
          cost: "€600–900 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–35", food: "€12–18", transport: "€5–15 (bus/car share)", activities: "€15–25", total: "€52–93/day" },
    { tier: "✨ Mid-Range", accommodation: "€100–200", food: "€35–60", transport: "€15–30", activities: "€30–60", total: "€180–350/day" },
    { tier: "💎 Luxury", accommodation: "€250–400", food: "€80–150", transport: "€50–100", activities: "€100–200", total: "€480–850/day" },
  ],
  mistakes: [
    {
      icon: "🌊",
      title: "Arriving Without Checking Tide Tables",
      desc: "The bay floods twice daily and the spectacle changes completely with the tide. Low tide reveals the vast expanse of sand flats you can walk across. High tide turns the island into a place surrounded by water on all sides. Both are spectacular but completely different experiences. Check the tide chart at ot-montsaintmichel.com before booking. The highest coefficient tides (80+) are most dramatic — these happen approximately every fortnight. Extraordinary tides (100+) are events worth scheduling your entire trip around.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "⏰",
      title: "Arriving at 11am on a Summer Day",
      desc: "Three million people visit Mont Saint-Michel annually — by 11am on a July day there can be 15,000 visitors on a tiny island. The medieval Grand Rue becomes a shoulder-to-shoulder queue. The abbey terrace is a crowd scrum. Arrive at 8am when the abbey opens at 9am and spend your morning there. Leave by noon before the main wave of day-trippers arrives. Or arrive in the late afternoon and stay overnight to experience the island after the crowds depart at 7pm.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating Every Meal on the Island",
      desc: "La Mère Poulard omelettes are famous and worth the experience — but €40+ for an omelette is a choice, not a necessity. Every restaurant on the island operates on tourist pricing. The crêperies are good value by island standards (€12–18) but still twice mainland prices. Eat dinner in Pontorson or Avranches — excellent Normandy restaurants, local prices, and you can return to the island the next morning refreshed.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚶",
      title: "Skipping the Bay Crossing",
      desc: "Most visitors walk the causeway and see the island from the outside. The guided bay crossing (€10–15) is the real experience — walking across the tidal sand with a certified guide, understanding the quicksand zones, the horse-speed tidal bore (the tide can overtake a galloping horse in some areas), and why pilgrims risked death to reach the abbey. Never attempt the crossing without a certified guide — the sand looks solid and is not. Book at decouvertebaie.com.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌙",
      title: "Check for High-Coefficient Tides Before Booking",
      desc: "Tide coefficients are published a year in advance at ot-montsaintmichel.com. Coefficients above 80 produce dramatic tidal flooding of the causeway. Coefficients above 100 are extraordinary — these happen a few times a year and the sight of the full bay surrounding the island is unlike anything else in Europe. If you have schedule flexibility, look at the annual tide table and plan around a coefficient of 90+.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Mont Saint-Michel Is Most Magical at Dawn and Dusk",
      desc: "Daytime crowds thin dramatically after 6pm in summer, and the abbey is floodlit at night with a golden light that makes the island look genuinely otherworldly. If you can stay overnight on the island, do it — the cost difference versus a mainland hotel is significant, but waking at 6am to walk empty ramparts with the tide coming in is one of France's great travel experiences.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚌",
      title: "The Shuttle Bus Is Free — But Walk the Causeway",
      desc: "The shuttle bus from the car park to the island is free (included in the €13 parking fee for cars). But the 1.5km causeway walk is far more atmospheric — you approach the island slowly, the scale changes as you near it, and the tidal flats on either side give the crossing its proper sense of drama. Walk one way, take the shuttle back if tired.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🗺️",
      title: "Combine with D-Day Beaches for France's Best Road Trip",
      desc: "Mont Saint-Michel and the D-Day beaches form one of France's great 3–4 day road trips, easily driven from Paris (4 hours) or Rennes (1 hour). Add Bayeux (the 11th-century tapestry), the American Cemetery at Colleville-sur-Mer, Pointe du Hoc, and Caen's D-Day Memorial Museum. The juxtaposition of medieval pilgrimage site and 20th-century battlefield creates a remarkable historical journey through Normandy.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "Is Mont Saint-Michel worth visiting?",
      a: "Unambiguously yes — it's one of the world's genuinely great sights and it delivers on its photographs. The key variables are tide timing (check coefficient tables), time of day (early morning or evening, not midday in summer), and whether you go beyond the causeway to do the bay crossing. Get those three things right and it's exceptional.",
    },
    {
      q: "Can I walk across the bay to Mont Saint-Michel?",
      a: "Yes, but only with a certified guide. The bay crossing takes approximately 2 hours and crosses genuine quicksand zones — the sand surface looks solid but can trap you instantly in certain areas. The tidal bore can also move faster than a person can run. Certified guides from Découverte de la Baie (decouvertebaie.com) or Guide de la Baie (guide-baie.com) cost €10–15 per person. With a guide it's completely safe and one of the best things you can do in Normandy.",
    },
    {
      q: "How long does the Abbey tour take?",
      a: "1.5–2 hours at a relaxed pace. The audioguide (included in the €13 ticket) is excellent. Focus on: the Cloister garden (12th-century Romanesque colonnade), the Refectory with its remarkable natural lighting, the Crypts below the main abbey that support the entire weight of the church above, and the Knights' Hall. The views from the abbey terrace over the bay are part of the visit.",
    },
    {
      q: "Where to stay — on the island or mainland?",
      a: "On the island for atmosphere: the two main options are Auberge Saint-Pierre and Hôtel La Mère Poulard, both €150–350/night. The major advantage is having the island to yourself after 7pm when day-trippers leave. Mainland (Pontorson or Avranches) for budget: €50–80/night, 15–20 minutes by bus or car. Most visitors stay mainland and day-trip. If your budget allows, one night on the island is worth it.",
    },
    {
      q: "What is the best time of year to visit Mont Saint-Michel?",
      a: "April–June and September–October offer the best combination of good weather, manageable crowds, and clear visibility across the bay. July–August is peak season — still spectacular but very crowded. December–January is quiet, cold, and dramatically atmospheric with almost no tourists. Winter storms produce extraordinary tides and mist effects that most visitors never see.",
    },
  ],
  combineWith: ["paris-5-days", "nice-3-days", "london-4-days"],
  relatedSlugs: ["paris-5-days", "bordeaux-3-days", "london-4-days", "barcelona-4-days"],
  galleryQuery: "mont saint michel abbey normandy tidal island france",
};

export const metadata: Metadata = {
  title: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
  description:
    "Mont Saint-Michel guide — tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. Combined with D-Day beaches road trip. Real costs.",
  keywords: [
    "mont saint michel itinerary",
    "mont saint michel guide 2026",
    "bay crossing mont saint michel",
    "normandy travel guide",
    "france travel guide",
    "d-day beaches guide",
  ],
  openGraph: {
    title: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
    description:
      "Tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. D-Day beaches road trip combination. Real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mont Saint-Michel island abbey rising from tidal flats in morning mist Normandy France",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mont Saint-Michel", "Normandy", "France", "Travel", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mont Saint-Michel in 2 Days: Tides, Abbey & Bay Crossing (2026)",
    description: "Tide timing, abbey guide, bay crossing on foot — real costs and D-Day road trip advice.",
    images: ["https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days#article",
      headline: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
      description:
        "Mont Saint-Michel guide — tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. Combined with D-Day beaches road trip. Real costs.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
      },
      keywords:
        "mont saint michel itinerary, mont saint michel guide, bay crossing, normandy travel, d-day beaches, abbey tour, tide tables",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4600,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mont Saint-Michel in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Mont Saint-Michel, Normandy, France",
      description:
        "A UNESCO World Heritage Gothic abbey perched on a tidal island in Normandy, rising from the bay twice daily as the sea floods the surrounding flats.",
      url: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
      touristType: ["Cultural Tourism", "Historical Tourism", "Pilgrimage Tourism", "Nature Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Mont Saint-Michel worth visiting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unambiguously yes. It delivers on its photographs. Get the tide timing right, arrive early or late in the day, and do the bay crossing. Those three things make it exceptional rather than merely impressive.",
          },
        },
        {
          "@type": "Question",
          name: "Can I walk across the bay to Mont Saint-Michel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, only with a certified guide (€10–15). The bay has quicksand zones and tides that move faster than a person can run. With a certified guide from Découverte de la Baie it's completely safe and one of the best experiences in Normandy.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Abbey tour take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1.5–2 hours at a relaxed pace. Focus on the Cloister garden, the Refectory, the Crypts below the main abbey, the Knights' Hall, and the terrace views. Audioguide is included in the €13 ticket.",
          },
        },
        {
          "@type": "Question",
          name: "Where to stay — on the island or mainland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On the island (Hôtel La Mère Poulard or Auberge Saint-Pierre, €150–350/night) for the experience of the island after day-trippers leave. Mainland Pontorson or Avranches (€50–80/night) for budget. One night on the island is worth the premium if your budget allows.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time of year to visit Mont Saint-Michel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "April–June and September–October for good weather and manageable crowds. July–August is peak season — crowded but still spectacular. December–January is quiet, cold, and dramatically atmospheric with extraordinary tides and mist.",
          },
        },
      ],
};

export default function MontSaintMichelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
