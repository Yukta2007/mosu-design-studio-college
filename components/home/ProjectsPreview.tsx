"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPreview() {
  return (
    <section className="flex h-screen items-center justify-center bg-black text-white">
      <h2 className="text-6xl font-bold uppercase text-white">
        Projects Section
      </h2>
    </section>
  );
}