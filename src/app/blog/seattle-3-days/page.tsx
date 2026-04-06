import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Seattle 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Seattle trip in 3 days. Plan the perfect 3-day Seattle itinerary — Pike Place Market, Space Needle, Chihuly Glass, MoPOP, Kerry Park, Bainbridge.",
  keywords: [
    "Seattle travel guide",
    "Seattle itinerary 3 days",
    "Pike Place Market Seattle",
    "Space Needle Seattle",
    "Chihuly Garden and Glass",
    "MoPOP Seattle",
    "Kerry Park Seattle view",
    "Seattle budget travel",
    "Bainbridge Island ferry",
    "original Starbucks Seattle",
    "ESTA visa USA",
    "US B1/B2 tourist visa",
    "Washington state travel",
    "Seattle coffee culture",
  ],
  openGraph: {
    title: "Seattle 3-Day Itinerary 2026: Trip Planner",
    description:
      "Flying fish at Pike Place, coffee from the original Starbucks, Mount Rainier reflected in Lake Union — Seattle is America's most underrated city. Full guide from $75/day.",
    url: "https://incredibleitinerary.com/blog/seattle-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?seattle,space-needle,mount-rainier",
        width: 1200,
        height: 630,
        alt: "Seattle Space Needle with Mount Rainier and Elliott Bay in background",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle 3-Day Itinerary 2026: Trip Planner",
    description:
      "Pike Place fishmongers, the original Starbucks, Space Needle and Mount Rainier — Seattle's magic in 3 days from $75/day.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/seattle-3-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Seattle in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 3-day Seattle itinerary covering Pike Place Market, the Space Needle, Chihuly Garden and Glass, MoPOP, Capitol Hill coffee, and the Bainbridge Island ferry — with plans from $75 to $300 per day.",
      image: "https://source.unsplash.com/1200x630/?seattle,space-needle,mount-rainier",
      datePublished: "2026-01-25",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/seattle-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Seattle 3-Day Guide",
          item: "https://incredibleitinerary.com/blog/seattle-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Seattle",
      description:
        "A Pacific Northwest city famous for Pike Place Market, the Space Needle, world-class coffee culture, the original Starbucks, stunning views of Mount Rainier, and a thriving food and tech scene.",
      url: "https://incredibleitinerary.com/blog/seattle-3-days",
      touristType: ["Food & Coffee", "Nature", "Music", "Technology", "Culture"],
      geo: { "@type": "GeoCoordinates", latitude: 47.6062, longitude: -122.3321 },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Seattle",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "seattle-3-days",
  heroQuery: "seattle space needle skyline washington state mountains",
  heroAlt: "Seattle Space Needle with Mount Rainier and Elliott Bay in background",
  category: "North America",
  date: "January 25, 2026",
  readTime: "12 min read",

  intro:
    "At 8am, the Pike Place Market fishmongers are already throwing whole salmon across the stall in theatrical arcs — and the crowd roars every time. Around the corner, the original Starbucks store (Pike Place, 1971) has a queue out the door of pilgrims ordering plain black coffee from mismatched mugs. By noon you can kayak on Lake Union with the Space Needle on one side and Mount Rainier — impossibly large, impossibly white — reflected in the water on the other. Under the Space Needle sits what might be the world's greatest collection of used books. And somewhere in Capitol Hill, seventeen different independent coffee roasters are competing for the title of America's best flat white. Seattle is the most underrated city in the United States: dramatic, creative, brilliantly fed, and perpetually misunderstood as just the rainy city where grunge was born. Three days is enough to understand why people who visit often end up moving here.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$75",
    bestMonths: "Jun–Sep (summer)",
    airport: "SEA",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "coffee", emoji: "☕", label: "Coffee Culture Guide" },
    { id: "nature", emoji: "🏔️", label: "Nature & Day Trips" },
    { id: "getting-around", emoji: "🚆", label: "Getting Around" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "B1/B2 US Tourist/Business Visa"],
        ["Fee", "$185 (non-refundable application fee)"],
        ["Processing", "2–8 weeks (varies by consulate and season)"],
        ["Validity", "Up to 10 years (multiple entry), max 180 days per visit"],
        ["Apply At", "US Embassy New Delhi, or Consulates in Mumbai, Chennai, Hyderabad, Kolkata"],
        ["Documents", "DS-160 online form, photo, financial statements, ties to India, itinerary"],
        ["Interview", "In-person biometric interview required — book appointment early"],
        ["Tip", "Apply 3–6 months ahead; Seattle tech connections can strengthen visa applications for IT professionals"],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / AU / EU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "No visa required — ESTA mandatory"],
        ["ESTA Fee", "$21 (apply at esta.cbp.dhs.gov — official US government site only)"],
        ["ESTA Approval", "Usually within minutes; allow 72 hours before departure as a buffer"],
        ["Stay Limit", "90 days per visit (Visa Waiver Program)"],
        ["EU Citizens", "ESTA applies to all VWP-eligible EU nations; same $21 fee"],
        ["Passport", "Must be a biometric e-Passport with chip"],
        ["Tip", "ESTA is linked to your passport — if you renew your passport, you need a new ESTA"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$75/day",
      days: [
        {
          day: "Day 1",
          title: "Pike Place, Capitol Hill & the Original Starbucks",
          items: [
            "Arrive at Seattle-Tacoma International (SEA) — Link Light Rail to downtown is $3.50 and takes 38 minutes; runs every 6 minutes",
            "Check into a Capitol Hill or downtown hostel — City Hostel Seattle or Green Tortoise Hostel, dorms from $35/night",
            "Pike Place Market opening: arrive by 9am to see the Pike Place Fish Market throw before tourist crowds build",
            "Grab breakfast at Pike Place: Piroshky Piroshky (Russian pastries, ~$4) or a bagel from Eltana — delicious and cheap",
            "Walk 50 meters to the original Starbucks at 1912 Pike Place — a coffee here is $6–8 but it's one of those obligatory pilgrimages",
            "Explore the market's lower levels: the 'Pike Place Market Underbelly' — artisan jam, cheese, and flower stalls that tourists miss",
            "Afternoon: walk to Capitol Hill neighbourhood — Seattle's creative heart, coffee shops, independent bookstores, and the best people-watching in the city",
            "Budget dinner on Capitol Hill: Pho Bac Súp Shop or Stateside for under $15 — excellent Southeast Asian food",
            "Evening: live music at Neumos on Pike Street (cover varies, $10–20) — one of Seattle's legendary independent music venues",
          ],
          cost: "~$70 (light rail + hostel + food + coffee + evening show)",
        },
        {
          day: "Day 2",
          title: "Space Needle, Chihuly & Kerry Park Sunset",
          items: [
            "Morning: Seattle Center by 10am — the 1962 World's Fair grounds housing the Space Needle, Chihuly, and MoPOP",
            "Budget option: skip the Space Needle interior ($40) and instead walk to Kerry Park (free) for the better view — from 2nd Ave W on Queen Anne hill",
            "Chihuly Garden and Glass ($32 adult) — Dale Chihuly's extraordinary glass sculpture installation is genuinely world-class; the greenhouse is unforgettable",
            "Lunch: food trucks outside Seattle Center or Serious Pie on Virginia Street (~$15 for a slice and salad)",
            "Museum of Pop Culture (MoPOP, $32): Jimi Hendrix exhibit, the Science Fiction Hall of Fame, and the Nirvana collection — allow 2–3 hours",
            "Walk through Amazon's campus to see the Amazon Spheres (exterior — free to view, interior requires Amazon employee access)",
            "Sunset: Kerry Park on Queen Anne Hill — the most photographed view in Seattle (Space Needle + downtown + Mount Rainier on clear days), 100% free",
            "Dinner: Dick's Drive-In on Broadway in Capitol Hill — a Seattle institution since 1954, cheeseburger and fries for $8",
          ],
          cost: "~$80 (Chihuly + MoPOP + food + Dick's Drive-In)",
        },
        {
          day: "Day 3",
          title: "Bainbridge Island Ferry & Farewell",
          items: [
            "Morning: walk to the Washington State Ferries terminal at Coleman Dock (Pier 52) — the round-trip ferry to Bainbridge Island is $10.20 for a walk-on passenger",
            "The 35-minute crossing offers the best views of the Seattle skyline — stand on the bow in the morning light",
            "Bainbridge Island: walk into Winslow town (5 min from ferry dock) — excellent coffee at Blackbird Bakery, independent bookshop Eagle Harbor Book Co.",
            "Walk or rent a bike to explore the island's trails and waterfront (bike rental ~$25/hour from B.I. Cycle)",
            "Return ferry to Seattle by early afternoon — free to return as a walk-on foot passenger",
            "Afternoon: Waterfront Park and the Seattle Great Wheel (Ferris wheel on Pier 57, $16 adult) for water-level Elliott Bay views",
            "Final coffee: Victrola Coffee Roasters on Capitol Hill — one of Seattle's best independent roasters, order the single-origin pour-over",
            "Book or record shopping: Easy Street Records in Queen Anne or Half Price Books on Broadway — Seattle's second-hand book culture is excellent",
            "Light Rail back to SEA-TAC for your departure — $3.50, no stress",
          ],
          cost: "~$70 (ferry + bike + food + waterfront + light rail back)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$150/day",
      days: [
        {
          day: "Day 1",
          title: "Market, Capitol Hill & Craft Beer Scene",
          items: [
            "Arrive at SEA — Uber to Capitol Hill or downtown hotel (~$35); or Light Rail ($3.50) to save money on arrival",
            "Check into a boutique hotel: Hotel Sorrento, Kimpton Palladian, or the Paramount Hotel — doubles from $140/night",
            "Pike Place Market at 9am: join a guided market food tour ($45pp via GetYourGuide) — the guide introduces you to salmon smokers, cheese mongers, and bakers you'd walk past otherwise",
            "The Original Starbucks: order the Pike Place Roast served in-house — the cup design here is original 1971 branding",
            "Lunch: Matt's in the Market restaurant on the second floor of the market building — stunning Elliott Bay views, $25–35pp",
            "Afternoon: Capitol Hill coffee crawl — Victrola, Lighthouse, and Analog Coffee within 4 blocks; pair with a visit to Elliott Bay Book Company (the best independent bookshop in the Northwest)",
            "Dinner: Altura on East Pine for Northern Italian-Pacific Northwest cuisine, ~$55pp — one of the best Italian restaurants on the West Coast",
            "Evening: live music at the Crocodile (founded 1991, where Nirvana played early shows) or a cocktail at Canon — 4,000+ whiskies",
          ],
          cost: "~$145 (hotel + food tour + Matt's in Market + dinner + cocktails)",
        },
        {
          day: "Day 2",
          title: "Seattle Center, Kayaking & Fremont",
          items: [
            "Morning: Space Needle observation deck ($40) — go at 9am for clear skies; book online to save $5 and skip queues",
            "Chihuly Garden and Glass immediately next door ($32) — combination ticket with Space Needle saves $12",
            "Lunch: Lola restaurant on 4th Ave — Tom Douglas's Greek-American restaurant, excellent lamb burger, ~$25pp",
            "Afternoon: rent a kayak from Agua Verde Paddle Club on Portage Bay ($20/hour) — paddle Lake Union with Space Needle and Rainier views",
            "Drive or bus to Fremont neighbourhood (the 'Center of the Universe'): see the Fremont Troll under the Aurora Bridge (free), the Lenin statue (free), and the famous Sunday market",
            "Coffee: Lighthouse Coffee Roasters in Fremont — consistently ranked among Washington's top roasters",
            "Dinner: Manolin in Fremont for superb Pacific Northwest seafood — Dungeness crab, oysters, and excellent cocktails, ~$55pp",
            "Evening: MoPOP (Museum of Pop Culture) has late Thursday and Friday hours — great without daytime crowds",
          ],
          cost: "~$155 (Space Needle + Chihuly + kayak + Tom Douglas lunch + dinner)",
        },
        {
          day: "Day 3",
          title: "Bainbridge Island & Mount Rainier Views",
          items: [
            "Morning ferry to Bainbridge Island (9am crossing, $10.20 walk-on) — stand at the bow for skyline photography",
            "Rent bikes on Bainbridge and cycle to Bloedel Reserve ($20 admission) — 150 acres of designed woodland gardens, stunning in any season",
            "Lunch at Hitchcock Restaurant in Winslow ($35pp) — farm-to-table Pacific Northwest cuisine using Bainbridge Island produce",
            "Return ferry to Seattle — arrive back by 3pm",
            "Afternoon: drive or Uber to the Ballard Locks (Hiram M. Chittenden Locks) — watch boats transit between salt and fresh water, free admission, salmon ladder with viewing window",
            "Kerry Park at golden hour: Rainier appears roughly 60% of summer days from this viewpoint — worth the visit regardless",
            "Farewell dinner: Canlis Restaurant for celebratory Pacific Northwest fine dining — James Beard award-winning, mid-century-modern building overlooking Lake Union, ~$90pp; book weeks ahead",
          ],
          cost: "~$155 (ferry + Bloedel + bike + Hitchcock + Canlis)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$300/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at the Four Seasons & Market Immersion",
          items: [
            "Private car transfer from SEA airport to the Four Seasons Seattle or the Fairmont Olympic Hotel (~$75)",
            "Check into a harbour-view suite at the Four Seasons Seattle (from $500/night) — floor-to-ceiling Elliott Bay views with Mount Rainier on the horizon",
            "Private Pike Place Market tour with a culinary guide (2h, $120 private) — behind-the-scenes access to vendors, tastings of smoked salmon, artisan cheeses, and Washington apple varieties",
            "Lunch at The Inn at the Market's Atrium restaurant — hidden rooftop terrace above Pike Place with harbour views, ~$45pp",
            "Afternoon: private coffee cupping session with a Seattle specialty roaster (Caffe Vita or Stumptown offer private cuppings, ~$80pp) — understand terroir in coffee at the city that pioneered third-wave coffee culture",
            "Cocktails at the Four Seasons bar's Oliver's Lounge — Elliott Bay views, impeccable service, expertly made Pacific Northwest cocktails (~$20)",
            "Dinner: Canlis Restaurant — Seattle's most celebrated fine dining restaurant since 1950, reserve the chef's counter for an intimate tasting experience, ~$120pp",
          ],
          cost: "~$320 (luxury hotel + private market tour + Canlis + private cupping)",
        },
        {
          day: "Day 2",
          title: "Space Needle VIP, Chihuly Private & Kayak Tour",
          items: [
            "Private sunrise Space Needle experience (available on request for guests of select hotels) — the revolving glass floor at dawn with Seattle waking up below",
            "Chihuly Garden and Glass (private after-hours access can be arranged for groups, ~$200+ for exclusive viewing) — the normal $32 admission is also excellent",
            "Brunch: Serious Pie at Westlake — Tom Douglas's artisan pizza restaurant, excellent for a late morning meal, ~$30pp",
            "Afternoon: private guided kayak tour of Lake Union from the Eastlake neighbourhood ($120pp for 2.5 hours) — a certified guide, the best equipment, and a narrative of Seattle's waterfront history",
            "Amazon Spheres interior access (requires advance booking through Amazon's community partner programme — ask your concierge) — the tropical greenhouse inside Amazon HQ is extraordinary",
            "Kerry Park photography session with a professional photographer ($200, 2 hours at golden hour) — leave with stunning Rainier + Space Needle images",
            "Dinner: Altura on East Pine (reserve chef's table for tasting menu, ~$120pp) — 10-course Northern Italian-Pacific Northwest",
          ],
          cost: "~$300 (private kayak + photography + Altura tasting menu + hotel)",
        },
        {
          day: "Day 3",
          title: "Bainbridge Private Tour & Mount Rainier Departure",
          items: [
            "Private charter sailboat from Lake Union or Elliott Bay Marina — 3-hour morning sail around the harbour with Mount Rainier views (~$300 for 2 people, from various charter companies)",
            "Washington State Ferry to Bainbridge Island (even luxury travellers do the ferry — it's the best thing in Seattle) — enjoy the crossing in the upper deck with a coffee",
            "Bainbridge Island: arrange a private car on the island and visit Bloedel Reserve followed by lunch at Café Nola (~$40pp)",
            "Return to Seattle and visit the Nordic Museum in Ballard — Seattle's Scandinavian heritage beautifully told, small but world-class ($15)",
            "Ballard Locks for salmon-watching (seasonal, July–November) — free, and genuinely fascinating",
            "Final afternoon: spa treatment at the Four Seasons Seattle Spa (90-minute massage ~$250)",
            "Airport departure: private car to SEA (~$75) — the Four Seasons concierge will handle everything",
          ],
          cost: "~$300 (private sailboat + Bainbridge + Nordic Museum + spa + private car to SEA)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$35–50 (hostel dorm)",
      food: "$20–30 (market stalls, food trucks, Dick's Drive-In)",
      transport: "$8–15 (Light Rail + occasional bus)",
      activities: "$32–50 (Chihuly or MoPOP + free Kerry Park)",
      total: "~$75/day",
    },
    {
      tier: "🏨 Economy",
      accommodation: "$90–120 (budget hotel or Airbnb)",
      food: "$35–50 (mix of casual and mid restaurants)",
      transport: "$15–25 (Uber + Light Rail)",
      activities: "$50–70 (Space Needle or Chihuly + MoPOP)",
      total: "~$110/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$140–200 (boutique hotel)",
      food: "$55–80 (Tom Douglas restaurants, Capitol Hill dining)",
      transport: "$30–45 (Uber + ferry + bike rental)",
      activities: "$80–100 (Space Needle + Chihuly + kayak)",
      total: "~$150/day",
    },
    {
      tier: "🌟 Upper-Mid",
      accommodation: "$250–350 (upscale hotel)",
      food: "$90–120 (Canlis, Manolin, Altura)",
      transport: "$50–70 (private transfers)",
      activities: "$100–130 (private tours + Bloedel Reserve)",
      total: "~$230/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–600 (Four Seasons or Fairmont suite)",
      food: "$120–180 (tasting menus, Canlis chef's table)",
      transport: "$75–120 (private car + ferry)",
      activities: "$150–200 (private kayak + photographer + sailboat)",
      total: "~$300/day",
    },
  ],

  mistakes: [
    {
      icon: "🌧️",
      title: "Not Understanding Seattle Weather",
      desc: "Seattle doesn't actually get that much annual rainfall — it gets persistent light drizzle from October through May that feels relentless. Pack a waterproof layer and accept that Seattleites never use umbrellas (it's almost a cultural rule). The payoff: June through September is spectacular — 22–28°C, almost no rain, and Mount Rainier visible on roughly 60% of summer days from Kerry Park. July and August are arguably the best urban summer climate in the USA.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "☕",
      title: "Treating the Original Starbucks as the Coffee Destination",
      desc: "The original Starbucks at 1912 Pike Place is worth a photo and one coffee — it's a genuine pilgrimage spot. But Seattleites get their coffee at independent roasters: Victrola, Lighthouse Roasters, Caffe Vita, Elm, Milstead & Co., or Analog Coffee. The Pacific Northwest specialty coffee scene is the best in America. Ask a local where they drink — they'll never say Starbucks. Try a cortado or a single-origin pour-over at a local roaster for the authentic experience.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🎡",
      title: "Skipping Chihuly Because 'It's Just Glass'",
      desc: "Chihuly Garden and Glass is one of the most visually extraordinary spaces in the United States. Dale Chihuly's monumental glass sculptures — some 30 feet high, in colours that seem physically impossible — fill a greenhouse, outdoor garden, and a series of gallery rooms next to the Space Needle. It's more viscerally impressive than MoMA or the Guggenheim for many visitors. At $32, it's the best value attraction in Seattle. Don't skip it.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🚗",
      title: "Underestimating Seattle's Hills and Traffic",
      desc: "Seattle is genuinely hilly — Capitol Hill, First Hill, Queen Anne, and Beacon Hill all require climbing. Don't plan to walk between neighbourhoods too freely; the distance may look short on a map but the elevation gain can be severe. Seattle also has some of the worst traffic in the USA — avoid Ubers during rush hour (7–9am and 4–7pm). Use the Link Light Rail for airport connections and the bus system for crosstown travel. The downtown streetcar is handy for First Hill connections.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏔️",
      title: "Not Checking Mount Rainier Visibility",
      desc: "Mount Rainier is visible from Seattle only on clear days — roughly 60–70% of summer days and much less in other seasons. Check the weather forecast the night before and plan your Kerry Park visit, your ferry crossing, or your kayak session for a morning that shows blue sky. The mountain is often clearer in the morning before afternoon cloud builds. The Seattle Times and local weather apps report 'Rainier visibility' explicitly — a fun local quirk.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🚢",
      title: "Missing the Bainbridge Island Ferry",
      desc: "Many visitors to Seattle stay purely in the city and miss what is, objectively, one of the best experiences in the Pacific Northwest. The Washington State Ferry to Bainbridge Island ($10.20 walk-on round trip) crosses Elliott Bay in 35 minutes with stunning skyline views, lands in a charming small island town with excellent coffee and food, and allows you to see Seattle from the water. It runs frequently, requires no booking, and is an absolute must-do on any visit.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ],

  tips: [
    {
      icon: "🎟️",
      title: "Buy the Seattle CityPASS for Major Attractions",
      desc: "The Seattle CityPASS ($109 adult) includes the Space Needle, Chihuly Garden and Glass, the Woodland Park Zoo, the Seattle Aquarium, and either MoPOP or the Museum of Flight. If you plan to visit at least three of these, the pass saves 40–50% versus individual tickets. Buy online before arrival. It's valid for 9 consecutive days — no rush to cram everything in one day.",
      color: "border-gold-200 bg-amber-50",
    },
    {
      icon: "🐟",
      title: "Go to Pike Place at 9am Sharp for the Fish Throw",
      desc: "Pike Place Fish Market throws fish starting at 9am when the market opens — and again regularly throughout the day. But the 9–10am period has the most theatrical throws, the most engaged fishmongers, and the smallest crowds. By 11am the market is packed. Come early, watch a throw, chat with the vendors, and buy smoked salmon to take home (they'll vacuum-seal it). The market's busiest hours are 11am–2pm — avoid for shopping.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📚",
      title: "Visit Elliott Bay Book Company on a Rainy Afternoon",
      desc: "Elliott Bay Book Company on Capitol Hill is one of the great independent bookshops of America — three floors, 150,000 titles, handwritten staff recommendation cards on nearly every shelf, and a remarkable events programme (readings, signings, discussions). On a rainy Seattle afternoon, it's the perfect place to spend two hours. The basement café serves excellent coffee and light food. Budget $30–50 for books you'll genuinely treasure.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎡",
      title: "Book Chihuly and Space Needle Tickets via GetYourGuide",
      desc: "Avoid queuing for individual tickets at the Space Needle and Chihuly Garden and Glass — both sell out on summer days and long queues form at the gate. Book via GetYourGuide at getyourguide.com/s/?q=Seattle&partner_id=PSZA5UI for verified tickets with skip-the-line access, free cancellation, and combination deals. Guided tours of Pike Place Market and Bainbridge Island are also available for booking through the same platform.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  faqs: [
    {
      q: "Is 3 days enough time for Seattle?",
      a: "Three days is the perfect introduction to Seattle — enough to see the major sights (Pike Place, Space Needle, Chihuly, MoPOP, Capitol Hill) and do one day trip (Bainbridge Island or a half-day in the Cascades). You won't see everything — the Museum of Flight, the University District, Ballard's full neighbourhood charm, and day trips to Mount Rainier National Park or the Olympic Peninsula all deserve more time. But three days leaves you wanting to return, which is the right outcome.",
    },
    {
      q: "What is the best neighbourhood to stay in Seattle?",
      a: "Capitol Hill is the best all-around neighbourhood for visitors: excellent restaurants and coffee shops in every direction, walkable, vibrant nightlife, and well-connected by bus to everywhere else. Downtown/Belltown puts you closest to Pike Place Market and the waterfront. Queen Anne is quieter and more residential (but close to Seattle Center and Kerry Park). Pioneer Square is historic with a strong gallery and bar scene. Avoid staying in Sodo or the International District for first-time visitors — they're fine but lack the walking-around vibe.",
    },
    {
      q: "When does Mount Rainier become visible from Seattle?",
      a: "On clear days — primarily June through September, and occasionally in winter after storm systems clear. The mountain is 60 miles away but so large (14,411 feet / 4,392m) that it dominates the southern horizon. Kerry Park on Queen Anne Hill is the classic viewpoint. The Bainbridge Island ferry also offers spectacular views. Morning clarity is usually better than afternoon. Check the day's forecast — locals follow Rainier visibility as closely as temperature.",
    },
    {
      q: "Is Seattle expensive to visit?",
      a: "Seattle sits in the middle of the US city spectrum for visitors — more expensive than cities like Nashville or New Orleans, cheaper than New York or San Francisco. Budget travellers can manage $75/day with a hostel, food trucks, and the free/cheap attractions (Kerry Park, Bainbridge ferry, Fremont Troll). Mid-range travellers spend $140–170/day with a good hotel and Seattle's excellent restaurant scene. Accommodation is the biggest variable — book at least 4–6 weeks ahead in summer.",
    },
    {
      q: "Is Seattle safe for tourists?",
      a: "Seattle's tourist areas — Capitol Hill, Pike Place/Waterfront, Seattle Center, Fremont, Ballard, and Queen Anne — are generally safe. Downtown Seattle has seen increased homelessness and some associated safety concerns around 3rd Avenue and parts of Pike/Pine, particularly at night. The International District and Pioneer Square are fine in the day but quieter at night. Use standard urban precautions: keep bags close in markets, use Uber for late-night crosstown trips, and stay aware of your surroundings.",
    },
  ],

  combineWith: ["portland-3-days", "vancouver-4-days", "olympic-national-park"],
  relatedSlugs: ["portland-3-days", "san-francisco-4-days", "vancouver-4-days", "los-angeles-4-days"],

  galleryQuery: "seattle pike place market space needle mount rainier washington",
};

/* ── Page component ────────────────────────────────────────────────────── */
export default function SeattlePage() {
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
