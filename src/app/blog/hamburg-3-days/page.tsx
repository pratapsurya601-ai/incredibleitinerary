import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Hamburg",
  country: "Germany",
  countryFlag: "🇩🇪",
  slug: "hamburg-3-days",
  heroQuery: "hamburg speicherstadt red brick warehouses canal germany",
  heroAlt: "Hamburg Speicherstadt red brick warehouse district reflected in canals at dusk",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Hamburg is Germany's most underrated city — a harbour metropolis that built its fortune on trade, perfected its reinvention in the Elbphilharmonie and HafenCity, and never forgot how to have a good time on the Reeperbahn. The Speicherstadt warehouse district is the most romantic brick cityscape in Europe; the Sunday Fischmarkt is a chaotic dawn carnival; the Alster lakes give the city a serene Nordic heart; and the world's greatest concert hall rises above it all like a wave frozen in glass. Three days is enough to feel Hamburg properly — the city rewards walkers, cyclists, and curious eaters.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€55",
    bestMonths: "May–Sep",
    airport: "HAM",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Speicherstadt & HafenCity" },
    { id: "day2", emoji: "📅", label: "Day 2 — Elbphilharmonie & Alster" },
    { id: "day3", emoji: "📅", label: "Day 3 — Reeperbahn & Fish Market" },
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
        ["Apply at", "German Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Germany is one of the faster Schengen processors via VFS."],
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
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to 90/180 rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55–80/day",
      days: [
        {
          day: "Day 1",
          title: "Speicherstadt, HafenCity & Harbour Walk",
          items: [
            "10:00 — Arrive Hamburg Hauptbahnhof; buy a Hamburg Card (€13.90/day, covers all public transport and discounts at 150 attractions) — the card pays for itself within 2 rides plus one museum",
            "11:00 — Walk into the Speicherstadt warehouse district via Poggenmühlen Bridge — the largest warehouse complex in the world, built 1883–1927 on timber piles over the Elbe tributary; the UNESCO-listed red brick canyons are best photographed from the canal bridges",
            "12:30 — Lunch at a Speicherstadt café or the Fleetinsel food stalls — currywurst and fries from €5; the Speicherstadt Kaffeerösterei roastery café is excellent for coffee and cake (€6–8)",
            "14:00 — Walk through HafenCity — Europe's largest inner-city urban regeneration project; the architecture ranges from bold new towers to sensitively restored historical warehouses; the waterfront promenade along the Elbe is free and spectacular",
            "16:00 — Miniatur Wunderland (book online, €20) — the world's largest model railway with 15km of track, 1,000+ trains, and photorealistic miniature versions of Hamburg, the US, Scandinavia, and a functioning miniature Hamburg Airport; allow 2.5–3 hours, queues without booking are 90 minutes",
            "19:30 — Dinner at a Schanzenviertel restaurant — the bohemian quarter west of the Alster has the best budget dining in Hamburg; falafel, Vietnamese pho, and Turkish pide all for €8–14",
          ],
          cost: "€55–75 (Hamburg Card, Miniatur Wunderland, food)",
        },
        {
          day: "Day 2",
          title: "Elbphilharmonie Plaza & Alster Lakes",
          items: [
            "09:00 — Elbphilharmonie Plaza (free entry, book timed ticket online at elbphilharmonie.de at least 3 days ahead) — the 37-metre-high public viewing platform wraps around the concert hall exterior; the views across the Elbe and harbour are the finest urban panorama in northern Germany",
            "11:00 — Walk or cycle along the Binnenalster and Außenalster lakefront — Hamburg's twin inner lakes are the green heart of the city; rent a bike from StadtRAD Hamburg (€1.50 to unlock, first 30 min free) and circle the Außenalster (6km, flat, beautiful)",
            "13:00 — Lunch in the Altstadt near Rathausmarkt — Strandperlensoup or a bakery sandwich; the Alsterarkaden shopping arcade by the town hall has excellent affordable food stalls (€8–12)",
            "14:30 — Hamburg Rathaus exterior and Rathausmarkt square — the neo-Renaissance city hall (1897) is one of Germany's grandest; free to walk around, interior tours €5 on weekdays",
            "16:30 — Planten un Blomen park (free) — Hamburg's finest urban park with Japanese gardens, fountains, and open-air concerts in summer; the water-light concert at the central pond runs nightly May–September (free, 10pm)",
            "19:30 — Dinner at a harbour-view restaurant in HafenCity — Störtebeker Elbphilharmonie restaurant has excellent views; main courses €15–22",
          ],
          cost: "€45–65 (bike rental, Rathaus tour, food)",
        },
        {
          day: "Day 3",
          title: "Fish Market Dawn & Reeperbahn",
          items: [
            "07:00 — Hamburg Fischmarkt (Fish Market) at Altona — runs every Sunday 5am–9:30am year-round; a chaotic, loud, magnificent harbour market where fishmongers auction everything from eels to tropical fruit to antiques at full theatrical volume; the fish market hall (Fischauktionshalle) serves breakfast beer and fish rolls from 5am — a Hamburg ritual",
            "09:30 — Walk along the Elbe waterfront from Altona to the Landungsbrücken harbour piers — the finest waterfront promenade in northern Europe; watch container ships, tugboats, and cruise liners navigate the river",
            "11:30 — Hamburg Harbour boat tour (€18, 1 hour) departing from Landungsbrücken — the best way to understand the scale of Europe's third-largest port; commentary explains the history of each dock and warehouse",
            "13:30 — Lunch at the Landungsbrücken fish stalls — fresh Bismarck herring roll (Fischbrötchen) costs €4–6 and is the definitive Hamburg street food; eat standing at the harbour",
            "15:00 — Reeperbahn and St Pauli neighbourhood walk — by day, Hamburg's famous entertainment mile is a fascinating mix of neon-signed clubs, street art, independent boutiques, and cafés; the Beatles lived in Hamburg 1960–62 and the memorial at Grosse Freiheit is excellent",
            "19:00 — Dinner and final evening in the Schanzenviertel — the city's most lively dinner and bar district; budget €20–35 for food and drinks",
          ],
          cost: "€50–70 (boat tour, food, drinks)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Speicherstadt, Design Museums & Harbour Dinner",
          items: [
            "11:00 — Check in to a 4-star hotel in HafenCity or near the Hauptbahnhof (€100–150/night) — 25hours Hotel HafenCity or the Empire Riverside Hotel both have exceptional harbour views and are perfectly positioned for the key sights",
            "13:00 — Speicherstadt walking tour with a local guide (2 hours, €30/person) — the warehouses stored spices, coffee, tea, and rubber from the 1880s until the 1990s; the guide explains which commodities each warehouse held and the social history of the Hamburg merchants",
            "15:30 — Hamburg Museum of Art and Crafts (Museum für Kunst und Gewerbe, €15) — one of Germany's great applied arts museums with exceptional Art Nouveau interiors, Asian decorative arts, and fashion history; allow 2 hours",
            "18:00 — Elbphilharmonie Plaza at golden hour — having booked the free timed ticket in advance; the concert hall glows at sunset",
            "20:30 — Dinner at a HafenCity restaurant with Elbe views — Vlet restaurant in the Speicherstadt or Nil in the Schanzenviertel; PLN 50–75/pp for contemporary German cuisine with excellent local wine selections",
          ],
          cost: "€160–200 (hotel, tour, museum, dinner)",
        },
        {
          day: "Day 2",
          title: "Elbphilharmonie Concert & Alster Sailing",
          items: [
            "10:00 — Elbphilharmonie guided architecture tour (€15, 1.5 hours) — the building's acoustics, the wave-shaped glass facade, and the Grand Hall's 'white skin' ceiling of 10,000 hand-crafted gypsum panels; book 2 weeks ahead",
            "12:30 — Lunch at the Elbphilharmonie Plaza Café — views over the Elbe with continental lunch menu; €25–35/pp",
            "14:30 — Alster boat rental or guided sailing tour (€25–40/hour) — the Binnenalster and Außenalster offer sailing and rowing; Segelschule Pieper offers guided tours with instruction; Hamburg's inner-city sailing is unique in European cities",
            "17:00 — Blankenese neighbourhood by S-Bahn (30 min, €3) — Hamburg's most picturesque suburb climbs a steep hillside above the Elbe; the Treppenviertel (staircase quarter) has 58 public staircases and some of Hamburg's most expensive real estate",
            "20:00 — Elbphilharmonie evening concert (€25–120 depending on programme) — a concert here is a genuine once-in-a-lifetime acoustic experience; book 6–8 weeks ahead via elbphilharmonie.de",
          ],
          cost: "€140–180 (tour, concert, sailing, food)",
        },
        {
          day: "Day 3",
          title: "Fischmarkt, Harbour Cruise & St Pauli",
          items: [
            "07:00 — Hamburg Fischmarkt Sunday with a proper fish breakfast — fish sandwich and a Astra beer (Hamburg's local lager) in the Fischauktionshalle at 6am is a Sunday rite for Hamburgers finishing a Saturday night and early risers alike",
            "10:00 — Private harbour tour by water taxi (€80/group, 90 minutes) — a private boat captain narrates the container terminal, historical docks, and the Elbe's tidal patterns in far more detail than the public tour boats",
            "13:00 — Lunch at Fischereihafen Restaurant — Hamburg's most famous fish restaurant on the Elbe waterfront at Altona; lobster bisque and fresh North Sea plaice from €35–55/pp; reservation needed on weekends",
            "15:30 — Beatles Museum at Reeperbahn and the original Star-Club site — the Hamburg chapter of Beatles history (1960–1962) is rarely covered outside the city; guided walking tour of the key sites (€22, 2 hours)",
            "18:30 — Final dinner at a Schanzenviertel wine bar or the Portugiesenviertel (Portuguese Quarter) near the harbour — Hamburg's oldest immigrant quarter with excellent seafood restaurants from €40–60/pp",
          ],
          cost: "€130–170 (private boat, fish restaurant, tour, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€280–450/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Hotel Arrival & Private Speicherstadt Tour",
          items: [
            "12:00 — Private airport transfer to The Fontenay or Vier Jahreszeiten Hotel on the Binnenalster (€80–120 sedan) — both are Hamburg's grandest properties with Alster lake views; the Fontenay is a contemporary landmark, Vier Jahreszeiten is a 160-year-old grande dame",
            "15:00 — Private guided Speicherstadt tour with a heritage architect (€250, 2 hours) — access to a working spice warehouse with fragrance rooms, plus the private photographic archive of the original merchant families",
            "18:00 — Elbphilharmonie Viewing Plaza and champagne at the bar — the Plaza bar serves Ruinart Champagne by the glass with Elbe views (€18–25/glass)",
            "20:30 — Dinner at The Fontenay's harbour restaurant or Haerlin at Vier Jahreszeiten (2 Michelin stars) — Hamburg's finest table; 8-course tasting menu €185/pp with wine pairing €120/pp additional; reserve 4–6 weeks ahead",
          ],
          cost: "€350–500 (hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Harbour, Elbphilharmonie & Fine Dining",
          items: [
            "09:00 — Private sunrise harbour boat tour by luxury yacht (€400–600/group, 2 hours) — depart from the hotel's private dock; a captain with a maritime history background narrates the Elbe's 1,000-year trading story",
            "12:00 — Elbphilharmonie backstage tour (€80/person, by special arrangement through hotel concierge) — the acoustic shell, the artist green rooms, and the rooftop maintenance walkway unavailable to the public",
            "14:00 — Private sailing on the Außenalster (€150/hour, luxury sloop with skipper) — Hamburg's urban lake sailing is world-class; the skipper can take you under the bridges toward the Binnenalster",
            "20:00 — Dinner at Haerlin Restaurant (2 Michelin stars, Vier Jahreszeiten) — the city's finest kitchen; Elbe salmon carpaccio and North Sea turbot with saffron are signatures; reserve months ahead for weekend tables",
          ],
          cost: "€400–600 (yacht, backstage, sailing, Michelin)",
        },
        {
          day: "Day 3",
          title: "Blankenese, Private Concert & Departure",
          items: [
            "09:00 — Private chauffeur to Blankenese for a walking tour of the Treppenviertel with a local architect (€300 for guide + transfer) — the staircase quarter's villa gardens and Elbe panorama are extraordinary; the guide explains how Hamburg's merchant class built summer retreats here from the 1850s",
            "12:30 — Lunch at Fischereihafen Restaurant — seafood tasting menu €80–100/pp with local Riesling pairing; Elbe view tables must be booked a week ahead",
            "15:00 — Elbphilharmonie afternoon concert in the Kleiner Saal (chamber hall, tickets €40–90) — the smaller hall's acoustics rival Vienna's Musikverein; chamber music and recitals often have better availability than the Grand Hall",
            "20:00 — Farewell dinner at the hotel; private transfer to Hamburg Airport",
          ],
          cost: "€380–550 (private tour, lunch, concert, hotel, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–30 (hostel dorm or budget guesthouse)",
      food: "€15–25 (Schanzenviertel restaurants, fischbrötchen)",
      transport: "€5–14 (Hamburg Card day pass)",
      activities: "€15–25 (Miniatur Wunderland, boat tour)",
      total: "€55–80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€95–150 (4-star hotel, HafenCity or Alster)",
      food: "€40–60 (restaurants, fish markets, wine)",
      transport: "€10–20 (Hamburg Card + taxi)",
      activities: "€35–55 (Elbphilharmonie, guided tours)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–500 (Fontenay, Vier Jahreszeiten)",
      food: "€120–200 (Michelin dining, fine seafood)",
      transport: "€60–120 (private transfers, yacht)",
      activities: "€100–250 (private tours, concerts)",
      total: "€280–450+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€14–22 (Generator Hamburg, A&O hostels)",
      food: "€8–14 (currywurst stalls, Lidl supermarket)",
      transport: "€3–8 (Hamburg Card or bike)",
      activities: "€5–10 (free plazas, park events)",
      total: "€35–55/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€100–180 (apartment rental, Airbnb near Alster)",
      food: "€40–70 (restaurants and supermarket mix)",
      transport: "€15–25 (family Hamburg Card)",
      activities: "€50–90 (Miniatur Wunderland, harbour cruise)",
      total: "€110–170/day",
    },
  ],
  mistakes: [
    {
      icon: "🎰",
      title: "Treating the Reeperbahn as Hamburg's main attraction",
      desc: "The Reeperbahn is worth an afternoon but it is just one small slice of a city that has Speicherstadt, HafenCity, the Alster lakes, Blankenese, and Planten un Blomen. Many visitors over-schedule St Pauli and under-schedule the far more distinctive harbour and warehouse districts.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎭",
      title: "Missing Miniatur Wunderland without booking",
      desc: "Miniatur Wunderland has a 2–3 hour queue without advance tickets in summer and on weekends. Book online at miniatur-wunderland.de at least 3–5 days ahead. The last entry is 6pm and the museum is worth every minute of the 2.5-hour visit — it is genuinely world-class.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Booking Elbphilharmonie Plaza tickets too late",
      desc: "The free Plaza viewing platform tickets release 3 days ahead and are claimed within hours. Check elbphilharmonie.de on the day of release (midnight Hamburg time) and book immediately. Concerts require 6–8 weeks advance booking for premium seats.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🐟",
      title: "Arriving at the Fischmarkt after 8am on Sunday",
      desc: "The Hamburg Fish Market closes at 9:30am sharp on Sundays and the best atmosphere — fish auctions, breakfast beer, live music in the auction hall — happens between 5am and 7:30am. Arriving at 9am means crowds, reduced stalls, and no seating in the hall.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚲",
      title: "Not renting a bike for the Alster circuit",
      desc: "Hamburg is one of Germany's most cycle-friendly cities and the Außenalster circuit (6km, flat, scenic) is far better done by bike than on foot. StadtRAD Hamburg bikes cost €1.50 to unlock with the first 30 minutes free — the full Alster loop takes about 45 minutes.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Buy the Hamburg Card for all public transport",
      desc: "The Hamburg Card (€13.90/day, €38.50/3 days) covers all HVV buses, U-Bahn, S-Bahn, and harbour ferry lines plus discounts at 150+ museums and attractions including 50% off Miniatur Wunderland. Book tours and experiences at https://www.getyourguide.com/s/?q=Hamburg&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐟",
      title: "Go to the Fischmarkt early — really early",
      desc: "The Sunday Fischmarkt at Altona is at its best between 5am and 7am. The fish auction hall serves breakfast beer (Astra Urtyp) and Fischbrötchen (fish rolls) while a live jazz or schlager band plays inside. The outdoor market stalls are piled high with eels, fruit, and antiques. By 8:30am the best stalls are packing up.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌊",
      title: "Take the harbour ferry to experience the port",
      desc: "The HADAG harbour ferry (Line 62, covered by Hamburg Card) runs from Landungsbrücken along the southern Elbe past container terminals, historical shipyards, and the Övelgönne beach. It is a free sightseeing cruise if you have the Hamburg Card. The route from pier 3 to Finkenwerder takes 30 minutes each way.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍺",
      title: "Drink Astra Urtyp — Hamburg's local beer",
      desc: "Hamburg's unofficial civic beer is Astra Urtyp, identifiable by its anchor logo. Order it in any St Pauli or Schanzenviertel bar at €3–4 per 0.5L. The Schanzenviertel has the highest density of independent bars in northern Germany — arrive after 8pm on any night for the full atmosphere.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Hamburg worth visiting for 3 days or should I spend more time?",
      a: "Three days covers Hamburg's main highlights comfortably. The Speicherstadt and HafenCity take a full day, the Elbphilharmonie and Alster lakes fill another, and the Fischmarkt and Reeperbahn complete the third. A 4th or 5th day allows for day trips to Lübeck (Hanseatic city, 45 min by train) or deeper exploration of Blankenese and the Elbe beaches. Hamburg does not need more than 4 days unless you are interested in one of its specialist museums (like the International Maritime Museum).",
    },
    {
      q: "What is the best area to stay in Hamburg?",
      a: "For first-time visitors, the Neustadt or HafenCity areas are ideal — central, walkable to the Speicherstadt and Elbphilharmonie, and well-connected by U-Bahn. The Schanzenviertel is excellent for budget and mid-range travellers who want the nightlife and dining scene on their doorstep. Avoid booking hotels near Hamburg Hauptbahnhof (central station) — the surrounding area is Hamburg's roughest neighbourhood.",
    },
    {
      q: "How do I get cheap Elbphilharmonie concert tickets?",
      a: "The Elbphilharmonie releases unsold tickets at significant discounts 2 weeks before performances, and student/under-30 tickets are available from €10. The Kleiner Saal (small hall) has excellent acoustics and tickets often remain available up to the day of the performance. Lunchtime concerts in the Kleiner Saal are sometimes free. Check elbphilharmonie.de directly rather than resellers.",
    },
    {
      q: "How do I get from Hamburg Airport to the city centre?",
      a: "The S1 S-Bahn train runs from Hamburg Airport (Flughafen) to the city centre (Hauptbahnhof) every 10 minutes, takes 25 minutes, and costs €3.60 with a single ticket or is covered by the Hamburg Card. A taxi from the airport to the centre costs €25–35 and takes 20–35 minutes depending on traffic. There is no direct airport bus service to the main tourist areas.",
    },
  ],
  combineWith: ["berlin-4-days", "copenhagen-3-days", "amsterdam-4-days"],
  relatedSlugs: ["berlin-4-days", "copenhagen-3-days", "amsterdam-4-days", "cologne-3-days"],
  galleryQuery: "hamburg elbphilharmonie harbour germany speicherstadt",
};

