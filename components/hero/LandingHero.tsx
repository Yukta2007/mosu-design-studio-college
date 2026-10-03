"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom
      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Overlay
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Bottom content animation
      gsap.to(contentRef.current, {
        y: -120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[100svh]
        h-[100svh]
        w-full
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="
          absolute
          -inset-[4%]
          will-change-transform
        "
      >
        <Image
          src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at1.png"
          alt="MOSU Hero"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[center_center]
            sm:object-center
          "
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-black/20
          to-black/60
        "
      />

      {/* Animated Content */}
      <div
        ref={contentRef}
        className="
          absolute
          inset-0
          z-20
          will-change-transform
        "
      >
        {/* Bottom Left */}
        <div
          className="
            absolute
            bottom-[max(1.5rem,env(safe-area-inset-bottom))]
            left-5
            right-5
            uppercase
            text-white
            sm:bottom-8
            sm:left-8
            sm:right-auto
            lg:bottom-10
            lg:left-10
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              tracking-[0.22em]
              sm:text-[12px]
              sm:tracking-[0.18em]
              lg:text-[14px]
            "
          >
            TAJ GATEWAY PALOLEM
          </p>
        </div>
      </div>
    </section>
  );
}