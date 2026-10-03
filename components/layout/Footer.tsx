"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#242323] text-white">
      <div className="mx-auto flex min-h-[420px] max-w-[1900px] flex-col justify-between px-6 py-16 sm:px-10 lg:px-12">

        {/* ================= TOP / CENTER ================= */}

        <div className="flex flex-1 flex-col items-center justify-center text-center">

          {/* COPYRIGHT / DESCRIPTION */}

          <p className="max-w-[720px] text-[12px] leading-5 text-white/70 sm:text-[13px] sm:leading-6">
            Please be informed that the intellectual property rights to all
            photos, designs and other materials on this Site belong to MOSU
            Studio. You may request permission to use them by contacting us.
          </p>

          {/* SOCIAL ICONS */}

          <div className="mt-8 flex items-center justify-center gap-3">

            <SocialIcon
              href="https://www.instagram.com/mosudesignstudio/"
              label="Instagram"
              icon={<FaInstagram size={14} />}
            />

          

            <SocialIcon
              href="https://facebook.com"
              label="Facebook"
              icon={<FaFacebookF size={14} />}
            />

          

          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            text-[10px]
            font-medium
            uppercase
            tracking-[0.04em]
            text-white/80
            lg:flex-row
          "
        >

          {/* LEFT */}

          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} MOSU. ALL RIGHTS RESERVED.
          </p>

          {/* CENTER LINKS */}

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-white/50"
            >
              PRIVACY POLICY
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-white/50"
            >
              TERMS OF USE
            </Link>

            <Link
              href="/accessibility"
              className="transition-colors duration-300 hover:text-white/50"
            >
              ACCESSIBILITY STATEMENT
            </Link>

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-white/50"
            >
              CONTACT US
            </Link>
          </nav>

          {/* RIGHT */}

          <p className="whitespace-nowrap">
            MADE BY BEYOND BRANDING
          </p>

        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:bg-white/80
      "
    >
      {icon}
    </Link>
  );
}