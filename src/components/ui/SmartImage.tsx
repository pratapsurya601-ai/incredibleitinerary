"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageQueryKey } from "@/lib/pexels";

// ---------------------------------------------------------------------------
// Warm shimmer blur placeholder — parchment tones, animates left→right
// Using Next.js official SVG-to-base64 pattern for external image blur
// ---------------------------------------------------------------------------
const _shimmerSvg = `<svg width="700" height="475" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g"><stop stop-color="#F8F2E8" offset="20%"/><stop stop-color="#EDE4D2" offset="50%"/><stop stop-color="#F8F2E8" offset="70%"/></linearGradient></defs><rect width="700" height="475" fill="#F8F2E8"/><rect id="r" width="700" height="475" fill="url(#g)"><animate attributeName="x" from="-700" to="700" dur="1.5s" repeatCount="indefinite"/></rect></svg>`;
const _toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
const BLUR_PLACEHOLDER = `data:image/svg+xml;base64,${_toBase64(_shimmerSvg)}`;

interface SmartImageProps {
  // Use a predefined keyword key from IMAGE_QUERIES
  imageKey?: ImageQueryKey;
  // OR pass a custom search query directly
  query?: string;
  // Fallback image if Pexels fails
  fallback?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SmartImage({
  imageKey,
  query,
  fallback = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: SmartImageProps) {
  const [src, setSrc] = useState<string>(fallback);
  const [loading, setLoading] = useState(false);
  const [photographer, setPhotographer] = useState<string>("");

  useEffect(() => {
    if (!imageKey && !query) return;

    const params = new URLSearchParams();
    if (imageKey) params.set("key", imageKey);
    else if (query) params.set("q", query);

    // Don't block rendering — fetch in background, swap when ready
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s max wait

    fetch(`/api/image?${params.toString()}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setSrc(data.url);
          setPhotographer(data.photographer || "");
        }
      })
      .catch(() => {
        // Silently keep fallback image — already showing
      })
      .finally(() => clearTimeout(timeout));

    return () => { controller.abort(); clearTimeout(timeout); };
  }, [imageKey, query]);

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
          priority={priority}
          sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
          onLoad={() => setLoading(false)}
          onError={() => { setSrc(fallback); setLoading(false); }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 500}
          unoptimized
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
          priority={priority}
          onLoad={() => setLoading(false)}
          onError={() => { setSrc(fallback); setLoading(false); }}
        />
      )}

      {/* Loading shimmer */}
      {loading && (
        <div className="absolute inset-0 bg-parchment-2 animate-pulse" />
      )}

      {/* Pexels attribution (required by Pexels terms) */}
      {photographer && !loading && (
        <span className="absolute bottom-1 right-1 text-[0.55rem] text-white/40 bg-black/20 px-1 rounded">
          Photo by {photographer} · Pexels
        </span>
      )}
    </div>
  );
}
