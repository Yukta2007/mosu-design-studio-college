import Navbar from "@/components/layout/Navbar";
import LandingHero from "@/components/hero/LandingHero";
import Editorial from "@/components/editorial/Editorial";
import AboutSection from "@/components/about/AboutSection";
import Team from "@/components/about-page/Team";
import FeaturedProject from "@/components/featured/FeaturedProject";
import ServicesShowcase from "@/components/ServicesShowcase";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <Editorial />
      <AboutSection />
      
      <FeaturedProject />
      <ServicesShowcase />
      <Footer />
    </>
  );
}
