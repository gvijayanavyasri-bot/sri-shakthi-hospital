import { Link } from "react-router-dom";
import "./Home.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="classic-hero">

        <div className="hero-pattern"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-layout">

          <div className="hero-copy">

            <div className="eyebrow fade-up">
              <span className="eyebrow-dot"></span>
              Sri Sakthi Hospital
            </div>

            <h1 className="hero-title fade-up delay-1">
              Compassionate Care.
              <br />

              <span>Trusted Medicine.</span>

              <br />
              <strong>Advanced Healing.</strong>
            </h1>

            <p className="hero-description fade-up delay-2">
              Providing patient-focused healthcare with clinical
              excellence, compassion and trust for more than 15 years.
            </p>

            <div className="hero-buttons fade-up delay-3">

              <Link
                to="/appointment"
                className="gold-button"
              >
                <span>Book an Appointment</span>
                <span className="button-arrow">→</span>
              </Link>

              <Link
                to="/services"
                className="outline-button"
              >
                Explore Services
                <span>→</span>
              </Link>

            </div>

            <div className="hero-stats fade-up delay-4">

              <div className="stat-item">
                <strong>15+</strong>
                <span>Years Clinical Experience</span>
              </div>

              <div className="stat-item">
                <strong>24/7</strong>
                <span>Emergency Care</span>
              </div>

              <div className="stat-item">
                <strong>3</strong>
                <span>Languages Supported</span>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="hero-visual">

            <div className="hero-image-border">

              <div className="image-shine"></div>

              <img
                src="/doctor.jpeg"
                alt="Sri Sakthi Hospital"
              />

            </div>

            <div className="hero-doctor-card">

              <div className="doctor-card-image">
                <img
                  src={doctorImage}
                  alt="Dr. Sakthi Narasimha Garikapati"
                />
              </div>

              <div className="doctor-card-content">
                <small>MEDICAL DIRECTOR</small>

                <h3>
                  Dr. Sakthi Narasimha
                  <br />
                  Garikapati
                </h3>

                <p>
                  MBBS · DNB Family Medicine
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="trust-bar">

        <div className="container trust-grid">

          <div className="trust-item reveal-card">
            <span className="trust-icon">+</span>

            <div>
              <strong>Compassion</strong>
              <small>Genuine care for every patient</small>
            </div>
          </div>

          <div className="trust-item reveal-card">
            <span className="trust-icon">✓</span>

            <div>
              <strong>Precision</strong>
              <small>Accurate diagnosis & treatment</small>
            </div>
          </div>

          <div className="trust-item reveal-card">
            <span className="trust-icon">◆</span>

            <div>
              <strong>Trust</strong>
              <small>Healthcare built on confidence</small>
            </div>
          </div>

          <div className="trust-item reveal-card">
            <span className="trust-icon">24</span>

            <div>
              <strong>Emergency</strong>
              <small>Round-the-clock assistance</small>
            </div>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section section">

        <div className="container about-grid">

          <div className="about-photo reveal-left">

            <div className="photo-decoration"></div>

            <img
              src="/doctor.jpeg"
              alt="Sri Sakthi Hospital building"
            />

            <div className="about-badge">
              <strong>15+</strong>
              <span>Years of Clinical Excellence</span>
            </div>

          </div>


          <div className="about-content reveal-right">

            <span className="section-kicker">
              Welcome to Sri Sakthi Hospital
            </span>

            <h2>
              Healthcare with
              <br />
              <span>a personal touch</span>
            </h2>

            <p className="strong-text">
              At Sri Sakthi Hospital, we believe great healthcare
              begins with compassion, precision and trust.
            </p>

            <p>
              Our mission is to provide high-quality medical care
              combined with genuine human care. From routine
              consultations to complex medical conditions, our
              patient-first approach ensures personalized attention.
            </p>


            <div className="about-values">

              <div className="value-item">
                <span>01</span>

                <div>
                  <h4>Compassion</h4>
                  <p>
                    We treat every patient with empathy and respect.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <span>02</span>

                <div>
                  <h4>Clinical Excellence</h4>
                  <p>
                    Evidence-based diagnosis and treatment.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <span>03</span>

                <div>
                  <h4>Patient First</h4>
                  <p>
                    Personalized care for every stage of life.
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/hospital"
              className="dark-button"
            >
              Discover Our Hospital
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="services-section section">

        <div className="container">

          <div className="section-heading reveal-up">

            <span className="section-kicker">
              Our Healthcare Services
            </span>

            <h2>
              Comprehensive care
              <br />
              <span>under one roof</span>
            </h2>

            <p>
              Professional healthcare services designed around
              your needs, comfort and wellbeing.
            </p>

          </div>


          <div className="services-grid">

            <article className="service-card">
              <span className="service-number">01</span>

              <div className="service-icon">+</div>

              <h3>Outpatient Consultation</h3>

              <p>
                Personalized consultation and expert diagnosis
                for general and specialized health conditions.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>
            </article>


            <article className="service-card">
              <span className="service-number">02</span>

              <div className="service-icon">♡</div>

              <h3>Inpatient Care</h3>

              <p>
                Comfortable admission with continuous
                monitoring for patients requiring observation.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>
            </article>


            <article className="service-card">
              <span className="service-number">03</span>

              <div className="service-icon">✚</div>

              <h3>Diagnostic Laboratory</h3>

              <p>
                Accurate testing and timely reports supporting
                early diagnosis and effective treatment.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>
            </article>


            <article className="service-card">
              <span className="service-number">04</span>

              <div className="service-icon">24</div>

              <h3>Emergency Care</h3>

              <p>
                Round-the-clock emergency services supported
                by experienced medical staff.
              </p>

              <Link to="/services">
                Learn More <span>→</span>
              </Link>
            </article>

          </div>


          <div className="center-action">
            <Link
              to="/services"
              className="outline-dark-button"
            >
              View All Medical Services
              <span>→</span>
            </Link>
          </div>

        </div>

      </section>


      {/* ================= DOCTOR ================= */}
      <section className="doctor-section section">

        <div className="container doctor-layout">

          <div className="doctor-photo-wrapper reveal-left">

            <div className="doctor-photo-frame">

              <div className="doctor-image-glow"></div>

              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
              />

            </div>

            <div className="doctor-experience">
              <strong>15+</strong>
              <span>Years Clinical Experience</span>
            </div>

          </div>


          <div className="doctor-content reveal-right">

            <span className="section-kicker">
              Meet Your Doctor
            </span>

            <h2>
              Dr. Sakthi Narasimha
              <br />
              <span>Garikapati</span>
            </h2>

            <div className="doctor-credentials">
              MBBS · DNB Family Medicine · FCD · FIIM · PGPID
            </div>

            <p className="strong-text">
              With extensive experience in family medicine,
              internal medicine, diabetology and infectious
              diseases, Dr. Sakthi is dedicated to accurate
              diagnosis, ethical treatment and long-term
              patient wellness.
            </p>


            <div className="expertise-grid">

              <div>
                <span>01</span>
                <strong>Family Medicine</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Internal Medicine</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Clinical Diabetology</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Infectious Diseases</strong>
              </div>

            </div>


            <Link
              to="/doctor"
              className="dark-button"
            >
              Know Your Doctor
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FACILITIES ================= */}
      <section className="facilities-section">

        <div className="container">

          <div className="facilities-heading reveal-up">

            <div>
              <span className="section-kicker">
                Our Facilities
              </span>

              <h2>
                Designed around
                <br />
                <span>patient comfort</span>
              </h2>
            </div>

            <p>
              A modern healthcare environment combining
              professional medical services with comfort,
              convenience and safety.
            </p>

          </div>


          <div className="facilities-grid">

            <div className="facility-card large">

              <img
                src="/doctor.jpeg"
                alt="Hospital facility"
              />

              <div className="facility-overlay">
                <span>01</span>

                <h3>
                  Modern Consultation Rooms
                </h3>
              </div>

            </div>


            <div className="facility-list">

              <div className="facility-row">
                <span>02</span>

                <div>
                  <h3>Inpatient Rooms</h3>
                  <p>
                    Comfortable rooms with continuous monitoring.
                  </p>
                </div>
              </div>

              <div className="facility-row">
                <span>03</span>

                <div>
                  <h3>Diagnostic Laboratory</h3>
                  <p>
                    Accurate and timely diagnostic support.
                  </p>
                </div>
              </div>

              <div className="facility-row">
                <span>04</span>

                <div>
                  <h3>In-house Pharmacy</h3>
                  <p>
                    Convenient access to quality medicines.
                  </p>
                </div>
              </div>

              <div className="facility-row">
                <span>05</span>

                <div>
                  <h3>Emergency & Day Care</h3>
                  <p>
                    Dedicated facilities for urgent treatment.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPOINTMENT ================= */}
      <section className="appointment-banner">

        <div className="appointment-glow"></div>

        <div className="container appointment-inner">

          <div className="reveal-left">

            <span className="section-kicker">
              Your Health Matters
            </span>

            <h2>
              Let us care for
              <br />
              <span>your health.</span>
            </h2>

            <p>
              Consultation hours: 9:00 AM – 12:30 PM
              <br />
              5:30 PM – 9:00 PM
            </p>

          </div>


          <div className="appointment-actions reveal-right">

            <Link
              to="/appointment"
              className="gold-button"
            >
              Book an Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:9494456007"
              className="phone-button"
            >
              ☎ Call 9494456007
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;