"use client";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

// Nearby destination pairings
const PAIRINGS: Record<string, { slug: string; why: string; travel: string }[]> = {
  "jaipur-3-days": [
    { slug: "agra-2-days", why: "Taj Mahal is just 4.5 hours away", travel: "4.5hr drive or Gatimaan Express" },
    { slug: "pushkar-2-days", why: "India's holiest lake, 2 hours from Jaipur", travel: "2hr bus/drive" },
    { slug: "jodhpur-3-days", why: "The Blue City continues the Rajasthan circuit", travel: "5hr train or drive" },
  ],
  "jodhpur-3-days": [
    { slug: "jaisalmer-3-days", why: "Golden Fort and Thar Desert, 5 hours away", travel: "5hr train" },
    { slug: "udaipur-3-days", why: "Complete the Rajasthan royal circuit", travel: "5hr drive" },
    { slug: "mount-abu-2-days", why: "Rajasthan's only hill station, 4 hours south", travel: "4hr drive" },
  ],
  "jaisalmer-3-days": [
    { slug: "jodhpur-3-days", why: "Blue City is the natural next stop", travel: "5hr train" },
    { slug: "udaipur-3-days", why: "End the Rajasthan circuit by the lakes", travel: "8hr via Jodhpur" },
  ],
  "udaipur-3-days": [
    { slug: "mount-abu-2-days", why: "Cool off in Rajasthan's only hill station", travel: "3hr drive" },
    { slug: "pushkar-2-days", why: "Lakeside spiritual town, 5 hours north", travel: "5hr drive" },
    { slug: "jodhpur-3-days", why: "Continue the royal circuit to the Blue City", travel: "5hr drive" },
  ],
  "agra-2-days": [
    { slug: "jaipur-3-days", why: "Pink City completes the Golden Triangle", travel: "4.5hr drive" },
    { slug: "orchha-2-days", why: "Medieval palaces most tourists skip", travel: "4hr train to Jhansi" },
    { slug: "varanasi-3-days", why: "India's spiritual capital, overnight train", travel: "12hr train" },
  ],
  "goa-3-days": [
    { slug: "gokarna-3-days", why: "Quieter beaches, 6 hours south", travel: "6hr bus/drive" },
    { slug: "hampi-3-days", why: "Ancient ruins, 7 hours inland", travel: "7hr bus" },
  ],
  "kashmir-6-days": [
    { slug: "leh-ladakh-7-days", why: "Continue to the highest passes in India", travel: "2-day drive or 1hr flight" },
    { slug: "amritsar-2-days", why: "Golden Temple on the way back", travel: "8hr drive or 1hr flight" },
  ],
  "leh-ladakh-7-days": [
    { slug: "manali-5-days", why: "Drive down via Manali-Leh Highway", travel: "2-day epic drive" },
    { slug: "kashmir-6-days", why: "Fly back via Srinagar, add Dal Lake", travel: "1hr flight or 2-day drive" },
  ],
  "meghalaya-5-days": [
    { slug: "shillong-3-days", why: "Shillong is the gateway and deserves its own days", travel: "Same state, 30min" },
    { slug: "kaziranga-3-days", why: "One-horned rhinos, 5 hours into Assam", travel: "5hr drive" },
    { slug: "tawang-4-days", why: "India's largest monastery, continue northeast", travel: "12hr via Guwahati" },
  ],
  "kerala-5-days": [
    { slug: "alleppey-3-days", why: "Extended backwaters and houseboat time", travel: "Included in circuit" },
    { slug: "munnar-3-days", why: "Tea plantations deserve more than a day trip", travel: "Included in circuit" },
    { slug: "wayanad-3-days", why: "Kerala's wild north — treehouses and caves", travel: "6hr from Kochi" },
  ],
  "ooty-3-days": [
    { slug: "mysore-3-days", why: "Palace city, 3 hours down the Ghats", travel: "3hr drive" },
    { slug: "coorg-3-days", why: "Coffee plantations, 4 hours west", travel: "4hr drive" },
    { slug: "kodaikanal-3-days", why: "Tamil Nadu's other great hill station", travel: "8hr drive" },
  ],
  "manali-5-days": [
    { slug: "kasol-3-days", why: "Parvati Valley backpacker scene, 76km south", travel: "2.5hr drive" },
    { slug: "spiti-valley-7-days", why: "Continue through Atal Tunnel to the cold desert", travel: "Via Atal Tunnel" },
    { slug: "leh-ladakh-7-days", why: "The Manali–Leh highway — one of the world's great road trips", travel: "2-day epic drive" },
  ],
  "shimla-3-days": [
    { slug: "manali-5-days", why: "Continue north into bigger mountains", travel: "8hr drive" },
    { slug: "kasol-3-days", why: "Parvati Valley backpacker scene", travel: "7hr via Mandi" },
    { slug: "dharamshala-3-days", why: "Tibetan culture in the Himalayas", travel: "8hr drive" },
  ],
  "varanasi-3-days": [
    { slug: "agra-2-days", why: "Taj Mahal, overnight train west", travel: "12hr train" },
    { slug: "khajuraho-2-days", why: "UNESCO temples, 8 hours south", travel: "8hr train or bus" },
    { slug: "amritsar-2-days", why: "Golden Temple, another spiritual powerhouse", travel: "Flight via Delhi" },
  ],
  "amritsar-2-days": [
    { slug: "dharamshala-3-days", why: "Tibetan hill town, 4 hours into the mountains", travel: "4hr drive" },
    { slug: "shimla-3-days", why: "Colonial hill station, 6 hours south", travel: "6hr drive" },
    { slug: "kashmir-6-days", why: "Dal Lake and Gulmarg, 8 hours or 1hr flight", travel: "1hr flight" },
  ],
  "rishikesh-haridwar-3-days": [
    { slug: "mussoorie-3-days", why: "Hill station 1.5 hours uphill", travel: "1.5hr drive" },
    { slug: "nainital-3-days", why: "Lake town, 6 hours east", travel: "6hr drive" },
    { slug: "auli-3-days", why: "Skiing and Nanda Devi views, 8 hours", travel: "8hr via Joshimath" },
  ],
  "kanchipuram-2-days": [
    { slug: "mahabalipuram-2-days", why: "Pallava Shore Temple, 60km east on the coast", travel: "1.5hr drive" },
    { slug: "thanjavur-2-days", why: "Continue the temple circuit south to the Big Temple", travel: "4hr drive" },
    { slug: "pondicherry-3-days", why: "French Quarter and Auroville, 2.5 hours south", travel: "2.5hr drive" },
  ],
  "thanjavur-2-days": [
    { slug: "trichy-2-days", why: "Srirangam Temple, 55km east", travel: "1hr drive" },
    { slug: "madurai-3-days", why: "Meenakshi Temple, continue south", travel: "3.5hr drive" },
    { slug: "kanchipuram-2-days", why: "Start the temple circuit from the north", travel: "4hr drive" },
  ],
  "tamil-nadu-temple-circuit-7-days": [
    { slug: "kerala-5-days", why: "Backwaters after temples — perfect contrast", travel: "5hr from Madurai" },
    { slug: "pondicherry-3-days", why: "French Quarter detour from the circuit", travel: "2.5hr from Mahabalipuram" },
    { slug: "hampi-3-days", why: "Another UNESCO temple city, continue west", travel: "8hr from Madurai" },
  ],
  "northeast-india-10-days": [
    { slug: "darjeeling-4-days", why: "Tea gardens and Kanchenjunga views on the way", travel: "Via NJP/Bagdogra" },
    { slug: "sikkim-6-days", why: "Gangtok and monasteries, natural extension", travel: "5hr from Guwahati" },
    { slug: "kolkata-3-days", why: "Gateway city — spend 2–3 days before flying northeast", travel: "2hr flight to Guwahati" },
  ],
  "kolkata-3-days": [
    { slug: "darjeeling-4-days", why: "Hill station gateway, overnight train from Kolkata", travel: "10hr train to NJP + 3hr drive" },
    { slug: "sundarbans-3-days", why: "Royal Bengal Tiger mangroves, 4 hours south", travel: "4hr drive + boat" },
    { slug: "varanasi-3-days", why: "India's spiritual capital, overnight train", travel: "12hr train" },
  ],
  "darjeeling-4-days": [
    { slug: "sikkim-6-days", why: "Gangtok is just 4 hours away", travel: "4hr drive" },
    { slug: "sundarbans-3-days", why: "Tiger mangroves near Kolkata on the way back", travel: "Via Kolkata" },
  ],
  "hyderabad-3-days": [
    { slug: "hampi-3-days", why: "Ancient ruins, 6 hours southwest", travel: "6hr drive or bus" },
    { slug: "vizag-3-days", why: "Beach city with Araku Valley, 6 hours east", travel: "6hr train" },
  ],
  "lonavala-2-days": [
    { slug: "mahabaleshwar-2-days", why: "Another Western Ghats hill station, 3 hours south", travel: "3hr drive" },
    { slug: "goa-3-days", why: "Beaches, 9 hours down the Konkan coast", travel: "9hr drive or train" },
  ],
};

interface CombineWithProps {
  currentSlug: string;
}

export default function CombineWith({ currentSlug }: CombineWithProps) {
  const pairings = PAIRINGS[currentSlug];
  if (!pairings || pairings.length === 0) return null;

  return (
    <div className="my-10 bg-parchment border border-parchment-2 rounded-2xl p-6 md:p-8">
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-1">
        Extend your trip
      </p>
      <h3 className="font-serif text-xl font-light text-ink mb-5">
        Combine this with&hellip;
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pairings.map((p) => {
          const post = blogPosts.find((b) => b.slug === p.slug);
          if (!post) return null;
          return (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="flex flex-col bg-white rounded-xl border border-parchment-2 p-4 hover:border-gold hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full font-medium">
                  +{post.duration}
                </span>
                <span className="text-xs text-muted">{p.travel}</span>
              </div>
              <p className="font-medium text-sm text-ink group-hover:text-teal transition-colors mb-1">
                {post.destination} &rarr;
              </p>
              <p className="text-xs text-muted font-light leading-relaxed">
                {p.why}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
