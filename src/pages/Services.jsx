import { Link } from "react-router-dom";
import "./Services.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function Services() {
  const services = [
    {
      number: "01",
      icon: "✚",
      title: "General Medicine",
      text: "Comprehensive medical care for common illnesses, chronic conditions and ongoing health concerns.",
      featured: true,
    },
    {
      number: "02",
      icon: "✦",
      title: "Emergency Care",
      text: "Prompt medical attention for urgent health conditions with a patient-first approach.",
    },
    {
      number: "03",
      icon: "◈",
      title: "Specialist Care",
      text: "Professional clinical guidance and coordinated care for a wide range of medical needs.",
    },
    {
      number: "04",
      icon: "⌁",
      title: "Diagnostic Services",
      text: "Reliable diagnostic support to help doctors make informed and timely clinical decisions.",
    },
    {
      number: "05",
      icon: "▣",
      title: "Inpatient Care",
      text: "Comfortable inpatient facilities with attentive medical supervision and nursing support.",
    },
    {
      number: "06",
      icon: "◫",
      title: "Day Care Services",
      text: "Convenient medical procedures and treatments designed for patients who do not require overnight admission.",
    },
    {
      number: "07",
      icon: "＋",
      title: "IV Therapy & Nebulization",
      text: "Supportive treatments delivered in a comfortable clinical environment under medical guidance.",
    },
    {
      number: "08",
      icon: "☎",
      title: "Emergency Assistance",
      text: "For urgent medical assistance, contact our hospital team directly.",
      emergency: true,
    },
  ];

  const strengths = [
    {
      icon: "01",
      title: "Patient First",
      text: "Every consultation and treatment decision begins with the patient's needs.",
    },
    {
      icon: "02",
      title: "Experienced Care",
      text: "Clinical experience combined with a compassionate and practical approach.",
    },
    {
      icon: "03",
      title: "Personalized Treatment",
      text: "Healthcare plans are considered according to each patient's individual needs.",
    },
    {
      icon: "04",
      title: "Continuity of Care",
      text: "We believe good healthcare continues beyond a single consultation.",
    },
  ];

  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="services-hero">
        <div className="services-hero-pattern"></div>

        <div className="services-hero-line line-one"></div>
        <div className="services-hero-line line-two"></div>

        <div className="services-container services-hero-grid">

          <div className="services-hero-content">
            <span className="services-eyebrow">
              SRI SAKTHI HOSPITAL
            </span>

            <div className="services-title-rule">
              <span></span>
            </div>

            <h1>
              Complete healthcare
              <br />
              <strong>under one roof.</strong>
            </h1>

            <p>
              Professional medical services delivered with compassion,
              clinical expertise and a patient-first approach.
            </p>

            <div className="services-hero-actions">
              <Link
                to="/appointment"
                className="services-primary-btn"
              >
                <span>Book an Appointment</span>
                <b>→</b>
              </Link>

              <a
                href="tel:9494456007"
                className="services-phone-btn"
              >
                <span className="phone-icon">☎</span>

                <span>
                  <small>CALL OUR HOSPITAL</small>
                  <strong>9494456007</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="services-hero-side">
            <div className="hero-side-card">
              <span className="hero-side-number">24/7</span>
              <div>
                <strong>CARE & SUPPORT</strong>
                <p>
                  Dedicated attention when your health needs it most.
                </p>
              </div>
            </div>

            <div className="hero-side-line"></div>

            <div className="hero-side-bottom">
              <span>CARE</span>
              <span>COMPASSION</span>
              <span>TRUST</span>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}
      <section className="services-trust">
        <div className="services-container trust-grid">

          <div className="trust-item">
            <span className="trust-icon">✚</span>
            <div>
              <strong>Patient First</strong>
              <p>Personalized healthcare</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <div>
              <strong>Expert Care</strong>
              <p>Experienced medical team</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">◈</span>
            <div>
              <strong>Modern Facilities</strong>
              <p>Comfortable environment</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">♥</span>
            <div>
              <strong>Emergency Support</strong>
              <p>Care when you need it</p>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="services-intro">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="section-label">
              OUR MEDICAL SERVICES
            </span>

            <h2>
              Healthcare designed around
              <br />
              <strong>your needs.</strong>
            </h2>

            <p>
              At Sri Sakthi Hospital, we bring together essential
              medical services in a professional, comfortable and
              patient-focused environment.
            </p>
          </div>


          {/* =====================================================
              SERVICES GRID
          ===================================================== */}
          <div className="services-grid">

            {services.map((service) => (
              <article
                className={`service-card ${
                  service.featured ? "service-card-featured" : ""
                } ${
                  service.emergency ? "service-card-emergency" : ""
                }`}
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    {service.icon}
                  </span>
                </div>

                <div className="service-card-body">
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  {service.emergency ? (
                    <a
                      href="tel:9494456007"
                      className="service-link"
                    >
                      Call Now <span>→</span>
                    </a>
                  ) : (
                    <Link
                      to="/appointment"
                      className="service-link"
                    >
                      Learn More <span>→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          MEDICAL EXPERTISE
      ===================================================== */}
      <section className="services-doctor">
        <div className="services-container doctor-grid">

          <div className="doctor-image-column">
            <div className="doctor-image-frame">

              <div className="doctor-image-border"></div>

              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
              />

              <div className="doctor-image-badge">
                <span>15+</span>
                <small>
                  YEARS
                  <br />
                  EXPERIENCE
                </small>
              </div>
            </div>
          </div>


          <div className="doctor-content">

            <span className="section-label">
              MEDICAL EXPERTISE
            </span>

            <h2>
              Medical care with
              <br />
              <strong>experience and empathy.</strong>
            </h2>

            <p className="doctor-lead">
              Sri Sakthi Hospital focuses on practical, compassionate
              medical care backed by clinical experience and
              personalized attention.
            </p>

            <div className="doctor-profile">

              <span className="doctor-role">
                MEDICAL DIRECTOR
              </span>

              <h3>
                Dr. Sakthi Narasimha Garikapati
              </h3>

              <p className="doctor-credentials">
                MBBS · DNB Family Medicine
              </p>

            </div>

            <div className="doctor-expertise">

              <div>
                <span>✓</span>
                <p>Family Medicine</p>
              </div>

              <div>
                <span>✓</span>
                <p>Internal Medicine</p>
              </div>

              <div>
                <span>✓</span>
                <p>Clinical Diabetology</p>
              </div>

              <div>
                <span>✓</span>
                <p>Infectious Diseases</p>
              </div>

            </div>

            <Link
              to="/doctor"
              className="doctor-link"
            >
              Meet Our Doctor
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          CARE APPROACH
      ===================================================== */}
      <section className="care-section">
        <div className="services-container">

          <div className="care-heading">
            <span className="section-label light-label">
              OUR APPROACH
            </span>

            <h2>
              More than treatment.
              <br />
              <strong>A relationship built on trust.</strong>
            </h2>

            <p>
              Good healthcare combines medical knowledge with
              communication, comfort and genuine attention to
              every patient.
            </p>
          </div>

          <div className="care-grid">

            {strengths.map((item) => (
              <div className="care-card" key={item.icon}>

                <span className="care-number">
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}
      <section className="services-facilities">
        <div className="services-container">

          <div className="facilities-heading">
            <div>
              <span className="section-label">
                FACILITIES & SUPPORT
              </span>

              <h2>
                Everything you need for
                <br />
                <strong>comfortable care.</strong>
              </h2>
            </div>

            <p>
              Our facilities are designed to provide a comfortable
              environment for consultation, diagnosis, treatment
              and recovery.
            </p>
          </div>


          <div className="facility-list">

            <div className="facility-item">
              <span>01</span>
              <div>
                <h3>Inpatient Rooms</h3>
                <p>
                  Comfortable spaces for patients requiring
                  supervised medical care.
                </p>
              </div>
              <b>→</b>
            </div>

            <div className="facility-item">
              <span>02</span>
              <div>
                <h3>Diagnostic Laboratory</h3>
                <p>
                  Diagnostic support to assist accurate clinical
                  evaluation and treatment.
                </p>
              </div>
              <b>→</b>
            </div>

            <div className="facility-item">
              <span>03</span>
              <div>
                <h3>In-house Pharmacy</h3>
                <p>
                  Convenient access to medicines as part of your
                  healthcare journey.
                </p>
              </div>
              <b>→</b>
            </div>

            <div className="facility-item">
              <span>04</span>
              <div>
                <h3>Day Care & Emergency</h3>
                <p>
                  Convenient medical support for day care and
                  urgent healthcare needs.
                </p>
              </div>
              <b>→</b>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="services-cta">

        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>

        <div className="services-container cta-inner">

          <div className="cta-content">
            <span>YOUR HEALTH MATTERS</span>

            <h2>
              Ready to take
              <br />
              <strong>the next step?</strong>
            </h2>

            <p>
              Schedule a consultation with our medical team
              and take a confident step towards better health.
            </p>
          </div>

          <div className="cta-actions">

            <Link
              to="/appointment"
              className="cta-primary-btn"
            >
              Schedule an Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:9494456007"
              className="cta-call-btn"
            >
              <span>☎</span>
              <div>
                <small>CALL US</small>
                <strong>9494456007</strong>
              </div>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;