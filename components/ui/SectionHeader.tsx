"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.23, 0.84, 0.44, 1] }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-sm sm:text-base leading-relaxed text-charcoal/80">
          {description}
        </p>
      )}
    </motion.header>
  );
}

