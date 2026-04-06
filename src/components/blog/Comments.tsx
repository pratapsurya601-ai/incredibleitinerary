"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const GISCUS_CONFIG = {
  repo:              "pratapsurya601-ai/incredibleitinerary",
  repoId:            "R_kgDORrTXfw",
  category:          "General",
  categoryId:        "DIC_kwDORrTXf84C413p",
  mapping:           "pathname",
  reactionsEnabled:  "1",
  emitMetadata:      "0",
  inputPosition:     "top",
  theme:             "light",
  lang:              "en",
};

// Per-blog prompt cards
const BLOG_PROMPTS: Record<string, { emoji: string; q: string }[]> = {
  "/blog/goa-3-days": [
    { emoji: "🏖️", q: "Which beach surprised you most in Goa?" },
    { emoji: "🍽️", q: "Best restaurant you found in Goa?" },
    { emoji: "💡", q: "Something this guide missed?" },
  ],
  "/blog/rajasthan-7-days": [
    { emoji: "🏰", q: "Which fort impressed you most?" },
    { emoji: "🐪", q: "How was your desert camp experience?" },
    { emoji: "💡", q: "Any hidden gems in Rajasthan?" },
  ],
  "/blog/kerala-5-days": [
    { emoji: "🛶", q: "How was your houseboat experience?" },
    { emoji: "🌿", q: "Best part of Munnar for you?" },
    { emoji: "💡", q: "Something this guide missed?" },
  ],
  "/blog/golden-triangle-7-days": [
    { emoji: "🕌", q: "What time did you visit the Taj Mahal?" },
    { emoji: "🏛️", q: "Delhi or Jaipur — which did you prefer?" },
    { emoji: "💡", q: "Tips for first-time India visitors?" },
  ],
  "/blog/kashmir-6-days": [
    { emoji: "🛶", q: "How was your Dal Lake houseboat?" },
    { emoji: "❄️", q: "Did you see snow in Gulmarg?" },
    { emoji: "💡", q: "Best season you visited Kashmir?" },
  ],
  "/blog/rishikesh-haridwar-3-days": [
    { emoji: "🌊", q: "Which rafting stretch did you do?" },
    { emoji: "🕯️", q: "Haridwar or Rishikesh Aarti — which was better?" },
    { emoji: "🎵", q: "What did you think of the Beatles Ashram?" },
  ],
  "/blog/jibhi-tirthan-valley-3-days": [
    { emoji: "🏡", q: "Did you find a good homestay in Jibhi?" },
    { emoji: "🐟", q: "Did you do trout fishing in the Tirthan?" },
    { emoji: "🏔️", q: "Did you make it to Jalori Pass?" },
  ],
  "/blog/hampi-3-days": [
    { emoji: "🏛️", q: "Which temple was most impressive?" },
    { emoji: "🧗", q: "Did you try bouldering in Hampi?" },
    { emoji: "☕", q: "Which Hippie Island café was your favourite?" },
  ],
  "/blog/spiti-valley-7-days": [
    { emoji: "🏔️", q: "Did you make it to Chandratal Lake?" },
    { emoji: "🛕", q: "Which monastery moved you most?" },
    { emoji: "🌌", q: "How was the Milky Way stargazing?" },
  ],
  "/blog/coorg-3-days": [
    { emoji: "☕", q: "Which coffee estate did you stay on?" },
    { emoji: "🌊", q: "Did you catch Abbey Falls at sunrise?" },
    { emoji: "🐘", q: "How was Dubare Elephant Camp?" },
  ],
  "/blog/manali-5-days": [
    { emoji: "❄️", q: "Did you get snow in Solang Valley?" },
    { emoji: "☕", q: "Which Old Manali cafe was your favourite?" },
    { emoji: "💡", q: "Your best Rohtang Pass tip?" },
  ],
  "/blog/leh-ladakh-7-days": [
    { emoji: "🏔️", q: "Did you get altitude sickness in Leh?" },
    { emoji: "🛣️", q: "Did you fly or take the Manali-Leh highway?" },
    { emoji: "💡", q: "Your best Pangong Lake tip?" },
  ],
  "/blog/andaman-5-days": [
    { emoji: "🏖️", q: "How was Radhanagar Beach for you?" },
    { emoji: "🤿", q: "Did you try scuba diving in Havelock?" },
    { emoji: "💡", q: "Best ferry tip you'd share?" },
  ],
  "/blog/varanasi-3-days": [
    { emoji: "🔥", q: "How was the Ganga Aarti for you?" },
    { emoji: "🌅", q: "Did you do the sunrise boat ride?" },
    { emoji: "💡", q: "Something this guide missed?" },
  ],
};

