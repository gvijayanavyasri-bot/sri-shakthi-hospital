import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
      title: "Hospital Building",
      category: "Hospital"
    },
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
      title: "Patient Care",
      category: "Care"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
      title: "Medical Consultation",
      category: "Consultation"
    },
    {
      src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
      title: "Medical Team",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
      title: "Patient Room",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1000&q=85",
      title: "Hospital Care",
      category: "Care"
    }
  ];

  return (
    <main className="gallery-page">

      <section className="gallery-hero">
        <div>
          <span>OUR HOSPITAL</span>
          <h1>Gallery</h1>
          <p>
            A glimpse into our hospital, healthcare environment
            and patient-focused facilities.
          </p>
        </div>
      </section>

      <section className="gallery-section">

        <div className="gallery-heading">
          <span>INSIDE SRI SAKTHI</span>
          <h2>Our Hospital Gallery</h2>
          <p>
            Explore our healthcare environment and facilities.
          </p>
        </div>

        <div className="gallery-grid">

          {images.map((image, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
              />

              <div className="gallery-overlay">
                <span>{image.category}</span>
                <h3>{image.title}</h3>
                <div className="gallery-view">
                  View Image +
                </div>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="lightbox-title">
            {selectedImage.title}
          </div>
        </div>
      )}

    </main>
  );
}

export default Gallery;