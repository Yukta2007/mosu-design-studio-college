"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/Monograph.css";

gsap.registerPlugin(ScrollTrigger);
export default function Monograph() {
useEffect(() => {
  gsap.to(".mono-title", {
    rotation: 5,
    x: 100,
    duration: 2,
  });
}, []);
  useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".monograph",
      start: "top 75%",
      end: "bottom center",
      scrub: 1,
    },
  });

  tl.from(".mono-title", {
    y: 150,
    opacity: 0,
    ease: "power3.out",
  })
    .from(
      ".mono-left",
      {
        x: -120,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.2"
    )
    .from(
      ".mono-right",
      {
        y: 250,
        rotate: -10,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.2"
    );
}, []);

  return (
    <section className="monograph">

      <div className="mono-title">
        MONOGRAPH
      </div>

      <div className="mono-content">

        <div className="mono-left">
          <p>
            OUR FIRST MONOGRAPH IS A
            REFLECTION OF OUR PATH OF
            CREATION: OUR INSIGHTS,
            PROJECTS, IDEAS AND VISION
            WHICH WE ARE PROUD TO SHARE
            WITH EVERYONE WHO SHARES
            YODEZEEN'S VALUES.
          </p>

          <button>COMING SOON</button>
        </div>

        <div className="mono-right">
          <img src="/images/book.png" alt="Book" />
        </div>

      </div>

    </section>
  );
}