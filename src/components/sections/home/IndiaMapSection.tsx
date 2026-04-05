"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { blogPosts } from "@/data/blog";

const REGIONS = [
  {
    name: "Rajasthan",
    count: 8,
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=75",
    destinations: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur", "Pushkar", "Mount Abu", "Ranthambore"],
    href: "/blog?filter=heritage",
    color: "from-amber-900/80",
  },
  {
    name: "Himachal",
    count: 6,
    img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=75",
    destinations: ["Manali", "Shimla", "Dharamshala", "Kasol", "Spiti Valley", "Jibhi"],
    href: "/blog?filter=mountains",
    color: "from-blue-900/80",
  },
  {
    name: "South India",
    count: 12,
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=75",
    destinations: ["Kerala", "Goa", "Ooty", "Coorg", "Hampi", "Mysore", "Pondicherry", "Kodaikanal"],
    href: "/blog?filter=hillstation",
    color: "from-green-900/80",
  },
  {
    name: "Northeast",
    count: 7,
    img: "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=500&q=75",
    destinations: ["Meghalaya", "Sikkim", "Tawang", "Kaziranga", "Shillong", "Darjeeling"],
    href: "/blog?filter=northeast",
    color: "from-emerald-900/80",
  },
  {
    name: "Uttarakhand",
    count: 6,
    img: "https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?w=500&q=75",
    destinations: ["Rishikesh", "Mussoorie", "Nainital", "Auli", "Jim Corbett", "Valley of Flowers"],
    href: "/blog?filter=mountains",
    color: "from-sky-900/80",
  },
  {
    name: "Heritage & Spiritual",
    count: 10,
    img: "https://images.unsplash.com/photo-1561304381-70c65d96a3de?w=500&q=75",
    destinations: ["Varanasi", "Amritsar", "Agra", "Khajuraho", "Orchha", "Hyderabad"],
    href: "/blog?filter=spiritual",
    color: "from-orange-900/80",
  },
  {
    name: "🇹🇭 Thailand",
    count: 3,
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=500&q=75",
    destinations: ["Bangkok", "Phuket & Phi Phi", "Chiang Mai"],
    href: "/blog?filter=thailand",
    color: "from-yellow-900/80",
  },
  {
    name: "🇯🇵 Japan",
    count: 3,
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=75",
    destinations: ["Tokyo", "Kyoto", "Osaka"],
    href: "/blog?filter=japan",
    color: "from-rose-900/80",
  },
  {
    name: "🇮🇹 Italy",
    count: 3,
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&q=75",
    destinations: ["Rome", "Florence", "Amalfi Coast"],
    href: "/blog?filter=italy",
    color: "from-red-900/80",
  },
];

export default function IndiaMapSection() {
  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">
            Explore by region
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-white mb-3">
            {blogPosts.length}+ guides across <em className="italic text-gold-light">50+ countries</em>
          </h2>
          <p className="text-sm text-white/40 font-light max-w-md mx-auto">
            India, Japan, Thailand, Europe, SE Asia, Middle East &amp; more. Pick a region to start exploring.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGIONS.map((region, i) => (
            <FadeIn key={region.name} delay={i * 60}>
              <Link href={region.href} className="group block rounded-2xl overflow-hidden relative h-64 border border-white/10 hover:border-gold/40 transition-all duration-300">
                <Image
                  src={region.img}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${region.color} via-ink/30 to-ink/10`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-2xl text-white font-light">{region.name}</h3>
                    <span className="text-[0.6rem] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-medium">
                      {region.count} guides
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-light">
                    {region.destinations.join(" · ")}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="text-center mt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-medium">
            View all {blogPosts.length}+ destination guides &rarr;
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
