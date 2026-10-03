"use client";

import { useEffect, useState } from "react";

type Enquiry = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  location?: string;
  message?: string;
  createdAt: string;
};

export default function EnquiriesDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/enquiries");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch enquiries");
      }

      setEnquiries(data.enquiries || []);
    } catch (err) {
      console.error("FETCH ENQUIRIES ERROR:", err);
      setError("Unable to load enquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleLogout = async () => {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  } catch (error) {
    console.error("LOGOUT ERROR:", error);
  }
};

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 text-white sm:px-10 lg:px-16">

      {/* HEADER */}

      <header className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
            MOSU / ADMIN
          </p>

          <h1 className="text-5xl font-medium uppercase tracking-[-0.05em] sm:text-6xl">
            Enquiries
          </h1>
        </div>

       <div className="flex gap-3">
  <button
    onClick={fetchEnquiries}
    className="w-fit rounded-full border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
  >
    Refresh
  </button>

  <button
    onClick={handleLogout}
    className="w-fit rounded-full border border-red-400/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-red-400 transition hover:bg-red-400 hover:text-black"
  >
    Logout
  </button>
</div>
      </header>

      {/* STATS */}

      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="border border-white/10 p-6">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            Total Enquiries
          </p>

          <p className="mt-3 text-4xl font-light">
            {enquiries.length}
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            Latest Enquiry
          </p>

          <p className="mt-3 text-sm uppercase">
            {enquiries.length > 0
              ? new Date(enquiries[0].createdAt).toLocaleDateString()
              : "—"}
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            Status
          </p>

          <p className="mt-3 text-sm uppercase text-green-400">
            Connected
          </p>
        </div>

      </div>

      {/* CONTENT */}

      {loading && (
        <div className="py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Loading enquiries...
          </p>
        </div>
      )}

      {error && (
        <div className="border border-red-500/30 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-400">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && enquiries.length === 0 && (
        <div className="border border-white/10 py-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            No enquiries yet
          </p>
        </div>
      )}

      {/* ENQUIRIES */}

      {!loading && !error && enquiries.length > 0 && (
        <div className="space-y-4">

          {enquiries.map((enquiry) => (
            <article
              key={enquiry._id}
              className="border border-white/10 p-6 transition hover:border-white/30 sm:p-8"
            >

              <div className="grid gap-8 lg:grid-cols-[1fr_2fr_auto] lg:items-start">

                {/* PERSON */}

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Client
                  </p>

                  <h2 className="text-2xl font-light uppercase tracking-[-0.03em]">
                    {enquiry.name}
                  </h2>

                  <a
                    href={`mailto:${enquiry.email}`}
                    className="mt-3 block text-sm text-white/60 transition hover:text-white"
                  >
                    {enquiry.email}
                  </a>

                  {enquiry.phone && (
                    <a
                      href={`tel:${enquiry.phone}`}
                      className="mt-1 block text-sm text-white/60 transition hover:text-white"
                    >
                      {enquiry.phone}
                    </a>
                  )}
                </div>

                {/* PROJECT */}

                <div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Project
                      </p>

                      <p className="mt-2 text-sm uppercase">
                        {enquiry.projectType}
                      </p>
                    </div>

                    {enquiry.location && (
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                          Location
                        </p>

                        <p className="mt-2 text-sm uppercase">
                          {enquiry.location}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Received
                      </p>

                      <p className="mt-2 text-sm uppercase">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                  </div>

                  {enquiry.message && (
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Message
                      </p>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                        {enquiry.message}
                      </p>
                    </div>
                  )}
                </div>

                {/* ACTIONS */}

                <div className="flex gap-2 lg:flex-col">

                  <a
                    href={`tel:${enquiry.phone || ""}`}
                    className={`rounded-full border border-white/20 px-5 py-3 text-center text-[9px] uppercase tracking-[0.2em] transition ${
                      enquiry.phone
                        ? "hover:bg-white hover:text-black"
                        : "pointer-events-none opacity-30"
                    }`}
                  >
                    Call
                  </a>

                  <a
                    href={`mailto:${enquiry.email}`}
                    className="rounded-full bg-white px-5 py-3 text-center text-[9px] uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
                  >
                    Email
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>
      )}

    </main>
  );
}