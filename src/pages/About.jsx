import { Link } from "react-router-dom";
import "./About.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          DOCTOR HERO
      ===================================================== */}
      <section className="doctor-hero">

        <div className="doctor-hero-bg"></div>

        <div className="about-container doctor-hero-grid">

          {/* LEFT - DOCTOR IMAGE */}
          <div className="doctor-visual reveal-left">

            <div className="doctor-image-box">

              <div className="doctor-image-border"></div>

              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
              />

              <div className="doctor-experience-badge">
                <strong>15+</strong>
                <span>Years Clinical<br />Experience</span>
              </div>

            </div>

            <div className="doctor-image-caption">

              <span>MEDICAL DIRECTOR</span>

              <strong>
                Dr. Sakthi Narasimha Garikapati
              </strong>

            </div>

          </div>


          {/* RIGHT - DOCTOR DETAILS */}
          <div className="doctor-hero-content reveal-right">

            <div className="section-label">
              <span></span>
              MEET YOUR DOCTOR
            </div>

            <h1>
              Dr. Sakthi Narasimha
              <br />
              <em>Garikapati</em>
            </h1>

            <h2>
              Experienced medicine,
              <br />
              <span>personalized care.</span>
            </h2>

            <div className="doctor-qualifications">

              <span>MBBS</span>
              <b>•</b>

              <span>DNB Family Medicine</span>
              <b>•</b>

              <span>FCD</span>
              <b>•</b>

              <span>FIIM</span>
              <b>•</b>

              <span>PGPID</span>

            </div>

            <p className="doctor-intro">

              Dr. Sakthi Narasimha Garikapati focuses on
              accurate diagnosis, evidence-based treatment
              and long-term patient wellness.

            </p>

            <p>

              His clinical areas include family medicine,
              internal medicine, clinical diabetology and
              infectious diseases.

            </p>

            <p>

              His approach emphasizes giving patients time,
              clarity and confidence throughout their
              treatment journey.

            </p>


            {/* SPECIALTIES */}
            <div className="doctor-specialties">

              <div className="specialty-card">
                <span>01</span>
                <strong>Family Medicine</strong>
              </div>

              <div className="specialty-card">
                <span>02</span>
                <strong>Internal Medicine</strong>
              </div>

              <div className="specialty-card">
                <span>03</span>
                <strong>Clinical Diabetology</strong>
              </div>

              <div className="specialty-card">
                <span>04</span>
                <strong>Infectious Diseases</strong>
              </div>

            </div>


            {/* BUTTONS */}
            <div className="doctor-actions">

              <Link
                to="/appointment"
                className="primary-button"
              >
                Book Appointment
                <span>→</span>
              </Link>

              <Link
                to="/doctor"
                className="outline-button"
              >
                View Doctor Profile
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOSPITAL INTRO
      ===================================================== */}
      <section className="hospital-intro section-padding">

        <div className="about-container intro-grid">

          {/* IMAGE */}
          <div className="hospital-image reveal-left">

            <div className="hospital-image-frame">

              <img
                src="/doctor.jpeg"
                alt="Sri Sakthi Hospital"
              />

            </div>

            <div className="hospital-image-badge">

              <strong>15+</strong>

              <span>
                Years of<br />
                Clinical Excellence
              </span>

            </div>

          </div>


          {/* CONTENT */}
          <div className="hospital-intro-content reveal-right">

            <div className="section-label">
              <span></span>
              WELCOME TO SRI SAKTHI
            </div>

            <h2>
              Healthcare built on
              <br />
              <em>trust and compassion</em>
            </h2>

            <p className="strong-paragraph">

              Sri Sakthi Hospital is committed to providing
              high-quality healthcare with a patient-first
              approach.

            </p>

            <p>

              We believe that excellent healthcare is more
              than diagnosis and treatment. It is about
              listening to patients, understanding their
              concerns and creating a healthcare experience
              built on confidence and care.

            </p>

            <p>

              Our hospital brings together medical expertise,
              modern healthcare facilities and personalized
              attention to support patients and families at
              every stage of life.

            </p>


            {/* HIGHLIGHTS */}
            <div className="hospital-highlights">

              <div>
                <span>✓</span>
                <div>
                  <strong>Patient First</strong>
                  <small>
                    Personalized attention for every patient
                  </small>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Clinical Excellence</strong>
                  <small>
                    Evidence-based medical care
                  </small>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Compassionate Care</strong>
                  <small>
                    Healthcare with dignity and respect
                  </small>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Modern Facilities</strong>
                  <small>
                    Comfortable healthcare environment
                  </small>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOSPITAL ABOUT BANNER
      ===================================================== */}
      <section className="hospital-banner">

        <div className="hospital-banner-overlay"></div>

        <div className="about-container hospital-banner-content">

          <div className="section-label light">
            <span></span>
            ABOUT SRI SAKTHI HOSPITAL
          </div>

          <h2>
            Compassionate care.
            <br />
            <em>Trusted healthcare.</em>
          </h2>

          <p>
            A patient-first healthcare environment built
            around compassion, clinical excellence and trust.
          </p>

          <div className="breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>/</span>

            <strong>
              About Us
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="values-section section-padding">

        <div className="about-container">

          <div className="section-heading reveal-up">

            <div className="section-label centered-label">
              <span></span>
              WHAT WE STAND FOR
              <span></span>
            </div>

            <h2>
              Our values guide
              <br />
              <em>everything we do</em>
            </h2>

            <p>
              Every interaction at Sri Sakthi Hospital is
              guided by our commitment to quality,
              compassion and trust.
            </p>

          </div>


          <div className="values-grid">

            <article className="value-card reveal-up">

              <div className="value-top">
                <span>01</span>
                <i>✚</i>
              </div>

              <h3>
                Compassion
              </h3>

              <p>
                We treat every patient with empathy,
                dignity and genuine concern for their
                wellbeing.
              </p>

              <div className="value-line"></div>

            </article>


            <article className="value-card featured reveal-up">

              <div className="value-top">
                <span>02</span>
                <i>◆</i>
              </div>

              <h3>
                Excellence
              </h3>

              <p>
                We are committed to professional medical
                care, accurate diagnosis and responsible
                treatment.
              </p>

              <div className="value-line"></div>

            </article>


            <article className="value-card reveal-up">

              <div className="value-top">
                <span>03</span>
                <i>✓</i>
              </div>

              <h3>
                Trust
              </h3>

              <p>
                We build lasting relationships through
                honesty, communication and dependable
                healthcare.
              </p>

              <div className="value-line"></div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="mission-section">

        <div className="about-container mission-grid">

          <div className="mission-card reveal-left">

            <div className="mission-number">
              01
            </div>

            <div className="mission-label">
              OUR MISSION
            </div>

            <div className="mission-icon">
              ✚
            </div>

            <h3>
              Compassionate healthcare
              for every patient.
            </h3>

            <p>
              To provide high-quality healthcare through
              ethical medical practice, professional
              expertise and personalized patient care.
            </p>

          </div>


          <div className="mission-card dark reveal-right">

            <div className="mission-number">
              02
            </div>

            <div className="mission-label">
              OUR VISION
            </div>

            <div className="mission-icon">
              ◆
            </div>

            <h3>
              Setting a higher standard
              in patient-centered care.
            </h3>

            <p>
              To create a healthcare environment recognized
              for clinical excellence, innovation, safety
              and the human touch.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="services-section section-padding">

        <div className="about-container">

          <div className="section-heading reveal-up">

            <div className="section-label centered-label">
              <span></span>
              COMPLETE HEALTHCARE
              <span></span>
            </div>

            <h2>
              Everything you need,
              <br />
              <em>under one roof</em>
            </h2>

            <p>
              Sri Sakthi Hospital provides outpatient,
              inpatient, diagnostic, pharmacy and emergency
              healthcare services.
            </p>

          </div>


          <div className="services-grid">

            <article className="service-card">

              <span className="service-number">
                01
              </span>

              <div className="service-icon">
                ✚
              </div>

              <h3>
                Outpatient Care
              </h3>

              <p>
                Personalized consultation and medical
                evaluation.
              </p>

              <span className="service-arrow">
                →
              </span>

            </article>


            <article className="service-card">

              <span className="service-number">
                02
              </span>

              <div className="service-icon">
                ♡
              </div>

              <h3>
                Inpatient Care
              </h3>

              <p>
                Comfortable care with continuous
                monitoring.
              </p>

              <span className="service-arrow">
                →
              </span>

            </article>


            <article className="service-card">

              <span className="service-number">
                03
              </span>

              <div className="service-icon">
                +
              </div>

              <h3>
                Diagnostic Laboratory
              </h3>

              <p>
                Accurate testing and timely diagnostic
                support.
              </p>

              <span className="service-arrow">
                →
              </span>

            </article>


            <article className="service-card">

              <span className="service-number">
                04
              </span>

              <div className="service-icon emergency">
                24
              </div>

              <h3>
                Emergency Care
              </h3>

              <p>
                Emergency assistance with experienced
                medical staff.
              </p>

              <span className="service-arrow">
                →
              </span>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="about-cta">

        <div className="cta-pattern"></div>

        <div className="about-container cta-inner">

          <div className="cta-content">

            <div className="section-label light">
              <span></span>
              SRI SAKTHI HOSPITAL
            </div>

            <h2>
              Your health matters.
              <br />
              <em>We are here to care.</em>
            </h2>

            <p>
              Professional healthcare with compassion,
              experience and a patient-first approach.
            </p>

            <div className="consultation-time">

              <span>
                CONSULTATION HOURS
              </span>

              <strong>
                9:00 AM – 12:30 PM
              </strong>

              <strong>
                5:30 PM – 9:00 PM
              </strong>

            </div>

          </div>


          <div className="cta-actions">

            <Link
              to="/appointment"
              className="cta-button"
            >
              Book Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:9494456007"
              className="phone-button"
            >

              <small>
                CALL US
              </small>

              <strong>
                9494456007
              </strong>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;