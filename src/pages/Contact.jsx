import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Page Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              SRI SAKTHI HOSPITAL
            </span>

            <h1>Contact Us</h1>

            <p>
              We are here to provide compassionate care and
              professional medical support for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>We Are Here to Help</h2>
          <p>
            Reach out to Sri Sakthi Hospital for appointments,
            consultations and healthcare information.
          </p>
        </div>

        <div className="contact-grid">

          {/* Address */}
          <div className="contact-card">
            <div className="contact-icon">⌖</div>
            <h3>Visit Us</h3>
            <p>
              Sri Sakthi Hospital
              <br />
              Andhra Pradesh, India
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-icon">☎</div>
            <h3>Call Us</h3>

            <p>
              Our hospital team is available
              to assist you with your enquiries.
            </p>

            <a href="tel:9494456007">
              +91 94944 56007
            </a>
          </div>

          {/* Timings */}
          <div className="contact-card">
            <div className="contact-icon">◷</div>
            <h3>OPD Timings</h3>

            <p>
              Monday – Saturday
              <br />
              Morning: 9:00 AM – 12:30 PM
              <br />
              Evening: 5:30 PM – 9:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-main">

        <div className="contact-form-wrapper">

          <div className="form-intro">
            <span>APPOINTMENT & ENQUIRY</span>

            <h2>Send Us a Message</h2>

            <p>
              Have a question or need assistance?
              Fill out the form and our team will get
              back to you.
            </p>
          </div>

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>
        </div>

      </section>

      {/* Map */}
      <section className="map-section">

        <div className="map-heading">
          <span>OUR LOCATION</span>
          <h2>Find Our Hospital</h2>
        </div>

        <div className="map-container">
          <iframe
            title="Sri Sakthi Hospital Location"
            src="https://www.google.com/maps?q=Sri%20Sakthi%20Hospital&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </section>

    </div>
  );
}

export default Contact;