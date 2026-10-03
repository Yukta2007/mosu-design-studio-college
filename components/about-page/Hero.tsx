"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftImage =
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790086054/0a7e6486-ff97-4fc5-be0a-fa028d4aeeba.jpg.jpg";

const rightImage =
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790086221/IMG_0688.jpg";

const description =
  "MOSU is a Bombay-based creative studio crafting bespoke art, sculptural objects and architectural elements for luxury residences, hotels and resorts, with a distinctive sensitivity to material, craft and detail.";

export default function AboutHero() {
  const section = useRef<HTMLElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
  const element = section.current;
  const titleElement = title.current;
  const paragraphElement = paragraph.current;

  if (!element || !titleElement || !paragraphElement) return;

  const mm = gsap.matchMedia();

  /* ============================================================
     TABLET + DESKTOP
     ============================================================ */

  mm.add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(paragraphElement, {
      opacity: 0,
      y: 40,
    });

    /*
     * Keep WE'RE MOSU close to the center.
     * Previously y: -120 pushed it too far upward.
     */
    tl.to(titleElement, {
      scale: 0.7,
      y: -20,
      ease: "none",
    });

    tl.to(
      paragraphElement,
      {
        opacity: 1,
        y: 0,
        ease: "none",
      },
      "-=0.2"
    );
  });

  /* ============================================================
     MOBILE
     ============================================================ */

  mm.add("(max-width: 767px)", () => {
    gsap.set(titleElement, {
      clearProps: "all",
    });

    gsap.set(paragraphElement, {
      opacity: 1,
      y: 0,
    });
  });

  return () => {
    mm.revert();
  };
}, []);

  return (
    <section
      ref={section}
      className="
        relative
        overflow-hidden
        bg-[#242323]
        text-white
      "
    >
      {/* ============================================================
          MOBILE ONLY
          ============================================================ */}

      <div className="block md:hidden">
        {/* Text section */}
        <div
          className="
            flex
            min-h-[75vh]
            flex-col
            items-center
            justify-center
            px-7
            py-20
            text-center
          "
        >
          {/* Title */}
          <div ref={title}>
            <h2
              className="
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-[52px]
              "
            >
              WE'RE
            </h2>

            <h1
              className="
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
                text-[68px]
              "
            >
              MOSU
            </h1>
          </div>

          {/* Description */}
          <p
            ref={paragraph}
            className="
              mt-8
              max-w-[330px]
              text-[13px]
              leading-[1.6]
              text-neutral-300
            "
          >
            {description}
          </p>
        </div>

        {/* ========================================================
            FOUNDER IMAGE 1
            ======================================================== */}

        <div className="relative w-full px-4 pb-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={leftImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="calc(100vw - 32px)"
            />
          </div>
        </div>

        {/* ========================================================
            FOUNDER IMAGE 2
            ======================================================== */}

        <div className="relative w-full px-4 pb-12">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={rightImage}
              alt=""
              fill
              className="object-cover"
              sizes="calc(100vw - 32px)"
            />
          </div>
        </div>
      </div>

      {/* ============================================================
          TABLET + DESKTOP
          ============================================================ */}

      <div className="hidden min-h-screen md:block">
        {/* Left Image */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[25%]
            lg:w-[30%]
          "
        >
          <Image
            fill
            priority
            src={leftImage}
            alt=""
            className="object-cover"
            sizes="30vw"
          />
        </div>

        {/* Right Image */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[25%]
            lg:w-[30%]
          "
        >
          <Image
            fill
            priority
            src={rightImage}
            alt=""
            className="object-cover"
            sizes="30vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/2" />

        {/* Content */}
        <div
          className="
            relative
            z-20
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            mx-auto
            w-full
            max-w-[42rem]
            px-8
            lg:px-10
            text-center
          "
        >
          {/* Title */}
          <div ref={title}>
            <h2
              className="
                font-black
                uppercase
                leading-none
                text-5xl
                md:text-7xl
                lg:text-[7vw]
              "
            >
              WE'RE
            </h2>

            <h1
              className="
                font-black
                uppercase
                leading-none
                text-6xl
                md:text-8xl
                lg:text-[9vw]
              "
            >
              MOSU
            </h1>
          </div>

          {/* Paragraph */}
          <p
            ref={paragraph}
            className="
              mt-8
              w-full
              max-w-[500px]
              lg:max-w-full
              text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
              text-neutral-300
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}