"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function NavItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-5 overflow-hidden text-white"
    >
      {/* Main Text */}
      <span
        className="
          block
          uppercase
          tracking-[0.18em]
          transition-transform
          duration-500
          ease-[cubic-bezier(.76,0,.24,1)]
          group-hover:-translate-y-full
        "
      >
        {text}
      </span>

      {/* Hover Text */}
      <span
        className="
          absolute
          left-0
          top-full
          block
          uppercase
          tracking-[0.18em]
          transition-transform
          duration-500
          ease-[cubic-bezier(.76,0,.24,1)]
          group-hover:-translate-y-full
        "
      >
        {text}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[999]">

        {/* Top Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-36
            bg-gradient-to-b
            from-black/65
            via-black/25
            to-transparent
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            h-24
            max-w-[1800px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
          "
        >

          {/* =================================================
              LEFT SIDE
              PROJECTS | PRODUCTS
          ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-14
              text-[13px]
              font-medium
              lg:flex
            "
          >
            <NavItem
              href="/projects"
              text="PROJECTS"
            />

            {/* Display = PRODUCTS
                Route = /services */}
            <NavItem
              href="/services"
              text="PRODUCTS"
            />
          </nav>


          {/* =================================================
              CENTER LOGO
          ================================================= */}

         <Link
  href="/"
  className="
    absolute
    left-1/2
    top-1/2
    flex
    -translate-x-1/2
    -translate-y-1/2
    flex-col
    items-center
  "
>
  <Image
    src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789740555/text_3_hdcwme.png"
    alt="MOSU Logo"
    width={140}
    height={45}
    priority
    className="h-8 w-auto sm:h-9 lg:h-10"
  />

  <span
    className="
      mt-1.5
      whitespace-nowrap
      text-[7px]
      font-medium
      uppercase
      tracking-[0.38em]
      text-white/65
      sm:text-[8px]
    "
  >
    BE - BeSpoke
  </span>
</Link>


          {/* =================================================
              RIGHT SIDE
              CONTACT | ABOUT
          ================================================= */}

          <nav
  className="
    ml-auto
    hidden
    items-center
    gap-14
    text-[13px]
    font-medium
    lg:flex
  "
>
  <NavItem
    href="/contact"
    text="CONTACT"
  />

  <NavItem
    href="/about"
    text="ABOUT"
  />

  <NavItem
    href="/admin/login"
    text="ADMIN LOGIN"
  />
</nav>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setOpen(true)}
            className="
              ml-auto
              text-white
              lg:hidden
            "
            aria-label="Open menu"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[1000]
          bg-[#111]
          transition-all
          duration-500
          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }
        `}
      >

        {/* =================================================
            MOBILE HEADER
        ================================================= */}

        <div
          className="
            flex
            h-24
            items-center
            justify-between
            px-6
          "
        >

          {/* Logo */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            <Image
              src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789740555/text_3_hdcwme.png"
              alt="MOSU Logo"
              width={140}
              height={45}
              className="h-9 w-auto"
            />
          </Link>


          {/* Close Button */}

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X
              size={34}
              className="text-white"
            />
          </button>

        </div>


        {/* =================================================
            MOBILE LINKS
        ================================================= */}

        <nav
          className="
            mt-20
            flex
            flex-col
            items-center
            gap-10
          "
        >

          {/* PROJECTS */}

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Projects
          </Link>


          {/* PRODUCTS
              IMPORTANT:
              Text = Products
              URL = /services
          */}

          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Products
          </Link>


          {/* CONTACT */}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Contact
          </Link>


          {/* ABOUT */}

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            About
          </Link>

          <Link
  href="/admin/login"
  onClick={() => setOpen(false)}
  className="
    text-4xl
    font-light
    uppercase
    tracking-wide
    text-white
    transition
    duration-300
    hover:translate-x-2
  "
>
  Admin Login
</Link>

        </nav>

      </div>
    </>
  );
}