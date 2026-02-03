import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ceramic Birds — Handmade Ceramic Art for Thoughtful Living",
  description:
    "Ceramic Birds is a women-led, small-batch studio creating thoughtful, handmade ceramic décor and functional pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-softwhite text-charcoal`}
      >
        <header className="sticky top-0 z-40 border-b border-black/5 bg-softwhite/80 backdrop-blur">
          <div className="container flex items-center justify-between py-3">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/5 bg-clay">
                {/* Logo from workspace root copied into public/logo.png during setup */}
                <Image
                  src="/logo.png"
                  alt="Ceramic Birds logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base tracking-wide">
                  Ceramic Birds
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-charcoal/70">
                  Handmade Ceramics
                </span>
              </div>
            </Link>
            <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-charcoal/70 sm:flex">
              <a href="#story" className="hover:text-charcoal transition-colors">
                Our Story
              </a>
              <a
                href="#pieces"
                className="hover:text-charcoal transition-colors"
              >
                Pieces
              </a>
              <a
                href="#festive"
                className="hover:text-charcoal transition-colors"
              >
                Festive
              </a>
              <a
                href="#instagram"
                className="hover:text-charcoal transition-colors"
              >
                Gallery
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

