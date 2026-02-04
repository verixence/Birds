import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

