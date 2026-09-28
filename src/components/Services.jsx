import React from "react";

const services = [
  {
    icon: "✚",
    title: "Outpatient Consultation",
    text: "Personalized care for general and specialized health conditions."
  },
  {
    icon: "▣",
    title: "Inpatient Care",
    text: "Comfortable admission and continuous patient monitoring."
  },
  {
    icon: "◉",
    title: "Day Care Services",
    text: "Short-term medical procedures without overnight admission."
  },
  {
    icon: "⌕",
    title: "Diagnostic Laboratory",
    text: "Accurate testing and timely reports for early diagnosis."
  },
  {
    icon: "✚",
    title: "Pharmacy",
    text: "Quality medicines available within the hospital premises."
  },
  {
    icon: "♥",
    title: "IV Therapy & Nebulization",
    text: "Safe treatment for acute and chronic medical conditions."
  },
  {
    icon: "⚕",
    title: "Emergency Care",
    text: "Emergency services with experienced medical staff."
  },
  {
    icon: "☑",
    title: "Chronic Care",
    text: "Long-term management for diabetes, hypertension and related conditions."
  }
];

function Services() {
  return (
    <section className="section services" id="services">

      <div className="container">

        <div className="section-heading">

          <span>OUR HEALTHCARE SERVICES</span>

          <h2>
            Comprehensive Medical Services
          </h2>

          <p>
            Complete healthcare services under one roof
            with a patient-first approach.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

              <a href="#appointment">
                Learn More →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;