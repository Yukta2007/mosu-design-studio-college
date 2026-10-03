"use client";

import Link from "next/link";

interface NavItemProps {
  href: string;
  text: string;
  color?: "white" | "black";
}

export default function NavItem({
  href,
  text,
  color = "white",
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`uppercase tracking-[0.18em] text-sm transition-colors duration-300 ${
        color === "white"
          ? "text-white hover:text-neutral-300"
          : "text-black hover:text-neutral-500"
      }`}
    >
      {text}
    </Link>
  );
}