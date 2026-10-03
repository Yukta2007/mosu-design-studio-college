import FeaturedProject from "@/components/featured/FeaturedProject";
import AboutSection from "@/components/about/AboutSection";
import Navbar from "@/components/layout/Navbar";
import LandingHero from "@/components/hero/LandingHero";
import Editorial from "@/components/editorial/Editorial";
import MarqueeSection from "@/components/marquee/MarqueeSection";
import Monograph from "@/components/sections/Monograph";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <Editorial />
      <AboutSection />
      <FeaturedProject />
      <MarqueeSection />
      <Monograph />
    </>
  );
}