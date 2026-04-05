import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getDestinationMeta } from "@/data/destinationMeta";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "../BlogSlugNav";
import { BlogPostSchema } from "@/components/SchemaMarkup";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  const year = new Date().getFullYear();
  return {
    title: `${post.destination} for Couples: Romantic Travel Guide (${year})`,
    description: `Planning a romantic trip to ${post.destination}? Discover the best romantic spots, couples activities, budget breakdown, and honeymoon tips for ${year}.`,
    openGraph: {
      title: `${post.destination} for Couples — Romantic Travel Guide`,
      description: `Romantic spots, couples activities, and honeymoon tips for ${post.destination}.`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: {
      canonical: `https://www.incredibleitinerary.com/blog/${post.slug}/couples-guide`,
    },
  };
}

export default function CouplesGuidePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = getDestinationMeta(post);
  const year = new Date().getFullYear();
  const { budget, mid, luxury, currency } = meta.budgetPerCouplePerDay;

  return (
    <>
      <BlogPostSchema post={post} />
      <BlogSlugNav />
      <main className="pt-[72px] bg-cream min-h-screen">

        {/* ── Hero ── */}
        <div
          className="relative h-[320px] md:h-[380px] overflow-hidden"
          style={{ backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 max-w-[900px]">
            <div className="flex items-center gap-2 mb-3">
              <Link href={`/blog/${post.slug}`} className="text-white/60 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors">
                {post.destination} Guide
              </Link>
              <span className="text-white/40 text-xs">›</span>
              <span className="text-gold text-xs tracking-[0.1em] uppercase">Couples Guide</span>
            </div>
            <h1 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-light text-white leading-tight">
              {post.destination} for Couples
            </h1>
            <p className="text-white/65 text-sm mt-2 font-light">
              Romantic experiences, honeymoon tips & couples budget · {year}
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[860px] mx-auto px-6 py-14">

          {/* Why it's romantic */}
          <div className="bg-parchment border border-parchment-2 rounded-2xl p-7 mb-12">
            <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">Why Couples Love It</p>
            <p className="font-serif text-xl font-light text-ink leading-relaxed mb-3">{meta.couplesNote}</p>
            <p className="text-sm text-muted font-light">
              Best time for couples:{" "}
              <span className="text-ink font-medium">
                {meta.bestMonths.slice(0, 3).join(", ")}
              </span>
            </p>
          </div>

          {/* Romantic spots */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">
              Most Romantic Spots in {post.destination}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {meta.romanticSpots.map((spot, i) => (
                <div key={i} className="flex items-start gap-3 bg-parchment border border-parchment-2 rounded-xl p-4">
                  <span className="text-gold text-lg mt-0.5 flex-shrink-0">♡</span>
                  <p className="text-sm text-ink font-light leading-relaxed">{spot}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Couples activities */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">
              Top Couples Activities
            </h2>
            <div className="space-y-3">
              {meta.couplesActivities.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-parchment-2 last:border-0">
                  <span className="text-gold font-serif text-base flex-shrink-0 mt-0.5">0{i + 1}</span>
                  <p className="text-sm text-ink font-light leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Budget breakdown */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-2">
              Couples Budget Guide
            </h2>
            <p className="text-sm text-muted font-light mb-6">Estimated per couple, per day (accommodation + food + local transport + activities)</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  tier: "Budget Couple",
                  price: budget,
                  emoji: "🎒",
                  desc: "Hostels / guesthouses, street food, local transport, free activities",
                  items: ["Shared dorm or basic room", "Local dhabas & street food", "Buses and shared autos", "Free temples / viewpoints"],
                },
                {
                  tier: "Mid-Range Couple",
                  price: mid,
                  emoji: "✨",
                  desc: "Boutique hotels, restaurant meals, private cabs, paid attractions",
                  items: ["Boutique or 3-star hotel", "Mix of restaurants & cafés", "Ola/Uber or private cab", "Entry fees & boat rides"],
                },
                {
                  tier: "Luxury Couple",
                  price: luxury,
                  emoji: "🌹",
                  desc: "Heritage hotels & resorts, fine dining, private transfers, exclusive experiences",
                  items: ["Heritage hotel or resort", "Fine dining restaurants", "Private chauffeur-driven car", "Private tours & spa treatments"],
                },
              ].map((tier) => (
                <div key={tier.tier} className="bg-parchment border border-parchment-2 rounded-2xl p-6 flex flex-col">
                  <div className="text-2xl mb-3">{tier.emoji}</div>
                  <p className="text-[0.65rem] tracking-[0.14em] uppercase text-muted font-medium mb-1">{tier.tier}</p>
                  <p className="font-serif text-2xl font-light text-ink mb-1">
                    {currency}{tier.price.toLocaleString("en-IN")}
                    <span className="text-sm text-muted font-light"> /day</span>
                  </p>
                  <p className="text-xs text-muted font-light mb-4 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-1.5 mt-auto">
                    {tier.items.map((item) => (
                      <li key={item} className="text-xs text-muted font-light flex items-start gap-2">
                        <span className="text-gold flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Honeymoon tips */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">
              Honeymoon Tips for {post.destination}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Book in Advance", tip: "Especially for peak months. The best boutique hotels and unique stays fill up 6–8 weeks ahead." },
                { title: "Travel Light", tip: "Two carry-ons vs one large bag means more flexibility and no checked baggage queues." },
                { title: "Go Early", tip: "Beat the crowds at top attractions by arriving first thing. You'll get iconic spots almost to yourselves." },
                { title: "Splurge on One Night", tip: "Book one special hotel or resort for your first or last night — it anchors the whole trip emotionally." },
                { title: "Tell the Hotel", tip: "Mention it's your honeymoon when booking. Many properties offer a complimentary upgrade or petit four." },
                { title: "Stay Flexible", tip: "The best couple moments are unplanned — leave at least one afternoon per day with nothing booked." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment border border-parchment-2 rounded-xl p-5">
                  <p className="text-[0.68rem] tracking-[0.12em] uppercase text-gold font-medium mb-1.5">{item.title}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-8">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">More {post.destination} Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: `/blog/${post.slug}`, label: `${post.duration} Itinerary`, desc: "Full day-by-day plan with budgets" },
                { href: `/blog/${post.slug}/best-time`, label: "Best Time to Visit", desc: "Month-by-month weather guide" },
                { href: `/blog/${post.slug}/packing-list`, label: "What to Pack", desc: "Complete packing list by season" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-parchment border border-parchment-2 rounded-xl p-5 hover:border-gold/40 transition-all group"
                >
                  <p className="text-[0.7rem] tracking-[0.12em] uppercase text-gold font-medium mb-1">Guide</p>
                  <p className="font-serif text-base font-light text-ink group-hover:text-gold transition-colors">{link.label}</p>
                  <p className="text-xs text-muted font-light mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* ── CTA ── */}
        <div className="bg-parchment border-t border-parchment-2 py-16 px-6 md:px-12 text-center">
          <div className="max-w-[520px] mx-auto">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-light text-ink mb-3">
              Plan Your Romantic {post.destination} Trip
            </h2>
            <p className="text-sm text-muted font-light mb-7 leading-[1.8]">
              Tell us your travel dates, group size, and budget. We&apos;ll craft a personalised itinerary — completely free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/" className="btn-gold inline-flex">
                Plan My Free Trip →
              </Link>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:text-gold transition-all duration-200"
              >
                View Full Itinerary
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
