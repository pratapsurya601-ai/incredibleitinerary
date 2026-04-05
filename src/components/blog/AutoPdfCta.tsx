"use client";

import DownloadButton from "@/components/pdf/DownloadButton";

// Map blog post slugs → PDF slugs (free or paid)
const BLOG_TO_PDF: Record<string, { pdfSlug: string; title: string; free: boolean; price?: string }> = {
  "rajasthan-7-days":  { pdfSlug: "rajasthan-7-days",  title: "Rajasthan 7-Day Guide",     free: true },
  "kerala-5-days":     { pdfSlug: "kerala-5-days",      title: "Kerala 5-Day Guide",         free: true },
  "goa-3-days":        { pdfSlug: "goa-3-days",          title: "Goa 3-Day Guide",            free: false, price: "₹99" },
  "india-budget-guide":{ pdfSlug: "india-budget-guide",  title: "India Budget Travel Guide",  free: false, price: "₹99" },
  "leh-ladakh-7-days": { pdfSlug: "leh-ladakh-7-days",   title: "Leh Ladakh 7-Day Guide",     free: false, price: "₹199" },
  "bangkok-4-days":    { pdfSlug: "bangkok-4-days",       title: "Bangkok 4-Day Guide",        free: false, price: "₹199" },
  "kashmir-6-days":    { pdfSlug: "kashmir-6-days",       title: "Kashmir 6-Day Guide",        free: false, price: "₹149" },
  "manali-5-days":     { pdfSlug: "manali-5-days",        title: "Manali 5-Day Guide",         free: false, price: "₹149" },
  "bali-5-days":       { pdfSlug: "bali-5-days",          title: "Bali 5-Day Guide",           free: false, price: "₹199" },
  "dubai-4-days":      { pdfSlug: "dubai-4-days",         title: "Dubai 4-Day Guide",          free: false, price: "₹249" },
  // Phase 2
  "andaman-5-days":    { pdfSlug: "andaman-5-days",   title: "Andaman 5-Day Guide",    free: false, price: "₹149" },
  "varanasi-3-days":   { pdfSlug: "varanasi-3-days",  title: "Varanasi 3-Day Guide",   free: false, price: "₹99" },
  // Singapore blog slug is "singapore-3-days" but PDF slug is "singapore-4-days"
  "singapore-3-days":  { pdfSlug: "singapore-4-days", title: "Singapore 4-Day Guide",  free: false, price: "₹199" },
  "sri-lanka-7-days":  { pdfSlug: "sri-lanka-7-days", title: "Sri Lanka 7-Day Guide",  free: false, price: "₹199" },
  // Japan has multiple blog posts — map all to the Japan 10-day PDF
  "tokyo-5-days":      { pdfSlug: "japan-10-days",    title: "Japan 10-Day Guide",     free: false, price: "₹299" },
  "kyoto-4-days":      { pdfSlug: "japan-10-days",    title: "Japan 10-Day Guide",     free: false, price: "₹299" },
  "osaka-3-days":      { pdfSlug: "japan-10-days",    title: "Japan 10-Day Guide",     free: false, price: "₹299" },
  // Phase 3 — Vietnam (multiple blog posts → single PDF)
  "hanoi-3-days":           { pdfSlug: "vietnam-10-days",  title: "Vietnam 10-Day Guide",   free: false, price: "₹199" },
  "ho-chi-minh-city-3-days":{ pdfSlug: "vietnam-10-days",  title: "Vietnam 10-Day Guide",   free: false, price: "₹199" },
  "ha-long-bay-3-days":     { pdfSlug: "vietnam-10-days",  title: "Vietnam 10-Day Guide",   free: false, price: "₹199" },
  // Phase 3 — Thailand
  "phuket-5-days":      { pdfSlug: "thailand-10-days", title: "Thailand 10-Day Guide",  free: false, price: "₹199" },
  "chiang-mai-4-days":  { pdfSlug: "thailand-10-days", title: "Thailand 10-Day Guide",  free: false, price: "₹199" },
  // Phase 3 — Portugal (multiple blog posts → single PDF)
  "lisbon-4-days":      { pdfSlug: "portugal-7-days",  title: "Portugal 7-Day Guide",   free: false, price: "₹249" },
  "porto-3-days":       { pdfSlug: "portugal-7-days",  title: "Portugal 7-Day Guide",   free: false, price: "₹249" },
  "algarve-4-days":     { pdfSlug: "portugal-7-days",  title: "Portugal 7-Day Guide",   free: false, price: "₹249" },
  // Phase 3 — Greece (multiple blog posts → single PDF)
  "athens-3-days":      { pdfSlug: "greece-10-days",   title: "Greece 10-Day Guide",    free: false, price: "₹299" },
  "santorini-4-days":   { pdfSlug: "greece-10-days",   title: "Greece 10-Day Guide",    free: false, price: "₹299" },
  "crete-5-days":       { pdfSlug: "greece-10-days",   title: "Greece 10-Day Guide",    free: false, price: "₹299" },
};

export default function AutoPdfCta({ blogSlug }: { blogSlug: string }) {
  const pdf = BLOG_TO_PDF[blogSlug];
  if (!pdf) return null;

  return (
    <div className="my-10 rounded-xl border border-gold/30 bg-amber-50 px-6 py-7 text-center shadow-sm">
      <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold-dark font-medium mb-1">
        📄 Free PDF Guide
      </p>
      <h3 className="font-serif text-xl font-light text-ink mb-2">
        Take This Guide Offline
      </h3>
      <p className="text-sm text-muted font-light mb-5 max-w-sm mx-auto leading-relaxed">
        {pdf.free
          ? "Download this complete itinerary as a beautifully formatted PDF — free, no credit card needed."
          : `Get the full offline PDF with day-by-day plans, real prices & local tips for just ${pdf.price}.`}
      </p>
      <DownloadButton
        slug={pdf.pdfSlug}
        title={pdf.title}
        variant="primary"
      />
      {pdf.free && (
        <p className="text-[0.65rem] text-muted/50 mt-3">
          Free · 2 guides per email · No spam
        </p>
      )}
    </div>
  );
}
