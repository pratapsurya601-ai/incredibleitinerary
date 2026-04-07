import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Boracay",
  country: "Philippines",
  countryFlag: "🇵🇭",
  slug: "boracay-4-days",
  heroQuery: "boracay white beach philippines crystal blue water sunset",
  heroAlt: "Boracay White Beach Philippines crystal clear blue water palm trees sunset",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "The most photographed beach in Asia: 4km of powdery white sand so fine it stays cool under your feet even at noon, windsurfers and kite-surfers racing in the afternoon Amihan wind, paraw (outrigger sailboat) silhouettes against a sunset so dramatic tour operators set their watches by it, and a resort island that was closed for 6 months in 2018 for environmental rehabilitation and came back better — Boracay, the Philippines' crown jewel.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$70",
    bestMonths: "Nov–May (dry season, Amihan winds)",
    airport: "MPH (Godofredo P. Ramos, Caticlan) via Manila MNL or Cebu CEB",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏖️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-there", emoji: "✈️", label: "Getting There" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa-Free", "Indian passport holders do NOT require a visa to enter the Philippines for tourism. You receive 30 days on arrival, free of charge."],
        ["Extension", "The initial 30 days is extendable to 59 days for free at a Bureau of Immigration office. Further extensions are available for a fee."],
        ["Requirements", "Return or onward ticket required — Philippine immigration strictly checks this. Show your return flight booking at the counter. Proof of accommodation may also be requested."],
        ["Entry to Boracay", "Boracay island has an additional Environmental Fee (₱150 per person, paid on the ferry). This is separate from national entry requirements."],
        ["Tourist Registration", "As of 2024, tourists arriving in Boracay register their contact information at the Caticlan jetty — a simple form, no fee."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "Citizens of the USA, UK, EU member states, Australia, Canada, and most Western nations enter the Philippines visa-free for 30 days."],
        ["Extension", "Extendable to 59 days free of charge. Can be extended further at Bureau of Immigration offices for ₱3,120 (~$55) per 29-day extension, up to a maximum stay of 36 months."],
        ["Requirements", "Return or onward ticket required at the border. Philippine immigration will turn you away without proof of an exit ticket — book a refundable ticket if your dates are flexible."],
        ["Boracay Environmental Fee", "All tourists pay ₱150 (~$2.70) Environmental Fee at the Caticlan jetty. Keep your receipt — it may be checked at accommodation."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$70–100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive, Station 3 & White Beach First Sunset",
          items: [
            "Fly into Caticlan (MPH) airport — it is a 5-minute tricycle ride from the airport to the Caticlan jetty. Pay the ₱150 Environmental Fee and ₱100 terminal fee at the jetty counter. Take the public ferry across to Boracay (15 minutes, ₱30). On arrival at the Cagban jetty on Boracay, take a tricycle to your accommodation ($0.50–1 per person).",
            "Budget accommodation: Station 3 area (the southern, local end of White Beach) for guesthouses and small hotels at $20–40/night. Station 3 has the same beach but less of the resort crowd and lower prices across everything — food, drinks, chair rental, and accommodation.",
            "Afternoon — Walk White Beach for the first time. White Beach is 4km long and divided informally into three stations: Station 1 (north, calm water, luxury resorts, quiet), Station 2 (D'Mall area, busiest, most restaurants), Station 3 (south, local, budget, wilder parties). The sand at every station is identical — the whitest, finest, softest beach sand in Southeast Asia.",
            "4:30pm — Rent a beachfront lounger (₱100–200 for the afternoon from beach vendors) and watch the afternoon windsurfers on the bay. The Amihan (northeast monsoon) wind from November to May produces ideal conditions — 15–25 knot side-shore winds with clean swells.",
            "5:30pm — Boracay sunset. This is not marketing copy: the sunsets from White Beach are genuinely extraordinary. The combination of the westerly orientation, the flat horizon over the Sibuyan Sea, the paraw outrigger silhouettes, and the warm humid air that refracts the light produces sunsets of extreme colour intensity. Every evening is different and every evening is spectacular.",
            "7:00pm — Dinner at a Station 3 beachfront restaurant: grilled bangus (milkfish, ₱180–250), adobo chicken (₱160–200), garlic rice (₱60), and San Miguel beer (₱80). Budget full meal: ₱400–550 (~$7–10).",
          ],
          cost: "$50–70 (day 1, arrival)",
        },
        {
          day: "Day 2",
          title: "Island Hopping & Ariel's Point",
          items: [
            "8:00am — Join an island hopping boat tour (shared, ₱600–800/person including snorkeling gear). Standard route: Crystal Cove Island (coral reef snorkeling, entry fee ₱200 additional), Magic Island (cliff jumping from 3 platforms: 3m, 5m, and 8m — one of Southeast Asia's most fun adventure activities), Bat Cave (colony of large fruit bats visible at the cave mouth), and a beach stopover for lunch at a floating restaurant.",
            "10:30am — Crystal Cove: a small island with a coral reef on its western side. The reef has suffered from bleaching events but still has colourful fish and some coral recovery visible. Snorkeling is best at 9–11am when the water is clearest.",
            "12:00pm — Magic Island cliff jumping. The 5-metre platform is manageable for most adults with no experience. The 8-metre platform requires commitment. The water is clear and deep — jump straight. Local kids who've done it 200 times will egg you on enthusiastically.",
            "2:00pm — Option: Ariel's Point (separate day trip, ₱2,500–3,000/person, departs from D'Mall pier at 11am, returns 6pm, includes meals and unlimited San Miguel beer). Ariel's Point is a private island off the coast with 5 cliff diving levels (3–15 metres), kayaking, paddle boards, and a full Filipino lunch. It's a full social day with a lively crowd — good value and a complete Boracay experience.",
            "5:00pm — Return to White Beach. Shower, change, and head to D'Mall for the evening browse. D'Mall is an open-air shopping and dining complex at Station 2: restaurants from every cuisine, bars, souvenir shops, spas ($10–15 for a 1-hour Filipino massage), and enough activity to occupy 2 hours.",
            "7:30pm — Dinner: try Lemoni Cafe (pasta and Filipino fusion, ₱350–500/person) or the Korean BBQ restaurants near D'Mall (₱500–700/person for unlimited BBQ). Alternatively, budget street food along the Balabag road: isaw (grilled chicken intestines, ₱20 each), balut (fertilised duck egg, ₱25), and kwek-kwek (quail eggs in orange batter, ₱15 each).",
          ],
          cost: "$60–85 total",
        },
        {
          day: "Day 3",
          title: "Bulabog Beach Watersports & Puka Shell Beach",
          items: [
            "9:00am — Walk 15 minutes inland from White Beach to Bulabog Beach on the island's opposite (east) side. Bulabog is the watersports beach: the Amihan wind blows directly onshore here, making it one of Asia's premier kitesurfing and windsurfing locations. Learn-to-kitesurf lessons: $80–120/person for a 3-hour IKO certified lesson (includes equipment). This wind window is specifically Nov–May (Amihan season).",
            "11:00am — Watch the advanced kiters launching and landing. The skill level among regulars at Bulabog is impressive — freestyle tricks, jumps, and wave riding. The beach itself is narrow and rocky compared to White Beach but the energy is completely different: athletic, focused, and exhilarating.",
            "1:00pm — Tricycle north (₱50–80) to Puka Shell Beach, Boracay's northern tip (approximately 20 minutes from D'Mall). Puka Shell is free, uncrowded, wider, and backed by palm trees rather than resort buildings. The sand is slightly coarser than White Beach but the beach is longer and feels more wild. Small food stalls sell fresh puka shell jewellery (the beach's namesake shells, ₱50–200), coconut juice (₱60), and light snacks.",
            "3:00pm — Diniwid Beach (a small cove immediately north of Station 1, accessible by a 5-minute walk along the beachfront rocks or the path above). This beach has only a handful of small guesthouses and a beach bar. At 3pm it is often nearly empty. The water is slightly deeper and calmer than the main White Beach.",
            "5:30pm — Paraw sailing sunset: book a paraw outrigger sailboat sunset trip (₱800–1,200/person, 1.5 hours, boats depart from Station 2 beach around 5pm). The paraw is the traditional Philippine outrigger boat — seeing Boracay from the water at sunset, with the White Beach resort lights beginning to glow behind you, is the definitive Boracay experience.",
            "8:00pm — Evening fire dancing shows on the White Beach (free to watch from the beach, some restaurants charge a small cover). Philippine fire dancers perform at several Station 2 beachfront bars — the skills involved, particularly poi and staff spinning, are genuinely impressive.",
          ],
          cost: "$65–90 total",
        },
        {
          day: "Day 4",
          title: "Sunrise, Willy's Rock & Departure",
          items: [
            "5:30am — Sunrise at White Beach: the eastern orientation of the beach's hinterland means you catch the first light on the palm trees behind the beach before the sun clears the ridge. The beach at 5:30am — no vendors, no music, just a few locals jogging on the sand and the bay totally calm before the Amihan kicks in — is the most beautiful version of Boracay.",
            "6:30am — Walk north to Willy's Rock: a small volcanic rock formation 50 metres offshore at the northern end of Station 1, accessible by wading at low tide. A small Catholic shrine sits on top of the rock, with a Virgin Mary statue overlooking the bay. The combination of the rock formation, the shrine, the white sand, and the morning light is one of Boracay's most photographed spots. At 6:30am, you often have it to yourself.",
            "8:00am — Jonah's Fruit Shake Bar (at Station 2 beachfront — a Boracay institution since the 1980s): the best fresh fruit shakes on the island. Mango, papaya, passion fruit, or a combination (₱100–150/large). Have breakfast here watching the beach vendors set up for the day.",
            "10:00am — Optional: ATV ride through the island's interior (₱800–1,500/person for 30–60 min tour through inland roads and farm tracks, departing from Station 1 or near D'Mall). Boracay is mostly flat and the ATV tracks give a different perspective on the island beyond the beach strip.",
            "12:00pm — Final lunch: Smoke Restaurant near D'Mall for grilled seafood and Filipino classics — kare-kare (oxtail peanut stew, ₱350–450), grilled squid (₱280), and halo-halo (Filipino shaved ice dessert with beans, jellies, and ube ice cream, ₱180).",
            "2:00pm — Pack up, checkout, and take the tricycle to Cagban jetty. Ferry back to Caticlan (15 min). Tricycle to airport (5 min). Check in for your flight. Boracay departures connect back to Manila or Cebu for international flights.",
          ],
          cost: "$45–65 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$150–250/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive, Station 1 & Paraw Sunset Sail",
          items: [
            "Fly Caticlan (MPH) and transfer to a mid-range hotel in the Station 1 area: Boracay Beach Resort ($80–150/night), Friday's Boracay ($120–200/night), or The Lind Boracay ($180–280/night). Station 1 has the calmest water, the most manicured beachfront, and access to the paraw launch areas. All of these properties have direct beach frontage.",
            "Afternoon — Spend the first afternoon acclimatising: a beachfront sun lounger with service (most mid-range hotels include free lounger use for guests), a swim in the calm Station 1 waters, and a first exploration of the resort strip walking north toward Willy's Rock.",
            "5:00pm — Paraw sunset sailing booked through your hotel concierge: a private paraw for 2 ($60–100 for 1.5-hour private sail) rather than a shared trip. Your crew includes the boat captain and a crew member, and you can direct the route — sailing further north or south as the sunset develops.",
            "7:30pm — Dinner at a proper mid-range restaurant: Aria Beach Club (Mediterranean-influenced, beachfront, ₱1,000–1,500/person), Aplaya (Filipino fine casual, Station 1 beach, ₱800–1,200/person), or Lemoni (Station 1 favourite for pasta and local fusion, ₱500–800/person). These restaurants represent Boracay's step up from the casual beach warung level.",
          ],
          cost: "$120–180 (day 1, incl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Ariel's Point, Island Hopping & Fire Dancing",
          items: [
            "10:30am — Ariel's Point private boat option: instead of joining the shared tour, your hotel can arrange a private boat to Ariel's Point ($200–300 for a private 6–8 person boat, departing at your schedule). You arrive before the main group, have the diving platforms quieter, and control your own pace.",
            "Cliff diving: the Ariel's Point platforms go from 3 metres (wading depth, barely a jump) to 15 metres (serious commitment, looking straight down at the water for 3 seconds of freefall). Local staff will guide you to appropriate levels. The 8-metre and 10-metre platforms are the sweet spot for most adults.",
            "2:00pm — Return to Boracay for a late lunch at your hotel or a restaurant of your choice.",
            "4:00pm — Private island hopping: book through your hotel for a private outrigger boat with snorkeling equipment and a packed mid-range lunch ($80–120 for 2, half-day). Hit Crystal Cove, Magic Island, and a private reef snorkeling stop not on the shared tour circuits.",
            "6:30pm — Pre-dinner drinks at a beachfront bar: Epic Bar (Station 2 north) or Guilly's Island (Station 2 beachfront) for cocktails at the best sunset-facing bar stools. Cocktails: ₱350–550.",
            "8:30pm — Fire dancing show at Summer Place or Cocomangas (Station 2): these beachfront bars host nightly fire dancing performances from professional Filipino fire artists. The shows run 9pm–10pm. Watch from a table with cocktails — no additional entry fee, but a drink minimum.",
          ],
          cost: "$130–200 total",
        },
        {
          day: "Day 3",
          title: "Kitesurfing Lesson + Puka Shell Beach Day",
          items: [
            "9:00am — Professional kitesurfing lesson at Bulabog Beach: book through a certified IKO (International Kiteboarding Organization) school such as Habagat Kite Center or Amihan Kiteboarding ($100–150 for a 3-hour beginner lesson with a certified instructor, includes all equipment rental). Kiteboarding on Boracay is world-class — the Amihan wind produces reliable, consistent conditions that are ideal for learning.",
            "12:00pm — Lunch at a Bulabog Beach restaurant: fresh tuna salad, grilled barracuda, or a club sandwich at one of the small beach restaurants behind the kite school ($10–18/person).",
            "2:00pm — Private van to Puka Shell Beach (₱500–800 for a van for the day, can combine with Diniwid): spend the afternoon at Puka in comfort with a beach setup — hire a few chairs and umbrellas from the small beach vendors, order fresh buko (coconut water), and swim in the uncrowded water.",
            "4:30pm — Diniwid Beach for the late afternoon: the small cove is best in the late afternoon when it catches the last light before the ridge blocks the sun.",
            "6:30pm — Sunset cocktails at Nigi Nigi Nu Noos (Station 1 classic bar, right on the beach, established in the 1980s) or at your hotel's beach bar.",
            "8:30pm — Dinner at Mang-Inasal or similar for classic Filipino BBQ (grilled chicken inasal, ₱200–300, unlimited rice refills) for a grounded local meal, or up-scale at The Boracay Beach Club's restaurant ($30–50/person for a full dinner with drinks).",
          ],
          cost: "$140–210 total",
        },
        {
          day: "Day 4",
          title: "Sunrise Walk, Spa Morning & Stylish Departure",
          items: [
            "5:30am — Station 1 sunrise walk to Willy's Rock: the most peaceful version of Boracay. The beach is empty, the sand still cool, the water glassy before the Amihan builds.",
            "7:30am — Hotel breakfast at your resort's restaurant, ideally on the beach terrace: eggs Benedict or a full Filipino breakfast (tocino, rice, egg, fresh fruit) with fresh mango juice.",
            "9:30am — Spa morning: most mid-range hotels have spa services. A 90-minute massage ($30–50), a body scrub with local ingredients (coconut, calamansi, lemongrass) or a couples' spa package. Deha Boracay Spa and Real Spa & Body Care at Station 1 are well-reviewed.",
            "12:00pm — Final beach walk: White Beach at midday on the last day always reveals things you missed. Buy a piece of authentic hand-painted paraw artwork from the beach vendors (₱200–500), some puka shell jewellery, or a bottle of Boracay island rum.",
            "1:30pm — Final lunch at your hotel or at a favourite restaurant. Garlic butter prawns (₱450–650), fresh mango and sticky rice dessert (₱150–200), and a farewell San Miguel.",
            "3:00pm — Checkout, tricycle to Cagban jetty, ferry, airport, onwards.",
          ],
          cost: "$100–150 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$380–700/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Shangri-La Boracay or Discovery Shores & Private Sunset Sail",
          items: [
            "Fly into Caticlan. Private resort transfer: Shangri-La Boracay (secluded northern tip, Station 1, private beach cove, rooms from $350–900/night) or Discovery Shores Boracay (boutique luxury, Station 1, rooms from $300–700/night). Both properties are widely recognised as among the best beach resorts in Southeast Asia.",
            "Shangri-La Boracay occupies its own secluded bay north of Station 1 and has a private beach entirely separated from White Beach. The resort's multiple pools, overwater restaurant, and private water sports centre make leaving the property optional.",
            "4:30pm — Private paraw charter arranged by your concierge: your own boat, crew, custom chilled drinks from the hotel bar, and fresh tropical fruit on board. The sunset from a paraw 500 metres offshore of White Beach, with the full 4km beach strip glowing in the last light, is extraordinary.",
            "7:30pm — Dinner at your resort's signature restaurant: Rima at Shangri-La serves contemporary Filipino cuisine with an exceptional wine list ($80–150/person for a full dinner with wine). Discovery Shores' Indigo restaurant is equally refined. Alternative: transfer by resort boat to a private dinner on the beach.",
          ],
          cost: "$450–750 (day 1, incl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Private Island Hopping & Ariel's Point Exclusive",
          items: [
            "8:00am — Private outrigger boat charter arranged by the resort ($150–300 for a full-day private boat with crew, guide, and catered picnic lunch). This gives you flexibility that no shared tour offers: stay 30 minutes at the reef if you find turtles, skip an island if the crowds have arrived, and choose your own anchoring spots.",
            "Crystal Cove: snorkeling with a private marine guide who knows the best coral heads and the turtle cleaning stations. Crystal Cove's inner cove is accessible only by private arrangement at low tide.",
            "Magic Island cliff jumping: with your private boat anchored beside the island and no queue for the platforms, this becomes far more enjoyable. Your crew will hold cameras and capture the jump from the boat.",
            "1:00pm — Private picnic lunch set up by your crew: fresh grilled fish, mango salad, chilled coconut water, and a bottle of white wine on a quiet beach. This is what private boat charters in the Philippines are for.",
            "3:00pm — Ariel's Point visit by your own boat (resort can arrange, $50–80 entry): arrive after the shared tours have their peak activity and enjoy the platforms at a relaxed pace.",
            "6:00pm — Return to resort. Evening: Guilly's Island bar for sunset cocktails if you want to be on White Beach, or the resort's own sunset cocktail hour at the cliff bar.",
          ],
          cost: "$300–500 (excl. accommodation)",
        },
        {
          day: "Day 3",
          title: "Kitesurfing Private Lessons & Pampering Day",
          items: [
            "9:00am — Private kitesurfing lesson: arrange a certified IKO instructor for a 1-on-1 lesson ($150–200 for 3 hours private, vs. group lessons). The learning curve with private instruction is dramatically faster — most people who struggle for two days in a group lesson make their first body drag and water start within 3 hours one-on-one.",
            "12:30pm — Lunch at a quality Bulabog Beach restaurant or return to the resort by tricycle for a beach club lunch experience.",
            "2:00pm — Full spa afternoon at your resort: Shangri-La's Chi Spa or Discovery Shores' spa centre. Book a signature 2-hour treatment ($100–180): the CHI Balance Ritual (combining hot stone, aromatherapy, and traditional Filipino hilot massage technique) is among the best spa experiences available in the Philippines.",
            "5:30pm — Sunset from your resort's private beach or cliff terrace. Order a Boracay-style fresh mango shake infused with local rum while watching the paraw boats return to harbour.",
            "8:00pm — Fine dining: pre-book at Boracay's best standalone restaurant — Spider House Resort's clifftop dinner (Station 3 area, ₱2,000–4,000/person, spectacular sea views from a cliff-edge platform), or a private dinner on the beach arranged by your concierge ($200–400 for a private table with candlelight, a 5-course menu, and a sommelier).",
          ],
          cost: "$350–550 (excl. accommodation)",
        },
        {
          day: "Day 4",
          title: "Sunrise Photography, Yacht Charter & Departure",
          items: [
            "5:30am — Pre-arranged sunrise photography walk with a local professional photographer ($80–150 for a 2-hour golden hour session on White Beach): Willy's Rock, the paraw boats coming in from overnight, the palm reflections in the wet sand at low tide. The photographs from Boracay at golden hour in the hands of someone who knows the spots are extraordinary.",
            "8:00am — Resort breakfast: a full buffet or an a la carte order from the resort's beach restaurant. Boracay's top resorts take breakfast seriously — fresh-baked bread, Filipino and international options, fresh tropical fruits, and very good coffee.",
            "10:00am — Optional: private yacht charter for a final 2-hour morning sail ($300–500 for a private sailing yacht, fully crewed). Different from a paraw — a proper keeled sailing vessel with comfortable seating, a bar, and a sound system. Sail the bay's northern section where Shangri-La's private cove is visible from the water.",
            "1:00pm — Last lunch at the resort or at a beach restaurant of your choice. Check out and have the resort arrange a private vehicle and ferry transfer to Caticlan airport. Departure.",
            "Note: Discovery Shores and Shangri-La both offer helicopter transfers to/from the resort if you're flying private or want to bypass the ferry entirely ($300–600 for the helicopter transfer to Cebu or Manila) — arrange well in advance.",
          ],
          cost: "$300–500 (excl. accommodation)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$20–40",
      food: "$15–25",
      transport: "$5–10",
      activities: "$20–35",
      total: "$60–110/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–180",
      food: "$30–60",
      transport: "$15–30",
      activities: "$40–80",
      total: "$165–350/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–900",
      food: "$80–200",
      transport: "$30–100",
      activities: "$100–300",
      total: "$510–1,500/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Visiting During Habagat (June–October)",
      desc: "Boracay's weather divides sharply between two monsoon seasons. The Amihan (northeast monsoon, November–May) brings dry, clear weather and the consistent side-shore winds that make White Beach so perfect. The Habagat (southwest monsoon, June–October) brings heavy rain, grey skies, rough water on White Beach, and often makes swimming and boat trips unsafe. The kite and windsurfing crowd actually prefers Bulabog Beach during Habagat, but for a classic White Beach experience, the Habagat season is genuinely disappointing. Visit November to May.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏖️",
      title: "Only Staying on White Beach and Never Exploring the Rest",
      desc: "White Beach is extraordinary but Boracay is more than one beach. Puka Shell Beach (north, free, uncrowded) has a completely different atmosphere. Bulabog Beach (east side) is the watersports hub. Diniwid (north of Station 1) is intimate and local. The island's interior roads — best explored by ATV or motorbike — pass through palm groves and farming communities. Most tourists spend 4 days on White Beach and leave not knowing that most of the island exists.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚢",
      title: "Not Confirming Your Return Flight Seat is Fixed",
      desc: "Caticlan (MPH) airport is tiny — 4 gates, no jetways — and flights sell out during peak season (Christmas, Holy Week/Easter, and long weekends in the Philippines). Book your outbound flight from Caticlan the moment you book your inbound. Do not rely on getting a seat when you decide to leave. Flights to Manila take 1 hour; Cebu connections are also available. If the airport is fully booked, the alternative is a 12-hour bus ride to Manila via the ferry — which happens to first-time visitors more than you'd think.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💸",
      title: "Not Negotiating Tricycle Fares",
      desc: "Tricycle drivers (the three-wheeled taxis that serve Boracay's interior roads) will quote 2–3x the going rate to obvious tourists. The standard fare for a short trip (Station 1 to D'Mall, or D'Mall to Cagban pier) is ₱30–50 per person on a shared tricycle, or ₱100–150 to charter the whole vehicle. Always confirm the price before getting in. Grab operates on Boracay — use the app to get a fixed price and avoid negotiation entirely. Tricycle fares are non-negotiable through the Grab app and eliminate overcharging.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌊",
      title: "Swimming at Station 2 or 3 on Windy Days Without Checking the Flags",
      desc: "White Beach's water is generally calm because it faces west — but on days when the Amihan is particularly strong, or during the transition between monsoons, the surf at stations 2 and 3 can produce dangerous rip currents. The beach safety flag system (green = safe, yellow = caution, red = no swimming) is enforced by the local coastguard. Red flags at Boracay are serious — visitors have drowned ignoring them. Station 1 is generally calmer than Station 3 on rough days due to its orientation. Always check the flags before entering the water.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "White Beach at 5:30am is a Different World",
      desc: "At 5:30am, White Beach has perhaps 30 people on it — joggers, resort staff setting up loungers, a few fishermen dragging their boats up the sand. The sand is still cool, the water is glassy before the Amihan builds, and the light on the palm trees at golden hour is extraordinary. The contrast with the same beach at 11am — 10,000 people, vendors, jet skis, music — is so extreme it feels like a different place. Set an alarm for at least one sunrise during your stay.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⛵",
      title: "Book Your Paraw Sunset Sail Before 3pm",
      desc: "Paraw outrigger sunset sailings depart from the beach between 5pm and 5:30pm — and they sell out. The best boats (larger, more stable, with cushioned seating) are booked by 3pm on peak season days. Walk to the Station 2 beachfront between 1pm and 2pm and book directly with a paraw operator. Cost is typically ₱800–1,200/person for 1.5 hours. Private charters for 2 cost ₱3,000–5,000. The paraw silhouette against the Boracay sunset is the defining image of this island — do not miss it.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🤿",
      title: "Station 1 Has the Calmest Water for Swimming",
      desc: "All three stations of White Beach have the same white sand, but the water conditions differ. Station 1 (north) is the calmest, shallowest, and most suitable for swimming — gentle waves, no rips, and water that stays clear even on windy days. Station 3 (south) gets more swell and stronger current. Families with children, non-swimmers, and people who want to wade in calm water should stay in the Station 1 area. Station 3 is better for people who want livelier nightlife and cheaper beer.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🪁",
      title: "Learn to Kitesurf Here — Amihan Wind is the Best in Asia",
      desc: "Boracay's Bulabog Beach in Amihan season (November to May) is ranked among the world's best learning venues for kitesurfing by IKO instructors and the global kiting community. The consistent 15–20 knot side-shore wind, the flat lagoon, the shallow water, and the high density of IKO-certified schools make it ideal. First-time kite lessons in Boracay typically produce body-dragging competence within day 1 and water-starting attempts by day 2. A 9-12 hour course split over 3 days costs $200–350 at a proper school.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "How do you get to Boracay?",
      a: "Fly to Caticlan airport (MPH) — it has flights from Manila (1 hour, multiple daily on Cebu Pacific, Philippine Airlines, and AirAsia) and from Cebu (45 min). From Caticlan airport, a tricycle takes you to the Caticlan jetty in 5 minutes (₱30–50). Pay the ₱150 Environmental Fee and the ₱100 terminal fee at the jetty, then board the public ferry to Boracay's Cagban pier (15 minutes, ₱30). A tricycle from Cagban pier to most hotels is ₱50–100. Total time from Caticlan airport to your hotel: 35–50 minutes. Alternative route: fly to Kalibo (KLO), 2 hours' drive from Caticlan by shuttle bus (₱250), then the same ferry. Kalibo has more budget flights but the extra travel time is significant.",
    },
    {
      q: "Is Boracay crowded? Was the 2018 closure worth it?",
      a: "Boracay is the Philippines' most visited island and yes, peak season (December–January, Holy Week/Easter) is extremely crowded. The 2018 6-month closure ordered by President Duterte to address severe environmental degradation — illegal sewage discharge into the ocean, unlicensed construction on the beachfront, and 4 million annual visitors producing more waste than the island's infrastructure could handle — was genuinely effective. The beach came back cleaner, the water is clearer, wastewater treatment was upgraded, and illegal beachfront structures were removed. The island today is measurably better than pre-closure, though still busy in peak season. November and May (shoulder months) offer the best weather with reduced crowds.",
    },
    {
      q: "Is Ariel's Point worth the price?",
      a: "Yes, if you want a full social day with cliff diving, kayaking, and unlimited food and drinks, Ariel's Point at ₱2,500–3,000/person is good value — the all-inclusive price covers boat, all activities, a full lunch, and unlimited San Miguel beer. The crowd is international and lively. The cliff diving platforms are genuinely impressive. However, if you're looking for a quiet, nature-focused experience, it is not that. It is a party-adjacent social activity on a scenic private island. Most people who do it enjoy it; most people who don't like crowds don't.",
    },
    {
      q: "What is the best area to stay in Boracay?",
      a: "Station 1 (north): calmest water, most upscale resorts, quieter beach — best for families, couples, and those wanting calm swimming. Mid-range to luxury. Station 2 (middle, D'Mall area): most convenient for restaurants, shopping, and boat trips — the hub of everything. All budgets. Station 3 (south): cheapest accommodation and food, best for nightlife and budget travellers, livelier party atmosphere. The beach is the same quality at all three stations. Choose based on your budget and how much nightlife versus peace you want.",
    },
  ],
  combineWith: ["palawan-4-days", "cebu-3-days", "el-nido-4-days"],
  relatedSlugs: ["palawan-4-days", "bali-5-days", "phuket-5-days", "maldives-5-days"],
  galleryQuery: "boracay white beach philippines sunset paraw sailboat windsurfing station 1",
};

