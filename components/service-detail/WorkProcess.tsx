"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLHeadingElement>(null);
  const processRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      gsap.set(processRef.current, {
        x: 250,
        opacity: 0,
      });

      tl.to(
        workRef.current,
        {
          x: -220,
          duration: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        processRef.current,
        {
          x: 220,
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        [workRef.current, processRef.current],
        {
          opacity: 0,
          y: -120,
          duration: 0.8,
        },
        1.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#F6F4F1] flex items-center justify-center overflow-hidden"
    >
      <div className="flex items-center gap-12">

        <h2
          ref={workRef}
          className="
          text-[clamp(6rem,12vw,13rem)]
          font-black
          uppercase
          leading-none
          tracking-[-0.06em]
          text-[#d7d7d7]
          "
        >
          WORK
        </h2>

        <h2
          ref={processRef}
          className="
          text-[clamp(6rem,12vw,13rem)]
          font-black
          uppercase
          leading-none
          tracking-[-0.06em]
          text-[#111]
          "
        >
          PROCESS
        </h2>

      </div>
    </section>
  );
}