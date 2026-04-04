import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Taipei",
  country: "Taiwan",
  countryFlag: "🇹🇼",
  slug: "taipei-4-days",
  heroQuery: "taipei 101 taiwan night market skyline",
  heroAlt: "Taipei 101 tower illuminated at night with city skyline Taiwan",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Taipei is the most underrated city in Asia — a compact, walkable metropolis where a $3 bowl of beef noodle soup ranks alongside any Michelin-starred restaurant for satisfaction, where an ancient cliff village straight out of a Miyazaki film sits 90 minutes from the city centre, and where the night markets operate with the intensity of a religious calling. Four days is enough to cover the essentials: Chiang Kai-shek Memorial, Taipei 101, the ghostly lanes of Jiufen, the sky lanterns of Shifen, and at least one full evening of competitive eating through Shilin Night Market.",
  stats: {
    duration: "4 Days",
    budgetFrom: "NT$800",
    bestMonths: "Sep–Nov, Mar–May",
    airport: "TPE (Taiwan Taoyuan International)",
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
        ["Visa Policy (Check Current)", "Taiwan's visa policy for Indian nationals changes periodically. As of 2026, Indian passport holders with valid US, UK, EU, Australian, Canadian, or Japanese visas may be eligible for visa-free or visa-on-arrival entry. Check the Taiwan Bureau of Consular Affairs (boca.gov.tw) for the most current rules before booking."],
        ["eVisa Option", "An e-visa may be available for Indian nationals at evisa.boca.gov.tw. Processing typically takes 5–7 business days. Fee: approximately NT$1,700–2,400. Upload your passport, photo, accommodation confirmation, and return ticket. Approval rate is high for travellers with clean visa histories."],
        ["Key Documents at Entry", "Bring your passport (valid 6 months beyond return date), confirmed hotel booking, return ticket, and proof of sufficient funds. Immigration at TPE (Taoyuan Airport) is thorough but efficient. Have your first-night accommodation address written down."],
        ["Practical Entry Tips", "TPE (Taiwan Taoyuan) is your arrival airport — it's 40km from central Taipei. The Airport MRT Express takes 35 minutes to Taipei Main Station (NT$160). Buy an EasyCard at the airport MRT station and load NT$500 immediately — it covers all Taipei MRT rides, bus trips, and many convenience store purchases."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "USA, UK, Canada, Australia, New Zealand, EU, and most Western passport holders can enter Taiwan visa-free for up to 90 days. No prior application required — simply show your passport at immigration. Taiwan processes visa-free entry efficiently; immigration at TPE typically takes under 20 minutes."],
        ["No ETIAS Equivalent", "Unlike Europe, Taiwan has no pre-authorization system for visa-free travellers. Simply arrive with a valid passport, a return ticket, and accommodation confirmed. You may be asked to show these at the immigration desk."],
        ["EasyCard at Airport", "Pick up an EasyCard (NT$100 card + load NT$500) at the Airport MRT station inside Terminal 1 or 2. This card covers all Taipei MRT rides (NT$20 flat for most city journeys), buses, the Maokong Gondola, and purchases at 7-Eleven, FamilyMart, and most convenience stores."],
        ["Safety & Environment", "Taiwan is consistently ranked one of Asia's safest travel destinations. Petty crime is exceptionally rare. The main hazard is typhoon season (June–October) — check CWA Taiwan (cwa.gov.tw) for any typhoon warnings if visiting between those months. Severe typhoons typically give 48–72 hours of public warning."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "NT$800–1,400/day",
      days: [
        {
          day: "Day 1",
          title: "CKS Memorial, National Palace Museum & Shilin Night Market",
          items: [
            "9:00am — Chiang Kai-shek Memorial Hall (free). The massive white marble complex with its blue-glazed roof and 89-step staircase dominates Liberty Square. The changing of the guard inside the main hall happens every hour on the hour — precise, theatrical, worth timing your visit around. The square itself is a canvas for Taiwanese political expression and public life.",
            "10:30am — National Palace Museum (NT$350) — holds one of the world's greatest collections of Chinese art, accumulated over thousands of years and transported to Taiwan in 1948. The Jadeite Cabbage and the Meat-Shaped Stone are the two most famous objects (small, perfect, inexplicably moving). Budget 2.5–3 hours; the collection is inexhaustible.",
            "1:00pm — Lunch at the museum's café or take the bus to Zhongshan District for a proper beef noodle soup (NT$150–200) at a neighbourhood restaurant. Zhongshan has excellent Japanese-influenced cafés and covered arcades ideal for an afternoon browse.",
            "3:30pm — Zhongshan District afternoon: the Red House (former Qing Dynasty marketplace), second-hand bookshops, and the distinctive covered shopping arcades that run for blocks. Very little English signage — which is part of the charm.",
            "7:00pm — Shilin Night Market (largest in Taipei; take MRT to Jiantan station). The market runs two zones: the official food court underground (NT$30–80 per dish) and the sprawling street market outside. Eat: oyster vermicelli (蚵仔麵線, NT$50), stinky tofu (NT$50 — the smell is alarming, the taste is extraordinary), scallion pancake with egg (NT$50), and bubble milk tea (50嵐 or Tiger Sugar, NT$55–75). Budget NT$300–500 for a full market feed.",
          ],
          cost: "NT$700–1,000 total",
        },
        {
          day: "Day 2",
          title: "Taipei 101, Yongkang Street & Ximending",
          items: [
            "9:30am — Taipei 101 (NT$600 observatory). Arrive early to beat the midday rush. The express lift reaches the 89th floor in 37 seconds — the pressure equalisation system makes your ears pop. At 508 metres, the view on a clear day extends to the mountains surrounding Taipei's basin. The damper ball on the 87th floor (660 tonnes of steel suspended to counteract wind and earthquake sway) is one of the most visually striking pieces of civil engineering you can stand next to.",
            "11:00am — Xinyi shopping district around Taipei 101: SOGO Xinyi, Breeze Xinyi, and the cluster of department stores are all walkable. Browse even if you don't buy — Taiwanese retail has interesting domestic fashion brands.",
            "1:00pm — Da'an Forest Park (free) — Taipei's Central Park equivalent, with tai chi practitioners, joggers, and a pond full of turtles. A 20-minute walk through a genuinely beautiful urban forest.",
            "2:00pm — Yongkang Street (MRT Dongmen): Taipei's most pleasant eating and shopping street. Din Tai Fung's original flagship is here (expect a queue for xiao long bao; NT$210–250 for a basket of 10). For the budget version, nearby Lin Dong Fang Beef Noodle (NT$170–250) is equally celebrated. Mango shaved ice at Ice Monster (NT$250) or Smoothie House.",
            "5:00pm — Ximending pedestrian zone (MRT Ximen): Taipei's Harajuku-equivalent — a maze of pop culture shops, bubble tea stands, street food, and independent fashion. Notably LGBTQ-friendly by Taiwanese standards. Good for evening grazing: sweet potato balls (NT$30), grilled corn (NT$50), sausage with garlic (NT$45).",
          ],
          cost: "NT$750–1,100 total",
        },
        {
          day: "Day 3",
          title: "Jiufen & Shifen Day Trip",
          items: [
            "8:30am — Take MRT to Zhongxiao Fuxing station, then bus 1062 direct to Jiufen (1.5 hours, NT$90 each way). Depart early — Jiufen's narrow lanes become packed with day-trippers after 11am.",
            "10:00am — Jiufen old street: a former gold-mining village clinging to a cliff above the Pacific Ocean. The tea houses layered into the hillside with red lanterns and Pacific views are the direct inspiration for Spirited Away's bathhouse (though Studio Ghibli officially denies it, the visual correspondence is undeniable). Eat: taro balls in sweet soup (NT$60), peanut-wrapped mochi (NT$50), fish balls (NT$30).",
            "12:30pm — Tea at A-Mei Tea House (most famous, NT$200–350/person including tea and basic snacks). The views over the Pacific from the terrace tables on a clear day are among the best in Taiwan. Sit for an hour with a pot of Taiwanese oolong and watch the coast.",
            "2:00pm — Bus or shared taxi from Jiufen to Shifen (20–30 min, NT$30–50). Shifen: a narrow village built along an active rail track — trains pass through the main street at walking pace, inches from the shopfronts. Release a sky lantern (NT$150 each; vendors provide markers and help with the ritual) over the track. The lanterns carry wishes skyward above the valley.",
            "4:00pm — Shifen Waterfall (15-minute walk, NT$80 entry) — Taiwan's widest waterfall, nicknamed the 'Little Niagara'. At full flow after rain, the spray reaches the viewing platforms.",
            "5:30pm — Return bus to Taipei (1.5 hours). Dinner at Raohe Street Night Market (different from Shilin — smaller, more local, excellent pepper buns baked in a wood-fired drum oven, NT$55).",
          ],
          cost: "NT$600–900 total",
        },
        {
          day: "Day 4",
          title: "Elephant Mountain, Longshan Temple & Maokong",
          items: [
            "6:00am — Elephant Mountain (free hike, 20–30 minutes up from MRT Xiangshan exit 2). Taipei's most beloved viewpoint: a series of rocky outcrops above the city where Taipei 101 frames perfectly against the basin of mountains behind. Arrive at sunrise to have the rocks to yourself and catch the morning light on the tower. Bring water; the steps are steep.",
            "9:00am — Breakfast at a traditional Taiwanese breakfast shop: fan tuan (rice roll with egg and dried pork floss, NT$35–45), soy milk (NT$25), scallion egg pancake (NT$35). These shops typically close by 10am.",
            "10:30am — Longshan Temple (free, MRT Longshan Temple) — Taipei's most important Buddhist/Taoist temple, founded in 1738. The incense smoke, the sound of chanting, the layered deities in the main hall — this is living religion, not a museum. Pick up a fortune stick (qian) and have it interpreted at the adjacent fortune teller.",
            "12:00pm — Bopiliao Historic Block (free, adjacent to Longshan Temple) — a well-preserved Qing Dynasty commercial street with brick facades and arched shopfronts. Peaceful contrast to the temple activity next door.",
            "2:00pm — Maokong Gondola (NT$120 each way from Taipei Zoo station, MRT Wanfang Community). The cable car rises over Taipei's southern hills to mountain tea plantations. Have afternoon tea with mountain-grown Tieguanyin oolong in one of the hillside tea houses (NT$200–400/person). The view of Taipei basin from the mountain rim at dusk is exceptional.",
            "7:00pm — Return to central Taipei. Farewell hot pot (火鍋): Little Sheep or Mala Hot Pot in Ximending or Zhongshan (NT$350–500/person) — a shared boiling broth pot in which you cook thinly sliced beef, tofu, vegetables, and dumplings at the table. A perfect, communal final meal.",
          ],
          cost: "NT$600–900 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "NT$2,500–4,500/day",
      days: [
        {
          day: "Day 1",
          title: "National Palace Museum Private Tour & Daan Dining",
          items: [
            "9:00am — National Palace Museum with a licensed English-speaking docent guide (NT$1,500–2,500/person for 2-hour private tour + entry). Understanding the historical context of the collection — the 1948 civil war evacuation of 700,000 artifacts from Beijing — transforms the experience from browsing to witnessing.",
            "12:00pm — Lunch at Raw (NT$1,200–1,800 lunch tasting menu, book weeks ahead) — Chef André Chiang's casual fine-dining spin-off with modern Taiwanese flavours. One of Taipei's hardest reservations and one of its most rewarding meals.",
            "3:00pm — Zhongshan District: explore the Japanese colonial-era arcades and independent design boutiques on Chifeng Street. Many of Taiwan's most interesting product designers have studios here.",
            "5:00pm — Chiang Kai-shek Memorial Hall at dusk — the changing of the guard at sunset is particularly atmospheric when the square is gold-lit.",
            "7:30pm — Dinner at Din Tai Fung flagship (Xinyi, NT$600–1,000/person): the original location of the chain now considered the world standard for xiao long bao. Order the crab roe soup dumplings if available, the shrimp wonton soup, and the red bean rice cake for dessert.",
          ],
          cost: "NT$2,500–3,500 total",
        },
        {
          day: "Day 2",
          title: "Taipei 101 Sunrise + Yongkang Deep Dive",
          items: [
            "7:00am — Taipei 101 at opening (first lift: 9am, but arrive at 8:45am). Morning light on a clear day means you can see the mountains surrounding the Taipei basin and occasionally Mt. Jade's silhouette on the horizon.",
            "10:00am — Xinyi District: Eslite Spectrum Songyan (eslite bookshop chain, best lifestyle bookshop in Asia — architecture, design, music, vinyl, artisan stationery). Buy something.",
            "1:00pm — Yongkang Street: Din Tai Fung for a proper sit-down lunch (NT$800–1,200/person) or explore the independent ramen, Taiwanese beef noodle, and dessert shops that fill the surrounding streets.",
            "3:30pm — Da'an District cafés: Rufous Coffee, Fika Fika, or Simple Kaffa (Taiwan's internationally celebrated specialty roasters) for one of Asia's best coffee scenes. NT$180–250/cup.",
            "7:00pm — Ximending evening: sky bar at one of the upper-floor hotels (Indie Hostel's rooftop, or the rooftop bar at W Taipei for NT$400–700/cocktail), then dinner at a mid-range Taiwanese restaurant in Wanhua for three-cup chicken (三杯雞), oyster omelette, and braised pork rice.",
          ],
          cost: "NT$2,200–3,200 total",
        },
        {
          day: "Day 3",
          title: "Jiufen, Shifen & Private Tea Ceremony",
          items: [
            "8:00am — Private car or taxi to Jiufen (NT$1,500–2,000 for a half-day hire) — arrive before the tour buses and have the lantern-lit stairways to yourself.",
            "11:00am — Private tea ceremony in a Jiufen tea house: a specialist will walk you through the gongfu cha preparation ritual — the sequence of rinses, steeping times, and tasting stages for high-mountain oolong. NT$400–600/person.",
            "1:00pm — Shifen sky lanterns and waterfall, then return via Nine Turns Gorge scenic route (driver will know it).",
            "5:00pm — Back in Taipei. Hot springs session in Beitou District (MRT Xinbeitou): Taipei has natural geothermal hot springs in its northern hills. Millennium Hot Spring (public, NT$40–80) or private room at one of the traditional hot spring hotels (NT$600–1,200 for 1 hour).",
            "8:00pm — Dinner at Addiction Aquatic Development (Zhongshan, NT$1,000–1,800/person): a curated seafood market-restaurant complex where you browse live tanks and select your fish for preparation. One of Taipei's most original dining formats.",
          ],
          cost: "NT$3,000–4,500 total",
        },
        {
          day: "Day 4",
          title: "Tamsui, Elephant Mountain & Farewell Omakase",
          items: [
            "8:30am — Elephant Mountain at sunrise for 101 photos, then breakfast in the Da'an neighbourhood.",
            "11:00am — MRT to Tamsui (end of the Red Line, 40 minutes): a former colonial trading port on the mouth of the Tamsui River. The Dutch fort Fort Santo Domingo (NT$80), Japanese-era buildings, and the fish ball soup (NT$60) on the Old Street are all excellent.",
            "1:30pm — Tamsui Fisherman's Wharf: iron bridge over the river mouth, sunset point for later, and a seafood lunch at the riverside restaurants (NT$400–700/person).",
            "3:30pm — Return to Taipei. Afternoon at leisure: final souvenir shopping (pineapple cakes NT$30–60 each at Sunnyhills or ChiaTe — the two most respected brands; get a box of 10 for NT$540–650).",
            "7:00pm — Farewell dinner: an omakase Japanese-Taiwanese fusion or a proper Cantonese seafood dinner in the Zhongshan restaurant cluster. Budget NT$1,500–2,500/person for a special final meal. Order the Taiwanese whisky (Kavalan distillery, produced in Yilan) as a nightcap.",
          ],
          cost: "NT$2,500–3,800 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "NT$8,000–20,000/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Cultural Tour & Michelin Dinner",
          items: [
            "Arrive at TPE and transfer by private car to central Taipei (NT$1,500–2,500). Check in to the Mandarin Oriental Taipei (Zhongshan, rates NT$12,000–25,000/night) or Grand Hyatt Taipei (Xinyi, adjacent to Taipei 101, NT$8,000–20,000/night).",
            "Afternoon: private half-day cultural tour with an English-speaking Taiwanese cultural historian — National Palace Museum including restricted collection areas (arrange through concierge), Chiang Kai-shek Memorial, and Longshan Temple with ritual context. NT$5,000–8,000 for a 4-hour private arrangement.",
            "7:30pm — Dinner at JL Studio (1 Michelin star, Zhongshan): Singaporean-Taiwanese Chef Jimmy Lim's tasting menu blending Southeast Asian flavour memory with premium Japanese technique and Taiwanese ingredients. NT$3,500–5,000/person. One of Asia's most distinctive menus.",
          ],
          cost: "NT$8,000–15,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Taipei 101 Private Access & Mountain Hot Springs",
          items: [
            "9:00am — Taipei 101 private VIP access (arrange through hotel concierge — the outdoor deck on the 91st floor can be accessed through special arrangement; normally closed to general public). NT$3,000–5,000 for the arrangement.",
            "12:00pm — Lunch at Le Palais (Palais de Chine Hotel, 2 Michelin stars): Cantonese haute cuisine with an extraordinary wine cellar. The Peking duck (2-person minimum, served ceremonially) and braised abalone are the signature dishes. NT$3,000–5,000/person.",
            "3:00pm — Private tea master session at a mountaintop tea farm in Pinglin (45 min drive): learn the gongfu cha ceremony, taste six Taiwanese teas in sequence (green, oolong, Oriental Beauty, Alishan, Lishan, aged pu-erh), and take home 150g of your favourite. NT$3,000–5,000 for the private session.",
            "7:00pm — Beitou luxury hot springs: check in to the Beitou Thermal Resort for a private outdoor spring room (NT$2,500–4,000/couple) with mineral water piped directly from the geothermal source.",
            "9:00pm — Return to Taipei. Nightcap at Indulge Experimental Bistro (Zhongshan) — Taiwan's most acclaimed cocktail bar. NT$500–800 per creative cocktail.",
          ],
          cost: "NT$12,000–20,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Jiufen, East Coast Cliffs & Night Market VIP",
          items: [
            "7:00am — Private car to Jiufen before the market opens (NT$3,000–4,000 for day hire). The lanes at 7am, lanterns still lit, mist over the Pacific, no other visitors — a completely different experience from the afternoon tourist scene.",
            "9:00am — Drive south along Taiwan's northeast coast (Bitou Cape, Longdong Bay, Nanya rock formations) — this coastline is one of Asia's most dramatic and almost unknown to international tourists.",
            "1:00pm — Lunch at a seaside restaurant in Fulong or Gongliao: fresh squid, abalone congee, and sea urchin rice bowl, NT$800–1,500/person.",
            "4:00pm — Shifen sky lanterns at the golden hour (private guide, premium hand-painted lanterns, NT$500–800 per lantern).",
            "7:00pm — Return to Taipei. Private Shilin Night Market VIP experience with a local food journalist guide (NT$3,000–4,500/person): a curated eat-through of the best vendors, history of each dish, and access to the back-street stalls that no tourist map shows.",
          ],
          cost: "NT$10,000–16,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Farewell Brunch & André Chiang Experience",
          items: [
            "9:00am — Elephant Mountain sunrise with a private photography guide (NT$3,000–4,500): a professional photographer accompanies you for the sunrise, guides composition, and delivers edited photos within 24 hours.",
            "11:00am — Farewell brunch at Alchemy (Grand Hyatt Taipei) with Kavalan single cask whisky tasting: NT$1,500–2,500/person.",
            "2:00pm — Final souvenir curation: Sunnyhills pineapple cakes (flagship store in Zhongshan, NT$60/cake), Kavalan whisky from the store in Zhongshan (the Soloist series, NT$2,500–4,000/bottle), and a ceramic piece from one of the Yingge Ceramics District producers.",
            "7:00pm — Farewell dinner at Raw (book 4+ weeks ahead, NT$2,800–4,200/person for the full tasting menu with wine pairing): Chef André Chiang's flagship modern Taiwanese tasting menu — the definitive expression of contemporary Taiwanese gastronomy.",
            "Private car to TPE for your departure. The Mandarin Oriental concierge will have your luggage collected, boarding passes printed, and a box of pineapple cakes for the flight.",
          ],
          cost: "NT$12,000–20,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "NT$400–700",
      food: "NT$200–400",
      transport: "NT$80–150",
      activities: "NT$150–300",
      total: "NT$830–1,550/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "NT$1,500–3,000",
      food: "NT$700–1,500",
      transport: "NT$200–400",
      activities: "NT$500–1,000",
      total: "NT$2,900–5,900/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "NT$8,000–20,000",
      food: "NT$2,000–6,000",
      transport: "NT$500–2,000",
      activities: "NT$2,000–5,000",
      total: "NT$12,500–33,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🏔️",
      title: "Skipping Jiufen Because It Sounds Like a Day Trip",
      desc: "Every traveller who skips Jiufen to 'save time' later ranks it as their biggest Taipei regret. The cliff-hanging tea houses above the Pacific, the narrow red-lantern stairways, the atmosphere of a place outside of time — there is nothing else like it in Taiwan. The bus takes 90 minutes each way and costs NT$90. Go on a weekday to avoid tour groups. If you're visiting in the afternoon, Jiufen at dusk as the lanterns light up is as magical as advertised.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🦨",
      title: "Refusing the Stinky Tofu at Night Markets",
      desc: "Stinky tofu (臭豆腐) is Taiwan's most confronting and most rewarding street food. The smell — a deep, organic fermentation note detectable from 50 metres — accurately describes what you're about to eat, but the flavour is crispy, savoury, and complex in a way that nothing else replicates. Every night market stall has a queue. Order the fried version (NT$50) rather than the soup version for a first try. It will smell like a problem; it will taste like a revelation.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💵",
      title: "Arriving Without NT$ Cash for Night Markets",
      desc: "Taiwan's night markets — including Shilin, Raohe, and most smaller neighbourhood markets — operate almost entirely on cash. While convenience stores and restaurants increasingly accept cards, the market stalls selling oyster vermicelli, stinky tofu, scallion pancakes, and pearl milk tea typically do not. Withdraw NT$3,000–5,000 at the airport ATM or bank on Day 1. 7-Eleven and FamilyMart ATMs reliably accept foreign cards with no surcharge.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌄",
      title: "Elephant Mountain at Sunrise for the Best 101 Photo",
      desc: "The viewpoint at Elephant Mountain (Xiangshan) frames Taipei 101 perfectly against the Taipei basin and surrounding mountains — it's the photo that defines Taipei on Instagram. The trick is arriving before 6:30am: you'll have the rocky outcrops to yourself (later, queues form for the photo spots), the city is still quiet below, and the morning light hits the tower's green glass in a way that afternoon light never replicates. The hike from MRT Xiangshan is 20–25 minutes.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "📅",
      title: "Jiufen on a Weekday Avoids Tour Group Chaos",
      desc: "Jiufen's narrow stairway lanes can hold perhaps 50 people comfortably. On a peak Saturday in October, several thousand visitors arrive by bus. A Tuesday or Wednesday visit in September or May gives you almost exclusive access to the tea house terraces and the best views without anyone elbowing you for the same photograph. Take the 1062 bus from Zhongxiao Fuxing at 8:30am, arrive before 10am, and leave before 1pm when the tour groups arrive.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌙",
      title: "Shilin Night Market: Arrive at 7pm Before the Crowds",
      desc: "Shilin Night Market gets genuinely gridlocked after 9pm on weekends. Arriving at 7pm means you can move freely, find seats at the indoor food court, and get the best stalls before they sell out. The famous oyster omelette stall (蚵仔煎) at the Jihe Road entrance runs out by 8:30pm on busy nights. Eat first (underground food court), then browse the clothing and electronics market above — reverse of the usual tourist route.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Taiwan safe to visit given its political situation?",
      a: "Taiwan is extremely safe for tourists. Cross-strait tensions between Taiwan and mainland China are a geopolitical reality, but they have zero impact on daily life in Taipei or any other part of the country. Taiwan has been a functioning democracy since 1996 and is one of the most stable societies in Asia. The Taiwan Tourism Bureau and major international governments consistently rate Taiwan as safe for travel. Typhoon season (June–October) is the main practical hazard — check weather before travelling.",
    },
    {
      q: "Do Indian passport holders need a visa for Taiwan?",
      a: "Taiwan's visa policy for Indian nationals has evolved. Indian passport holders holding valid US, UK, EU, Australian, Canadian, or Japanese visas may enter Taiwan visa-free or on arrival for up to 14–30 days (terms vary). An e-visa is available at evisa.boca.gov.tw. Check the Taiwan Bureau of Consular Affairs at boca.gov.tw for the current rules before booking — this policy changes and the website shows the most current requirements.",
    },
    {
      q: "Which night market is the best in Taipei?",
      a: "Each night market has a different character. Shilin is the largest and most internationally famous — good for first-timers, extremely diverse, overwhelming in a good way. Raohe Street Night Market (smaller, more local) is excellent for pepper buns and a more relaxed pace. Ningxia Night Market in Zhongshan is where Taipei's food media actually eats — oyster vermicelli, pig's blood cake, and braised pork rice at the level that earns Michelin Bib Gourmand listings. If you can only do one: Raohe or Ningxia for quality; Shilin for the full theatrical experience.",
    },
    {
      q: "Taipei vs Tainan — which is better for a Taiwan trip?",
      a: "Taipei for a first visit; Tainan for a second. Taipei has the museums, Taipei 101, the famous day trips (Jiufen, Shifen), and the infrastructure that makes a first Taiwan visit easy. Tainan is Taiwan's oldest city — temple-dense, food-obsessed (Tainan is considered the culinary capital of Taiwan), and deeply unhurried in a way Taipei is not. If you have 7+ days, spend 4 in Taipei and 3 in Tainan via HSR (1h45min, NT$738). The contrast between the two cities is Taiwan's full breadth.",
    },
    {
      q: "Is typhoon season a problem for visiting Taipei?",
      a: "Taiwan's typhoon season runs June through October, peaking August–September. On average, 3–5 significant typhoons affect Taiwan annually. A direct hit on Taipei can shut down MRT, flights, and outdoor activities for 1–2 days. The weather bureau (CWA) gives 48–72 hours of advance warning and the government issues colour-coded alerts. Realistically, the chance of a typhoon directly disrupting your specific travel week is low — but buy travel insurance that covers natural disasters. September and October have the highest typhoon frequency but also some of the best weather between storms.",
    },
  ],
  combineWith: ["seoul-5-days", "hong-kong-4-days", "tokyo-5-days"],
  relatedSlugs: ["seoul-5-days", "tokyo-5-days", "hong-kong-4-days", "kyoto-4-days"],
  galleryQuery: "taipei taiwan taipei 101 jiufen night market shifen lanterns",
};

export const metadata: Metadata = {
  title: "Taipei in 4 Days: Night Markets, Jiufen, Taipei 101 & Hot Springs (2026)",
  description: "Complete Taipei 4-day guide with Jiufen day trip, Shilin Night Market tips, Taipei 101 booking, sky lanterns in Shifen, and real NT$ costs for every budget.",
  keywords: [
    "taipei itinerary 4 days",
    "taipei travel guide 2026",
    "jiufen day trip taipei",
    "shilin night market guide",
    "taipei 101 observatory",
    "shifen sky lanterns",
    "taiwan travel guide",
    "taipei budget travel",
  ],
  openGraph: {
    title: "Taipei in 4 Days: Night Markets, Jiufen & Taipei 101 (2026)",
    description: "Jiufen at dawn, sky lanterns in Shifen, Taipei 101 at sunrise, and the full Shilin Night Market eat-through — complete 4-day guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Taipei 101 Taiwan night skyline",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taipei in 4 Days (2026)",
    description: "Night markets, Jiufen, Taipei 101, and sky lanterns — complete NT$ cost guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/taipei-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Taipei in 4 Days: Night Markets, Jiufen, Taipei 101 & Hot Springs (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&q=80",
      description:
        "Complete 4-day Taipei itinerary covering Taipei 101, Jiufen, Shifen sky lanterns, night markets, Elephant Mountain, and Maokong Gondola for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Taipei 4 Days",
          item: "https://www.incredibleitinerary.com/blog/taipei-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Taipei, Taiwan",
      description:
        "Taiwan's vibrant capital — a city of world-class night markets, ancient temples, dramatic mountain day trips, and a food culture that produces some of Asia's most celebrated street food and fine dining.",
      touristType: ["Food lovers", "Cultural tourists", "Photography enthusiasts", "Night market explorers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.033,
        longitude: 121.5654,
      },
    },
  ],
};

export default function TaipeiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
