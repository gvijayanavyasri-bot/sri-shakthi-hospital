import React from "react";
import "./Facilities.css";

function Facilities() {
  return (
    <main className="facilities-page">

      {/* Page Header */}
      <section className="facilities-header">
        <div className="facilities-header-content">
          <p>OUR HOSPITAL</p>
          <h1>Hospital Facilities</h1>
          <span>
            Comfortable, safe and patient-focused healthcare facilities
            designed to support quality medical care.
          </span>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities-content">

        <div className="facilities-intro">
          <p className="section-label">OUR FACILITIES</p>

          <h2>
            Designed Around
            <br />
            <span>Patient Care</span>
          </h2>

          <div className="gold-line"></div>

          <p>
            Sri Sakthi Hospital provides a range of healthcare facilities
            designed to offer patients a comfortable and supportive
            environment throughout their treatment journey.
          </p>
        </div>

        <div className="facilities-grid">

          <div className="facility-card">
            <div className="facility-number">01</div>
            <div className="facility-icon">✚</div>

            <h3>Consultation Rooms</h3>

            <p>
              Fully equipped rooms for patient consultation,
              examination and personalized medical care.
            </p>

            <div className="facility-footer">
              <span>Patient Care</span>
              <span>→</span>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-number">02</div>
            <div className="facility-icon">⌂</div>

            <h3>Inpatient Rooms</h3>

            <p>
              Comfortable inpatient facilities designed to provide
              a calm environment with continuous monitoring.
            </p>

            <div className="facility-footer">
              <span>Inpatient Care</span>
              <span>→</span>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-number">03</div>
            <div className="facility-icon">+</div>

            <h3>Diagnostic Laboratory</h3>

            <p>
              Modern laboratory facilities supporting accurate
              and timely medical diagnosis.
            </p>

            <div className="facility-footer">
              <span>Diagnostics</span>
              <span>→</span>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-number">04</div>
            <div className="facility-icon">Rx</div>

            <h3>In-house Pharmacy</h3>

            <p>
              Convenient pharmacy services within the hospital
              for easier access to prescribed medicines.
            </p>

            <div className="facility-footer">
              <span>Pharmacy</span>
              <span>→</span>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-number">05</div>
            <div className="facility-icon">+</div>

            <h3>Emergency Unit</h3>

            <p>
              Emergency facilities supporting patients who require
              urgent medical attention and immediate care.
            </p>

            <div className="facility-footer">
              <span>Emergency Care</span>
              <span>→</span>
            </div>
          </div>

          <div className="facility-card featured-card">
            <div className="facility-number">06</div>
            <div className="facility-icon">♡</div>

            <h3>Patient-focused Care</h3>

            <p>
              A compassionate healthcare environment focused on
              patient comfort, safety and individual needs.
            </p>

            <div className="facility-footer">
              <span>Compassionate Care</span>
              <span>→</span>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="facilities-cta">
        <div>
          <p>QUALITY HEALTHCARE</p>
          <h2>Care With Compassion</h2>
          <span>
            Your comfort and well-being remain at the heart of our care.
          </span>
        </div>

        <a href="/appointment">Book an Appointment</a>
      </section>

    </main>
  );
}

export default Facilities;