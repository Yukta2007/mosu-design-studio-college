import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCities from "@/components/contact/ContactCities";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#242323] text-white">

        {/* HEADER */}
        <section className="pt-36 pb-16 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
            CONTACT
          </p>

          <h1
            className="
              mx-auto
              max-w-4xl
              text-[clamp(2.8rem,5vw,4.8rem)]
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white
            "
          >
            LET'S CREATE
            <br />
            SOMETHING BEAUTIFUL
          </h1>

        </section>

        {/* CITIES */}
        <ContactCities />

      </main>

      <Footer />
    </>
  );
}