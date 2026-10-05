import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";

const doctor = {
  name: "Dr. Sakthi Narasimha Garikapati",
  qualification: "MBBS, DNB Family Medicine, FCD, FIIM, PGPID",
  registration: "66982",
  experience: "15+ Years",
  image:
    "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg",

  expertise: [
    "Family Medicine",
    "Internal Medicine",
    "Clinical Diabetology",
    "Infectious Diseases",
  ],

  timings: {
    days: "Monday – Saturday",
    morning: "9:00 AM – 12:30 PM",
    evening: "5:30 PM – 9:00 PM",
  },
};

const qualifications = [
  {
    abbreviation: "MBBS",
    title: "Bachelor of Medicine & Bachelor of Surgery",
  },
  {
    abbreviation: "DNB",
    title: "DNB Family Medicine",
  },
  {
    abbreviation: "FCD",
    title: "Fellowship in Clinical Diabetology",
  },
  {
    abbreviation: "FIIM",
    title: "Fellowship in Internal Medicine",
  },
  {
    abbreviation: "PGPID",
    title: "Postgraduate Program in Infectious Diseases",
  },
];

const training = [
  "Basic Life Support (BLS)",
  "Advanced Cardiac Life Support (ACLS)",
  "Emergency Care & Critical Care Management",
  "Chronic Disease Follow-up Programs",
];

const achievements = [
  "Advanced Management of Diabetes – Harvard Medical School",
  "ESC Certification in Hypertension Management",
  "Board Certified in Emergency & Pain Management",
];

