"use client";
import { useState } from "react";
import Link from "next/link";

// ─── MONTHLY GOALS ────────────────────────────────────────────────────────────

const MONTHLY_GOALS = [
  {
    month: "Apr 2026", phase: 1, posts: 12, cumPosts: 374,
    traffic: "0 → 500", backlinks: 12, revenue: "₹0",
    milestones: ["Submit all 362 posts to GSC", "First 12 Reddit answers live", "First GSC impressions appear"],
    strategy: "Foundation — submit, answer Reddit, publish aggressively",
  },
  {
    month: "May 2026", phase: 1, posts: 12, cumPosts: 386,
    traffic: "500 → 2K", backlinks: 36, revenue: "₹500–2K",
    milestones: ["First affiliate click tracked", "50 total backlinks", "Newsletter signup form live"],
    strategy: "Double down on whatever posts get first impressions",
  },
  {
    month: "Jun 2026", phase: 1, posts: 12, cumPosts: 398,
    traffic: "2K → 6K", backlinks: 60, revenue: "₹2K–8K",
    milestones: ["First ₹1K affiliate commission", "5K monthly visits milestone", "PDF #11 and #12 published"],
    strategy: "Identify top 10 performing posts — update them first",
  },
  {
    month: "Jul 2026", phase: 1, posts: 10, cumPosts: 408,
    traffic: "6K → 12K", backlinks: 85, revenue: "₹5K–15K",
    milestones: ["10K monthly visits", "Media kit page live", "Apply to Google AdSense"],
    strategy: "Focus SEO on posts getting 50+ impressions but not clicking",
  },
  {
    month: "Aug 2026", phase: 1, posts: 10, cumPosts: 418,
    traffic: "12K → 20K", backlinks: 110, revenue: "₹10K–25K",
    milestones: ["AdSense live", "20K monthly visits", "Email list: 200 subscribers"],
    strategy: "Internal linking audit — every new post links to 5 existing posts",
  },
  {
    month: "Sep 2026", phase: 1, posts: 10, cumPosts: 428,
    traffic: "20K → 30K", backlinks: 140, revenue: "₹15K–35K",
    milestones: ["25K monthly visits (Phase 1 goal)", "Evaluate Mediavine eligibility", "Start writing SE Asia posts"],
    strategy: "Begin Phase 2 prep — 2 SE Asia posts alongside India work",
  },
  {
    month: "Oct 2026", phase: 2, posts: 12, cumPosts: 440,
    traffic: "30K → 40K", backlinks: 170, revenue: "₹20K–50K",
    milestones: ["Start Bali/Thailand guides", "Brand positioning update", "Custom itinerary service launches at ₹1,499"],
    strategy: "SE Asia pivot — 50% India, 50% SE Asia posts",
  },
  {
    month: "Nov 2026", phase: 2, posts: 12, cumPosts: 452,
    traffic: "40K → 55K", backlinks: 200, revenue: "₹35K–80K",
    milestones: ["50K sessions — Mediavine application", "Japan guides complete", "Display ads live"],
    strategy: "Traffic compounding — old posts now ranking, focus on CTR optimization",
  },
  {
    month: "Dec 2026", phase: 2, posts: 10, cumPosts: 462,
    traffic: "55K → 70K", backlinks: 235, revenue: "₹60K–1.2L",
    milestones: ["₹1L/month first time", "Mediavine approved and live", "200 email subscribers"],
    strategy: "Peak travel season — update all India winter posts with 2026–27 prices",
  },
  {
    month: "Jan 2027", phase: 2, posts: 10, cumPosts: 472,
    traffic: "70K → 90K", backlinks: 270, revenue: "₹80K–1.5L",
    milestones: ["Europe research begins", "Hire first freelance researcher", "Pinterest account active"],
    strategy: "Diversify traffic sources — Pinterest for visual destination content",
  },
  {
    month: "Feb 2027", phase: 2, posts: 10, cumPosts: 482,
    traffic: "90K → 120K", backlinks: 310, revenue: "₹1L–2L",
    milestones: ["100K monthly visits milestone", "First sponsorship inquiry", "PDF bundle launched"],
    strategy: "Content upgrades — add video embeds to top 20 posts",
  },
  {
    month: "Mar 2027", phase: 2, posts: 10, cumPosts: 492,
    traffic: "120K → 150K", backlinks: 350, revenue: "₹1.5L–3L",
    milestones: ["Phase 2 complete: 50+ country coverage", "Apply to Raptive premium", "Hire second researcher"],
    strategy: "Prepare Phase 3 — selective global expansion with quality bar",
  },
];

// ─── WEEKLY SCHEDULE ─────────────────────────────────────────────────────────

