import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          <div className="logo-icon">
            +
          </div>

          <div>
            <h2>Sri Sakthi</h2>
            <span>HOSPITAL</span>
          </div>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={open ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#doctor" onClick={() => setOpen(false)}>
            Doctor
          </a>

          <a href="#facilities" onClick={() => setOpen(false)}>
            Facilities
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <a
            href="#appointment"
            className="nav-button"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;