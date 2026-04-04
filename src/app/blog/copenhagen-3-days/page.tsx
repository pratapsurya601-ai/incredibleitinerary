import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Copenhagen",
  country: "Denmark",
  countryFlag: "🇩🇰",
  slug: "copenhagen-3-days",
  heroQuery: "copenhagen nyhavn denmark colorful canal houses bikes",
  heroAlt: "Copenhagen Nyhavn canal with colourful 17th-century townhouses and sailing boats at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Copenhagen is the city that invented hygge — that untranslatable Danish concept of warmth, candles, good food, and contentment in the moment. Three days gives you Nyhavn's colour-saturated canal front at 6am before the Instagram crowds, Tivoli Gardens illuminated on a summer evening, Freetown Christiania's radical social experiment within cycling distance of the royal palace, and enough time to cross into Sweden on a 15-minute train for lunch. Denmark is also the world's most consistently rated happiest country — spending three days trying to understand why is a reasonable travel plan.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€70",
    bestMonths: "May–Sep",
    airport: "CPH (Copenhagen Airport)",
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
        ["Schengen Visa", "Denmark is a full Schengen member. Indian passport holders require a short-stay Schengen C visa. Apply through the Danish embassy or VFS Global Denmark. Fee: €80. Processing time: 15–45 days. For a 3-day trip, apply well in advance — VFS appointment slots fill 4–5 weeks ahead in summer."],
        ["Key Documents", "Passport valid 3 months beyond return date, bank statements showing €70+/day, confirmed hotel bookings, return flight tickets, employment letter or proof of self-employment, and travel insurance covering minimum €30,000 medical costs."],
        ["Day Trip to Sweden", "If you take the 15-minute train to Malmö, Sweden, you are crossing into another Schengen country — but because both Denmark and Sweden are Schengen, there is no passport check at the Øresund Bridge. Your Schengen C visa covers both countries without any additional paperwork."],
        ["90/180 Day Rule", "All days in Schengen territory count together — Denmark, Sweden, Germany, France. Maximum 90 days in any 180-day period across all Schengen countries combined."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Denmark (and all Schengen countries) visa-free for up to 90 days in any 180-day period. No pre-approval needed beyond ETIAS."],
        ["ETIAS from 2025", "All visa-exempt travelers — including Americans, Canadians, and Australians — need ETIAS pre-travel authorisation from 2025. Cost: €7, valid 3 years. Apply at etias.eu.int before booking flights. Takes minutes online."],
        ["UK Post-Brexit", "UK passport holders enter under the 90-day visa-free rule and need ETIAS from 2025. The UK–Denmark bilateral arrangement continues post-Brexit. Passport needs 6 months minimum validity."],
        ["Copenhagen–Malmö", "Crossing the Øresund Bridge to Sweden by train is seamless within the Schengen zone — no passport check, same visa, 15 minutes. Effectively a free day trip to a different country."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€70–110/day",
      days: [
        {
          day: "Day 1",
          title: "Nyhavn, Palaces & The Little Mermaid",
          items: [
            "Arrive at CPH Airport. Take the Metro (DKK 39 / €5.20 to the city centre, 15 minutes). The Copenhagen Metro runs 24 hours — no separate airport surcharge.",
            "Nyhavn canal — arrive before 9am for the definitive photograph: the row of 17th-century townhouses in yellow, pink, orange, and red reflected in the canal water with historic sailing vessels moored in front. By 10am the canal-front restaurants put out their chairs and the narrow quayside fills. By 11am it is crowded. At 6–7am it is entirely yours.",
            "Amalienborg Palace — the winter home of the Danish royal family. The changing of the guard happens at noon daily and is free to watch. The four identical rococo palaces surround a cobbled octagonal courtyard. The view across to the Marble Church (Frederiks Kirke) dome behind is one of Copenhagen's finest.",
            "The Little Mermaid (Den lille Havfrue) — free. Walk 10 minutes north from Amalienborg along the harbour. The 1913 bronze statue by Edvard Eriksen is smaller than most visitors expect (1.25 metres tall) and regularly vandalised, covered in paint, or missing its head. Go anyway — it's an experience in collective expectation management. The waterfront walk there and back is lovely.",
            "Rosenborg Castle (DKK 130 / €17) — a 17th-century Dutch Renaissance palace in the King's Garden. The basement treasury holds the Danish Crown Jewels including the Christian IV crown (1596), the sceptre, and the orb. The palace interior is preserved as it was in 1700.",
            "Evening: rød pølse (hot dog) from a Kiosk or pølsevogn street cart — DKK 25–35 (€3–4.70). The Danish hot dog with remoulade, crunchy onions, and mustard on a warm bun is the national street food.",
          ],
          cost: "€45–65 (transport, castle, food)",
        },
        {
          day: "Day 2",
          title: "Tivoli Gardens & Freetown Christiania",
          items: [
            "Freetown Christiania (Pusher Street) — free to enter, open all hours. The 84-acre autonomous commune established in 1971 when squatters occupied an abandoned military barracks near the city centre. Approximately 850 people live here under self-governance. Hash is sold openly from cannabis stalls on Pusher Street — this exists in a legal grey area and the situation changes with Copenhagen's political climate. Photography is strictly forbidden inside Pusher Street (the only rule that is truly enforced). Walk the rest of the commune freely — the murals, the DIY architecture, the Lake, the live music venues.",
            "Louisiana Museum of Modern Art (45 minutes north of Copenhagen by train to Humlebæk — DKK 105 round trip / €14, DKK 145 / €19 entry) — one of the most beautiful art museums in the world, not just in Scandinavia. The permanent collection includes Alexander Calder mobiles, Alberto Giacometti sculptures, and major works by Francis Bacon and Andy Warhol. The sculpture park overlooks the Øresund Strait toward Sweden. The architecture integrates with the landscape so completely that the building and garden are indistinguishable.",
            "Canal boat tour — DKK 89 / €12 for the 1-hour hop-on-hop-off water bus (Netto-Bådene) through Copenhagen's canals. Passes under 12 bridges, past the Opera House, the Royal Library, and Christianshavn. The cheapest and most informative way to see the city.",
            "Tivoli Gardens (DKK 169 / €23 entry, rides extra or DKK 399 / €53 with unlimited rides) — open May–late September and for Christmas season. The gardens are magical in themselves: fountains, flower beds, music stages, and the world's oldest wooden roller coaster (Bjergbanen, 1914). At night the trees are lit with 100,000 bulbs and the atmosphere shifts entirely. Go in the evening — dusk until closing (midnight in summer) is Tivoli at its best.",
          ],
          cost: "€50–80 (Louisiana, Tivoli, boat tour)",
        },
        {
          day: "Day 3",
          title: "Day Trip to Malmö or Kronborg Castle",
          items: [
            "Option A — Malmö, Sweden (recommended): Take the regional train from Copenhagen Central to Malmö C (15 minutes, DKK 105 / €14 return). You cross the Øresund Bridge — a combined tunnel, artificial island, and bridge stretching 7.8km across the strait. No passport check. Malmö's Gamla Stan old town is a quieter, less touristic version of Stockholm's. Stortorget square, the Malmöhus Castle (SEK 60 entry), Lilla Torg for lunch. Back in Copenhagen by 4pm.",
            "Option B — Kronborg Castle, Helsingør (Shakespeare's Hamlet's castle, 45 minutes north by train, DKK 140 / €19 return, DKK 140 / €19 entry) — the 16th-century fortress where Shakespeare set Hamlet is UNESCO listed. The cannon-lined ramparts look across to Sweden (2km away). The casemates beneath the castle include a dormant statue of Holger Danske, the legendary Viking warrior who sleeps until Denmark needs him.",
            "Farewell smørrebrød — the open-faced Danish sandwich on dense rye bread is the national lunch. Aamanns Establishment in the city serves the definitive modern version: DKK 115–175 (€15–24) per piece. Traditional toppings: pickled herring, smoked salmon, roast beef with remoulade and crispy onions, egg with shrimp.",
            "Danish pastry — called wienerbrød (Viennese bread) in Danish because Austrian bakers introduced the techniques in the 19th century. The correct kind has real butter laminated through the layers. Hart Bageri (Jægersborggade) or Juno the Bakery are Copenhagen's best.",
            "Strøget pedestrian shopping street — 1.1km of shops from Rådhuspladsen to Kongens Nytorv. Danish design brands: Georg Jensen (silverware), Royal Copenhagen (porcelain), Illums Bolighus (home design). Window shopping is free.",
          ],
          cost: "€40–70 (day trip, smørrebrød, pastry)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Nyhavn, Rosenborg & New Nordic Lunch",
          items: [
            "Arrive CPH. Metro to city centre. Check in to a 3-star hotel in the Indre By (inner city) or Frederiksberg area — €130–200/night.",
            "Nyhavn early morning visit with a professional photographer guide (available through Airbnb Experiences or Context Travel, €80–120 for 2 hours) — the light, the composition tips, the history of the individual houses.",
            "Copenhagen Card (DKK 899 / €121 for 72 hours) — covers all public transport, the Metro, the harbour buses, Tivoli entry (but not rides), Rosenborg Castle, the National Museum, the Ny Carlsberg Glyptotek, and 80+ other attractions. Pays for itself within 1.5 days of mid-range sightseeing.",
            "Rosenborg Castle and Crown Jewels with the full audio guide (DKK 130 / €17).",
            "Lunch at Höst (Nørre Farimagsgade) — New Nordic cuisine at accessible mid-range prices. The seasonal two-course lunch menu is DKK 295 / €40. Smørrebrød elevated to contemporary standard.",
            "Evening: canal boat tour at sunset followed by dinner at Geist (Kongens Nytorv) — modern Copenhagen brasserie, €40–60 per person for a 3-course dinner.",
          ],
          cost: "€180–270 (hotel, card, restaurant)",
        },
        {
          day: "Day 2",
          title: "Louisiana Museum, Christiania & Tivoli at Night",
          items: [
            "Train to Louisiana Museum in the morning for the full 3–4 hour experience. The permanent collection, the temporary exhibitions, and the sculpture park overlooking Sweden.",
            "Freetown Christiania afternoon walk — the full commune, not just Pusher Street. The Great Hall venue hosts concerts; the lake has rowing boats; the DIY houses built over 50 years are fascinating.",
            "Return to the city centre. Cocktail hour at Ruby (Nybrogade) — Copenhagen's best cocktail bar in a 19th-century townhouse basement. €15–18 per cocktail, worth every krone.",
            "Tivoli Gardens evening — the dinner and entertainment combination. Book a table at Nimb Brasserie inside the Moorish palace at Tivoli's entrance (DKK 450–650 / €60–87 for a main course with wine). Then walk the illuminated gardens after dinner.",
          ],
          cost: "€200–300 (Louisiana, cocktails, Tivoli dinner)",
        },
        {
          day: "Day 3",
          title: "Malmö + Danish Design Afternoon",
          items: [
            "Morning Malmö day trip — cross the Øresund Bridge and see Malmö's contemporary architecture (Santiago Calatrava's Turning Torso skyscraper, the Western Harbour waterfront), old town, and Malmö Saluhall food market.",
            "Return to Copenhagen for lunch at Smørrebrød institution Aamanns Etablissement.",
            "Design Museum Denmark (DKK 145 / €19) — the definitive collection of Danish design: Arne Jacobsen's Egg Chair and Swan Chair, Hans Wegner's Wishbone Chair, the Poul Henningsen PH lamp. Danish design philosophy explained in context.",
            "Afternoon: shopping at Illums Bolighus (the Danish design department store on Amagertorv) and the Jægersborggade neighbourhood in Nørrebro — the best street in Copenhagen for independent shops, ceramics studios, and the Hart Bageri pastries.",
            "Farewell dinner at Bror (Sankt Peders Stræde) — run by former Noma chefs, serving precise Nordic cooking at mid-range prices. DKK 500–750 / €67–100 for a tasting menu.",
          ],
          cost: "€180–280 (Malmö, design museum, restaurant)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€600–1500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Nyhavn at Dawn & Michelin Evening",
          items: [
            "Private transfer from CPH Airport (€45–80). Check in to Hotel d'Angleterre (Kongens Nytorv, Copenhagen's grand hotel since 1755, €500–1,200/night) or the Nimb Hotel inside Tivoli (€450–900/night — staying inside Tivoli Gardens, essentially private access).",
            "Private Nyhavn photography session at 5:30am with a professional Copenhagen photographer (€250–400 for 2 hours before anyone else arrives).",
            "Breakfast at the hotel followed by a private guide through Rosenborg Castle including curator access to the Crown Jewels vault (arrange through the hotel concierge, €300–500 for a private 2-hour session).",
            "Dinner at Geranium (3 Michelin stars — one of the world's top 10 restaurants per the World's 50 Best rankings). The 20-course Universe menu is approximately DKK 4,500 / €600 per person with wine pairing. Book 3 months ahead — tables are released exactly 90 days in advance at noon. This is Copenhagen's once-in-a-generation dining experience.",
          ],
          cost: "€800–1,300 (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Louisiana Private Tour & Tivoli Exclusive Evening",
          items: [
            "Private car to Louisiana Museum with a curator-level art historian guide (€350–500 for a private 3-hour tour). The collection's major works — the Giacometti room, the Calder mobiles, the Francis Bacon triptychs — explained in depth.",
            "Lunch at Louisiana's restaurant with its view over the Øresund Strait.",
            "Return to Copenhagen for an afternoon bespoke session at Georg Jensen's flagship store (Amagertorv) — private design consultation, custom piece commission, or personal shopping.",
            "Nimb Brasserie dinner inside Tivoli if not staying at Nimb Hotel, followed by after-hours private Tivoli experience (the hotel offers guests access to the gardens outside public hours — one of Copenhagen's best luxury perks).",
            "Evening cocktails at the Nimb Bar — the most atmospheric bar in Copenhagen, inside a 19th-century Moorish palace.",
          ],
          cost: "€700–1,100 (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Kronborg Private Tour & Noma Farewell",
          items: [
            "Private car to Kronborg Castle in Helsingør for an exclusive before-opening access visit (arrange through the castle's visitor services — available for groups, €400–600). Walk the casemates with a theatre historian who explains Shakespeare's use of the site he never visited.",
            "Lunch at Støy (Helsingør harbour) — a modern restaurant in the M/S Maritime Museum designed by Bjarke Ingels Group, partly below sea level in a dry dock.",
            "Return to Copenhagen. Private tour of the Designmuseum Denmark with a design historian.",
            "Dinner at Noma (if you were one of the very few to secure a reservation — the waitlist is measured in months). The tasting menu is DKK 3,800 / €510 without drinks. If Noma is unavailable: Alchemist (2 Michelin stars, 50-course 'holistic cuisine' experience, DKK 3,500 / €470) is arguably more interesting in 2026.",
            "Private transfer to CPH Airport for departure or hotel transfer.",
          ],
          cost: "€800–1,400 (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€25–45", food: "€20–35", transport: "€10–20", activities: "€20–40", total: "€70–110/day" },
    { tier: "✨ Mid-Range", accommodation: "€130–200", food: "€60–100", transport: "€20–30", activities: "€40–80", total: "€200–350/day" },
    { tier: "💎 Luxury", accommodation: "€450–1,200", food: "€150–600", transport: "€50–100", activities: "€100–300", total: "€600–1,500+/day" },
  ],
  mistakes: [
    {
      icon: "🍽️",
      title: "Eating at Nyhavn Restaurants",
      desc: "The restaurants that line the Nyhavn canalfront are among the most expensive and least authentic in Copenhagen — tourist markup of 2–3x standard Copenhagen prices. A smørrebrød here costs DKK 200–350 (€27–47) for the same dish that costs DKK 115–175 (€15–24) three blocks away. Walk 5 minutes into the city: Aamanns Etablissement (Nørre Farimagsgade), Schønnemann (Hauser Plads), and Slotskælderen hos Gitte Kik (Fortunstræde) are the correct smørrebrød institutions.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏘️",
      title: "Skipping Freetown Christiania",
      desc: "Many visitors skip Christiania as uncomfortable or edgy. This is a mistake. The 84-acre commune is one of Europe's most remarkable urban experiments — a self-governing community that has functioned since 1971 within one of the world's most orderly cities. Walk the lake path, see the DIY architecture, visit the Great Hall, eat at Månefiskeren. Yes, Pusher Street is there, but the rest of Christiania is open, beautiful, and entirely unusual.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚲",
      title: "Not Renting a Bike",
      desc: "Copenhagen is the world's most bicycle-friendly city: 390km of dedicated bike lanes, traffic lights timed to cycling speed, and a culture where 62% of residents cycle to work every day. Renting a bike (DKK 139 / €19/day) transforms Copenhagen from a city you walk around to a city you feel part of. Cycling along the Nørrebrogade, down to Amager beach, through the Frederiksberg Gardens, and across the bridges takes you to a Copenhagen that tour buses never see.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Nyhavn at 6am — Empty Canal, Morning Light on the Coloured Houses",
      desc: "Nyhavn is photographed at all hours but the undisputed best time is 6–7am on a weekday. The canal is still, the coloured facades catch direct morning light, the boats are unmoved, and there are no tourists. By 8am the café terraces are being set up. By 10am the quayside is packed. Set your alarm once and spend 45 minutes at Nyhavn in the morning quiet — it is a completely different place from the afternoon version.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎡",
      title: "Tivoli at Night — The Illuminated Garden After Dark",
      desc: "Tivoli is open from noon but the correct time to visit is from 6pm onward when the 100,000 coloured lights switch on and the gardens enter a different dimension. The fountains illuminate, the peacocks return to their coops, the music stages fill, and the atmosphere becomes genuinely magical in a way that is impossible to convey in photographs. Entry is the same price at noon or 8pm — come late, stay until midnight.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "⛵",
      title: "Canal Boat Tour for €12 — Best Value in Copenhagen",
      desc: "The Netto-Bådene harbour bus (DKK 89 / €12, runs May–September) is Copenhagen's best budget experience: a 1-hour loop through the city's canals past the Opera House, the Royal Library Black Diamond, Christianshavn, and the Nyhavn canal from the water. Sit on the open upper deck. The route shows you architecture and neighbourhoods that land-based travel misses entirely. No commentary — just the city at water level.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Copenhagen vs Stockholm — which city should I visit first?",
      a: "Both are excellent, and they're different enough to justify visiting both. Copenhagen is more compact, more walkable, and more architecturally coherent — a city you can understand in 3 days. Stockholm is spread across 14 islands, more grand in scale, and has a different cultural weight (the Vasa Museum alone justifies the trip). For a first-time Scandinavia visitor: Copenhagen is the better introduction. It's also 15 minutes by train from Malmö, giving you a Sweden experience within a Copenhagen trip.",
    },
    {
      q: "Is Denmark really the world's happiest country?",
      a: "Denmark has topped or nearly topped the World Happiness Report since it began in 2012. The reasons are debated: high social trust, universal healthcare and education, strong work-life balance (average 37-hour work week), excellent public infrastructure, low corruption, and high wages combined with a strong welfare safety net. What visitors notice: people seem relaxed, the public spaces are clean and functional, cycling is treated as a serious adult activity, and the concept of hygge — cosy togetherness — is a genuine cultural value, not a marketing campaign.",
    },
    {
      q: "Do Indian passport holders need a Schengen visa for Denmark?",
      a: "Yes. Denmark is a full Schengen member. Indian passport holders must apply for a Schengen short-stay C visa at the Danish embassy or through VFS Global Denmark. Fee: €80. Apply at least 6 weeks before travel in summer. Required documents: confirmed hotel bookings, bank statements (€70+/day), return flight tickets, employment proof, and travel insurance covering €30,000. If your trip includes Sweden (Malmö day trip), your same Schengen visa covers it — no additional paperwork.",
    },
    {
      q: "How expensive is Copenhagen really?",
      a: "Copenhagen is expensive by Southern European standards, but comparable to Paris and cheaper than Oslo. Budget travelers spending €70–110/day is realistic with hostel accommodation and smart food choices — specifically: avoid Nyhavn restaurants, buy groceries at Netto or Lidl for breakfast and lunch, eat one restaurant dinner per day. The Copenhagen Card (DKK 899 / €121 for 72 hours) is one of Europe's best value city cards — it covers the Metro, all buses, and 80+ museums, and pays for itself within 1.5 days.",
    },
    {
      q: "How do I get a Noma restaurant reservation?",
      a: "Noma releases reservations exactly 90 days in advance at 10am Copenhagen time on restaurant.noma.dk. The website typically crashes within seconds of opening. Tactics: set a calendar reminder, be on the site at 9:55am, refresh at 10:00am exactly, have your credit card details pre-entered. Cancellations appear 24–48 hours before service. Noma is operating in a new format from 2024–2025 as René Redzepi transitions to a food laboratory model — check the current status before planning the trip around it. Alternatives: Alchemist, Geranium, and Era Ora also hold multiple Michelin stars.",
    },
  ],
  combineWith: ["norway-fjords-6-days", "amsterdam-4-days", "berlin-4-days"],
  relatedSlugs: ["norway-fjords-6-days", "iceland-7-days", "amsterdam-4-days", "paris-5-days"],
  galleryQuery: "copenhagen nyhavn canal denmark tivoli christians borg palace",
};

export const metadata: Metadata = {
  title: "Copenhagen in 3 Days: Nyhavn, Tivoli, Freetown & Danish Design (2026)",
  description: "The complete Copenhagen 3-day itinerary: Nyhavn at dawn, Tivoli at night, Freetown Christiania, Louisiana Museum, a Malmö day trip, and where to eat smørrebrød. Real DKK costs.",
  keywords: ["copenhagen itinerary 3 days", "copenhagen travel guide 2026", "nyhavn guide", "tivoli gardens tips", "freetown christiania", "denmark travel guide", "copenhagen budget"],
  openGraph: {
    title: "Copenhagen in 3 Days: Nyhavn, Tivoli & Danish Design (2026)",
    description: "Nyhavn at 6am, Tivoli at night, Freetown Christiania, and the world's best smørrebrød — Copenhagen done right with real DKK costs.",
    images: [{ url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80", width: 1200, height: 630, alt: "Copenhagen Nyhavn colourful canal houses Denmark" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Copenhagen in 3 Days (2026)", description: "Nyhavn secrets, Tivoli at night, Freetown Christiania — real costs and timings." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/copenhagen-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Copenhagen in 3 Days: Nyhavn, Tivoli, Freetown & Danish Design (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80",
      description: "The complete Copenhagen 3-day itinerary covering Nyhavn, Rosenborg, Tivoli, Christiania, Louisiana Museum, and Danish design.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Copenhagen 3 Days", item: "https://www.incredibleitinerary.com/blog/copenhagen-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Copenhagen, Denmark",
      description: "The world's most bicycle-friendly city — home to Nyhavn, Tivoli Gardens, Freetown Christiania, New Nordic cuisine, and the world's happiest population.",
      touristType: ["City break travelers", "Design enthusiasts", "Food lovers", "Scandinavia explorers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
  ],
};

export default function CopenhagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
