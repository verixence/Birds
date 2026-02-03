import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { HandcraftedPieces } from "@/components/sections/HandcraftedPieces";
import { WhyCeramicBirds } from "@/components/sections/WhyCeramicBirds";
import { FestiveGifting } from "@/components/sections/FestiveGifting";
import { InstagramCommunity } from "@/components/sections/InstagramCommunity";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <StorySection />
      <HandcraftedPieces />
      <WhyCeramicBirds />
      <FestiveGifting />
      <InstagramCommunity />
      <Footer />
    </>
  );
}

