import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <div className="small-title">
            SRI SAKTHI HOSPITAL
          </div>

          <h1>
            Compassionate Care.
            <br />
            <span>Trusted Medicine.</span>
            <br />
            Advanced Healing.
          </h1>

          <p>
            Patient-focused healthcare with clinical expertise,
            modern medical standards and genuine human care.
          </p>

          <div className="hero-buttons">

            <a href="#appointment" className="btn primary-btn">
              Book Appointment
            </a>

            <a href="tel:9494456007" className="btn outline-btn">
              Call Now
            </a>

          </div>

          <div className="hero-info">

            <div>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Emergency Care</span>
            </div>

            <div>
              <strong>OPD</strong>
              <span>Patient Care</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;