import type { Metadata } from "next";
import DenverClient from "./DenverClient";

// Legacy data preserved for reference — content is now rendered by DenverClient
const _data = {
  destination: "Denver",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "denver-3-days",
  heroQuery: "Denver Colorado skyline Rocky Mountains downtown",
  heroAlt: "Denver Colorado skyline with the Rocky Mountains rising in the background",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Denver sits at exactly one mile above sea level — and everything about it reaches for altitude. Red Rocks Amphitheatre is the most dramatic outdoor concert venue on the planet, Rocky Mountain National Park is just 90 minutes from the hotel district, and the RiNo Art District has transformed mile-long warehouses into one of America's most exciting creative neighborhoods. Three days gives you Red Rocks and the natural world, the Denver Art Museum and 16th Street Mall, plus the craft beer mile that put Colorado brewing on the international map.",
  stats: { duration: "3 Days", budgetFrom: "$80", bestMonths: "May–Oct", airport: "DEN" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Red Rocks & RiNo" },
    { id: "day2", emoji: "📅", label: "Day 2 — Rocky Mountain NP" },
    { id: "day3", emoji: "📅", label: "Day 3 — Art Museum & 16th Street" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — B-2 Tourist Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B-1/B-2 Tourist Visa"],
        ["Processing", "2–8 weeks (consular interview required)"],
        ["Fee", "$185 USD (non-refundable MRV fee)"],
        ["Validity", "Up to 10 years, 6 months max per entry"],
        ["Apply at", "US Embassy or Consulate in India (Mumbai, Delhi, Chennai, Hyderabad, Kolkata)"],
        ["Documents", "DS-160 form, passport photos, bank statements, employment letter, return ticket"],
        ["Notes", "Schedule interview 2–4 months early; waitlists vary significantly by consulate location."],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / EU / AU / CA — ESTA Visa Waiver",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "ESTA (Electronic System for Travel Authorization)"],
        ["Processing", "Instant to 72 hours (apply online)"],
        ["Fee", "$21 USD per person"],
        ["Validity", "2 years or until passport expiry, 90 days per visit"],
        ["Apply at", "esta.cbp.dhs.gov — official US Customs site only"],
        ["Passport", "Must be biometric e-Passport with chip"],
        ["Notes", "Apply 72+ hours before departure. Multiple entries allowed within the 2-year validity period."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$80–110/day",
      days: [
        {
          day: "Day 1",
          title: "Red Rocks Amphitheatre & RiNo Art District",
          items: [
            "09:00 — Rent a car or take an RTD bus + hike to Red Rocks Amphitheatre (20 miles southwest of Denver; car rental $35–50/day) — Red Rocks is a natural rock amphitheatre carved by 300-million-year-old sandstone formations rising 400 feet; the Trading Post Trail (1.4 miles) is free and circles the entire venue",
            "10:30 — Red Rocks Trail Hike: the Trading Post Trail is free to access year-round even when no concert is scheduled; the natural acoustics and views east across Denver to the plains are extraordinary at this hour before tour groups arrive",
            "12:30 — Return to Denver; lunch at a food hall: Denver Central Market in RiNo ($12–16 for gourmet sandwiches, tacos, or ramen) — 14 vendors in a converted warehouse at 2669 Larimer St",
            "14:30 — RiNo Art District self-guided mural walk — the 1-mile stretch of Brighton Blvd and Larimer St has over 200 commissioned murals; the Denver Street Art guide (free PDF at denver.org) identifies each artwork and artist",
            "17:00 — Craft beer hour at Breckenridge Brewery taproom on Kalamath St ($5–7/pint) — Colorado craft beer is a genuine cultural export; Breckenridge's Avalanche Amber and Vanilla Porter are Colorado classics",
            "19:30 — Dinner on South Broadway (the antique district): Tom's Home Cookin' for soul food ($13–17 for mains) or Punch Bowl Social's massive food and entertainment complex ($15–20 range)",
          ],
          cost: "$55–75 (car, meals, 2 beers, trail free)",
        },
        {
          day: "Day 2",
          title: "Rocky Mountain National Park Day Trip",
          items: [
            "07:00 — Early start: drive US-36 west to Estes Park (65 miles, 90 minutes) — arrive before 9am to secure parking and avoid the mandatory timed entry permit that's required 9am–3pm May through October ($2 permit fee, reserve at recreation.gov)",
            "08:30 — Rocky Mountain National Park entry ($35/vehicle for 7 days, free with America the Beautiful Pass) — the park contains 14,259-foot Longs Peak, 355 miles of trails, and herds of elk visible from the road in morning and evening",
            "09:00 — Hike Bear Lake Trail Loop (0.8 miles, easy, flat) for a classic lake-and-peak reflection; or upgrade to Emerald Lake Trail (3.6 miles round trip, 605ft gain) past Nymph Lake and Dream Lake — one of the finest moderate hikes in the park",
            "12:00 — Drive Trail Ridge Road (highest continuous paved highway in the US, 12,183ft at the summit) — even in summer, snow patches line the road; wildflowers peak July–August; the Alpine Visitor Center is open June–September",
            "14:00 — Lunch in Estes Park: Ed's Cantina & Grill ($12–16 for Tex-Mex burgers and Colorado green chile) or grab a sandwich at the Notchtop Bakery ($8–10 for excellent stuffed croissants)",
            "17:00 — Return to Denver; budget dinner in Capitol Hill: the restaurant row along 17th Ave has options from $12 Ethiopian platters to $16 ramen bowls",
          ],
          cost: "$50–70 (park entry, gas, meals, permit fee)",
        },
        {
          day: "Day 3",
          title: "Denver Art Museum & 16th Street Mall",
          items: [
            "09:30 — Denver Art Museum ($17 general admission, free for Colorado residents) — Daniel Libeskind's titanium-clad Frederic C. Hamilton building is itself an architectural event; the pre-Columbian collection and American Western art are world-class",
            "11:30 — Civic Center Park and the Colorado State Capitol (free self-guided tour) — the capitol dome is covered in real gold leaf and the 13th step is exactly one mile above sea level; the interior's Colorado rose onyx wainscoting is found nowhere else on earth",
            "13:00 — Lunch on 16th Street Mall: Snooze A.M. Eatery ($12–16 for their famous pineapple upside-down pancakes and benedicts) — 16th Street is a pedestrian-only promenade with free shuttle buses running its length",
            "15:00 — Larimer Square (historic first block in Denver, 1858) — boutique shops, galleries, and the string lights at night make this the most photogenic block in the city; free to browse",
            "17:00 — Colorado craft beer happy hour: Great Divide Brewing Company on Arapahoe St ($5–6 happy hour pints) — Great Divide's Yeti Imperial Stout is one of America's most decorated beers; the taproom tour is free",
            "19:30 — Final budget dinner: Illegal Pete's Mission-style burrito on 16th Street ($11–14 for enormous build-your-own burritos) — a Denver institution since 1995",
          ],
          cost: "$50–65 (museum, meals, 2 beers, mall)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$160–230/day",
      days: [
        {
          day: "Day 1",
          title: "Red Rocks Sunrise Yoga & RiNo Guided Tour",
          items: [
            "06:30 — Red Rocks Amphitheatre sunrise yoga class ($15, book through redrocksonline.com, operates May–October) — 500 people do yoga on the concert stage as the sun rises behind the formations; utterly unique and worth the early alarm",
            "08:30 — Red Rocks hike and geology tour: the Trading Post Trail plus the Ship Rock and Dakota Ridge formations with signage explaining the Fountain Formation geology; allow 1.5 hours",
            "11:00 — Return Denver; check in to a boutique hotel in LoDo or RiNo ($150–200/night) — the Source Hotel in RiNo or The Crawford Hotel in Union Station are the two best mid-range design choices",
            "13:00 — Guided RiNo Art District walking tour ($35, 2 hours) — local guides explain the neighborhood's transformation from rail yards to art district, identify mural artists, and include stops at 2–3 gallery spaces",
            "16:00 — Breckenridge Brewery Taproom + Odell Brewing Denver location — Colorado has 400+ craft breweries; the RTD A-Line connects RiNo to LoDo efficiently; guided craft beer tour of 4 taprooms available ($55–75 per person)",
            "19:30 — Dinner at Mercantile Dining & Provision in Union Station ($30–45 for mains) — Alex Seidel's market-driven restaurant in the ground floor of Denver Union Station; Colorado lamb and seasonal pasta dishes",
          ],
          cost: "$190–250 (hotel, tours, dinner, beers)",
        },
        {
          day: "Day 2",
          title: "Rocky Mountain National Park with Ranger Tour",
          items: [
            "07:00 — Drive to RMNP: arrive at Bear Lake parking area by 8:30am (full by 9am on summer weekends); park entry $35/vehicle",
            "09:00 — Ranger-led hike (free, check nps.gov/romo for schedule) — RMNP rangers lead daily 3-hour interpretive hikes from Bear Lake and Moraine Park covering ecology, geology, and wildlife; no reservation needed for most programs",
            "12:30 — Scenic picnic lunch at Bear Lake or Sprague Lake (bring supplies from Estes Park; Safeway on US-34 has excellent deli) — Sprague Lake is flat, wheelchair accessible, and has spectacular mountain reflections",
            "14:00 — Drive Trail Ridge Road to the Alpine Visitor Center (open June–September) at 11,796ft — the tundra wildflowers in July and August and the elk herds in September make this the most spectacular alpine drive in the lower 48",
            "17:30 — Dinner in Estes Park at Notchtop Bakery & Café ($20–28 for evening mains) or Ed's Cantina & Grill for Colorado specialties like green chile smothered enchiladas",
            "19:30 — Return to Denver; evening drink at Ratio Beerworks (RiNo) or the lobby bar at Union Station's Terminal Bar",
          ],
          cost: "$160–210 (park fees, meals, gas, evening drinks)",
        },
        {
          day: "Day 3",
          title: "Denver Art Museum, Clyfford Still & Whiskey Bar",
          items: [
            "09:30 — Denver Art Museum with audio guide ($17 + $5 audio guide) — allocate 2 hours; the Hamilton Building's architecture and the Petrie Institute of Western American Art are the highlights; the rotating blockbuster exhibitions are ticketed separately",
            "11:30 — Clyfford Still Museum ($10, adjacent to DAM) — the entire artistic estate of abstract expressionist Clyfford Still is housed here; 94% of his lifetime output in one purpose-built museum; one of America's finest single-artist museums",
            "13:30 — Lunch at Potager in Capitol Hill ($18–28 for farm-to-table mains) — one of Denver's original farm-to-table restaurants; the seasonal risotto and grass-fed beef dishes use Colorado and Front Range producers exclusively",
            "16:00 — Larimer Square shopping and the History Colorado Center ($14) — the state history museum uses life-size dioramas and interactive exhibits to tell Colorado's mining, ranching, and Indigenous history",
            "18:30 — Williams & Graham cocktail bar (NW Denver) — consistently ranked one of America's best bars, hidden behind a bookshelf door in a fake bookshop; the cocktail menu changes seasonally; reservations highly recommended ($15–18/cocktail)",
            "20:30 — Final dinner at Linger (LoHi neighborhood) — converted mortuary now serving global street food small plates ($18–28); the rooftop terrace has the best view of downtown Denver",
          ],
          cost: "$195–260 (museums, meals, cocktails, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$400–650/day",
      days: [
        {
          day: "Day 1",
          title: "Private Red Rocks Tour & Farm-to-Table Dinner",
          items: [
            "08:00 — Private Red Rocks Amphitheatre tour with a rock geology expert ($200/group, 2 hours) — access the backstage, the performers' canyon, and the formations themselves with expert geological interpretation; the 300-million-year history of the Fountain Formation explained on site",
            "11:00 — Check in to The Oxford Hotel (historic, LoDo, $300–450/night) or The Brown Palace Hotel ($350–500/night, National Historic Landmark since 1892) — the Brown Palace's atrium lobby is one of America's great hotel interiors",
            "14:00 — Private guided RiNo Art District tour with a curator ($150, 2 hours) — local arts organization curators explain the Denver mural program, introduce gallery owners, and provide context for the neighborhood's rapid transformation",
            "17:00 — Pre-dinner cocktails at Williams & Graham — book the private tasting room for a guided spirits flight ($80/person, available for groups); their craft cocktail team sources historic recipes from Colorado mining and cowboy culture",
            "19:30 — Dinner at Fruition Restaurant ($85–120/pp, seasonal tasting menu available) — Alex Seidel's original farm-to-table flagship; the chef tends his own farm in Larimer County; the wagyu beef and Colorado lamb are exceptional; book 3–4 weeks ahead",
          ],
          cost: "$500–650 (hotel, private tour, cocktails, dinner)",
        },
        {
          day: "Day 2",
          title: "Rocky Mountain Private Guide & Alpine Heli-Tour",
          items: [
            "07:00 — Private guided day in Rocky Mountain National Park ($400–600 for full day with licensed guide from Colorado Mountain School) — custom itinerary to avoid crowds; access to ranger knowledge, wildlife spotting expertise, and optional technical terrain",
            "09:00 — Chasm Lake hike toward Longs Peak base (7.4 miles round trip, 2,360ft gain) with guide — one of Colorado's most dramatic hikes through alpine meadows to a cirque lake below the Diamond face of Longs Peak",
            "13:00 — Lunch at historic Fall River Visitor Center area or packed gourmet box from the Brown Palace hotel (pre-arranged the night before)",
            "15:30 — Optional helicopter flightseeing over Rocky Mountain NP ($300–500 per person, 45-minute tour from Estes Park) — aerial views of Longs Peak, Trail Ridge Road, and the Mummy Range; Front Range Helicopters and Rocky Mountain Helicopters both operate",
            "19:00 — Return Denver; dinner at Tavernetta (Union Station, $50–80/pp) — Italian-focused wine program and handmade pasta in a stunning space; the tiramisu and branzino are among Denver's best dishes; book 2 weeks ahead",
          ],
          cost: "$600–800 (private guide, optional helicopter, dinner)",
        },
        {
          day: "Day 3",
          title: "Private Art Museum Tour & Farewell Dinner",
          items: [
            "09:00 — Denver Art Museum private curator tour ($200, by appointment through DAM's group services) — behind-the-scenes access to the conservation lab and storage; curators contextualize the pre-Columbian and Native North American collections with stories unavailable on public tours",
            "11:30 — Clyfford Still Museum private viewing hour (arrangements via museum membership office, $150) — access the Still museum before opening with a director-level guide; the scale of Still's PH-399 (1951) at close range is overwhelming",
            "13:30 — Lunch at Mercantile Dining & Provision ($40–60/pp) or the Brown Palace's Ship Tavern ($35–55/pp) — the Ship Tavern's model tall ships and dark wood paneling make it Denver's most atmospheric lunch room",
            "16:00 — Spa afternoon at the Halcyon Hotel spa in Cherry Creek ($150–250 for 80-minute treatments) — the Cherry Creek North neighborhood has Denver's best boutique shopping for Colorado-made goods",
            "19:00 — Final dinner at Elway's Steakhouse ($80–140/pp) — John Elway's flagship steakhouse serves Colorado-raised dry-aged beef; the 45-day dry-aged ribeye and the Colorado lamb rack are defining Denver luxury dining experiences",
            "21:30 — Nightcap at The Brown Palace's Ellyngton's bar — live jazz, Colorado whiskey flights, and the lobby atrium at night; the hotel has hosted every US president since Theodore Roosevelt",
          ],
          cost: "$550–750 (private tours, spa, steak dinner, hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$35–55 (hostel, Capitol Hill or Baker)",
      food: "$20–35 (food halls, burritos, food carts)",
      transport: "$10–35 (RTD + car rental for park days)",
      activities: "$15–35 (museum, park entry, free trails)",
      total: "$80–160/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–200 (boutique hotel, LoDo or RiNo)",
      food: "$55–85 (farm-to-table bistros, brewery tastings)",
      transport: "$20–45 (car rental, ride-share)",
      activities: "$45–75 (museums, guided tours, park fees)",
      total: "$160–230/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–500 (Brown Palace or Oxford Hotel)",
      food: "$120–200 (tasting menus, Michelin-caliber)",
      transport: "$60–150 (private car, helicopter)",
      activities: "$200–400 (private guides, exclusive access)",
      total: "$400–650+/day",
    },
    {
      tier: "🍺 Beer Focus",
      accommodation: "$60–100 (mid hotel, LoHi or RiNo)",
      food: "$25–40 (taproom food, pub fare)",
      transport: "$10–20 (RTD light rail + bike-share)",
      activities: "$40–80 (brewery tours, tastings at 4–5 taprooms)",
      total: "$135–240/day",
    },
    {
      tier: "🏔️ Outdoor",
      accommodation: "$50–90 (hostel or budget hotel near I-70)",
      food: "$20–35 (packed lunches, post-hike spots)",
      transport: "$40–70 (car rental for mountains access)",
      activities: "$35–75 (park fees, guided hikes, gear rental)",
      total: "$145–270/day",
    },
  ],
  mistakes: [
    {
      icon: "🏔️",
      title: "Underestimating altitude sickness",
      desc: "Denver sits at 5,280 feet and Rocky Mountain National Park reaches over 12,000 feet. Altitude sickness causes headaches, nausea, and fatigue in 25% of visitors. Drink double your normal water intake, avoid alcohol on your first day, and ascend gradually. If you feel severe symptoms, descend immediately.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Not booking Red Rocks concerts in advance",
      desc: "Red Rocks sells out months in advance for major shows. Check the Red Rocks schedule at axs.com and book the moment tickets go on sale. The venue experience — 9,000 seats between two 400-foot sandstone fins — is unlike any other concert in the world even for artists you barely know.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🚗",
      title: "Trying to reach Rocky Mountain NP without an early start",
      desc: "Bear Lake parking lot fills by 9am on summer weekends. The timed entry permit system (May–October, $2 at recreation.gov) requires advance booking. Arrive before 8:30am or take the park's free shuttle system from the Estes Park Visitor Center.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌨️",
      title: "Visiting Trail Ridge Road outside its open season",
      desc: "Trail Ridge Road (the highest continuous paved highway in the US) is only open Memorial Day through mid-October depending on snowpack. Check nps.gov/romo for current road conditions. In early June it may still be closed even as lower trails are clear.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍺",
      title: "Visiting only one or two breweries",
      desc: "Colorado has over 400 craft breweries and Denver alone has 80+. The Craft Beer Mile on Tennyson Street, the taprooms in RiNo, and the Great Divide flagship are all within walking distance of each other. A self-guided walking tour of 4–5 taprooms is achievable in one afternoon without a car.",
      color: "bg-amber-50 border-amber-200",
    },
  ],
  tips: [
    {
      icon: "💧",
      title: "Hydrate aggressively from the moment you land",
      desc: "Denver's 5,280-foot altitude and low humidity dry you out twice as fast as sea level. Start drinking water on the plane and aim for 3–4 liters on your first day. Avoid alcohol until day two. A mild headache on arrival is normal — it clears within 24 hours for most people. Book outdoor activities at https://www.getyourguide.com/s/?q=Denver+Colorado&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚋",
      title: "Use the RTD light rail for airport and downtown travel",
      desc: "The RTD A-Line runs from Denver International Airport to Union Station in 37 minutes for $10.50. Day passes ($6.50) cover all RTD buses and light rail within the city. The W-Line reaches Lakewood near Red Rocks' eastern base. Avoid renting a car for city days — parking downtown costs $20–35/day.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌄",
      title: "Visit Red Rocks on non-concert mornings for the best experience",
      desc: "On non-show days, Red Rocks is open for hiking from sunrise to sunset. The Trading Post Trail and the amphitheatre bowl are accessible free of charge. Hundreds of locals do sunrise yoga and morning runs in the bowl — it's one of Denver's great free experiences.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎨",
      title: "Spend a full afternoon in the RiNo Art District",
      desc: "The River North Art District (RiNo) has transformed from a derelict industrial zone to Denver's most dynamic neighborhood in under a decade. The mural walks, craft cocktail bars, food halls like the Denver Central Market, and weekend art markets are all free to explore. It's the best 3-hour free activity in Denver.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Denver International Airport (DEN) to downtown?",
      a: "The RTD A-Line commuter rail runs from DEN to Denver Union Station in 37 minutes, with trains every 15 minutes from 4am to midnight. A single ride costs $10.50. Uber/Lyft from DEN to downtown costs $35–50 and takes 25–45 minutes depending on traffic on I-70. There is no cheaper bus option — the A-Line is the standard recommended option for most travelers.",
    },
    {
      q: "What is the best time to visit Denver?",
      a: "June through September offers the best combination of warm weather, open trails, and accessible Trail Ridge Road in RMNP. July and August are peak season with the most crowds and highest hotel prices. May and October offer excellent shoulder-season weather, lower rates, and beautiful wildflowers or fall colors respectively. Winter (December–March) is ideal if skiing is your goal — the ski resorts are 1–2 hours away on I-70.",
    },
    {
      q: "Is a car necessary in Denver?",
      a: "For the city itself, no — the RTD light rail and bus network covers most neighborhoods and the airport. For day trips to Red Rocks and Rocky Mountain National Park, a car is strongly recommended. Red Rocks is only accessible by road (20 miles from downtown) and RMNP is 65 miles from Denver. Car rental for a single day costs $35–60. The Gorge Express equivalent does not exist for Denver's mountain attractions.",
    },
    {
      q: "Can I really get altitude sickness in Denver?",
      a: "Denver itself (5,280ft) rarely causes serious altitude sickness, but headaches and fatigue are common on the first day, especially if you fly in from sea level. Rocky Mountain National Park, which tops out at over 14,000 feet, is where altitude sickness becomes a genuine concern. Drink plenty of water, eat light, avoid alcohol on the first day, and ascend Trail Ridge Road slowly. Severe symptoms (confusion, inability to walk straight) require immediate descent to a lower elevation.",
    },
  ],
  combineWith: ["las-vegas-4-days", "grand-canyon-3-days", "chicago-3-days"],
  relatedSlugs: ["las-vegas-4-days", "chicago-3-days", "seattle-3-days", "portland-oregon-4-days"],
  galleryQuery: "Denver Colorado Red Rocks Rocky Mountain National Park RiNo Art District",
};

export const metadata: Metadata = {
  title: "Denver in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Denver itinerary — Red Rocks Amphitheatre, Rocky Mountain National Park, Denver Art Museum, RiNo Art District, craft beer mile, and 16th Street Mall. Budget $80/day to luxury hotels.",
  keywords: [
    "Denver itinerary",
    "Denver 3 days",
    "Denver travel guide 2026",
    "Red Rocks Amphitheatre",
    "Rocky Mountain National Park day trip",
    "Denver Art Museum",
    "RiNo Art District",
    "Denver craft beer",
    "Denver visa Indian passport",
  ],
  openGraph: {
    title: "Denver in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Red Rocks, Rocky Mountain National Park, Denver Art Museum, RiNo murals, and Colorado's craft beer mile — 3 days from $80/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/denver-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denver in 3 Days: Complete 2026 Itinerary",
    description:
      "Red Rocks Amphitheatre, Rocky Mountain NP, Denver Art Museum, RiNo Art District, and Colorado's craft beer mile — 3 days from $80/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/denver-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Denver in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
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
          name: "Denver in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/denver-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Denver, Colorado",
      description:
        "Denver, Colorado — the Mile High City with Red Rocks Amphitheatre, Rocky Mountain National Park access, the Denver Art Museum, RiNo Art District, and Colorado's legendary craft beer scene.",
      geo: { "@type": "GeoCoordinates", latitude: 39.7392, longitude: -104.9903 },
    },
  ],
};

export default function DenverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DenverClient />
    </>
  );
}
