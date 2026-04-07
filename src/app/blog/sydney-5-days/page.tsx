import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Sydney",
  country: "Australia",
  countryFlag: "🇦🇺",
  slug: "sydney-5-days",
  heroQuery: "sydney opera house harbour bridge australia sunset",
  heroAlt: "Sydney Opera House and Harbour Bridge glowing at sunset over the harbour, Australia",
  category: "Australia & Pacific",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Sydney is one of those cities that simply refuses to disappoint — the Opera House is more arresting in person than in any photograph, the harbour ferry to Manly is worth the entire flight from anywhere, and the Bondi to Coogee coastal walk at 8am, with sea cliffs dropping into Pacific surf, is among the finest urban walks on earth. Five days gives you the iconic landmarks, a Blue Mountains day trip that feels like a different continent, the best beaches in any world city, and enough time to understand why Sydneysiders consider everywhere else a consolation prize.",
  stats: { duration: "5 Days", budgetFrom: "A$90", bestMonths: "Sep–Nov, Mar–May", airport: "SYD (Kingsford Smith)" },
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
        ["Visitor Visa Required", "Most Indian passport holders require a Visitor Visa (subclass 600) for Australia. Fee: A$145. Processing time: 20–40 business days. Apply online through the ImmiAccount portal on the Australian Department of Home Affairs website. Do not use third-party agents — the official portal is straightforward."],
        ["Key Documents", "Passport valid for the full duration of your stay, bank statements showing sufficient funds (typically A$5,000+), proof of employment or business ownership, confirmed return flight tickets, accommodation bookings, and a detailed travel itinerary covering each day."],
        ["ETA Not Available", "The Australian ETA (Electronic Travel Authority, A$20) is not currently available to Indian passport holders — only to passport holders from select countries including USA, UK, Canada, and most of Europe. Indian nationals must apply for the full Visitor Visa subclass 600."],
        ["Apply Early", "Apply at least 6–8 weeks before your intended travel date. Processing is typically 20–40 business days but can stretch longer in peak periods. Biometrics may be required at a VFS Australia centre. Check the official Australian government website for the latest requirements before applying."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["ETA — A$20, Instant", "USA, UK, Canada, Singapore, Japan, South Korea, and most European passport holders can apply for the Australian ETA (Electronic Travel Authority) through the official Australian ETA app or website. Cost: A$20 service charge. Approved within minutes in most cases. Valid for 12 months, multiple entries, up to 90 days per stay."],
        ["eVisitor — Free", "Passport holders from EU member states and select European countries (Switzerland, Norway, Iceland) qualify for the eVisitor (subclass 651), which is free of charge and applied for online. Processing is usually instant to 24 hours."],
        ["Working Holiday Visa", "Citizens of the UK, Ireland, Canada, USA (from 2022), Germany, France, and other qualifying countries aged 18–30 (or 35 for some) can apply for a Working Holiday Visa (subclass 417 or 462) allowing 12 months in Australia with work rights. Fee: A$495."],
        ["No Arrival Card", "Australia abolished the incoming passenger card in 2019 for most arrivals. You complete biosecurity declarations digitally at SmartGate kiosks. Declare all food, plant material, and wooden items — biosecurity fines are up to A$2,664 and customs officers are serious about enforcement."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "A$90–150/day",
      days: [
        {
          day: "Day 1",
          title: "The Rocks & Circular Quay",
          items: [
            "8:00am — Start at Circular Quay and walk the Sydney Harbour foreshore path west toward the Opera House. The morning light hits the shells of the Opera House from the east — this is the best time for photographs. Entry to the exterior forecourt is free and always open.",
            "9:00am — Opera House exterior and forecourt (free). The scale of the building only becomes apparent when you're standing beneath it. Walk the full perimeter along the Bennelong Point promenade for angles you've never seen in postcards.",
            "10:00am — The Rocks historic district — Sydney's oldest neighbourhood, built by convicts from 1788. The cobblestone laneways, bond stores, and pubs predate most of Australia's cities. Pick up a free self-guided walking map from the Rocks Discovery Museum (free entry) on Kendall Lane.",
            "12:30pm — Lunch at The Rocks Market (Saturday and Sunday only, free entry) or grab fish and chips from Doyles on the Wharf (A$18–22) and eat on the harbour foreshore. Avoid the tourist restaurants on the Quay itself — prices are twice what you'd pay 200 metres away.",
            "2:00pm — Pylon Lookout at the Harbour Bridge (A$19). The southern pylon of the Sydney Harbour Bridge has a museum inside and panoramic views from the top that rival the famous BridgeClimb at 2% of the price (BridgeClimb costs A$374). Climb 200 steps — worth every one.",
            "4:30pm — Catch the Manly Ferry from Circular Quay (A$6.50 with Opal card, 30 minutes each way). This is not a tourist boat — it's a regular commuter ferry that happens to cross one of the world's great harbours, passing the Opera House, Fort Denison, and Manly Cove. Better than any paid harbour cruise.",
            "6:00pm — Walk Manly Corso and the ocean beach (free), then catch the return ferry for the sunset crossing. The city skyline from the Manly Ferry at dusk is the definitive Sydney image.",
            "8:00pm — Dinner in The Rocks: The Australian Hotel pub (1824, Australia's oldest pub precinct) for a meat pie with native Australian game fillings (A$12–16), or walk to Circular Quay for a BYO restaurant on Macquarie Street.",
          ],
          cost: "A$45–65 total (ferry + pylon + food)",
        },
        {
          day: "Day 2",
          title: "Bondi to Coogee Coastal Walk",
          items: [
            "7:00am — Catch bus 333 from the CBD to Bondi Beach (A$4.20 with Opal card, 30 minutes). Arriving at Bondi at 7:30–8:00am means the beach is near-empty — the light is extraordinary, the water a deep turquoise, and you'll have Campbell Parade almost to yourself.",
            "7:30am — Swim at Bondi Beach before the crowds. The rip currents are real — always swim between the red and yellow flags. The beach is patrolled by Surf Life Saving volunteers from September to April.",
            "9:00am — Start the Bondi to Coogee Coastal Walk (6km, 2–2.5 hours, entirely free). One of the great urban coastal walks in the world: cliff-top paths, Aboriginal rock engravings, sea pools carved into ocean rock platforms, wedding chapels, and cemeteries overlooking the Pacific. The trail passes Tamarama, Bronte, Clovelly, and Gordon's Bay.",
            "10:00am — Bronte Beach and rock pool — the sheltered ocean pool here is one of the finest natural swimming spots in Sydney, free to use, fed continuously by the Pacific Ocean.",
            "11:00am — Clovelly Beach — the long, narrow ocean inlet here is popular for snorkelling. You can swim with blue groper (large blue fish that have become celebrities) in the protected water.",
            "12:00pm — Bondi Icebergs ocean pool (A$9 entry). The iconic 50-metre pool built into the cliff at the south end of Bondi Beach, with ocean swells crashing over the edge in big swell. The pool café does excellent coffee; the restaurant above is mid-range but the view is extraordinary.",
            "1:30pm — Lunch at Coogee: any of the cafés on Coogee Bay Road (A$14–20 for fish tacos or a burger). The beach fish and chip shops are excellent and cheaper than the sit-down restaurants.",
            "3:00pm — Return to CBD via bus 373 from Coogee (A$4.20, 35 minutes).",
          ],
          cost: "A$30–45 total (Opal transport + Icebergs + food)",
        },
        {
          day: "Day 3",
          title: "Blue Mountains Day Trip",
          items: [
            "7:30am — Train from Central Station to Katoomba (A$8.50 each way on Opal, 2 hours). Catch the 7:30am or 8:00am train — Blue Mountains trains run from Central's suburban platforms. The journey crosses the Nepean River gorge and climbs through dense eucalyptus forest.",
            "9:30am — Echo Point Lookout (free) — the Three Sisters rock formation seen from Echo Point is the defining image of the Blue Mountains. Three sandstone pinnacles rising from the Jamison Valley 900 metres below. Arrive at 9:30am before the tour buses from Sydney.",
            "10:30am — Walk the Giant Stairway (free, 900 steps down into the valley). The descent through Jurassic-era rainforest to the valley floor is spectacular. It's physically demanding coming back up — consider the Scenic Railway as an alternative.",
            "12:00pm — Scenic Railway (A$35 return, steepest passenger railway in the world at 52° incline) back up from the valley floor to Scenic World at Katoomba. The open-air gondola portion crosses the valley canopy and is genuinely impressive.",
            "1:00pm — Lunch in Katoomba: Leura Mall (15 minutes by free shuttle bus from Echo Point) has excellent cafés. Silks Brasserie for a proper sit-down, or the Leura Gourmet delicatessen for a picnic (A$12–18).",
            "3:00pm — Katoomba Falls and Wentworth Falls hike (free). The 3km Wentworth Falls track leads to a 297-metre waterfall — one of the highest in Australia. Trail is well-marked and suitable for anyone reasonably fit.",
            "5:30pm — Return train to Sydney Central (A$8.50, 2 hours). Back in the CBD by 7:30pm.",
            "8:00pm — Dinner in Surry Hills (15 minutes walk from Central) — Sydney's best neighbourhood for restaurants. Crown Street has everything from Vietnamese pho (A$15) to excellent modern Australian bistros.",
          ],
          cost: "A$50–70 total (train + Scenic Railway + food)",
        },
        {
          day: "Day 4",
          title: "Darling Harbour, CBD & Surry Hills",
          items: [
            "9:00am — Hyde Park (free) — Sydney's oldest public parkland, with the Archibald Fountain at its centre. The Anzac Memorial at the southern end is a moving and architecturally significant 1934 Art Deco building (free entry).",
            "10:00am — Australian Museum (A$30 adults, A$15 children). Australia's oldest museum, reopened after a A$57.5 million renovation. Outstanding natural history collections, the First Nations gallery is exceptional and recently redesigned with direct Aboriginal and Torres Strait Islander community involvement.",
            "12:30pm — Chinatown for lunch (corner of Dixon and Hay Streets, 10 minutes walk from museum). Sydney's Chinatown is one of the best in Australia — BBQ duck rice or char siu pork from Golden Century or any of the hawker-style restaurants on Dixon Street (A$12–18). Avoid the tourist bubble tea shops and go where the Chinese-Australian community actually eats.",
            "2:00pm — Paddy's Markets at Haymarket (free entry, open Wednesday to Sunday). Australia's largest undercover market — fresh produce, cheap clothing, souvenirs, and the Market City shopping centre above for Asian grocery stores.",
            "3:30pm — Darling Harbour foreshore walk (free). The IMAX, Sea Life Aquarium (A$35–40 if interested), and the Powerhouse Museum (from A$20, a genuinely excellent science and design museum). The harbour promenade itself costs nothing and has excellent city views.",
            "5:30pm — Walk through Chinatown to Surry Hills. Crown Street and Foveaux Street are the best café and bar strips in inner Sydney.",
            "7:30pm — Dinner in Surry Hills: Four Ate Five on Crown Street for excellent modern Australian, or Bourke Street Bakery (famous for sausage rolls and pies, A$8–12 for a quick meal, closes at 6pm).",
          ],
          cost: "A$50–75 total (museum + activities + food)",
        },
        {
          day: "Day 5",
          title: "Northern Beaches & Farewell Harbour Dinner",
          items: [
            "8:00am — Ferry from Circular Quay to Manly (A$6.50), then bus to Freshwater Beach or Shelly Beach (A$4.20). Freshwater is a classic Australian suburban beach — beautiful, uncrowded, and the birthplace of surfing in Australia (Hawaiian Duke Kahanamoku gave the first demonstration here in 1915).",
            "9:00am — Shelly Beach (10 minutes walk from Manly beach). A sheltered cove with exceptional snorkelling — tropical fish, wobbegong sharks (harmless), blue groper, and stingrays in the seagrass. The water is crystal clear. Snorkel gear available for hire from Manly (A$15–20/hour).",
            "11:00am — Manly Corso and Manly Beach. Walk the 40-metre wide pedestrian mall between Manly Wharf and the ocean beach. Coffee at one of the Manly cafés (Sydney's flat white culture is strong here — A$4.50–5 for a proper one).",
            "1:00pm — Lunch at the Manly Wharf Hotel (A$20–28 for a burger or fish and chips on the harbour deck) before catching the return ferry.",
            "2:30pm — Return ferry to Circular Quay. Use the free afternoon to explore the Opera House interior (A$45 for a guided architecture tour) or visit the Museum of Contemporary Art Australia (MCA, free permanent collection) adjacent to Circular Quay.",
            "5:30pm — Royal Botanic Garden (free, open until sunset). The gardens run along the harbour foreshore east of the Opera House. Mrs Macquaries Chair at the far point has the most photographed view of the Harbour Bridge and Opera House together — best in late afternoon light.",
            "7:30pm — Farewell dinner at Opera Bar (beneath the Opera House, on the harbour — cocktails from A$18, food from A$25, the view is priceless) or at The Rocks for more budget-friendly options with the same harbour atmosphere.",
          ],
          cost: "A$55–80 total (ferry + snorkel hire + food + MCA)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "A$250–450/day",
      days: [
        {
          day: "Day 1",
          title: "Opera House Tour & Harbour Dinner",
          items: [
            "10:00am — Check into a 4-star hotel in The Rocks or Circular Quay area. QT Sydney (Market Street) or Travelodge Hotel Sydney for A$130–200/night. The Rocks location puts you walking distance from the harbour.",
            "11:30am — Sydney Opera House guided architecture tour (A$45, 1 hour). The interior is as extraordinary as the exterior — the Concert Hall, Joan Sutherland Theatre, and the story of Jørn Utzon's resignation mid-construction. Book online in advance for your preferred time.",
            "1:00pm — Lunch at Opera Kitchen on the forecourt (A$20–30) with direct Opera House views, or walk five minutes to the MCA Cafe for an excellent lunch menu (A$28–35).",
            "3:00pm — BridgeClimb Sydney (A$174–374 depending on time and route). The 3.5-hour guided climb to the summit arch of the Sydney Harbour Bridge at 134 metres is genuinely one of the great urban adventure experiences. The 360-degree view encompasses the entire harbour, the ocean, and the Blue Mountains on the horizon.",
            "7:00pm — Dinner at Quay Restaurant (North Sydney, access by ferry or walk across the Harbour Bridge) — Peter Gilmore's celebrated modern Australian restaurant, A$160–200 tasting menu, harbour views from every table. Book 4–6 weeks ahead.",
          ],
          cost: "A$280–380 total (BridgeClimb + Opera tour + dinner)",
        },
        {
          day: "Day 2",
          title: "Bondi & Coastal Walk with Paddling Lesson",
          items: [
            "8:00am — Private surf lesson at Bondi Beach (A$80–100/person for 2 hours with Let's Go Surfing, one of Bondi's best surf schools). The instructors are experienced and patient; beginner sessions typically get most participants standing within an hour in Sydney's gentle 1–1.5 metre beach breaks.",
            "10:30am — Bondi to Coogee Coastal Walk at mid-morning. At this hour the light is higher and stronger on the cliff faces — take the detour through Waverley Cemetery, which has some of the finest heritage tombstones in Australia overlooking the Pacific.",
            "12:30pm — Bondi Icebergs restaurant for lunch (A$40–60 for a main, stunning views). The Icebergs Dining Room above the famous pool is one of Sydney's most celebrated restaurants — Italian-influenced, seafood-forward, and the ocean-pool view from the windows is extraordinary.",
            "3:00pm — Bronte and Clovelly beaches for afternoon swimming and snorkelling.",
            "6:30pm — Return to the CBD for dinner. Rockpool Bar & Grill (Hunter Street, A$60–90/person) for Neil Perry's legendary dry-aged Australian beef and oysters.",
          ],
          cost: "A$280–380 total (surf lesson + lunch + dinner)",
        },
        {
          day: "Day 3",
          title: "Blue Mountains with Scenic World & Fine Dining",
          items: [
            "8:00am — Blue Mountains by train (A$8.50 each way) or private day tour from Sydney (A$120–180/person with transfers, guide, and lunch included — recommended for this budget tier).",
            "10:00am — Echo Point and Three Sisters, then the full Scenic World experience: Scenic Railway, Scenic Cableway, Scenic Walkway, and Scenic Skyway (A$55 Skyway + Cableway combination). The Skyway crosses a 270-metre deep gorge — the glass floor panels are deliberately positioned over the valley drop.",
            "12:30pm — Lunch at Silk's Brasserie in Leura (A$35–55 for two courses): one of the best country restaurants in NSW, modern Australian, long-established and consistently excellent.",
            "3:00pm — Wentworth Falls walk and Govett's Leap Lookout (free but requires transport to Blackheath, further into the mountains). The escarpment views from Govett's Leap are arguably more spectacular than Echo Point.",
            "6:30pm — Return to Sydney for dinner at Café Sydney (Level 5, Customs House, Circular Quay — A$50–70/person). The rooftop bar overlooks the Quay and serves exceptional seafood. The Sydney rock oysters here are definitive.",
          ],
          cost: "A$250–360 total (day tour or train + Scenic World + dinner)",
        },
        {
          day: "Day 4",
          title: "Darling Harbour, Powerhouse Museum & Surry Hills",
          items: [
            "10:00am — Powerhouse Museum (A$20, world-class design and science museum). The steam engines, space exploration exhibits, and decorative arts collections are excellent. The newly expanded Ultimo campus reopened in 2024 with significantly expanded exhibition space.",
            "12:00pm — Sea Life Sydney Aquarium (A$38, Darling Harbour). The dugong exhibit, shark walk, and the Great Barrier Reef oceanarium are the highlights. Book online for a discount.",
            "2:00pm — Darling Harbour walk and the Barangaroo Reserve (free). Barangaroo is Sydney's newest waterfront neighbourhood — a A$6 billion urban renewal project on the western harbour foreshore. The Barangaroo Reserve headland park at the northern end has harbour views and Aboriginal heritage interpretive walks.",
            "4:00pm — Shopping and gallery-browsing in Surry Hills and Paddington. Oxford Street (Paddington) has Australia's best independent fashion boutiques. Paddington Markets (Saturday only) are excellent for handmade art and jewellery.",
            "7:30pm — Dinner in Surry Hills: Nomad Restaurant (Bourke Street, A$45–65/person) for modern Australian shared plates with a serious wine list. One of the most consistently celebrated mid-range restaurants in inner Sydney.",
          ],
          cost: "A$200–300 total (museums + dinner + shopping)",
        },
        {
          day: "Day 5",
          title: "Taronga Zoo & Farewell Harbour Cruise",
          items: [
            "9:00am — Taronga Zoo ferry and entry combo (A$55 adults, includes ferry from Circular Quay, 12-minute crossing to Mosman). The zoo's position on the harbour foreshore means every animal enclosure has a harbour view — the giraffe paddock with the Opera House in the background is absurdly photogenic.",
            "10:00am — See the Australian native wildlife first: koalas, wombats, Tasmanian devils, echidnas, and the nocturnal house. The sky safari gondola rides across the zoo hillside (included in ticket).",
            "12:30pm — Lunch at Zoo Deck Café with harbour views (A$25–35) or pack a quality lunch from the QVB food court.",
            "2:30pm — Return ferry to Circular Quay and spend the afternoon at the Museum of Contemporary Art (MCA, free permanent collection) — one of the best contemporary art collections in the Asia-Pacific region.",
            "5:30pm — Sunset cocktails at the Blu Bar on 36 (Shangri-La Hotel, Level 36, A$18–24 per cocktail). The 360-degree view of the harbour, Manly, and the Northern Beaches from this height at sunset is the finest bar view in Sydney.",
            "7:30pm — Farewell dinner at Aria Restaurant (Circular Quay, A$80–120/person) for modern Australian fine dining with the Opera House and Harbour Bridge illuminated through floor-to-ceiling windows.",
          ],
          cost: "A$300–420 total (Zoo + cocktails + fine dining)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "A$700–2500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Park Hyatt Harbour Experience",
          items: [
            "Private transfer from Sydney Airport to Park Hyatt Sydney (A$120–160, Blacklane or Taxis Combined). The Park Hyatt is the only hotel in Sydney directly opposite the Opera House — the harbour-view rooms (A$800–1,600/night) have the Opera House close enough to read the performance schedule on the signage.",
            "Afternoon: Private BridgeClimb Summit Experience (A$374/person, sunset timing for maximum impact). The dedicated guide service for groups of two gives you a more intimate experience and better photography opportunities at the summit.",
            "8:30pm — Dinner at Quay Restaurant (Peter Gilmore, consistently ranked among Australia's finest). Reserve the harbour window table. The degustations menu A$200–250/person, wine pairing A$130. Book 6–8 weeks in advance for the best tables.",
          ],
          cost: "A$800–1,200 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Harbour Charter & Bondi Fine Dining",
          items: [
            "9:00am — Private harbour cruise aboard a sailing yacht or motor yacht (A$400–800 for a 3-hour private charter). The harbour has over 240 kilometres of foreshore — a private vessel accesses beaches, coves, and waterways inaccessible from land. Sail past Shark Island, into Middle Harbour, around Bradley's Head.",
            "12:30pm — Champagne lunch aboard or at Catalina Rose Bay (Lyne Park, Rose Bay — A$80–120/person), one of Sydney's most celebrated waterfront restaurants with seaplane access from the harbour.",
            "3:00pm — Private surf coaching at Bondi with a professional surfer (A$200–300 for 2 hours, 1-on-1 instruction). The quality of instruction at this level is substantially different from group lessons.",
            "7:30pm — Dinner at Icebergs Dining Room (Bondi, A$100–150/person) — the most glamorous restaurant in Sydney's beach suburbs, Italian-influenced and seafood-focused with the iconic pool and Pacific Ocean below.",
          ],
          cost: "A$1,000–1,500 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Blue Mountains Helicopter Tour",
          items: [
            "9:00am — Private helicopter flight from Sydney CBD to the Blue Mountains (A$800–1,200 for a 2-person charter, 25 minutes flight time). The Jamison Valley from the air — the Three Sisters from above the escarpment, the waterfall systems, and the sheer scale of the 26,000 square kilometres of wilderness — is an entirely different experience from ground level.",
            "11:00am — Land near Katoomba and explore Echo Point and the Giant Stairway with a private guide (A$300–500 for specialist guide). The guide provides geological and Aboriginal cultural context unavailable from signage.",
            "1:00pm — Lunch at Silk's Brasserie Leura (A$60–90/person for the full set menu with wine).",
            "4:00pm — Helicopter return to Sydney CBD helipad. Champagne on board.",
            "8:00pm — Dinner at Bentley Restaurant and Bar (CBD, A$100–130/person) — Brent Savage's wine-focused modern Australian restaurant. One of the most thoughtful wine lists in Australia and the tasting menu is technically refined.",
          ],
          cost: "A$1,500–2,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Art, Spa & Michelin-Level Dining",
          items: [
            "10:00am — Spa morning at the Park Hyatt (or The Langham Sydney's CHI Spa on The Rocks). 90-minute treatment packages from A$280. The Park Hyatt pool deck has direct harbour views — the Opera House from the infinity edge is the defining luxury Sydney image.",
            "12:00pm — Private tour of the Art Gallery of NSW with a curator (A$300–500 for a 2-hour private session). The gallery has an outstanding collection of Australian colonial painting, Indigenous art, and Asian art — the new Sydney Modern Project expansion opened in 2022.",
            "3:00pm — Paddington for gallery browsing: Sherman Contemporary Art Foundation (free, invitation-level exhibitions) and the commercial galleries on Glenmore Road.",
            "7:30pm — Dinner at Restaurant Hubert (CBD, A$90–130/person) — a subterranean French-inspired brasserie that is one of Sydney's most celebrated dining experiences, with exceptional charcuterie, classic French technique, and an extraordinary wine program.",
          ],
          cost: "A$900–1,400 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Farewell Seaplane to Palm Beach",
          items: [
            "10:00am — Seaplane from Rose Bay to Cottage Point Inn on the Hawkesbury River (A$250–350/person return, Sydney Seaplanes). The flight up the Pittwater, over the Northern Beaches, and into the river systems north of Sydney takes 25 minutes and is extraordinary. The Cottage Point Inn sits at the end of a remote river inlet — boat access only, reached by seaplane or private water taxi.",
            "11:00am — Long lunch at Cottage Point Inn (A$80–120/person for two courses plus wine). The river and bush setting has no roads — the silence and the bush smell after Sydney's intensity is the best kind of contrast.",
            "2:30pm — Seaplane return to Rose Bay via Palm Beach (Sydney's northern peninsula, where Home and Away is filmed).",
            "5:00pm — Return to Park Hyatt for the final harbour sunset from your room terrace. Order the cheese and charcuterie board from room service (A$65) and open a bottle of Penfolds Grange.",
            "8:00pm — Final dinner at Aria Restaurant (Circular Quay, A$120–150/person for the 5-course menu) with full harbour view and the bridge illuminated behind the Opera House in the final light.",
          ],
          cost: "A$800–1,200 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "A$30–55", food: "A$25–40", transport: "A$10–20", activities: "A$20–40", total: "A$85–155/day" },
    { tier: "✨ Mid-Range", accommodation: "A$130–200", food: "A$60–100", transport: "A$20–35", activities: "A$60–120", total: "A$270–455/day" },
    { tier: "💎 Luxury", accommodation: "A$500–1,600", food: "A$150–300", transport: "A$50–160", activities: "A$200–600", total: "A$900–2,660/day" },
  ],
  mistakes: [
    {
      icon: "⛰️",
      title: "Skipping the Blue Mountains",
      desc: "The Blue Mountains are 90 minutes by train and look like a different planet — ancient sandstone escarpments, 300-metre waterfalls, and Jurassic rainforest in a valley that covers more area than greater Sydney. Nearly every visitor who skips it wishes they hadn't. The train costs A$8.50 each way. This is the single most common Sydney regret.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating Near the Opera House",
      desc: "The restaurants immediately around the Opera House and Circular Quay charge Sydney's highest prices for Sydney's worst food — tourist markup is severe. Walk five minutes to The Rocks, or fifteen minutes to Surry Hills, and you'll pay half the price for food that's twice as good. The one exception is Opera Bar for drinks at sunset, which is worth the premium for the setting.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚗",
      title: "Renting a Car in the City Centre",
      desc: "Sydney's inner city is difficult to drive in, parking costs A$30–60/day in the CBD, and the traffic on the Harbour Bridge and Eastern Distributor is genuinely bad at peak hours. Opal card transport covers everywhere you'll want to go: buses to Bondi, trains to the Blue Mountains, ferries to Manly and Taronga Zoo. Rent a car only if you're driving to the Hunter Valley or south coast.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚶",
      title: "Missing the Bondi to Coogee Walk",
      desc: "The Bondi to Coogee Coastal Walk is six kilometres of sea cliffs, ocean pools, Aboriginal rock carvings, historic cemeteries, and Pacific Ocean surf — and it's free. Visitors who don't know about it (or think the beach walk sounds ordinary) consistently rate it as the best thing they did in Sydney once they do it. Do it at 8am before the heat and crowds.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚌",
      title: "Get an Opal Card on Arrival",
      desc: "The Opal card (available from convenience stores, pharmacies, and airport machines on arrival) caps your daily transport spend at A$17 — after you've spent A$17 in one day, all subsequent Opal travel is free. A round trip from the CBD to Bondi, a harbour ferry, and a train to the Blue Mountains would normally cost A$35+ but costs A$17 max. Load A$30 and you're set for several days.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⛴️",
      title: "Take the Manly Ferry at Sunset",
      desc: "The Manly Ferry departs Circular Quay every 30 minutes and costs A$6.50 each way with Opal. The crossing at sunset — the Opera House shells catching the orange light, the Harbour Bridge in silhouette, North Head at the ocean entrance glowing amber — is arguably the finest thing you can do in Sydney for under A$10. Sit on the upper deck on the port (left) side from Manly for the best city views.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍷",
      title: "BYO Restaurants Save a Fortune",
      desc: "Sydney has a strong BYO (Bring Your Own) wine culture. Many excellent restaurants — particularly in Surry Hills, Newtown, and Glebe — are licensed BYO, meaning you bring wine from a bottle shop (a$12–20 for a decent bottle) rather than paying restaurant markup (typically 300%). Ask when booking: 'Are you BYO?' A corkage fee of A$5–10/bottle is standard and still vastly cheaper than the wine list.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏄",
      title: "Hit Bondi at 7am for the Real Experience",
      desc: "Bondi Beach at 9am in peak season is wall-to-wall tourists. Bondi at 7am is surf lifesavers training, locals doing their morning swim, the Icebergs pool walkers doing their laps, and a beach that looks like the iconic Australia of the imagination. The coffee shops open early. The light is extraordinary. The water is noticeably cooler and cleaner before midday foot traffic. This timing difference changes the experience completely.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do Indian passport holders need a visa for Sydney?",
      a: "Yes. Most Indian passport holders require a Visitor Visa (subclass 600) for Australia — the A$20 ETA is not available to Indian nationals. Apply online through the Australian Department of Home Affairs ImmiAccount portal. Fee: A$145. Processing: 20–40 business days. Apply at least 6–8 weeks before travel. You'll need bank statements, return flights, accommodation bookings, and proof of employment. Do not use third-party visa agents — the official government portal is straightforward.",
    },
    {
      q: "When is the best time to visit Sydney?",
      a: "September to November (spring) and March to May (autumn) are ideal — warm but not scorching, lower humidity than summer, and crowds are manageable. December to February (Australian summer) is busy and hot (30–40°C), with school holidays making beaches very crowded. June to August (winter) is mild (12–18°C), excellent for Blue Mountains hikes, but beaches are quiet. The shoulder seasons give you everything — good weather, manageable prices, and the city at a more local pace.",
    },
    {
      q: "Sydney vs Melbourne — which should I visit first?",
      a: "Sydney first if you want beaches, harbour scenery, and the Opera House as the centrepiece of your trip. Melbourne first if you're more interested in coffee culture, street art, food, the Great Ocean Road, and the Phillip Island penguins. Most visitors with time for both do Sydney then Melbourne (or fly Sydney-Cairns for the Great Barrier Reef and return via Melbourne). If you have 10 days, Sydney 5 days and Melbourne 4 days is the standard itinerary and works extremely well.",
    },
    {
      q: "How do I get from Sydney Airport to the CBD?",
      a: "The Airport Link train (A$19.17 to the CBD on Opal, 13 minutes to Central Station) is the fastest option. Note that the Airport station has a A$15.10 station access fee built in — this is unavoidable and often surprises arrivals. Taxis and Uber cost A$30–50 to the CBD (20–40 minutes depending on traffic). There is no direct ferry from the airport. The train is almost always the best option unless you have excessive luggage.",
    },
    {
      q: "Is Sydney expensive?",
      a: "Sydney is one of the world's more expensive cities for accommodation and eating out. A decent hostel dorm costs A$35–55/night, a 3-star hotel A$130–200/night, and a restaurant main course averages A$25–35 in most neighbourhoods. However, transport is reasonable (Opal daily cap A$17), beaches are free, many excellent galleries and parks are free, and the BYO restaurant culture keeps dining costs manageable. A realistic budget is A$90–120/day on a backpacker budget, A$250–400 mid-range.",
    },
    {
      q: "Is tipping expected in Sydney?",
      a: "No. Tipping is not culturally expected in Australia — service staff are paid award wages (minimum A$24–26/hour) and tips are genuinely optional rather than expected. Rounding up the bill or leaving 10% at a restaurant for excellent service is appreciated but never obligatory. Never feel obliged to tip at a café, hotel, or taxi. This is significantly different from North American culture and is a genuine financial relief for budget travellers.",
    },
  ],
  combineWith: ["melbourne-4-days", "bali-5-days", "tokyo-5-days"],
  relatedSlugs: ["melbourne-4-days", "bali-5-days", "singapore-3-days", "kyoto-4-days"],
  galleryQuery: "sydney opera house bondi beach harbour bridge australia",
};

export const metadata: Metadata = {
  title: "Sydney in 5 Days: Opera House, Bondi Beach, Blue Mountains & Harbour Ferry (2026)",
  description: "5 complete Sydney itineraries from A$90/day to A$2,500+. Bondi to Coogee walk guide, Blue Mountains day trip, Manly ferry tips, Opal card hacks, and real costs for every budget.",
  keywords: ["sydney itinerary 5 days", "sydney travel guide 2026", "bondi beach guide", "blue mountains day trip", "sydney opera house", "australia travel guide", "sydney budget travel"],
  openGraph: {
    title: "Sydney in 5 Days: Budget to Luxury 2026 Itinerary",
    description: "Opera House, Bondi to Coogee walk, Blue Mountains day trip, Manly ferry, and real A$ costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80", width: 1200, height: 630, alt: "Sydney Opera House and Harbour Bridge at sunset Australia" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Sydney in 5 Days (2026)", description: "5 plans, Bondi secrets, Blue Mountains guide, real A$ costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/sydney-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Sydney in 5 Days: Opera House, Bondi Beach, Blue Mountains & Harbour Ferry (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
      description: "5 complete Sydney plans from budget to luxury with Bondi, Blue Mountains, Opera House, and Manly ferry.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Sydney 5 Days", item: "https://www.incredibleitinerary.com/blog/sydney-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Sydney, Australia",
      description: "Australia's largest city and harbour capital — home to the Opera House, Bondi Beach, the Harbour Bridge, and the Blue Mountains an hour west.",
      touristType: ["Beach lovers", "Architecture enthusiasts", "Adventure seekers", "Food lovers"],
      geo: { "@type": "GeoCoordinates", latitude: -33.8688, longitude: 151.2093 },
    },
  ],
};

export default function SydneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
