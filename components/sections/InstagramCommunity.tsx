"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CeramicImage } from "@/components/CeramicImage";
import { instagramTiles } from "@/lib/content";
import { containerStagger, fadeInUp } from "@/components/animations/stagger";

export function InstagramCommunity() {
  return (
    <Section id="instagram" tone="clay" className="space-y-8 md:space-y-10">
      <SectionHeader
        eyebrow="Ceramic Gallery"
        title="Moments from the studio"
        description="A calm, colourful gallery of forms, glazes, and textures that inspire Ceramic Birds."
        align="center"
      />
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
      >
        {instagramTiles.map((tile) => (
          <motion.div
            key={tile.id}
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-clay/60"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <CeramicImage
              src={tile.imageUrl}
              alt={tile.alt}
              aspect="square"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {tile.label && (
                <span className="text-xs uppercase tracking-wider text-softwhite">
                  {tile.label}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
