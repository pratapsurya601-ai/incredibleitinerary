import type { Metadata } from "next";
import HawaiiClient from "./HawaiiClient";

// Data previously used by UniversalBlogClient — retained for reference only
const _unused = {
  destination: "Hawaii",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "hawaii-7-days",
  heroQuery: "hawaii waimea canyon kauai na pali coast usa tropical",
  heroAlt: "Hawaii Na Pali Coast dramatic cliffs and turquoise Pacific Ocean Kauai USA",
  category: "USA & Pacific",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Seven days in Hawaii feels impossibly short once you're standing on the rim of Haleakala at sunrise, watching the clouds roll beneath you at 10,000 feet, or snorkeling alongside green sea turtles in water so clear it looks like glass. The state's 8 islands each contain multitudes — volcanic moonscapes, jungle valleys with 400-inch annual rainfall, coral reefs older than recorded history, and beaches in four different colors. This guide covers the two most popular 7-day routes: Oahu and Maui (most popular combination) or Oahu and the Big Island (for those who want active lava and stargazing from the world's clearest summit).",
  stats: {
    duration: "7 Days",
    budgetFrom: "$120",
    bestMonths: "Apr–Jun, Sep–Nov",
    airport: "HNL (Honolulu, Oahu) or OGG (Maui)",
  },
  toc: [
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["B-2 Tourist Visa", "Hawaii is the 50th US state — the same B-2 tourist visa required for mainland USA applies. Apply at the US consulate in your city (Mumbai, Delhi, Chennai, Kolkata, Hyderabad). Fee: $185 non-refundable. Processing: 2–8 weeks. Biometric appointment required."],
        ["DS-160 Form", "Complete the DS-160 online at ceac.state.gov before booking your consulate appointment. You'll need your travel itinerary, hotel bookings, bank statements (typically 3 months), employment letter, and proof of ties to India (property, family, ongoing employment)."],
        ["ESTA Not Applicable", "ESTA (Electronic System for Travel Authorization) is only for Visa Waiver Program countries. Indian passport holders do not qualify for ESTA and must obtain a full B-2 visa regardless of their destination within the USA."],
        ["Hawaii Flights", "No direct India–Hawaii flights exist. Common routes: Delhi/Mumbai → Los Angeles/San Francisco → Honolulu. Total travel time: 22–28 hours. Air India, United, and Hawaiian Airlines serve the transpacific leg. Book 3–4 months out for best fares ($900–1,400 round trip from India)."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ESTA for VWP Countries", "USA, UK, Canada, Australia, New Zealand, most EU, and 40+ other countries qualify for ESTA (Electronic System for Travel Authorization). Cost: $21, valid 2 years. Apply at esta.cbp.dhs.gov at least 72 hours before departure — most approvals are instant."],
        ["No Separate Hawaii Permit", "Hawaii requires no separate state-level entry permit. An approved ESTA or US visa covers your entire stay, including inter-island travel. No customs or immigration when flying between Hawaiian islands."],
        ["UK & Post-Brexit", "UK passport holders retain access to the US Visa Waiver Program and use ESTA. Ensure passport validity extends at least 6 months beyond your planned return date, though CBP technically accepts 6-month validity."],
        ["Flights from Mainland", "From US mainland: direct flights to Honolulu (HNL) from Los Angeles (5.5h), San Francisco (5.5h), Seattle (6h), New York (10h). Fares: $300–600 round trip from the West Coast, $400–700 from the East Coast. Hawaiian Airlines, United, Delta, and Southwest all serve Hawaii."],
      ],
    },
  ],
  plans: [
    /* ── BUDGET ──────────────────────────────────────────────────────── */
    {
      label: "Budget",
      sub: "$120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Waikiki Arrival + Diamond Head Crater",
          items: [
            "Arrive at Honolulu International Airport (HNL). TheBus route 20 connects the airport to Waikiki for $3 — takes 40 minutes. Budget travelers skip the $45 taxi entirely.",
            "Check into Polynesian Hostel Beach Club Waikiki ($45–80/night dorm or private room). It sits 3 blocks from the beach and has a communal kitchen — essential for Hawaii budget travel, where groceries run 35–50% more than mainland USA.",
            "5:30am next morning (or late afternoon Day 1 if arriving early): Diamond Head Crater hike. $5 entry per person, free with Hawaii State Parks pass. The 1.6-mile round-trip hike takes 1–1.5 hours and delivers a panoramic 360° view over Oahu. Start before 7am to avoid heat and crowds.",
            "Post-hike: walk the length of Waikiki Beach. It stretches 2 miles from Diamond Head to the Ala Wai canal. Rent a surfboard for your first lesson — this is where surfing was popularized in the modern era (Duke Kahanamoku's beach). Group lessons $50–70.",
            "Lunch: Leonard's Bakery is a 15-minute drive from Waikiki and worth every minute. Malasadas — Portuguese doughnuts, hot, sugar-coated, filled with custard or haupia — are $1.50 each. The queue moves fast. Buy six.",
            "Dinner: Plate lunch from a local spot. The Hawaiian plate lunch is the island's staple working meal: two scoops of white rice, a scoop of mac salad (mayo-heavy, exactly right), and a protein (kalua pork, teriyaki chicken, loco moco). $10–14 from Ono Hawaiian Foods or Rainbow Drive-In.",
            "Evening: walk Kalakaua Avenue (Waikiki's main strip) — free entertainment from street performers, and the ocean at night is warm and bioluminescent if conditions are right.",
          ],
          cost: "$50–75 (transport, entry, food, surfboard rental)",
        },
        {
          day: "Day 2",
          title: "North Shore — Haleiwa, Waimea Bay & Shark's Cove",
          items: [
            "Rent a car ($60–90/day from economy rental companies — essential on every Hawaiian island). Drive H-2 North to the North Shore, about 45 minutes from Waikiki.",
            "Haleiwa town: the historic surfing village with painted wooden storefronts. Matsumoto's Shave Ice ($3–5) — this is shave ice, not a snow cone. The ice is hand-shaved to a fine powder consistency that absorbs the syrup. Order it with azuki beans and condensed milk on top. Queue 20 minutes — absolutely worth it.",
            "Giovanni's Shrimp Truck (white truck at Kahuku or Haleiwa lot): the most famous plate in Hawaii. Garlic butter scampi shrimp, two scoops rice, $15. Cash only. The truck has been parked in the same spots for 30+ years and the garlic is so intense you'll taste it for hours — intentionally.",
            "Waimea Bay Beach Park: in winter (October–April) the bay produces waves up to 30 feet — home to the famous Eddie Aikau invitational surf contest (only held when waves exceed 40 feet; it's happened fewer than 10 times in 40 years). In summer (May–September) the bay flattens completely and is the best calm-water swimming on the North Shore. Entry: free.",
            "Shark's Cove (Pupukea Beach Park): 10 minutes from Waimea Bay. Summer snorkeling in a natural lava rock pool teeming with reef fish, sea turtles, and occasionally Hawaiian monk seals (endangered, do not approach). Entry: free. Bring your own snorkel gear or rent at Waimea Bay ($15).",
            "Return to Waikiki via the Pali Highway through the Ko'olau Mountains — stop at the Nu'uanu Pali Lookout (free) for a dramatic view of the windward coast with trade winds so strong they once blew a VW Beetle off the cliff.",
            "Dinner: Spam musubi ($3) from ABC Store (every 100 meters in Waikiki) — this is Hawaii's signature snack. Rice and Spam on a nori wrap. If you haven't tried it, you cannot claim to have eaten in Hawaii.",
          ],
          cost: "$80–110 (car rental share, food, gear rental)",
        },
        {
          day: "Day 3",
          title: "Pearl Harbor + Punchbowl + Honolulu Museum",
          items: [
            "7:30am: Pearl Harbor National Memorial. The site is free to enter, but the USS Arizona Memorial boat tour (the centerpiece — the sunken battleship still leaking fuel oil 80+ years later) requires a timed ticket that costs $1 to reserve online at recreation.gov. Book this WEEKS in advance — it sells out completely. The boat holds 150 people per departure and there are only a few per hour.",
            "The free exhibits at Pearl Harbor include the Road to War museum, the Attack map, and the Remembrance Circle — budget 3–4 hours total. The USS Missouri battleship (where Japan surrendered in 1945) and USS Bowfin submarine museum are $30–35 each and optional.",
            "Noon: Punchbowl National Cemetery (National Memorial Cemetery of the Pacific) — set inside an extinct volcanic crater in central Honolulu. Free entry. The view across Honolulu from the cemetery's highest point is unexpected and moving. Ernie Pyle, the great WWII correspondent, is buried here.",
            "2:00pm: Honolulu Museum of Art ($20 entry) — one of the finest collections in the Pacific. Highlights include Hiroshige woodblock prints (the largest Japanese woodblock collection outside Japan), Gauguin Tahitian paintings, and an exceptional collection of Korean celadon. The courtyard café serves excellent cold brew.",
            "4:30pm: Chinatown Honolulu walking tour (self-guided, free). This is one of the oldest and most interesting Chinatowns in the USA — lei shops (fresh flowers strung by hand, $8–15 per lei), Vietnamese pho restaurants ($9–12), dim sum houses, and the Oahu Market (oldest market in Honolulu). An excellent poi bar if you want to try Hawaiian poi (fermented taro paste — an acquired taste, distinctly earthy).",
            "Dinner: Little Village Noodle House (Chinatown) for Hong Kong-style dim sum and noodles at $10–15/person — one of the best-value restaurants in Honolulu and always packed with locals.",
          ],
          cost: "$55–80 (museum, food, light transport)",
        },
        {
          day: "Day 4",
          title: "Hanauma Bay + Makapu'u + Lanikai Beach",
          items: [
            "6:45am: Arrive at Hanauma Bay Nature Preserve. Entry is $25 per person with timed tickets that must be booked online at honolulu.gov/parks exactly 2 days in advance at 7am HST — the tickets sell out in minutes. The bay closes Tuesday for reef recovery. Arrive by 7am opening; the parking lot fills by 8am.",
            "Hanauma Bay is the best snorkeling on Oahu — a collapsed volcanic crater that flooded and became a near-perfect reef bowl. Green sea turtles (honu) are almost guaranteed. Convict tang, Moorish idols, parrotfish, and triggerfish are abundant. Before entering the water, you must watch a mandatory 9-minute reef education video.",
            "11:00am: Makapu'u Lighthouse Trail (free). A paved 2-mile round-trip coastal walk to a 120-year-old red lighthouse perched on a dramatic sea cliff. From December to May, humpback whales are visible from the trail — bring binoculars. The views of the Molokai channel are spectacular.",
            "1:00pm: Lanikai Beach (north of Kailua). Consistently rated one of the most beautiful beaches on earth. White powder sand, calm turquoise water (swimming is safe year-round in this bay), and two small offshore islands (the Mokulua islands) that kayakers paddle to. Street parking on Mokulua Drive — free. The beach itself has no facilities, which keeps it quiet.",
            "Kailua Beach Park (adjacent to Lanikai) has facilities, restrooms, and a popular kite-surfing scene. The town of Kailua has excellent lunch options: Kalapawai Market for gourmet sandwiches ($12–16) or Cinnamon's Restaurant for local-style breakfast-lunch ($14–20).",
            "3:00pm: Ko'olau Ballrooms lookout (30 minutes from Kailua) — the dramatic windward cliffs that form the spine of Oahu, often shrouded in mist. No entry fee. The Pali Highway tunnels through this ridge.",
            "Evening: pack for the inter-island flight. Hawaiian Airlines or Southwest flights to Maui (OGG) or Kona/Hilo (Big Island) depart Honolulu frequently. Book 4–6 weeks ahead for $50–90 fares; last-minute fares spike to $200+. Flight: 25–35 minutes.",
          ],
          cost: "$65–95 (entry fees, food, inter-island flight share)",
        },
        /* ─ MAUI DAYS (Budget Plan A) ─ */
        {
          day: "Day 5",
          title: "Road to Hana — Full Day",
          items: [
            "Start by 6:30am from your Maui base (Kihei or Kahului is cheapest). Pick up supplies at Safeway or Whole Foods Kahului — the Road to Hana has almost no grocery stores and the few food stands are cash-only and irregular.",
            "The Road to Hana is a 64-mile highway with 617 curves and 59 one-lane bridges along Maui's dramatic northeastern coastline. Budget a full day minimum (3 hours each way, but most people take 5–7 hours going). The return is the same road in reverse — some people loop around the southern tip (rough, unpaved road — check rental car policy).",
            "Key stops (mile markers in parentheses): Twin Falls (mm 2, free, easy 15-min walk to a swimming hole), Garden of Eden Arboretum (mm 10, $20 entry, beautiful but optional), Wailua Falls (mm 45, roadside viewpoint, free — this 80-foot falls is one of the most photographed in Hawaii), Pua'a Ka'a State Park (mm 22, free swimming hole and waterfall).",
            "Bamboo Forest / Pipiwai Trail (Kipahulu area, mm 42, $35 entry as part of Haleakala National Park — keep your receipt for the summit visit tomorrow). The 4-mile round-trip Pipiwai Trail passes through a towering bamboo forest so dense it blocks sunlight, then emerges at 400-foot Waimoku Falls. One of the finest hikes in Hawaii.",
            "Wai'anapanapa State Park (mm 32): Hawaii's famous black sand beach, formed from volcanic basite. $10 entry, timed reservations required at hawaii.gov/dlnr. The black sand contrasts with turquoise water in a way that photographs cannot fully capture.",
            "Hana town itself is small — the Hotel Hana-Maui has a lovely property but is expensive. Hasegawa General Store for snacks. Hana Ranch Restaurant for a plate lunch ($15–18).",
            "Return to your accommodation by 8–9pm. The drive back in darkness is disorienting — headlights illuminate only the next curve. Drive slowly.",
          ],
          cost: "$60–90 (park entries, food, gas for the day)",
        },
        {
          day: "Day 6",
          title: "Haleakala Sunrise + Wailea Beach",
          items: [
            "2:30am: Wake up. This is not optional for the sunrise. The Haleakala summit is 3,055 meters (10,023 feet). Sunrise occurs at the summit approximately 30–40 minutes before Kihei/Kahului sunrise. You need to be at the summit before astronomical twilight begins.",
            "CRITICAL: Haleakala National Park sunrise reservations ($1 per car) must be booked months in advance at recreation.gov. The reservation window opens 60 days out at midnight Hawaii Standard Time (HST) and sells out in minutes — set an alarm for 60 days before your visit. The $35 park entry fee applies in addition to the reservation.",
            "3:30am: Begin the 1.5-hour drive up Haleakala Highway. The temperature at the summit is typically 10–15°C (50–60°F) even when Maui's beaches are 85°F. Bring winter layers — a jacket, gloves, and a warm hat are not excessive. Wind chill regularly drops the effective temperature below freezing.",
            "5:45am (time varies by season, check sunrise time for your date): Sunrise from the Haleakala summit. Below you is a sea of clouds in the crater, and above it a sky that turns from deep violet through orange-red. Mark Twain described this view as 'the sublimest spectacle I have ever witnessed.' He was right.",
            "After sunrise, hike the Sliding Sands (Keoneheehe) Trail into the lunar crater interior for 1–2 miles — the alien landscape of volcanic cinder cones in red, black, and orange. The native silversword plant (ahinahina) grows only on Haleakala at this altitude and has a lifecycle of up to 90 years culminating in one flowering and death.",
            "Return to sea level by noon. The drive down takes 1.5 hours — your ears will pop. Breakfast/lunch in Makawao town (the upcountry cowboy town at 1,500 feet): Komoda Store & Bakery for cream puffs and malasadas (arrive before 9am — they sell out).",
            "Afternoon: Wailea Beach (south Maui). This is the resort beach — flat-calm, excellent snorkeling at both ends of the bay, and the beautiful resort hotels visible from the water. Public beach access is guaranteed in Hawaii even in front of luxury hotels. Whale watching from the beach December–April (humpbacks breach just offshore — you can watch for free from the sand).",
            "Evening: Kihei has excellent cheap food. Wow Wow Hawaiian Lemonade for açaí bowls ($10), Eskimo Candy for fresh fish ($14–18), or self-cook at your accommodation with supermarket fish (Maui has excellent ahi tuna at market price, $10–15/lb).",
          ],
          cost: "$50–80 (park entry already paid, food, nominal transport)",
        },
        {
          day: "Day 7",
          title: "Molokini Crater Snorkeling + Old Lahaina",
          items: [
            "6:30am: Molokini Crater boat snorkel tour. This crescent-shaped submerged volcanic crater sits 2.5 miles offshore from Maui and is one of the world's top snorkel sites — visibility to 150 feet in optimal conditions, 250+ fish species, and the back wall drops 300 feet. Budget tour operators: Pride of Maui ($80–95) or Pacific Whale Foundation ($85–100). Tours depart from Ma'alaea Harbor at 7am; book the day before.",
            "The tour includes equipment, a light breakfast, and a snorkel briefing. Spinner dolphins frequently join the boat on the crossing. The crater's inner bowl has very mild current (ideal for beginners); the outer back wall is for experienced snorkelers and divers.",
            "Return to harbor by 1:00pm. Lunch at Ma'alaea Grill or drive to Lahaina.",
            "Old Lahaina: historically Hawaii's most important port town and the capital of the Hawaiian Kingdom. The historic banyan tree (planted 1873, now covering almost an acre with aerial root systems — the largest banyan tree in the USA) anchors Lahaina's waterfront. Walking is free.",
            "Tragic note: the August 2023 Lahaina wildfire destroyed most of the historic town's structures, including Front Street's iconic wooden buildings. As of 2026, the town is in active recovery. The banyan tree survived, partially damaged, and is a powerful symbol of resilience. Check current restoration status before your visit — parts of Lahaina may be restricted.",
            "Ka'anapali Beach (3 miles north of Lahaina) is Maui's most famous resort beach: 3 miles of white sand, Black Rock (Pu'u Keka'a) at the north end where cliff jumping is traditional and the snorkeling is exceptional, and calm protected water excellent for swimming. Public beach access via hotel paths.",
            "Sunset from the beach: Hawaiian sunsets over the Pacific (west-facing Ka'anapali) are reliably spectacular. The green flash phenomenon occasionally occurs just as the sun dips below the horizon — watch for it.",
            "Last dinner: Blue Ocean Grill (Ka'anapali) for fresh mahi-mahi and poke bowls at $18–25, or self-cater from Lahaina Safeway for a final beach picnic.",
          ],
          cost: "$90–120 (boat tour dominant cost, food, parking)",
        },
      ],
    },

    /* ── MID-RANGE ───────────────────────────────────────────────────── */
    {
      label: "Mid-Range",
      sub: "$300–550/day",
      days: [
        {
          day: "Day 1",
          title: "Waikiki Arrival + Diamond Head at Sunrise",
          items: [
            "Arrive HNL. Private shuttle or Lyft to Waikiki ($25–35). Check into Aqua Aloha Surf Waikiki ($120–200/night) or Courtyard Marriott Waikiki Beach ($170–250/night) — both have rooftop pools within steps of the beach.",
            "5:00am next morning: Diamond Head crater ($5 entry) before sunrise. The paved switchback trail is lit by headtorch; the summit at dawn with nobody else up there — just you, the crater, and the first light over the Pacific — is one of Oahu's best experiences. Return by 8am before tour groups arrive.",
            "Breakfast: Eggs 'n Things (Waikiki institution, open early) for macadamia nut pancakes and guava jam, $18–24. The queue starts early on weekends.",
            "Afternoon: book a private surfing lesson ($100–150/hour) on Waikiki Beach with a certified instructor from Hans Hedemman Surf School — this is where the sport was formalized in the early 20th century. The gentle, long waves make it genuinely achievable for beginners.",
            "Afternoon: walk to Kapiolani Park and the Honolulu Zoo. The park hosts weekly farmer's markets and free ukulele concerts. Duke Kahanamoku's bronze statue on the beach is the traditional Hawaii arrival photo.",
            "Dinner: Nobu Waikiki ($50–90/person) for modern Japanese-Hawaiian fusion — the black cod miso and hamachi jalapeño are worth the price. Or Uncle Bo's in Nuuanu for creative fusion plates at $25–40.",
            "Evening: cocktails at the House Without a Key (Halekulani Hotel) — an open-air bar on the beach with a Hawaiian steel guitar duo and hula dancing. Cocktails $18–25. No cover.",
          ],
          cost: "$180–280 (hotel, food, surf lesson, cocktails)",
        },
        {
          day: "Day 2",
          title: "North Shore Food + Culture Day",
          items: [
            "Rent a car ($70–100/day). Drive to the North Shore via Haleiwa.",
            "Haleiwa: breakfast at Café Haleiwa ($12–18) for açaí bowls and North Shore coffee. Then Matsumoto's Shave Ice with premium toppings (fresh fruit, mochi, ice cream base, $6–9).",
            "Giovanni's Shrimp Truck: the signature garlic scampi plate ($15 cash). Visit both Giovanni's and Romy's Kahuku Shrimp (the latter serves farm-raised shrimp from the adjacent pond) for a proper North Shore shrimp tasting.",
            "Waimea Valley ($20 entry): a 1,875-acre nature park up the valley from Waimea Bay. Cultural demonstrations, botanical gardens with rare Hawaiian plants, and a trail to a 45-foot waterfall with swimming permitted (life jackets provided). More organized and family-friendly than the beach.",
            "Waimea Bay (free): in summer, excellent swimming in the calm deep bay. Winter wave-watching if the swell is running.",
            "Pipeline (Banzai Pipeline / Ehukai Beach Park, free): even in summer, the famous reef break is visible from the beach. Surfers still ride it year-round; the winter form is just bigger. The underwater reef that creates Pipeline's hollow tubes is just 2–3 feet below the surface at low tide.",
            "Drive back via Kualoa Ranch (windward Oahu) — this cinematic valley has appeared in Jurassic Park, Lost, and dozens of Hollywood productions. Ranch tours $25–50 (1 hour) or $130+ for UTV and horseback combos.",
            "Dinner back in Honolulu at Town (Kaimuki neighborhood) for farm-to-table Hawaiian cuisine, $30–45/person.",
          ],
          cost: "$160–240 (car, entries, food)",
        },
        {
          day: "Day 3",
          title: "Pearl Harbor Deep Dive + Honolulu Art",
          items: [
            "7:30am: Pearl Harbor. Pre-book both the free USS Arizona Memorial boat tour (recreation.gov, $1 reservation, sells out weeks ahead) and the USS Missouri battleship ($35). The Missouri tour takes 90 minutes — the surrender deck where Japan formally ended WWII on September 2, 1945 is marked with brass plaques.",
            "The Pearl Harbor Visitor Center exhibits (free with park entry) are genuinely excellent — oral histories, recovered artifacts including a Japanese midget submarine, and the attack timeline presented without jingoism.",
            "USS Bowfin Submarine Museum ($30): crawl through a WWII Pacific submarine that sank 44 enemy ships. Claustrophobic but fascinating — the crew quarters and torpedo rooms reveal how 80 men lived underwater for months.",
            "Lunch at Nico's at Pier 38 (Honolulu harbor): fresh fish market restaurant serving the day's catch. Ahi poke bowls ($16–20), fresh fish plate lunches ($14–18). Local fishermen sell their catch at the adjacent dock.",
            "Honolulu Museum of Art ($20): the Doris Duke Theatre shows world cinema, and the permanent collection includes one of the finest Asian art collections in the western hemisphere — Chinese bronzes, Japanese screens, Korean celadon, and Tibetan thangkas. The main courtyard's fountain garden is exceptional.",
            "Afternoon: Nu'uanu neighborhood walk — Queen Emma Summer Palace (free exterior, $6 interior), the old missionary homes, and the Punchbowl crater national cemetery panorama.",
            "Dinner: The Pig and the Lady (Chinatown) — Vietnamese-Hawaiian fusion from a James Beard semifinalist chef, $20–35/person. The lemongrass beef pho and larb are outstanding.",
          ],
          cost: "$150–220 (entries, lunch, dinner)",
        },
        {
          day: "Day 4",
          title: "Hanauma Bay Snorkeling + Windward Coast",
          items: [
            "6:45am: Hanauma Bay ($25 entry, timed tickets booked online 2 days in advance at exactly 7am HST — they sell out in minutes). Snorkel for 2 hours in the protected reef bay with sea turtles, parrotfish, and the occasional reef shark in the outer bowl.",
            "10:30am: Makapu'u Lighthouse Trail (free, 2 miles round-trip). In winter, bring binoculars for humpback whale spotting from the cliffs. The lighthouse itself dates to 1909 and has a lens so large (8 feet tall) it required a custom building.",
            "Lunch: Buzz's Original Steak House (Kailua, established 1967) — a legendary local steakhouse and bar where every table has a lei. The pupu platter and fresh fish are $20–35/person.",
            "Lanikai Beach: mid-afternoon is ideal (morning is often windy). Rent kayaks from Kailua Beach Adventures ($59/2 hours, double kayak) and paddle to the Mokulua islands — twin islets a mile offshore with a white sand beach and nesting birds. Kayaking here is one of the finest half-days in Oahu.",
            "Afternoon drive: the Kaneohe–Kualoa coast on the windward side has the Ko'olau cliffs dropping straight to turquoise bays. Stop at Senator Fong's Plantation (historic site) or Ho'omaluhia Botanical Garden (free, 400 acres, dramatic mountain backdrop).",
            "Evening: flight to Maui (OGG). Book Hawaiian Airlines inter-island ($70–120, 25 minutes). Check into Andaz Maui at Wailea ($280–400/night) or Fairfield Marriott Maui ($200–280/night).",
          ],
          cost: "$200–300 (snorkeling, kayak rental, flight, hotel)",
        },
        {
          day: "Day 5",
          title: "Road to Hana with Premium Stops",
          items: [
            "6:00am departure. Pick up a Road to Hana picnic box from Nuka (Paia town) the evening before — artisan sandwiches, local fruit, kombucha.",
            "Twin Falls (mm 2): first stop, 15-minute hike to a swimming hole. Arrive early before it gets crowded. The fruit stand at the trailhead sells the best fresh coconut on Maui.",
            "Ke'anae Peninsula (mm 17, free): lava rock peninsula with a traditional Hawaiian village and church dating to 1860. No development, no shops — the community here maintains a traditional lifestyle. The coastline of black lava meeting Pacific swells is as dramatic as anywhere in Hawaii.",
            "Wailua Falls roadside viewpoint (mm 45, free): 80 feet of cascading water visible from the road. The hike down to the base is unofficial and steep — mid-range travelers tend to view from the road.",
            "Wai'anapanapa State Park (mm 32, $10 reservation required): the black sand beach. Budget 45 minutes — the coastal trail along the lava clifftop in each direction reveals sea arches and blowholes.",
            "Pipiwai Trail, Kipahulu (Haleakala NP, $35 entry — keep receipt): the bamboo forest and Waimoku Falls hike (4 miles round-trip, 2 hours). This is the finest hike on the Road to Hana.",
            "Hana town lunch: Hana Hou Restaurant for fresh fish tacos and coconut shrimp ($18–25). The Hasegawa General Store has been here since 1910 and sells everything from fishing gear to macadamia nuts.",
            "Return via reverse route (not the southern loop — rental car restrictions often prohibit the unpaved section). Dinner at Paia Fish Market on the way back: fresh catch plate with rice and slaw, $18–24.",
          ],
          cost: "$100–150 (park entries, food, gas)",
        },
        {
          day: "Day 6",
          title: "Haleakala Sunrise + Whale Watching",
          items: [
            "2:30am: Haleakala summit departure. Reserve the sunrise permit months in advance (recreation.gov, $1 reservation + $35 park entry). Layers: proper winter jacket required. The summit at 3,055 meters is genuinely cold.",
            "5:45am: Sunrise from the Pu'u Ula'ula summit. The shadow of Haleakala itself — the world's largest dormant volcano — projects westward across the cloud layer below. The crater (technically a rift erosion valley) is 7 miles wide and 2,600 feet deep.",
            "Morning hike: Sliding Sands Trail, 2 miles into the crater. The cinder-cone landscape is unlike anything else in Hawaii — or most of earth. At this altitude, you're above most of the island's rainfall.",
            "11:00am: drive down to Makawao. Komoda Store for cream puffs and malasadas (go early — they sell out by 10am). The upcountry is cooler, green, and distinctly different from coastal Maui.",
            "1:30pm: Pacific Whale Foundation whale watch cruise, Ma'alaea Harbor ($55–70, December–April only). Humpback whales winter in Maui waters to calve and mate — the 'Au'au Channel between Maui and Lanai holds the highest density of humpback whales on earth in peak season (January–March). Expert naturalist narration included.",
            "Outside whale season: substitute with a sunset dinner cruise ($80–120, Pacific Whale Foundation or Trilogy) — catamaran sail along the West Maui coast with open bar, dinner, and a live musician.",
            "Evening: dinner at Monkeypod Kitchen (Wailea) for wood-fired local fish and craft cocktails — excellent wine list, $35–55/person.",
          ],
          cost: "$120–200 (whale watch, food, park already paid)",
        },
        {
          day: "Day 7",
          title: "Molokini Snorkel + Ka'anapali Sunset",
          items: [
            "6:30am: Trilogy Excursions Molokini Crater snorkel ($125–150/person) — the premium operator with breakfast, a full snorkel briefing, and knowledgeable naturalist crew. The boat is a 64-foot sailing catamaran. Snorkel in the crater for 1 hour, then move to Turtle Town (Coral Gardens) for a second snorkel with near-guaranteed sea turtle encounters.",
            "Return to Ma'alaea Harbor by 1pm. Lunch at Ma'alaea Grill (harborside) for fresh fish sandwiches.",
            "Afternoon: self-drive to Ka'anapali Beach. This 3-mile stretch of west-facing beach is the classic Maui postcard. Black Rock (Pu'u Keka'a) at the north end: cliff jumping is a daily tradition at 4pm — a performer dives with a torch in the traditional Lahaina ceremony. Snorkeling at Black Rock is excellent even from shore (reef fish, turtles, parrotfish).",
            "Lahaina historic district walk: the banyan tree, the historic harbor with whale statue, the waterfront galleries. Check current access (post-2023 fire recovery). Front Street's working restaurants and galleries that survived are worth supporting.",
            "4:30pm: cocktails at the Westin Ka'anapali beach bar for a west-facing Pacific sunset — reliably spectacular, sometimes extraordinary. Mai Tai ($16–18) while watching the sun drop.",
            "Final dinner: Lahaina Grill (if open post-fire — check status) or Farm to Table Maui at a Wailea resort for the full Maui splurge — local Kula vegetables, Maui cattle beef, fresh mahi-mahi, $45–70/person.",
          ],
          cost: "$180–260 (boat tour, food, drinks)",
        },
      ],
    },

    /* ── LUXURY ──────────────────────────────────────────────────────── */
    {
      label: "Luxury",
      sub: "$700–2,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Halekulani Arrival + Private Sunset Sail",
          items: [
            "Arrive HNL. Private car transfer from airport to Halekulani Waikiki ($80–120 via Black Car Service Hawaii). The Halekulani ('House Befitting Heaven') is Honolulu's finest hotel — rates $600–1,200/night. The orchid mosaic pool and direct beach access set the tone.",
            "The hotel's House Without a Key open-air bar hosts nightly hula performance under 100-year-old kiawe trees at sunset. Champagne and macadamia crusted shrimp as the sun sets over Waikiki. Cocktails $20–28.",
            "Afternoon: personal cultural guide for a 3-hour Honolulu orientation — Bishop Museum (world's finest collection of Hawaiian and Pacific artifacts), Iolani Palace (the only royal palace on US soil, $25 entry), and Kawaiahao Church (the 'Westminster Abbey of Hawaii', built from 14,000 coral blocks).",
            "Evening: La Mer restaurant at the Halekulani — Honolulu's only AAA Five Diamond restaurant. French-inspired cuisine with Hawaiian ingredients: Kona lobster, Keahole abalone, grass-fed Maui beef. Tasting menu $185–240/person. Reserve 2 months in advance.",
            "After dinner: the Halekulani's private beach is cleared for guests in the evening. The glow of the Waikiki skyline reflecting on the calm Pacific from a private beach chair, mai tai in hand, is exactly what you came for.",
          ],
          cost: "$600–900 (excl. hotel room)",
        },
        {
          day: "Day 2",
          title: "Private North Shore Tour + Helicopter Flight",
          items: [
            "7:00am: private guide and chauffeured SUV to the North Shore. Stop at Haleiwa for bespoke malasadas from Leonard's (they'll deliver to your vehicle if you request) and a personal guided tour of the historic surfing culture sites.",
            "Private surf history tour: the guide explains how Duke Kahanamoku brought surfing to the mainland in 1912, the formation of the surf industry at Haleiwa, the Triple Crown of Surfing circuit, and a visit to the Surf Museum.",
            "Waimea Valley exclusive: private guided botanical tour of the native Hawaiian plant collection. The valley's cultural restoration work is explained by a Hawaiian cultural practitioner.",
            "12:30pm: helicopter tour over Oahu's North Shore and the Ko'olau cliffs ($350–500/person for 45-minute flight, Blue Hawaiian Helicopters). The aerial view of the Pali cliffs dropping sheer into the windward valleys, the white ribbon of breaking surf on the North Shore, and the volcanic caldera of Diamond Head from above justifies the price entirely.",
            "Lunch: private catamaran charter from Haleiwa harbor (2 hours, $400–600 for the boat), anchoring over the coral reef for snorkeling and a catered lunch of fresh poke and sashimi.",
            "Evening: private chef dinner at the Halekulani. The hotel's culinary team prepares a 6-course Hawaiian tasting menu in a private dining room — local ingredients including Kona kampachi, Hamakua mushrooms, and Big Island hearts of palm. $300–400/person.",
          ],
          cost: "$1,000–1,500 (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Pearl Harbor Private Tour + Sunset Catamaran",
          items: [
            "8:00am: private guided Pearl Harbor experience. A specialist historian provides a 3-hour deep-dive that covers the pre-war Pacific strategy, the attack timeline with original military maps, and access to the archival photo collection beyond the public exhibits. Cost: $250–350 for the private guide (entry fees additional).",
            "The USS Arizona Memorial by private reservation slot — your guide explains the ship's layout, the 1,177 crew who remain entombed, and the oil that still surfaces from the wreck (called 'black tears').",
            "USS Missouri private tour: a former naval officer docent walks the surrender deck, the captain's quarters, and the gun turrets with a depth of storytelling unavailable in the standard audio guide.",
            "Afternoon: Honolulu Museum of Art private curator tour ($150–200). The curator leads a 90-minute tour of the permanent collection's highlights — the Hiroshige woodblock collection, the Gauguin Pacific works, and the recently acquired contemporary Hawaiian art. Closed to general public during your tour.",
            "5:30pm: Sunset catamaran from Waikiki Beach ($200–350/person for private charter) — a 2-hour sail along the Waikiki coast as the sun drops behind the Waianae Range. Open bar, fresh seafood, and a Hawaiian musician with ukulele. The Halekulani's concierge arranges the Navatek charter.",
            "Late dinner: Nobu Waikiki ($80–130/person for a proper omakase). The Nobu here is among the best in the US chain for Pacific fish quality.",
          ],
          cost: "$800–1,200 (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Private Hanauma Bay + Inter-Island to Maui",
          items: [
            "Arrange an early-bird private Hanauma Bay access through a licensed marine naturalist guide ($150–200 for a 2-hour guided snorkel). The guided experience identifies every species and explains the reef ecology in a way that transforms casual snorkeling into genuine understanding.",
            "Post-snorkel: helicopter from Honolulu (HNL) to Maui (OGG) — $600–900 for a private charter. The inter-island flight is only 25 minutes commercially, but the helicopter route passes over the channels between islands with views of Molokai's sea cliffs (the world's tallest) and the island of Lanai visible to the west.",
            "Check in: Four Seasons Resort Maui at Wailea ($700–1,500/night). The property is a benchmark of luxury hospitality in Hawaii — three pools, five restaurants, private beach with attendants, and impeccable service from Hawaiian-born staff. The Seawatch restaurant has the best panoramic ocean view of any restaurant on Maui.",
            "Afternoon: the Four Seasons' complimentary snorkel equipment (high-quality, properly fitted) for a snorkel at Wailea Beach. The reef at the southern end has an unusual density of green sea turtles for a resort beach.",
            "Evening: Ferraro's Bar e Ristorante (Four Seasons Maui), open-air Italian overlooking the Pacific. Fresh Hawaiian seafood prepared in the style of coastal Amalfi — the crudo and the hand-made pasta are exceptional. $80–130/person.",
          ],
          cost: "$900–1,400 (helicopter, hotel, dining)",
        },
        {
          day: "Day 5",
          title: "Private Road to Hana + Cultural Immersion",
          items: [
            "6:00am: private vehicle and Hawaiian cultural guide for the Road to Hana. The guide explains the significance of each ahupua'a (traditional land division running from mountain to sea), identifies medicinal plants, chants at traditional heiau (temple sites), and opens access to privately-held taro lo'i (flooded fields) not visible from the highway.",
            "Ke'anae taro farm visit (private arrangement): a Hawaiian family on the Ke'anae Peninsula maintains a working taro farm using traditional flooding methods. Taro is the sacred crop of Hawaiian culture — the elder sibling of humans in Hawaiian cosmology. A 30-minute visit with the family includes tasting fresh poi.",
            "Wai'anapanapa State Park private morning slot (arranged by the Four Seasons concierge) — arrive before park opening for photographs of the black sand beach in solitude.",
            "Pipiwai Trail and Waimoku Falls with a guide who explains the ecological restoration of the bamboo forest (an invasive species the park service manages) and the cultural history of the Kipahulu ahupua'a.",
            "Lunch: picnic prepared by the Four Seasons kitchen — a Japanese bento-style box with Maui poke, local Kula vegetables, and macadamia nut mochi, eaten beside a private waterfall the guide knows.",
            "Return by 6pm. Spa treatment at the Four Seasons spa ($200–350): the lomilomi massage is a traditional Hawaiian full-body massage using long flowing strokes — deeply restorative after a full day of hiking.",
          ],
          cost: "$600–900 (guide, entries, spa)",
        },
        {
          day: "Day 6",
          title: "Haleakala Private Sunrise + Helicopter",
          items: [
            "2:30am: private vehicle to the Haleakala summit. The Four Seasons concierge secures the sunrise reservation ($1 + $35 park entry) months in advance as part of trip planning.",
            "Summit arrival by 4:30am. Your guide has blankets, hot Kona coffee in a thermos, and a star map — the 90 minutes before sunrise at 10,023 feet, with the Milky Way overhead in the absence of light pollution, is as extraordinary as the sunrise itself.",
            "Sunrise: the shadow of Haleakala on the cloud layer, then the first arc of the sun over the Hana coast. Your guide narrates the cultural significance — Haleakala means 'House of the Sun,' and the demigod Maui is said to have lassoed the sun here to slow its passage and allow his mother's tapa cloth to dry.",
            "Post-sunrise hike: Sliding Sands Trail into the crater with your guide. The summit at 6am with no other visitors — only the wind and the cinder cones and the silversword plants.",
            "10:00am: drive down and check out. Blue Hawaiian Helicopters private charter for the Maui Circle Island tour ($600–900 for 2 passengers): the West Maui Mountains (50-inch annual rainfall cliffs draped in green), the Koolau Gap in Haleakala, Hana coastline, and the road to Hana aerial.",
            "Afternoon: whale watch with Pacific Whale Foundation's private charter option ($800–1,200 for up to 6 guests) — a professional marine biologist accompanies, and the captain can follow individual whale families for hours rather than the standard 2-hour public tour.",
            "Final dinner: Mama's Fish House (Paia, $80–120/person) — the most revered restaurant in Maui, set in a 1940s beach house on a black sand cove. The fish appears on the menu with the name of the fisherman and the specific spot it was caught. Reserve 2–3 months in advance.",
          ],
          cost: "$1,200–1,800 (helicopter, whale watch, dinner)",
        },
        {
          day: "Day 7",
          title: "Lanai Private Day + Molokini Luxury Dive",
          items: [
            "6:30am: Four Seasons private ferry to Lanai ($30/person public ferry, or Four Seasons arranges private water taxi $200+). Lanai is the most exclusive island in Hawaii — 98% privately owned. Four Seasons Resort Lanai at Hulopoe Bay is the primary destination.",
            "Hulopo'e Bay Marine Life Conservation District: arguably the finest snorkeling in all of Hawaii. Spinner dolphin pods of 50–100 dolphins are common in the bay before 9am. Sea turtles are routine. Snorkeling is free from the beach; the bay is protected from commercial fishing.",
            "Lanai Cat Sanctuary visit (unique to Lanai): 700 rescued stray cats living in a 25,000 square foot sanctuary. Improbably charming.",
            "Scuba option: First Class Dives Lanai offers private dive charters to sites including the Cathedrals — lava tubes with light shafts that create stained-glass effects underwater. $200–250 for a 2-tank dive.",
            "Lunch at the Four Seasons Lanai: the ONE FORTY restaurant serves ocean-to-table cuisine where fishermen dock at the property's beach. $60–90/person.",
            "Return to Maui by 4pm. Final sunset at Wailea Beach with the Four Seasons beach service — attendants deliver your choice of cocktail, the chairs are positioned at the optimal angle, and the Pacific horizon is, as always, unobstructed.",
            "Farewell dinner: Spago Maui (Four Seasons) — Wolfgang Puck's Hawaii location, where the menu blends California cuisine with Hawaiian produce. Whole Kona lobster, Maui cattle filet, Kapalua pineapple dessert. $120–180/person. Tomorrow, the reality of mainland America.",
          ],
          cost: "$800–1,400 (ferry/water taxi, diving, dining)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$45–90",
      food: "$30–50",
      transport: "$20–35",
      activities: "$25–40",
      total: "$120–215/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–280",
      food: "$60–100",
      transport: "$40–70",
      activities: "$60–120",
      total: "$310–570/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$500–1,500",
      food: "$150–350",
      transport: "$80–200",
      activities: "$150–500",
      total: "$880–2,550/day",
    },
  ],

  mistakes: [
    {
      icon: "🏝️",
      title: "Not Booking Pearl Harbor Tickets in Advance",
      desc: "The USS Arizona Memorial boat tour (which costs $1 to reserve at recreation.gov) sells out weeks in advance during peak season. Showing up without a reservation means viewing the site from the shore only — you will not get on the boat. Book the moment your dates are confirmed. This is the single most common Hawaii regret from first-time visitors.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌋",
      title: "Missing the Haleakala Sunrise Reservation",
      desc: "Haleakala National Park requires a separate $1 sunrise reservation (on top of the $35 park entry) that becomes available exactly 60 days in advance at midnight Hawaii Standard Time. It sells out within minutes — sometimes seconds. Set a calendar alarm 60 days before your planned sunrise, stay up until midnight HST, and refresh recreation.gov immediately. There is no walk-in option for sunrise.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚗",
      title: "Skipping the Road to Hana",
      desc: "Most visitors look at the 3-hour driving time (each way) and decide against it. This is a significant mistake. The Road to Hana is not a destination — it is the journey itself. The waterfalls, bamboo forest, black sand beach, and remote coastal beauty are exactly what Hawaii's volcanic topography produces at its most concentrated. Allow a full day and start by 6:30am.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌊",
      title: "Turning Your Back on the Ocean",
      desc: "Hawaii's ocean is beautiful and deadly. Rogue waves on lava rock coastlines kill tourists every year — people standing on rock platforms who don't see the wave approaching from behind. The rule is absolute: never turn your back on the ocean. Additionally, rip currents at non-lifeguarded beaches can overwhelm strong swimmers. Always check warning flag colors and current ocean advisories at ocean-safety.hawaii.gov.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "✈️",
      title: "Underestimating Inter-Island Logistics",
      desc: "Flying between islands sounds simple — it's 25 minutes. But including airport check-in, security, baggage claim, and getting to/from airports, each inter-island flight costs 3–4 hours of your day. Budget accordingly. If visiting two islands in 7 days, plan the island switch for Day 4 or 5 and avoid scheduling activities on that travel day. Book inter-island flights 4–6 weeks ahead: $50–90 vs $200+ last-minute.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🍳",
      title: "Cook at Your Accommodation — Hawaii Grocery Strategy",
      desc: "Hawaii groceries cost 35–50% more than mainland USA due to shipping costs. However, cooking even 2–3 meals per week in a vacation rental or hostel kitchen saves $60–120 over hotel dining. Costco Honolulu (Ala Moana) is the great equalizer — bulk produce, excellent poke by the pound ($12–18/lb), and quantities that make sense for groups. Whole Foods Kahului (Maui) stocks excellent local products. Safeway locations are on every island.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐋",
      title: "Plan Around Humpback Whale Season",
      desc: "Pacific humpback whales migrate to Hawaiian waters from Alaska every winter to calve and mate. Peak season is January–March, with whales present December–April. Maui's 'Au'au Channel (between Maui and Lanai) has the highest density of humpback whales on earth during this period — visible from shore, from whale-watching boats ($35–55), and from the beach at Ka'anapali. Outside this window, you'll encounter Hawaiian spinner dolphins year-round instead.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🤿",
      title: "Snorkel on Budget with Your Own Gear",
      desc: "Rental snorkel gear is $15–20/day per person. A decent mask-and-snorkel set from Costco costs $20–35 total. If you're visiting multiple snorkel sites across 7 days — Hanauma Bay, Shark's Cove, Ka'anapali, Molokini (boat tour includes gear) — owning your gear pays off immediately, fits your face correctly, and is more hygienic. Pack it in your checked luggage. Fins are optional for most Hawaii snorkeling but worth $5/day rental for Molokini's occasional current.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "⏰",
      title: "The 6am Rule — Every Single Site",
      desc: "Hawaii's most popular sites (Hanauma Bay, Diamond Head, Waimea Bay in summer, Molokini boat launches) are genuinely manageable at 6–7am and genuinely overwhelming by 10am. This is not a mild preference — it's the difference between turtle encounters in clear water and a crowded, murky reef. Hawaiian traffic is also brutal mid-morning in tourist corridors. Start every activity day before 7am, take an early afternoon break, and resume after 4pm when day-trippers leave.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌺",
      title: "Learn Basic Hawaiian Words — Locals Notice",
      desc: "Hawaii has a complex relationship with tourism and its impact on native Hawaiian culture and housing costs. Small gestures matter: Mahalo (thank you), Aloha (hello/goodbye/love — a philosophy, not just a greeting), Kapu (forbidden, respect these signs at sacred sites), Mauka (toward the mountain), and Makai (toward the sea, how locals give directions). Do not touch the silversword plants at Haleakala, do not stand on coral reefs, and give Hawaiian monk seals and sea turtles wide berth — it's a federal crime to approach them within 50 feet.",
      color: "bg-pink-50 border-pink-200",
    },
  ],

  faqs: [
    {
      q: "Which is the best Hawaiian island for first-time visitors?",
      a: "Oahu is the most practical first island — it has the widest range of accommodation prices, the best transport infrastructure, the most diverse food scene, and access to Pearl Harbor, Diamond Head, Hanauma Bay, and the North Shore. Maui is the most visually stunning of the accessible islands and the best for water activities and Haleakala. For a 7-day first visit, the Oahu + Maui combination covers both bases. The Big Island is more suited to second visits or travelers specifically drawn to volcanoes and astronomy.",
    },
    {
      q: "How much money do I need for 7 days in Hawaii?",
      a: "Hawaii is the most expensive US state for visitors. A genuine budget (hostels, cooking some meals, free beaches) runs $120–180/day per person. A comfortable mid-range trip (3-star hotels, restaurant dining, key activities) costs $300–550/day. Luxury ($700–2,500+/day) is world-class. Budget the largest single costs first: accommodation (book 2–3 months ahead for best rates), inter-island flight ($70–150/island), car rental ($60–120/day — essential), and activity bookings (Pearl Harbor reservation, Haleakala sunrise permit, Molokini boat tour).",
    },
    {
      q: "When is the best time to visit Hawaii?",
      a: "April–June and September–November offer the best balance of weather, crowds, and price. Summer (July–August) is peak season — prices spike 30–50% and popular sites are severely crowded. Winter (December–March) brings humpback whales and bigger surf on the North Shore, but also Hawaii's rainy season on windward coasts (the leeward/south sides stay sunny). Hurricane season is June–November, though direct hurricane hits are rare. For Haleakala sunrise, any month works but be prepared for summit clouds — March and April tend to have clearer summit conditions.",
    },
    {
      q: "How do I book the Haleakala sunrise permit?",
      a: "Go to recreation.gov and search 'Haleakala sunrise.' Permits become available exactly 60 days in advance at midnight Hawaii Standard Time (HST, UTC-10). Set a phone alarm for 60 days before your planned sunrise date. The permits cost $1 each (on top of the $35 park entry fee paid separately at the gate) and cover a vehicle for up to 4 people. They sell out within minutes of release — sometimes seconds. If you miss the 60-day window, check recreation.gov daily for cancellations, which do appear. The park itself is open 24/7 — only the sunrise window (3am–7am) requires the permit.",
    },
    {
      q: "Is Hawaii actually part of the United States?",
      a: "Yes — Hawaii became the 50th US state on August 21, 1959. US citizens travel to Hawaii exactly as they travel to any other state — no passport required, no customs, no immigration. International visitors need the same visa or ESTA they would use for the mainland USA. The Hawaiian Islands were an independent kingdom under the Hawaiian monarchy until the US-backed overthrow of Queen Lili'uokalani in 1893, followed by annexation in 1898. The sovereignty movement remains active in contemporary Hawaiian politics — understanding this history adds important context to visiting.",
    },
    {
      q: "Where is the best snorkeling in Hawaii without a boat tour?",
      a: "Hanauma Bay (Oahu, $25 entry with timed tickets): the best all-round reef snorkeling with guaranteed sea turtles. Shark's Cove, Pupukea (Oahu, free): excellent diversity of reef fish in a protected lava pool, summer only. Kapalua Bay (Maui, free): calm, protected, turtles common. Honolua Bay (Maui, free): exceptional coral coverage, accessible in calm conditions. Black Rock at Ka'anapali (Maui, free): shore snorkel with turtles and reef fish. For boat-accessible snorkeling, Molokini Crater (Maui, $80–120 tour) is in a different league entirely — 150-foot visibility and 250+ species.",
    },
    {
      q: "Is jellyfish a problem in Hawaii?",
      a: "Hawaii has a predictable box jellyfish cycle: approximately 7–10 days after each full moon, box jellyfish migrate from deep water to Oahu's south-facing beaches (including Waikiki and Hanauma Bay) to spawn. The cycle lasts 3–5 days. The sting is painful but rarely dangerous for healthy adults. Check the University of Hawaii's jellyfish forecast at waikikiaquarium.org/jellyfish-forecast before each swim day. Portuguese man-of-war (not true jellyfish) appear on north-facing beaches after strong trade winds — if you see blue blobs on the sand, check the water carefully before entering.",
    },
  ],

  combineWith: ["los-angeles-5-days", "las-vegas-4-days", "tokyo-5-days"],
  relatedSlugs: ["los-angeles-5-days", "las-vegas-4-days", "maldives-5-days", "bali-5-days"],
  galleryQuery: "hawaii waikiki beach oahu maui haleakala volcanic tropical",
};

