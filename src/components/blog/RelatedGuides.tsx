"use client";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

// Region mapping for smart interlinking
const REGIONS: Record<string, string[]> = {
  rajasthan: ["jaipur-3-days", "jodhpur-3-days", "jaisalmer-3-days", "udaipur-3-days", "pushkar-2-days", "mount-abu-2-days", "rajasthan-7-days", "ranthambore-3-days"],
  himachal: ["shimla-3-days", "kasol-3-days", "dharamshala-3-days", "jibhi-tirthan-valley-3-days", "manali-5-days", "spiti-valley-7-days"],
  uttarakhand: ["rishikesh-haridwar-3-days", "mussoorie-3-days", "auli-3-days", "nainital-3-days", "jim-corbett-3-days", "valley-of-flowers-4-days"],
  kashmir: ["kashmir-6-days", "leh-ladakh-7-days"],
  northeast: ["meghalaya-5-days", "sikkim-6-days", "shillong-3-days", "kaziranga-3-days", "tawang-4-days", "majuli-3-days"],
  kerala: ["kerala-5-days", "alleppey-3-days", "munnar-3-days", "wayanad-3-days"],
  tamilnadu: ["ooty-3-days", "kodaikanal-3-days", "pondicherry-3-days", "madurai-2-days", "rameswaram-2-days", "kanyakumari-2-days"],
  karnataka: ["coorg-3-days", "hampi-3-days", "gokarna-3-days", "mysore-3-days"],
  golden: ["golden-triangle-7-days", "agra-2-days", "jaipur-3-days"],
  mp: ["khajuraho-2-days", "orchha-2-days"],
  gujarat: ["gujarat-7-days", "diu-2-days", "dwarka-2-days"],
  maharashtra: ["lonavala-2-days", "mahabaleshwar-2-days"],
  bengal: ["darjeeling-4-days", "sundarbans-3-days"],
  spiritual: ["varanasi-3-days", "amritsar-2-days", "rishikesh-haridwar-3-days", "rameswaram-2-days", "dwarka-2-days"],
  wildlife: ["jim-corbett-3-days", "ranthambore-3-days", "kaziranga-3-days", "sundarbans-3-days"],
  beach: ["goa-3-days", "gokarna-3-days", "andaman-5-days", "pondicherry-3-days", "diu-2-days"],
};

function getRegion(slug: string): string | null {
  for (const [region, slugs] of Object.entries(REGIONS)) {
    if (slugs.includes(slug)) return region;
  }
  return null;
}

interface RelatedGuidesProps {
  currentSlug: string;
}

export default function RelatedGuides({ currentSlug }: RelatedGuidesProps) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return null;

  const others = blogPosts.filter((p) => p.slug !== currentSlug);
  const currentRegion = getRegion(currentSlug);

  // 1. Same region (nearby destinations)
  const sameRegion = currentRegion
    ? others.filter((p) => REGIONS[currentRegion]?.includes(p.slug))
    : [];

  // 2. Different region but similar vibe (category match)
  const sameCategory = others.filter(
    (p) => p.category === current.category && !sameRegion.includes(p)
  );

  // 3. Popular fallbacks
  const popular = others.filter(
    (p) => p.featured || ["goa-3-days", "kashmir-6-days", "rajasthan-7-days", "meghalaya-5-days", "amritsar-2-days"].includes(p.slug)
  );

  // Pick: 1 from same region, 1 from same category, 1 popular — all different
  const picks: typeof blogPosts = [];
  const used = new Set<string>();

  const addPick = (pool: typeof blogPosts) => {
    for (const p of pool) {
      if (!used.has(p.slug)) {
        picks.push(p);
        used.add(p.slug);
        return;
      }
    }
  };

  // Shuffle within pools for variety
  const shuffle = <T,>(arr: T[]): T[] => arr.sort(() => Math.random() - 0.5);

  addPick(shuffle([...sameRegion]));
  addPick(shuffle([...sameCategory]));
  addPick(shuffle([...popular]));

  // Fill remaining slots from all others
  while (picks.length < 3) {
    addPick(shuffle([...others]));
    if (picks.length >= others.length) break;
  }

  if (picks.length === 0) return null;

  // Label for the section
  const regionLabel = sameRegion.length > 0 ? "Nearby & Related" : "You Might Also Like";

  return (
    <section className="mt-16 pt-12 border-t border-parchment-2">
      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-gold-dark mb-2.5 block font-sans font-medium">
        {regionLabel}
      </p>
      <h3 className="font-serif text-2xl font-light text-ink mb-6">
        Explore other <em className="italic text-teal">free guides</em>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {picks.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="relative h-36 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute top-2.5 left-2.5 text-xs font-semibold tracking-wider uppercase bg-gold text-ink px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <p className="absolute bottom-2.5 left-3 font-serif text-white text-lg font-light">
                {post.destination}
              </p>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-muted font-light">
                <span aria-hidden="true">🗓</span> {post.duration}
              </span>
              <span className="text-xs text-teal font-medium">{post.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