const DEFAULT_PROMPTS = [
  { emoji: "✈️", q: "Have you visited this destination?" },
  { emoji: "💡", q: "Any tips you'd add to this guide?" },
  { emoji: "❓", q: "Questions before your trip?" },
];

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const prompts = BLOG_PROMPTS[pathname] || DEFAULT_PROMPTS;

  useEffect(() => {
    if (!ref.current) return;

    // Clear any previous instance
    ref.current.innerHTML = "";
    setLoaded(false);

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo",               GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id",            GISCUS_CONFIG.repoId);
    script.setAttribute("data-category",           GISCUS_CONFIG.category);
    script.setAttribute("data-category-id",        GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping",            GISCUS_CONFIG.mapping);
    script.setAttribute("data-strict",             "0");
    script.setAttribute("data-reactions-enabled",  GISCUS_CONFIG.reactionsEnabled);
    script.setAttribute("data-emit-metadata",      GISCUS_CONFIG.emitMetadata);
    script.setAttribute("data-input-position",     GISCUS_CONFIG.inputPosition);
    script.setAttribute("data-theme",              GISCUS_CONFIG.theme);
    script.setAttribute("data-lang",               GISCUS_CONFIG.lang);
    script.setAttribute("data-loading",            "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;
    script.onload = () => setLoaded(true);

    ref.current.appendChild(script);

    const container = ref.current;
    return () => {
      if (container) container.innerHTML = "";
    };
  }, [pathname]);

  return (
    <section id="comments" className="mt-16 pt-10 border-t border-parchment-2">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <div>
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-1">
            Questions & Comments
          </h2>
          <p className="text-sm text-muted font-light">
            Been there? Planning a trip? Drop it below — we reply to everything.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted bg-parchment rounded-lg px-3 py-2 border border-parchment-2">
          <span>🔒</span>
          <span>Powered by GitHub · No ads · No tracking</span>
        </div>
      </div>

      {/* Prompt cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {prompts.map((item) => (
          <div key={item.q}
            className="bg-parchment rounded-xl border border-parchment-2 p-4 text-center cursor-pointer hover:border-gold hover:bg-gold/5 transition-all"
            onClick={() => ref.current?.querySelector("textarea")?.focus()}
          >
            <div className="text-xl mb-2">{item.emoji}</div>
            <p className="text-xs text-muted font-light leading-relaxed">{item.q}</p>
          </div>
        ))}
      </div>

      {/* Giscus widget */}
      <div>
        {!loaded && (
          <div className="h-32 bg-parchment rounded-xl animate-pulse flex items-center justify-center">
            <span className="text-xs text-muted">Loading comments...</span>
          </div>
        )}
        <div ref={ref} className={loaded ? "" : "opacity-0 h-0 overflow-hidden"} />
      </div>

      {/* CTA below comments */}
      <div className="mt-8 p-5 bg-parchment rounded-xl border border-parchment-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-sm text-ink mb-0.5">Want a personalised itinerary?</p>
          <p className="text-xs text-muted font-light">We&apos;ll build your day-by-day plan in 24 hours — free.</p>
        </div>
        <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">
          Plan My Trip →
        </a>
      </div>
    </section>
  );
}
