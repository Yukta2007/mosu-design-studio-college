"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  {
    title: "Our approach",
    text: "We don't simply design spaces.\nWe design experiences.",
  },
  {
    title: "Design Philosophy",
    text: "Every line has intention.\nEvery detail has purpose.",
  },
  {
    title: "Craft",
    text: "Materials tell stories.\nLuxury is carefully edited.",
  },
  {
    title: "MOSU",
    text: "Designed to be lived in.\nDesigned to last.",
  },
];

export default function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".editorial-card");

    gsap.set(cards, {
      opacity: 0,
      y: 60,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card) => {
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      tl.to(card, {
        opacity: 0,
        y: -60,
        duration: 0.6,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#f6f4f1]"
    >
      {/* Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent"
        id="hero-gradient"
      />

      {lines.map((item, index) => (
        <div
          key={index}
          className="
          editorial-card
          absolute
          flex
          max-w-4xl
          flex-col
          items-center
          text-center
          px-8
        "
        >
          <p
            className="
            mb-8
            uppercase
            tracking-[0.35em]
            text-sm
            text-neutral-500
          "
          >
            {item.title}
          </p>

          <h2
            className="
            whitespace-pre-line
            text-[clamp(2rem,3vw,3rem)]
            font-light
            leading-[1.25]
            tracking-[-0.03em]
            text-neutral-900
          "
          >
            {item.text}
          </h2>
        </div>
      ))}
    </section>
  );
}