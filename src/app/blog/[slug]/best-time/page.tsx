import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getDestinationMeta } from "@/data/destinationMeta";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "../BlogSlugNav";

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
    title: `Best Time to Visit ${post.destination} (${year}) — Month-by-Month Guide`,
    description: `When is the best time to visit ${post.destination}? Complete month-by-month weather guide, season breakdown, and travel tips for ${year}.`,
    openGraph: {
      title: `Best Time to Visit ${post.destination} — Month-by-Month Guide`,
      description: `Month-by-month weather, seasons, and travel tips for ${post.destination}.`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: {
      canonical: `https://www.incredibleitinerary.com/blog/${post.slug}/best-time`,
    },
  };
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function BestTimePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = getDestinationMeta(post);
  const year = new Date().getFullYear();

  return (
    <>
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
              <span className="text-gold text-xs tracking-[0.1em] uppercase">Best Time</span>
            </div>
            <h1 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-light text-white leading-tight">
              Best Time to Visit {post.destination}
            </h1>
            <p className="text-white/65 text-sm mt-2 font-light">
              Month-by-month weather guide · {year}
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[860px] mx-auto px-6 py-14">

          {/* Quick answer */}
          <div className="bg-parchment border border-parchment-2 rounded-2xl p-7 mb-12">
            <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">Quick Answer</p>
            <p className="font-serif text-xl font-light text-ink mb-3">
              The best time to visit {post.destination} is{" "}
              <span className="text-gold">
                {meta.bestMonths.slice(0, 3).join(", ")}
                {meta.bestMonths.length > 3 ? ` and ${meta.bestMonths[3]}` : ""}
              </span>.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed">{meta.climate}</p>
          </div>

          {/* Month calendar */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">Month-by-Month Overview</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
              {MONTHS.map((m, i) => {
                const full = MONTH_FULL[i];
                const isBest = meta.bestMonths.includes(full);
                const isAvoid = meta.avoidMonths.includes(full);
                return (
                  <div
                    key={m}
                    className={`flex flex-col items-center py-3 px-1 rounded-xl border text-center transition-all ${
                      isBest
                        ? "bg-gold/10 border-gold/30 text-ink"
                        : isAvoid
                        ? "bg-red-50 border-red-200 text-red-700"
                        : "bg-parchment border-parchment-2 text-muted"
                    }`}
                  >
                    <span className="text-[0.65rem] font-medium tracking-wide">{m}</span>
                    <span className="text-base mt-1">
                      {isBest ? "✓" : isAvoid ? "✗" : "~"}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 mt-4 text-[0.7rem] text-muted font-light">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-gold/20 border border-gold/30 inline-block" /> Best months</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-parchment border border-parchment-2 inline-block" /> Acceptable</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-50 border border-red-200 inline-block" /> Avoid if possible</span>
            </div>
          </section>

          {/* Season breakdown */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">Season Breakdown</h2>
            <div className="space-y-5">
              {meta.seasons.map((season) => (
                <div
                  key={season.name}
                  className={`rounded-2xl border p-6 ${
                    season.type === "best"
                      ? "bg-gold/5 border-gold/25"
                      : season.type === "avoid"
                      ? "bg-red-50/60 border-red-200"
                      : "bg-parchment border-parchment-2"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0 mt-0.5">{season.emoji}</span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="font-serif text-lg font-light text-ink">{season.name}</h3>
                        <span className={`text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full font-medium ${
                          season.type === "best"
                            ? "bg-gold/15 text-amber-800"
                            : season.type === "avoid"
                            ? "bg-red-100 text-red-700"
                            : "bg-parchment-2 text-muted"
                        }`}>
                          {season.type === "best" ? "Recommended" : season.type === "avoid" ? "Not Recommended" : "Acceptable"}
                        </span>
                        <span className="text-xs text-muted font-light">{season.months}</span>
                      </div>
                      <p className="text-sm text-muted font-light leading-relaxed">{season.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips table */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">Travel Tips by Season</h2>
            <div className="rounded-2xl border border-parchment-2 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left px-5 py-3.5 font-medium text-ink text-[0.72rem] tracking-[0.08em] uppercase">Aspect</th>
                    <th className="text-left px-5 py-3.5 font-medium text-ink text-[0.72rem] tracking-[0.08em] uppercase">Peak Season ({meta.bestMonths[0]}–{meta.bestMonths[meta.bestMonths.length - 1]})</th>
                    <th className="text-left px-5 py-3.5 font-medium text-ink text-[0.72rem] tracking-[0.08em] uppercase">Off-Season</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: "Weather", peak: "Ideal conditions", off: "May be hot, rainy, or cold" },
                    { aspect: "Crowds", peak: "Higher tourist footfall", off: "Noticeably fewer tourists" },
                    { aspect: "Hotel Prices", peak: "20–40% higher", off: "20–40% cheaper" },
                    { aspect: "Availability", peak: "Book 4–8 weeks ahead", off: "Last-minute bookings OK" },
                    { aspect: "Activities", peak: "All attractions open", off: "Some may be seasonal" },
                    { aspect: "Photography", peak: "Clear light, best visuals", off: "Unique moody shots possible" },
                  ].map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                      <td className="px-5 py-3.5 font-medium text-ink text-[0.82rem]">{row.aspect}</td>
                      <td className="px-5 py-3.5 text-muted font-light text-[0.82rem]">{row.peak}</td>
                      <td className="px-5 py-3.5 text-muted font-light text-[0.82rem]">{row.off}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Related links */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.5rem] font-light text-ink mb-6">More {post.destination} Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: `/blog/${post.slug}`, label: `${post.duration} Itinerary`, desc: "Full day-by-day plan with budgets" },
                { href: `/blog/${post.slug}/packing-list`, label: "What to Pack", desc: "Complete packing list by season" },
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
              Ready to Plan Your {post.destination} Trip?
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
