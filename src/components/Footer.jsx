import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <div className="footer-logo">
            ✚ Sri Shakthi
          </div>

          <p>
            Providing trusted healthcare with compassion,
            professionalism and dedication.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctor">Doctors</Link>
          <Link to="/facilities">Facilities</Link>
        </div>

        <div>
          <h3>Patient Care</h3>

          <Link to="/appointment">Appointments</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>123 Main Road</p>
          <p>Rajahmundry, Andhra Pradesh</p>
          <p>+91 98765 43210</p>
          <p>info@srishakthi.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Sri Shakthi Hospital. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;