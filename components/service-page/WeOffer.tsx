"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/services/services";

import "@/styles/WeOffer.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const otherRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const other = otherRef.current;
    const servicesTitle = servicesRef.current;
    const wrapper = wrapperRef.current;
    const button = buttonRef.current;

    if (
      !section ||
      !other ||
      !servicesTitle ||
      !wrapper ||
      !button
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const serviceItems = gsap.utils.toArray<HTMLElement>(
        ".service-item"
      );

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(other, {
        x: 0,
      });

      gsap.set(servicesTitle, {
        x: 0,
      });

      gsap.set(wrapper, {
        opacity: 1,
      });

      gsap.set(serviceItems, {
        opacity: 0,
        y: 50,
        scale: 0.96,
      });

      gsap.set(button, {
        opacity: 0,
        y: 30,
      });

      /* =========================================
         MAIN SCROLL TIMELINE
      ========================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.max(
            3500,
            serviceItems.length * 500 + 1500
          )}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* =========================================
         1. SPLIT OTHER / SERVICES
      ========================================= */

      tl.to(
        other,
        {
          x: "-18vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        servicesTitle,
        {
          x: "18vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      /* =========================================
   2. SERVICES POP UP ONE BY ONE
========================================= */

serviceItems.forEach((item, index) => {
  tl.to(
    item,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    },
    `+=${index === 0 ? 0.1 : 0.08}`
  );
});
      /* =========================================
         3. BUTTON
      ========================================= */

      tl.to(
        button,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.3"
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section"
    >
      {/* =========================================
          BIG CENTER TITLE
      ========================================= */}

      <div className="hero-words">
        <h1
          ref={otherRef}
          className="hero-word other-word"
        >
          OTHER
        </h1>

        <h1
          ref={servicesRef}
          className="hero-word services-word"
        >
          SERVICES
        </h1>
      </div>

      {/* =========================================
          SERVICES
      ========================================= */}

      <div
        ref={wrapperRef}
        className="services-wrapper"
      >
        <div className="services-list">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-item"
            >
              {service.title}
            </Link>
          ))}
        </div>

        <Link
          ref={buttonRef}
          href="/services"
          className="services-button"
        >
          <span>View All Services</span>

          <span className="button-arrow">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}