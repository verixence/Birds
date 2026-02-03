"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors border";

  const variants: Record<Variant, string> = {
    primary:
      "border-charcoal bg-charcoal text-softwhite hover:bg-transparent hover:text-charcoal",
    ghost:
      "border-transparent bg-transparent text-charcoal hover:border-charcoal/20 hover:bg-clay/60",
  };

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
      <Link href={href} className={`${base} ${variants[variant]}`}>
        {children}
      </Link>
    </motion.div>
  );
}

