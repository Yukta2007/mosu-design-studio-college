"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function StartProject() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const enquiryData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("ENQUIRY ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= CLOSE ================= */}

      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Close and go back"
        className="
          group
          absolute
          right-6
          top-6
          z-50
          flex
          items-center
          gap-3
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-white/60
          transition-colors
          duration-300
          hover:text-white
          sm:right-10
          sm:top-8
          lg:right-14
          xl:right-20
        "
      >
        <span className="transition-opacity duration-300 group-hover:text-white">
          CLOSE
        </span>

        <span
          className="
            relative
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            transition-all
            duration-300
            group-hover:border-white
            group-hover:rotate-90
          "
        >
          <span className="absolute h-px w-3 bg-white" />
          <span className="absolute h-px w-3 rotate-90 bg-white" />
        </span>
      </button>

      {/* ================= PAGE ================= */}

      <section className="flex min-h-screen items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1600px]
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
            xl:gap-28
          "
        >

          {/* LEFT */}

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-[11px]">
              CONTACT / 01
            </p>

            <h1
              className="
                font-medium
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
                text-[4.5rem]
                sm:text-[5.5rem]
                md:text-[6rem]
                lg:text-[6.5rem]
                xl:text-[7rem]
              "
            >
              START
              <br />
              A PROJECT
            </h1>
          </div>

          {/* RIGHT */}

          <div className="w-full max-w-[820px]">

            <div className="mb-8">
              <h2
                className="
                  text-[1.25rem]
                  font-light
                  leading-[1.08]
                  tracking-[-0.025em]
                  sm:text-[1.4rem]
                  lg:text-[1.6rem]
                  xl:text-[1.75rem]
                "
              >
                HAVE AN IDEA, A SPACE,
                <br />
                OR A VISION IN MIND?
                <br />
                LET&apos;S CREATE SOMETHING
                <br />
                MEANINGFUL TOGETHER.
              </h2>

              <p className="mt-5 text-[10px] uppercase leading-5 tracking-[0.2em] text-white/40 sm:text-[11px]">
                Tell us a little about your project and
                <br />
                we&apos;ll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">

              <div className="border-b border-white/20 py-4">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="FULL NAME*"
                  className="w-full bg-transparent text-[11px] uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/40 sm:text-[12px] lg:text-[13px]"
                />
              </div>

              <div className="border-b border-white/20 py-4">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="EMAIL*"
                  className="w-full bg-transparent text-[11px] uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/40 sm:text-[12px] lg:text-[13px]"
                />
              </div>

              <div className="border-b border-white/20 py-4">
                <input
                  name="phone"
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent text-[11px] uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/40 sm:text-[12px] lg:text-[13px]"
                />
              </div>

              <div className="border-b border-white/20 py-4">
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full bg-black text-[11px] uppercase tracking-[0.12em] text-white outline-none sm:text-[12px] lg:text-[13px]"
                >
                  <option value="" disabled>
                    PROJECT TYPE*
                  </option>
                  <option value="architecture">ARCHITECTURE</option>
                  <option value="interiors">INTERIOR DESIGN</option>
                  <option value="residential">RESIDENTIAL</option>
                  <option value="hospitality">HOSPITALITY</option>
                  <option value="bespoke">BESPOKE DESIGN</option>
                  <option value="art">ART / INSTALLATION</option>
                </select>
              </div>

              <div className="border-b border-white/20 py-4">
                <input
                  name="location"
                  type="text"
                  placeholder="PROJECT LOCATION"
                  className="w-full bg-transparent text-[11px] uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/40 sm:text-[12px] lg:text-[13px]"
                />
              </div>

              <div className="border-b border-white/20 py-4">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="TELL US ABOUT YOUR PROJECT"
                  className="w-full resize-none bg-transparent text-[11px] uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/40 sm:text-[12px] lg:text-[13px]"
                />
              </div>

              {error && (
                <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-red-400">
                  {error}
                </p>
              )}

              <div className="mt-7 flex justify-end">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[10px] uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:px-8 sm:py-4 sm:text-[11px]"
                >
                  {loading
                    ? "SENDING..."
                    : submitted
                    ? "THANK YOU"
                    : "SEND ENQUIRY"}

                  {!loading && (
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
