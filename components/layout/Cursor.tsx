"use client";

import { useEffect, useRef } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleEnter = () => {
      cursor.classList.add(styles.active);
    };

    const handleLeave = () => {
      cursor.classList.remove(styles.active);
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("a, button");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.cursor}
      aria-hidden="true"
    />
  );
}