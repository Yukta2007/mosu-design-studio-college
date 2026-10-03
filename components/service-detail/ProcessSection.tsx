"use client";

import Image from "next/image";

type Step = {
  title: string;
  text: string;
};

interface Props {
  title: string;
  description: string;
  process: Step[];
  gallery: string[];
}

export default function ProcessSection({
  title,
  description,
  process,
  gallery,
}: Props) {
  return (
    <section className="bg-[#F6F4F1] py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-24 px-10">

        {/* LEFT */}
        <div className="sticky top-28 h-fit">

          <p className="mb-4 uppercase tracking-[0.35em] text-neutral-500">
            About
          </p>

          <h2 className="mb-10 text-5xl font-black uppercase">
            {title}
          </h2>

          <p className="mb-20 text-lg leading-9 text-neutral-700">
            {description}
          </p>

          <div className="space-y-10">
            {process.map((step, index) => (
              <div key={index}>
                <h3 className="mb-2 text-2xl font-bold uppercase">
                  {step.title}
                </h3>

                <p className="text-neutral-600 leading-8">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-12">

          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative h-[700px] overflow-hidden rounded-xl"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}