const WEEKLY_SCHEDULE = [
  // MONTH 1 — APRIL 2026
  {
    week: "Week 1 — Apr 7–13",
    month: "April 2026",
    theme: "Northeast India begins + submit all to GSC",
    posts: [
      { dest: "Tawang, Arunachal Pradesh — 4 Days", type: "India", why: "Highest-altitude monastery, zero good guides online" },
      { dest: "Valley of Flowers Trek — 3 Days", type: "India", why: "UNESCO, huge search volume, seasonal (Jul–Sep best time)" },
      { dest: "Jim Corbett National Park — 2 Days", type: "India", why: "Most famous wildlife reserve, massive search volume" },
    ],
    nonContent: ["Submit 15 posts/day to GSC (days 1–15 of month)", "Answer 3 Reddit travel questions linking to your guides"],
  },
  {
    week: "Week 2 — Apr 14–20",
    month: "April 2026",
    theme: "Northeast India + Assam wildlife",
    posts: [
      { dest: "Kaziranga National Park — 2 Days", type: "India", why: "One-horned rhino, UNESCO, underwritten online" },
      { dest: "Majuli Island, Assam — 2 Days", type: "India", why: "World's largest river island, unique Vaishnavite culture" },
      { dest: "Ziro Valley, Arunachal — 3 Days", type: "India", why: "Hidden gem, UNESCO tentative list, zero competition" },
    ],
    nonContent: ["Continue GSC submissions (15/day)", "Answer 3 more Reddit questions", "Set up Google AdSense account"],
  },
  {
    week: "Week 3 — Apr 21–27",
    month: "April 2026",
    theme: "South India gaps — Tamil Nadu hills",
    posts: [
      { dest: "Ooty — 3 Days", type: "India", why: "One of India's most searched hill stations — you're missing it" },
      { dest: "Mysore — 2 Days", type: "India", why: "Dasara capital, palace, huge search volume, palace is spectacular" },
      { dest: "Coonoor — 2 Days", type: "India", why: "Quieter alternative to Ooty, tea estates, Nilgiris rail" },
    ],
    nonContent: ["First audit: which posts appear in GSC at all", "Update siteStats.ts if guide count changes"],
  },
  {
    week: "Week 4 — Apr 28–May 4",
    month: "April 2026",
    theme: "Maharashtra heritage",
    posts: [
      { dest: "Ajanta & Ellora Caves, Aurangabad — 3 Days", type: "India", why: "UNESCO, #1 Maharashtra attraction after Mumbai, no quality guide exists" },
      { dest: "Lonavala & Khandala — 1 Day", type: "India", why: "Highest searched Maharashtra weekend from Mumbai/Pune" },
      { dest: "Mahabaleshwar — 2 Days", type: "India", why: "Maharashtra's most visited hill station, strawberry farms" },
    ],
    nonContent: ["Month 1 review: count total GSC impressions", "Answer 3 Reddit questions", "Email: set up signup with Mailchimp + free PDF offer"],
  },
  // MONTH 2 — MAY 2026
  {
    week: "Week 5 — May 5–11",
    month: "May 2026",
    theme: "Northeast India — remaining states",
    posts: [
      { dest: "Dzukou Valley Trek, Nagaland — 3 Days", type: "India", why: "Valley of flowers of Northeast, almost zero coverage" },
      { dest: "Aizawl, Mizoram — 2 Days", type: "India", why: "Most underwritten northeast state, unique Mizo culture" },
      { dest: "Imphal & Loktak Lake, Manipur — 2 Days", type: "India", why: "Floating island lake — Keibul Lamjao National Park is unique" },
    ],
    nonContent: ["Guest post pitch: email 5 Indian travel blogs for guest post collaboration", "Reddit: answer 3 more questions"],
  },
  {
    week: "Week 6 — May 12–18",
    month: "May 2026",
    theme: "Rajasthan deep dives — missing cities",
    posts: [
      { dest: "Bundi — 2 Days", type: "India", why: "Kipling's Rajasthan, step wells, blue-painted streets — criminally unknown" },
      { dest: "Chittorgarh — 1 Day", type: "India", why: "Largest fort in India, Rani Padmavati history, high search" },
      { dest: "Pushkar — 2 Days", type: "India", why: "Only Brahma temple in world, camel fair, backpacker circuit" },
    ],
    nonContent: ["PDF #11: Kerala Full Extended Guide (build this week)", "Check affiliate clicks in Booking.com dashboard"],
  },
  {
    week: "Week 7 — May 19–25",
    month: "May 2026",
    theme: "Himalayan treks — summer season push",
    posts: [
      { dest: "Kedarkantha Trek — 4 Days", type: "India", why: "Most popular winter trek, huge search volume Nov–Feb" },
      { dest: "Har Ki Dun Trek — 5 Days", type: "India", why: "Remote Garhwal valley, good summer (May–Jun) guide needed" },
      { dest: "Brahmatal Trek — 4 Days", type: "India", why: "Best winter Uttarakhand trek, no quality guide at this detail" },
    ],
    nonContent: ["Reddit: 3 answers specifically on trekking questions", "Update: add first-person voice to Delhi post (you've been there)"],
  },
  {
    week: "Week 8 — May 26–Jun 1",
    month: "May 2026",
    theme: "South India backwaters and coast",
    posts: [
      { dest: "Alleppey Houseboat — 2 Days", type: "India", why: "Highest searched Kerala experience, houseboat booking guide needed" },
      { dest: "Kochi Extended Guide — 3 Days", type: "India", why: "Fort Kochi, Jewish Synagogue, Chinese fishing nets — unique content" },
      { dest: "Gokarna — 3 Days", type: "India", why: "Alternative to Goa, growing fast, backpacker and spiritual crowd" },
    ],
    nonContent: ["Month 2 review: target 500 organic visits", "PDF #12: Leh Ladakh Complete Guide"],
  },
  // MONTH 3 — JUNE 2026
  {
    week: "Week 9 — Jun 2–8",
    month: "June 2026",
    theme: "Himachal hidden gems",
    posts: [
      { dest: "Kasol & Kheerganga — 3 Days", type: "India", why: "Backpacker capital of India, Parvati Valley, huge search" },
      { dest: "Tirthan Valley — 3 Days", type: "India", why: "Quiet alternative to Kasol, Great Himalayan National Park" },
      { dest: "Dalhousie & Khajjiar — 2 Days", type: "India", why: "'Mini Switzerland of India', very high search, weak competition" },
    ],
    nonContent: ["HARO signup: answer 2 journalist queries about India travel", "Reddit: 3 more answers"],
  },
  {
    week: "Week 10 — Jun 9–15",
    month: "June 2026",
    theme: "Uttarakhand summer — quiet hill stations",
    posts: [
      { dest: "Auli — 2 Days", type: "India", why: "India's best ski resort (Jan–Mar) + summer meadows" },
      { dest: "Binsar — 2 Days", type: "India", why: "Wildlife sanctuary, Himalaya viewpoint, Kumaon gem" },
      { dest: "Lansdowne — 2 Days", type: "India", why: "Peaceful cantonment town, 5 hours from Delhi, zero good guide" },
    ],
    nonContent: ["Internal link audit: every post from month 1 should link to 5 other posts", "Set up Pinterest account with 20 pins"],
  },
  {
    week: "Week 11 — Jun 16–22",
    month: "June 2026",
    theme: "Karnataka ancient heritage",
    posts: [
      { dest: "Badami, Aihole & Pattadakal — 2 Days", type: "India", why: "UNESCO Chalukya temples, almost zero competition in English" },
      { dest: "Kabini Wildlife Reserve — 2 Days", type: "India", why: "Best wildlife resort in South India, growing fast" },
      { dest: "Coorg Extended — 4 Days", type: "India", why: "You have 3-day guide — extend to 4-day, add coffee estate detail" },
    ],
    nonContent: ["Rajasthan Tourism Board outreach — ask for press resources/collaboration", "3 Reddit answers on South India"],
  },
  {
    week: "Week 12 — Jun 23–29",
    month: "June 2026",
    theme: "Madhya Pradesh heritage & wildlife",
    posts: [
      { dest: "Khajuraho — 2 Days", type: "India", why: "UNESCO, erotic temples, #1 MP attraction, weak competition" },
      { dest: "Orchha — 2 Days", type: "India", why: "Cenotaphs, Betwa river, underrated Bundelkhand history" },
      { dest: "Bandhavgarh National Park — 2 Days", type: "India", why: "Highest tiger density in India, strong affiliate potential" },
    ],
    nonContent: ["Month 3 review: target 5K organic visits", "PDF #13: Northeast India Bundle (Meghalaya + Assam)"],
  },
  // MONTH 4 — JULY 2026
  {
    week: "Week 13 — Jul 1–7",
    month: "July 2026",
    theme: "Gujarat pilgrimage & culture",
    posts: [
      { dest: "Ahmedabad City Guide — 3 Days", type: "India", why: "UNESCO World Heritage City, fastest growing Indian city tourism" },
      { dest: "Sasan Gir — 2 Days", type: "India", why: "Last Asiatic lions in the world — unique wildlife experience" },
      { dest: "Dwarka & Somnath — 2 Days", type: "India", why: "Major pilgrimage circuit, high intent traffic" },
    ],
    nonContent: ["Check: which 10 posts have most impressions in GSC — update them with better titles/content", "Reddit: 3 answers"],
  },
  {
    week: "Week 14 — Jul 8–14",
    month: "July 2026",
    theme: "Odisha coast & temple circuit",
    posts: [
      { dest: "Konark Sun Temple Day Trip — 1 Day", type: "India", why: "UNESCO, 35km from Puri — standalone guide needed" },
      { dest: "Chilika Lake — 2 Days", type: "India", why: "India's largest lake, Irrawaddy dolphins, flamingoes" },
      { dest: "Bhitarkanika Mangroves — 2 Days", type: "India", why: "Saltwater crocodiles, rare waterway safari, zero guides" },
    ],
    nonContent: ["Guest post: submit 2 completed guest posts to target blogs", "Pinterest: 10 pins from best performing posts"],
  },
  {
    week: "Week 15 — Jul 15–21",
    month: "July 2026",
    theme: "Rajasthan final gaps",
    posts: [
      { dest: "Bikaner — 2 Days", type: "India", why: "Junagarh Fort, camel research station, off the tourist trail" },
      { dest: "Mount Abu — 2 Days", type: "India", why: "Rajasthan's only hill station, Dilwara Jain temples" },
      { dest: "Shekhawati — 2 Days", type: "India", why: "Open air art gallery — painted havelis, completely unique" },
    ],
    nonContent: ["Apply to Google AdSense if 5K+ monthly visits reached", "Email list: first newsletter sent"],
  },
  {
    week: "Week 16 — Jul 22–28",
    month: "July 2026",
    theme: "Monsoon specials — India's best wet season spots",
    posts: [
      { dest: "Cherrapunji & Mawsynram — 2 Days", type: "India", why: "Wettest place on earth — living root bridges, unique monsoon" },
      { dest: "Coorg in Monsoon — Guide", type: "India", why: "Different angle on existing post — update or new companion" },
      { dest: "Meghalaya Caves — 2 Days", type: "India", why: "Krem Puri (longest sandstone cave in world) — no guide exists" },
    ],
    nonContent: ["Month 4 review: target 10K organic visits", "Media kit page live if 5K+ visits reached"],
  },
  // MONTH 5 — AUGUST 2026
  {
    week: "Week 17 — Aug 4–10",
    month: "August 2026",
    theme: "Delhi extended + day trips",
    posts: [
      { dest: "Delhi Hidden Gems — Beyond the Tourist Trail", type: "India", why: "You've been — add real first-person voice. Hauz Khas, Mehrauli, Lodi Colony murals" },
      { dest: "Agra Day Trip from Delhi — 1 Day", type: "India", why: "Most searched India day trip. Need a tight, specific guide." },
      { dest: "Mathura & Vrindavan — 1 Day", type: "India", why: "Major religious circuit, Holi destination, huge search" },
    ],
    nonContent: ["Update top 5 posts based on GSC CTR data (add better meta titles)", "Reddit: 3 answers — now focus on answers that rank on Google too"],
  },
  {
    week: "Week 18 — Aug 11–17",
    month: "August 2026",
    theme: "Maharashtra coast & wine country",
    posts: [
      { dest: "Tarkarli Beach — 2 Days", type: "India", why: "SCUBA diving in India, Maharashtra's best beach, no good guide" },
      { dest: "Nashik Wine Country — 2 Days", type: "India", why: "India's Napa Valley, growing fast, unique category" },
      { dest: "Panchgani & Mahabaleshwar Extended", type: "India", why: "Most visited Maharashtra hill area — update existing with detail" },
    ],
    nonContent: ["PDF #14: Rajasthan Complete 10-Day Circuit PDF", "Pinterest: 10 new pins, check analytics"],
  },
  {
    week: "Week 19 — Aug 18–24",
    month: "August 2026",
    theme: "Rishikesh extended — you've been here",
    posts: [
      { dest: "Rishikesh Beyond Bungee — 4 Days", type: "India", why: "You've been — ADD PERSONAL VOICE. Cover ashrams, Beatles, white water grades, specific ghats." },
      { dest: "Rishikesh to Kedarnath Road Trip", type: "India", why: "High intent route guide — you know this road personally" },
      { dest: "Haridwar — 1 Day", type: "India", why: "Ganga Aarti at Har Ki Pauri — specific timings, crowd guide" },
    ],
    nonContent: ["HARO: 2 more journalist query responses", "Internal linking: map all Uttarakhand posts to each other"],
  },
  {
    week: "Week 20 — Aug 25–31",
    month: "August 2026",
    theme: "Budget travel guides — high intent different angle",
    posts: [
      { dest: "India Under ₹5,000 — 5 Days Budget Itinerary", type: "India", why: "Ultra high search volume, unique format, great for backlinkers" },
      { dest: "Best Solo Trip India for First Timers", type: "India", why: "Pillar content, will get shared constantly" },
      { dest: "India Monsoon Travel Guide — Which States to Visit", type: "India", why: "Seasonal guide, ranks every year Jun–Sep" },
    ],
    nonContent: ["Month 5 review: target 18K organic visits", "Email newsletter: 100+ subscribers check"],
  },
  // MONTH 6 — SEPTEMBER 2026
  {
    week: "Week 21 — Sep 1–7",
    month: "September 2026",
    theme: "SE Asia prep — Bali first",
    posts: [
      { dest: "Bali 7-Day Itinerary — Complete Guide", type: "International", why: "7 days is the most searched Bali duration. Go deep." },
      { dest: "Ubud 3 Days — Rice Terraces, Temples & Silence", type: "International", why: "Most searched Bali sub-destination" },
      { dest: "Nusa Penida Day Trip from Bali", type: "International", why: "Broken Beach, Angel's Billabong — #1 Bali day trip search" },
    ],
    nonContent: ["Phase 1 review: are we at 25K visits? If yes, pivot to Phase 2. If no, extend.", "Update brand: consider adding tagline evolution"],
  },
  {
    week: "Week 22 — Sep 8–14",
    month: "September 2026",
    theme: "Bali complete + begin Thailand",
    posts: [
      { dest: "Seminyak & Canggu — 2 Days", type: "International", why: "Beach clubs, digital nomad area, high search" },
      { dest: "Bali for Couples — Honeymoon Guide", type: "International", why: "High-value affiliate bookings for couple travel" },
      { dest: "Bangkok 5 Days — Beyond Khao San Road", type: "International", why: "Extend existing Bangkok guide with more depth" },
    ],
    nonContent: ["Klook affiliate signup — for all SE Asia posts", "Reddit: answer Bali questions now, link to your new guides"],
  },
  {
    week: "Week 23 — Sep 15–21",
    month: "September 2026",
    theme: "Thailand islands",
    posts: [
      { dest: "Chiang Mai — 3 Days", type: "International", why: "Most searched Thailand city after Bangkok" },
      { dest: "Phuket — 4 Days", type: "International", why: "Most searched Thailand beach" },
      { dest: "Krabi — 3 Days (Railay Beach, 4 Islands)", type: "International", why: "Fastest growing Thailand search, stunning" },
    ],
    nonContent: ["Custom itinerary service: set pricing page live (₹1,499 for 5-day plan)", "Pinterest: Bali content performs extremely well here"],
  },
  {
    week: "Week 24 — Sep 22–28",
    month: "September 2026",
    theme: "Japan begins",
    posts: [
      { dest: "Kyoto — 3 Days (temples, geisha, bamboo)", type: "International", why: "Most searched Japan city after Tokyo" },
      { dest: "Osaka — 2 Days (food, Dotonbori, castle)", type: "International", why: "Food capital of Japan, rapid growth in search" },
      { dest: "Japan 2-Week Itinerary from India", type: "International", why: "Pillar content — ranks for 100+ Japan keywords" },
    ],
    nonContent: ["Month 6 review: target 25K visits (Phase 1 goal)", "Apply to Mediavine if 50K sessions reached (cumulative)"],
  },
];

