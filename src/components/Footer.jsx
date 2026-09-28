import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-icon">
              +
            </div>

            <div>
              <h2>Sri Sakthi</h2>
              <span>HOSPITAL</span>
            </div>
          </div>

          <p>
            Compassionate healthcare, trusted medicine
            and advanced healing.
          </p>

        </div>

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctor">Doctor</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <h3>
            Services
          </h3>

          <a href="#services">
            Outpatient Care
          </a>

          <a href="#services">
            Inpatient Care
          </a>

          <a href="#services">
            Laboratory
          </a>

          <a href="#services">
            Pharmacy
          </a>

          <a href="#services">
            Emergency Care
          </a>

        </div>

        <div className="footer-column">

          <h3>
            Contact
          </h3>

          <a href="tel:9494456007">
            9494456007
          </a>

          <a href="tel:08832422189">
            0883-2422189
          </a>

          <a href="mailto:srisakthihospitalrjy@gmail.com">
            Email Us
          </a>

          <p>
            Rajahmundry,
            <br />
            Andhra Pradesh
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sri Sakthi Hospital.
          All Rights Reserved.
        </p>

        <p>
          Compassion • Excellence • Trust
        </p>

      </div>

    </footer>
  );
}

export default Footer;