function Doctor() {
  return (
    <main className="doctor-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="doctor-hero">

        <div className="doctor-hero-pattern"></div>

        <div className="doctor-container doctor-hero-grid">

          {/* LEFT CONTENT */}

          <div className="doctor-hero-content">

            <div className="doctor-kicker">
              <span></span>
              SRI SAKTHI HOSPITAL
            </div>

            <h1>
              Meet Your
              <strong>Doctor</strong>
            </h1>

            <div className="doctor-hero-line"></div>

            <p>
              Compassionate healthcare backed by clinical
              experience, accurate diagnosis and a patient-first
              approach.
            </p>

            <div className="doctor-hero-actions">

              <Link
                to="/appointment"
                className="doctor-primary-button"
              >
                Book Appointment
                <span>→</span>
              </Link>

              <a
                href="tel:+919494456007"
                className="doctor-phone-button"
              >
                <span className="phone-circle">☎</span>

                <span>
                  <small>CALL HOSPITAL</small>
                  94944 56007
                </span>
              </a>

            </div>

            {/* HERO STATS */}

            <div className="doctor-hero-stats">

              <div className="hero-stat">
                <strong>15+</strong>
                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <strong>4</strong>
                <span>
                  Areas of
                  <br />
                  Expertise
                </span>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <strong>24/7</strong>
                <span>
                  Emergency
                  <br />
                  Care
                </span>
              </div>

            </div>

          </div>


          {/* RIGHT DOCTOR IMAGE */}

          <div className="doctor-hero-image-area">

            <div className="hero-image-border"></div>

            <div className="doctor-portrait">

              <img
                src={doctor.image}
                alt={doctor.name}
              />

            </div>

            {/* NAME CARD */}

            <div className="doctor-name-card">

              <div className="verified-symbol">
                ✓
              </div>

              <div>
                <small>CONSULTANT PHYSICIAN</small>

                <h2>
                  Dr. Sakthi Narasimha
                  <br />
                  Garikapati
                </h2>
              </div>

            </div>

            {/* REGISTRATION */}

            <div className="registration-card">

              <span>MEDICAL REGISTRATION</span>

              <strong>
                No. {doctor.registration}
              </strong>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCTOR INFORMATION BAR
      ===================================================== */}

      <section className="doctor-information-bar">

        <div className="doctor-container doctor-info-grid">

          <div className="doctor-info-item">

            <div className="info-icon">
              ✚
            </div>

            <div>
              <small>QUALIFICATION</small>
              <strong>MBBS • DNB Family Medicine</strong>
            </div>

          </div>


          <div className="doctor-info-item">

            <div className="info-icon">
              ♡
            </div>

            <div>
              <small>CARE PHILOSOPHY</small>
              <strong>Compassionate Patient Care</strong>
            </div>

          </div>


          <div className="doctor-info-item">

            <div className="info-icon">
              ◉
            </div>

            <div>
              <small>LANGUAGES</small>
              <strong>English • Telugu • Hindi</strong>
            </div>

          </div>


          <div className="doctor-info-item">

            <div className="info-icon">
              ◷
            </div>

            <div>
              <small>CONSULTATION</small>
              <strong>OPD • Appointment Based</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT DOCTOR
      ===================================================== */}

      <section className="doctor-about">

        <div className="doctor-container doctor-about-grid">

          {/* IMAGE */}

          <div className="about-image-side">

            <div className="about-image">

              <img
                src={doctor.image}
                alt={`${doctor.name} at Sri Sakthi Hospital`}
              />

            </div>

            <div className="about-experience-box">

              <strong>15+</strong>

              <span>
                YEARS OF
                <br />
                CLINICAL
                <br />
                EXPERIENCE
              </span>

            </div>

            <div className="about-pattern"></div>

          </div>


          {/* CONTENT */}

          <div className="about-content">

            <div className="section-kicker">
              ABOUT THE DOCTOR
            </div>

            <h2>
              Medical expertise
              <span>with a human touch.</span>
            </h2>

            <p className="about-lead">
              Dr. Sakthi Narasimha Garikapati is a highly
              trained physician with strong expertise in
              family medicine, internal medicine, clinical
              diabetology and infectious diseases.
            </p>

            <p>
              His approach combines medical excellence with
              compassionate patient care. Each consultation
              begins with understanding the patient's concerns,
              medical history and individual healthcare needs.
            </p>

            <p>
              With an emphasis on accurate diagnosis,
              evidence-based treatment and long-term wellness,
              Dr. Sakthi focuses on helping patients make
              informed decisions about their health.
            </p>

            <div className="doctor-signature">

              <div className="signature-mark">
                +
              </div>

              <div>
                <strong>
                  Dr. Sakthi Narasimha Garikapati
                </strong>

                <span>
                  Consultant Physician
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          AREAS OF EXPERTISE
      ===================================================== */}

      <section className="expertise-section">

        <div className="doctor-container">

          <div className="section-heading">

            <div className="section-kicker">
              AREAS OF EXPERTISE
            </div>

            <h2>
              Comprehensive medical
              <span>care for every stage of life.</span>
            </h2>

            <p>
              A broad clinical approach focused on prevention,
              diagnosis, treatment and long-term health.
            </p>

          </div>


          <div className="expertise-grid">

            {doctor.expertise.map((item, index) => (

              <article
                className="expertise-card"
                key={item}
              >

                <div className="expertise-top">

                  <span className="expertise-number">
                    0{index + 1}
                  </span>

                  <span className="expertise-symbol">
                    {index === 0 && "✚"}
                    {index === 1 && "◉"}
                    {index === 2 && "♡"}
                    {index === 3 && "✦"}
                  </span>

                </div>

                <h3>
                  {item}
                </h3>

                <p>
                  Personalized consultation and professional
                  medical management based on each patient's
                  individual healthcare needs.
                </p>

                <span className="card-arrow">
                  →
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALIFICATIONS
      ===================================================== */}

      <section className="qualifications-section">

        <div className="doctor-container">

          <div className="section-heading centered">

            <div className="section-kicker">
              EDUCATION & QUALIFICATIONS
            </div>

            <h2>
              Professional training
              <span>and specialization.</span>
            </h2>

          </div>


          <div className="qualifications-grid">

            {qualifications.map((item, index) => (

              <div
                className="qualification-card"
                key={item.abbreviation}
              >

                <div className="qualification-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="qualification-abbreviation">
                  {item.abbreviation}
                </div>

                <h3>
                  {item.title}
                </h3>

                <div className="qualification-line"></div>

                <span>
                  Verified Qualification
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING + ACHIEVEMENTS
      ===================================================== */}

      <section className="professional-section">

        <div className="doctor-container professional-grid">

          {/* TRAINING */}

          <div className="training-box">

            <div className="section-kicker">
              TRAINING & CERTIFICATIONS
            </div>

            <h2>
              Continuing professional
              <span>development.</span>
            </h2>

            <p>
              Ongoing professional training supports current,
              evidence-based and responsible medical practice.
            </p>

            <div className="training-list">

              {training.map((item) => (

                <div
                  className="training-item"
                  key={item}
                >

                  <span>✓</span>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* ACHIEVEMENTS */}

          <div className="achievement-box">

            <div className="achievement-heading">

              <div>
                <small>PROFESSIONAL</small>

                <h3>
                  Achievements
                </h3>
              </div>

              <span>
                ✦
              </span>

            </div>


            <div className="achievement-list">

              {achievements.map((item, index) => (

                <div
                  className="achievement"
                  key={item}
                >

                  <span className="achievement-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <div className="achievement-footer">
              Compassion • Excellence • Trust
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONSULTATION HOURS
      ===================================================== */}

      <section className="consultation-section">

        <div className="doctor-container">

          <div className="consultation-box">

            <div className="consultation-intro">

              <div className="section-kicker">
                CONSULTATION HOURS
              </div>

              <h2>
                Plan your visit
                <span>with confidence.</span>
              </h2>

              <p>
                Consultations are available during the hospital's
                regular OPD hours. Please contact the hospital
                before visiting to confirm availability.
              </p>

            </div>


            <div className="consultation-times">

              <div className="time-card">

                <div className="time-icon">
                  ☀
                </div>

                <div>
                  <small>
                    MORNING
                  </small>

                  <strong>
                    9:00 AM – 12:30 PM
                  </strong>
                </div>

              </div>


              <div className="time-card">

                <div className="time-icon">
                  ◐
                </div>

                <div>
                  <small>
                    EVENING
                  </small>

                  <strong>
                    5:30 PM – 9:00 PM
                  </strong>
                </div>

              </div>

            </div>


            <Link
              to="/appointment"
              className="consultation-button"
            >
              Schedule Appointment
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="doctor-final">

        <div className="final-decoration final-left"></div>
        <div className="final-decoration final-right"></div>

        <div className="doctor-container final-content">

          <div className="final-kicker">
            SRI SAKTHI HOSPITAL
          </div>

          <h2>
            Compassionate care.
            <br />
            <span>Trusted medicine.</span>
          </h2>

          <p>
            Your health deserves careful attention,
            professional expertise and genuine compassion.
          </p>

          <div className="final-actions">

            <Link
              to="/appointment"
              className="final-primary"
            >
              Book an Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:+919494456007"
              className="final-secondary"
            >
              ☎ &nbsp; 94944 56007
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Doctor;