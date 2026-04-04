"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageQueryKey } from "@/lib/pexels";

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
  const [loading, setLoading] = useState(true);
  const [photographer, setPhotographer] = useState<string>("");

  useEffect(() => {
    if (!imageKey && !query) return;

    const params = new URLSearchParams();
    if (imageKey) params.set("key", imageKey);
    else if (query) params.set("q", query);

    fetch(`/api/image?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setSrc(data.url);
          setPhotographer(data.photographer || "");
        }
      })
      .catch(() => {
        // Silently fall back to fallback image
      })
      .finally(() => setLoading(false));
  }, [imageKey, query]);

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
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
