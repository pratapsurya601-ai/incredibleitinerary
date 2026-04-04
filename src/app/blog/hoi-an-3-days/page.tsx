import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Hoi An",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "hoi-an-3-days",
  heroQuery: "hoi an lanterns vietnam ancient town yellow buildings",
  heroAlt: "Hoi An Ancient Town at night with colourful lanterns reflected in the Thu Bon River Vietnam",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro: "Hoi An at 6am — the Old Town's yellow walls glowing in the first light before the motorbikes, a bánh mì from Madam Khanh's cart for 25,000 VND, the Thu Bon River mirror-still and empty — is the most photogenic hour in Southeast Asia. Three days gives you the UNESCO Ancient Town at its unhurried best, a custom jacket measured and stitched while you eat cao lau, a sunrise over An Bang Beach before the sun beds are out, and the full moon lantern festival if your timing is right.",
  stats: { duration: "3 Days", budgetFrom: "$20", bestMonths: "Feb–Apr, Aug–Sep", airport: "DAD (Da Nang, 30 min taxi $10)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["E-Visa Required", "Indian passport holders require a Vietnamese e-visa. Apply at the official portal: evisa.xuatnhapcanh.gov.vn. Fee: $25 USD per person. Single-entry, valid 90 days. Processing: 3 business days. This is the most straightforward visa option — do not use third-party agencies who charge $50–80 for the same service."],
        ["Application Process", "Complete the online form with passport details, a recent photograph (passport-size, white background), and a scan of your passport bio page. Payment by Visa/Mastercard. You receive an e-visa PDF by email — print it and present at immigration alongside your passport. The system is reliable and simple."],
        ["Duration & Extension", "The e-visa grants a single entry for up to 90 days. Vietnam also offers 30-day visa-on-arrival for some nationalities — Indian passport holders do NOT qualify for visa on arrival and must have the e-visa before boarding the aircraft. Airlines will deny boarding without valid visa documentation."],
        ["Da Nang Airport Entry", "Hoi An has no airport. Fly to Da Nang (DAD) which is 30km north. The e-visa works at all Vietnamese international airports and land border crossings. Immigration at Da Nang is fast with a pre-obtained e-visa — queue is typically under 20 minutes."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa for Most Nationalities", "Vietnam's e-visa ($25, evisa.xuatnhapcanh.gov.vn) is available to citizens of most countries including USA, UK, Australia, Canada, EU member states, and 100+ others. 90-day single entry. Apply at least 3 days before travel — processing is typically 24–72 hours."],
        ["Visa-Free Countries", "Citizens of Japan, South Korea, and selected European countries (France, Germany, Italy, Spain, and more — list expands periodically) receive 15–45 days visa-free. Check the current list at the Vietnamese Embassy website as policies change frequently. If you qualify, no pre-application is needed — just stamp in on arrival."],
        ["UK Post-Brexit", "UK passport holders receive 45 days visa-free entry to Vietnam as of 2023. No application, no fee, no e-visa required for stays under 45 days. Present your passport at Da Nang immigration and receive a 45-day stamp."],
        ["Entry via Da Nang", "All international flights arrive at Da Nang International Airport (DAD). From the airport: taxis to Hoi An cost $10–12 USD (30–40 minutes, use Grab app or fixed-rate airport taxis at the official counter — avoid touts outside the terminal). The journey along the coast road is scenic."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$20–38/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Heritage Houses & Lantern Evening",
          items: [
            "7:00am — Arrive from Da Nang by taxi (book the night before, $10–12 fixed rate, Grab is slightly cheaper at $8–9). Check into a guesthouse in the Old Town or immediately adjacent (GH1, Ancient House Village, or similar — $12–25/night for a clean private room with AC and breakfast included).",
            "9:00am — Old Town heritage ticket ($5, covers entry to 5 heritage sites including 1 ancient house, 1 assembly hall, 1 handicraft workshop, 1 museum, and the Japanese Covered Bridge). The ticket is purchased at the Hoi An Tourism Office on Le Loi Street. Without it, you can walk the streets for free — only the interiors require the ticket.",
            "9:30am — Japanese Covered Bridge (Cầu Chùa) — free to view from outside, $1 entry if you want to step inside. Built by the Japanese merchant community in the 1590s, the bridge spans a small canal in the western corner of the Old Town. Most beautiful in the early morning before the rickshaws crowd the approach.",
            "10:30am — Tan Ky Old House (Nguyen Thai Hoc Street, 30,000 VND or use heritage ticket). A 200-year-old merchant's house mixing Vietnamese, Chinese, and Japanese architectural elements — the carved crab motif on the beams is a prosperity symbol, the hand-painted tiles are Japanese export ware from the 17th century. The family still lives here; the grandmother will show you the flood markers on the wall.",
            "12:30pm — Lunch at White Rose Restaurant (Hai Phong Street, $3–8 for bánh bao vạc — delicate steamed shrimp dumplings shaped like white roses, a Hoi An speciality available exclusively at this family restaurant which holds the sole recipe rights in the city). The pork wontons are also exceptional.",
            "2:30pm — Walk the Old Town: Nguyen Thai Hoc, Bach Dang (river road), Tran Phu (main lantern street). The afternoon light on the yellow walls between 3–5pm is the photographer's ideal. Browse the lantern shops — a silk lantern costs $1–5 and is the most honest souvenir in Southeast Asia.",
            "7:30pm — Evening on the river promenade. On the 14th of the lunar month (full moon), the town turns off electric lights, floats paper lanterns on the Thu Bon River, and the Old Town becomes one of the most extraordinary spectacles in Southeast Asia. If your dates align, plan your entire trip around this. Otherwise, the evening Old Town with lanterns hanging above every doorway is still beautiful.",
          ],
          cost: "$25–40 total (heritage ticket $5 + food + accommodation)",
        },
        {
          day: "Day 2",
          title: "Tailors, Marble Mountains & Cooking Class",
          items: [
            "8:00am — Breakfast: bánh mì from Madam Khanh — 'The Bánh Mì Queen' (Phan Chau Trinh Street, $0.50–1, cash only, queue from 7am). The baguette is fresh from the local bakery, the fillings — pate, Vietnamese cold cuts, pickled daikon, fresh herb, chilli — are assembled to order. It is widely considered the best bánh mì in a city famous for the best bánh mì in the world.",
            "9:00am — Tailors: walk the entire Tran Phu, Le Loi, and Nguyen Thai Hoc tailor strip before choosing. There are 400+ tailor shops in Hoi An. Examine the sample garments (stitching quality, lining, button hole finish), check the fabric weight, and ask to see a completed piece on a similar body type. A good jacket: $30–60 in 48h. A simple dress: $15–30 in 24h. Pay 50% deposit only. Get a written receipt.",
            "11:30am — Marble Mountains (Ngu Hanh Son, 30 minutes south by motorbike or Grab, $3 entry). Five marble and limestone hills containing Buddhist sanctuaries, Hindu temples, and cave shrines. Take the elevator up (10,000 VND, saves 20 minutes of steps) to the main plateau, then walk the cave networks — Huyen Khong cave has a natural skylight illuminating a large Buddha in a cavern the size of a cathedral.",
            "2:00pm — My Son Sanctuary (45 minutes south, $12 entry, best with a half-day tour $15–25 from any Old Town travel agency). The ruins of the Cham Hindu civilisation — brick towers built between the 4th and 13th centuries in a valley ringed by forested mountains. Part of My Son was bombed during the Vietnam War; the craters are still visible alongside the restored towers. A UNESCO World Heritage Site of genuine power.",
            "5:30pm — Return to Hoi An. Pick up tailor deposit piece for first fitting.",
            "6:30pm — Cooking class ($20–35, half-day evening class, includes market tour and cooking 3–4 dishes): most classes begin with a morning market visit, but evening classes starting at the cooking school skip the market and focus on technique — cao lau, white rose dumplings, Vietnamese spring rolls. Morning classes with market visit are better value and more interesting if the timing allows.",
          ],
          cost: "$55–90 total (tailors deposit + Marble Mountains + My Son + cooking class + food)",
        },
        {
          day: "Day 3",
          title: "An Bang Beach, Coconut Village & Farewell Cao Lau",
          items: [
            "7:30am — Motorbike or Grab to An Bang Beach (7km from Old Town, $3–4 by motorbike taxi, $5–6 by Grab). An Bang is significantly less developed than Da Nang's My Khe Beach — quieter, local feel, the beach vendors are selling fresh coconuts ($1) rather than pressure-selling trinkets.",
            "8:00am — The beach before 9am: the light is horizontal, the sand is raked clean, the water is calm. Bring snorkelling gear from your guesthouse if available (ocean visibility varies by season; Feb–Apr is clearest). Rent a sun lounger for $2–3 or simply use the free sand.",
            "11:00am — Coconut Village boat tour ($10–15, book at the An Bang beachfront or in advance through the Old Town). Traditional round basket boats (thuyền thúng) spin and skip through the flooded coconut palm forest in the estuary north of Hoi An. The boatmen perform tricks — spinning the basket, fishing with circular nets — and the 90-minute tour through the water palms is genuinely lovely.",
            "1:30pm — Return to Old Town by motorbike taxi. Final tailor pickup — allow 30 minutes for any last-minute adjustments (a reputable tailor will fix anything on the spot).",
            "3:00pm — Last wander through the Old Town. Buy silk lanterns for $1–4 each (they pack flat). The Assembly Halls (Fukien, Cantonese) are worth 20 minutes each — the incense smoke, gilded deities, and dragon sculptures are the Old Town's most atmospheric interiors.",
            "5:00pm — Farewell cao lau noodles: a Hoi An speciality that cannot be authentically replicated outside the town because the recipe requires water drawn from specific wells (Ba Le well, allegedly — the noodles have a distinctive texture). Thick rice noodles, barbecued pork, croutons, bean sprouts, fresh herbs. $1.50–3 at a local eatery, $5–8 at a restaurant. Eat it at Trung Bac restaurant on Tran Phu or at Quan Cao Lau on Nguyen Truong To.",
          ],
          cost: "$30–55 total (beach + boat tour + final tailor + food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$60–120/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Private Tour & Lantern Evening",
          items: [
            "Arrive from Da Nang by private taxi (booked through your hotel, $15–20). Check into Anantara Hoi An Resort (from $150/night, riverside, pool) or La Siesta Hotel (from $80/night, Old Town proximity, pool, excellent breakfast).",
            "10:00am — Private Old Town walking tour with a licensed local guide ($30–50 for a 3-hour tour). A good guide transforms the town: the architectural details that indicate Japanese versus Chinese merchant origin, the flood survival strategies built into the house interiors, the specific history of the Nguyen lords who made Hoi An the greatest trading port in Southeast Asia. Heritage ticket included.",
            "1:30pm — Lunch at Morning Glory Restaurant (Nguyen Thai Hoc, $8–18 per dish, the most celebrated Vietnamese restaurant in Hoi An — owner Triem Nguyen has a cooking school and cookbook, the white rose and cao lau here are reference versions).",
            "3:30pm — Tailor visit: 3 recommended tailors for mid-range quality — Yaly Couture, Bebe Tailor, or A Dong Silk. These shops serve international clients consistently and stand behind their work. Jacket: $60–120, suit: $120–200, silk dress: $50–90. Pay 50% deposit, provide careful measurements.",
            "7:30pm — Evening river promenade for sunset and lanterns. Dinner at The Cargo Club (Nguyen Thai Hoc riverfront, $15–25/person — fusion Vietnamese, excellent cocktails, balcony table over the river). Book ahead for balcony seating.",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 2",
          title: "My Son Half-Day, Cooking School & Beach Sunset",
          items: [
            "7:30am — Half-day private My Son tour ($40–65/person with private car and guide). Departing early means arriving before the 10am tour bus crowd and exploring the ruins in cooler morning light.",
            "12:30pm — Return to Hoi An. Lunch at Bale Well restaurant ($6–12, famous for their bánh xèo sizzling pancakes and grilled meats — assemble everything in a fresh lettuce leaf).",
            "2:30pm — Morning Glory Cooking Class ($35–50 for a half-day session at Triem Nguyen's school on the river, includes market visit and cooking 5–6 dishes with restaurant-quality technique).",
            "6:00pm — Evening at An Bang Beach for sunset (Grab car, $6–8 each way). Sundowner drink at Soul Kitchen beach bar ($4–8 for cocktails, good food, the best sunset beach bar near Hoi An).",
            "8:30pm — Dinner back in the Old Town: Mango Mango Restaurant ($15–25/person, inventive Vietnamese with French technique, beautiful courtyard setting).",
          ],
          cost: "$130–190 total",
        },
        {
          day: "Day 3",
          title: "Basket Boats, Marble Mountains & Final Feast",
          items: [
            "7:00am — Sunrise at Cam Thanh Coconut Village ($15–20 all-in for boat tour from Hoi An). The morning light through the water palm fronds at sunrise is extraordinary — hire a Grab car to the village departure point ($5–7).",
            "10:00am — Marble Mountains with a guide ($15–20 for a 2-hour private guide, transport separate). A guide opens the historical and religious significance of the mountain shrines — the five peaks represent the five elements, the cave sanctuaries were active Buddhist and Hindu places of worship for centuries.",
            "1:00pm — Final tailor pickup. Mid-range tailors offer alterations on the spot with a 30-minute turnaround.",
            "2:30pm — Last Old Town wander: Fukien Assembly Hall (the most spectacular interior in the Old Town — gilded altars, incense clouds, dragon pillars) and the Thu Bon riverside market (fruit, herbs, live seafood). Buy a silk table runner ($8–15) or hand-painted lanterns ($5–15).",
            "6:30pm — Farewell dinner at Mango Rooms ($20–35/person, internationally acclaimed restaurant, book ahead — the caramelised fish in clay pot is a signature dish).",
          ],
          cost: "$100–160 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$200–600/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at The Nam Hai & Exclusive Old Town",
          items: [
            "Private car from Da Nang Airport to The Nam Hai resort (30 minutes, $25–35). Check into The Nam Hai, Four Seasons' sister property 4km from the Old Town — pool villas from $400–1,200/night, three pools, direct beach access, the finest resort in Hoi An. Alternatively: Anantara Hoi An Resort for the riverside experience ($200–500/night in the Old Town itself).",
            "3:00pm — Private cyclo (pedicab) tour of the Old Town ($30–50 for 1.5h, arranged through the hotel). The best way to see the town without walking in afternoon heat.",
            "5:30pm — Private lantern-making workshop at a family workshop in the Old Town ($50–80/person, 1.5h, you make and take home a silk lantern with your own design). The craft has been practised in Hoi An for 400 years.",
            "8:00pm — Dinner at The Nam Hai's restaurant (outdoor terrace overlooking the pool, 'The Restaurant' — 3-course Vietnamese tasting menu, $80–120/person). The seafood here is sourced same-day from the nearby Cua Dai fishing fleet.",
          ],
          cost: "$250–450 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Cooking School, My Son & Tailor House",
          items: [
            "7:00am — Private Vietnamese cooking class with a senior chef at The Nam Hai's culinary center ($150–250/person, 4-hour class covering 6–8 dishes, includes a private market visit to Hoi An Central Market with the chef).",
            "12:00pm — Lunch: your own cooking from the morning class, served on the resort terrace.",
            "2:30pm — Private helicopter to My Son Sanctuary ($500–800/person for a 30-minute scenic flight and private ground tour with an expert archaeologist). The Cham ruins from the air and close-up with no other visitors is an entirely different experience from a group tour.",
            "6:00pm — Appointment at Yaly Couture for a bespoke tailoring consultation ($200–500 for a suit or dress using European-sourced fabric with the house's master tailor). Same 48h turnaround, but with better materials and more careful craftsmanship than the standard tourist offering.",
            "8:30pm — Dinner at Mango Rooms (book the private garden table, $40–70/person).",
          ],
          cost: "$500–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "An Bang Charter & Farewell Old Town",
          items: [
            "7:00am — Private boat charter on the Thu Bon River ($100–180 for 3 hours, up to 8 people). The river at dawn: fishing boats returning from the night catch, women washing vegetables at the water's edge, the Old Town's yellow facades reflecting in the water. Continue upriver to the Cam Thanh coconut palm forest for a private basket boat experience ($30–50 extra).",
            "11:00am — An Bang Beach: private cabana at one of the resorts (Soul Kitchen or The Beach House, $20–50 for a full-day cabana reservation including towels and a food/drink credit).",
            "2:30pm — Return to Old Town for final tailor pickup. The Nam Hai concierge can arrange an express alteration service if anything needs adjustment.",
            "5:00pm — Sunset cocktails at the Bar of the Anantara Hoi An Resort river terrace ($12–20/cocktail, the view is the best in the Old Town).",
            "7:30pm — Farewell dinner at Ba Le Well ($10–15/person, the most famous local restaurant in Hoi An for its garden setting and hand-rolled fresh spring rolls). Even at luxury tier, this is the most authentic farewell meal in Hoi An. Then a final walk through the Old Town lanterns before departure.",
          ],
          cost: "$200–350 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$8–18", food: "$5–12", transport: "$3–6", activities: "$5–15", total: "$21–51/day" },
    { tier: "✨ Mid-Range", accommodation: "$60–120", food: "$20–40", transport: "$10–20", activities: "$25–50", total: "$115–230/day" },
    { tier: "💎 Luxury", accommodation: "$250–800", food: "$60–150", transport: "$30–80", activities: "$80–250", total: "$420–1,280/day" },
  ],
  mistakes: [
    { icon: "💰", title: "Paying the First Price a Tailor Quotes", desc: "The initial price quoted at most Hoi An tailoring shops is negotiating-room pricing, not the final price. Start at 50% of the quoted price and meet in the middle. A jacket quoted at $100 typically settles at $50–65 with respectful negotiation. Shops selling to international tourists have built this expectation into their pricing. However: once you've negotiated and agreed a price, pay it in full at collection — attempting to renegotiate at pickup is considered bad faith.", color: "bg-red-50 border-red-200" },
    { icon: "⏰", title: "Asking Tailors for a 24-Hour Turnaround", desc: "Many shops advertise 24-hour turnaround and can technically deliver it. The quality of a 24-hour piece is substantially lower than a 48–72 hour piece because the stitching is rushed and there's no time for a second fitting. If the item matters, tell the tailor you need 72 hours minimum — your arrival day for measurement, a fitting on Day 2, final collection on Day 3. This is how quality tailoring works globally.", color: "bg-orange-50 border-orange-200" },
    { icon: "🌧️", title: "Visiting July–August During Monsoon Season", desc: "Hoi An sits in a typhoon corridor. July and August bring heavy rain, frequent typhoon threats, and flash flooding in the Old Town (the Ancient Town street signs include historic flood markers at head height). The beach is rough and often closed. February to April and August to September are the reliably good windows. September to November is transition season with some rain but significant beauty. Check weather forecasts for your specific dates.", color: "bg-yellow-50 border-yellow-200" },
  ],
  tips: [
    { icon: "🏮", title: "Full Moon Lantern Festival: Check Your Dates First", desc: "The Hoi An Lantern Festival falls on the 14th day of every lunar month — when the moon is full and electric lights in the Old Town are turned off and replaced with paper lanterns and candlelight on the river. This is genuinely one of the most atmospheric evenings in Asia. The dates for 2026: February 11, March 13, April 12, May 11, June 10, July 9, August 8, September 7, October 6, November 4, December 4. Book your Hoi An nights to include one of these dates.", color: "bg-amber-50 border-amber-200" },
    { icon: "🏛️", title: "My Son Half-Day Tour: Morning Only", desc: "My Son Sanctuary sits in a narrow jungle valley that acts like an oven in the afternoon — temperatures inside the ruins reach 38–42°C from noon onwards. Every morning tour feels warm but manageable; every afternoon tour feels brutal and miserable. Book a morning departure (7:30–8am from Hoi An) that arrives at the ruins by 9am and departs by noon. Most tours offer both timing options; always choose morning.", color: "bg-teal-50 border-teal-200" },
    { icon: "🧵", title: "Walk the Entire Tailor Street Before Choosing", desc: "There are 400+ tailoring shops in Hoi An and quality varies enormously. Before committing to any shop, walk the full length of Tran Phu, Le Loi, and Nguyen Thai Hoc and look at 5–6 sample garments in different shops. Feel the lining quality, examine the button holes, check the hem stitching. The best shops keep a portfolio of completed pieces photographed on customers — ask to see it. A recommendation from your guesthouse owner (who knows the shops and cares about their guests' satisfaction) is more reliable than any online review.", color: "bg-green-50 border-green-200" },
  ],
  faqs: [
    { q: "How do I guarantee tailor quality in Hoi An?", a: "Quality tailoring in Hoi An requires time. Three rules: allow 72 hours not 24 (rushing produces rushing), attend a second fitting on Day 2 before final stitching (this is when adjustments are cheapest and easiest), and pay only 50% deposit — the balance on satisfactory completion. Reputable shops: Yaly Couture (consistent international quality), Bebe Tailor (excellent bespoke suits), A Dong Silk (heritage silk specialist). If a shop declines to do a second fitting, choose a different shop." },
    { q: "When are the Lantern Festival dates in 2026?", a: "The Hoi An Full Moon Lantern Festival occurs on the 14th of each lunar month. 2026 dates: January 13, February 11, March 13, April 12, May 11, June 10, July 9, August 8, September 7, October 6, November 4, December 4. The festival runs from approximately 6pm until midnight. Electric lights in the Old Town are extinguished, lanterns are lit, paper lanterns are floated on the river, and traditional music is performed. This is free to attend — the Old Town is simply open and illuminated. The most beautiful month for the festival is February or March when the weather is best." },
    { q: "How do I get from Da Nang to Hoi An?", a: "Taxi is the standard option: $10–12 for the 30–40 minute journey. Book through the official airport taxi counter (avoid touts). Grab (Southeast Asia's Uber) is slightly cheaper at $8–9 and works reliably at Da Nang Airport. The bus (500 VND, under $1) is the budget option — take bus 1 or bus 04 to Da Nang city then transfer to bus B04 to Hoi An, total 1.5h. Private transfers booked through your hotel cost $20–30 but include pickup from the arrivals hall." },
    { q: "What is the Vietnam e-visa process for Indian passport holders?", a: "Apply at evisa.xuatnhapcanh.gov.vn (the official government portal — not third-party sites). Cost: $25 USD paid by credit/debit card. Required: passport bio page scan, recent passport-size photograph with white background. Processing: 3 business days standard. You receive an approved e-visa PDF by email — print two copies and carry one with your passport. The e-visa grants 90 days single entry and works at all international airports and border crossings. Do not use unofficial third-party visa services that charge $50–80 — the official portal is simple and reliable." },
  ],
  combineWith: ["hanoi-4-days", "ho-chi-minh-city-3-days", "da-nang-2-days"],
  relatedSlugs: ["bali-5-days", "bangkok-4-days", "singapore-4-days", "luang-prabang-3-days"],
  galleryQuery: "hoi an vietnam ancient town lanterns thu bon river yellow walls",
};

export const metadata: Metadata = {
  title: "Hoi An in 3 Days: Ancient Town, Lanterns, Tailors & An Bang Beach (2026)",
  description: "Complete Hoi An 3-day guide — lantern festival dates 2026, tailor quality secrets, My Son ruins, An Bang Beach, cao lau noodles, and real USD costs for every budget.",
  keywords: ["hoi an itinerary 3 days", "hoi an travel guide 2026", "hoi an tailors guide", "lantern festival dates 2026", "hoi an ancient town", "vietnam travel guide"],
  openGraph: {
    title: "Hoi An in 3 Days: Lanterns, Tailors & Ancient Town (2026)",
    description: "Lantern festival dates, tailor quality secrets, My Son ruins, and real dollar costs — the complete Hoi An guide.",
    images: [{ url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80", width: 1200, height: 630, alt: "Hoi An Ancient Town at night with colourful lanterns Vietnam" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Hoi An in 3 Days (2026)", description: "Lanterns, tailors, ancient town — 3 plans with real USD costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/hoi-an-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hoi An in 3 Days: Ancient Town, Lanterns, Tailors & An Bang Beach (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
      description: "Complete Hoi An 3-day guide with lantern festival dates, tailor recommendations, My Son sanctuary, and An Bang Beach for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Hoi An 3 Days", item: "https://www.incredibleitinerary.com/blog/hoi-an-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hoi An, Vietnam",
      description: "A UNESCO World Heritage Ancient Town on Vietnam's central coast — renowned for its lantern-lit streets, 400-year-old merchant houses, world-class tailoring, and the monthly Full Moon Lantern Festival.",
      touristType: ["Culture travelers", "Food lovers", "Photographers", "Beach travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 15.8801, longitude: 108.3380 },
    },
  ],
};

export default function HoiAnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
