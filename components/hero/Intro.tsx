"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      })
      .to(headingRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.95,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#f6f4f1]"
    >
      <h1
        ref={headingRef}
        className="max-w-[1500px] px-6 text-center text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.9] tracking-tight text-[#1c1c1c]"
      >
        WE DESIGN BESPOKE SOLUTIONS
        <br />
        FOR ARCHITECTURE AND INTERIOR DESIGN
      </h1>
    </section>
  );
}