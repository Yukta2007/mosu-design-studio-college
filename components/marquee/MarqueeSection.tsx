"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const line1 = useRef<HTMLHeadingElement>(null);
  const line2 = useRef<HTMLHeadingElement>(null);
  const line3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  if (!sectionRef.current) return;

  gsap.from(line1.current, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(line2.current, {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 60%",
      end: "top 30%",
      scrub: true,
    },
  });

  gsap.from(line3.current, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 40%",
      end: "top 10%",
      scrub: true,
    },
  });
}, []);
  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#F5F3F0]"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right,#d9d9d9 1px,transparent 1px),
            linear-gradient(to bottom,#d9d9d9 1px,transparent 1px)
          `,
          backgroundSize: "160px 160px",
        }}
      />

      <div className="relative z-10 text-center uppercase">

        <h2
          ref={line1}
          className="font-black text-[clamp(5rem,9vw,10rem)] leading-none tracking-[-0.05em]"
        >
          WE HAVE DONE
        </h2>

        <h2
          ref={line2}
          className="font-black text-[clamp(5rem,9vw,10rem)] leading-none tracking-[-0.05em]"
        >
          PROJECTS
        </h2>

        <h2
          ref={line3}
          className="font-black text-[clamp(5rem,9vw,10rem)] leading-none tracking-[-0.05em]"
        >
          AROUND THE WORLD
        </h2>

      </div>
    </section>
  );
}