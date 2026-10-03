"use client";

import { useState } from "react";

export default function WorldwideReachMap() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <div className="relative w-full">
      {!mapOpen ? (
        <button
          type="button"
          onClick={() => setMapOpen(true)}
          className="
            group
            block
            w-full
            text-left
            text-[18px]
            font-bold
            uppercase
            leading-[0.95]
            tracking-[-0.055em]
            text-black/15
            transition-all
            duration-500
            hover:text-black
          "
        >
          WORLDWIDE REACH

          <span
            className="
              ml-3
              inline-block
              translate-x-[-5px]
              text-[11px]
              opacity-0
              transition-all
              duration-500
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            ↗
          </span>
        </button>
      ) : (
        <div
          className="
            relative
            h-[500px]
            w-full
            overflow-hidden
            bg-[#ddd]
            animate-map-in
          "
        >
          <iframe
            title="Worldwide Reach"
            src="https://www.google.com/maps?q=Mumbai,India&output=embed"
            className="
              h-full
              w-full
              border-0
              grayscale
            "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

          <button
            type="button"
            onClick={() => setMapOpen(false)}
            aria-label="Close map"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-black
              text-xl
              leading-none
              text-white
              transition-transform
              duration-500
              hover:rotate-90
            "
          >
            ×
          </button>

          <div
            className="
              absolute
              bottom-5
              left-5
              z-20
              bg-white
              px-4
              py-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-black
            "
          >
            Worldwide Reach
          </div>
        </div>
      )}
    </div>
  );
}