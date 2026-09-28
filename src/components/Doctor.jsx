import React from "react";
import "./Doctor.css";

function Doctor() {
  return (
    <section className="doctor-section" id="doctor">
      <div className="doctor-wrapper">

        {/* Doctor Image */}
        <div className="doctor-photo-container">
          <div className="gold-frame">
            
            <img
  src="https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg"
  alt="Dr. Sakthi Narasimha Garikapati"
  className="doctor-photo"
/>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="doctor-details">

          <p className="doctor-small-title">
            OUR CONSULTANT
          </p>

          <h1>
            Dr. Sakthi Narasimha Garikapati
          </h1>

          <div className="doctor-line"></div>

          <h3>
            MBBS, DNB Family Medicine, FCD, FIIM, PGPID
          </h3>

          <p className="doctor-specialization">
            Family Medicine <span>|</span> Internal Medicine{" "}
            <span>|</span> Clinical Diabetology <span>|</span>{" "}
            Infectious Diseases
          </p>

          <p className="doctor-description">
            Dr. Sakthi Narasimha Garikapati is dedicated to
            providing compassionate and comprehensive healthcare
            for individuals and families. His areas of medical
            practice include family medicine, internal medicine,
            diabetes care and infectious diseases.
          </p>

          {/* Specializations */}
          <div className="doctor-info-grid">

            <div className="doctor-info-box">
              <span>01</span>
              <p>Family Medicine</p>
            </div>

            <div className="doctor-info-box">
              <span>02</span>
              <p>Internal Medicine</p>
            </div>

            <div className="doctor-info-box">
              <span>03</span>
              <p>Diabetes Care</p>
            </div>

          </div>

          {/* Appointment Button */}
          <a
            href="#appointment"
            className="doctor-appointment-btn"
          >
            Book Appointment
          </a>

        </div>
      </div>
    </section>
  );
}

export default Doctor;