// ─── GROWTH STRATEGIES ────────────────────────────────────────────────────────

const STRATEGIES = [
  {
    id: "reddit",
    title: "Reddit & Quora — Your #1 backlink engine",
    emoji: "💬",
    priority: "DO THIS NOW",
    color: "border-rose-300 bg-rose-50",
    accent: "text-rose-700",
    badge: "bg-rose-100 text-rose-600",
    detail: "3 answers per week × 52 weeks = 156 backlinks/year. Each Reddit answer on r/india, r/IndiaTravel, r/solotravel, r/travel should naturally mention your guide. A 300-word genuine answer with a relevant link gets upvoted, stays live for years, sends constant traffic, AND is a backlink Google counts.",
    steps: [
      "Search Reddit weekly: '[destination] travel advice', 'planning trip to [India city]', 'best time to visit [state]'",
      "Write a genuine 200–400 word answer — not promotional. The link is 1 sentence at the end: 'I wrote a detailed guide here if useful'",
      "Best subreddits: r/india, r/IndiaTravel, r/solotravel, r/travel, r/Thrilling_Stories_India, r/Uttarakhand, r/rajasthan",
      "Quora: same strategy. Quora answers rank on Google directly — a good Quora answer for 'best time Ladakh' gets 10K+ views organically",
      "Target: 3/week minimum. Never miss a week. This is your most important non-writing activity.",
    ],
    metric: "Goal: 150+ quality backlinks by Month 6",
  },
  {
    id: "gsc",
    title: "Google Search Console — Your weekly intelligence report",
    emoji: "📊",
    priority: "WEEKLY RITUAL",
    color: "border-blue-300 bg-blue-50",
    accent: "text-blue-700",
    badge: "bg-blue-100 text-blue-600",
    detail: "GSC tells you exactly which posts Google is trying to rank, what keywords they're appearing for, and why people aren't clicking. This is free data most bloggers ignore. Check it every Monday morning.",
    steps: [
      "Monday ritual: open GSC → Performance → Last 28 days → sort by Impressions descending",
      "Find posts with 100+ impressions but under 2% CTR — these are ranking but not clicked. Fix the title and meta description.",
      "Find posts with 500+ impressions but position 11–20 — one good internal link from a DA post could push to page 1",
      "Find keywords you rank for that you haven't written dedicated posts about — write those posts next week",
      "Submit new posts manually: URL Inspection → Request Indexing (15/day limit)",
    ],
    metric: "Weekly: 30-minute GSC check every Monday",
  },
  {
    id: "internal",
    title: "Internal Linking — The free SEO multiplier you're not using",
    emoji: "🔗",
    priority: "EVERY NEW POST",
    color: "border-purple-300 bg-purple-50",
    accent: "text-purple-700",
    badge: "bg-purple-100 text-purple-600",
    detail: "Every new post you write should link to 5 existing posts. Every existing post that's related should link to the new post. This distributes PageRank through your site and helps Google understand which posts matter most. Currently your 362 posts are poorly connected.",
    steps: [
      "Rule: every new post links to minimum 5 older posts (contextually, not forced)",
      "Create topic clusters: all Uttarakhand posts link to each other; all Rajasthan posts link to each other; etc.",
      "Your highest-traffic post (when you identify it) should link to your 10 most important posts",
      "Add a 'More from [Region]' section at the bottom of every guide — you already have RelatedGuides but make it editorial, not algorithmic",
      "Run a monthly internal link audit: check if new posts have been linked from old ones",
    ],
    metric: "Every post: minimum 5 outbound + 3 inbound internal links",
  },
  {
    id: "content-update",
    title: "Content Refreshing — Old posts can rank better than new ones",
    emoji: "♻️",
    priority: "MONTHLY",
    color: "border-teal-300 bg-teal-50",
    accent: "text-teal-700",
    badge: "bg-teal-100 text-teal-600",
    detail: "Once posts start ranking (Month 3+), you'll find that updating existing posts beats writing new ones for traffic growth. A post on position 8 updated with fresh info, better structure, and more links can jump to position 3. Google loves freshness.",
    steps: [
      "Monthly: identify your top 10 posts by impressions — update each with new info, current prices, and 200 more words",
      "Add the current year to titles: 'Kashmir 6 Days Guide (2026)' → update to '(2027)' when appropriate",
      "Add FAQ sections to top posts — FAQs unlock Google's 'People Also Ask' feature which drives massive CTR",
      "Update seasonal pricing every November for peak season posts (December–February)",
      "Add your own voice to any post that feels generic — one personal anecdote makes a huge difference",
    ],
    metric: "Monthly: update top 10 posts with fresh content",
  },
  {
    id: "pinterest",
    title: "Pinterest — Underrated traffic source for travel",
    emoji: "📌",
    priority: "START MONTH 3",
    color: "border-rose-200 bg-rose-50",
    accent: "text-rose-600",
    badge: "bg-rose-50 text-rose-500",
    detail: "Pinterest is a search engine, not social media. A well-made pin about 'Rajasthan 7-day itinerary' gets clicked for 3–5 years. Travel content performs extremely well. 10 pins/day takes 30 minutes and compounds massively over time.",
    steps: [
      "Create a business Pinterest account: incredibleitinerary",
      "Design pins using Canva: vertical (1000×1500px), title on image, your URL at bottom",
      "Each blog post gets 3 different pin designs (different images, same link)",
      "10 new pins per day — takes 30 minutes once you have a template",
      "Boards to create: India Travel, Rajasthan, Kerala, Himalaya, Budget India Travel, Southeast Asia, Bali, Thailand, Japan",
      "Pinterest SEO: put exact search terms in pin description ('rajasthan 7 day itinerary from delhi 2026 budget')",
    ],
    metric: "Goal: 100K monthly Pinterest views by Month 6",
  },
  {
    id: "email",
    title: "Email List — The only traffic you actually own",
    emoji: "📧",
    priority: "START NOW",
    color: "border-amber-300 bg-amber-50",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-600",
    detail: "Google can change its algorithm tomorrow and destroy your traffic overnight. Your email list cannot be taken away. Every subscriber is worth ₹50–200/month in future revenue (affiliate clicks, PDF sales, custom itinerary bookings). Start building it day one.",
    steps: [
      "Signup incentive: 'Get the Free India Budget Mastersheet' — a one-page PDF of average costs per city (make this in 2 hours)",
      "Signup form: every blog post has a mid-content email form (not just footer)",
      "Welcome sequence: Email 1 (immediate) → free PDF delivered. Email 2 (day 3) → 'Most popular India guide'. Email 3 (day 7) → one personal story from your Kedarnath trek. Email 4 (day 14) → 'Planning a trip? I'll help free.'",
      "Weekly newsletter: one India tip, one guide recommendation, one practical travel hack. 200 words max. Consistent.",
      "Platform: Mailchimp (free to 500 subscribers), then ConvertKit or Beehiiv for monetization",
    ],
    metric: "Goal: 500 subscribers by Month 6",
  },
  {
    id: "seo-technical",
    title: "Technical SEO — The invisible foundation",
    emoji: "⚙️",
    priority: "ONE-TIME + MONTHLY CHECK",
    color: "border-gray-300 bg-gray-50",
    accent: "text-gray-700",
    badge: "bg-gray-100 text-gray-600",
    detail: "Most of this is already done (sitemap, IndexNow, structured data). These are the remaining items and ongoing checks.",
    steps: [
      "Page speed: run PageSpeed Insights on your homepage monthly — score should be 85+ mobile",
      "Core Web Vitals: check in GSC → Experience → Core Web Vitals monthly",
      "Schema markup: every guide has Article + BreadcrumbList + FAQPage schema (check the 14 new pages have this)",
      "Canonical tags: every page has a self-referencing canonical (already set up)",
      "Image alt text: every image needs descriptive alt text (audit quarterly)",
      "Broken links: run Screaming Frog or Ahrefs free tier monthly to catch broken links",
    ],
    metric: "Monthly 30-min technical audit",
  },
  {
    id: "affiliate",
    title: "Affiliate Optimization — Earn more from existing traffic",
    emoji: "💰",
    priority: "ONCE TRAFFIC STARTS",
    color: "border-green-300 bg-green-50",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-600",
    detail: "Once you have traffic (Month 3+), optimize how affiliate links are placed. The difference between 0.5% and 2% conversion rate on 20K monthly visits is ₹15K vs ₹60K/month.",
    steps: [
      "Booking.com links: place in the natural flow — 'Hotels in [destination]: I recommend checking [Booking.com] for live prices, typically ₹X–Y for [category]' with direct link",
      "Viator/GYG: for every activity you mention, link to the bookable version — 'Book the official Periyar boat safari here (₹300)'",
      "PDF CTAs: each top-10 post should have a prominent mid-article CTA for your PDF guide",
      "Custom itinerary CTA: end every post with 'Planning this trip? I'll build your personal itinerary free.'",
      "Add Klook for SE Asia posts — their India affiliate links also convert well for Agra, Jaipur, Kerala tours",
      "Track what converts: check affiliate dashboards weekly, double down on what earns",
    ],
    metric: "Target: 2–4% affiliate CTR on top posts",
  },
];