export const metadata: Metadata = {
  title: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026 Guide)",
  description:
    "Complete Boracay 4-day itinerary: White Beach sunrise, paraw sunset sails, island hopping to Crystal Cove, Ariel's Point cliff diving, and kitesurfing on Bulabog Beach. Budget to Shangri-La luxury.",
  keywords: [
    "boracay itinerary 4 days",
    "boracay travel guide 2026",
    "white beach boracay",
    "boracay island hopping",
    "boracay kitesurfing windsurfing",
    "paraw sunset boracay",
    "ariel's point boracay",
    "puka shell beach boracay",
    "boracay best resorts",
    "philippines beach guide",
  ],
  openGraph: {
    title: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026)",
    description:
      "Asia's most photographed beach, paraw silhouettes at sunset, cliff diving at Ariel's Point, world-class kitesurfing, and staying from budget homestay to Shangri-La — the complete Boracay guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Boracay White Beach Philippines crystal clear water sunset paraw",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boracay in 4 Days — Philippines' Crown Jewel (2026)",
    description: "White Beach, paraw sunsets, cliff diving, kitesurfing, Puka Shell Beach. The complete guide, budget to luxury.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/boracay-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
      description:
        "A complete 4-day Boracay itinerary covering White Beach at all three stations, paraw sailing, island hopping to Crystal Cove and Magic Island, Ariel's Point cliff diving, Bulabog Beach kitesurfing, Puka Shell Beach, Diniwid Beach, and Willy's Rock.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boracay 4 Days",
          item: "https://www.incredibleitinerary.com/blog/boracay-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Boracay, Philippines",
      description:
        "A 10km island in the Western Visayas, Philippines, home to White Beach — 4km of powdery white sand rated among the world's best — paraw outrigger sailing, world-class kitesurfing and windsurfing at Bulabog Beach, and vibrant beach resort culture rehabilitated after a landmark 2018 environmental closure.",
      touristType: ["Beach lovers", "Watersports enthusiasts", "Couples", "Adventure travellers", "Luxury resort guests"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.9674,
        longitude: 121.9248,
      },
    },
  ],
};

export default function BoracayPage() {
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
