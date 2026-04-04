import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Nara",
  country: "Japan",
  countryFlag: "🇯🇵",
  slug: "nara-2-days",
  heroQuery: "nara japan deer todaiji temple great buddha park",
  heroAlt: "Nara Japan deer bowing in front of Todai-ji Temple Great Buddha",
  category: "East Asia",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "1,300 wild deer that have been considered sacred since the 8th century roam freely through the park and bow to visitors for shika sembei (deer crackers), the world's largest wooden structure houses a 15-metre bronze Buddha that took 2 million workers to cast in 752 AD, a 5-storey pagoda is visible above the rooftops at every turn, and a town that was Japan's capital before Kyoto and still feels like time stopped in the 8th century — Nara, Japan's gentlest city.",
  stats: {
    duration: "2 Days",
    budgetFrom: "¥6,000 (~$41)",
    bestMonths: "Mar–May (cherry blossoms) or Oct–Nov (autumn)",
    airport: "KIX (Kansai International, 1hr) or ITM (Osaka Itami, 45min)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🦌", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-there", emoji: "🚆", label: "Getting There" },
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
        ["Visa Required", "Indian passport holders require a Japan tourist visa. Apply at the Japanese Consulate or a Japan Visa Application Center (JVAC) in your city."],
        ["Fee", "Approximately ¥3,000 (~$20 USD) for a single-entry visa."],
        ["Processing", "5–7 business days. Apply at least 2 weeks before travel to allow buffer."],
        ["Documents", "Bank statements (last 3 months), confirmed hotel bookings, detailed itinerary, return air ticket, employment letter or proof of income."],
        ["eVisa Option", "Japan has launched an eVisa system — check current availability for Indian nationals at www.evisa.mofa.go.jp. If available, eVisa is faster and avoids the consulate queue."],
        ["Duration", "Single-entry visa typically valid for 15 days. Multi-entry visas are available for frequent travellers with a visa history."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "Citizens of the USA, UK, EU member states, Australia, Canada, and most Western nations enter Japan visa-free."],
        ["Duration", "Up to 90 days per visit. No advance application needed — just show up with your passport."],
        ["Requirements", "Valid passport (6+ months), return ticket, proof of sufficient funds. Japan's immigration officers may ask for accommodation bookings."],
        ["Note", "Japan is strict about working without authorization during tourist entry. Do not work remotely on a tourist visa."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "¥6,000–9,000/day (~$41–62)",
      days: [
        {
          day: "Day 1",
          title: "Nara Park, Tōdai-ji & Kasuga Taisha",
          items: [
            "8:30am — Arrive from Kyoto (45 min, ¥720 on the Kintetsu Kyoto Line) or Osaka (40 min, ¥600 on Kintetsu Namba Line). Store luggage at coin lockers at Kintetsu Nara Station (¥400–600).",
            "9:00am — Walk east along Sanjo-dori shopping street toward Nara Park. Buy a packet of shika sembei (deer crackers, ¥200) from vendors immediately upon reaching the park. Hold the crackers up — the deer will bow to you reflexively. This is not a trained trick: deer in Nara learned this behavior from watching humans bow to each other over centuries.",
            "9:45am — Tōdai-ji Temple entry (¥600). The Nandaimon Gate's guardian statues (Niō) are 8 metres tall and among Japan's finest wooden sculptures. The Great Buddha Hall (Daibutsuden) is the world's largest wooden building. Inside, the Vairocana Buddha sits 15 metres high. Note the wooden pillar with a hole at its base — legend holds that those who can crawl through it are guaranteed enlightenment. The hole is the size of the Buddha's nostril.",
            "11:00am — Wander the deer meadows north and east of Tōdai-ji. Deer are everywhere and completely wild — they can bite if you tease them with food and don't deliver. Keep crackers out of your bag or they will rummage through it.",
            "12:00pm — Lunch at a café along Higashimuki arcade near Kintetsu station: kakinoha-zushi (persimmon-leaf-wrapped sushi, Nara's signature dish, ¥800–1,200 for a set), or kakigori (shaved ice) in season.",
            "1:30pm — Kōfuku-ji Temple (free grounds). The 5-storey pagoda (51 metres) is the second-tallest pagoda in Japan and appears in almost every Nara photograph. The Tōkondō (East Golden Hall) has a ¥300 entry. The National Treasure Museum (¥800) holds extraordinary examples of 8th-century Buddhist sculpture including the dry-lacquer eight-armed Ashura figure — considered one of the finest sculptures in Japan.",
            "3:30pm — Walk 20 minutes south through Naramachi, the preserved Edo-period merchant quarter. The narrow machiya townhouses with their hanging charm bags (migawari-saru) are beautifully intact. Several small free museums and galleries occupy restored buildings. A good coffee shop run out of a machiya is worth 20 minutes.",
            "5:00pm — Budget guesthouse check-in (¥2,500–4,500/night in a dormitory or private room). Nara has solid hostels near the station. Guesthouse Nara Backpackers and Nara Guest House are well-regarded.",
            "Evening — Dinner at an izakaya near Higashimuki arcade: yakitori sets (¥800–1,200), a beer (¥500), and Japanese pickles. Budget dinner: ¥1,500–2,000. Nara is quiet at night — by 9pm the streets around the park are essentially empty, which adds to the time-suspended quality.",
          ],
          cost: "¥5,500–8,000",
        },
        {
          day: "Day 2",
          title: "Kasugayama Forest, Isuien Garden & Yoshikien",
          items: [
            "6:30am — Arrive at Nara Park before any tour groups. At dawn the deer gather in the meadows east of Tōdai-ji in much larger groups than during the day. The early morning light through the park's cedar trees with hundreds of deer silhouetted against the mist is Nara's most photogenic moment.",
            "7:30am — Walk east into Kasugayama Primeval Forest (free). This ancient forest covering the slopes behind Kasuga Taisha is one of the few lowland primary forests in Japan — untouched for 1,300 years because it is sacred. Walking trails wind through enormous cedars and cryptomeria. Very few tourists come here this early.",
            "9:00am — Kasuga Taisha Shrine (free outer precincts, ¥500 for inner sanctum). The vermilion-lacquered corridors lined with 2,000 hanging bronze lanterns and 1,000 stone lanterns on the outer approach path are extraordinary at any hour — but with morning light filtering through the cedar canopy, the atmosphere is unlike anywhere else in Japan. The lanterns are lit twice a year (February and August) and the effect is described by those who see it as the most beautiful sight in Japan.",
            "11:00am — Yoshikien Garden (¥250, or FREE for foreign passport holders — show your passport at the gate). This Meiji-era garden contains three distinct sections: a pond garden, a moss garden, and an iris garden. In cherry blossom season (late March to early April) the moss garden becomes extraordinary. Rarely crowded — one of Nara's most underrated spots.",
            "12:00pm — Isuien Garden (¥800, one of Japan's best traditional stroll gardens, combines two Edo and Meiji-era sections with borrowed scenery of Tōdai-ji's rooftop). The garden uses shakkei (borrowed scenery) technique: Mount Wakakusa and Tōdai-ji's roof appear to be part of the garden composition.",
            "1:30pm — Lunch: try Naramachi's small restaurants for traditional Yamato cuisine: miwa somen (thin noodles in clear broth), or warabi mochi (bracken-starch jelly cubes rolled in kinako flour — Nara's oldest confection).",
            "3:00pm — Shin-Yakushi-ji Temple (¥600) — often overlooked, this 8th-century temple retains its original Nara-period interior with remarkable clay warrior statues (jūni-shinsho) surrounding the central Yakushi Nyorai figure. More intimate than Tōdai-ji and often nearly empty.",
            "4:30pm — Final walk through the deer park as the tour groups have departed. The deer become calm and settled as the day's visitors leave — late afternoon is the most peaceful time to simply sit with the deer in the park and absorb what a genuinely strange and beautiful place this is.",
            "5:30pm — Train back to Kyoto or Osaka. Total Day 2 cost at budget level: ¥5,000–7,000 including transport.",
          ],
          cost: "¥5,000–7,500",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥12,000–18,000/day (~$82–124)",
      days: [
        {
          day: "Day 1",
          title: "Nara Park Highlights with Comfort & Great Food",
          items: [
            "9:00am — Arrive from Kyoto or Osaka. Check in to a mid-range hotel near Nara Park: Dormy Inn Nara or Hotel Fujita Nara (¥8,000–14,000/night, private room, breakfast included, walking distance to the park).",
            "9:30am — Nara Park deer feeding. Buy multiple packets of shika sembei (¥200 each) and spend time with the deer in the less-visited northern sections of the park beyond the main Tōdai-ji approach. The deer there are more relaxed and less aggressive than those near the food vendors.",
            "10:30am — Tōdai-ji Temple (¥600) with extra time in the gallery halls. Many visitors rush through in 20 minutes — spend 45 minutes examining the details: the bronze octagonal lantern tower outside the hall (a National Treasure), the carved Komokuten and Tamonten guardian figures flanking the Buddha, and the scale model of the original 8th-century temple complex.",
            "12:30pm — Lunch at Ukiyo-e (traditional Nara cuisine restaurant near Naramachi): seasonal kaiseki-style lunch set (¥2,500–3,500) including kakinoha-zushi, persimmon vinegar salad, and sesame tofu. These ingredients are all Yamato (old Nara) specialties.",
            "2:00pm — Kasuga Taisha inner sanctum tour (¥500). A shrine priest leads a brief explanation of the four enshrined deities and the significance of the lanterns. The inner precincts contain some of the oldest sacred objects on public display in Japan.",
            "4:00pm — Isuien Garden (¥800) for the late afternoon light on the pond and the reflected pagoda rooftop. The garden café serves matcha and wagashi (traditional sweets) in a room overlooking the moss garden (¥700–900 for a set).",
            "6:00pm — Dinner at a proper restaurant in Naramachi: Yoshikien restaurant or similar, serving Nara's preserved vegetarian Buddhist cuisine (shōjin ryōri, ¥3,500–5,000 for a full set). This cuisine — developed in Nara's ancient monasteries — predates meat eating in Japan and includes exquisitely prepared seasonal vegetables, tofu, and pickles.",
            "8:30pm — Evening stroll through Naramachi. Completely silent at this hour. The machiya townhouses glow softly from within. If visiting in autumn, the maple-lined approach to Tōdai-ji is illuminated by lanterns for the annual Nara Tokae festival.",
          ],
          cost: "¥12,000–16,000 (excl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Kasugayama at Dawn, Yoshikien, Sake Brewery Tour",
          items: [
            "6:00am — Kasugayama Forest at dawn (free). A short 20-minute walk from Kasuga Taisha into the ancient forest produces an atmosphere that feels genuinely ancient — the scale of the old cedars and the complete absence of sound except for deer and birds is remarkable. Bring a warm layer; the forest is cool even in summer.",
            "8:00am — Kasuga Taisha at the start of the day's purification rituals. Priests in white robes perform the morning offering ceremony, which is open to quiet observers standing at a respectful distance. The sound of the ceremonial flute drifting through the stone-lantern corridor is one of those Japan moments that stays with you.",
            "9:30am — Yoshikien Garden (¥250 or free for foreign passports). Budget an hour here in the moss garden — the quality of moss cultivation is extraordinary and the garden is rarely visited before 10am.",
            "11:00am — Sake museum and brewery tour: the Nara area is the birthplace of Japanese sake (refined techniques developed by Buddhist temples in the 7th–8th centuries). Several small breweries offer tours. The Sake Museum near the station has free exhibits; private brewery tours arranged by your hotel run ¥2,000–3,500 and include tasting.",
            "1:00pm — Lunch at Mellow Cafe near Kōfuku-ji for a proper café-style set lunch in a renovated machiya (¥1,500–2,000), or the food stalls below Kōfuku-ji for yakisoba and mitarashi dango (sweet skewered rice dumplings, ¥300).",
            "2:30pm — Shin-Yakushi-ji Temple (¥600) at a relaxed pace. The 12 clay guardian statues are over 1,200 years old and remarkably well-preserved. This temple is only 10 minutes' walk from Isuien but feels entirely removed from the tourist circuits.",
            "4:00pm — Mt. Wakakusa (Wakakusayama): a 342-metre grassy hill east of Nara Park (¥150 entry, April–November). The summit takes about 30 minutes to climb and provides the best elevated view over Nara — Tōdai-ji, the pagoda, Kasuga Taisha's forest, and on clear days, distant Osaka. The hill itself is covered in short grass kept cropped by deer and lit on fire every January during the Wakakusa Yamayaki festival.",
            "5:30pm — Return to Kyoto or Osaka, or spend a second night and do the sunrise at the Nara Park meadows the following morning.",
          ],
          cost: "¥10,000–15,000 (excl. accommodation)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥25,000–45,000/day (~$170–310)",
      days: [
        {
          day: "Day 1",
          title: "Private Guide, Kaiseki Dinner & Onsen Ryokan",
          items: [
            "9:00am — Arrive from Kyoto or Osaka by Shinkansen/Kintetsu express. Check in early at a traditional ryokan within or near Nara Park: Kikusui Ryokan (Michelin-recommended, rooms from ¥35,000–80,000/person including dinner and breakfast) or the more modern Nara Hotel (historic 1909 building, rooms from ¥25,000–50,000, on the park's edge).",
            "10:00am — Private cultural guide (¥15,000–25,000 for a full day, arranged through your ryokan or Japan Travel Bureau). Your guide manages crowd timing, provides historical context beyond any guidebook, and takes you behind roped areas not accessible on self-guided visits.",
            "10:30am — Tōdai-ji Temple with your guide, who explains the Buddhist cosmology depicted in the sculptures, the patronage of Emperor Shōmu (who commissioned the Great Buddha to protect Japan from a smallpox epidemic that had killed a third of the population), and the 1,200-year history of repairs and reconstructions. Seeing a place you thought you understood through expert eyes changes it completely.",
            "1:00pm — Kaiseki lunch at a private restaurant your guide selects based on season: a full 8-course Yamato kaiseki (¥8,000–15,000/person) featuring persimmon, mountain vegetables, yuzu, and local tofu preparations. This is the cuisine that the Japanese court ate in this city for 80 years.",
            "3:00pm — Kasuga Taisha inner precincts with access to the treasure house (¥500 extra) for a private viewing of ancient ritual objects and offerings accumulated over 13 centuries.",
            "4:30pm — Isuien Garden private tea ceremony (arranged by ryokan concierge, ¥3,000–5,000): a full ura-senke style ceremony conducted by a local tea master in the garden's teahouse overlooking the Tōdai-ji borrowed view.",
            "7:00pm — Multi-course kaiseki dinner at your ryokan. Kikusui's dinner is one of the finest in the Kansai region — a 12-course seasonal menu paired with sake. After dinner: private onsen bath in your suite's stone garden tub.",
          ],
          cost: "¥35,000–65,000 (incl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Dawn in the Sacred Forest, Private Temple Access & Departure",
          items: [
            "5:30am — Pre-dawn walk with your guide through Kasugayama Forest. The priests of Kasuga Taisha begin purification rituals before dawn; your guide can arrange for you to observe (from a respectful distance) the morning ceremony at the inner sanctum before the shrine officially opens to the public.",
            "7:00am — Dawn deer meadows. At this hour, several hundred deer gather in the grass below Tōdai-ji's Great Buddha Hall. Your guide knows the exact meadow where the largest groups assemble and where the deer are most calm with human presence.",
            "8:30am — Ryokan breakfast: a full traditional Japanese breakfast (grilled fish, miso, rice, pickles, tofu, raw egg, nori) served in your room or the garden pavilion.",
            "10:00am — Yoshikien Garden private opening (your ryokan can arrange early access, ¥1,000 private entry). Alone in the moss garden at 10am, with the garden staff doing their daily moss care — this is the Japan experience that no scheduled tour itinerary offers.",
            "11:30am — Naramachi private artisan workshop visit: a lacquerware craftsperson or traditional ink-stone maker (Nara is Japan's largest producer of high-quality ink-stones, sumi-e supplies, and brushes — the Kōbien factory has been operating since 1577). Your guide arranges a private demonstration and the option to purchase directly from the maker.",
            "1:30pm — Final lunch at a highly-rated soba restaurant near the station: handmade Yamato soba (buckwheat noodles grown in the Nara highlands, served cold with a dipping broth of kombu and bonito — ¥2,000–3,000). Soba this good cannot be replicated outside the region.",
            "3:00pm — Depart Nara. Arrange a private car transfer to Kyoto (¥8,000–12,000) or Kansai Airport (¥15,000–25,000) through your ryokan. Look back at the pagoda above the rooftops as you depart.",
          ],
          cost: "¥20,000–40,000 (excl. accommodation)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "¥2,500–4,500",
      food: "¥1,500–3,000",
      transport: "¥700–1,500",
      activities: "¥1,300–2,800",
      total: "¥6,000–11,800/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥8,000–14,000",
      food: "¥4,000–8,000",
      transport: "¥1,000–2,500",
      activities: "¥2,000–4,500",
      total: "¥15,000–29,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥25,000–80,000",
      food: "¥8,000–20,000",
      transport: "¥2,000–12,000",
      activities: "¥5,000–25,000",
      total: "¥40,000–137,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🦌",
      title: "Underestimating the Deer",
      desc: "Nara's deer are wild animals, not a petting zoo. They will headbutt, bite, and chase you if you show food and don't deliver immediately. Children and elderly visitors are knocked over every year. Buy shika sembei from official vendors only (¥200/pack), hold them up so the deer can see them, and distribute quickly. Never put food in your bag where a deer can smell it — they will headbutt your bag off your back without hesitation. This happens dozens of times a day and is always the tourist's fault.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⏰",
      title: "Visiting Mid-Morning on a Weekend",
      desc: "Nara receives 13 million visitors per year, concentrated mainly at Tōdai-ji and the Nandaimon gate area. Between 10am and 3pm on weekends and public holidays, the main temple approach is uncomfortably crowded. The fix is simple: arrive before 9am. The park, deer meadows, Kasuga Taisha, and Tōdai-ji itself are dramatically more pleasant in the first 90 minutes of opening. Nara is an easy day trip from Kyoto or Osaka and back — you don't need to align to tourist rush hours.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍵",
      title: "Treating Nara as Only a Half-Day Trip",
      desc: "Most visitors to the Kansai region spend a single morning in Nara as a Kyoto day trip. This covers Tōdai-ji and the deer park — roughly 15% of what the city contains. The Kasuga Taisha lantern corridor, the Kasugayama primeval forest, Yoshikien Garden, Isuien Garden, Naramachi's machiya lanes, Shin-Yakushi-ji Temple, Mt. Wakakusa, and the completely empty evening hours when tour groups have gone — these are all better than most things in Kyoto that tourists spend two days on. Spending at least one night in Nara changes the experience entirely.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💴",
      title: "Not Having Enough Cash",
      desc: "Japan is still substantially a cash economy. Many Nara temples, gardens, food stalls, and small restaurants do not accept cards. While 7-Eleven and Japan Post ATMs accept foreign cards reliably, you should carry ¥10,000–15,000 in cash per day in Nara. The ¥600 Tōdai-ji entry, deer crackers, temple gardens, and izakaya dinners all require cash. Japan is absolutely safe to carry cash — there is effectively zero pickpocketing.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "👗",
      title: "Dressing Casually for Shrine and Temple Visits",
      desc: "Kasuga Taisha's inner precincts and many of Nara's active temples are working religious sites, not just tourist attractions. While Japan does not enforce strict dress codes the way some Southeast Asian temples do, covering shoulders and wearing modest clothing shows appropriate respect. Very revealing clothing at active shrine rituals will receive disapproving looks from shrine priests and Japanese visitors. Bring a light layer that covers shoulders — Nara's parks also mean sun protection.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Arrive at 6:30am for the Dawn Deer Meadows",
      desc: "Before the food vendors set up at 8am and before the first tour groups arrive from Kyoto at 9am, Nara Park's deer meadows are hauntingly beautiful — hundreds of deer settling in the morning mist below Tōdai-ji's roofline, no other tourists, birdsong from Kasugayama Forest, and the first light picking out the pagoda against the cedars. This window lasts about 90 minutes. It requires staying at least one night in Nara. It is the single best thing you can do in this city.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎫",
      title: "Yoshikien is Free for Foreign Passport Holders",
      desc: "One of Nara's most beautiful gardens — a traditional three-section garden with a moss area, pond garden, and iris garden — charges ¥250 for Japanese visitors but is completely free for foreign nationals upon showing your passport. The garden is located directly next to Isuien (¥800) and is often skipped in favour of it. Don't skip it. It is less formal than Isuien and the moss section is genuinely extraordinary. If you visit both consecutively the ¥800 Isuien entry seems fair alongside the free Yoshikien.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏮",
      title: "Check the Lantern Festival Dates",
      desc: "Kasuga Taisha's 3,000 stone and bronze lanterns are lit twice a year: Setsubun Mantōrō (early February) and Obon Mantōrō (mid-August). On these two evenings, every lantern in the shrine complex is lit simultaneously — the approaches, corridors, and inner precincts glow amber in the darkness in an effect that is without parallel in Japan. Hotels book out months in advance for these dates. If your travel dates can flex by even one day, aligning with the lantern festival is worth a route change.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚂",
      title: "Use the Kintetsu Line, Not JR",
      desc: "From Kyoto, the Kintetsu Kyoto Line (¥720, 45 min, Kintetsu Kyoto Station directly to Kintetsu Nara Station) drops you 500 metres from Nara Park. The JR Nara Line (¥720, 45 min, covered by JR Pass) deposits you at JR Nara Station, 20 minutes' walk farther from the park. From Osaka (Namba), the Kintetsu Namba Line is faster and cheaper than JR. The Kintetsu Nara Station is simply closer to everything. Use the Kintetsu unless you're committed to using a JR Pass.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Nara worth visiting if I've already been to Kyoto?",
      a: "Absolutely yes — and not just for the deer. Nara's Kasugayama primeval forest is one of the few ancient lowland forests in Japan. Tōdai-ji's Great Buddha is larger than anything in Kyoto. Naramachi is quieter and better-preserved than most of Kyoto's historical districts. Yoshikien and Isuien gardens are among the best in Japan and far less crowded than Kyoto's equivalents. And the experience of sitting in a silent park at dawn with 300 wild deer as the only other living beings is genuinely unlike anything Kyoto offers. If you have even one extra day in the Kansai region, spend it in Nara.",
    },
    {
      q: "Is Nara a day trip or worth staying overnight?",
      a: "Nara is usually done as a day trip from Kyoto (45 min) or Osaka (40 min), but spending even one night changes the experience completely. You get the park at dawn before tour groups arrive, the evening silence after they depart, and the time to reach Kasugayama Forest, Yoshikien, Shin-Yakushi-ji, and Naramachi — sites that day-trippers almost never see. Budget accommodation in Nara is affordable (¥2,500–4,500/night). If you're choosing between one more night in Kyoto versus one night in Nara, choose Nara.",
    },
    {
      q: "How do Nara's deer bow? Is it real?",
      a: "The bowing behaviour is real and spontaneous, not trained. Nara's deer (sika deer, Cervus nippon) have been fed by humans for over 1,000 years and developed a 'soliciting bow' as a social behaviour learned from watching humans bow to each other. When you hold up shika sembei crackers (available from vendors in the park for ¥200), the deer bow in anticipation of receiving food. The behaviour is reciprocal: if you bow first, many deer bow back. This is a documented ethological phenomenon studied in academic literature.",
    },
    {
      q: "What is the best time of year to visit Nara?",
      a: "Spring (late March to early April) for cherry blossoms in the park — the combination of blooming cherry trees and deer is genuinely extraordinary. October and November for autumn colours (koyo) — the maple trees in Kasugayama Forest and around the temples are stunning. Summer (June–August) is hot and humid but the early mornings are beautiful. Winter has the Lantern Festivals in February and far fewer tourists. Avoid Golden Week (late April to early May) and Obon (mid-August) if you dislike extreme crowds.",
    },
  ],
  combineWith: ["kyoto-4-days", "osaka-3-days", "hiroshima-2-days"],
  relatedSlugs: ["kyoto-4-days", "osaka-3-days", "tokyo-5-days", "hiroshima-2-days"],
  galleryQuery: "nara japan deer park todaiji temple kasuga shrine autumn spring",
};

export const metadata: Metadata = {
  title: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026 Guide)",
  description:
    "Complete Nara 2-day itinerary: feed 1,300 sacred deer, see the world's largest wooden building, walk Kasuga Taisha's 3,000 lanterns, and explore Naramachi. Budget to luxury, real costs.",
  keywords: [
    "nara itinerary 2 days",
    "nara travel guide 2026",
    "nara deer park",
    "todaiji great buddha nara",
    "kasuga taisha shrine nara",
    "nara day trip from kyoto",
    "nara overnight stay",
    "japan ancient capital nara",
    "nara budget guide",
    "yoshikien garden nara",
  ],
  openGraph: {
    title: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026)",
    description:
      "Feed 1,300 sacred deer at dawn, stand before a 15-metre bronze Buddha in the world's largest wooden building, and walk stone-lantern corridors — the complete Nara guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nara Japan deer bowing in front of Todai-ji Temple",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nara in 2 Days — Japan's Deer Capital (2026)",
    description: "Sacred deer, Great Buddha, 3,000 lanterns, and a town that feels like 752 AD. The complete Nara guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nara-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
      description:
        "A complete 2-day Nara itinerary covering Nara Park, Tōdai-ji Great Buddha, Kasuga Taisha shrine, Yoshikien and Isuien gardens, Naramachi merchant quarter, Kasugayama primeval forest, and Shin-Yakushi-ji temple.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nara 2 Days",
          item: "https://www.incredibleitinerary.com/blog/nara-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nara, Japan",
      description:
        "Japan's first permanent capital (710–784 AD), home to 1,300 wild sacred deer, the world's largest wooden building containing a 15-metre bronze Buddha, Kasuga Taisha shrine with 3,000 lanterns, and a primeval forest untouched for 1,300 years.",
      touristType: ["Cultural travellers", "History enthusiasts", "Wildlife experience seekers", "Japan travel lovers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.6851,
        longitude: 135.8048,
      },
    },
  ],
};

export default function NaraPage() {
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
