"use client";
/**
 * StickyTOCSidebar — auto-generates a Table of Contents from page headings.
 *
 * Use with mode prop:
 *   mode="mobile"  — inline collapsible accordion, shown only on < lg
 *   mode="sidebar" — sticky right sidebar panel, shown only on lg+
 *
 * Place both in the layout:
 *   <article>
 *     <StickyTOCSidebar mode="mobile" />   ← inline, above content on mobile
 *     ...content...
 *   </article>
 *   <StickyTOCSidebar mode="sidebar" />    ← sticky aside on desktop
 */
import { useState, useEffect } from "react";

interface TocEntry {
  id: string;
  label: string;
  level: 2 | 3;
}

function slugify(text: string, index: number): string {
  const s = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
  return s || `section-${index}`;
}

// Shared hook: discovers headings + tracks active section
function useToc() {
  const [items, setItems]       = useState<TocEntry[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLHeadingElement>("main h2, main h3, article h2, article h3")
      );
      const entries: TocEntry[] = els
        .filter((el) => el.innerText?.trim().length > 1)
        .map((el, i) => {
          if (!el.id) el.id = slugify(el.innerText, i);
          return { id: el.id, label: el.innerText.trim(), level: (el.tagName === "H3" ? 3 : 2) as 2 | 3 };
        });
      setItems(entries);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }); },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    items.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  };

  return { items, activeId, scrollTo };
}

interface Props {
  mode: "mobile" | "sidebar";
}

export default function StickyTOCSidebar({ mode }: Props) {
  const { items, activeId, scrollTo } = useToc();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (items.length < 2) return null;

  // ── MOBILE inline accordion ──────────────────────────────────────
  if (mode === "mobile") {
    return (
      <div className="lg:hidden mb-8 rounded-xl border border-parchment-2 bg-white overflow-hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-parchment hover:bg-parchment-2 transition-colors"
          aria-expanded={mobileOpen}
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-800">
            On this page
          </span>
          <span className={`text-muted text-sm transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>
        {mobileOpen && (
          <nav className="p-3 space-y-0.5 max-h-64 overflow-y-auto">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMobileOpen(false); }}
                className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                  item.level === 3 ? "pl-6" : ""
                } ${activeId === item.id ? "bg-gold/10 text-amber-900 font-medium" : "text-muted hover:bg-parchment hover:text-ink"}`}
              >
                {item.level === 3 && <span className="w-1 h-1 rounded-full bg-muted/40 flex-shrink-0" />}
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    );
  }

  // ── DESKTOP sticky sidebar ────────────────────────────────────────
  return (
    <aside className="hidden lg:block w-[240px] flex-shrink-0 self-start sticky top-24">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(253,250,244,0.97)",
          border: "1px solid rgba(237,228,210,0.8)",
          boxShadow: "0 2px 16px rgba(22,16,8,0.07)",
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(237,228,210,0.6)" }}>
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-amber-800">
            On this page
          </p>
        </div>

        {/* Items */}
        <nav className="p-2 max-h-[60vh] overflow-y-auto">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left transition-all duration-150 text-[0.72rem] leading-snug mb-px ${item.level === 3 ? "pl-5" : ""}`}
                style={{
                  background: isActive ? "rgba(201,169,110,0.12)" : "transparent",
                  color: isActive ? "#161008" : "#7A6A52",
                  fontWeight: isActive ? 500 : 400,
                  borderLeft: isActive ? "2px solid #C9A96E" : "2px solid transparent",
                }}
              >
                {item.level === 3 && <span className="w-1 h-1 rounded-full bg-muted/40 flex-shrink-0 mt-0.5" />}
                <span className="flex-1">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Progress bar */}
        <div className="mx-4 mb-3 h-0.5 rounded-full overflow-hidden bg-parchment-2">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{
              width: `${
                items.findIndex((i) => i.id === activeId) >= 0
                  ? Math.round(((items.findIndex((i) => i.id === activeId) + 1) / items.length) * 100)
                  : 0
              }%`,
            }}
          />
        </div>
      </div>
    </aside>
  );
}
