import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Melbourne",
  country: "Australia",
  countryFlag: "🇦🇺",
  slug: "melbourne-4-days",
  heroQuery: "melbourne flinders street station australia city skyline",
  heroAlt: "Melbourne Flinders Street Station at dusk with city skyline reflected in the Yarra River, Australia",
  category: "Australia & Pacific",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Melbourne doesn't dazzle you from across a harbour — it earns you slowly, down laneways barely wider than a bicycle, through coffee that Australians elsewhere will tell you is quite simply the best in the world, in galleries full of work no tourist board told you to see, and finally, on the Great Ocean Road, where the Twelve Apostles rise from the Southern Ocean as if they were placed there specifically to justify the drive. Four days is enough to understand why people who move here never leave.",
  stats: { duration: "4 Days", budgetFrom: "A$80", bestMonths: "Mar–May, Sep–Nov", airport: "MEL (Tullamarine)" },
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
        ["Visitor Visa Required", "Indian passport holders require a Visitor Visa (subclass 600) for Australia. Fee: A$145. Apply online through the official Australian Department of Home Affairs ImmiAccount portal. Do not use third-party agents — the official portal is fully self-service. Processing time: 20–40 business days, though it can take longer."],
        ["Key Documents", "Valid passport (6+ months remaining beyond your return date), bank statements demonstrating sufficient funds (A$5,000+ is typical), proof of employment or business ownership, confirmed accommodation, return air tickets, and a day-by-day travel itinerary."],
        ["ETA Not Available", "The Australian ETA (A$20, instant approval) is not available to Indian passport holders. Only citizens of countries such as USA, UK, Canada, and EU member states qualify for the ETA or eVisitor. Indian nationals must apply for the subclass 600 Visitor Visa regardless of trip length."],
        ["Plan Ahead", "Apply at least 6–8 weeks before departure. Biometrics collection at a VFS Australia centre may be required in some cases. The Australian High Commission in New Delhi and Consulates in Mumbai, Chennai, Kolkata, and Hyderabad process applications. Check the official Home Affairs website for current requirements before starting your application."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["ETA — A$20, Instant", "Passport holders from the USA, UK, Canada, Singapore, Japan, South Korea, and most European countries can apply for the Australian ETA through the official Australian ETA app. Cost: A$20 service charge. Approved within minutes. Valid for 12 months, multiple entries, up to 90 days per stay."],
        ["eVisitor — Free", "EU member state passport holders and certain other European nationalities (Switzerland, Norway, Iceland, etc.) qualify for the eVisitor (subclass 651), which is completely free and processed online. Typically approved within minutes to 24 hours."],
        ["ETIAS Note", "ETIAS is a European travel authorisation for the Schengen area — it does not apply to Australia. The Australian ETA and eVisitor are the relevant pre-travel requirements for visa-exempt nationals visiting Australia."],
        ["No Arrival Card", "Australia removed the paper incoming passenger card in 2019 for most arrivals. Complete biosecurity declarations on digital kiosks at the airport (SmartGate). Declare all food, plant material, and wooden objects honestly — biosecurity fines start at A$2,664 and customs enforcement is strict and consistent."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "A$80–140/day",
      days: [
        {
          day: "Day 1",
          title: "City Laneways, Galleries & Queen Vic Market",
          items: [
            "8:30am — Start at Flinders Street Station (free exterior, iconic 1905 Edwardian building). The corner of Flinders and Swanston Streets is the heartbeat of Melbourne — trams converging, commuters, students, coffee cups. The clock faces above the original entrance doors show departure times for suburban trains.",
            "9:00am — Federation Square (free) across the intersection. The angular zinc, glass, and sandstone geometry is deliberately polarising — Melburnians have debated its ugliness and brilliance simultaneously since it opened in 2002. The Ian Potter Centre: NGV Australia inside is free and has outstanding Australian colonial and Indigenous art.",
            "10:00am — Hosier Lane (free, 5 minutes walk from Federation Square). Melbourne's most famous street art laneway — every centimetre of both walls covered in rotating murals, paste-ups, and stencils by Australian and international artists. The work changes constantly; photographs are out of date within weeks. The cobblestones are part of the aesthetic.",
            "11:00am — Degraves Street espresso experience. This is the most celebrated café laneway in Australia's coffee capital. Order a flat white at Degraves Espresso Bar or The Vault (A$4.50–5.50). Sit at the street tables and watch the laneway operate at full Melbourne tempo.",
            "12:00pm — Walk north to the CBD grid: the Block Arcade (1892 Victorian shopping arcade, free to walk through) and the Royal Arcade (1870, oldest in Australia, free) are worth 20 minutes each for the heritage interiors and the Gog and Magog clock figures.",
            "1:30pm — Queen Victoria Market (open Tuesday to Sunday, free entry). The 'Queen Vic' has occupied this 7-hectare site since 1878. The deli hall is the best in Melbourne — smallgoods, cheeses, olives, cured meats. Pick up lunch at the market food stalls (A$8–15 for a hot meal, A$5–12 for market food).",
            "3:30pm — NGV International (180 St Kilda Road, free permanent collection, closed Monday). The National Gallery of Victoria's international building houses the permanent collection: the Rembrandt room, the Degas paintings, the stained glass ceiling in the Great Hall (the largest stained glass ceiling in the world). Entry is free — book timed entry for ticketed exhibitions separately.",
            "6:30pm — Southbank Promenade walk (free) along the Yarra River. The city skyline reflected in the Yarra at dusk, Crown Casino's gas flame towers, and the Eureka Tower (the world's tallest residential building when it was completed in 2006) all visible from the promenade.",
            "8:00pm — Dinner in the CBD: MoVida Bar de Tapas (Hosier Lane — yes, you eat inside the street art, A$25–40/person for tapas and Spanish wine) or Hardware Lane Italian restaurants (A$18–28 for pasta).",
          ],
          cost: "A$40–65 total (market food + dinner)",
        },
        {
          day: "Day 2",
          title: "St Kilda, Penguins & Acland Street",
          items: [
            "9:00am — Take the City Circle Tram (free, route 35) to Spencer Street, then tram 96 or 16 to St Kilda (A$4.60 with MYKI). St Kilda is Melbourne's seaside suburb — 5km south of the CBD, palm-lined Fitzroy Street, the esplanade, and an art deco pier.",
            "9:30am — St Kilda Beach and foreshore walk. The beach is pleasant rather than spectacular by Sydney standards — but the pier, the breakwater, and the view back to the Melbourne skyline are excellent. The St Kilda Baths are a heritage-listed beach facility (free changing rooms, optional spa A$30).",
            "10:30am — Luna Park St Kilda (free to walk past and photograph, rides cost separately). The Mr Moon face entrance and the 1912 Scenic Railway (the oldest continually operating wooden roller coaster in the world) are heritage icons.",
            "11:00am — Acland Street, St Kilda. The famous cake shop strip — Monarch Cakes (since 1934, kosher cakes A$4–8/slice), Glick's Bakery (A$3–6), and the original Acland Street Jewish community bakeries. This is not a tourist confection — it's a genuine neighbourhood institution.",
            "1:00pm — Lunch on Fitzroy Street or Acland Street (A$14–20 for a burger, pasta, or bowl). The St Kilda restaurant scene is strong — Donovans on the beach is excellent for mid-range (A$35–50/person), or St Kilda Sea Baths café for a lighter lunch with esplanade views.",
            "3:00pm — Esplanade Market (Sunday only, free entry). Over 200 stalls of handmade art, jewellery, clothing, and crafts along the beachfront. Melbourne's best outdoor market for original, locally made items.",
            "5:30pm — Wait for the St Kilda breakwater penguin colony (free). From around October to March, little penguins (the world's smallest penguin species) return to their burrows in the rocks of the St Kilda breakwater after dark. Volunteer rangers are present most evenings from October — no torches, no flash photography. This is a completely free wildlife encounter that happens in the middle of a city.",
            "7:30pm — Dinner in St Kilda: Stokehouse (Jacka Boulevard, A$40–60/person), one of Melbourne's landmark restaurants with direct beach views, or the more casual Stokehouse Q downstairs (A$25–35).",
          ],
          cost: "A$45–70 total (tram + lunch + dinner)",
        },
        {
          day: "Day 3",
          title: "Great Ocean Road Self-Drive Day Trip",
          items: [
            "6:30am — Hire a car for the day (A$55–80/day for a compact, book with Enterprise or Budget at Melbourne Airport the previous afternoon pickup). The Great Ocean Road begins at Torquay, 100km southwest of Melbourne (1 hour 15 minutes via Geelong Ring Road).",
            "8:00am — Torquay: the surf capital of Australia. The Surf World Museum (A$12, covers the history of Australian surfing culture) and the Rip Curl and Quiksilver factory outlets. Bells Beach is 5km south — the most famous surf break in Australia, site of the Rip Curl Pro since 1973.",
            "10:00am — Lorne: the best-looking Great Ocean Road town (A$5–8 for coffee and a pastry at the Lorne Foreshore Bakery, stunning views). The beach is calm inside the bay.",
            "11:30am — Apollo Bay: the halfway point (A$12–18 for fish and chips at the Apollo Bay Hotel overlooking the harbour). The Otway Ranges start immediately behind the town — the rainforest drive through Great Otway National Park to the Twelve Apostles is spectacular and completely free.",
            "1:30pm — The Twelve Apostles (free entry, Port Campbell National Park). Eight of the original twelve limestone stacks still stand (four have collapsed into the sea since 1990). The viewing platforms are well-positioned and the coastal geology is extraordinary — 20 million years of erosion. At midday the light is flat; at sunset it's magnificent. If you're here in the afternoon, stay for the last light.",
            "3:00pm — Loch Ard Gorge (free, 5 minutes drive from the Twelve Apostles). A narrow gorge with towering 65-metre limestone walls leading to a sheltered pocket beach. The gorge is named after the ship wrecked here in 1878 with only two survivors.",
            "4:30pm — Drive back via the inland route through Colac (shorter return to Melbourne, 2.5 hours).",
            "7:30pm — Return to Melbourne. Dinner in Fitzroy: Smith Street or Brunswick Street for A$15–25 Thai, Vietnamese, or Italian.",
          ],
          cost: "A$80–120 total (car hire + fuel + meals)",
        },
        {
          day: "Day 4",
          title: "Fitzroy, Carlton & Melbourne Museum",
          items: [
            "9:00am — Fitzroy breakfast on Smith Street or Brunswick Street. Patricia Coffee Brewers (Little Bourke Street, CBD) or Seven Seeds (Berkeley Street, Carlton) for Melbourne's best filter coffee (A$5–6). Fitzroy cafés for brunch: Touchwood (A$14–22 for eggs, toast, coffee), or Proud Mary on Smith Street (A$16–24).",
            "11:00am — Brunswick Street art walk (free). The 800-metre strip from Alexandra Parade to Johnston Street has murals, independent bookshops, vintage clothing stores, and a density of creative businesses that defines inner Melbourne's character.",
            "12:30pm — Lunch in Carlton (Little Italy): Lygon Street has been Melbourne's Italian precinct since the 1950s. Papa Gino's or Readings' café for pizza (A$15–20), or DOC Espresso for a proper Italian espresso and cornetto (A$7–9).",
            "2:00pm — Melbourne Museum (Carlton Gardens, A$15 adults). The Bunjilaka Aboriginal Cultural Centre is exceptional and recently expanded. The Australia Gallery with Phar Lap's heart, Blue the whale skeleton, and the CSIRAC computer (the world's fourth digital computer) are the must-see exhibits.",
            "3:30pm — Royal Exhibition Building (free exterior, Carlton Gardens). The only building in Australia inscribed on the UNESCO World Heritage List — an 1880 purpose-built exhibition hall still used for events. The ornamental gardens surrounding it are free and pleasant.",
            "5:00pm — Return to the CBD via tram. Afternoon walk along the Yarra River to Birrarung Marr (free riverside park with Federation Bells, an instrument of 39 bells played by computer-composed music at scheduled times).",
            "7:00pm — Farewell dinner in Collingwood or Fitzroy: Embla (CBD, A$40–60/person for natural wine and wood-fired modern Australian) or Tipo 00 (Little Bourke Street, A$25–35/person for the finest Italian pasta in Melbourne — book ahead).",
          ],
          cost: "A$50–80 total (museum + meals + coffee)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "A$220–400/day",
      days: [
        {
          day: "Day 1",
          title: "City Food Tour, NGV & Fine Dining",
          items: [
            "9:30am — Check into Hotel Lindrum Melbourne (A$200–320/night, Flinders Street, city centre — outstanding location and service) or The Adelphi Hotel (A$180–290, CBD).",
            "10:00am — Melbourne CBD food and laneway walking tour (Walks of Melbourne or Context Travel, A$70–90/person, 2.5 hours). A good guide covers the coffee culture history, the best café laneways, the Queen Vic Market produce story, and the city's extraordinary cultural diversity in food. Book the morning tour to get maximum benefit from the meal stops.",
            "1:00pm — Lunch at Supernormal (Flinders Lane, A$35–55/person) — Andrew McConnell's celebrated Japanese-influenced modern Australian restaurant. The lobster roll is the signature dish and worth the A$28 price. Bookings essential (2–3 weeks ahead for dinner; lunch walk-ins often possible if you arrive at noon).",
            "3:00pm — NGV International with a ticketed exhibition (A$25–35 for major travelling shows). The permanent collection is free; major exhibitions are ticketed and often exceptional — the NGV has hosted Picasso, Monet, and Melbourne Now exhibitions in recent years.",
            "6:00pm — Rooftop bar: Naked in the Sky (Brunswick Street, Fitzroy, A$15–22 for cocktails, skyline views) or Bar Americano (Presgrave Place, CBD, A$16–20 standing room only, Melbourne's most European bar experience).",
            "8:00pm — Dinner at Attica (Ripponlea, A$330–360 for the tasting menu, Ben Shewry's landmark restaurant consistently ranked in the world's top 50). Book 2–3 months in advance. This is arguably Australia's greatest restaurant.",
          ],
          cost: "A$280–400 total (tour + lunch + gallery + dinner)",
        },
        {
          day: "Day 2",
          title: "St Kilda, Penguins & Phillip Island Option",
          items: [
            "9:00am — Tram to St Kilda (A$4.60). Morning swim at St Kilda Beach or the St Kilda Baths heritage pool (A$30 for the spa facility, pool included).",
            "10:30am — Acland Street cake shops and brunch at Wall Two 80 (A$18–25) or Cibi Café for Japanese-influenced Melbourne brunch (A$20–28).",
            "12:30pm — Lunch at Stokehouse (A$40–60/person, beachfront views). The grilled barramundi and the prawn tacos are consistently excellent.",
            "2:30pm — Option A (budget-friendly): Wait for the free St Kilda breakwater penguins at dusk. Option B (day trip): Phillip Island Penguin Parade (1.5 hours from Melbourne, A$30–75/person, ranger-guided parade of little penguins at the Summerland Beach nesting ground). The Phillip Island parade is more structured and visitor-friendly than the St Kilda breakwater; the St Kilda version is free and spontaneous.",
            "7:00pm — Dinner back in Melbourne: Esposito at Toofey's (South Melbourne, A$45–65/person) for exceptional Italian-Australian seafood, or Smith & Daughters (Fitzroy, A$30–45/person, vegan Italian that is genuinely revelatory).",
          ],
          cost: "A$200–320 total (lunch + Phillip Island + dinner)",
        },
        {
          day: "Day 3",
          title: "Great Ocean Road with Private Guide",
          items: [
            "7:00am — Private Great Ocean Road tour with a specialist guide (A$150–200/person for a small group, or A$400–600 for a private vehicle and guide). The difference from self-driving is primarily the guide's knowledge of geology, Aboriginal history (the land is Gadubanud and Kirrae Whurrong country), and shipwreck history.",
            "9:30am — Bells Beach and Torquay with surf history context from the guide. Bells Beach is not visible from the road — the guide knows the path down to the viewing platform.",
            "12:00pm — Apollo Bay lunch at the guide's recommended local restaurant (A$25–40/person) — avoid the tourist traps on the main street.",
            "2:00pm — Twelve Apostles at the optimal afternoon light. A good guide positions the group on the less-used western viewing platform for better angles on the stacks.",
            "3:30pm — Loch Ard Gorge and the shipwreck story — the two survivors, Tom Pearce and Eva Carmichael, were 18 and 19 years old. The guide's account brings the 1878 tragedy to life.",
            "7:00pm — Return to Melbourne for dinner at Ezard (Melbourne CBD, A$65–85/person) for modern Australian with Asian influences, or Gimlet at Cavendish House (A$70–90/person) for the finest French-inspired cooking in current Melbourne.",
          ],
          cost: "A$300–480 total (guided tour + meals)",
        },
        {
          day: "Day 4",
          title: "Fitzroy, Collingwood & Farewell Dinner",
          items: [
            "9:00am — Coffee pilgrimage: Seven Seeds (Carlton), Patricia (CBD), or Proud Mary (Collingwood). Melbourne's specialty coffee culture is not exaggerated — these are among the finest independent roasters in the world. Order a filter coffee or a proper flat white; avoid chain cafés.",
            "10:30am — Smith Street, Collingwood: Melbourne's most design-forward shopping street. Gorman, Third Drawer Down, and independent homeware stores that have no equivalent elsewhere in Australia.",
            "12:00pm — Collingwood lunch: Lune Croissanterie (Fitzroy — if you have only one food experience in Melbourne, this is it. The croissants are produced with a precision that would impress a Parisian bakery. Queue from 11:30am; it opens at noon, A$8–14 per croissant). Or Charcoal Lane (Fitzroy, A$30–40/person, social enterprise restaurant using native Australian ingredients, exceptional).",
            "2:00pm — Melbourne Museum and Carlton Gardens (A$15, allow 2 hours for the Bunjilaka Aboriginal Cultural Centre and the Australia Gallery).",
            "5:00pm — Pre-dinner drinks at the Carlton Hotel rooftop or Embla's bar (CBD, excellent natural wine selection from A$14/glass).",
            "7:30pm — Farewell dinner at Vue de Monde (Rialto Tower, Level 55, A$195–250/person for the tasting menu). Shannon Bennett's restaurant at the top of the Rialto has panoramic Melbourne views from 230 metres and is the definitive Melbourne fine dining experience. Book 4–6 weeks ahead.",
          ],
          cost: "A$280–420 total (lunch + museum + fine dining)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "A$600–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Art, & Attica",
          items: [
            "Private transfer from Melbourne Airport to The Langham Melbourne (A$80–120 Blacklane). The Langham occupies a heritage riverside building on Southgate — the Chuan Spa is rated among the best hotel spas in Australia, and the Melba restaurant is a Melbourne institution.",
            "Afternoon: private curator tour of the National Gallery of Victoria — contact the NGV Foundation for a private 90-minute session with a curator. The permanent collection includes work not on public display, shown in the study rooms. Cost: A$500–800 for small groups.",
            "6:30pm — Pre-dinner drinks at Eau de Vie (Malthouse Lane, CBD) — Melbourne's finest cocktail bar, specialising in rare spirits and table-side cocktail theatre.",
            "8:00pm — Dinner at Attica (Ripponlea, A$360 tasting menu). Ben Shewry's landmark restaurant uses hyperlocal Australian ingredients — native muntries, wattleseed, Gippsland dairy. Consistently ranked in the World's 50 Best. Book 2–3 months in advance and confirm dietary requirements when booking.",
          ],
          cost: "A$700–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Great Ocean Road Helicopter Tour",
          items: [
            "8:30am — Private helicopter flight from Melbourne to the Twelve Apostles (A$900–1,400 for a 2-person charter, 50-minute flight each way following the Great Ocean Road coastline). The helicopter approach to the Apostles — the stacks visible from above the Southern Ocean — is utterly different from any ground experience.",
            "11:00am — Land at Twelve Apostles for exclusive ground-level time before the day-tripping coaches arrive. With a private pilot-guide, access timing is flexible.",
            "1:00pm — Helicopter to the Otway Ranges — land in the rainforest for a private walk through tree ferns and 300-year-old myrtle beeches. The contrast between the coastal drama and the rainforest silence within 15 minutes is extraordinary.",
            "3:30pm — Return helicopter to Melbourne CBD helipad.",
            "8:00pm — Dinner at Vue de Monde (Rialto Tower, Level 55, A$250 tasting menu, wine pairing A$180). The tower view at night — the entire Melbourne grid, Port Phillip Bay to the south, the Dandenongs to the east — is definitive luxury Melbourne.",
          ],
          cost: "A$1,500–2,200 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Yarra Valley Wine Region & Private Cellar Tour",
          items: [
            "9:00am — Private chauffeured drive to the Yarra Valley (1 hour from Melbourne, A$600–900 for a full-day private vehicle and guide). The Yarra Valley produces some of Australia's finest Pinot Noir and Chardonnay — the cool climate and elevation give wines with genuine European structure.",
            "10:00am — De Bortoli Yarra Valley estate: private behind-the-scenes winery tour with the winemaker (arranged in advance, A$80–150/person). Barrel tastings of unreleased vintages unavailable to walk-in visitors.",
            "12:00pm — Lunch at Stones of the Yarra Valley (Coldstream, A$80–120/person for two courses plus wine pairing). The property includes an outdoor amphitheatre and an accommodation complex.",
            "2:30pm — Healesville Sanctuary (A$50): Australia's finest native wildlife sanctuary, 40 minutes from Yarra Valley wineries. Platypuses, echidnas, wombats, Tasmanian devils, and wedge-tailed eagles in naturalistic habitats.",
            "7:00pm — Return to Melbourne for dinner at Gimlet at Cavendish House (CBD, A$90–130/person, the most sophisticated French-influenced restaurant in current Melbourne).",
          ],
          cost: "A$1,000–1,500 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Spa, Bespoke Shopping & Farewell",
          items: [
            "10:00am — The Langham Chuan Spa: 2-hour Traditional Chinese Medicine-inspired treatment (A$300–450 for a full treatment package). The Chuan Spa is consistently rated among the top five hotel spas in Australia.",
            "1:00pm — Private personal shopping experience with a Melbourne stylist (A$200–400, several boutique agencies offer this service). Collins Street and the CBD laneways have independent Australian designer stores — Christopher Esber, Zimmermann, Scanlan Theodore — alongside international luxury houses.",
            "3:00pm — The Ian Potter Centre: NGV Australia (free, Federation Square) for a final exposure to the Australian art collection.",
            "5:30pm — Sunset drinks at the Rooftop Bar at Curtin House (Swanston Street, Level 8 — the oldest continual rooftop bar in Melbourne, open-air, great CBD views, A$15–22 cocktails).",
            "8:00pm — Farewell dinner at Flower Drum (Market Lane, CBD, A$80–120/person). In continuous operation since 1975, consistently rated Melbourne's finest Chinese restaurant. The Cantonese kitchen is exceptional by any international standard — the Peking duck and the steamed coral trout are signature dishes.",
          ],
          cost: "A$800–1,200 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "A$28–50", food: "A$20–35", transport: "A$8–15", activities: "A$15–35", total: "A$71–135/day" },
    { tier: "✨ Mid-Range", accommodation: "A$180–320", food: "A$55–90", transport: "A$15–30", activities: "A$50–100", total: "A$300–540/day" },
    { tier: "💎 Luxury", accommodation: "A$450–800", food: "A$150–360", transport: "A$80–200", activities: "A$150–400", total: "A$830–1,760/day" },
  ],
  mistakes: [
    {
      icon: "🚗",
      title: "Skipping the Great Ocean Road",
      desc: "The Great Ocean Road is 243 kilometres of cliff-top coastal road between Torquay and Allansford, culminating at the Twelve Apostles — limestone stacks in the Southern Ocean that were 20 million years in the making. It is one of the finest drives in the world, self-drive costs under A$100 including fuel and car hire, and it's less than 90 minutes from Melbourne. Not visiting is Melbourne's single most common regret.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☕",
      title: "Not Trying a Proper Flat White",
      desc: "Melbourne's coffee culture is not marketing — it's a genuine culinary tradition, and a Melbourne flat white from a specialty roaster is a genuinely different experience from coffee anywhere else. Ordering a latte at a chain café, or adding sugar before tasting, are moves that local baristas notice. Go to Patricia, Seven Seeds, or Proud Mary, order a flat white, and drink it without sugar. You'll understand Melbourne better after that.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚕",
      title: "Taking Taxis When Trams Are Free",
      desc: "The City Circle Tram (route 35, dark green trams) runs a loop around the entire Melbourne CBD — Flinders Street, Docklands, Spencer Street, Melbourne Central, Fitzroy Gardens, and back — entirely for free, with a commentary about landmarks. The regular tram network (MYKI card, A$4.60 per journey) goes to St Kilda, Fitzroy, Carlton, South Yarra, and Richmond. Taxis in the CBD are expensive (A$15–25 minimum) and slower than trams at peak hour.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏨",
      title: "Staying Only in the CBD",
      desc: "Melbourne's most interesting parts are not the CBD — they're Fitzroy (street art, coffee, independent shops), St Kilda (beach, penguins, cakes), Carlton (Italian food, museum, bookshops), and Collingwood (design, Smith Street, creative industry). Staying in the CBD is convenient but means you spend a lot of time commuting through the city rather than being immersed in the neighbourhoods. Fitzroy or St Kilda accommodation puts you in Melbourne's actual soul.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚃",
      title: "The City Circle Tram Is Your Free Tour Bus",
      desc: "Route 35 (dark green heritage trams) runs a continuous loop around the CBD perimeter every 10–12 minutes, 7 days a week, completely free — no MYKI card required. It stops at Flinders Street, Docklands, Spencer Street, Melbourne Central, La Trobe Street, Fitzroy Gardens, and all the major CBD hotels. A full loop takes about 45 minutes. Use it as a free orientation on arrival and as a free connection to CBD attractions throughout your stay.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐧",
      title: "St Kilda Penguin Colony Is Free and Magical",
      desc: "From around October to early April (peak: November to February), a colony of 1,200+ little penguins nests in the rocks at the end of the St Kilda breakwater. They return at dusk after a day at sea. Volunteer rangers are present most evenings to guide visitors and protect the birds. Entry is completely free. No torches, no camera flash — the penguins are accustomed to quiet observers. This is one of the only places in the world where wild penguins breed inside a major city.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🛒",
      title: "Queen Victoria Market Is Best Tuesday to Saturday Morning",
      desc: "The Queen Vic Market (open Tuesday to Sunday, closed Monday) is at its best Tuesday to Saturday mornings when the full produce, deli, and general merchandise sections are all operating. Sunday is busiest and most tourist-heavy. The deli hall — cheeses, cured meats, olives, pastries — is outstanding at any time. The night market operates Wednesday evenings in summer (November to March) and is excellent for street food. MYKI bus or free City Circle tram from the CBD.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏁",
      title: "Book Months Ahead for AFL Grand Final Week",
      desc: "The AFL (Australian Football League) Grand Final is held at the MCG (Melbourne Cricket Ground) on the last Saturday of September. During Grand Final week, Melbourne's accommodation is sold out months in advance and prices double or triple. If your visit coincides with Grand Final week, book accommodation 4–6 months ahead. Conversely, if you're interested in Australian rules football, a regular AFL home-and-away match at the MCG (A$30–55 for a ticket) is one of the great Australian sporting experiences.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Sydney or Melbourne — which is better?",
      a: "Neither is objectively better — they're genuinely different cities. Sydney wins on natural spectacle: the harbour, the beaches, the Opera House, the Blue Mountains. Melbourne wins on urban culture: food, coffee, street art, live music, galleries, the Great Ocean Road. Sydneysiders think Melburnians are pretentious; Melburnians think Sydneysiders are shallow. Both are partly right. If you have time for one, Sydney is the instinctive first-timer choice. If you have time for both (most visitors who come this far do), do Sydney then Melbourne — they complement each other perfectly.",
    },
    {
      q: "Should I self-drive the Great Ocean Road or take a tour?",
      a: "Self-drive is better if you want flexibility — stop when you want, stay longer at the Twelve Apostles, detour into the Otways. The drive itself is one of the pleasures. Guided tour is better if you want context — a good guide covers the geology, the Aboriginal history of the Gadubanud people, and the shipwreck stories that make the scenery meaningful. On a tour you also don't deal with the return drive fatigue (it's a long day). Budget travellers should self-drive; mid-range and above should consider a small-group tour or private guide.",
    },
    {
      q: "Is tipping expected in Melbourne?",
      a: "No. Australia's hospitality workers are paid among the highest minimum wages in the world (A$24–26+/hour for service staff). Tipping is genuinely optional and not expected. You can round up or leave 10% at a fine dining restaurant if service was outstanding, but it is never obligatory and the absence of a tip creates no awkwardness. This is a significant relief for travellers from North America accustomed to 18–20% mandatory tipping culture.",
    },
    {
      q: "Where is the best coffee in Melbourne?",
      a: "Melbourne's best specialty coffee is concentrated in three areas: CBD laneways (Patricia on Little Bourke Street, Degraves Espresso on Degraves Street, The Vault on Centre Place), Carlton/Fitzroy (Seven Seeds on Berkeley Street, Proud Mary on Smith Street), and Collingwood (Brother Baba Budan on Little Lonsdale). The flat white — a double espresso with microfoamed full-cream milk in a small ceramic cup — is the defining Melbourne coffee drink. Avoid chains (they exist, but visiting them here is a missed opportunity).",
    },
    {
      q: "Do Indian nationals need a visa for Melbourne?",
      a: "Yes — the same Australian Visitor Visa (subclass 600) applies to all of Australia regardless of which city you're visiting. Fee: A$145. Apply via the Australian Department of Home Affairs ImmiAccount portal online. Processing: 20–40 business days. Apply at least 6–8 weeks before travel. The ETA (A$20, instant) is not available to Indian passport holders. See the Visa & Entry section above for the full document checklist.",
    },
    {
      q: "How do I get to the Great Barrier Reef from Melbourne?",
      a: "The Great Barrier Reef is off the coast of Cairns in Far North Queensland — approximately 3,000km north of Melbourne. There are no realistic overland options; fly from Melbourne (MEL) to Cairns (CNS) with Jetstar or Qantas (A$80–180 one way, 3 hours). From Cairns, reef day trips leave from the marina daily (A$130–250/person for a full-day snorkel or dive boat). The reef is genuinely extraordinary and worth the additional flight if you're making the journey to Australia from the other side of the world.",
    },
  ],
  combineWith: ["sydney-5-days", "bali-5-days", "singapore-3-days"],
  relatedSlugs: ["sydney-5-days", "bali-5-days", "singapore-3-days", "tokyo-5-days"],
  galleryQuery: "melbourne flinders street station great ocean road twelve apostles australia",
};

export const metadata: Metadata = {
  title: "Melbourne in 4 Days: Great Ocean Road, Street Art, Coffee & Culture (2026)",
  description: "4 complete Melbourne itineraries from A$80/day to A$2,000+. Great Ocean Road guide, Twelve Apostles, Hosier Lane street art, flat white culture, and real A$ costs for every budget.",
  keywords: ["melbourne itinerary 4 days", "melbourne travel guide 2026", "great ocean road guide", "twelve apostles", "melbourne coffee guide", "australia travel guide", "melbourne budget travel"],
  openGraph: {
    title: "Melbourne in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Great Ocean Road, Twelve Apostles, street art laneways, flat white coffee culture, and real A$ costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80", width: 1200, height: 630, alt: "Melbourne Flinders Street Station at dusk Australia" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Melbourne in 4 Days (2026)", description: "4 plans, Great Ocean Road guide, coffee culture, real A$ costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/melbourne-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Melbourne in 4 Days: Great Ocean Road, Street Art, Coffee & Culture (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80",
      description: "4 complete Melbourne plans from budget to luxury with Great Ocean Road, street art, coffee culture, and NGV galleries.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Melbourne 4 Days", item: "https://www.incredibleitinerary.com/blog/melbourne-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Melbourne, Australia",
      description: "Australia's cultural capital — home to world-class coffee, street art laneways, the National Gallery of Victoria, and the gateway to the Great Ocean Road.",
      touristType: ["Food lovers", "Coffee enthusiasts", "Art lovers", "Adventure seekers"],
      geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
    },
  ],
};

export default function MelbournePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
