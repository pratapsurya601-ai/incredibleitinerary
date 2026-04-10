export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventName, params);
  }
}

/** Track CTA clicks on blog pages */
export function trackBlogCTA(cta: "pdf_shop" | "custom_plan" | "newsletter" | "affiliate" | "share", destination: string) {
  trackEvent("blog_cta_click", { cta, destination });
}

/** Track scroll depth milestones (25%, 50%, 75%, 100%) */
export function initScrollDepthTracking(slug: string) {
  if (typeof window === "undefined") return;
  const milestones = new Set<number>();
  const handler = () => {
    const el = document.documentElement;
    const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    for (const m of [25, 50, 75, 100]) {
      if (pct >= m && !milestones.has(m)) {
        milestones.add(m);
        trackEvent("scroll_depth", { depth: m, slug });
      }
    }
  };
  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}
