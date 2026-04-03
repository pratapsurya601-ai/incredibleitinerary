export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventName, params);
  }
}
