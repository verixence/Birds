"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { containerStagger, fadeInUp } from "@/components/animations/stagger";
import { CeramicImage } from "@/components/CeramicImage";

export function Hero() {
  return (
    <section
      id="hero"
      className="gradient-hero w-full min-h-[80vh] border-b border-black/5 md:min-h-[85vh]"
    >
      <div className="container grid min-h-[80vh] gap-10 py-16 sm:py-20 md:min-h-[85vh] md:py-24 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="space-y-6 md:space-y-8"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs uppercase tracking-[0.2em] text-charcoal/70"
        >
          Women-led · Small-batch · Handmade in India
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight"
        >
          Handmade Ceramic Art
          <span className="block text-terracotta">
            for Thoughtful Living
          </span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="max-w-xl text-sm sm:text-base leading-relaxed text-charcoal/80"
        >
          Small-batch ceramics shaped slowly and intentionally — cups, bowls,
          planters and sculptural pieces that bring warmth, joy, and story into
          everyday rituals.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-3 pt-2 sm:pt-4"
        >
          <Button href="#pieces">Explore Collection</Button>
          <Button href="#story" variant="ghost">
            Our Story
          </Button>
        </motion.div>
      </motion.div>

      <div className="relative flex min-h-[320px] items-center justify-end md:min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 0.84, 0.44, 1] }}
          className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          {/* Top-left */}
          <div className="overflow-hidden rounded-3xl shadow-lg shadow-charcoal/10 ring-1 ring-black/5">
            <CeramicImage
              src="/gallery/bird-1.png"
              alt="Ceramic bird sculpture on a console"
              aspect="square"
            />
          </div>
          {/* Top-right: shifted down so its center aligns with the gap between image 1 and 2 */}
          <div className="translate-y-[30%] overflow-hidden rounded-3xl shadow-lg shadow-charcoal/10 ring-1 ring-black/5 sm:translate-y-[35%] md:translate-y-[40%]">
            <CeramicImage
              src="/gallery/bird-3.png"
              alt="Four rounded ceramic birds with carved details"
              aspect="square"
            />
          </div>
          {/* Bottom-left */}
          <div className="overflow-hidden rounded-3xl shadow-lg shadow-charcoal/10 ring-1 ring-black/5">
            <CeramicImage
              src="/gallery/bird-2.png"
              alt="Group of patterned ceramic bird sculptures"
              aspect="square"
            />
          </div>
          {/* Spacer: empty bottom-right */}
          <div aria-hidden />
        </motion.div>
      </div>
      </div>
    </section>
  );
}

