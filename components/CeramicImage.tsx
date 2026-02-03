"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CeramicImageProps {
  src?: string;
  alt: string;
  aspect?: "square" | "portrait" | "landscape";
}

/**
 * Wrapper around next/image that can render
 * soft placeholders clearly labelled “Ceramic Birds”
 * when no gallery image has been provided.
 */
export function CeramicImage({ src, alt, aspect = "square" }: CeramicImageProps) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "landscape"
      ? "aspect-[4/3]"
      : "aspect-square";

  if (!src) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className={`relative ${aspectClass} overflow-hidden rounded-3xl border border-black/5 bg-clay/80`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/15 via-softwhite/40 to-olive/20" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-xs uppercase tracking-[0.18em] text-charcoal/70">
          <span className="mb-1 block text-[0.6rem]">Gallery Image</span>
          <span className="font-semibold">Ceramic Birds</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`relative ${aspectClass} overflow-hidden rounded-3xl border border-black/5 bg-clay/60`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 360px, 60vw"
        className="object-cover"
      />
    </motion.div>
  );
}

