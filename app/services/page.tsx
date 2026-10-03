import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesGrid from "@/components/service-page/ServiceGrid";
import LetsTalk from "@/components/service-page/LetsTalk";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#242323] text-white">
      <Navbar />

      <main className="bg-[#242323] pt-28">
        <ServicesGrid />
        <LetsTalk />
      </main>

      <Footer />
    </div>
  );
}