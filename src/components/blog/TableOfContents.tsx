"use client";
import { useState, useEffect } from "react";

export interface TocItem {
  id: string;
  label: string;
  emoji: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show TOC only after hero exits viewport, hide near footer.
  // Uses dynamic threshold: 55% of viewport height ≈ just past the 60vh hero on all screen sizes.
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const nearBottom =
        scrolled + window.innerHeight > document.body.scrollHeight - 1400;
      const pastHero = scrolled > window.innerHeight * 0.55;
      setVisible(pastHero && !nearBottom);
    };
    // Run on mount so initial state is correct (scroll=0 → hidden)
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── DESKTOP: Left sidebar ── */}
      <div className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-[210px]">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(253,250,244,0.96)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(237,228,210,0.8)",
            boxShadow: "0 4px 24px rgba(22,16,8,0.08)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 border-b"
            style={{ borderColor: "rgba(237,228,210,0.6)" }}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#8B6835" }}
            >
              Contents
            </p>
          </div>

          {/* Items */}
          <nav className="p-2">
            {items.map((item, i) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-200 group"
                  style={{
                    background: isActive
                      ? "rgba(201,169,110,0.12)"
                      : "transparent",
                    marginBottom: "1px",
                  }}
                >
                  {/* Step number or emoji */}
                  <span
                    className="text-xs flex-shrink-0 w-5 text-center"
                    style={{
                      color: isActive ? "#8B6835" : "#7A6A52",
                      fontSize: "14px",
                    }}
                  >
                    {item.emoji}
                  </span>

                  <span
                    className="text-[0.72rem] leading-tight flex-1"
                    style={{
                      color: isActive ? "#161008" : "#7A6A52",
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C9A96E" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Progress bar */}
          <div
            className="mx-4 mb-3 h-1 rounded-full overflow-hidden"
            style={{ background: "rgba(237,228,210,0.8)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                background: "#C9A96E",
                width: `${
                  items.findIndex((i) => i.id === activeId) >= 0
                    ? Math.round(
                        ((items.findIndex((i) => i.id === activeId) + 1) /
                          items.length) *
                          100
                      )
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE: Floating button + drawer ── */}
      <div className="xl:hidden fixed bottom-24 left-4 z-[150]">
        {/* Drawer */}
        {mobileOpen && (
          <div
            className="absolute bottom-14 left-0 w-60 rounded-2xl overflow-hidden animate-[fadeUp_0.2s_ease_both]"
            style={{
              background: "rgba(253,250,244,0.98)",
              border: "1px solid rgba(237,228,210,0.8)",
              boxShadow: "0 8px 32px rgba(22,16,8,0.15)",
            }}
          >
            <div
              className="px-4 py-2.5 border-b"
              style={{ borderColor: "rgba(237,228,210,0.6)" }}
            >
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#8B6835" }}
              >
                Jump to section
              </p>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all"
                  style={{
                    background:
                      activeId === item.id
                        ? "rgba(201,169,110,0.12)"
                        : "transparent",
                    marginBottom: "1px",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>{item.emoji}</span>
                  <span
                    className="text-xs"
                    style={{
                      color: activeId === item.id ? "#161008" : "#7A6A52",
                      fontWeight: activeId === item.id ? 500 : 400,
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all"
          style={{
            background: mobileOpen ? "#161008" : "#C9A96E",
            color: "#fff",
            fontSize: "16px",
          }}
          aria-label="Table of contents"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
    </>
  );
}
