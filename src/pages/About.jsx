import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function About() {
  return (
    <main className="about-page">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-one"></div>
        <div className="about-hero-glow about-glow-two"></div>

        <div className="about-container about-hero-grid">

          <div className="about-hero-content">

            <div className="about-eyebrow">
              <span className="eyebrow-line"></span>
              ABOUT SRI SAKTHI HOSPITAL
            </div>

            <h1>
              Compassionate care.
              <br />
              <span>Trusted healthcare.</span>
            </h1>

            <p className="about-hero-text">
              At Sri Sakthi Hospital, we believe healthcare is more than
              treatment. It is about listening carefully, understanding every
              patient's needs and delivering dependable medical care with
              compassion, clinical excellence and trust.
            </p>

            <div className="about-hero-buttons">
              <Link to="/appointment" className="about-btn about-btn-primary">
                Book an Appointment
                <span>→</span>
              </Link>

              <Link to="/services" className="about-btn about-btn-outline">
                Explore Services
              </Link>
            </div>

            <div className="about-hero-points">
              <div className="hero-point">
                <span className="point-check">✓</span>
                <div>
                  <strong>15+ Years</strong>
                  <small>Clinical Experience</small>
                </div>
              </div>

              <div className="hero-point">
                <span className="point-check">✓</span>
                <div>
                  <strong>24/7</strong>
                  <small>Emergency Care</small>
                </div>
              </div>

              <div className="hero-point">
                <span className="point-check">✓</span>
                <div>
                  <strong>Patient First</strong>
                  <small>Personalized Care</small>
                </div>
              </div>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="about-hero-visual">

            <div className="hero-image-frame">

              <div className="hero-image-decoration"></div>

              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
              />

              <div className="doctor-floating-card">
                <div className="doctor-card-icon">+</div>

                <div>
                  <span>MEDICAL DIRECTOR</span>
                  <strong>Dr. Sakthi Narasimha Garikapati</strong>
                </div>
              </div>

            </div>

            <div className="hero-experience-badge">
              <strong>15+</strong>
              <span>Years of<br />Clinical Excellence</span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="about-introduction">

        <div className="about-container">

          <div className="section-heading centered-heading">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              Healthcare built around
              <br />
              <span>people, not just procedures.</span>
            </h2>

            <p>
              Sri Sakthi Hospital is committed to creating a healthcare
              experience where patients feel heard, respected and confident
              in the care they receive.
            </p>
          </div>


          <div className="about-intro-grid">

            <div className="intro-main-card">
              <span className="intro-number">01</span>

              <div className="intro-icon">✦</div>

              <h3>
                Caring beyond
                <br />
                treatment.
              </h3>

              <p>
                Our approach combines medical knowledge with empathy,
                communication and responsible clinical decision-making.
                Every consultation begins by understanding the person
                behind the symptoms.
              </p>

              <div className="intro-line"></div>

              <strong>Compassion • Precision • Trust</strong>
            </div>


            <div className="intro-text-card">

              <span className="section-label">OUR APPROACH</span>

              <h3>
                Clear communication.
                <br />
                <span>Confident care.</span>
              </h3>

              <p>
                We believe patients should understand their health, their
                treatment options and the next steps in their care.
              </p>

              <p>
                From outpatient consultations and chronic disease management
                to emergency support and inpatient care, our focus remains on
                safe, personalized and dependable healthcare.
              </p>

              <div className="approach-list">

                <div className="approach-item">
                  <span>01</span>
                  <div>
                    <strong>Listen First</strong>
                    <p>Understanding your concerns before planning care.</p>
                  </div>
                </div>

                <div className="approach-item">
                  <span>02</span>
                  <div>
                    <strong>Explain Clearly</strong>
                    <p>Making medical information easier to understand.</p>
                  </div>
                </div>

                <div className="approach-item">
                  <span>03</span>
                  <div>
                    <strong>Treat Responsibly</strong>
                    <p>Providing thoughtful and evidence-based care.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="about-values">

        <div className="about-container">

          <div className="values-header">

            <div>
              <span className="section-label">OUR VALUES</span>

              <h2>
                Principles that guide
                <br />
                <span>every patient interaction.</span>
              </h2>
            </div>

            <p>
              Our values shape how we communicate, make clinical decisions
              and care for patients and families.
            </p>

          </div>


          <div className="values-grid">

            <article className="value-card value-card-featured">

              <span className="value-number">01</span>

              <div className="value-icon">♥</div>

              <h3>Compassion</h3>

              <p>
                We listen, understand and treat every patient with dignity,
                empathy and genuine concern.
              </p>

              <div className="value-arrow">↗</div>

            </article>


            <article className="value-card">

              <span className="value-number">02</span>

              <div className="value-icon">✦</div>

              <h3>Clinical Excellence</h3>

              <p>
                We combine medical knowledge, experience and responsible
                clinical decision-making to provide quality care.
              </p>

              <div className="value-arrow">↗</div>

            </article>


            <article className="value-card">

              <span className="value-number">03</span>

              <div className="value-icon">◆</div>

              <h3>Patient Trust</h3>

              <p>
                Clear communication, ethical practice and dependable support
                help us build lasting relationships with patients and families.
              </p>

              <div className="value-arrow">↗</div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          STATISTICS
      ========================================================= */}
      <section className="about-stats">

        <div className="about-container stats-grid">

          <div className="stat-item">
            <strong>15+</strong>
            <span>Years of Clinical<br />Experience</span>
          </div>

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Emergency<br />Support</span>
          </div>

          <div className="stat-item">
            <strong>3</strong>
            <span>Languages<br />Supported</span>
          </div>

          <div className="stat-item">
            <strong>2009</strong>
            <span>Serving Patients<br />Since</span>
          </div>

        </div>
      </section>


      {/* =========================================================
          DOCTOR
      ========================================================= */}
      <section className="about-doctor">

        <div className="about-container doctor-grid">

          <div className="doctor-photo-wrapper">

            <div className="doctor-photo-border"></div>

            <img
              src={doctorImage}
              alt="Dr. Sakthi Narasimha Garikapati"
            />

            <div className="doctor-photo-label">
              <span>MEDICAL DIRECTOR</span>
              <strong>Clinical Leadership</strong>
            </div>

          </div>


          <div className="doctor-content">

            <span className="section-label">
              MEDICAL LEADERSHIP
            </span>

            <h2>
              Experience guided by
              <br />
              <span>empathy and expertise.</span>
            </h2>

            <p className="doctor-intro">
              Dr. Sakthi Narasimha Garikapati leads Sri Sakthi Hospital with
              a patient-first philosophy built around clinical knowledge,
              careful listening and responsible medical care.
            </p>

            <div className="doctor-name">
              <h3>Dr. Sakthi Narasimha Garikapati</h3>
              <span>MBBS · DNB Family Medicine</span>
            </div>

            <div className="doctor-expertise">

              <div className="expertise-item">
                <span>01</span>
                <strong>Family Medicine</strong>
              </div>

              <div className="expertise-item">
                <span>02</span>
                <strong>Internal Medicine</strong>
              </div>

              <div className="expertise-item">
                <span>03</span>
                <strong>Clinical Diabetology</strong>
              </div>

              <div className="expertise-item">
                <span>04</span>
                <strong>Infectious Diseases</strong>
              </div>

            </div>

            <Link to="/doctor" className="doctor-link">
              Meet the Doctor
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
          MISSION / VISION
      ========================================================= */}
      <section className="about-mission">

        <div className="about-container">

          <div className="mission-heading">

            <span className="section-label">
              OUR COMMITMENT
            </span>

            <h2>
              A healthcare philosophy
              <br />
              <span>built for the long term.</span>
            </h2>

          </div>


          <div className="mission-grid">

            <article className="mission-card">

              <span className="mission-number">01</span>

              <div className="mission-icon">◎</div>

              <h3>Our Mission</h3>

              <p>
                To provide compassionate, high-quality healthcare through
                ethical practice, responsible clinical decisions and
                patient-centered medical care.
              </p>

            </article>


            <article className="mission-card mission-card-dark">

              <span className="mission-number">02</span>

              <div className="mission-icon">◇</div>

              <h3>Our Vision</h3>

              <p>
                To build a trusted healthcare environment recognized for
                clinical excellence, innovation, safety and patient-centered
                care.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="about-cta">

        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>

        <div className="about-container cta-content">

          <span className="section-label cta-label">
            YOUR HEALTH MATTERS
          </span>

          <h2>
            Ready to take the
            <br />
            <span>next step?</span>
          </h2>

          <p>
            Schedule a consultation and experience healthcare with
            compassion, clarity and trust.
          </p>

          <div className="cta-buttons">

            <Link to="/appointment" className="about-btn cta-primary">
              Schedule an Appointment
              <span>→</span>
            </Link>

            <Link to="/contact" className="about-btn cta-outline">
              Contact Hospital
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;