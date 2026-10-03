export default function HeroBanner({
  title,
}: {
  title: string;
}) {
  return (
    <section className="relative flex h-screen items-end overflow-hidden bg-[#242323]">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 bottom-24 left-6 sm:left-10 lg:left-20">
        <h1
          className="
            font-black
            uppercase
            leading-none
            tracking-[-0.04em]
            text-white

            text-[60px]
            sm:text-[90px]
            md:text-[110px]
            lg:text-[140px]
          "
        >
          {title}
        </h1>
      </div>
    </section>
  );
}