import React, { useState } from "react";

function Appointment() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="appointment" id="appointment">

      <div className="container">

        <div className="appointment-wrapper">

          <div className="appointment-text">

            <span>
              APPOINTMENT
            </span>

            <h2>
              Your Health Deserves
              <br />
              Dedicated Care.
            </h2>

            <p>
              Schedule your consultation with Sri Sakthi Hospital.
            </p>

            <div className="appointment-contact">

              <div>
                <strong>Morning</strong>
                <span>9:00 AM – 12:30 PM</span>
              </div>

              <div>
                <strong>Evening</strong>
                <span>5:30 PM – 9:00 PM</span>
              </div>

            </div>

          </div>

          <div className="appointment-form">

            {submitted ? (

              <div className="success-message">

                <div className="success-icon">
                  ✓
                </div>

                <h3>
                  Appointment Request Sent
                </h3>

                <p>
                  Our hospital team can contact you
                  regarding your appointment.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn primary-btn"
                >
                  Submit Another Request
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <h3>
                  Book an Appointment
                </h3>

                <div className="form-grid">

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                  />

                  <select required defaultValue="">
                    <option value="" disabled>
                      Select Service
                    </option>

                    <option>
                      General Consultation
                    </option>

                    <option>
                      Diabetes Care
                    </option>

                    <option>
                      Internal Medicine
                    </option>

                    <option>
                      Diagnostic Services
                    </option>

                    <option>
                      Emergency Care
                    </option>
                  </select>

                  <input
                    type="date"
                    required
                  />

                  <input
                    type="time"
                    required
                  />

                </div>

                <textarea
                  placeholder="Message / Health Concern"
                  rows="4"
                ></textarea>

                <button
                  type="submit"
                  className="btn primary-btn full-btn"
                >
                  Request Appointment
                </button>

              </form>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Appointment;