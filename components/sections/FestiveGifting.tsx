"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CeramicImage } from "@/components/CeramicImage";
import { festiveItems } from "@/lib/content";

export function FestiveGifting() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="festive" className="space-y-8 md:space-y-10">
      <SectionHeader
        eyebrow="Festive & Gifting"
        title="Diwali, Ganesh, and seasonal ceramics."
        description="Hand-poured diyas, sculpted idols, and curated ceramic hampers from the Ceramic Birds studio."
      />
      <div
        ref={scrollRef}
        className="relative -mx-4 overflow-x-auto overflow-y-hidden px-4 pb-2 md:-mx-6 md:px-6"
        style={{ scrollbarWidth: "thin" }}
      >
        <motion.div
          drag="x"
          dragConstraints={scrollRef}
          dragElastic={0.1}
          className="flex gap-5 md:gap-6"
          style={{ width: "max-content" }}
        >
          {festiveItems.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="w-[280px] shrink-0 rounded-3xl border border-black/5 bg-clay/40 p-4 shadow-sm md:w-[320px]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <CeramicImage
                  src={item.imageUrl}
                  alt={item.alt}
                  aspect="landscape"
                />
              </div>
              <h3 className="mt-4 font-serif text-lg text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                {item.highlight}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
