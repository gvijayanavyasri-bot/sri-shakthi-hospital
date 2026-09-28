import React from "react";

function Contact() {
  return (
    <section className="section contact" id="contact">

      <div className="container">

        <div className="section-heading">

          <span>CONTACT US</span>

          <h2>
            We're Here to Care for You
          </h2>

          <p>
            Reach out for consultations, appointments
            or medical guidance.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <div className="contact-icon">
              📍
            </div>

            <h3>
              Hospital Address
            </h3>

            <p>
              79-16-6, Tilak Road,
              <br />
              Opposite Lane to Sai Baba Temple,
              <br />
              Rajahmundry,
              <br />
              Andhra Pradesh – 533101
            </p>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <h3>
              Phone
            </h3>

            <p>

              <a href="tel:9494456007">
                9494456007
              </a>

              <br />

              <a href="tel:08832422189">
                0883-2422189
              </a>

            </p>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              ✉
            </div>

            <h3>
              Email
            </h3>

            <p>

              <a href="mailto:srisakthihospitalrjy@gmail.com">
                srisakthihospitalrjy@gmail.com
              </a>

            </p>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              ◷
            </div>

            <h3>
              Consultation Hours
            </h3>

            <p>
              Morning
              <br />
              9:00 AM – 12:30 PM
              <br /><br />
              Evening
              <br />
              5:30 PM – 9:00 PM
            </p>

          </div>

        </div>

        <div className="map-box">

          <div>
            <span className="map-pin">📍</span>

            <h3>
              Sri Sakthi Hospital
            </h3>

            <p>
              Tilak Road, Rajahmundry
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Sakthi+Hospital+Rajahmundry"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Open in Google Maps →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;