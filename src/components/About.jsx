import React from "react";

function About() {
  return (
    <section className="section about" id="about">

      <div className="container">

        <div className="section-heading">
          <span>ABOUT OUR HOSPITAL</span>

          <h2>
            Caring Beyond Treatment
          </h2>

          <p>
            Compassion, clinical excellence and patient safety
            are at the heart of Sri Sakthi Hospital.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-image">

            <div className="image-card">
              <div className="medical-symbol">
                +
              </div>

              <h3>
                Sri Sakthi Hospital
              </h3>

              <p>
                Compassion • Excellence • Trust
              </p>
            </div>

          </div>

          <div className="about-content">

            <h3>
              Quality Healthcare With a Personal Touch
            </h3>

            <p>
              Sri Sakthi Hospital is a modern healthcare center
              committed to providing reliable healthcare services
              for individuals and families with dignity and respect.
            </p>

            <p>
              Our patient-first approach combines clinical
              expertise, accurate diagnosis and ethical treatment
              with genuine human care.
            </p>

            <div className="values">

              <div className="value">
                <div className="value-icon">♡</div>

                <div>
                  <h4>Compassion</h4>
                  <p>
                    Every patient is treated with empathy and care.
                  </p>
                </div>
              </div>

              <div className="value">
                <div className="value-icon">✓</div>

                <div>
                  <h4>Precision</h4>
                  <p>
                    Accurate diagnosis and evidence-based treatment.
                  </p>
                </div>
              </div>

              <div className="value">
                <div className="value-icon">★</div>

                <div>
                  <h4>Trust</h4>
                  <p>
                    Building lasting relationships with patients.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;