"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (!section || !card) return;

    const mm = gsap.matchMedia();

    // ============================================================
    // DESKTOP ONLY
    // ============================================================

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(card, {
          rotateY: -25,
          rotateX: 8,
          scale: 0.6,
          y: 150,
          transformPerspective: 1500,
          transformOrigin: "center center",
          force3D: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=220%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // ========================================================
        // FLIP INTO POSITION
        // ========================================================

        tl.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 1,
        });

        // ========================================================
        // EXPAND TO FULLSCREEN
        // ========================================================

        tl.to(
          card,
          {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            ease: "power3.inOut",
            duration: 1,
          },
          ">0.2"
        );
      }, section);

      return () => {
        ctx.revert();
      };
    });

    // ============================================================
    // MOBILE / TABLET
    // NO ANIMATION
    // ============================================================

    mm.add("(max-width: 1023px)", () => {
      gsap.set(card, {
        clearProps: "all",
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#242323]
        lg:h-screen
      "
    >
      {/* ==========================================================
          DESKTOP
          ========================================================== */}

      <div className="hidden h-full items-center justify-center lg:flex">
        <div
          ref={cardRef}
          className="
            relative
            h-[640px]
            w-[500px]
            overflow-hidden
            rounded-2xl
            shadow-2xl
            will-change-transform
            xl:h-[720px]
            xl:w-[560px]
          "
        >
          <Image
            src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789740550/1._Bespoke.png"
            alt="Bespoke by Nature"
            fill
            priority
            sizes="(min-width: 1280px) 560px, 500px"
            className="object-cover"
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/45
              to-black/10
            "
          />

          {/* Content */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-end
              p-10
              text-white
            "
          >
            {/* Label */}
            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              Bespoke
            </p>

            {/* Heading */}
            <h2
              className="
                font-black
                uppercase
                leading-none
                text-7xl
                text-white
              "
            >
              Bespoke
              <br />
              by Nature
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-md
                text-base
                leading-relaxed
                text-white/75
              "
            >
              Every piece is conceived for a specific space, story and
              purpose. From art installations and mirrors to lighting,
              furniture and sculptural elements, nothing feels generic or
              off-the-shelf.
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================================
          MOBILE / TABLET
          NO ANIMATION
          ========================================================== */}

      <div
        className="
          relative
          h-screen
          w-full
          lg:hidden
        "
      >
        {/* Image */}
        <Image
          src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789740550/1._Bespoke.png"
          alt="Bespoke by Nature"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/45
            to-black/10
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            justify-end
            p-6
            text-white
            sm:p-8
          "
        >
          {/* Label */}
          <p
            className="
              mb-3
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-white/60
            "
          >
            Bespoke
          </p>

          {/* Heading */}
          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-[0.9]
              text-white
              sm:text-6xl
            "
          >
            Bespoke
            <br />
            by Nature
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-md
              text-sm
              leading-relaxed
              text-white/75
              sm:text-base
            "
          >
            Every piece is conceived for a specific space, story and
            purpose. From art installations and mirrors to lighting,
            furniture and sculptural elements, nothing feels generic or
            off-the-shelf.
          </p>
        </div>
      </div>
    </section>
  );
}