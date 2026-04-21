import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "San Francisco",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "san-francisco-4-days",
  heroQuery: "san francisco golden gate bridge california bay fog sunrise",
  heroAlt: "Golden Gate Bridge emerging from morning fog over San Francisco Bay at sunrise, California",
  category: "North America",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "San Francisco is America's most dramatic city — a compact peninsula where Victorian painted ladies stand beside tech billionaire mansions, where Karl the Fog rolls through the Golden Gate at 10am and burns off by noon, and where the best Mission District burrito you'll ever eat costs $9. Four days covers the Golden Gate, Alcatraz, Wine Country, and neighborhoods real San Franciscans actually live in — from the Beat Generation literary bars of North Beach to the psychedelic murals of Haight-Ashbury, all packed into 49 square miles of hills above the bay.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$85",
    bestMonths: "Sep–Nov, Apr–May",
    airport: "SFO / OAK / SJC",
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
        ["B-2 Tourist Visa Required", "Indian passport holders cannot use ESTA (the visa waiver program). A B-2 tourist visa is required, obtained from the US Embassy or Consulate in India. Apply a minimum of 3 months before travel — interview appointment wait times at Mumbai and Delhi can be 3–12+ weeks depending on season and current consular capacity."],
        ["Application Process", "Apply at ustraveldocs.com: fill the DS-160 form, pay the $185 application fee, schedule and attend your interview at the US Consulate (Delhi, Mumbai, Chennai, Hyderabad, or Kolkata). Bring: passport, DS-160 confirmation, financial documents, employment proof, and evidence of ties to India (property, family, employment). Processing after interview: typically 2–4 weeks."],
        ["ESTA Not Available", "ESTA (Electronic System for Travel Authorization) is only available to citizens of the 42 Visa Waiver Program countries, which does not include India. Do not attempt to apply for ESTA on an Indian passport — it will be rejected. The B-2 visa is the only route for Indian tourists."],
        ["Duration & Extensions", "A B-2 visa is typically issued for 10 years with multiple entries. Duration of stay is determined by the CBP officer at the port of entry — usually 6 months for tourists. You can extend within the US by filing Form I-539, but don't rely on this for trip planning purposes. Depart before your I-94 authorized stay expires."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports — ESTA & Entry",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ESTA for Visa Waiver Countries", "Citizens of the 42 Visa Waiver Program countries (UK, Australia, Canada, EU member states, Japan, South Korea, etc.) can visit the USA for up to 90 days using ESTA. Apply online at esta.cbp.dhs.gov ($21 fee, takes 72 hours but usually approved in minutes). ESTA is valid for 2 years or until passport expiry."],
        ["Canadian Citizens", "Canadian citizens do not need a visa or ESTA — they enter with their passport and a valid reason for visit. Canada is the only country with this privilege. Entry is typically fast through the designated Canadian citizen lanes at major airports."],
        ["CBP Global Entry", "If you frequently visit the USA, Global Entry ($120, 5-year validity) gives you expedited customs clearance at all major US airports including SFO. The interview is conducted at any US airport or embassy. Highly recommended for repeat travelers — saves 30–60 minutes in customs queues.",
        ],
        ["San Francisco Airport", "SFO (San Francisco International) is the main airport. Oakland (OAK) is 30 minutes by BART and frequently cheaper. San Jose (SJC) is 1 hour south and serves many budget carriers. All three airports are viable — check flight prices for all three before booking.",
        ],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$85–140/day",
      days: [
        {
          day: "Day 1",
          title: "Golden Gate Bridge, Baker Beach & Fisherman's Wharf",
          items: [
            "Take BART from SFO to downtown San Francisco ($10.85, 30 minutes). Check into a hostel in Union Square or the Tenderloin ($40–70/night). HI San Francisco Downtown is excellent value with a 24-hour café and social atmosphere.",
            "Golden Gate Bridge — take the 28 bus to the bridge's south parking area (free on Sunday with Muni, $3 otherwise). Walk the bridge (free, 2.7km, 45 minutes round trip). Mid-span views of the bay and the city are extraordinary. The bridge faces northwest — afternoon light falls on it most dramatically.",
            "For the best photograph of the Golden Gate, don't stay on the south side. Take the 10-minute drive or 45-minute walk/cycle to Vista Point on the Marin Headlands north side. The full bridge framed by the Marin hills with San Francisco skyline behind it is the iconic shot.",
            "Baker Beach (free, 20-minute walk from the bridge south end) — the view of the Golden Gate from directly below on the beach is completely different from anything up top. The bridge looms overhead; the Pacific crashes in. Dogs welcome, clothing optional in the north section.",
            "Chrissy Field and Fort Mason — walk east along the waterfront (free, 3km). The restored wetlands of Chrissy Field frame the bridge from the east for another perspective. Fort Mason has cheap food trucks and great bay views.",
            "Fisherman's Wharf — yes, it's touristy. The clam chowder served in a sourdough bread bowl ($14–18) is genuinely excellent and the right thing to eat overlooking the bay. Sea lions at Pier 39 are free. Catch the Powell-Mason cable car ($8, buy at the booth) back to Union Square.",
          ],
          cost: "$40–60 total",
        },
        {
          day: "Day 2",
          title: "Alcatraz Island, North Beach & Coit Tower",
          items: [
            "Book Alcatraz ferry tickets at alcatrazcruises.com — at least 3 weeks ahead in peak season, often 2+ months ahead for summer dates. Morning departures (9:00am, 9:30am) sell out first. The 2.5-hour ferry + audio tour package is $45/adult. The night tour ($48) is more atmospheric but not necessary for first-timers.",
            "The Alcatraz audio tour (narrated by former inmates and guards) is one of the best self-guided experiences in America. Spend 2 hours on the island: the cell house, recreation yard, and warden's house shell. The view of San Francisco from the island — the city visible, tantalizingly close across the bay — explains why inmates found it psychologically brutal.",
            "North Beach neighbourhood for lunch — San Francisco's Italian quarter and literary district. City Lights Bookstore (261 Columbus, free to browse) is the Beat Generation's spiritual home — Lawrence Ferlinghetti published Ginsberg's Howl here in 1956. Vesuvio's bar next door ($5–8 for a beer) is where Kerouac and Cassady drank. Eat lunch at a North Beach Italian: Mario's Bohemian Cigar Store Café (focaccia sandwiches, $12–15) or L'Osteria del Forno ($14–20).",
            "Coit Tower ($12 elevator to the top, or hike up the Filbert Street Steps for free) — the Art Deco tower on Telegraph Hill has panoramic views over the bay and the city. The 1934 WPA murals inside the lobby level are extraordinary and free to view. The wild parrots of Telegraph Hill (green conures, escaped pets who became a SF institution) live in the cypress trees on the hillside.",
            "Evening in North Beach — the neighbourhood comes alive at night. Tony's Pizza Napoletana (Vallejo Street, $18–25 for a pizza) consistently wins best pizza in San Francisco. Caffe Trieste (the oldest espresso café on the West Coast) for post-dinner coffee.",
          ],
          cost: "$55–80 total (incl. Alcatraz)",
        },
        {
          day: "Day 3",
          title: "Chinatown, Haight-Ashbury & Golden Gate Park",
          items: [
            "San Francisco Chinatown (Bush Street to Broadway, Kearny to Powell) — the oldest Chinatown in North America and the most densely populated urban neighborhood in the USA. Walk the Dragon Gate entrance on Grant Avenue, then move immediately to the parallel Stockton Street where locals actually shop. Dim sum at Good Mong Kok Bakery (Broadway, $15–25 for an enormous spread) — no frills, paper plates, consistently excellent.",
            "Haight-Ashbury (take the N-Judah streetcar, $3) — the epicenter of the 1967 Summer of Love. The Victorian houses where Janis Joplin, the Grateful Dead (710 Ashbury), and Jefferson Airplane lived are still standing. Today it's vintage clothing shops, record stores, and head shops with a slightly sanitized version of the original bohemian energy. Worth 2 hours of wandering.",
            "Panhandle into Golden Gate Park (free, 1,017 acres) — the park is larger than Central Park. Three stops worth making: the Japanese Tea Garden ($12, the oldest Japanese garden in the USA, opened 1894), the de Young Museum ($15, San Francisco's fine arts museum — excellent photography and contemporary art collections), and the Botanical Garden (free on weekdays, $10 on weekends).",
            "Sunset District for dinner — the residential neighborhood on the park's western edge has the best and cheapest Asian food in the city. San Tung Chinese Restaurant (Irving Street, dry fried chicken wings that San Franciscans queue 45 minutes for, $12–18 full meal), or Thanh Long (Vietnamese, the original garlic crab in San Francisco since 1971).",
          ],
          cost: "$35–60 total",
        },
        {
          day: "Day 4",
          title: "Wine Country Day Trip or Silicon Valley + Mission Burritos",
          items: [
            "Option A — Napa Valley (1.5 hours north on Highway 29): Rent a car ($40–60/day from SFO) or book a shuttle bus tour ($80–120/person). Visit 2 wineries: Domaine Carneros for sparkling wine (free grounds, $40 tasting), Stag's Leap Wine Cellars for the Cabernet Sauvignon that beat French wines at the 1976 Paris Tasting. Lunch at Oxbow Public Market in downtown Napa ($15–25 at food stalls). Return to SF by 6pm.",
            "Option A — Sonoma Valley alternative: smaller, less commercialized than Napa, often 30–40% cheaper tastings. Benziger Family Winery does biodynamic tram tours ($35). Sonoma Plaza has the best casual picnic wine lunch in California — cheese from the Sonoma Cheese Factory, sourdough from a local bakery, a bottle from any local shop.",
            "Option B — Silicon Valley tech tour: drive down Highway 101 to see Apple Park's Visitor Center (free to walk, the ring campus visible from the exterior), Google Campus in Mountain View (free exterior walk, the lawn is public, Googleplex café not publicly accessible), Computer History Museum in Mountain View ($20, genuinely fascinating — original Apple computers, early internet hardware, Babbage's difference engine replica).",
            "Mission District burritos for the farewell meal (drive or BART 16th Street Mission): El Farolito (Mission Street, open until 2:30am, the wet burrito with rice, beans, guac, and your choice of meat, $9–12) or Taqueria Cancún (Market Street, similar quality, shorter queues). San Francisco burritos are larger, cheaper, and better than anything described as a burrito in other US cities. This is not hyperbole — it's the bay area's most honest food legacy.",
          ],
          cost: "$50–100 total (Option A incl. wine tasting)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$230–400/day",
      days: [
        {
          day: "Day 1",
          title: "Golden Gate Sunrise & Waterfront in Style",
          items: [
            "Check into Hotel Zetta (Union Square, $180–280/night) or Hotel Kabuki (Japantown, $150–240/night, exceptional Japanese-inspired spa). Good mid-range hotels in SF have BART connections within 10 minutes.",
            "Golden Gate Bridge at sunrise — take an Uber to Fort Point (under the bridge's south arch) at 6:30am. The combination of the bridge looming overhead, the bay's morning mist, and the first orange light is extraordinary. Fort Point is a free Civil War-era fortress with the best under-bridge perspective in the city.",
            "Breakfast at Tartine Manufactory (Haight Street, $15–25 — pastries from the bakery that single-handedly changed American bread culture). The country sourdough loaf, morning bun, and croque madame are all remarkable.",
            "Sunset harbor cruise — Blue & Gold Fleet bay cruise ($30, 60 minutes, open-air deck). Passes under the Golden Gate, around Alcatraz, and back — the classic bay panorama.",
            "Dinner at Cotogna (Jackson Square, $45–65/person, wood-fired Italian — the best restaurant cooking you can eat without a month-long reservation in SF).",
          ],
          cost: "$200–320 total",
        },
        {
          day: "Day 2",
          title: "Alcatraz Night Tour & Michelin Dinner",
          items: [
            "Morning free. Visit the SFMOMA (San Francisco Museum of Modern Art, $25 — one of the best modern art collections in the USA, the Diego Rivera mural and the photography collection are exceptional).",
            "Lunch at Bix (Gold Street, Jackson Square, $25–40/person) — a legendary supper club serving California cuisine in a 1940s Hollywood setting. The smoked salmon with house-made blinis is the move.",
            "Alcatraz night tour (book at alcatrazcruises.com, $48, departures at 5:55pm and 6:55pm) — the island in the dark, with the city lights visible across the water, is significantly more atmospheric than the daytime visit. The audio tour adds interviews not included in the day version.",
            "Post-Alcatraz dinner reservation at Zuni Café (Market Street, $50–70/person) — the roast chicken for two (baked in the wood-fired oven, served with a warm bread salad, $89) is the definitive San Francisco restaurant dish. Reserve a week ahead.",
          ],
          cost: "$220–350 total",
        },
        {
          day: "Day 3",
          title: "Muir Woods & Marin Headlands",
          items: [
            "Muir Woods National Monument (30 minutes north of SF by car or shuttle, $16 entry, $3 parking reservation required at recreation.gov). The ancient coast redwoods — some over 1,000 years old and 75m tall — create a cathedral atmosphere. Go on a weekday or early morning; weekends get crowded by 10am.",
            "Marin Headlands viewpoint: drive up the Conzelman Road above the north end of the Golden Gate for the best full-bridge panorama in the Bay Area. The headlands are military land (WWII bunkers still stand) — walk the coastal trail for 360° views of the ocean, the bridge, and the bay.",
            "Sausalito lunch ($25–40/person) — the picturesque waterfront town 5 minutes from the bridge's north end. Fish restaurant or crab shack on the waterfront. Take the Golden Gate Ferry back to San Francisco ($14, 30 minutes) for the bay approach to the city.",
            "Evening in Hayes Valley for dinner: Rich Table ($55–75/person, modern Californian cuisine, the sardine chips with potato chips and crème fraîche is a city institution), or bellota ($45–65, Spanish-influenced, excellent cocktail program).",
          ],
          cost: "$210–330 total",
        },
        {
          day: "Day 4",
          title: "Napa Valley with Driver",
          items: [
            "Book a half-day private driver to Napa Valley ($250–350 for a 5-hour tour for 2 people, including 2 winery visits, cheaper than renting a car if you plan to drink). Driver waits at each winery while you taste.",
            "Opus One winery (Oakville, $100 per tasting — the most prestigious Napa Cabernet, worth understanding what a $300 bottle of wine tastes like from the source). Domaine Chandon for sparkling wine and garden lunch.",
            "Napa: CIA at Copia ($15 entry, the Culinary Institute of America's museum and demonstration kitchen in downtown Napa). Lunch at the CIA's showcase restaurant.",
            "Return to SF in time for farewell dinner at Al's Place (Valencia Street, Mission District, $50–70/person, vegetable-focused modern cooking — James Beard Award winner, one of the most exciting restaurants in SF).",
          ],
          cost: "$280–400 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$700–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Palace Hotel Arrival & Private Bridge Sunset",
          items: [
            "The Palace Hotel (2 New Montgomery Street, $400–700/night) or the Fairmont San Francisco (Nob Hill, $450–800/night, cable car stop directly outside). The Palace has the Garden Court — the most beautiful dining room in California, with a stained-glass ceiling.",
            "Private Golden Gate Bridge and Bay Area helicopter tour ($500–700/person, 60 minutes) — aerial views of the bridge, Alcatraz, Sausalito, and the East Bay. The bridge from the air in afternoon light is the definitive San Francisco introduction.",
            "Benu dinner (Howard Street, SoMa, 3 Michelin stars, $380+/person tasting menu) — the most decorated restaurant in San Francisco. Chef Corey Lee's Korean-influenced tasting menu is one of the most creative in the USA. Book 4–6 weeks ahead.",
          ],
          cost: "$700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Alcatraz & Saison Dinner",
          items: [
            "Private Alcatraz tour through exclusive tour operators ($300–500 for a private guide and ferry, access to areas closed to public tours including the hospital and dungeon). Spend 3 hours with a specialist in US penitentiary history.",
            "Afternoon at the de Young Museum private tour ($150–200 for a curator-guided visit) or SFMOMA private viewing of the photography collection.",
            "Dinner at Quince (Pacific Heights, 3 Michelin stars, $450+/person, Italian-influenced, hyper-seasonal California ingredients, the most elegant dining room in SF). Reserve 6–8 weeks ahead.",
          ],
          cost: "$800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Napa + Auction House Wine Experience",
          items: [
            "Private Napa Valley tour by luxury SUV with sommelier guide ($500–700 for the day, 2 people). Access to library wine tastings and private family estates not open to the public — Screaming Eagle, Harlan Estate, or Colgin Cellars by appointment through specialist wine tourism companies.",
            "Meadowood Napa Valley for lunch ($80–120/person at the grill, $450+ for the tasting menu) — three Michelin stars in the wine country, set in private woodland.",
            "Helicopter return from Napa to SF ($400–600 for the charter) — 20-minute flight versus 90-minute drive.",
            "Evening: Bourbon & Branch speakeasy in the Tenderloin ($15–20 cocktails, reservation required for the main bar, walk-in for the Russell's Room annex) — the most historically atmospheric cocktail bar in SF.",
          ],
          cost: "$900–1,600 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Tasting SF & Farewell from the Ferry Building",
          items: [
            "Ferry Building Marketplace Saturday morning (Embarcadero, 8am–2pm) — the most celebrated farmers market in California. Acme Bread Company, Cowgirl Creamery, Blue Bottle Coffee, Hog Island Oyster Co. (oysters at 9am on the waterfront, $3.50 each). Spend $40–60 for the finest food shopping morning in the USA.",
            "Bespoke city tour in a vintage 1960s convertible Mustang ($200–300 for 3 hours with guide) — painted ladies of Alamo Square, Twin Peaks panorama, the Castro, Mission murals, and Coit Tower.",
            "Farewell lunch at Gary Danko (Hyde Street, Fisherman's Wharf, 1 Michelin star, $115–150 tasting menu) — the most reliably excellent restaurant in SF for special occasion dining. The cheese cart is the stuff of legend.",
            "Private transfer to SFO in luxury car ($80–120). Suggested final purchase: a bottle of Ridge Monte Bello Cabernet at the Ferry Building wine shop — the California wine that finished first against French Bordeaux in the 1976 Paris Tasting rematch.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$40–70",
      food: "$20–35",
      transport: "$10–20",
      activities: "$15–30",
      total: "$85–155/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–280",
      food: "$50–80",
      transport: "$20–40",
      activities: "$40–80",
      total: "$260–480/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–800",
      food: "$100–250",
      transport: "$50–150",
      activities: "$100–300",
      total: "$650–1,500/day",
    },
  ],
  mistakes: [
    {
      icon: "⛴️",
      title: "Not Booking Alcatraz in Advance",
      desc: "Alcatraz ferry tickets sell out weeks and often months in advance during summer (June–August) and holiday periods. Many first-time visitors arrive in San Francisco planning to 'pop over to Alcatraz' and discover there are no tickets available for 3 weeks. Book at alcatrazcruises.com the moment you confirm your travel dates. Morning departures (9:00am–10:30am) sell out first. If you miss your slot, there are usually some same-day cancellations released at 7am on the day.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌡️",
      title: "Expecting San Francisco Summer to Be Warm",
      desc: "San Francisco's coldest month is August. The average temperature in August is 16°C (61°F) — and with Karl the Fog rolling in from the Pacific, it frequently feels colder. The famous phrase 'the coldest winter I ever spent was a summer in San Francisco' is often misattributed to Mark Twain, but the phenomenon is real. Pack a fleece, a waterproof layer, and long trousers regardless of what the calendar says. September and October are actually the warmest months.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📸",
      title: "Photographing the Bridge from the Wrong Side",
      desc: "Every major photographic guidebook shows the Golden Gate Bridge from the Marin Headlands on the north side — the full bridge, the bay, and the SF skyline in one frame. Yet most tourists photograph it from the Embarcadero or the south parking area, where you're standing at one end of the bridge looking along it. The Marin Headlands viewpoint (Conzelman Road, Battery Spencer) is 10 minutes by car from the bridge's north end and produces a categorically better photograph. Make the drive.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Golden Gate at Sunrise from Fort Point",
      desc: "Fort Point is a free Civil War-era fortress directly beneath the bridge's south arch. At sunrise, the bridge towers catch orange light and the morning fog swirls through the arch. The combination of the Victorian-era brick fortress and the Art Deco bridge overhead is visually remarkable. Arrive at 6:30am (earlier in summer when sunrise is earlier). The spot was featured in Alfred Hitchcock's Vertigo — the staircase where Madeleine falls into the bay is right there. Parking is free before 8am.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌙",
      title: "Alcatraz Night Tour Is Worth the Premium",
      desc: "The Alcatraz night tour ($48 vs. $45 daytime) boards at 5:55pm or 6:55pm and returns after dark. The experience of crossing the bay toward the floodlit island, walking cell blocks where the shadows are actual shadows rather than tourist-lighting, and hearing the audio tour's accounts of the escape attempts with the city lights visible across the water is significantly more atmospheric than the daytime version. The night tour also has smaller crowds. Book it for at least one San Francisco trip.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌯",
      title: "Mission District Burritos — The Best Value Food in Expensive SF",
      desc: "San Francisco has a cost-of-living crisis, and restaurant prices reflect it. A Mission District burrito ($9–12) is the glorious exception — enormous, fresh, and better than anything called a burrito in other US cities. El Farolito (24th and Mission, open until 2:30am) and Taqueria Cancún (Market Street) are the two institutions. Order the super burrito with carnitas or al pastor, rice, beans, guacamole, and salsa. Eat standing at the counter or take it to Dolores Park (5-minute walk) and eat in the sun. This is San Francisco's greatest contribution to American food culture.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is San Francisco safe for tourists?",
      a: "San Francisco has a complicated safety reputation. The Tenderloin district (around Turk, Hyde, and Market Streets) has significant open drug use and homelessness and should be avoided at night and approached cautiously during the day. The downtown SoMa area around the Civic Center has similar issues. Tourist areas — Fisherman's Wharf, North Beach, the Mission, the Castro, Nob Hill, Chinatown, and the Embarcadero — are generally safe with normal urban precautions. Don't leave anything visible in a parked car (serious and frequent problem in SF). Most visitors have a completely incident-free experience.",
    },
    {
      q: "What is Karl the Fog and when does it disappear?",
      a: "Karl the Fog is San Francisco's famous marine layer — a persistent coastal fog that rolls in from the Pacific through the Golden Gate and over Twin Peaks. In summer (June–August), Karl typically appears in the evening, covers the city overnight, and burns off by late morning. The Golden Gate Bridge is frequently invisible from the south side during morning fog but visible from the Marin Headlands above the fog line. In autumn (September–October), the fog is minimal, days are clearer, and temperatures are actually warmer. Local tip: if you want clear Golden Gate photos, go in autumn or wait until after 10am in summer.",
    },
    {
      q: "How do I get from SFO to San Francisco city?",
      a: "BART (Bay Area Rapid Transit) is the best option: $10.85, 30 minutes to the Embarcadero or Powell Street stations, runs every 15–20 minutes. Board the BART at the international terminal's dedicated station — follow signs from baggage claim. Uber from SFO to Union Square is $30–60 depending on surge pricing. Taxis are available but expensive ($50–65 fixed zone). From Oakland Airport (OAK), take the airport shuttle to the Coliseum BART station ($3) then BART to SF ($4.60, 25 minutes). OAK is often significantly cheaper for flights.",
    },
    {
      q: "Napa Valley or Sonoma — which is better for a day trip?",
      a: "Napa is more prestigious, more expensive, and more commercial — the wineries are grand, the tasting experiences polished, and the prices for wine and food higher. Sonoma is less formal, more agricultural, with smaller family wineries and better value tastings ($20–35 vs. $40–100 per tasting in Napa). If you want the show — the vine-draped estates, the drama of Stag's Leap and Opus One — go to Napa. If you want a genuinely relaxed wine country afternoon where the winery owner might pour your taste personally, go to Sonoma. Both are within 1.5 hours of SF. Don't drink and drive — book a driver or join a tour.",
    },
    {
      q: "Do Indians need a visa for the USA?",
      a: "Yes. Indian passport holders require a B-2 tourist visa for the USA — ESTA is not available on an Indian passport. Apply at ustraveldocs.com through the US Consulate in India (Delhi, Mumbai, Chennai, Hyderabad, or Kolkata). The fee is $185 (non-refundable even if rejected). Interview appointment wait times vary from 2 weeks to 3+ months depending on location and season — apply at least 3–4 months before your intended travel date. Once approved, a B-2 visa is typically valid for 10 years with multiple entries. Duration of each stay is determined by the immigration officer at entry (usually 6 months for tourists).",
    },
  ],
  combineWith: ["las-vegas-3-days", "los-angeles-5-days", "yosemite-3-days"],
  relatedSlugs: ["las-vegas-3-days", "los-angeles-5-days", "chicago-3-days", "new-york-5-days"],
  galleryQuery: "san francisco golden gate bridge alcatraz bay area california",
};

export const metadata: Metadata = {
  title: "San Francisco 4-Day Itinerary (2026): Golden Gate, Alcatraz + Napa Day Trip",
  description: "Complete 4-day San Francisco guide — Alcatraz booking secrets, Golden Gate sunrise spot most tourists miss, Napa vs Sonoma, Mission burritos. From $85/day, B-2 visa info for Indians.",
  keywords: [
    "san francisco itinerary 4 days",
    "san francisco travel guide 2026",
    "golden gate bridge guide",
    "alcatraz island booking",
    "napa valley day trip san francisco",
    "san francisco budget travel",
  ],
  openGraph: {
    title: "San Francisco 4-Day Itinerary (2026): Golden Gate, Alcatraz + Napa",
    description: "Alcatraz booking secrets, Golden Gate sunrise spot most tourists miss, Napa vs Sonoma, Mission burritos. From $85/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Golden Gate Bridge San Francisco fog sunrise California",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Francisco 4-Day Itinerary (2026)",
    description: "Alcatraz booking secrets, Golden Gate sunrise, Napa vs Sonoma, $85/day.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/san-francisco-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "San Francisco in 4 Days: Golden Gate, Alcatraz, Wine Country & Burritos (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
      description:
        "Complete 4-day San Francisco itinerary covering Golden Gate Bridge, Alcatraz, Napa Valley, Mission burritos, and Karl the Fog.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "San Francisco 4 Days",
          item: "https://www.incredibleitinerary.com/blog/san-francisco-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "San Francisco, California, USA",
      description:
        "America's most dramatic city — Golden Gate Bridge, Alcatraz, Napa Valley wine country, and the Mission District burrito in 49 square miles of hills above the bay.",
      geo: { "@type": "GeoCoordinates", latitude: 37.7749, longitude: -122.4194 },
      touristType: ["City break travelers", "Food lovers", "Wine tourists", "History enthusiasts"],
    },
  ],
};

export default function SanFranciscoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
