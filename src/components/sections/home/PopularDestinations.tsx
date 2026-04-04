"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const POPULAR = [
  { name: "Kashmir", duration: "6 Days", budget: "From ₹18k", tag: "Most Popular", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=75", href: "/blog/kashmir-6-days", color: "from-blue-600" },
  { name: "Rajasthan", duration: "7 Days", budget: "From ₹15k", tag: "Heritage", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", href: "/blog/rajasthan-7-days", color: "from-amber-600" },
  { name: "Goa", duration: "3 Days", budget: "From ₹8k", tag: "Beach", img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=75", href: "/blog/goa-3-days", color: "from-cyan-600" },
  { name: "Kerala", duration: "5 Days", budget: "From ₹15k", tag: "Nature", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", href: "/blog/kerala-5-days", color: "from-green-600" },
  { name: "Meghalaya", duration: "5 Days", budget: "From ₹12k", tag: "Trending", img: "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=600&q=75", href: "/blog/meghalaya-5-days", color: "from-emerald-600" },
  { name: "Amritsar", duration: "2 Days", budget: "From ₹4k", tag: "Must Visit", img: "https://images.unsplash.com/photo-1561304381-70c65d96a3de?w=600&q=75", href: "/blog/amritsar-2-days", color: "from-yellow-600" },
  { name: "Ladakh", duration: "7 Days", budget: "From ₹18k", tag: "Bucket List", img: "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?w=600&q=75", href: "/blog/leh-ladakh-7-days", color: "from-indigo-600" },
  { name: "Varanasi", duration: "3 Days", budget: "From ₹6k", tag: "Spiritual", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=600&q=75", href: "/blog/varanasi-3-days", color: "from-orange-600" },
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
            View All 59 &rarr;
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
