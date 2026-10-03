"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursor.current) return;

    const x = gsap.quickTo(cursor.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const y = gsap.quickTo(cursor.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      x(e.clientX);
      y(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className={styles.cursor}
      aria-hidden="true"
    />
  );
}