export const metadata: Metadata = {
  title: "Hawaii in 7 Days: Oahu, Maui & Big Island Complete 2026 Itinerary",
  description:
    "The definitive 7-day Hawaii itinerary covering Oahu and Maui (or the Big Island). Haleakala sunrise booking secrets, Road to Hana guide, Pearl Harbor tips, snorkeling spots, and real dollar costs from budget to luxury.",
  keywords: [
    "hawaii itinerary 7 days",
    "hawaii travel guide 2026",
    "oahu maui itinerary",
    "haleakala sunrise permit",
    "road to hana guide",
    "pearl harbor tickets",
    "hawaii budget travel",
    "best beaches hawaii",
    "hawaii snorkeling guide",
  ],
  openGraph: {
    title: "Hawaii in 7 Days: Oahu, Maui & Big Island Complete 2026 Itinerary",
    description:
      "Haleakala sunrise booking secrets, Road to Hana full guide, Pearl Harbor reservation tips, and real dollar costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hawaii Na Pali Coast Kauai dramatic cliffs tropical Pacific Ocean USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawaii 7-Day Itinerary 2026",
    description:
      "Haleakala sunrise permits, Road to Hana, Pearl Harbor booking — the complete guide from $120/day to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hawaii-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hawaii in 7 Days: Oahu, Maui & Big Island Complete 2026 Itinerary",
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image:
        "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&q=80",
      description:
        "The definitive 7-day Hawaii itinerary covering Oahu and Maui (or the Big Island). Haleakala sunrise booking secrets, Road to Hana full guide, Pearl Harbor reservation tips, and real dollar costs from $120 to $2,500+/day.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/hawaii-7-days",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hawaii 7 Days",
          item: "https://www.incredibleitinerary.com/blog/hawaii-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hawaii, USA",
      description:
        "The 50th US state and one of the world's premier tropical destinations — volcanic islands featuring Waikiki Beach, Haleakala Crater, the Road to Hana, Pearl Harbor, active lava flows on the Big Island, and the finest snorkeling reefs in the Pacific.",
      touristType: [
        "Beach lovers",
        "Snorkeling and diving enthusiasts",
        "Hiking and outdoor adventurers",
        "History and culture travelers",
        "Honeymooners",
        "Wildlife watchers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 21.3069,
        longitude: -157.8583,
      },
      hasMap: "https://maps.google.com/?q=Hawaii,USA",
    },
  ],
};

export default function HawaiiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HawaiiClient />
    </>
  );
}
