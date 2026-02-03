"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="contact-footer"
      className="border-t border-black/5 bg-softwhite py-16 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container flex flex-col items-center justify-center gap-6 text-center"
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/5 bg-clay">
          <Image
            src="/logo.png"
            alt="Ceramic Birds logo"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <p className="font-serif text-xl sm:text-2xl text-charcoal">
          Let’s create something beautiful together.
        </p>
        <p className="text-sm text-charcoal/80">
          Follow <span className="font-medium">@ceramic.birds</span> for new
          collections, studio moments, and launch updates.
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
          © Ceramic Birds — Handmade with love
        </p>
      </motion.div>
    </footer>
  );
}
