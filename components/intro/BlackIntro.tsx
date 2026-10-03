"use client";

export default function BlackIntro() {
  return (
    <section
      className="
        relative
        h-screen
        w-full
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black" />

      {/* Center Logo */}
      <h1
        className="
          relative
          z-10
          text-white
          text-[7vw]
          font-black
          uppercase
          tracking-tight
          leading-none
          select-none
        "
      >
        MOSU
      </h1>
    </section>
  );
}