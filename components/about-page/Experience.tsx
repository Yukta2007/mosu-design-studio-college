"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "./experienceData";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = section.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".exp-slide");

      slides.forEach((slide, index) => {
        gsap.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${slides.length * 1800}`,
          scrub: 2.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, index) => {
        if (index === 0) return;

        tl.to(slides[index - 1], {
          autoAlpha: 0,
          duration: 1,
        });

        tl.to(
          slide,
          {
            autoAlpha: 1,
            duration: 1,
          },
          "<"
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={section}
      className="relative h-screen overflow-hidden bg-[#242323]"
    >
      {experienceData.map((item) => (
        <div
          key={item.title}
          className="exp-slide absolute inset-0 bg-[#242323]"
        >
          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0
              z-20
              flex
              flex-col
              justify-end
              p-6
              sm:p-8
              lg:p-10
              text-white
            "
          >
            {/* LABEL */}
            <p
              className="
                mb-3
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              {item.subtitle}
            </p>

            {/* HEADING */}
            <h2
              className="
                font-black
                uppercase
                leading-none
                text-white
                text-5xl
                sm:text-6xl
                lg:text-7xl
              "
            >
              {item.title}
              <br />
              {item.titleLine2}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-md
                text-sm
                sm:text-base
                leading-relaxed
                text-white/75
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
