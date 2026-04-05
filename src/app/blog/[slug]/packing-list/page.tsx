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
    title: `${post.destination} Packing List (${year}) — What to Pack & What to Leave`,
    description: `Complete packing list for ${post.destination}. Everything you need for a ${post.duration} trip — by season, clothing, gear, and destination-specific essentials.`,
    openGraph: {
      title: `${post.destination} Packing List — What to Pack for ${post.duration}`,
      description: `Season-by-season packing guide for ${post.destination}.`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: {
      canonical: `https://www.incredibleitinerary.com/blog/${post.slug}/packing-list`,
    },
  };
}

interface PackingSection {
  title: string;
  emoji: string;
  items: string[];
  color: string;
}

export default function PackingListPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = getDestinationMeta(post);
  const year = new Date().getFullYear();

  const sections: PackingSection[] = [
    {
      title: "Documents & Essentials",
      emoji: "📋",
      items: meta.packing.essentials,
      color: "bg-amber-50 border-amber-200",
    },
    {
      title: "Clothing",
      emoji: "👕",
      items: meta.packing.clothing,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Toiletries & Health",
      emoji: "🧴",
      items: meta.packing.toiletries,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Electronics",
      emoji: "📱",
      items: meta.packing.electronics,
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: `${post.destination}-Specific`,
      emoji: "📍",
      items: meta.packing.specific,
      color: "bg-gold/5 border-gold/25",
    },
  ];

  const doNotPack = [
    "Heavy jeans (swap for lightweight travel trousers)",
    "Multiple pairs of shoes (2 pairs maximum)",
    "Full-sized toiletry bottles (use travel-size or buy locally)",
    "Books (use a Kindle — saves 800g+)",
    "Excessive valuables (jewellery, unnecessary gadgets)",
    "Items you haven't used in the last month at home",
  ];

  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);

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
              <span className="text-gold text-xs tracking-[0.1em] uppercase">Packing List</span>
            </div>
            <h1 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-light text-white leading-tight">
              {post.destination} Packing List
            </h1>
            <p className="text-white/65 text-sm mt-2 font-light">
              What to pack for {post.duration} · {year} Edition
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[860px] mx-auto px-6 py-14">

          {/* Quick summary */}
          <div className="bg-parchment border border-parchment-2 rounded-2xl p-7 mb-12">
            <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">Trip Summary</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
              {[
                { label: "Duration", value: post.duration },
                { label: "Category", value: post.category },
                { label: "Best Months", value: meta.bestMonths.slice(0, 2).join(", ") },
                { label: "Items Listed", value: `${totalItems}+` },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[0.62rem] tracking-[0.12em] uppercase text-muted font-medium">{item.label}</p>
                  <p className="font-serif text-lg font-light text-ink mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packing sections */}
          <section className="mb-14 space-y-8">
            <h2 className="font-serif text-[1.5rem] font-light text-ink">Your {post.destination} Packing List</h2>
            {sections.map((section) => (
              <div key={section.title} className={`rounded-2xl border p-6 ${section.color}`}>
                <h3 className="font-serif text-lg font-light text-ink mb-4 flex items-center gap-2.5">
                  <span>{section.emoji}</span>
                  {section.title}
                  <span className="text-[0.65rem] tracking-[0.1em] text-muted font-light uppercase ml-auto">
                    {section.items.length} items
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="text-gold text-base flex-shrink-0 mt-0.5">☐</span>
                      <span className="text-sm text-ink font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* What NOT to pack */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">What to Leave Behind</h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="text-sm text-muted font-light mb-4 leading-relaxed">
                Overpacking is one of the biggest travel mistakes. Leave these at home:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {doNotPack.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-red-400 text-base flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-sm text-red-800 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packing tips */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">
              Pro Packing Tips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Use Packing Cubes", tip: "Compression packing cubes can cut your bag size by 30%. Separate by clothing type, not by day." },
                { title: "Roll, Don't Fold", tip: "Rolling clothes prevents creases and saves up to 20% more space versus folding flat." },
                { title: "Wear Bulky Items", tip: "Wear your heaviest shoes and bulkiest layer on travel days — they don't count as luggage weight." },
                { title: "Buy Toiletries Locally", tip: `Basics like shampoo, sunscreen, and toothpaste are available everywhere in ${post.destination}. Don't carry them from home.` },
                { title: "Pack for the Return", tip: "Leave 20% of bag space empty. You'll inevitably buy something worth taking home." },
                { title: "One Bag Rule", tip: "Carry-on only when possible. It removes the anxiety of lost luggage and speeds up every transit." },
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
                { href: `/blog/${post.slug}/couples-guide`, label: "Couples Guide", desc: "Romantic tips & experiences" },
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
              Ready to Pack for {post.destination}?
            </h2>
            <p className="text-sm text-muted font-light mb-7 leading-[1.8]">
              We&apos;ll build a personalised itinerary around your exact travel dates, group size, and budget — completely free.
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
