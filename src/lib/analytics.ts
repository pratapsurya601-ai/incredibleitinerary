const UTM_STORAGE_KEY = "utm_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

type UtmAttribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & { landed_at?: string };

export function captureUtmOnLanding() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: UtmAttribution = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) found[k] = v;
    }
    if (Object.keys(found).length === 0) return;
    found.landed_at = new Date().toISOString();
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    if ((window as any).gtag) {
      (window as any).gtag("event", "utm_landing", found);
    }
  } catch {}
}

export function getUtmAttribution(): UtmAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY) || localStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  const attribution = getUtmAttribution();
  const enriched = attribution ? { ...params, ...attribution } : params;
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, enriched);
  } else if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventName, enriched);
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
