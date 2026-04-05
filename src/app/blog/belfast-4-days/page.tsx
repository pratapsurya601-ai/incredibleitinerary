import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Belfast",
  country: "Northern Ireland",
  countryFlag: "🇬🇧",
  slug: "belfast-4-days",
  heroQuery: "belfast titanic museum northern ireland cityscape",
  heroAlt: "Belfast Titanic Museum and waterfront at golden hour, Northern Ireland",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Belfast has pulled off one of Europe's great reinventions — a city that once made headlines for all the wrong reasons now draws visitors for the world's largest Titanic museum, an electric Cathedral Quarter, and one of the UK's finest food scenes. Four days covers the political murals of the Falls and Shankill Roads, a day trip to the basalt columns of Giant's Causeway, Game of Thrones filming locations across the Antrim coast, and enough Cathedral Quarter pub evenings to understand why Belfast nightlife regularly beats London for atmosphere. The Ulster Fry is non-negotiable.",
  stats: {
    duration: "4 Days",
    budgetFrom: "£55",
    bestMonths: "May–Sep",
    airport: "BFS / BHD",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Titanic Quarter & Cathedral Quarter" },
    { id: "day2", emoji: "📅", label: "Day 2 — Black Taxi Murals Tour" },
    { id: "day3", emoji: "📅", label: "Day 3 — Giant's Causeway & Antrim Coast" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — UK Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "UK Standard Visitor Visa"],
        ["Processing", "3–8 weeks (standard); 5 business days (priority)"],
        ["Fee", "£115 per person (standard)"],
        ["Validity", "Up to 6 months per visit; visa valid 10 years"],
        ["Apply at", "UKVI online portal via VFS Global India"],
        ["Documents", "Bank statements, hotel bookings, return flight, employment proof"],
        ["Notes", "Northern Ireland is part of the UK — a UK visa covers it. No separate Irish visa needed unless crossing into the Republic."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / EU / AU — Visa-Free (ETA Required)",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "UK Electronic Travel Authorisation (ETA) from 2025"],
        ["Processing", "Usually within 3 working days"],
        ["Fee", "£10 per person (one-time per ETA)"],
        ["Validity", "Multiple entry; valid 2 years or until passport expiry"],
        ["Apply at", "UK Government ETA portal or UKVI app"],
        ["Passport", "Must be valid for duration of stay"],
        ["Notes", "US, Canadian, Australian and most EU passport holders now need a UK ETA to enter. Apply before departure."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "£55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Titanic Quarter & Cathedral Quarter",
          items: [
            "10:00 — Walk to the Titanic Belfast museum from the city centre (free walk, 25 minutes); book tickets online in advance (£22) to skip queues — the world's largest Titanic museum covers the ship's construction, launch, and sinking across nine galleries",
            "13:00 — Lunch at the nearby Titanic Quarter market stalls or grab a pasty roll from a local bakery for under £5 — the SS Nomadic (Titanic's tender ship) is just outside and included in museum tickets",
            "15:00 — Walk back through the Cathedral Quarter; explore the cobbled Cathedral Quarter and check out the street art on Black Box and the Oh Yeah Music Centre murals — all free",
            "17:30 — Pre-drinks at the John Hewitt bar, a cooperative pub with no TV and great local ales (pints from £4.50); the bar staff will point you toward the best live music nights",
            "19:30 — Dinner: Ulster Fry at Maggie May's cafe on Botanic Avenue (£9–12) — the quintessential Belfast meal with soda bread, potato bread, black pudding, and back bacon",
            "21:00 — Live trad music at the Duke of York off Commercial Court — free entry most nights, great atmosphere in one of Belfast's oldest pub lanes",
          ],
          cost: "£45–55 (museum ticket, food, drinks)",
        },
        {
          day: "Day 2",
          title: "Black Taxi Murals Tour & Falls Road",
          items: [
            "09:30 — Book a shared Black Taxi murals tour (£15–20 per person in a group) from the city centre — drivers are political historians who grew up in the area and offer first-hand accounts of the Troubles that no guidebook captures",
            "11:00 — Walk the International Wall on Falls Road — the largest collection of political murals in Europe; the Bobby Sands mural on Sinn Fein headquarters is particularly striking and frequently photographed",
            "12:30 — Cross the Peace Wall (visitors can sign it) and see the Shankill Road murals — a very different political perspective painted with equal intensity; the contrast between the two roads 300 metres apart is profound",
            "14:00 — Lunch at Bookfinders on University Road (£6–9) — a café-bookshop beloved by Queen's University students; loaded sandwiches, good soup, and piles of cheap secondhand books",
            "16:00 — Botanic Gardens and Ulster Museum free entry — the Egyptian mummies and Irish linen galleries are highlights; allow 90 minutes",
            "19:00 — Dinner and pints in the student Quarter around Botanic Avenue — the Eg pub does generous pub food for £8–12 and has a great outdoor beer garden in summer",
          ],
          cost: "£40–50 (taxi tour, food, drinks)",
        },
        {
          day: "Day 3",
          title: "Giant's Causeway & Antrim Coast",
          items: [
            "07:30 — Take the Translink bus from Europa Buscentre to Coleraine (£12 return), then the Causeway Rambler shuttle (£9 day ticket) covering the whole Antrim coast — budget alternative to renting a car",
            "10:00 — Giant's Causeway visitor experience (National Trust, £15 with bus; £3 if you skip the visitor centre and just walk in from the back road) — the 40,000 hexagonal basalt columns are genuinely surreal in person; arrive early before tour buses",
            "12:30 — Lunch at the Nook restaurant in Bushmills village (£10–14) or pack sandwiches from Belfast to save money on the coast — the Bushmills Inn does good soup if budget allows",
            "14:00 — Carrick-a-Rede rope bridge (£11.50 National Trust) — a 20-metre rope bridge 30 metres above the sea; book online in advance during summer as timed entry sells out",
            "16:00 — Drive or Rambler bus past the Dark Hedges — the ancient beech tree tunnel used as the Kingsroad in Game of Thrones; free to visit and photograph from the road",
            "20:00 — Return to Belfast; fish and chips from Friar's Bush chipper on Stranmillis Road (£7) — classic Northern Irish end to a coastal day",
          ],
          cost: "£55–70 (transport, Giant's Causeway, Carrick-a-Rede, lunch)",
        },
        {
          day: "Day 4",
          title: "City Hall, St George's Market & Departure",
          items: [
            "09:00 — St George's Market on a Friday, Saturday or Sunday (free entry) — Belfast's oldest covered market with artisan food stalls, fresh seafood, and local crafts; arrive by 9am for the best selection before the crowds",
            "10:30 — Free guided tour of Belfast City Hall (book online, free) — the Edwardian baroque building has excellent exhibits on the city's linen and shipbuilding heritage plus a beautiful Great Hall",
            "12:00 — Lunch at the market or a Victoria Square food court (budget £8–12) before heading to the airport — George Best Belfast City Airport is 10 minutes from the city centre by Glider bus (£2)",
          ],
          cost: "£25–35 (food, transport to airport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "£120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Titanic Museum & Cathedral Quarter Dining",
          items: [
            "12:00 — Check in to a 3-star hotel in the Cathedral Quarter (£90–130/night) — The Merchant Hotel area puts you walking distance from everything; drop bags and head straight to the Titanic Quarter",
            "13:30 — Titanic Belfast museum (£22, book online) plus the SS Nomadic tour — allow 3 hours for the full experience; the slipway perspectives outside the museum are as impressive as the galleries inside",
            "17:00 — Return to Cathedral Quarter; gin tasting at Shortcross or Echlinville gin bars (£15 for a flight of 3 gins with tonic) — Northern Ireland has a thriving craft distilling scene",
            "19:30 — Dinner at Ox restaurant on Oxford Street (£40–50/pp) — one of Belfast's best farm-to-table restaurants; the tasting menu changes weekly based on Ulster produce and is worth every penny",
          ],
          cost: "£130–160 (hotel, museum, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Black Taxi Tour & Political History",
          items: [
            "09:30 — Private Black Taxi murals tour (£60 for a private cab, 2 hours) — with your own driver you can stop anywhere, ask specific questions, and go beyond the tourist route into residential streets that group tours skip",
            "12:00 — Lunch at The Barking Dog on Malone Road (£15–20/pp) — smart casual bistro popular with Queens University academics; excellent beef from Northern Irish farms",
            "14:00 — Ulster Museum (free) with the Irish Early Peoples gallery and the Armada exhibition featuring treasure from the Spanish Armada ships wrecked on the Irish coast in 1588",
            "16:30 — Botanic Gardens walk and Queen's University quadrangle (free) — the Lanyon Building is one of the UK's finest Victorian Gothic structures",
            "20:00 — Dinner and live music at The National on High Street (£20–25/pp) — upstairs dining room with a great Belfast cocktail list; downstairs live music starts at 9pm",
          ],
          cost: "£140–170 (hotel, taxi tour, meals, museum)",
        },
        {
          day: "Day 3",
          title: "Causeway Coast with Comfort",
          items: [
            "08:00 — Hire a car from Belfast city centre (£40–60/day) or book a private day tour (£60–80/pp) covering the full Causeway Coast in comfort — driving the A2 Antrim coastal road is one of the UK's great road trips",
            "10:30 — Giant's Causeway (National Trust, £15) — with a car you can park at the free layby on Causeway Road and avoid the visitor centre fee; walk the cliffs above the columns for the best views",
            "13:00 — Lunch at the Bushmills Inn (£20–30/pp) — a 400-year-old coaching inn with an open peat fire; the seafood chowder and soda bread are outstanding",
            "15:00 — Dunluce Castle ruins (£6) overlooking the Atlantic — the castle walls literally fell into the sea in 1639, killing the kitchen staff during a dinner party; the cliff-edge silhouette is extraordinary",
            "17:00 — Carrick-a-Rede rope bridge (£11.50) and coastal walk — with a car you can time this for late afternoon when the light is golden and most day-trippers have left",
            "21:00 — Return to Belfast; nightcap at The Dirty Onion on Hill Street — riverside outdoor terrace, great craft beer selection",
          ],
          cost: "£150–180 (car hire, meals, attractions)",
        },
        {
          day: "Day 4",
          title: "St George's Market, City Hall & Departure",
          items: [
            "09:00 — St George's Market with a proper sit-down breakfast at one of the inside stalls (£10–14) — the Saturday variety market has the widest selection of artisan producers",
            "11:00 — Guided City Hall tour and the Belfast Exposed photography gallery nearby (free) — contemporary photography focused on Northern Irish social history",
            "13:00 — Lunch at Deane's Deli Bistro on Howard Street (£15–20) before heading to the airport — Gordon Ramsay-trained chef Michael Deane runs multiple Belfast restaurants and even his bistro is top quality",
          ],
          cost: "£100–130 (hotel, food, transport to airport)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "£300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Merchant Hotel Arrival & Private Titanic Experience",
          items: [
            "13:00 — Check in to The Merchant Hotel on Waring Street (£200–350/night) — a converted Victorian bank with an extraordinary Great Room bar; the grand staircase and art deco cocktail lounge are among the finest hotel interiors in Ireland",
            "15:00 — Private guided Titanic Belfast after-hours tour (£80/pp, arranged through hotel) — the museum organises evening private access with an expert maritime historian as guide; a completely different experience to the daytime crowds",
            "19:00 — Cocktails at The Merchant's Great Room bar (£15–18 per cocktail) — regarded as the best cocktail bar in Ireland; the art deco vaulted ceiling is spectacular",
            "20:30 — Dinner at OX Belfast (£70–90/pp tasting menu) or Eipic restaurant (1 Michelin star, £95 tasting menu, book 4–6 weeks ahead) — Eipic uses exclusively Northern Irish produce in sophisticated tasting menus",
          ],
          cost: "£380–500 (hotel, private tour, Michelin dinner, cocktails)",
        },
        {
          day: "Day 2",
          title: "Private Taxi Tour & Linen Hall Library",
          items: [
            "09:00 — Private Black Taxi full-day political tour (£120) including the peace walls, murals, republican and loyalist areas with a deeply knowledgeable local guide — includes a visit to the Maze/Long Kesh site briefing",
            "13:00 — Private lunch at Shu restaurant on Lisburn Road (£30–40/pp) — an elegant neighbourhood restaurant in South Belfast's most sought-after residential street",
            "15:30 — Linen Hall Library private behind-the-scenes tour (arrange in advance, £25) — founded in 1788, this private subscription library holds the most comprehensive collection of Troubles-era political ephemera in the world",
            "20:00 — Dinner at The Rana restaurant (£50–70/pp) or Hadskis on Donegall Street (£35–45/pp) — Hadskis has one of Northern Ireland's finest whiskey collections",
          ],
          cost: "£400–500 (hotel, private tour, fine dining)",
        },
        {
          day: "Day 3",
          title: "Private Causeway Coast Tour",
          items: [
            "08:00 — Private chauffeur-driven Causeway Coast tour (£200–250/day) — a dedicated driver and guide covers Giant's Causeway, Dunluce Castle, Carrick-a-Rede, the Dark Hedges, and Cushendun Caves (used for Game of Thrones) with complete flexibility on timing",
            "13:00 — Lunch at Tartine at Distillers Arms in Bushmills (£30/pp) — sister restaurant to one of the top-rated restaurants in Northern Ireland; seasonal Antrim coast produce",
            "16:00 — Old Bushmills Distillery private heritage tour (£30/pp) — world's oldest licensed whiskey distillery; the private tour accesses the single malt warehouses and offers a guided tasting of aged expressions",
            "21:00 — Return to Belfast; nightcap of a Bushmills 21-year single malt in The Merchant bar",
          ],
          cost: "£450–600 (hotel, private driver, fine dining, distillery tour)",
        },
        {
          day: "Day 4",
          title: "Private Market Breakfast & Spa Departure",
          items: [
            "09:00 — Private chef-led St George's Market tour (£80, arranged through hotel concierge) — a Belfast chef guides you through the best stalls, explains Northern Irish food heritage, and cooks a breakfast using market produce",
            "11:00 — Merchant Hotel spa morning (£80 treatment) before late checkout — the hotel's Victorian-era pool and treatment rooms are among the most beautiful in the UK",
            "14:00 — Taxi to George Best Belfast City Airport (10 minutes, £12) — the city centre airport is one of the easiest airport exits of any UK city",
          ],
          cost: "£350–500 (hotel, private market tour, spa, departure)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "£25–40 (hostel or budget guesthouse)",
      food: "£15–25 (cafes, market stalls, chippers)",
      transport: "£5–10 (Glider bus, Translink)",
      activities: "£20–30 (Titanic Museum, Black Taxi share)",
      total: "£55–75/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "£80–130 (3-star Cathedral Quarter hotel)",
      food: "£35–55 (bistros and craft pubs)",
      transport: "£15–30 (car hire or taxis)",
      activities: "£30–50 (tours + museums)",
      total: "£120–170/day",
    },
    {
      tier: "Luxury",
      accommodation: "£200–350 (The Merchant Hotel)",
      food: "£80–150 (Michelin and fine dining)",
      transport: "£50–120 (private car or chauffeur)",
      activities: "£80–200 (private tours, spa, distillery)",
      total: "£300–500/day",
    },
    {
      tier: "Day Trip Only",
      accommodation: "N/A (based elsewhere)",
      food: "£20–30 (packed lunch + one meal)",
      transport: "£25–40 (train/bus return)",
      activities: "£15–25 (one main sight)",
      total: "£60–95/day",
    },
    {
      tier: "Family (2 adults + 2 children)",
      accommodation: "£120–180 (family room)",
      food: "£60–90 (family restaurants)",
      transport: "£30–60 (car hire recommended)",
      activities: "£60–100 (Titanic, Causeway, rope bridge)",
      total: "£270–430 total/day",
    },
  ],
  mistakes: [
    {
      icon: "🕐",
      title: "Not booking Titanic Belfast in advance",
      desc: "The world's largest Titanic museum sells out on weekends and in summer. Book online at titanicbelfast.com at least 3 days ahead to guarantee entry and save queuing time. The museum fills by 11am in July and August.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Trying to see Giant's Causeway as a half-day",
      desc: "The Causeway Coast is a full-day minimum. Giant's Causeway, Carrick-a-Rede rope bridge, Dunluce Castle, and the Dark Hedges each need at least 45 minutes. A rushed half-day means missing the cliff walks and coastal scenery that make the trip worthwhile.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🗺️",
      title: "Skipping the political history tour",
      desc: "Belfast without the Black Taxi murals tour is like visiting the Colosseum without knowing Roman history. The Falls and Shankill Roads are Belfast's most powerful story — and the Black Taxi drivers who grew up there tell it in a way no museum can replicate.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating only in the city centre tourist strip",
      desc: "The Botanic Avenue, Lisburn Road, and Ormeau Road areas have far better restaurants at better prices than the tourist strip near Victoria Square. University Road cafes and South Belfast bistros are where locals eat.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛅",
      title: "Assuming the weather will cooperate",
      desc: "Northern Ireland weather is famously unpredictable — it can be sunny and raining within the same hour. Pack waterproof layers for Giant's Causeway regardless of the forecast. The coast is windier and wetter than the city, especially on the cliff walks.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Get the iLink card for bus and rail",
      desc: "The iLink smartcard covers all Translink buses and trains across Northern Ireland. Load it with a day ticket for unlimited travel (£7.50) or a weekly ticket (£20). The Glider rapid transit line is free with this card and connects the city's main areas faster than any taxi. Book tours in advance at https://www.getyourguide.com/s/?q=Belfast&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎭",
      title: "Book the Titanic Museum for first thing in the morning",
      desc: "The 9am entry slot on any day of the week is the quietest. By 11am the tour bus groups have arrived and the galleries are crowded. The slipways and the underwater exploration gallery in particular deserve quiet time to fully appreciate.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥃",
      title: "Try Titanic-themed cocktails and local whiskey",
      desc: "Belfast bars take enormous pride in local craft spirits. The Titanic Hotel bar and The Merchant both serve cocktails named after the ship's first-class menu. Bushmills and Echlinville are Northern Irish distilleries worth seeking out — both offer airport shop alternatives to standard Scotch.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "📸",
      title: "Visit the Dark Hedges at sunrise or sunset",
      desc: "The Dark Hedges beech tree tunnel near Armoy is one of the most photographed spots in Ireland after Game of Thrones. At midday in summer it is wall-to-wall with tourists. At sunrise or 7pm in summer the light is golden and you may have it entirely to yourself.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Belfast safe for tourists?",
      a: "Belfast is a safe city for tourists. The Troubles ended with the 1998 Good Friday Agreement and the city has transformed dramatically. The murals on the Falls and Shankill Roads are now a tourist attraction rather than an active conflict zone. Exercise the same common sense you would in any UK city. The Cathedral Quarter, Titanic Quarter, and Botanic areas are entirely safe day and night.",
    },
    {
      q: "Do I need a separate visa for Northern Ireland and the Republic of Ireland?",
      a: "Northern Ireland is part of the United Kingdom, so a UK visa covers it. The Republic of Ireland is a separate country requiring an Irish visa (or Schengen equivalent for some nationalities). Indian passport holders need both a UK visa and an Irish visa to cross the border. US, EU, and Australian passport holders can move freely across the border under the Common Travel Area agreement.",
    },
    {
      q: "How do I get from Belfast to Giant's Causeway without a car?",
      a: "Translink Ulsterbus runs regular services from Europa Buscentre to Coleraine (£12 return), then the Causeway Rambler shuttle connects Coleraine to Giant's Causeway, Carrick-a-Rede, Ballintoy, and Ballycastle. A Rambler day ticket costs £9 and covers unlimited hops. Total cost from Belfast and back is about £21 for a full coastal day. Book at translink.co.uk.",
    },
    {
      q: "What currency is used in Belfast?",
      a: "Belfast uses British Pounds Sterling (GBP), not Euros. Northern Ireland bank notes are printed by Ulster Bank, Bank of Ireland, and Danske Bank — these are legal tender in Northern Ireland but can be awkward to use in England. Exchange or spend them before returning to Great Britain. Card payments are accepted almost everywhere in Belfast.",
    },
  ],
  combineWith: ["dublin-4-days", "edinburgh-4-days", "galway-3-days"],
  relatedSlugs: ["dublin-4-days", "edinburgh-4-days", "london-5-days", "galway-3-days"],
  galleryQuery: "belfast titanic murals cathedral quarter northern ireland",
};

