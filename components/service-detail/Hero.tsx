"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export default function Hero({
  title,
  subtitle,
  image,
}: Props) {
  const section = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, section);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={section}
      className="relative h-screen overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-20 left-16 z-20">

        <p className="uppercase tracking-[0.35em] text-white/70 mb-4">
          {subtitle}
        </p>

        <h1
          ref={titleRef}
          className="
          text-white
          font-black
          uppercase
          leading-[0.9]
          tracking-[-0.06em]
          text-[clamp(5rem,11vw,10rem)]
          "
        >
          {title}
        </h1>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.3em]">
        Scroll
      </div>
    </section>
  );
}