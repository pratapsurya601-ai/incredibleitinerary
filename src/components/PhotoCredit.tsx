interface PhotoCreditProps {
  name: string;
  instagram?: string;       // @handle
  source: "contributor" | "unsplash" | "pexels";
  photographerUrl?: string; // Link to photographer profile
}

export function PhotoCredit({ name, instagram, source, photographerUrl }: PhotoCreditProps) {
  const nameNode = photographerUrl ? (
    <a href={photographerUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-dark transition-colors">
      {name}
    </a>
  ) : (
    <span>{name}</span>
  );

  return (
    <div className="flex items-center justify-end gap-1 text-[11px] text-muted/80 font-light mt-1 mb-3 pr-0.5">
      <span>📸</span>
      {source === "contributor" && (
        <span>
          Photo by{" "}
          {instagram ? (
            <a
              href={`https://instagram.com/${instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gold-dark transition-colors"
            >
              {name}
            </a>
          ) : (
            <span>{name}</span>
          )}{" "}
          ·{" "}
          <a href="/contribute" className="underline hover:text-gold-dark transition-colors">
            Share yours
          </a>
        </span>
      )}
      {source === "unsplash" && (
        <span>
          {nameNode} · Unsplash
        </span>
      )}
      {source === "pexels" && (
        <span>
          {nameNode} · Pexels
        </span>
      )}
    </div>
  );
}
