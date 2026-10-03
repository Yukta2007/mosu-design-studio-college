"use client";

import "@/styles/ContactCities.css";

const offices = [
  {
    city: "LONDON",
    active: false,
    time: "10:24 AM",
  },
  {
    city: "MIAMI",
    active: false,
    time: "",
  },
  {
    city: "DUBAI",
    active: true,
    time: "7:24 PM",
    phone: "+971522250934",
    address: "THE PALM JUMEIRAH,\nDUBAI, UAE",
  },
  {
    city: "NEW YORK",
    active: false,
    time: "10:24 AM",
  },
  {
    city: "WARSAW",
    active: false,
    time: "4:24 PM",
  },
  {
    city: "KYIV",
    active: false,
    time: "5:24 PM",
  },
  {
    city: "MILAN",
    active: false,
    time: "4:24 PM",
  },
];

export default function ContactCities() {
  return (
    <section className="cities">

      <div className="cities-wrapper">

        {offices.map((office, index) => (

          <div
            key={index}
            className={`city-row ${office.active ? "active" : ""}`}
          >

            <div className="city-name">
              {office.city}
            </div>

            <div className="city-info">

              {office.time && (
                <div className="city-time">{office.time}</div>
              )}

              <div className="badge">
                Representative
              </div>

              {office.active && (
                <div className="contact-box">

                  <div>P.</div>

                  <div>
                    ☎ {office.phone}
                    <br />
                    <br />
                    A.
                  </div>

                  <div
  dangerouslySetInnerHTML={{
    __html: office.address?.replace(/\n/g, "<br/>") || "",
  }}
/>

                </div>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}