"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CeramicImage } from "@/components/CeramicImage";
import { handcraftedPieces } from "@/lib/content";
import { containerStagger, fadeInUp } from "@/components/animations/stagger";

export function HandcraftedPieces() {
  return (
    <Section id="pieces" className="space-y-10 md:space-y-12">
      <SectionHeader
        eyebrow="Handcrafted Pieces"
        title="Functional, decorative, and made with care."
        description="No pricing, no cart — just the pieces we love making. Replace imageUrl with real Instagram URLs from @ceramic.birds when ready."
      />
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="columns-2 gap-5 sm:columns-2 md:columns-3 lg:gap-6"
      >
        {handcraftedPieces.map((piece, i) => (
          <motion.div
            key={piece.id}
            variants={fadeInUp}
            className="mb-5 break-inside-avoid lg:mb-6"
          >
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-clay/40"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.23, 0.84, 0.44, 1] }}
            >
              <CeramicImage
                src={piece.imageUrl}
                alt={piece.alt}
                aspect={i % 3 === 0 ? "portrait" : "square"}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.18em] text-softwhite/90">
                  {piece.category}
                </p>
                <p className="font-serif text-lg text-softwhite">
                  {piece.title}
                </p>
                {piece.tag && (
                  <p className="mt-1 text-xs text-softwhite/80">
                    {piece.tag} · Small-batch · Hand-glazed
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
