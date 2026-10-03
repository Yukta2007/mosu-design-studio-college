"use client";

interface Props {
  city: any;
  onClose: () => void;
}

export default function ContactModal({ city, onClose }: Props) {
  if (!city) return null;

  const phone = city.phone || "+91 XXXXXXXXXX";

  const whatsappNumber = phone.replace(/\D/g, "");

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-[1000]

          w-[90%]
          max-w-md

          -translate-x-1/2
          -translate-y-1/2

          rounded-3xl
          border
          border-white/10
          bg-[#242323]

          p-7
          sm:p-10

          text-center
          text-white
          shadow-2xl
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-4

            text-3xl
            text-white/40

            transition-colors
            hover:text-white
          "
        >
          ×
        </button>

        {/* City */}
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          Contact
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-black
            uppercase
            tracking-tight
          "
        >
          {city.name}
        </h2>

        {/* Number */}
        <p className="mt-5 text-lg text-white/80">
          {phone}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleCall}
            className="
              w-full
              rounded-full
              border
              border-white/20
              py-4

              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]

              transition
              duration-300

              hover:bg-white
              hover:text-black
            "
          >
            Call
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="
              w-full
              rounded-full
              bg-white
              py-4

              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]

              text-black

              transition
              duration-300

              hover:bg-white/80
            "
          >
            WhatsApp
          </button>
        </div>

        {/* Cancel */}
        <button
          type="button"
          onClick={onClose}
          className="
            mt-5
            text-xs
            uppercase
            tracking-widest
            text-white/40

            transition-colors
            hover:text-white
          "
        >
          Cancel
        </button>
      </div>
    </>
  );
}
