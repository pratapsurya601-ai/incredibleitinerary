"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const BLOGS = [
  { name: "Kashmir",        emoji: "🏔️", days: "6 Days", budget: "From ₹18k", href: "/blog/kashmir-6-days",        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75", tag: "Heaven on Earth" },
  { name: "Golden Triangle",emoji: "🕌", days: "7 Days", budget: "From ₹18k", href: "/blog/golden-triangle-7-days",img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=75", tag: "Most Popular" },
  { name: "Rajasthan",      emoji: "🏰", days: "7 Days", budget: "From ₹15k", href: "/blog/rajasthan-7-days",      img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", tag: "Heritage" },
  { name: "Kerala",         emoji: "🌿", days: "5 Days", budget: "From ₹15k", href: "/blog/kerala-5-days",         img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", tag: "Nature" },
  { name: "Andaman",        emoji: "🤿", days: "5 Days", budget: "From ₹18k", href: "/blog/andaman-5-days",        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=75", tag: "Trending" },
  { name: "Goa",            emoji: "🏖️", days: "3 Days", budget: "From ₹8k",  href: "/blog/goa-3-days",           img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=75", tag: "Beach" },
  { name: "Varanasi",       emoji: "🕯️", days: "3 Days", budget: "From ₹6k",  href: "/blog/varanasi-3-days",      img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=75", tag: "Spiritual" },
  { name: "Meghalaya",      emoji: "🌿", days: "5 Days", budget: "From ₹12k", href: "/blog/meghalaya-5-days",     img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=75", tag: "New" },
  { name: "Sikkim",         emoji: "🏔️", days: "6 Days", budget: "From ₹18k", href: "/blog/sikkim-6-days",        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=75", tag: "Northeast" },
  { name: "Pondicherry",    emoji: "🏖️", days: "3 Days", budget: "From ₹6k",  href: "/blog/pondicherry-3-days",   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=75", tag: "Couples" },
  { name: "Gujarat",        emoji: "🦁", days: "7 Days", budget: "From ₹15k", href: "/blog/gujarat-7-days",       img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=75", tag: "Offbeat" },
  { name: "Amritsar",       emoji: "🕌", days: "2 Days", budget: "From ₹4k",  href: "/blog/amritsar-2-days",      img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=75", tag: "Must Visit" },
];

export default function DestinationGridSection() {
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="section-label">Free itinerary guides</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
              19 destinations.<br /><em className="italic text-teal">All free. All detailed.</em>
            </h2>
          </div>
          <Link href="/blog" className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-dark border-b border-gold-dark pb-0.5 hover:text-ink transition-colors">
            View All Guides →
          </Link>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BLOGS.map((b, i) => (
            <FadeIn key={b.name} delay={i * 60}>
              <Link href={b.href} className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative h-36 overflow-hidden">
                  <Image src={b.img} alt={`${b.name} travel destination`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 text-[0.58rem] font-semibold tracking-wider uppercase bg-gold text-ink px-2 py-0.5 rounded-full">{b.tag}</span>
                  <p className="absolute bottom-2.5 left-3 font-serif text-white text-lg font-light">{b.emoji} {b.name}</p>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-xs text-muted font-light">🗓 {b.days}</span>
                  <span className="text-xs text-teal font-medium">{b.budget}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
