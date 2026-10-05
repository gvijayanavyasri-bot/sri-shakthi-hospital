import React, { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="appointment-page">

      {/* ================= HERO ================= */}
      <section className="appointment-hero">
        <div className="appointment-hero-overlay"></div>

        <div className="appointment-hero-content">
          <span className="appointment-badge">
            <span className="badge-dot"></span>
            PATIENT CARE & APPOINTMENTS
          </span>

          <h1>
            Your Health.
            <br />
            <span>Our Priority.</span>
          </h1>

          <p>
            Schedule an appointment with our experienced healthcare team
            and receive compassionate, professional medical care.
          </p>

          <div className="hero-actions">
            <a href="#appointment-form" className="hero-primary-btn">
              Book Appointment
              <span>→</span>
            </a>

            <a href="tel:+919494456007" className="hero-secondary-btn">
              <span>☎</span>
              94944 56007
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to continue
        </div>
      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="appointment-trust">
        <div className="trust-container">

          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <div>
              <strong>Experienced Care</strong>
              <span>Professional medical team</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">◷</div>
            <div>
              <strong>Flexible OPD Hours</strong>
              <span>Morning & evening consultations</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">+</div>
            <div>
              <strong>Patient First</strong>
              <span>Compassionate healthcare</span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= APPOINTMENT AREA ================= */}
      <section className="appointment-area" id="appointment-form">

        <div className="appointment-container">

          {/* LEFT CONTENT */}
          <div className="appointment-intro">

            <span className="section-tag">
              APPOINTMENT REQUEST
            </span>

            <h2>
              Take the first step
              <span> towards better health.</span>
            </h2>

            <div className="section-line"></div>

            <p className="intro-text">
              Complete the form and our hospital team will contact you
              to confirm your appointment and assist you with any
              questions you may have.
            </p>


            {/* OPD INFORMATION */}
            <div className="opd-card">

              <div className="opd-header">
                <div className="opd-symbol">◷</div>

                <div>
                  <span>OUTPATIENT DEPARTMENT</span>
                  <h3>OPD Timings</h3>
                </div>
              </div>

              <div className="opd-row">
                <span>Monday – Saturday</span>
                <strong>9:00 AM – 12:30 PM</strong>
              </div>

              <div className="opd-row">
                <span>Evening OPD</span>
                <strong>5:30 PM – 9:00 PM</strong>
              </div>

              <div className="opd-row closed">
                <span>Sunday</span>
                <strong>Emergency Services</strong>
              </div>

            </div>


            {/* CONTACT */}
            <div className="appointment-contact">

              <div className="contact-icon">☎</div>

              <div>
                <span>NEED HELP?</span>
                <strong>94944 56007</strong>
                <p>Our team is happy to assist you.</p>
              </div>

            </div>

          </div>


          {/* FORM CARD */}
          <div className="appointment-form-card">

            <div className="form-card-top">
              <div>
                <span>ONLINE APPOINTMENT</span>
                <h3>Request a Consultation</h3>
              </div>

              <div className="form-shield">
                ✓
              </div>
            </div>

            <p className="form-description">
              Please provide your details below. Fields marked with
              <b>*</b> are required.
            </p>


            {submitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>

                <div>
                  <strong>Appointment request received</strong>
                  <p>
                    Our hospital team will contact you shortly.
                  </p>
                </div>
              </div>
            )}


            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="input-group">
                <label htmlFor="name">
                  Full Name <span>*</span>
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">◯</span>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>


              {/* PHONE + EMAIL */}
              <div className="input-grid">

                <div className="input-group">
                  <label htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">☎</span>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>


                <div className="input-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">@</span>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      autoComplete="email"
                    />
                  </div>
                </div>

              </div>


              {/* DATE + TIME */}
              <div className="input-grid">

                <div className="input-group">
                  <label htmlFor="date">
                    Preferred Date <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">▣</span>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                    />
                  </div>
                </div>


                <div className="input-group">
                  <label htmlFor="time">
                    Preferred Time <span>*</span>
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">◷</span>

                    <select
                      id="time"
                      name="time"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a time
                      </option>

                      <option value="9:00 AM - 10:00 AM">
                        9:00 AM – 10:00 AM
                      </option>

                      <option value="10:00 AM - 11:00 AM">
                        10:00 AM – 11:00 AM
                      </option>

                      <option value="11:00 AM - 12:30 PM">
                        11:00 AM – 12:30 PM
                      </option>

                      <option value="5:30 PM - 7:00 PM">
                        5:30 PM – 7:00 PM
                      </option>

                      <option value="7:00 PM - 9:00 PM">
                        7:00 PM – 9:00 PM
                      </option>
                    </select>
                  </div>
                </div>

              </div>


              {/* DEPARTMENT */}
              <div className="input-group">
                <label htmlFor="department">
                  Department
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">+</span>

                  <select
                    id="department"
                    name="department"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select department
                    </option>

                    <option value="general">
                      General Medicine
                    </option>

                    <option value="cardiology">
                      Cardiology
                    </option>

                    <option value="orthopaedics">
                      Orthopaedics
                    </option>

                    <option value="paediatrics">
                      Paediatrics
                    </option>

                    <option value="gynaecology">
                      Gynaecology
                    </option>

                    <option value="other">
                      Other / Not Sure
                    </option>
                  </select>
                </div>
              </div>


              {/* MESSAGE */}
              <div className="input-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Briefly describe your concern or requirement..."
                ></textarea>
              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="submit-btn"
              >
                <span>Submit Appointment Request</span>
                <span className="submit-arrow">→</span>
              </button>

              <p className="privacy-note">
                🔒 Your information is treated with privacy and
                confidentiality.
              </p>

            </form>

          </div>

        </div>
      </section>


      {/* ================= EMERGENCY SECTION ================= */}
      <section className="emergency-section">

        <div className="emergency-container">

          <div className="emergency-symbol">
            +
          </div>

          <div className="emergency-content">
            <span>MEDICAL EMERGENCY?</span>

            <h2>
              Please don't wait.
            </h2>

            <p>
              For urgent medical assistance, contact our hospital
              directly.
            </p>
          </div>

          <a
            href="tel:+919494456007"
            className="emergency-button"
          >
            <span>☎</span>
            Call 94944 56007
          </a>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="appointment-footer">

        <span>
          CARE • COMPASSION • TRUST
        </span>

        <h2>
          We are here when you need us.
        </h2>

        <p>
          Your wellbeing is at the heart of everything we do.
        </p>

      </section>

    </main>
  );
}

export default Appointment;