import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <span className="section-label">
            Excellence in Healthcare
          </span>

          <h1>
            Your Health.
            <br />
            Our <span>Commitment.</span>
          </h1>

          <p>
            Providing trusted medical care with compassion,
            experience and modern healthcare facilities.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="btn btn-primary">
              Book an Appointment
            </Link>

            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;