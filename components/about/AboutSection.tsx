"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const founderRef = useRef<HTMLDivElement>(null);
  const directorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const panel = panelRef.current;
    const founder = founderRef.current;
    const director = directorRef.current;

    if (!section || !image || !panel || !founder || !director) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================
      // MOBILE
      // NO ANIMATION AT ALL
      // =====================================================

      mm.add("(max-width: 767px)", () => {
        gsap.set(
          [image, panel, founder, director, ".about-reveal"],
          {
            clearProps: "all",
          }
        );
      });

      // =====================================================
      // DESKTOP
      // ORIGINAL GSAP ANIMATION
      // =====================================================

      mm.add("(min-width: 768px)", () => {
        const textElements =
          gsap.utils.toArray<HTMLElement>(".about-reveal");

        // Initial desktop state
        gsap.set(image, {
          width: "50%",
        });

        gsap.set(panel, {
          left: "50%",
          width: "50%",
          xPercent: 0,
        });

        gsap.set(textElements, {
          opacity: 0,
          y: 30,
        });

        gsap.set([founder, director], {
          opacity: 0,
          y: 25,
        });

        // =====================================================
        // DESKTOP TIMELINE
        // =====================================================

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2800",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. About text appears
        tl.to(textElements, {
          opacity: 1,
          y: 0,
          duration: 2.5,
          stagger: 0.35,
          ease: "power2.out",
        });

        // 2. Hold
        tl.to({}, {
          duration: 2,
        });

        // 3. Image expands
        tl.to(
          image,
          {
            width: "100%",
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        );

        // 4. Panel exits
        tl.to(
          panel,
          {
            xPercent: 100,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        );

        // 5. Small hold
        tl.to({}, {
          duration: 0.5,
        });

        // 6. Founder
        tl.to(founder, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // 7. Director
        tl.to(
          director,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#242323]
        min-h-screen
        md:h-screen
        md:min-h-[650px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        ref={imageRef}
        className="
          relative
          h-[55vh]
          w-full
          overflow-hidden

          md:absolute
          md:inset-y-0
          md:left-0
          md:h-auto
        "
      >
        <Image
          src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789642206/founders_3.png"
          alt="MOSU Founders"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        <div className="absolute inset-0 bg-black/10" />

        {/* =====================================================
            NAMES
            MOBILE = STAYS ON IMAGE
            DESKTOP = GSAP ANIMATED
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-6
            z-50
            px-5
            text-white

            sm:bottom-10
            sm:px-8

            md:bottom-12
            md:px-10

            lg:bottom-16
            lg:px-16
          "
        >
          <div
            className="
              relative
              flex
              w-full
              flex-col
              gap-5

              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:gap-0
            "
          >
            {/* =================================================
                FOUNDER
            ================================================= */}

            <div
              ref={founderRef}
              className="
                text-left

                sm:absolute
                sm:bottom-0
                sm:left-0
              "
            >
              <p
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/80

                  sm:text-[9px]
                  sm:tracking-[0.4em]

                  lg:text-[11px]
                "
              >
                Founder & CEO
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-medium
                  leading-none
                  tracking-tight

                  sm:mt-2
                  sm:text-3xl

                  md:text-4xl

                  lg:text-5xl
                "
              >
                Pawan Sundriyal
              </h2>
            </div>

            {/* =================================================
                DIRECTOR
            ================================================= */}

            <div
              ref={directorRef}
              className="
                text-left

                sm:absolute
                sm:right-0
                sm:bottom-0
                sm:text-right
              "
            >
              <p
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/80

                  sm:text-[9px]
                  sm:tracking-[0.4em]

                  lg:text-[11px]
                "
              >
                Director & Creative Head
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-medium
                  leading-none
                  tracking-tight

                  sm:mt-2
                  sm:text-3xl

                  md:text-4xl

                  lg:text-5xl
                "
              >
                Shreya Chakraborty
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DARK PANEL
      ===================================================== */}

      <div
  ref={panelRef}
  className="
    relative
    z-30
    flex
    min-h-[45vh]
    w-full
    items-start
    bg-[#242323]
    text-white

    md:items-center
    md:absolute
    md:inset-y-0
    md:left-1/2
    md:min-h-0
    md:w-1/2
  "
>
        <div
  className="
    w-full
    max-w-[760px]
    px-6
    py-10

    sm:px-10
    sm:py-12

    md:px-12
    md:py-0

    lg:px-16

    xl:px-24
  "
>
          {/* ABOUT LABEL */}

          <p
            className="
              about-reveal
              mb-5
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/50

              sm:mb-7
              sm:text-[10px]

              lg:text-[11px]
              lg:tracking-[0.45em]
            "
          >
            ABOUT MOSU
          </p>

          {/* CONTENT */}

          <div
  className="
    space-y-7

    sm:space-y-7

    lg:space-y-6
  "
>
            <p
              className="
  about-reveal
  max-w-[700px]
  text-[14px]
  font-light
  leading-[1.7]

  sm:text-[16px]
  sm:leading-[1.7]

  lg:text-[18px]
  lg:leading-[1.8]
"
            >
              Every remarkable project begins with an idea worth believing in.
            </p>

            <p
              className="
                about-reveal
                max-w-[700px]
                text-[14px]
                font-light
                leading-[1.6]

                sm:text-[16px]
                sm:leading-[1.7]

                lg:text-[18px]
                lg:leading-[1.8]
              "
            >
              For Pawan Sundriyal and Shreya Chakraborty, that belief became
              MOSU, born from a shared instinct to create with intention and
              shaped by curiosity, experimentation and an enduring sensitivity
              to craft. Today, that instinct takes form through bespoke art,
              sculptural objects and architectural elements, each considered
              in relation to the space it belongs to.
            </p>

            <p
              className="
                about-reveal
                max-w-[700px]
                text-[14px]
                font-light
                leading-[1.6]

                sm:text-[16px]
                sm:leading-[1.7]

                lg:text-[18px]
                lg:leading-[1.8]
              "
            >
              The name brings together MO, the moon, and SU, the sun, two
              contrasting forces that came to embody a quiet philosophy of
              harmony, duality and balance, which continues to sit at the heart
              of the studio.
            </p>

            {/* BUTTON */}

            <div className="about-reveal pt-2 sm:pt-5">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  px-5
                  py-2.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black

                  sm:gap-3
                  sm:px-7
                  sm:py-3.5
                  sm:text-[10px]

                  lg:px-8
                  lg:py-4
                  lg:text-[11px]
                "
              >
                DISCOVER MORE

                <span
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}