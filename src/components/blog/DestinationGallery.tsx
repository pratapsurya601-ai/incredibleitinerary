"use client";
import { useState, useEffect } from "react";

interface GalleryPhoto {
  url: string;
  alt: string;
  photographer: string;
  pexelsUrl: string;
}

interface GallerySpot {
  name: string;
  query: string;
  desc: string;
  fallback?: string;
}

interface DestinationGalleryProps {
  title: string;        // e.g. "Rajasthan — Must-See Places"
  subtitle?: string;    // optional subtext
  spots: GallerySpot[]; // each spot has a name, search query, and short description
}

export default function DestinationGallery({
  title,
  subtitle,
  spots,
}: DestinationGalleryProps) {
  const [photos, setPhotos] = useState<Record<string, GalleryPhoto>>({});
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const fetchAll = async () => {
      const results: Record<string, GalleryPhoto> = {};
      await Promise.all(
        spots.map(async (spot) => {
          try {
            const res = await fetch(
              `/api/image?q=${encodeURIComponent(spot.query)}`
            );
            if (!res.ok) return;
            const data = await res.json();
            if (data.url) {
              results[spot.name] = {
                url: data.url,
                alt: data.alt || spot.name,
                photographer: data.photographer || "",
                pexelsUrl: data.pexels_url || "",
              };
            } else if (spot.fallback) {
              results[spot.name] = { url: spot.fallback, alt: spot.name, photographer: "", pexelsUrl: "" };
            }
          } catch {
            if (spot.fallback) {
              results[spot.name] = { url: spot.fallback, alt: spot.name, photographer: "", pexelsUrl: "" };
            }
          }
        })
      );
      setPhotos(results);
      setLoading(false);
    };
    fetchAll();
  }, [spots]);

  const activeSpot = spots[activeIdx];
  const activePhoto = photos[activeSpot?.name];

  return (
    <section className="mb-14">
      {/* Section header */}
      <div className="mb-6">
        <h2 className="font-serif text-[1.9rem] font-light text-ink mb-1">
          📸 {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted font-light">{subtitle}</p>
        )}
      </div>

      {/* Main featured photo */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-4 bg-parchment">
        <div className="relative h-72 md:h-[400px] bg-parchment-2">
          {loading ? (
            <div className="absolute inset-0 animate-pulse bg-parchment-2 flex items-center justify-center">
              <span className="text-xs text-muted">Loading photos...</span>
            </div>
          ) : activePhoto ? (
            <>
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay with place name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
                <p className="font-serif text-xl font-light text-white">
                  {activeSpot.name}
                </p>
                <p className="text-xs text-white/65 font-light mt-1">
                  {activeSpot.desc}
                </p>
              </div>
              {/* Attribution */}
              {activePhoto.photographer && (
                <a
                  href={activePhoto.pexelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-[0.55rem] text-white/50 bg-black/25 px-2 py-1 rounded-full hover:text-white/80 transition-colors"
                >
                  📷 {activePhoto.photographer} · Pexels
                </a>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-parchment-2">
              <div className="text-center">
                <p className="text-3xl mb-2">🏛️</p>
                <p className="text-sm text-muted font-light">{activeSpot.name}</p>
                <p className="text-xs text-muted/60 mt-1">
                  Add your Pexels API key to see photos
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {spots.map((spot, i) => {
          const photo = photos[spot.name];
          const isActive = i === activeIdx;
          return (
            <button
              key={spot.name}
              onClick={() => setActiveIdx(i)}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-gold shadow-md scale-[1.02]"
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{ width: "120px", height: "80px" }}
            >
              {photo ? (
                <img
                  src={photo.url}
                  alt={spot.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-parchment-2 flex items-center justify-center">
                  <span className="text-lg">
                    {loading ? "⏳" : "🏛️"}
                  </span>
                </div>
              )}
              {/* Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent flex items-end p-1.5">
                <p className="text-xs text-white font-medium leading-tight">
                  {spot.name}
                </p>
              </div>
              {/* Active indicator */}
              {isActive && (
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold" />
              )}
            </button>
          );
        })}
      </div>

      {/* Description strip */}
      <div className="mt-3 flex items-start gap-3 p-4 bg-parchment rounded-xl border border-parchment-2">
        <span className="text-xl flex-shrink-0">📍</span>
        <div>
          <p className="font-medium text-sm text-ink">{activeSpot.name}</p>
          <p className="text-xs text-muted font-light mt-0.5 leading-relaxed">
            {activeSpot.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
