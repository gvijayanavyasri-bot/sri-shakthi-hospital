import React from "react";

const facilities = [
  {
    number: "01",
    title: "Modern Consultation Rooms",
    text: "Comfortable rooms designed for comprehensive patient examinations."
  },
  {
    number: "02",
    title: "Inpatient Rooms",
    text: "Comfortable inpatient facilities with continuous monitoring."
  },
  {
    number: "03",
    title: "Diagnostic Laboratory",
    text: "Modern diagnostic facilities for accurate and timely testing."
  },
  {
    number: "04",
    title: "In-house Pharmacy",
    text: "Convenient access to quality medicines within the hospital."
  },
  {
    number: "05",
    title: "Emergency & Day Care",
    text: "Facilities designed for urgent and short-term medical treatment."
  },
  {
    number: "06",
    title: "Preventive Healthcare",
    text: "Health education and preventive care focused on long-term wellness."
  }
];

function Facilities() {
  return (
    <section className="section facilities" id="facilities">

      <div className="container">

        <div className="section-heading">

          <span>OUR FACILITIES</span>

          <h2>
            Designed Around Patient Comfort
          </h2>

          <p>
            Healthcare facilities focused on safety,
            comfort and quality.
          </p>

        </div>

        <div className="facility-grid">

          {facilities.map((item) => (

            <div className="facility-card" key={item.number}>

              <span className="facility-number">
                {item.number}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="facility-line"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Facilities;