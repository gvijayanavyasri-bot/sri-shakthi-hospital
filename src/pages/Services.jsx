import { Link } from "react-router-dom";
import "./Services.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

function Services() {
  return (
    <main className="services-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="services-hero">

        <div className="services-hero-bg"></div>

        <div className="services-container services-hero-inner">

          <div className="services-hero-content">

            <span className="services-eyebrow">
              SRI SAKTHI HOSPITAL
            </span>

            <h1>
              Complete healthcare
              <br />
              <span>under one roof.</span>
            </h1>

            <p>
              Professional medical services delivered with
              compassion, clinical expertise and a patient-first
              approach.
            </p>

            <div className="services-hero-actions">

              <Link
                to="/appointment"
                className="services-gold-btn"
              >
                Book an Appointment
                <span>→</span>
              </Link>

              <a
                href="tel:9494456007"
                className="services-phone-btn"
              >
                <small>CALL OUR HOSPITAL</small>
                <strong>9494456007</strong>
              </a>

            </div>

          </div>


          <div className="services-hero-visual">

            <div className="services-doctor-image">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
              />
            </div>

            <div className="services-doctor-card">

              <span>MEDICAL DIRECTOR</span>

              <strong>
                Dr. Sakthi Narasimha
                <br />
                Garikapati
              </strong>

              <small>
                MBBS · DNB Family Medicine
              </small>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          TRUST STRIP
      ========================== */}
      <section className="services-trust">

        <div className="services-container services-trust-grid">

          <div>
            <span className="trust-symbol">✚</span>
            <div>
              <strong>Patient First</strong>
              <small>Personalized healthcare</small>
            </div>
          </div>

          <div>
            <span className="trust-symbol">✓</span>
            <div>
              <strong>Expert Care</strong>
              <small>Experienced medical team</small>
            </div>
          </div>

          <div>
            <span className="trust-symbol">◆</span>
            <div>
              <strong>Modern Facilities</strong>
              <small>Comfortable environment</small>
            </div>
          </div>

          <div>
            <span className="trust-symbol">24</span>
            <div>
              <strong>Emergency Support</strong>
              <small>Care when you need it</small>
            </div>
          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section className="services-main">

        <div className="services-container">

          <div className="services-heading">

            <div>
              <span className="services-label">
                OUR MEDICAL SERVICES
              </span>

              <h2>
                Care designed around
                <br />
                <span>your health.</span>
              </h2>
            </div>

            <p>
              From consultation and diagnosis to emergency care
              and inpatient support, our services are designed
              around the needs of every patient.
            </p>

          </div>


          <div className="services-grid">

            {/* 01 */}
            <article className="medical-service-card featured">

              <div className="service-top">
                <span>01</span>
                <div className="service-icon">✚</div>
              </div>

              <h3>General Medicine</h3>

              <p>
                Comprehensive consultation, diagnosis and
                treatment for a wide range of medical conditions.
              </p>

              <Link to="/appointment">
                Book Consultation
                <span>→</span>
              </Link>

            </article>


            {/* 02 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>02</span>
                <div className="service-icon">♡</div>
              </div>

              <h3>Emergency Care</h3>

              <p>
                Prompt medical attention for urgent and
                emergency healthcare needs.
              </p>

              <Link to="/contact">
                Get Help
                <span>→</span>
              </Link>

            </article>


            {/* 03 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>03</span>
                <div className="service-icon">+</div>
              </div>

              <h3>Specialist Care</h3>

              <p>
                Professional consultations and personalized
                treatment planning for your healthcare needs.
              </p>

              <Link to="/appointment">
                Consult a Doctor
                <span>→</span>
              </Link>

            </article>


            {/* 04 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>04</span>
                <div className="service-icon">⌁</div>
              </div>

              <h3>Diagnostic Services</h3>

              <p>
                Reliable diagnostic support for accurate
                clinical evaluation and treatment.
              </p>

              <Link to="/contact">
                Learn More
                <span>→</span>
              </Link>

            </article>


            {/* 05 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>05</span>
                <div className="service-icon">✚</div>
              </div>

              <h3>Inpatient Care</h3>

              <p>
                Comfortable inpatient care with attentive
                monitoring and professional medical support.
              </p>

              <Link to="/contact">
                Learn More
                <span>→</span>
              </Link>

            </article>


            {/* 06 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>06</span>
                <div className="service-icon">♡</div>
              </div>

              <h3>Day Care Services</h3>

              <p>
                Convenient medical procedures and treatments
                designed for day-care visits.
              </p>

              <Link to="/contact">
                Learn More
                <span>→</span>
              </Link>

            </article>


            {/* 07 */}
            <article className="medical-service-card">

              <div className="service-top">
                <span>07</span>
                <div className="service-icon">+</div>
              </div>

              <h3>IV Therapy & Nebulization</h3>

              <p>
                Professional supportive treatments administered
                under medical supervision.
              </p>

              <Link to="/contact">
                Learn More
                <span>→</span>
              </Link>

            </article>


            {/* 08 */}
            <article className="medical-service-card emergency-card">

              <div className="service-top">
                <span>08</span>
                <div className="service-icon">24</div>
              </div>

              <h3>Emergency Assistance</h3>

              <p>
                Dedicated support for urgent healthcare needs
                when immediate medical attention is required.
              </p>

              <a href="tel:9494456007">
                Call Now
                <span>→</span>
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          DOCTOR / CARE SECTION
      ========================== */}
      <section className="services-doctor-section">

        <div className="services-container services-doctor-grid">

          <div className="services-doctor-photo">

            <img
              src={doctorImage}
              alt="Dr. Sakthi Narasimha Garikapati"
            />

            <div className="doctor-photo-badge">
              <strong>15+</strong>
              <span>Years Clinical Experience</span>
            </div>

          </div>


          <div className="services-doctor-content">

            <span className="services-label">
              MEDICAL EXPERTISE
            </span>

            <h2>
              Medical care with
              <br />
              <span>experience and empathy.</span>
            </h2>

            <p>
              Our approach combines professional medical
              knowledge with personalized attention. Every
              consultation begins by understanding the patient,
              their symptoms and their individual healthcare needs.
            </p>

            <div className="doctor-expertise">

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
              className="services-outline-btn"
            >
              Meet Our Doctor
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          HOSPITAL FACILITIES
      ========================== */}
      <section className="services-facilities">

        <div className="services-container">

          <div className="facilities-heading">

            <div>
              <span className="services-label">
                MORE THAN MEDICAL CARE
              </span>

              <h2>
                A healthcare environment
                <br />
                <span>built for comfort.</span>
              </h2>
            </div>

            <Link
              to="/facilities"
              className="services-outline-btn"
            >
              Explore Facilities
              <span>→</span>
            </Link>

          </div>


          <div className="facility-highlights">

            <div className="facility-highlight">

              <div className="facility-number">01</div>

              <div>
                <h3>Inpatient Rooms</h3>
                <p>
                  Comfortable patient rooms with attentive
                  healthcare support.
                </p>
              </div>

            </div>


            <div className="facility-highlight">

              <div className="facility-number">02</div>

              <div>
                <h3>Diagnostic Laboratory</h3>
                <p>
                  Diagnostic support to assist accurate
                  medical evaluation.
                </p>
              </div>

            </div>


            <div className="facility-highlight">

              <div className="facility-number">03</div>

              <div>
                <h3>In-house Pharmacy</h3>
                <p>
                  Convenient access to prescribed medicines
                  and healthcare essentials.
                </p>
              </div>

            </div>


            <div className="facility-highlight">

              <div className="facility-number">04</div>

              <div>
                <h3>Day Care & Emergency</h3>
                <p>
                  Medical support for urgent and day-care
                  treatment requirements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="services-cta">

        <div className="services-container services-cta-inner">

          <div>

            <span>
              YOUR HEALTH MATTERS
            </span>

            <h2>
              Ready to take the
              <br />
              next step?
            </h2>

            <p>
              Schedule a consultation with our medical team.
            </p>

          </div>

          <div className="services-cta-actions">

            <Link
              to="/appointment"
              className="services-gold-btn"
            >
              Book an Appointment
              <span>→</span>
            </Link>

            <a
              href="tel:9494456007"
              className="services-cta-phone"
            >
              <small>CALL US</small>
              <strong>9494456007</strong>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;