"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LetsTalk() {
  return (
    <section className="relative overflow-hidden bg-[#242323] py-40">

      {/* Huge Background Text */}
      <h1
        className="
          absolute
          left-1/2
          top-1/2
          -z-0
          -translate-x-1/2
          -translate-y-1/2
          select-none
          whitespace-nowrap

          text-[clamp(6rem,18vw,18rem)]
          font-black
          uppercase
          leading-none

          text-white/10
        "
      >
        LET'S TALK
      </h1>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">

        <p className="mb-10 max-w-2xl text-center text-lg text-white/70">
          Whether you're planning a residence, commercial development,
          hospitality space or a bespoke interior, we'd love to hear your ideas.
        </p>

        <Link
          href="/contact"
          className="
            group
            inline-flex
            items-center
            gap-3

            rounded-full
            border-2
            border-white

            bg-transparent
            text-white

            px-6
            py-3
            md:px-8
            md:py-4

            text-xs
            md:text-sm

            font-semibold
            uppercase
            tracking-[0.2em]

            transition-all
            duration-300

            hover:bg-white
            hover:text-black
          "
        >
          Start a Project

          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>

      </div>

    </section>
  );
}