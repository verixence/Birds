"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { containerStagger, fadeInUp } from "@/components/animations/stagger";

const valueCards = [
  {
    id: "small-batch",
    title: "Handmade in small batches",
    copy: "Every piece is shaped slowly; no two are exactly the same.",
    icon: (
      <svg
        className="h-8 w-8 text-terracotta"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "women-led",
    title: "Women-led studio",
    copy: "Passion turned into purpose — creating objects that bring warmth and meaning.",
    icon: (
      <svg
        className="h-8 w-8 text-terracotta"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: "imperfect",
    title: "Imperfectly perfect",
    copy: "Imperfections are embraced; colours are layered by hand.",
    icon: (
      <svg
        className="h-8 w-8 text-terracotta"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    id: "gifting",
    title: "Made for thoughtful gifting",
    copy: "Curated hampers and seasonal themes for celebrations and milestones.",
    icon: (
      <svg
        className="h-8 w-8 text-terracotta"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
  },
];

export function WhyCeramicBirds() {
  return (
    <Section id="why" tone="clay" className="space-y-10 md:space-y-12">
      <SectionHeader
        eyebrow="Why Ceramic Birds"
        title="Shaped slowly. Made with intention."
        align="center"
      />
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {valueCards.map((card) => (
          <motion.article
            key={card.id}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-black/5 bg-softwhite/90 p-6 shadow-sm transition-shadow hover:shadow-md hover:border-terracotta/20"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="font-serif text-lg text-charcoal">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
              {card.copy}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
