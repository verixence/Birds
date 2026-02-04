"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#pieces", label: "Pieces" },
  { href: "#festive", label: "Festive" },
  { href: "#instagram", label: "Gallery" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-softwhite/80 backdrop-blur">
        <div className="container flex items-center justify-between py-1.5 sm:py-2">
          <Link href="#hero" className="flex items-center gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src="/logo.png"
                alt="Ceramic Birds logo"
                fill
                sizes="72px"
                className="object-contain scale-150"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg tracking-wide sm:text-xl">
                Ceramic Birds
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-charcoal/70">
                Handmade Ceramics
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-charcoal/70 sm:flex">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-charcoal transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile: 3-line hamburger, no background */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 text-charcoal/80 transition-colors hover:text-charcoal sm:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile menu: full-screen, hero gradient, centered type */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 0.84, 0.44, 1] }}
            className="gradient-hero fixed inset-0 z-[60] flex flex-col sm:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Close: understated, top-right */}
            <div className="flex justify-end px-4 pt-6">
              <button
                type="button"
                onClick={closeMenu}
                className="text-xs uppercase tracking-[0.2em] text-charcoal/60 transition-colors hover:text-charcoal"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Centered content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6 pb-20">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.4,
                    ease: [0.23, 0.84, 0.44, 1],
                  }}
                  className="font-serif text-2xl tracking-tight text-charcoal transition-colors hover:text-terracotta"
                >
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Soft brand line at bottom */}
            <p className="pb-8 text-center font-serif text-sm tracking-wide text-charcoal/50">
              Ceramic Birds
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