export const metadata: Metadata = {
  title: "Hamburg in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Hamburg itinerary — Speicherstadt, Elbphilharmonie, Reeperbahn, Sunday Fischmarkt, HafenCity, and Alster lakes. Budget €55/day to luxury grand hotels. All visa info included.",
  keywords: [
    "Hamburg itinerary",
    "Hamburg 3 days",
    "Hamburg travel guide 2026",
    "Hamburg budget travel",
    "Elbphilharmonie Hamburg",
    "Speicherstadt Hamburg",
    "Hamburg Fischmarkt",
    "Hamburg visa Indian passport",
  ],
  openGraph: {
    title: "Hamburg in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Speicherstadt, Elbphilharmonie, Reeperbahn, Sunday Fischmarkt, HafenCity, and Alster lakes — Hamburg in 3 days from €55/day to luxury lakeside hotels.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/hamburg-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamburg in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Speicherstadt, Elbphilharmonie, Reeperbahn, and Sunday Fischmarkt — Hamburg in 3 days from €55/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hamburg-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hamburg in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Hamburg in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/hamburg-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hamburg",
      description:
        "Hamburg, Germany — the UNESCO Speicherstadt warehouse district, the Elbphilharmonie concert hall, the Sunday Fischmarkt, and HafenCity on the Elbe.",
      geo: { "@type": "GeoCoordinates", latitude: 53.5511, longitude: 9.9937 },
    },
  ],
};

export default function HamburgPage() {
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
