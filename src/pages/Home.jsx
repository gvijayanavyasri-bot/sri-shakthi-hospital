import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="home-hero">

        <div className="hero-background-shape hero-shape-one"></div>
        <div className="hero-background-shape hero-shape-two"></div>

        <div className="home-container hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <span className="hero-label">
              SRI SAKTHI HOSPITAL
            </span>

            <div className="hero-line"></div>

            <h1>
              Compassionate Care.
              <br />
              <span>Trusted Medicine.</span>
              <br />
              Advanced Healing.
            </h1>

            <p className="hero-description">
              Patient-focused healthcare combining clinical expertise,
              modern medical care and genuine human compassion for you
              and your family.
            </p>

            <div className="hero-buttons">

              <Link
                to="/appointment"
                className="home-btn home-btn-primary"
              >
                <span>Book an Appointment</span>
                <strong>→</strong>
              </Link>

              <a
                href="tel:9494456007"
                className="home-btn home-btn-outline"
              >
                <span>Call Hospital</span>
                <strong>☎</strong>
              </a>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <strong>15+</strong>
                <span>Years Clinical<br />Experience</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>24/7</strong>
                <span>Emergency<br />Care</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>OPD</strong>
                <span>Outpatient<br />Care</span>
              </div>

            </div>

          </div>

          {/* RIGHT DOCTOR */}
          <div className="hero-doctor-area">

            <div className="doctor-glow"></div>

            <div className="doctor-circle"></div>

            <div className="doctor-image-wrapper">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
                className="hero-doctor-image"
              />
            </div>

            <div className="doctor-floating-card">

              <span className="doctor-card-label">
                MEDICAL DIRECTOR
              </span>

              <h3>
                Dr. Sakthi Narasimha
                <br />
                Garikapati
              </h3>

              <p>
                MBBS · DNB Family Medicine
              </p>

              <div className="doctor-experience">
                <span>15+</span>
                <small>Years of Clinical Excellence</small>
              </div>

            </div>

            <div className="floating-badge badge-one">
              <span>✚</span>
              <p>
                Patient
                <br />
                First
              </p>
            </div>

            <div className="floating-badge badge-two">
              <span>♥</span>
              <p>
                Trusted
                <br />
                Care
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="trust-strip">

        <div className="home-container trust-grid">

          <div className="trust-box">
            <div className="trust-icon">✚</div>
            <div>
              <h3>Patient First</h3>
              <p>Personalized healthcare</p>
            </div>
          </div>

          <div className="trust-box">
            <div className="trust-icon">★</div>
            <div>
              <h3>Expert Care</h3>
              <p>Experienced medical team</p>
            </div>
          </div>

          <div className="trust-box">
            <div className="trust-icon">◈</div>
            <div>
              <h3>Modern Facilities</h3>
              <p>Comfortable environment</p>
            </div>
          </div>

          <div className="trust-box">
            <div className="trust-icon">♥</div>
            <div>
              <h3>Emergency Support</h3>
              <p>Care when you need it</p>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME SECTION
      ===================================================== */}

      <section className="welcome-section">

        <div className="home-container welcome-grid">

          <div className="welcome-content">

            <span className="section-label">
              WELCOME TO SRI SAKTHI HOSPITAL
            </span>

            <h2>
              Healthcare built on
              <br />
              <span>compassion and trust.</span>
            </h2>

            <p className="welcome-lead">
              At Sri Sakthi Hospital, we believe great healthcare
              begins with compassion, precision and trust.
            </p>

            <p>
              Our patient-first approach combines clinical expertise
              with genuine human care. From routine consultations
              to complex medical conditions, we remain committed
              to supporting your health at every stage of life.
            </p>

            <div className="values-row">

              <div className="value-card">
                <span>01</span>
                <h3>Compassion</h3>
                <p>
                  Every patient is treated with empathy,
                  dignity and genuine care.
                </p>
              </div>

              <div className="value-card">
                <span>02</span>
                <h3>Precision</h3>
                <p>
                  Accurate diagnosis and evidence-based
                  treatment for better outcomes.
                </p>
              </div>

              <div className="value-card">
                <span>03</span>
                <h3>Trust</h3>
                <p>
                  Building lasting relationships with
                  patients and families.
                </p>
              </div>

            </div>

            <Link
              to="/about"
              className="text-link"
            >
              Discover Our Hospital
              <span>→</span>
            </Link>

          </div>


          <div className="welcome-visual">

            <div className="visual-frame">

              <div className="visual-top-line"></div>

              <div className="visual-content">

                <span className="visual-symbol">✚</span>

                <h3>
                  Compassion
                  <br />
                  <span>Excellence</span>
                  <br />
                  Trust
                </h3>

                <p>
                  Providing quality healthcare
                  with a personal touch.
                </p>

              </div>

              <div className="visual-number">
                <strong>15</strong>
                <span>+</span>
                <small>
                  YEARS OF
                  <br />
                  EXPERIENCE
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="stats-section">

        <div className="home-container stats-grid">

          <div className="stat-card">
            <strong>15+</strong>
            <span>Years of Clinical Excellence</span>
          </div>

          <div className="stat-card">
            <strong>OPD</strong>
            <span>Outpatient Consultation</span>
          </div>

          <div className="stat-card">
            <strong>IPD</strong>
            <span>Inpatient Care</span>
          </div>

          <div className="stat-card">
            <strong>24/7</strong>
            <span>Emergency Care</span>
          </div>

          <div className="stat-card">
            <strong>DAY</strong>
            <span>Day Care Services</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="home-container">

          <div className="section-heading">

            <span className="section-label">
              OUR HEALTHCARE SERVICES
            </span>

            <h2>
              Complete healthcare
              <br />
              <span>under one roof.</span>
            </h2>

            <p>
              Comprehensive medical services delivered with
              clinical expertise, compassion and a patient-first
              approach.
            </p>

          </div>


          <div className="services-grid">

            <article className="service-card service-featured">

              <div className="service-number">01</div>

              <div className="service-icon">
                ✚
              </div>

              <h3>
                Outpatient
                <br />
                Consultation
              </h3>

              <p>
                Personalized care for general and specialized
                health conditions with thorough examination
                and expert diagnosis.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">02</div>

              <div className="service-icon">
                ♡
              </div>

              <h3>
                Inpatient
                <br />
                Care
              </h3>

              <p>
                Comfortable admission and continuous monitoring
                for patients requiring extended medical care.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">03</div>

              <div className="service-icon">
                ◈
              </div>

              <h3>
                Diagnostic
                <br />
                Laboratory
              </h3>

              <p>
                Accurate testing and timely reports supporting
                early diagnosis and effective treatment.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">04</div>

              <div className="service-icon">
                +
              </div>

              <h3>
                Day Care
                <br />
                Services
              </h3>

              <p>
                Short-term procedures and treatments allowing
                patients to return home the same day.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">05</div>

              <div className="service-icon">
                ◉
              </div>

              <h3>
                IV Therapy &
                <br />
                Nebulization
              </h3>

              <p>
                Safe and effective treatment for acute and
                chronic respiratory conditions.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>

            </article>


            <article className="service-card emergency-card">

              <div className="service-number">06</div>

              <div className="service-icon">
                !
              </div>

              <h3>
                Emergency
                <br />
                Care
              </h3>

              <p>
                Experienced staff ready to provide timely
                medical assistance when you need it most.
              </p>

              <a href="tel:9494456007">
                Call Now <span>☎</span>
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCTOR SECTION
      ===================================================== */}

      <section className="doctor-section">

        <div className="doctor-section-pattern"></div>

        <div className="home-container doctor-grid">

          <div className="doctor-photo-area">

            <div className="doctor-photo-border"></div>

            <img
              src={doctorImage}
              alt="Dr. Sakthi Narasimha Garikapati"
            />

            <div className="doctor-photo-caption">
              <span>MEDICAL DIRECTOR</span>
              <strong>15+ Years Experience</strong>
            </div>

          </div>


          <div className="doctor-content">

            <span className="section-label">
              MEET YOUR DOCTOR
            </span>

            <h2>
              Medical care with
              <br />
              <span>experience & empathy.</span>
            </h2>

            <h3>
              Dr. Sakthi Narasimha Garikapati
            </h3>

            <p className="doctor-qualification">
              MBBS · DNB Family Medicine · FCD · FIIM · PGPID
            </p>

            <p>
              With extensive experience in family medicine,
              internal medicine, diabetology and infectious
              diseases, Dr. Sakthi is dedicated to accurate
              diagnosis, ethical treatment and long-term
              patient wellness.
            </p>

            <div className="expertise-list">

              <div>
                <span>✓</span>
                Family Medicine
              </div>

              <div>
                <span>✓</span>
                Internal Medicine
              </div>

              <div>
                <span>✓</span>
                Clinical Diabetology
              </div>

              <div>
                <span>✓</span>
                Infectious Diseases
              </div>

            </div>

            <Link
              to="/doctor"
              className="doctor-button"
            >
              Know Your Doctor
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPOINTMENT CTA
      ===================================================== */}

      <section className="appointment-section">

        <div className="appointment-glow"></div>

        <div className="home-container appointment-inner">

          <div>

            <span className="section-label light-label">
              YOUR HEALTH MATTERS
            </span>

            <h2>
              Ready to take the
              <br />
              <span>next step?</span>
            </h2>

            <p>
              Schedule a consultation with our medical team
              and take the next step towards better health.
            </p>

          </div>

          <div className="appointment-actions">

            <Link
              to="/appointment"
              className="appointment-btn"
            >
              Schedule an Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:9494456007"
              className="appointment-phone"
            >
              <small>CALL OUR HOSPITAL</small>
              <strong>9494456007</strong>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;