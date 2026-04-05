"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-5 z-[300] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "rgba(253,250,244,0.97)",
        border: "1px solid rgba(237,228,210,0.8)",
        color: "#8B6835",
        boxShadow: "0 4px 16px rgba(22,16,8,0.12)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11V3M3 7l4-4 4 4" />
      </svg>
    </button>
  );
}
