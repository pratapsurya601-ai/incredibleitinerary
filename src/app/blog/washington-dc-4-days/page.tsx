import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Washington DC 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Washington DC trip in 4 days. Plan the perfect 4-day Washington DC trip. Free Smithsonian museums, Lincoln Memorial, cherry blossoms at the.",
  keywords: [
    "Washington DC travel guide",
    "Washington DC 4 days",
    "DC museums free",
    "National Mall itinerary",
    "cherry blossoms DC",
    "Lincoln Memorial visit",
    "Smithsonian museums guide",
    "Washington DC budget travel",
    "Georgetown DC",
    "DC itinerary 2026",
  ],
  alternates: { canonical: "https://incredibleitinerary.com/blog/washington-dc-4-days" },
  openGraph: {
    title: "Washington DC 4-Day Itinerary 2026: Trip Planner",
    description:
      "Almost every major museum and monument in Washington DC is completely free. Here's your complete 4-day itinerary from budget backpacker to luxury traveller.",
    url: "https://incredibleitinerary.com/blog/washington-dc-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://incredibleitinerary.com/og/washington-dc-4-days.jpg",
        width: 1200,
        height: 630,
        alt: "Washington DC Lincoln Memorial with cherry blossoms and National Mall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Washington DC 4-Day Itinerary 2026: Trip Planner",
    description:
      "Free museums, cherry blossoms, and 400 years of American democracy — here's your 4-day Washington DC itinerary.",
    images: ["https://incredibleitinerary.com/og/washington-dc-4-days.jpg"],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Washington DC in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 4-day Washington DC itinerary covering free Smithsonian museums, the National Mall, Lincoln Memorial, cherry blossoms, and everything from budget hostels to luxury hotels.",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      url: "https://incredibleitinerary.com",
    },
    url: "https://incredibleitinerary.com/blog/washington-dc-4-days",
    image: "https://incredibleitinerary.com/og/washington-dc-4-days.jpg",
    mainEntityOfPage: "https://incredibleitinerary.com/blog/washington-dc-4-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Washington DC 4-Day Guide",
        item: "https://incredibleitinerary.com/blog/washington-dc-4-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Washington DC",
    description:
      "The capital of the United States, home to the National Mall, free Smithsonian museums, world-famous monuments, and spectacular cherry blossoms every spring.",
    url: "https://incredibleitinerary.com/blog/washington-dc-4-days",
    touristType: ["CulturalTourist", "HistoryTourist", "BudgetTourist"],
    hasMap: "https://maps.google.com/?q=Washington+DC",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Washington DC",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "washington-dc-4-days",
  heroQuery: "washington dc lincoln memorial cherry blossoms mall usa",
  heroAlt: "Washington DC Lincoln Memorial with cherry blossoms and National Mall",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Almost every major museum and monument in Washington DC is completely free — cherry blossoms framing the Jefferson Memorial in March-April, the Lincoln Memorial steps where MLK delivered his 'I Have a Dream' speech, and the National Mall that makes you feel like walking through American history itself. Washington DC, where admission to democracy is still free.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$65",
    bestMonths: "Mar–Apr (cherry blossoms) or Sep–Oct",
    airport: "DCA (Reagan) or IAD (Dulles)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "B1/B2 Tourist Visa"],
        ["Fee", "$185 USD (non-refundable)"],
        ["Interview", "Required at US Embassy/Consulate"],
        ["Processing", "3–5 weeks (apply early)"],
        ["Validity", "Up to 10 years, multiple entry"],
        ["Duration", "Up to 6 months per visit"],
        ["DS-160", "Online form required before appointment"],
        ["Tip", "Book appointment 2–3 months ahead"],
      ],
    },
    {
      flag: "🇬🇧🇦🇺🇪🇺",
      title: "UK / AU / EU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Type", "ESTA (Visa Waiver Program)"],
        ["Fee", "$21 USD"],
        ["Apply", "Online at esta.cbp.dhs.gov"],
        ["Processing", "Usually instant, up to 72 hrs"],
        ["Valid For", "2 years or until passport expires"],
        ["Stay", "Up to 90 days per visit"],
        ["Tip", "Apply at least 72 hours before departure"],
        ["Note", "Must have e-Passport (biometric chip)"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Backpacker",
      sub: "$65/day",
      days: [
        {
          day: "Day 1",
          title: "National Mall & Free Monuments",
          items: [
            "Arrive via Metro — buy a SmarTrip card at the airport ($10 load + $2 card fee)",
            "Check into hostel in Capitol Hill or Adams Morgan (from $35/night)",
            "Walk the entire National Mall from Capitol Building to Lincoln Memorial — completely free",
            "Lincoln Memorial: climb the steps, read the Gettysburg Address on the wall, photograph the Reflecting Pool",
            "Vietnam Veterans Memorial — the black granite wall listing 58,000 names is one of the most moving sights in the USA",
            "Korean War Veterans Memorial — haunting steel soldiers in formation",
            "Grab a $6 hot dog and lemonade from a Mall food cart for lunch",
            "Washington Monument (free timed pass required — book in advance at recreation.gov)",
            "Sunset from the steps of the Lincoln Memorial looking toward the Capitol",
            "Dinner: Ben's Chili Bowl on U Street — the half-smoke is a DC institution, ~$12",
          ],
          cost: "$20–30 (food + Metro)",
        },
        {
          day: "Day 2",
          title: "Smithsonian Museums — Natural History & Air & Space",
          items: [
            "Smithsonian National Museum of Natural History — free, opens 10am. Hope Diamond, dinosaur hall, ocean hall",
            "Walk through the butterfly pavilion ($8 extra — worth every cent)",
            "Packed lunch from a nearby Whole Foods hot bar saves $10 vs Mall restaurants",
            "Smithsonian National Air and Space Museum — free. Wright Brothers' Flyer, Apollo 11 capsule, Space Shuttle Discovery (at Udvar-Hazy annex)",
            "American History Museum — free. Star-Spangled Banner, Julia Child's kitchen, American pop culture",
            "Metro to Eastern Market in Capitol Hill — browse fresh produce, local art, and weekend flea market",
            "Grab a weekend blue buck pancake breakfast-for-dinner at Eastern Market's indoor vendors (~$10)",
          ],
          cost: "$15–25 (food + Metro + optional butterfly pavilion)",
        },
        {
          day: "Day 3",
          title: "Georgetown & Tidal Basin",
          items: [
            "Tidal Basin walk at sunrise — cherry blossom season (late March–mid April) turns this into a pink wonderland",
            "Jefferson Memorial — free, stunning rotunda with Jefferson's words on the walls",
            "FDR Memorial — sprawling outdoor memorial with waterfalls and quotations from the New Deal era",
            "Martin Luther King Jr. Memorial — the 'Stone of Hope' sculpture is one of DC's most powerful monuments",
            "Walk or bus to Georgetown (Metro doesn't go here — take the 31/33 bus or a $6 rideshare)",
            "Georgetown University campus walk — free, gorgeous gothic architecture",
            "Georgetown Waterfront Park along the Potomac — free and scenic",
            "Budget lunch: Grab a slice at Pizza Mart Georgetown (~$4/slice) or a burrito at El Centro (~$12)",
            "Dump your bags, grab a free evening at the Lincoln Theatre or street musicians on U Street",
          ],
          cost: "$20–30 (food + transport)",
        },
        {
          day: "Day 4",
          title: "Capitol Hill & Library of Congress",
          items: [
            "US Capitol: book a free tour online at visitthecapitol.gov — see the Rotunda, National Statuary Hall, and crypt",
            "Library of Congress — free, the Main Reading Room is one of the most breathtaking interiors in America",
            "Supreme Court building — free to enter and view the Great Hall; oral arguments open to public when in session",
            "US Botanic Garden — free greenhouse at the base of the Capitol, tropical plants and orchids",
            "Lunch at Union Station food hall — wide variety from $8–15",
            "National Portrait Gallery and American Art Museum (one building, both free) — masterworks of American painting",
            "Final walk down the Mall at dusk, everything lit up golden",
            "Head to airport via Metro — Blue/Yellow line to DCA, Silver line to IAD",
          ],
          cost: "$20–25 (food + Metro to airport)",
        },
      ],
    },
    {
      label: "Mid-Range Traveller",
      sub: "$140/day",
      days: [
        {
          day: "Day 1",
          title: "National Mall, Monuments & Evening Georgetown",
          items: [
            "Fly into DCA, take Metro directly to downtown hotel ($3.25 fare — faster than a taxi)",
            "Check into a 3-star hotel near Dupont Circle or Logan Circle ($120–160/night)",
            "National Mall walking tour — Lincoln, Vietnam, Korean, WWII memorials",
            "Washington Monument — book timed pass in advance (free), views from 500ft elevation",
            "Lunch at Founding Farmers restaurant — farm-to-table, famous for its seasonal menu (~$22pp)",
            "Afternoon: National Archives — free, see the original Declaration of Independence, Constitution, and Bill of Rights",
            "Rideshare to Georgetown ($8)",
            "Georgetown Waterfront cocktails at Sequoia restaurant overlooking the Potomac",
            "Dinner in Georgetown at Clyde's (~$40pp) or Chez Billy Sud for French bistro vibes (~$50pp)",
          ],
          cost: "$80–110 (hotel portion + dining + transport)",
        },
        {
          day: "Day 2",
          title: "Museums + National Zoo",
          items: [
            "Smithsonian National Zoo — free, opens 8am. Pandas (when resident), great apes, elephants, cheetahs",
            "Morning: take the woodlands trail for fewer crowds",
            "Lunch at the zoo's Panda Cafe or head to nearby Cleveland Park for better options (~$18)",
            "Afternoon: Smithsonian National Museum of African American History and Culture — book timed entry in advance (free but EXTREMELY popular — book 2–3 months out)",
            "If NMAAHC isn't available: Smithsonian American Art Museum + Portrait Gallery combo (always free, walk-in)",
            "U Street Corridor for dinner — the heart of DC's music and food scene",
            "Dinner at Compass Rose (global street food in a townhouse setting, ~$35pp)",
            "Live music at the 9:30 Club or a U Street jazz bar (~$15–25 cover)",
          ],
          cost: "$90–120 (food + entertainment + transport)",
        },
        {
          day: "Day 3",
          title: "Tidal Basin, Arlington & Eastern Market",
          items: [
            "Early morning Tidal Basin walk — sunrise among the cherry blossoms or Japanese lanterns",
            "Jefferson, FDR, and MLK memorials in sequence",
            "Metro to Arlington Cemetery ($2.25) — Tomb of the Unknown Soldier changing of the guard (happens every hour)",
            "Kennedy family gravesites — JFK eternal flame, Bobby Kennedy burial, Jacqueline Kennedy grave",
            "Arlington House (Robert E. Lee's former home) — free, commanding views back toward DC",
            "Lunch back in DC at Rose's Luxury in Capitol Hill (book ahead) or Ted's Bulletin (~$20pp)",
            "Eastern Market Saturday/Sunday market — local art, vintage, cheese, charcuterie",
            "Craft cocktails at Copycat Co. (~$14/drink) or a local Bluejacket Brewery pint ($8)",
            "Dinner: The Dabney (mid-Atlantic cuisine, seasonal, ~$55pp) — book ahead",
          ],
          cost: "$100–130 (food + drinks + transport)",
        },
        {
          day: "Day 4",
          title: "Capitol, Dupont Circle & Departure",
          items: [
            "Capitol tour + Library of Congress morning combo",
            "Supreme Court — sit in on oral arguments if in session (free, first-come basis, Oct–April)",
            "Brunch at Mintwood Place in Adams Morgan (~$28pp)",
            "Afternoon: National Portrait Gallery — temporary exhibitions, often world-class",
            "Newbury-style shopping on 14th Street corridor",
            "Last coffee at a local roaster: Compass Coffee or Jolt 'N Bolt",
            "Metro to airport — allow 45 min for DCA, 60–75 min for Dulles (Silver line + bus)",
          ],
          cost: "$70–90 (brunch + transport + shopping)",
        },
      ],
    },
    {
      label: "Luxury Experience",
      sub: "$320/day",
      days: [
        {
          day: "Day 1",
          title: "Private Tour, Rooftop Dining & Evening on Embassy Row",
          items: [
            "Private car from DCA or Dulles to your hotel ($55–80)",
            "Check into The Hay-Adams (views of the White House), The Jefferson Hotel, or Kimpton George (~$380–600/night)",
            "Private 4-hour guided National Mall tour with a historian guide ($180–250pp) — skip the crowds and get context",
            "Washington Monument priority access (private guide arranges timed pass)",
            "Champagne lunch at The Riggsby inside the Carlyle Hotel (~$60pp)",
            "Embassy Row walking tour with private guide — see chanceries from 100+ countries on Massachusetts Ave",
            "Cocktails at the rooftop bar at the W Hotel DC, overlooking the Treasury Building",
            "Dinner at Pineapple and Pearls (2-Michelin-star, ~$195pp tasting menu) — book 60 days in advance",
          ],
          cost: "$350–450 (hotel portion + dining + guide)",
        },
        {
          day: "Day 2",
          title: "Private Museum Access & Georgetown",
          items: [
            "Private docent-led Smithsonian tour: National Portrait Gallery + American Art Museum — see works before crowds arrive",
            "National Archives VIP access — see the Charters of Freedom with a guide who explains historical context",
            "Lunch at the Cafe du Parc at the Willard InterContinental (~$45pp)",
            "Private car to Georgetown ($12)",
            "Dumbarton Oaks Garden — garden admission $10, one of the most beautiful private gardens in the US",
            "Georgetown boutique shopping on M Street and Wisconsin Ave",
            "Tea service at Fiola Mare restaurant on the Potomac waterfront (~$40pp)",
            "Dinner at Fiola Mare (Italian seafood, ~$95pp) or 1789 Restaurant (Georgetown institution since 1789, ~$90pp)",
          ],
          cost: "$300–380 (hotel portion + dining + private guide + transport)",
        },
        {
          day: "Day 3",
          title: "Arlington, Private Cherry Blossom & Jazz Evening",
          items: [
            "Private guided tour of Arlington National Cemetery — context on every section, Tomb of the Unknown Soldier explanation",
            "Private morning boat tour on the Potomac with views of Georgetown, Kennedy Center, and the monuments",
            "Kennedy Center backstage tour ($25pp) — see the Grand Foyer, Concert Hall, Opera House behind the scenes",
            "Lunch at the Roof Terrace Restaurant inside the Kennedy Center with Potomac views (~$55pp)",
            "Afternoon spa at the Four Seasons Georgetown or Mandarin Oriental",
            "Evening: National Symphony Orchestra or Washington National Opera at the Kennedy Center (tickets $65–250pp)",
            "Post-show supper at Plume restaurant at The Jefferson ($120pp tasting menu)",
          ],
          cost: "$400–500 (hotel portion + dining + Kennedy Center + spa + private guide)",
        },
        {
          day: "Day 4",
          title: "Capitol Exclusive, Farewell Brunch & Departure",
          items: [
            "Congressional staffer-assisted Capitol tour — arranged through your congressperson's office for exclusive access",
            "Library of Congress curator-led tour — arranged in advance for rare manuscript collections",
            "Supreme Court — attend oral arguments (Oct–April, free but requires early queuing or congressional advance ticket)",
            "Farewell brunch at minibar by José Andrés (avant-garde tasting menu, book weeks ahead, ~$350pp) or Blue Duck Tavern (~$60pp)",
            "Last-minute shopping at Eastern Market or the Smithsonian museum shops",
            "Private car to airport ($55–80)",
            "Lounge access at Dulles or Reagan via Priority Pass",
          ],
          cost: "$350–450 (hotel portion + dining + private transport)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget 🎒",
      accommodation: "$35–50 (hostel dorm)",
      food: "$20–30 (food trucks, markets)",
      transport: "$5–8 (Metro SmarTrip)",
      activities: "$0–8 (almost all free)",
      total: "$60–96/day",
    },
    {
      tier: "Mid-Range ✨",
      accommodation: "$120–160 (3-star hotel)",
      food: "$50–70 (sit-down restaurants)",
      transport: "$15–25 (Metro + rideshares)",
      activities: "$15–30 (Zoo, ticketed events)",
      total: "$200–285/day",
    },
    {
      tier: "Luxury 💎",
      accommodation: "$380–600 (5-star hotel)",
      food: "$120–200 (fine dining)",
      transport: "$50–80 (private car)",
      activities: "$80–150 (private guides, Kennedy Center)",
      total: "$630–1,030/day",
    },
    {
      tier: "Cherry Blossom Season 🌸",
      accommodation: "+30–50% (book 3–4 months out)",
      food: "$30–80 (normal range)",
      transport: "$5–25 (extra crowded Metro)",
      activities: "$0 (Tidal Basin free)",
      total: "Add $50–150 to base tier",
    },
    {
      tier: "Family of 4 👨‍👩‍👧‍👦",
      accommodation: "$180–300 (2-bed suite/Airbnb)",
      food: "$80–140 (restaurants + groceries)",
      transport: "$15–40 (Metro family pass)",
      activities: "$0–40 (free Smithsonian for all)",
      total: "$275–480 total for family/day",
    },
  ],

  mistakes: [
    {
      icon: "⏰",
      title: "Not Booking the Washington Monument Pass in Advance",
      desc: "The Washington Monument timed passes are free but they run out weeks ahead during peak season. Book at recreation.gov the moment your dates are confirmed. Walk-up same-day passes are released at 8:30am but gone by 8:35am during spring and summer.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏛️",
      title: "Skipping the African American History Museum",
      desc: "The Smithsonian National Museum of African American History and Culture is the most in-demand free museum in the USA. Timed-entry passes book out 2–3 months in advance. If you don't book ahead, you will not get in. Check for same-day passes released at 6:30am online.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚇",
      title: "Taking Taxis Instead of the Metro",
      desc: "DC traffic is brutal. The Metro goes directly to DCA airport, the National Mall stops, Capitol South, and Georgetown-adjacent stations. A SmarTrip card saves you $1 per trip over paper tickets. Rideshares are useful for Georgetown (no Metro) but use Metro for everything else.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌸",
      title: "Visiting the Tidal Basin at the Wrong Time",
      desc: "Cherry blossom peak bloom lasts only 7–10 days, typically late March to mid-April. The NPS publishes a peak bloom prediction at nps.gov/cherry. Go at sunrise (6–8am) — by 10am on a weekend in bloom season the Tidal Basin is shoulder-to-shoulder. Crowds thin significantly after sunset too.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🎟️",
      title: "Forgetting the Capitol Tour Requires an Advance Booking",
      desc: "The US Capitol public tour is free but requires an advance reservation at visitthecapitol.gov. You can also contact your US congressperson for a staff-led tour which gets you into areas not open on the public tour — particularly useful for non-US visitors whose embassies can arrange equivalent access.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🦅",
      title: "Get a Congressional Tour of the Capitol",
      desc: "Any US citizen can contact their representative or senator's office for a free staff-led Capitol tour that goes beyond the public route. International visitors can ask their embassy to request a diplomatic tour. Both options require advance planning but are worth it.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Visit Monuments at Dawn and Dusk",
      desc: "The Lincoln Memorial is open 24/7 and is magical at sunrise — you'll often have the Reflecting Pool almost to yourself. The monuments are also beautifully lit at night. Schedule one dawn visit and one evening walk during your 4-day stay.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚲",
      title: "Rent a Capital Bikeshare for the Tidal Basin Loop",
      desc: "A Capital Bikeshare day pass costs $8 and lets you cruise the Tidal Basin loop, down to Hains Point, and back up the National Mall in 2–3 hours. Far more enjoyable than walking the same route and lets you cover more ground. Docking stations are everywhere.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎫",
      title: "Use the GetYourGuide Monuments at Night Tour",
      desc: "A guided monuments-at-night tour is one of the best ways to see DC — cooler temperatures, dramatic lighting, no crowds, and a guide who tells you the stories behind each memorial. Book via GetYourGuide for the best prices and reviews.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Is Washington DC really free to visit?",
      a: "Almost entirely. All 19 Smithsonian museums on the National Mall are completely free, as are the Lincoln Memorial, Jefferson Memorial, Vietnam Veterans Memorial, WWII Memorial, MLK Memorial, Korean War Memorial, US National Archives, US Botanic Garden, and the National Zoo. The Washington Monument requires a free timed pass (book in advance). The US Capitol tour is free but requires an advance reservation. You'll mainly spend money on food and accommodation.",
    },
    {
      q: "When is the best time to visit Washington DC?",
      a: "For cherry blossoms: late March to mid-April (peak bloom varies by year — follow NPS predictions). For comfortable weather and smaller crowds: September–October. March–April is magical but very crowded at the Tidal Basin. July–August is hot, humid, and packed with school groups. December–February is cold but the museums are quiet and there are no lines at monuments.",
    },
    {
      q: "Which airport should I fly into for Washington DC?",
      a: "DCA (Reagan National) is closest to downtown DC and has a direct Metro connection (Blue/Yellow line, ~20 minutes, $3.25). It's the best choice for most visitors. IAD (Dulles International) is 26 miles west and requires the Silver Line Metro plus a bus connection — allow 60–75 minutes. BWI (Baltimore-Washington) is 30 miles north and requires MARC train + Metro — allow 75–90 minutes. DCA wins on convenience every time unless your flight is much cheaper from Dulles or BWI.",
    },
    {
      q: "How do I get to Georgetown? There's no Metro station.",
      a: "Georgetown has no Metro station, which surprises many visitors. Your options: (1) Take the DC Circulator bus (Georgetown-Union Station route, $1 each way) from Foggy Bottom Metro station. (2) Walk 20–25 minutes from Foggy Bottom-GWU Metro station. (3) Rideshare ($6–10 from central DC). (4) The 31, 33, and 38B buses from downtown. The Circulator is the most tourist-friendly option.",
    },
  ],

  combineWith: ["New York City", "Philadelphia", "Boston", "Shenandoah National Park"],
  relatedSlugs: ["new-york-5-days", "boston-3-days", "philadelphia-2-days", "usa-east-coast-road-trip"],

  galleryQuery: "washington dc national mall monuments smithsonian",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function WashingtonDCPage() {
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
