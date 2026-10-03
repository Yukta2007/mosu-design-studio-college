"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  slug: string;
  subtitle?: string;
  description?: string;
}

export default function ServiceCard({
  title,
  image,
  slug,
  subtitle,
  description,
}: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className="
        group
        relative
        block
        h-[320px]
        overflow-hidden
        bg-[#242323]

        sm:h-[420px]
        md:h-[520px]
        lg:h-[620px]
      "
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority={false}
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          50vw
        "
        className="
          object-cover
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.08]
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-all
          duration-700
          group-hover:bg-black/55
        "
      />

      {/* TOP LABEL */}
      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-20
          flex
          items-center
          justify-between

          sm:left-8
          sm:right-8
          sm:top-8

          lg:left-12
          lg:right-12
          lg:top-10
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            text-white
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          inset-x-5
          bottom-6
          z-20
          flex
          flex-col
          items-center
          text-center

          sm:inset-x-8
          sm:bottom-8

          lg:left-12
          lg:right-12
          lg:bottom-12
        "
      >
        {/* SUBTITLE */}
        {subtitle && (
          <p
            className="
              mb-4
              text-[8px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-white/65

              sm:text-[9px]
            "
          >
            {subtitle}
          </p>
        )}

        {/* TITLE */}
        <h2
          className="
            max-w-[90%]
            text-center
            font-extrabold
            uppercase
            leading-[0.92]
            tracking-[-0.035em]
            text-white

            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        {description && (
          <p
            className="
              mt-5
              max-w-[420px]
              translate-y-4
              text-center
              text-[11px]
              font-normal
              leading-[1.55]
              tracking-[0.005em]
              text-white/70
              opacity-0

              transition-all
              duration-700

              group-hover:translate-y-0
              group-hover:opacity-100

              sm:text-xs
              md:text-sm
            "
          >
            {description}
          </p>
        )}

        {/* LEARN MORE */}
        <span
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-full
            bg-white
            px-6
            py-2.5

            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-black

            translate-y-3
            opacity-0

            transition-all
            duration-700

            group-hover:translate-y-0
            group-hover:opacity-100

            sm:px-7
            sm:py-3
            sm:text-[10px]

            md:text-xs
          "
        >
          Learn More

          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          opacity-80
        "
      />
    </Link>
  );
}