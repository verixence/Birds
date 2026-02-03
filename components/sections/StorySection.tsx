"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CeramicImage } from "@/components/CeramicImage";
import { FadeIn } from "@/components/animations/FadeIn";

export function StorySection() {
  return (
    <Section
      id="story"
      tone="clay"
      className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start"
    >
      <div className="space-y-6 md:space-y-8">
        <SectionHeader
          eyebrow="Our Story"
          title="From a living room shelf to a growing handmade studio."
        />
        <FadeIn as="div">
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-charcoal/90">
            <p>
              Some dreams don’t begin with big plans — they begin with a simple
              question.
            </p>
            <p>That’s how Ceramic Birds was born.</p>
            <p>
              What started with a friend admiring a few handmade pieces in
              Rashi’s home slowly grew into something meaningful. From
              childhood memories of clay and crafts, to sisterhood that
              transformed a heartfelt idea into a growing handmade brand.
            </p>
            <p>
              What began with just three followers is now a community of 400+
              people who love cute, thoughtful, handmade ceramics.
            </p>
            <p>
              Every bowl, every cup, every planter carries a story of family,
              tradition, and love.
            </p>
            <p>
              At Ceramic Birds, pieces are shaped slowly and intentionally.
              Imperfections are embraced. Colours are layered by hand. No two
              creations are ever exactly the same.
            </p>
            <p>
              This is not just about ceramics — it is about women turning
              passion into purpose, and creating objects that bring warmth, joy,
              and meaning into everyday life.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="space-y-5 md:space-y-6">
        <FadeIn as="div">
          <div className="rounded-3xl border border-black/5 bg-softwhite/80 p-4 sm:p-5 shadow-sm shadow-clay/40">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/70">
                Women-led · Small-batch
              </p>
              <p className="text-[0.7rem] text-charcoal/60">
                Founder: <span className="font-medium">Rashi</span>
              </p>
            </div>
            <CeramicImage
              src="/gallery/our-story-bird.png"
              alt="Hand holding a small unglazed ceramic bird sculpture in the studio"
              aspect="landscape"
            />
          </div>
        </FadeIn>

        <FadeIn as="div">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-softwhite/90 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/70">
                Small-batch studio
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
                Every batch is limited and glazed by hand — made to be collected
                and cherished, not mass-produced.
              </p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-softwhite/90 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/70">
                Community first
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
                From 3 followers to 400+ on Instagram, Ceramic Birds has grown
                through word-of-mouth, kindness, and shared love for handmade
                things.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