export const metadata: Metadata = {
  title: "Belfast in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The definitive 4-day Belfast itinerary — Titanic Museum, Black Taxi murals tour, Giant's Causeway, Game of Thrones filming locations, and Cathedral Quarter pubs. Budget £55/day to luxury stays. Visa info for all passports.",
  keywords: [
    "Belfast itinerary",
    "Belfast 4 days",
    "Belfast travel guide 2026",
    "Titanic Museum Belfast",
    "Giant's Causeway day trip",
    "Black Taxi murals tour",
    "Game of Thrones filming locations Northern Ireland",
    "Belfast visa Indian passport",
  ],
  openGraph: {
    title: "Belfast in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Titanic Museum, murals, Giant's Causeway, and Game of Thrones locations — Belfast in 4 days from £55/day to luxury hotel stays.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/belfast-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belfast in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Titanic Museum, Black Taxi murals, Giant's Causeway, and Cathedral Quarter pubs — the complete Belfast travel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/belfast-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Belfast in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Belfast in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/belfast-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Belfast",
      description:
        "Belfast, Northern Ireland — home of the Titanic, iconic political murals, Giant's Causeway, and one of the UK's most vibrant food and pub scenes.",
      geo: { "@type": "GeoCoordinates", latitude: 54.5973, longitude: -5.9301 },
    },
  ],
};

export default function BelfastPage() {
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
