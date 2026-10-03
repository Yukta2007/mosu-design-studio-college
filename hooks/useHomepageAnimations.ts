"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function useHomepageAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from("#hero", {
        opacity: 0,
        scale: 1.08,
        duration: 1.5,
        ease: "power3.out",
      });

      // Editorial
      gsap.from("#editorial h2", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: "#editorial",
          start: "top 75%",
        },
      });

      // About
      gsap.from("#about img", {
        x: -120,
        opacity: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        },
      });

      gsap.from("#about h2", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        },
      });

      // Featured
      gsap.from("#featured", {
        scale: 1.1,
        opacity: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: "#featured",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
}