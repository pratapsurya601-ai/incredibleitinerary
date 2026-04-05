"use client";
/**
 * AutoTableOfContents — no props needed.
 * Automatically finds all <h2> elements on the page, assigns IDs if missing,
 * then renders a sticky desktop sidebar + mobile floating button using the
 * existing TableOfContents component.
 *
 * Use on any page that renders dynamic/generated content with H2 headings.
 */
import { useState, useEffect } from "react";
import TableOfContents, { TocItem } from "./TableOfContents";

// Emoji cycle for visual variety in the TOC
const TOC_EMOJIS = [
  "🗺️", "📅", "💰", "🚗", "🏨", "🍽️",
  "💡", "⚠️", "📋", "🔍", "✈️", "🎯",
  "🌟", "📌", "🧭", "🏆",
];

function emojiFor(index: number): string {
  return TOC_EMOJIS[index % TOC_EMOJIS.length];
}

// Slugify heading text → safe DOM id
function toId(text: string, index: number): string {
  const slug = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
  return slug || `section-${index}`;
}

export default function AutoTableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    // Give the page content a tick to render before querying
    const timer = setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll<HTMLHeadingElement>("main h2, article h2")
      );

      const tocItems: TocItem[] = headings
        .filter((h) => {
          const text = h.innerText?.trim();
          return text && text.length > 1;
        })
        .map((h, i) => {
          // Assign a stable id if the heading doesn't already have one
          if (!h.id) {
            h.id = toId(h.innerText, i);
          }
          return {
            id: h.id,
            label: h.innerText.trim(),
            emoji: emojiFor(i),
          };
        });

      setItems(tocItems);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Need at least 2 sections for TOC to be worthwhile
  if (items.length < 2) return null;

  return <TableOfContents items={items} />;
}