// ─── PHASE OVERVIEW ───────────────────────────────────────────────────────────

const PHASE_OVERVIEW = [
  { id: 1, emoji: "🇮🇳", title: "Own India", range: "Apr–Sep 2026", posts: "66 new posts", visits: "0 → 25K/month", revenue: "₹0 → ₹35K/month", focus: "India authority, first backlinks, first revenue" },
  { id: 2, emoji: "🌏", title: "SE Asia + Ads", range: "Oct 2026–Mar 2027", posts: "64 new posts", visits: "25K → 150K/month", revenue: "₹35K → ₹3L/month", focus: "Bali, Thailand, Japan, Dubai, display ads live" },
  { id: 3, emoji: "🌍", title: "Global Selective", range: "Apr–Dec 2027", posts: "120+ posts/researcher", visits: "150K → 500K/month", revenue: "₹3L → ₹10L/month", focus: "Europe, Americas, hire researcher, itinerary builder" },
  { id: 4, emoji: "🚀", title: "Platform", range: "2028", posts: "500+ total", visits: "500K → 1M/month", revenue: "₹10L → ₹50L/month", focus: "SaaS tool, team of 5, app, B2B" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Tag({ label, color }: { label: string; color: string }) {
  return <span className={`text-[0.55rem] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${color}`}>{label}</span>;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function RoadmapClient() {
  const [activeTab, setActiveTab] = useState<"schedule" | "strategies" | "phases" | "goals">("goals");
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0);

  return (
    <main className="bg-cream min-h-screen">

      {/* ── HERO ── */}
      <div className="bg-ink pt-16 pb-14 px-6 md:px-12">
        <div className="max-w-[1180px] mx-auto">
          <Link href="/" className="text-white/40 text-xs hover:text-gold transition-colors mb-8 block">← Back to site</Link>
          <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-4">Master Growth Plan — April 2026</span>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-light text-white leading-[1.08] mb-5 max-w-[760px]">
            IncredibleItinerary: The complete roadmap<br />
            <em className="italic text-gold-light">from 362 India guides to global standard.</em>
          </h1>
          <p className="text-sm text-white/55 font-light max-w-[580px] leading-relaxed mb-10">
            Week-by-week publishing schedule. Destination names. Monthly traffic and revenue targets.
            Growth strategies. Everything you need to grow from 0 to 1M monthly visitors.
          </p>
          {/* Phase summary strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PHASE_OVERVIEW.map((p) => (
              <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{p.emoji}</span>
                  <span className="text-[0.6rem] text-white/40 uppercase tracking-widest">{p.range}</span>
                </div>
                <p className="text-white text-sm font-medium mb-1">{p.title}</p>
                <p className="text-gold text-xs font-light">{p.visits}</p>
                <p className="text-white/40 text-[0.65rem] mt-1">{p.posts}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NAV TABS ── */}
      <div className="sticky top-0 z-50 bg-white border-b border-parchment-2 shadow-sm">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {([
              { id: "goals", label: "📅 Monthly Goals" },
              { id: "schedule", label: "📋 Week-by-Week Posts" },
              { id: "strategies", label: "🎯 Growth Strategies" },
              { id: "phases", label: "🗺️ Phase Deep Dive" },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink hover:bg-parchment"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-12">

        {/* ══════════════════════════════════════════════════════
            TAB 1: MONTHLY GOALS
        ══════════════════════════════════════════════════════ */}
        {activeTab === "goals" && (
          <section className="space-y-6">
            <div>
              <span className="section-label">Month-by-Month</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-2">
                12-month detailed targets
              </h2>
              <p className="text-sm text-muted font-light mb-8 max-w-[580px]">
                3 posts per week. 3 Reddit answers per week. Every month has specific milestones.
                These numbers are realistic — not optimistic, not pessimistic.
              </p>
            </div>

            {/* Summary bar */}
            <div className="bg-white rounded-2xl border border-parchment-2 overflow-hidden">
              <div className="grid grid-cols-7 gap-2 px-5 py-3 bg-parchment border-b border-parchment-2 text-[0.6rem] uppercase tracking-widest text-muted font-medium">
                <div className="col-span-1">Month</div>
                <div className="col-span-1 text-center">New Posts</div>
                <div className="col-span-1 text-center">Total Posts</div>
                <div className="col-span-1 text-center">Traffic</div>
                <div className="col-span-1 text-center">Backlinks</div>
                <div className="col-span-1 text-center">Revenue</div>
                <div className="col-span-1">Strategy</div>
              </div>
              {MONTHLY_GOALS.map((m, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-7 gap-2 px-5 py-4 items-start border-b border-parchment-2/60 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-parchment/30"}`}
                >
                  <div className="col-span-1">
                    <p className="text-xs font-semibold text-ink">{m.month}</p>
                    <span className={`text-[0.55rem] px-1.5 py-0.5 rounded font-medium ${m.phase === 1 ? "bg-teal/10 text-teal" : m.phase === 2 ? "bg-gold/15 text-gold-dark" : "bg-ink/10 text-ink"}`}>
                      Phase {m.phase}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <p className="font-serif text-xl font-light text-ink">{m.posts}</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <p className="text-sm font-semibold text-ink">{m.cumPosts}</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <p className="text-xs text-muted font-light">{m.traffic}</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <p className="text-xs font-semibold text-ink">{m.backlinks}+</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <p className="text-xs font-semibold text-teal">{m.revenue}</p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-[0.65rem] text-muted font-light leading-relaxed">{m.strategy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div>
              <h3 className="font-serif text-xl font-light text-ink mb-4">Key milestones by month</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MONTHLY_GOALS.map((m, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-parchment-2 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-ink text-sm">{m.month}</p>
                      <span className={`text-[0.55rem] px-2 py-0.5 rounded-full font-semibold ${m.phase === 1 ? "bg-teal/10 text-teal" : "bg-gold/15 text-gold-dark"}`}>
                        Phase {m.phase}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {m.milestones.map((ms, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                          <p className="text-xs text-muted font-light leading-relaxed">{ms}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            TAB 2: WEEK-BY-WEEK SCHEDULE
        ══════════════════════════════════════════════════════ */}
        {activeTab === "schedule" && (
          <section className="space-y-6">
            <div>
              <span className="section-label">Publishing Calendar</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-2">
                Exact destination names, week by week
              </h2>
              <p className="text-sm text-muted font-light mb-8 max-w-[560px]">
                3 posts per week. Each post takes 4–6 hours of solid research and writing.
                Every week also includes 3 Reddit/Quora answers. Click any week to expand.
              </p>
            </div>

            {/* Legend */}
            <div className="flex gap-3 flex-wrap mb-6">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal" /><span className="text-xs text-muted">India</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gold-dark" /><span className="text-xs text-muted">International</span></div>
            </div>

            <div className="space-y-3">
              {WEEKLY_SCHEDULE.map((week, i) => (
                <div key={i} className="bg-white rounded-2xl border border-parchment-2 overflow-hidden">
                  {/* Week header */}
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-parchment/50 transition-colors text-left"
                    onClick={() => setExpandedWeek(expandedWeek === i ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-ink text-sm">{week.week}</p>
                        <p className="text-[0.65rem] text-muted">{week.month} · {week.theme}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[0.65rem] bg-parchment text-muted px-2 py-1 rounded-full">{week.posts.length} posts</span>
                      <span className="text-muted">{expandedWeek === i ? "▲" : "▼"}</span>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {expandedWeek === i && (
                    <div className="px-6 pb-6 border-t border-parchment-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 mb-5">
                        {week.posts.map((post, j) => (
                          <div key={j} className={`rounded-xl p-4 border ${post.type === "India" ? "border-teal/20 bg-teal/5" : "border-gold/20 bg-gold/5"}`}>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-[0.55rem] px-2 py-0.5 rounded-full font-semibold ${post.type === "India" ? "bg-teal/15 text-teal" : "bg-gold/20 text-gold-dark"}`}>
                                {post.type}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-ink mb-1.5 leading-snug">{post.dest}</p>
                            <p className="text-xs text-muted font-light leading-relaxed">{post.why}</p>
                          </div>
                        ))}
                      </div>
                      {/* Non-content tasks */}
                      <div className="bg-parchment rounded-xl p-4">
                        <p className="text-[0.65rem] text-muted uppercase tracking-widest mb-2 font-medium">Also this week (non-writing)</p>
                        <div className="space-y-1.5">
                          {week.nonContent.map((task, k) => (
                            <div key={k} className="flex items-start gap-2">
                              <span className="text-gold text-xs mt-0.5">→</span>
                              <p className="text-xs text-muted font-light">{task}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            TAB 3: GROWTH STRATEGIES
        ══════════════════════════════════════════════════════ */}
        {activeTab === "strategies" && (
          <section className="space-y-6">
            <div>
              <span className="section-label">Growth Playbook</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-2">
                8 strategies that actually move the needle
              </h2>
              <p className="text-sm text-muted font-light mb-8 max-w-[580px]">
                Most travel blogs fail because they write content and wait. These are the active strategies
                that separate sites that grow from sites that sit. Click any strategy for the full playbook.
              </p>
            </div>

            <div className="space-y-3">
              {STRATEGIES.map((s) => (
                <div key={s.id} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${s.color}`}>
                  <button
                    className="w-full flex items-start gap-4 px-6 py-5 text-left"
                    onClick={() => setExpandedStrategy(expandedStrategy === s.id ? null : s.id)}
                  >
                    <span className="text-3xl flex-shrink-0">{s.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <p className="font-semibold text-ink text-sm">{s.title}</p>
                        <span className={`text-[0.55rem] px-2 py-0.5 rounded-full font-bold ${s.badge}`}>{s.priority}</span>
                      </div>
                      <p className="text-xs text-muted font-light">{s.metric}</p>
                    </div>
                    <span className="text-muted text-sm flex-shrink-0 mt-1">{expandedStrategy === s.id ? "▲" : "▼"}</span>
                  </button>

                  {expandedStrategy === s.id && (
                    <div className="px-6 pb-6 border-t border-black/[0.08]">
                      <p className={`text-sm font-light leading-relaxed mb-5 mt-4 ${s.accent}`}>{s.detail}</p>
                      <div className="space-y-3">
                        {s.steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-3.5">
                            <span className="w-5 h-5 rounded-full bg-white border border-parchment-2 text-xs flex items-center justify-center text-muted flex-shrink-0 mt-0.5 font-medium">{i + 1}</span>
                            <p className="text-sm text-muted font-light leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            TAB 4: PHASE DEEP DIVE
        ══════════════════════════════════════════════════════ */}
        {activeTab === "phases" && (
          <section className="space-y-10">
            <div>
              <span className="section-label">Phase-by-Phase</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-2">
                From India-first to global platform
              </h2>
            </div>

            {/* Phase 1 */}
            <div className="bg-white rounded-2xl border-2 border-teal/25 overflow-hidden">
              <div className="bg-teal/5 px-7 py-6 border-b border-teal/15">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🇮🇳</span>
                  <div>
                    <span className="text-[0.6rem] tracking-[0.18em] uppercase text-teal font-medium">Phase 1 · Apr–Sep 2026</span>
                    <h3 className="font-serif text-xl font-light text-ink">Own India</h3>
                  </div>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed max-w-[680px]">
                  You already have 362 India posts. This phase adds 66 more, fixes gaps in Northeast and South India,
                  builds the first backlinks, and gets you to 25K monthly visitors and ₹35K/month in revenue.
                  Do NOT start international in this phase. India is your unfair advantage — use it fully.
                </p>
              </div>
              <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">India destinations to add</p>
                  <div className="space-y-1.5 text-xs text-muted font-light">
                    {[
                      "Tawang, Arunachal Pradesh", "Valley of Flowers", "Jim Corbett", "Kaziranga NP", "Majuli Island",
                      "Ziro Valley", "Ooty", "Mysore", "Coonoor", "Ajanta & Ellora",
                      "Lonavala", "Mahabaleshwar", "Dzukou Valley, Nagaland", "Aizawl, Mizoram", "Loktak Lake, Manipur",
                      "Bundi, Rajasthan", "Chittorgarh", "Pushkar", "Kedarkantha Trek", "Har Ki Dun Trek",
                      "Brahmatal Trek", "Alleppey Houseboat", "Kochi Extended", "Gokarna", "Kasol & Kheerganga",
                      "Tirthan Valley", "Dalhousie & Khajjiar", "Auli", "Binsar", "Lansdowne",
                      "Badami & Pattadakal", "Kabini", "Khajuraho", "Orchha", "Bandhavgarh NP",
                      "Ahmedabad", "Sasan Gir", "Dwarka & Somnath", "Konark Sun Temple", "Chilika Lake",
                      "Bhitarkanika", "Bikaner", "Mount Abu", "Shekhawati", "Cherrapunji & Mawsynram",
                      "Meghalaya Caves", "Delhi Hidden Gems", "Mathura & Vrindavan", "Tarkarli Beach", "Nashik Wine",
                      "Rishikesh Extended (first-person)", "Haridwar", "India Budget 5-Day Pillar", "Monsoon India Guide", "Best Solo Trip India",
                      "Agra Day Trip", "Kabini Wildlife", "Ranikhet", "Sattal", "Prashar Lake",
                      "Kinnaur Valley", "Sangla Valley", "Chitkul", "Nag Tibba Trek", "Chopta Deoria Tal",
                      "Bhimtal", "Munsiyari", "Chail, Himachal", "Barot Valley Extended", "Jim Corbett Budget",
                    ].map((d) => <div key={d} className="flex items-center gap-1.5"><span className="text-teal text-[0.6rem]">✦</span>{d}</div>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Metrics to hit</p>
                  <div className="space-y-3">
                    {[
                      { label: "New posts written", val: "66" },
                      { label: "Total indexed posts", val: "428" },
                      { label: "Monthly organic visits", val: "25K" },
                      { label: "Total backlinks", val: "140+" },
                      { label: "Email subscribers", val: "200+" },
                      { label: "Monthly revenue", val: "₹35K" },
                      { label: "PDFs published", val: "15+" },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center justify-between border-b border-parchment-2 pb-2">
                        <span className="text-xs text-muted">{m.label}</span>
                        <span className="text-xs font-semibold text-ink">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Phase 1 don&apos;ts</p>
                  <div className="space-y-2">
                    {[
                      "Don't start Europe or Americas posts — you have zero DA to rank for these",
                      "Don't spend money on paid ads — SEO compounds, ads don't",
                      "Don't write posts under 2,000 words — thin content won't rank",
                      "Don't skip the Reddit strategy — it's your fastest backlink source",
                      "Don't miss a week of publishing — consistency beats perfection",
                    ].map((d) => (
                      <div key={d} className="flex items-start gap-2 bg-rose-50 rounded-lg p-2.5">
                        <span className="text-rose-400 flex-shrink-0 text-xs">✗</span>
                        <p className="text-xs text-rose-700 font-light leading-relaxed">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl border-2 border-gold/25 overflow-hidden">
              <div className="bg-gold/5 px-7 py-6 border-b border-gold/15">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🌏</span>
                  <div>
                    <span className="text-[0.6rem] tracking-[0.18em] uppercase text-gold-dark font-medium">Phase 2 · Oct 2026–Mar 2027</span>
                    <h3 className="font-serif text-xl font-light text-ink">Southeast Asia + Display Ads</h3>
                  </div>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed max-w-[680px]">
                  By now you have 25K+ monthly visitors and real domain authority from Phase 1.
                  Bali, Thailand, Japan, Dubai and Singapore are the top 6 international destinations
                  searched by Indians — and they have massive affiliate conversion. Display ads go live
                  when you hit 50K sessions.
                </p>
              </div>
              <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">International destinations — phase 2</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-muted font-light">
                    {[
                      "Bali 7 Days Complete", "Ubud 3 Days", "Nusa Penida Day Trip", "Seminyak & Canggu",
                      "Bali for Couples", "Bali Budget Guide", "Bali Hidden Beaches", "Bali Temples Circuit",
                      "Lombok 4 Days", "Bali vs Lombok",
                      "Bangkok 5 Days Extended", "Chiang Mai 3 Days", "Phuket 4 Days", "Krabi 3 Days",
                      "Koh Samui 3 Days", "Thailand 2 Weeks", "Pai 2 Days", "Kanchanaburi Day Trip",
                      "Kyoto 3 Days", "Osaka 2 Days", "Japan 2 Weeks", "Japan Cherry Blossom",
                      "Mt Fuji Day Trip", "Nara Day Trip", "Hiroshima 1 Day", "Japan Budget Guide",
                      "Japan for Indians", "Hakone Onsen",
                      "Dubai Extended (Families)", "Abu Dhabi Day Trip", "Oman 5 Days", "Jordan 5 Days",
                      "Singapore 3 Days", "Singapore Budget", "Kuala Lumpur 3 Days", "Penang 2 Days",
                      "Langkawi 3 Days", "Vietnam 2 Weeks", "Hanoi 3 Days", "Hoi An 2 Days",
                      "Ha Long Bay Cruise Guide", "Ho Chi Minh 2 Days",
                      "Maldives on a Budget", "Sri Lanka 10 Days", "Nepal 7 Days (Kathmandu + Trek)",
                    ].map((d) => <div key={d} className="flex items-center gap-1.5"><span className="text-gold text-[0.6rem]">✦</span>{d}</div>)}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Revenue streams activated</p>
                    <div className="space-y-2">
                      {[
                        { name: "Mediavine display ads", val: "₹75K–2L/month", when: "At 50K sessions" },
                        { name: "Booking.com affiliate", val: "₹25K–60K/month", when: "Scaling with traffic" },
                        { name: "Klook (SE Asia)", val: "₹10K–30K/month", when: "SE Asia posts live" },
                        { name: "Custom itinerary service", val: "₹15K–40K/month", when: "₹1,499/plan" },
                        { name: "PDF bundle sales", val: "₹8K–20K/month", when: "15+ PDFs live" },
                      ].map((r) => (
                        <div key={r.name} className="flex items-start justify-between gap-4 bg-parchment rounded-lg p-3">
                          <div>
                            <p className="text-xs font-medium text-ink">{r.name}</p>
                            <p className="text-[0.6rem] text-muted">{r.when}</p>
                          </div>
                          <p className="text-xs font-semibold text-gold-dark flex-shrink-0">{r.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Brand evolution in Phase 2</p>
                    <div className="bg-ink rounded-xl p-4">
                      <p className="text-[0.65rem] text-white/40 mb-2">Tagline change</p>
                      <p className="text-white/50 text-xs line-through mb-1">&ldquo;India, planned properly.&rdquo;</p>
                      <p className="text-gold text-sm font-serif">&ldquo;Travel, planned properly.&rdquo;</p>
                      <p className="text-white/40 text-xs mt-2 font-light">Keep Surya&apos;s India trips as the credibility anchor. International = obsessively researched from primary sources.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl border-2 border-ink/15 overflow-hidden">
              <div className="bg-ink/3 px-7 py-6 border-b border-ink/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <span className="text-[0.6rem] tracking-[0.18em] uppercase text-ink font-medium">Phase 3 · Apr 2027–Jan 2028</span>
                    <h3 className="font-serif text-xl font-light text-ink">Go Global — Selective</h3>
                  </div>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed max-w-[680px]">
                  Europe, Americas, Africa. Hire a researcher. 200K monthly visitors. Itinerary builder launches.
                  You are no longer a one-person blog — you&apos;re building infrastructure for a platform.
                </p>
              </div>
              <div className="p-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Europe (50+ guides)</p>
                    <div className="space-y-1 text-xs text-muted font-light">
                      {["Paris 5 Days", "Rome 4 Days", "Barcelona 4 Days", "Amsterdam 3 Days", "Prague 3 Days",
                        "Vienna 3 Days", "Santorini 3 Days", "Amalfi Coast 3 Days", "Switzerland 7 Days",
                        "London 5 Days", "Lisbon 3 Days", "Istanbul 4 Days", "Dubrovnik 2 Days", "Athens 3 Days",
                        "Florence 3 Days", "Venice 2 Days", "Budapest 3 Days", "Kyoto sister: Bruges 2 Days",
                        "Edinburgh 2 Days", "Porto 2 Days"].map((d) => (
                          <div key={d} className="flex items-center gap-1.5"><span className="text-ink/30 text-[0.6rem]">✦</span>{d}</div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Americas (30+ guides)</p>
                    <div className="space-y-1 text-xs text-muted font-light">
                      {["New York 5 Days", "Los Angeles 4 Days", "Miami 3 Days", "San Francisco 3 Days",
                        "Las Vegas 2 Days", "Grand Canyon Day Trip", "Yellowstone 3 Days", "Hawaii 7 Days",
                        "Canada Rockies 7 Days", "Toronto 3 Days", "Vancouver 3 Days",
                        "Machu Picchu 3 Days", "Peru 10 Days", "Amazon 4 Days",
                        "Patagonia 7 Days", "Rio de Janeiro 3 Days", "Buenos Aires 3 Days",
                        "Mexico City 3 Days", "Cancun 4 Days", "Cuba 7 Days"].map((d) => (
                          <div key={d} className="flex items-center gap-1.5"><span className="text-ink/30 text-[0.6rem]">✦</span>{d}</div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">Africa + Oceania (20+ guides)</p>
                    <div className="space-y-1 text-xs text-muted font-light">
                      {["Kenya Safari 7 Days", "Tanzania Safari 5 Days", "South Africa 10 Days",
                        "Morocco 7 Days", "Egypt 7 Days", "Rwanda Gorillas 3 Days",
                        "Namibia 10 Days", "Zanzibar 5 Days",
                        "Sydney 5 Days", "Melbourne 3 Days", "Great Barrier Reef",
                        "New Zealand 10 Days", "Fiji 5 Days"].map((d) => (
                          <div key={d} className="flex items-center gap-1.5"><span className="text-ink/30 text-[0.6rem]">✦</span>{d}</div>
                        ))}
                    </div>
                    <div className="mt-5 bg-gold/10 border border-gold/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-ink mb-2">🚀 Itinerary Builder v1 launches</p>
                      <p className="text-xs text-muted font-light leading-relaxed">Interactive day-by-day planner. Free to use. Hotel + activity affiliate links embedded in results. Built into existing site — no separate app needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 & 5 summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-7">
                <span className="text-3xl block mb-3">🚀</span>
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-purple-600 font-medium">Phase 4 · 2028</span>
                <h3 className="font-serif text-xl font-light text-ink mb-3">Platform</h3>
                <div className="space-y-2 text-sm text-muted font-light">
                  <p>→ Itinerary builder becomes paid SaaS (₹199/month)</p>
                  <p>→ Android + iOS app (₹499 one-time)</p>
                  <p>→ Team of 5: 2 researchers, 1 SEO, 1 social</p>
                  <p>→ B2B: white-label tool for travel agencies</p>
                  <p>→ 500K monthly visitors, ₹10L+/month</p>
                </div>
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-7">
                <span className="text-3xl block mb-3">🌐</span>
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-amber-600 font-medium">Phase 5 · 2029+</span>
                <h3 className="font-serif text-xl font-light text-ink mb-3">Global Authority</h3>
                <div className="space-y-2 text-sm text-muted font-light">
                  <p>→ Every country on earth covered (3+ guides each)</p>
                  <p>→ 1M+ monthly visitors</p>
                  <p>→ ₹50L+/month from all streams combined</p>
                  <p>→ &ldquo;Just use IncredibleItinerary&rdquo; is the standard answer</p>
                  <p>→ Acquisition interest or seed funding round</p>
                </div>
              </div>
            </div>

          </section>
        )}

      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-ink py-14 px-6 md:px-12 text-center mt-8">
        <div className="max-w-[520px] mx-auto">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-white mb-4">
            The plan is clear.<br />
            <em className="italic text-gold-light">Execution is everything.</em>
          </h2>
          <p className="text-sm text-white/50 font-light mb-7 leading-relaxed">
            3 posts per week. 3 Reddit answers per week. Every single week for 2 years.
            That&apos;s the whole secret.
          </p>
          <Link href="/blog" className="btn-gold inline-flex">
            Back to the guides →
          </Link>
        </div>
      </div>
    </main>
  );
}
