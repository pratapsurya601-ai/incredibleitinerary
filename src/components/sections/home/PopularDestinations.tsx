"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const POPULAR = [
  // India
  { name: "Kashmir", duration: "6 Days", budget: "From ₹18k", tag: "🇮🇳 Most Popular", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=75", href: "/blog/kashmir-6-days", color: "from-blue-600" },
  { name: "Rajasthan", duration: "7 Days", budget: "From ₹15k", tag: "🇮🇳 Heritage", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", href: "/blog/rajasthan-7-days", color: "from-amber-600" },
  { name: "Goa", duration: "3 Days", budget: "From ₹8k", tag: "🇮🇳 Beach", img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=75", href: "/blog/goa-3-days", color: "from-cyan-600" },
  // Thailand
  { name: "Bangkok", duration: "4 Days", budget: "From $22/day", tag: "🇹🇭 Thailand", img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=75", href: "/blog/bangkok-4-days", color: "from-yellow-600" },
  // Japan
  { name: "Tokyo", duration: "5 Days", budget: "From $53/day", tag: "🇯🇵 Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=75", href: "/blog/tokyo-5-days", color: "from-rose-600" },
  { name: "Kyoto", duration: "4 Days", budget: "From $47/day", tag: "🇯🇵 Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75", href: "/blog/kyoto-4-days", color: "from-pink-600" },
  // Italy
  { name: "Rome", duration: "4 Days", budget: "From $65/day", tag: "🇮🇹 Italy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=75", href: "/blog/rome-4-days", color: "from-red-600" },
  // India
  { name: "Kerala", duration: "5 Days", budget: "From ₹15k", tag: "🇮🇳 Nature", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", href: "/blog/kerala-5-days", color: "from-green-600" },
];

export default function PopularDestinations() {
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
          <Link href="/blog" className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-dark border-b border-gold-dark pb-0.5 hover:text-ink transition-colors">
            View All 284+ Guides &rarr;
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {POPULAR.map((d, i) => (
            <FadeIn key={d.name} delay={i * 50}>
              <Link href={d.href} className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image src={d.img} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" loading={i < 4 ? "eager" : "lazy"} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${d.color}/40 via-transparent to-transparent`} />
                  <span className="absolute top-3 left-3 text-[0.6rem] font-semibold tracking-wider uppercase bg-gold text-ink px-2.5 py-1 rounded-full shadow-sm">
                    {d.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/70 to-transparent">
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
