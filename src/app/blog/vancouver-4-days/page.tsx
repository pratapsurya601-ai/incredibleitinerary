import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Vancouver in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan the perfect 4-day Vancouver itinerary — Stanley Park, Granville Island, Gastown, Capilano Suspension Bridge, Grouse Mountain, and the best dim sum outside Hong Kong. Budget CAD $85/day to luxury CAD $400/day with visa info for Indian, US, UK, EU & Australian passports.",
  keywords: [
    "Vancouver itinerary",
    "Vancouver 4 days",
    "Vancouver travel guide",
    "Stanley Park Vancouver",
    "Granville Island Market",
    "Gastown Vancouver",
    "Capilano Suspension Bridge",
    "Grouse Mountain",
    "Whistler day trip",
    "Vancouver budget travel",
    "Canada travel 2026",
    "Vancouver visa for Indians",
    "Canadian TRV",
    "eTA Canada",
    "Richmond dim sum",
    "British Columbia tourism",
  ],
  openGraph: {
    title: "Vancouver in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Mountains reflected in the harbour, dim sum better than most of Hong Kong, kayaking with sea otters — your complete 4-day Vancouver guide for every budget.",
    url: "https://incredibleitinerary.com/blog/vancouver-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?vancouver+stanley+park+mountains+skyline+british+columbia+canada",
        width: 1200,
        height: 630,
        alt: "Vancouver Stanley Park with snow-capped mountains and city skyline reflection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver in 4 Days: The Complete Travel Guide (2026)",
    description:
      "Pacific wilderness meets cosmopolitan sophistication — your complete 4-day Vancouver travel guide.",
    images: [
      "https://source.unsplash.com/1200x630/?vancouver+stanley+park+mountains+skyline+british+columbia+canada",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/vancouver-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Vancouver in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Vancouver itinerary covering Stanley Park, Granville Island Market, Gastown, Capilano Suspension Bridge, Grouse Mountain, and a Whistler day trip for every budget.",
      datePublished: "2026-01-25",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/vancouver-4-days",
      image:
        "https://source.unsplash.com/1200x630/?vancouver+stanley+park+mountains+skyline+british+columbia+canada",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vancouver 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/vancouver-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Vancouver",
      description:
        "Canada's Pacific gateway, where Stanley Park's ancient rainforest meets a glittering harbour skyline, and where the best Cantonese dim sum outside Hong Kong is served in Richmond's night markets.",
      url: "https://incredibleitinerary.com/blog/vancouver-4-days",
      touristType: ["Nature tourist", "Food tourist", "City break", "Adventure tourist", "Cultural tourist"],
      containedInPlace: { "@type": "Country", name: "Canada" },
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Vancouver",
  country: "Canada",
  countryFlag: "🇨🇦",
  slug: "vancouver-4-days",
  heroQuery: "vancouver stanley park mountains skyline british columbia canada",
  heroAlt: "Vancouver Stanley Park with snow-capped mountains and city skyline reflection",
  category: "North America",
  date: "January 25, 2026",
  readTime: "14 min read",

  intro:
    "Run the Stanley Park seawall at dawn with the snow-capped North Shore mountains perfectly reflected in the still harbour, the city skyline rising behind you like a mirage — Vancouver is the only city where wilderness and metropolis feel genuinely equal. Spend a morning in Richmond eating dim sum in restaurants that Hong Kong chefs move here to open, because the Cantonese cooking community is that serious about quality. Kayak from Deep Cove into Indian Arm and watch a sea otter wrap itself in kelp thirty metres off your bow. At dusk, drive the switchbacks to Cypress Mountain and look down at the entire city blazing below you, Burrard Inlet stretching to the Pacific, the Gulf Islands dissolving into the horizon. Vancouver is where Pacific wilderness meets cosmopolitan sophistication — and it does both better than anywhere else on earth.",

  stats: {
    duration: "4 Days",
    budgetFrom: "CAD $85 (~$63)",
    bestMonths: "Jun–Sep",
    airport: "YVR",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
    { id: "related", emoji: "📖", label: "Related Guides" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "Yes — Canadian Temporary Resident Visa (TRV / Tourist Visa) required"],
        ["Apply via", "IRCC (Immigration, Refugees and Citizenship Canada) online portal at canada.ca"],
        ["Biometrics", "Required — CAD $85 biometrics fee (one-time per 10 years, covers multiple visits)"],
        ["Visa fee", "CAD $100 application fee (non-refundable even if refused)"],
        ["Processing", "2–8 weeks online; in-person VAC appointments available in major Indian cities"],
        ["Refusal rate", "Canada TRV has a high refusal rate for Indian applicants — show strong home-country ties (job, property, family), sufficient funds (CAD $3,000+ for a 2-week trip), and a clear travel plan"],
        ["Documents", "Bank statements (6 months), employment letter, property documents, invitation if applicable, travel insurance"],
        ["Pro tip", "Apply 8–10 weeks before travel to allow processing time and potential biometrics appointment slots"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["US Citizens", "No visa required — valid US passport grants entry for up to 6 months"],
        ["UK / EU / AU", "eTA (Electronic Travel Authorization) required — CAD $7, apply online at canada.ca, usually approved within minutes"],
        ["eTA process", "Takes 5 minutes online, linked to your passport electronically — no paper required"],
        ["Stay limit", "Up to 6 months per visit (border officer may grant less — state your plans clearly)"],
        ["Passport validity", "Must be valid for duration of your entire stay"],
        ["Entry note", "Border officers may ask about accommodation, funds, and onward travel plans — have these details ready"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "CAD $85 (~$63)/day",
      days: [
        {
          day: "Day 1",
          title: "Stanley Park + Granville Island + Gastown",
          items: [
            "Morning: Take TransLink Canada Line from YVR airport to downtown (CAD $4.55 with Compass Card). Load a Compass Card at the airport for all transit",
            "Stanley Park seawall walk or rent a bike at the east entrance (CAD $8–12/hr from Spokes Bicycle Rentals) — the 10km seawall loops the entire park with mountain and city views the entire way",
            "Totem poles at Brockton Point are free and photogenic — nine original and replica poles from First Nations of the Pacific Northwest, with the mountains as backdrop",
            "Ferry to Granville Island from the Aquatic Centre dock (CAD $4.50 each way, Aquabus) — the tiny False Creek ferry is itself a Vancouver experience",
            "Granville Island Public Market: lunch on market food — fresh salmon chowder (CAD $10), bakery items, Vancouver Island cheese samples. Budget CAD $12–18 for a full market lunch",
            "Walk back via the Cambie Bridge or take SkyTrain to Gastown — Vancouver's oldest neighborhood, cobblestone streets, the famous steam clock (free), and heritage brick buildings",
            "Budget dinner: Cheap Vietnamese pho on Davie Street or Commercial Drive, CAD $12–16 for a huge bowl",
          ],
          cost: "CAD $50–65 for transport, ferry, bike, and food",
        },
        {
          day: "Day 2",
          title: "Chinatown + Dr Sun Yat-Sen Garden + Kitsilano Beach",
          items: [
            "Morning: Bus to Chinatown (free first 90 min on Compass Card with transfers) — Vancouver's Chinatown is one of North America's oldest and most authentic, with a strong heritage preservation movement",
            "Dr Sun Yat-Sen Classical Chinese Garden: CAD $16 adult entry — the first full-scale classical Chinese garden built outside China, peaceful and beautifully explained by volunteer guides",
            "Chinatown Night Market (Sat/Sun evenings in summer) or browse the Pender Street shops and the Wing Sang Building (oldest building in Vancouver, now an art space)",
            "Lunch: Chinatown's budget option — dim sum at a traditional restaurant on East Pender, CAD $15–20 for a generous meal with tea",
            "Afternoon: Bus to Kitsilano Beach (Bus 2 or 4 from downtown) — the most scenic urban beach in Vancouver, mountain views across English Bay, free beach access",
            "Kits Pool nearby (outdoor saltwater pool, CAD $7) for a swim with views — summer only",
            "Evening: English Bay Beach walk for sunset — free, magical in summer light, the entire city turns out for the 9pm summer sunsets",
          ],
          cost: "CAD $40–55 for garden entry, transit, and food",
        },
        {
          day: "Day 3",
          title: "Capilano Suspension Bridge (Budget Version) + Deep Cove",
          items: [
            "Budget alternative to Capilano: Lynn Canyon Suspension Bridge is free — smaller than Capilano but genuinely impressive, and the surrounding Lynn Valley Park has hiking trails and swimming holes",
            "Take Bus 229 from Lonsdale Quay (which you reach via the SeaBus ferry from Waterfront, CAD $4.55) to Lynn Canyon",
            "Hike the Baden Powell Trail section through old-growth forest — Douglas firs over 500 years old, completely free, 2–3 hours",
            "Return to North Shore and take Bus 212 to Deep Cove (alternatively, the Cove is 45 min drive from downtown by car/rideshare)",
            "Deep Cove: rent a kayak (CAD $25/hr single) from Deep Cove Canoe & Kayak — paddle into Indian Arm fjord, watch seals, herons, and in October salmon runs in the creek",
            "Honey Doughnuts at Deep Cove are legendary — the line-up is worth it, CAD $3–4 per doughnut, eat by the water",
            "Return by bus/transit — budget CAD $25–35 for kayak and transit",
          ],
          cost: "CAD $50–70 for kayak, doughnuts, transit, and food",
        },
        {
          day: "Day 4",
          title: "Richmond Night Market + Grouse Mountain Sunset",
          items: [
            "Morning: Take Canada Line to Richmond (CAD $4.55) — this suburb of Vancouver has a larger Cantonese-speaking population than many cities in China",
            "Richmond Night Market (open May–October, weekends and some weekdays) OR Aberdeen Centre food court for daytime dim sum — try har gow, siu mai, rice noodle rolls, and egg tarts for CAD $25–30",
            "Richmond Public Market on Number 3 Road has daily Chinese food vendors at lunch — excellent value hotpot sets and barbecue duck rice",
            "Afternoon: Return downtown, SkyTrain/bus to Capilano (save the CAD $62 entry fee by going to Lynn Canyon for free — or visit Capilano if budget allows, the treetop walks are extraordinary)",
            "Alternatively: Grouse Mountain gondola (CAD $65) — take Bus 236 from Lonsdale Quay to the base, gondola to the top for ski/hike/grizzly bear viewing in summer",
            "Sunset from Grouse Mountain's Eye of the Wind viewing pod (CAD $10 extra) — the entire Lower Mainland, from downtown Vancouver to the Gulf Islands, laid out below",
            "Farewell dinner: Back in Gastown for craft beer and poutine at one of the gastropubs, CAD $20–28",
          ],
          cost: "CAD $60–80 for transit, dim sum, and optional gondola",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "CAD $180 (~$133)/day",
      days: [
        {
          day: "Day 1",
          title: "Stanley Park Deep Dive + Coal Harbour + Yaletown",
          items: [
            "Arrive and check into a boutique hotel in downtown Vancouver or Yaletown (CAD $180–280/night) — the Opus Hotel in Yaletown or the Loden Hotel in Coal Harbour are neighborhood gems",
            "Morning: Private guided cycling tour of Stanley Park (CAD $75–95 per person, 2.5 hrs) — local guide explains the park's history as the ancestral territory of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh, and səlilwətaɬ peoples before it became a park in 1888",
            "Totem poles, Prospect Point (best views of Lions Gate Bridge), Siwash Rock, and the seawall — all with expert natural history commentary",
            "Lunch: Craft beer at a Coal Harbour brewpub overlooking the marina — shared charcuterie board, CAD $35–50 for two",
            "Afternoon: False Creek kayak rental from Ecomarine (CAD $35–45/hr) or SUP rental, paddling under the Granville and Cambie bridges",
            "Evening: Yaletown restaurant dinner — one of Vancouver's best food neighborhoods, modern Pacific Northwest cuisine, CAD $60–90 per person with wine",
          ],
          cost: "CAD $200–280 for hotel, guided tour, kayak, and dinner",
        },
        {
          day: "Day 2",
          title: "Capilano Suspension Bridge + North Shore Hike",
          items: [
            "Morning: Free shuttle from downtown to Capilano Suspension Bridge (shuttle from major downtown hotels) — CAD $62.95 adult entry includes the 137m-long bridge, Cliffwalk, and Treetops Adventure",
            "Spend 3 hours at Capilano — the bridge swings over a 70m gorge through 250-year-old Douglas fir forest, the Treetops walkways between the tree canopies are genuinely magical",
            "Nearby: Lynn Headwaters or Grouse Grind (free trail up Grouse Mountain, takes 1–2 hours of steep hiking) — local badge of honor, many Vancouverites do it weekly",
            "Lunch at the Capilano restaurant or return to the city — North Shore Lebanese/Persian restaurants on Lonsdale Avenue are excellent value, CAD $18–25",
            "Afternoon: SeaBus back to Waterfront, walk through Gastown with a local guide (CAD $25, small group walking tour)",
            "Evening: Cocktails at The Diamond bar in Gastown (Victorian-era room, craft cocktails CAD $18–22) then dinner at Wildebeest or L'Abattoir in Gastown, CAD $65–90 per person",
          ],
          cost: "CAD $150–200 for bridge, tour, dinner, and drinks",
        },
        {
          day: "Day 3",
          title: "Whistler Day Trip",
          items: [
            "Early morning: Catch the Whistler Mountaineer coach or drive the Sea-to-Sky Highway (Hwy 99) — one of North America's most spectacular drives along Howe Sound fjord, glaciers visible from the road (2 hrs)",
            "Whistler Village: gondola to the Roundhouse (CAD $55–70 summer sightseeing) for views of Whistler and Blackcomb peaks, 360° glacier panorama",
            "In summer: hiking and mountain biking trails from the top; in winter: world-class skiing (day pass CAD $150+)",
            "Lunch in Whistler Village: the Garibaldi Lift Company (GLC) has a legendary poutine, or Araxi Longtable pop-ups in summer. Budget CAD $25–40",
            "Afternoon: Shannon Falls Provincial Park on the way back (free) — 335m waterfall, third highest in BC, 10-minute walk from the highway",
            "Sea to Sky Gondola at Squamish (CAD $55) — stunning views of Howe Sound and the Stawamus Chief granite monolith from the summit",
            "Return Vancouver by evening — dinner near your hotel, light meal after the big day out",
          ],
          cost: "CAD $150–200 for coach or car, gondola, and meals in Whistler",
        },
        {
          day: "Day 4",
          title: "Grouse Mountain + Richmond Dim Sum + Farewell",
          items: [
            "Morning: Richmond for proper dim sum — Sun Sui Wah or Kirin Restaurant on No.3 Road serve Hong Kong–quality Cantonese dim sum that many Hong Kongers admit is better than back home, CAD $30–45 per person for a generous spread",
            "Order: har gow (shrimp dumplings), turnip cake, cheung fun (rice noodle rolls), pineapple bun, and definitely the egg tarts fresh from the oven",
            "Return downtown via Canada Line — quick check of Robson Street for Canadian souvenirs (Roots, Canada Goose, local makers)",
            "Afternoon: Grouse Mountain gondola (CAD $65) — Refuge for Endangered Wildlife (grizzly bears on site), lumberjack shows, paragliding launch point. The views get better with every visit",
            "Grouse Mountain in winter: night skiing is possible for an add-on experience",
            "Farewell dinner: Tojo's (birthplace of the California Roll, now a world-famous Japanese-Canadian restaurant, CAD $120–150 per person) or Hawksworth Restaurant for contemporary Canadian fine dining",
          ],
          cost: "CAD $150–200 for dim sum, gondola, and farewell dinner",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "CAD $400 (~$296)/day",
      days: [
        {
          day: "Day 1",
          title: "Coal Harbour + Private Seaplane + Fine Dining",
          items: [
            "Arrive at YVR — private airport transfer to the Fairmont Pacific Rim, Rosewood Hotel Georgia, or Four Seasons Vancouver (CAD $80–120 in a luxury sedan)",
            "Check into a harbour-view suite — the Fairmont Pacific Rim's Coal Harbour suites have the iconic coal harbour + North Shore mountains view that defines Vancouver luxury",
            "Afternoon: Private floatplane tour of Vancouver's coastline from the Coal Harbour terminal (CAD $250–400 per person, 30–45 min) — sight the Gulf Islands, Howe Sound, and Vancouver Island from above",
            "Stanley Park by private guide in a luxury SUV — Prospect Point, Siwash Rock, the rose garden, and the beaches with storytelling about the park's First Nations history",
            "Pre-dinner: Cocktails at the Fairmont Pacific Rim's Botanist bar — Canada's most awarded cocktail program, cocktails CAD $22–28",
            "Dinner: Hawksworth Restaurant in the Hotel Georgia — Vancouver's most acclaimed restaurant, tasting menu CAD $175–225 per person with wine pairing, impeccable Pacific Northwest ingredients",
          ],
          cost: "CAD $600–900 for transfer, floatplane, cocktails, and fine dining",
        },
        {
          day: "Day 2",
          title: "Private Wilderness Day + Capilano VIP + Grouse Mountain",
          items: [
            "Morning: Private helicopter tour of the North Shore mountains and Howe Sound (CAD $300–500 per person, 45 min) — land on a remote glacier if ice conditions permit",
            "Private Capilano Suspension Bridge before public opening (pre-arranged through the hotel concierge) — the bridge and forest in private morning light, no crowds",
            "After Capilano: Private naturalist guide for a Grouse Mountain hike — identify old-growth forest species, see spawning salmon in season, learn First Nations plant knowledge",
            "Lunch: Private chef picnic at a mountain viewpoint — artisan sourdough, BC smoked salmon, artisan cheese, Okanagan wine (arrange through hotel CAD $200–300 per couple)",
            "Afternoon spa: Relax at the Willow Stream Spa at the Fairmont Pacific Rim — the rooftop infinity pools overlook Coal Harbour and the mountains, signature treatments CAD $200–350",
            "Dinner: Botanist Restaurant at the Fairmont Pacific Rim — 10-course tasting menu in a greenhouse-style dining room, BC ingredients and foraged elements, CAD $185–250 per person with pairings",
          ],
          cost: "CAD $700–1,200 for helicopter, spa, private guide, and dinner",
        },
        {
          day: "Day 3",
          title: "Private Whistler + Winery Tour",
          items: [
            "Morning: Private luxury coach or chartered seaplane to Whistler (seaplane CAD $400–600 per person one-way, 20 min vs 2hr drive)",
            "Whistler: Private ski/snowboard instructor (winter, CAD $200–400/hr) or summer mountain biking guide with premium e-bikes (CAD $150–250)",
            "Lunch: Araxi Restaurant in Whistler Village — one of Canada's great restaurants, farm-to-table Pacific Northwest, 3-course lunch CAD $80–120 per person",
            "Afternoon: Return via Sea-to-Sky Highway with a stop at the Squamish Lil'wat Cultural Centre (CAD $18) — beautifully presented First Nations cultural experience",
            "Optional: Fraser Valley winery tour on the return — Mission Hill or Burrowing Owl winery with a private tasting (CAD $50–100 per person)",
            "Evening: Light dinner back in Vancouver — sushi omakase at Miku (float-finished sushi originated here) or Sushi Bar Maumi, CAD $150–250 per person",
          ],
          cost: "CAD $600–1,000 for seaplane, Whistler, winery, and omakase",
        },
        {
          day: "Day 4",
          title: "Richmond VIP Dim Sum + Private Vancouver Farewell",
          items: [
            "Morning: Private car to Richmond for a VIP dim sum experience at Sun Sui Wah's private dining room — pre-order rare items like abalone dim sum and Peking Duck alongside traditional favorites, CAD $80–120 per person",
            "Mid-morning: Private Indigenous cultural experience with a local Musqueam or Squamish Nation cultural guide in Stanley Park or at a nearby longhouse — storytelling, weaving demonstration, traditional feast (CAD $150–250 per person)",
            "Lunch: In-room dining at the hotel or a leisurely café in Yaletown — smoked salmon eggs benedict and BC sparkling wine",
            "Final afternoon: Robson Street luxury shopping — Holt Renfrew flagship, Nordstrom, artisan jewelry and Indigenous art at a gallery (budget CAD $200–500 for meaningful keepsakes)",
            "Sunset: Spa treatment or rooftop pool at the hotel, farewell sundowner overlooking Coal Harbour",
            "Farewell dinner: Tojo's Restaurant (Hidekazu Tojo invented the California Roll here in the 1970s) — omakase course CAD $200–300 per person, the most storied dining room in Vancouver",
            "Private airport transfer at end of evening — luxury sedan, luggage valet, CAD $100–150",
          ],
          cost: "CAD $500–900 for dim sum, cultural experience, shopping, and omakase",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "CAD $40–70 (hostel or Airbnb)",
      food: "CAD $20–35 (markets + ethnic restaurants)",
      transport: "CAD $10–15 (Compass Card day pass)",
      activities: "CAD $15–30 (free parks + 1 paid sight)",
      total: "CAD $85–150/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "CAD $120–200 (boutique hotel)",
      food: "CAD $50–90 (quality restaurants)",
      transport: "CAD $20–35 (transit + taxi mix)",
      activities: "CAD $40–80 (Capilano, gondola, tours)",
      total: "CAD $230–405/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "CAD $350–800 (5-star harbour view)",
      food: "CAD $150–350 (fine dining + omakase)",
      transport: "CAD $80–200 (private car + seaplane)",
      activities: "CAD $150–500 (helicopter, private guides)",
      total: "CAD $730–1,850+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "CAD $28–45 (hostel dorm, HI hostels)",
      food: "CAD $12–20 (Granville Island, food courts)",
      transport: "CAD $10 (day pass)",
      activities: "CAD $0–20 (Stanley Park free, Lynn Canyon free)",
      total: "CAD $50–95/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "CAD $180–280 (family hotel room)",
      food: "CAD $80–120 (family restaurants)",
      transport: "CAD $30–50 (family transit pass + taxi)",
      activities: "CAD $80–150 (Science World, Aquarium, Capilano)",
      total: "CAD $370–600/day",
    },
  ],

  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting in November–February Without Rain Gear",
      desc: "Vancouver's winters are notoriously rainy — the city averages 166 rainy days a year. The mountains are stunning in snow but the city itself is grey and wet October through March. If you visit off-season, pack a proper waterproof jacket (not an umbrella — wind renders them useless). The upside: no crowds and half-price hotel rates.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🦌",
      title: "Skipping Richmond for Dim Sum",
      desc: "Most tourists eat Cantonese food in Vancouver's downtown Chinatown or on the Westside, which is fine but not the best. Richmond, 20 minutes south on the Canada Line, has the highest density of authentic Hong Kong–style Cantonese restaurants outside Asia. Sun Sui Wah, Kirin, and Aberdeen Food Court are where Vancouver's Chinese community actually eats.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🏔️",
      title: "Paying for Capilano When Lynn Canyon is Free",
      desc: "Capilano Suspension Bridge is CAD $62.95 and excellent — but Lynn Canyon Suspension Bridge costs nothing, crosses a similar gorge through old-growth forest, and you get the same experience with fewer selfie-sticks. Lynn Canyon also has swimming holes, hiking trails, and a small ecology centre. Worth knowing both options exist.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Renting a Car for Downtown Vancouver",
      desc: "Downtown Vancouver's parking costs CAD $4–8/hour, traffic is intense, and the TransLink transit system is world-class. The Canada Line from YVR is faster than a taxi. Rent a car only if you plan a specific road trip (Whistler, Okanagan, Vancouver Island ferry). For the city itself, Compass Card + Mobi bike share + occasional Uber covers everything.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "📅",
      title: "Missing the Salmon Run Season (September–October)",
      desc: "The Pacific salmon run is one of nature's great spectacles — and Vancouver is right at its epicenter. In September and October, you can watch thousands of sockeye salmon fighting upstream in the Capilano River (next to the suspension bridge), Kanaka Creek, and many North Shore streams. It's completely free, deeply dramatic, and most tourists miss it entirely.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🌅",
      title: "Missing Sunset at English Bay",
      desc: "English Bay beach facing west toward the Pacific catches some of the finest urban sunsets in North America — especially in June and July when the sun sets past 9pm and the entire downtown turns out to watch. Bring a blanket, pick up snacks from Davie Village, and claim your spot by 8pm. The Celebration of Light fireworks (July) fires over this bay — book nearby accommodation months ahead.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🚲",
      title: "Ride the Stanley Park Seawall at Sunrise",
      desc: "Rent a bike from Spokes Bicycle Rentals at the park's east entrance at 7am and ride the 10km seawall loop before the crowds arrive. The morning light on the North Shore mountains, Lions Gate Bridge in mist, and the glassy harbour is genuinely one of the most beautiful urban cycling experiences in the world. Cost: CAD $8–12/hr.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🦞",
      title: "Eat Dungeness Crab, Not Lobster",
      desc: "BC's Dungeness crab is to Vancouver what lobster is to Maine — the local specialty that you must try. Granville Island's fishmonger sells whole cooked Dungeness crab (CAD $20–30) that you can eat right at the market with crusty bread. The meat is sweet, rich, and pulled from Howe Sound waters a day before. It's Vancouver on a plate.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🎫",
      title: "Book Adventure Tours in Advance via GetYourGuide",
      desc: "The best outdoor guides book up weeks in advance in summer — kayak tours of Indian Arm, Whistler guided hikes, whale watching in the Salish Sea, and Stanley Park Indigenous cultural walks. Browse and book at getyourguide.com/s/?q=Vancouver&partner_id=PSZA5UI for vetted operators with reviews from recent travelers.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🌿",
      title: "Walk Pacific Spirit Regional Park for Free",
      desc: "Pacific Spirit Park is a 763-hectare old-growth forest on the University of British Columbia peninsula — and almost no tourists visit it. The trails through second-growth cedar and fir bring you within 25 minutes of downtown to complete forest silence, mushroom hunting (in season), and great horned owls. UBC's Museum of Anthropology (CAD $18) at the park's edge has Canada's finest First Nations art collection.",
      color: "border-emerald-200 bg-emerald-50",
    },
    {
      icon: "🍁",
      title: "Take the Whistler Blackcomb Scenic Drive Even Without Skiing",
      desc: "The Sea-to-Sky Highway (Hwy 99) from Vancouver to Whistler is consistently ranked one of the world's great scenic drives — Howe Sound fjord on one side, granite peaks on the other. Even if you don't ski or have a gondola budget, the drive past Squamish, Shannon Falls, and into Whistler Village is free and extraordinary. Pull over at every viewpoint.",
      color: "border-red-200 bg-red-50",
    },
  ],

  faqs: [
    {
      q: "How do I get from Vancouver Airport (YVR) to downtown?",
      a: "The Canada Line SkyTrain connects YVR directly to downtown Vancouver in 26 minutes — a CAD $4.55 single fare with a Compass Card (buy one at the airport station for CAD $6 deposit + fare load). Taxis and Uber/Lyft cost CAD $35–45 and take 25–45 minutes depending on traffic. The Canada Line is faster, cheaper, and more reliable.",
    },
    {
      q: "Is Vancouver worth visiting for 4 days or should I go for longer?",
      a: "4 days is a solid Vancouver visit that covers Stanley Park, Gastown, Granville Island, Chinatown, North Shore, and Richmond. For Whistler plus the Gulf Islands by BC Ferries, plan 6–7 days. If you add Vancouver Island (Victoria is a beautiful day trip by BC Ferries, 1.5 hours from Tsawwassen), allow 8–10 days for the greater BC region.",
    },
    {
      q: "When is the worst time to visit Vancouver?",
      a: "November through February is rainy season — grey, wet, and cold (but rarely below freezing in the city). January and February are the worst months. That said, the mountains are spectacular in snow, ski season at Grouse, Whistler, and Cypress is in full swing, and hotels are 30–50% cheaper. If you're a skier, winter is actually ideal.",
    },
    {
      q: "Can I see whales from Vancouver?",
      a: "Yes — the Salish Sea (between Vancouver and Vancouver Island) is home to orca pods, humpback whales, minke whales, and porpoises. Whale watching tours depart from Horseshoe Bay (North Vancouver) or from nearby Steveston in Richmond. Tours run May–October and cost CAD $120–160 per person for 3–4 hour boat excursions. Orca sightings are most reliable June–September.",
    },
    {
      q: "Is Vancouver expensive for tourists?",
      a: "Vancouver is one of North America's most expensive cities. Budget travelers can manage on CAD $80–100/day using hostels, markets, and transit. Mid-range travelers should budget CAD $180–250/day for a decent hotel, restaurant meals, and paid attractions. The free attractions (Stanley Park, beaches, Gastown) are genuinely excellent, and Richmond's food scene is world-class at reasonable prices.",
    },
  ],

  combineWith: [
    "Victoria, BC (BC Ferries 1.5 hrs from Tsawwassen)",
    "Whistler (Sea-to-Sky Hwy 2 hrs)",
    "Seattle, USA (Amtrak Cascades 3.5 hrs)",
  ],

  relatedSlugs: ["seattle-4-days", "toronto-5-days", "new-york-5-days", "san-francisco-4-days"],

  galleryQuery: "vancouver stanley park capilano suspension bridge granville island gastown",
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function VancouverPage() {
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
