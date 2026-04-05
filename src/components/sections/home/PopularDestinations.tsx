"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { blogPosts } from "@/data/blog";

// ── Full pool — 24 destinations ─────────────────────────────────────────────
const ALL_DESTINATIONS = [
  // India
  { name: "Kashmir", duration: "6 Days", budget: "From ₹18k", tag: "🇮🇳 Most Popular", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=75", href: "/blog/kashmir-6-days" },
  { name: "Rajasthan", duration: "7 Days", budget: "From ₹15k", tag: "🇮🇳 Heritage", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", href: "/blog/rajasthan-7-days" },
  { name: "Goa", duration: "3 Days", budget: "From ₹8k", tag: "🇮🇳 Beach", img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=75", href: "/blog/goa-3-days" },
  { name: "Kerala", duration: "5 Days", budget: "From ₹15k", tag: "🇮🇳 Nature", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", href: "/blog/kerala-5-days" },
  { name: "Leh Ladakh", duration: "7 Days", budget: "From ₹25k", tag: "🇮🇳 Adventure", img: "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?w=600&q=75", href: "/blog/leh-ladakh-7-days" },
  { name: "Andaman", duration: "5 Days", budget: "From ₹20k", tag: "🇮🇳 Island", img: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=600&q=75", href: "/blog/andaman-5-days" },
  { name: "Manali", duration: "5 Days", budget: "From ₹12k", tag: "🇮🇳 Mountains", img: "https://images.unsplash.com/photo-1677821374212-8c3e88292b1b?w=600&q=75", href: "/blog/manali-5-days" },
  { name: "Meghalaya", duration: "5 Days", budget: "From ₹14k", tag: "🇮🇳 Northeast", img: "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=600&q=75", href: "/blog/meghalaya-5-days" },
  { name: "Varanasi", duration: "3 Days", budget: "From ₹7k", tag: "🇮🇳 Spiritual", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=600&q=75", href: "/blog/varanasi-3-days" },
  { name: "Spiti Valley", duration: "7 Days", budget: "From ₹18k", tag: "🇮🇳 Offbeat", img: "https://images.unsplash.com/photo-1673246239376-f3c01a13bab0?w=600&q=75", href: "/blog/spiti-valley-7-days" },
  // International
  { name: "Bangkok", duration: "4 Days", budget: "From $22/day", tag: "🇹🇭 Thailand", img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=75", href: "/blog/bangkok-4-days" },
  { name: "Tokyo", duration: "5 Days", budget: "From $53/day", tag: "🇯🇵 Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=75", href: "/blog/tokyo-5-days" },
  { name: "Kyoto", duration: "4 Days", budget: "From $47/day", tag: "🇯🇵 Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75", href: "/blog/kyoto-4-days" },
  { name: "Rome", duration: "4 Days", budget: "From $65/day", tag: "🇮🇹 Italy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=75", href: "/blog/rome-4-days" },
  { name: "Bali", duration: "5 Days", budget: "From $35/day", tag: "🇮🇩 Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=75", href: "/blog/bali-5-days" },
  { name: "Maldives", duration: "5 Days", budget: "From $200/day", tag: "🇲🇻 Island", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=75", href: "/blog/maldives-5-days" },
  { name: "Santorini", duration: "4 Days", budget: "From $90/day", tag: "🇬🇷 Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=75", href: "/blog/santorini-4-days" },
  { name: "Paris", duration: "5 Days", budget: "From $95/day", tag: "🇫🇷 France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=75", href: "/blog/paris-5-days" },
  { name: "Dubai", duration: "4 Days", budget: "From $80/day", tag: "🇦🇪 UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=75", href: "/blog/dubai-4-days" },
  { name: "Singapore", duration: "3 Days", budget: "From $70/day", tag: "🇸🇬 Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=75", href: "/blog/singapore-3-days" },
  { name: "Istanbul", duration: "5 Days", budget: "From $45/day", tag: "🇹🇷 Turkey", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=75", href: "/blog/istanbul-5-days" },
  { name: "Barcelona", duration: "4 Days", budget: "From $70/day", tag: "🇪🇸 Spain", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=75", href: "/blog/barcelona-4-days" },
  { name: "Phuket", duration: "5 Days", budget: "From $30/day", tag: "🇹🇭 Thailand", img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=75", href: "/blog/phuket-5-days" },
  { name: "Cappadocia", duration: "3 Days", budget: "From $55/day", tag: "🇹🇷 Turkey", img: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=75", href: "/blog/cappadocia-3-days" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SHOW = 8;

export default function PopularDestinations() {
  const [pool, setPool] = useState(ALL_DESTINATIONS.slice(0, SHOW));
  const [isShuffling, setIsShuffling] = useState(false);

  // Shuffle on first mount
  useEffect(() => {
    setPool(shuffle(ALL_DESTINATIONS).slice(0, SHOW));
  }, []);

  function reshuffle() {
    setIsShuffling(true);
    setTimeout(() => {
      setPool(shuffle(ALL_DESTINATIONS).slice(0, SHOW));
      setIsShuffling(false);
    }, 200);
  }

  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <FadeIn className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="section-label">Popular Right Now</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light text-ink">
              Trending Destinations
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={reshuffle}
              className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.12em] uppercase text-muted border border-parchment-2 px-3.5 py-1.5 rounded-full hover:border-gold hover:text-gold transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={isShuffling ? "animate-spin" : ""}>
                <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
              </svg>
              Shuffle
            </button>
            <Link href="/blog" className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-dark border-b border-gold-dark pb-0.5 hover:text-ink transition-colors">
              View All {blogPosts.length}+ Guides &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 transition-opacity duration-200 ${isShuffling ? "opacity-0" : "opacity-100"}`}>
          {pool.map((d, i) => (
            <FadeIn key={`${d.href}-${i}`} delay={i * 40}>
              <Link
                href={d.href}
                className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    quality={70}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase bg-gold text-ink px-2.5 py-1 rounded-full shadow-sm">
                    {d.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-xl text-white font-light">{d.name}</p>
                  </div>
                </div>
                <div className="p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted font-light">{d.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-parchment-2" />
                    <span className="text-xs text-teal font-medium">{d.budget}</span>
                  </div>
                  <span className="text-xs text-gold-dark font-medium group-hover:text-teal transition-colors">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
