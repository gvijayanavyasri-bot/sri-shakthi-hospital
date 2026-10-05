import { Link } from "react-router-dom";
import "./Hospital.css";

function Hospital() {
  return (
    <main className="hospital-page">

      {/* Page Hero */}
      <section className="hospital-banner">
        <div className="container">
          <div className="hospital-banner-content">
            <span>ABOUT OUR HOSPITAL</span>

            <h1>
              A tradition of
              <br />
              trusted healthcare
            </h1>

            <p>
              Sri Shakthi Hospital combines experienced medical
              professionals, modern facilities and compassionate
              patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="hospital-intro section">
        <div className="container hospital-intro-grid">

          <div className="hospital-image">
            <img
              src="/doctor.jpeg"
              alt="Sri Shakthi Hospital"
            />

            <div className="hospital-image-caption">
              <strong>25+</strong>
              <span>Years of Trusted Care</span>
            </div>
          </div>

          <div className="hospital-intro-content">

            <span className="section-label">
              Sri Shakthi Hospital
            </span>

            <h2 className="section-title">
              Healthcare with
              <br />
              a human touch
            </h2>

            <p>
              Sri Shakthi Hospital is dedicated to delivering
              dependable and compassionate healthcare to individuals
              and families.
            </p>

            <p>
              Our approach combines medical expertise with modern
              facilities and personalized attention. Every patient
              deserves to feel heard, respected and cared for.
            </p>

            <p>
              From consultation and diagnosis to treatment and
              recovery, our team works together to provide a
              comfortable and professional healthcare experience.
            </p>

            <Link
              to="/appointment"
              className="btn btn-primary"
            >
              Book an Appointment
            </Link>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="hospital-values section">
        <div className="container">

          <div className="section-header">
            <span className="section-label">
              Our Philosophy
            </span>

            <h2 className="section-title">
              What guides our care
            </h2>

            <p className="section-description">
              Our values shape every interaction with our patients
              and every decision made by our healthcare team.
            </p>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <div className="value-number">01</div>

              <h3>Compassion</h3>

              <p>
                We treat every patient with dignity, kindness
                and genuine concern.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">02</div>

              <h3>Excellence</h3>

              <p>
                We continuously strive for high standards in
                clinical care and patient service.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">03</div>

              <h3>Integrity</h3>

              <p>
                We believe in transparent communication,
                ethical practice and responsible healthcare.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">04</div>

              <h3>Trust</h3>

              <p>
                We build lasting relationships with patients
                through dependable and respectful care.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="hospital-stats">
        <div className="container stats-grid">

          <div className="stat-item">
            <strong>25+</strong>
            <span>Years of Service</span>
          </div>

          <div className="stat-item">
            <strong>50K+</strong>
            <span>Patients Served</span>
          </div>

          <div className="stat-item">
            <strong>20+</strong>
            <span>Medical Professionals</span>
          </div>

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Patient Support</span>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="hospital-cta">
        <div className="container">

          <div>
            <span className="section-label">
              Need Medical Assistance?
            </span>

            <h2>
              Let our team take care of you.
            </h2>
          </div>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Hospital;