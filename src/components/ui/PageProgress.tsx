"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageProgress() {
  const pathname = usePathname();

  // Is this a blog post page? e.g. /blog/goa-3-days (not /blog itself)
  const isBlogPost =
    !!pathname?.startsWith("/blog/") && pathname.split("/").filter(Boolean).length >= 2;

  // ── Navigation load animation (all pages) ────────────────────────
  const [navWidth, setNavWidth]     = useState(0);
  const [navOpacity, setNavOpacity] = useState(0);

  useEffect(() => {
    setNavWidth(0);
    setNavOpacity(1);
    const t1 = setTimeout(() => setNavWidth(25),  30);
    const t2 = setTimeout(() => setNavWidth(55),  200);
    const t3 = setTimeout(() => setNavWidth(80),  500);
    const t4 = setTimeout(() => setNavWidth(100), 900);
    const t5 = setTimeout(() => setNavOpacity(0), 1150);
    const t6 = setTimeout(() => setNavWidth(0),   1500);
    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, [pathname]);

  // ── Reading progress (blog post pages only) ───────────────────────
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    if (!isBlogPost) { setReadPct(0); return; }

    const handleScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      setReadPct(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    handleScroll(); // set immediately on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPost, pathname]);

  return (
    <>
      {/* Navigation loading bar — fades out after ~1.2 s */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
        style={{ opacity: navOpacity }}
      >
        <div
          className="h-full bg-gold"
          style={{
            width: `${navWidth}%`,
            transition:
              navWidth === 0
                ? "none"
                : navWidth === 100
                ? "width 200ms ease-in, box-shadow 200ms"
                : "width 400ms cubic-bezier(0.4,0,0.2,1)",
            boxShadow: navWidth > 0 ? "0 0 8px rgba(201,169,110,0.6)" : "none",
          }}
        />
      </div>

      {/* Reading progress bar — persistent on blog post pages */}
      {isBlogPost && (
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 z-[9998] h-[3px] pointer-events-none"
          style={{
            width: `${readPct}%`,
            background: "linear-gradient(90deg, #C9A96E, #E8C97A)",
            transition: "width 80ms linear",
            boxShadow: readPct > 2 ? "0 0 6px rgba(201,169,110,0.5)" : "none",
          }}
        />
      )}
    </>
  );
}
