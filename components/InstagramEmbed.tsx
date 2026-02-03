"use client";

import { motion } from "framer-motion";

export type InstagramFeedEntry =
  | { type: "post"; code: string }
  | { type: "reel"; code: string };

function embedUrl(entry: InstagramFeedEntry): string {
  if (entry.type === "reel") {
    return `https://www.instagram.com/reel/${entry.code}/embed`;
  }
  return `https://www.instagram.com/p/${entry.code}/embed`;
}

function viewUrl(entry: InstagramFeedEntry): string {
  if (entry.type === "reel") {
    return `https://www.instagram.com/reel/${entry.code}/`;
  }
  return `https://www.instagram.com/p/${entry.code}/`;
}

interface InstagramEmbedProps {
  entry: InstagramFeedEntry;
  /** Compact for hero grid, default for section grid */
  compact?: boolean;
  className?: string;
}

/**
 * Renders an Instagram post or reel as an embed iframe.
 * Links to the post/reel on Instagram when clicked.
 */
export function InstagramEmbed({
  entry,
  compact = false,
  className = "",
}: InstagramEmbedProps) {
  const src = embedUrl(entry);
  const size = compact ? "small" : "large";

  return (
    <motion.a
      href={viewUrl(entry)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`group relative block overflow-hidden rounded-2xl border border-black/5 bg-clay/40 shadow-sm ${className}`}
      whileHover={{ scale: 1.02 }}
      aria-label={`View ${entry.type} on Instagram — @ceramic.birds`}
    >
      <div
        className={
          size === "small"
            ? "aspect-square w-full min-h-[140px] sm:min-h-[160px]"
            : "aspect-square w-full min-h-[200px] sm:min-h-[280px]"
        }
      >
        <iframe
          src={src}
          title={`Instagram ${entry.type} from @ceramic.birds`}
          className="h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end bg-gradient-to-t from-charcoal/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-[0.65rem] uppercase tracking-wider text-softwhite">
          View on Instagram
        </span>
      </div>
    </motion.a>
  );
}
