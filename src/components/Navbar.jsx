import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}
      <div className="top-bar">
        <div className="navbar-container top-bar-inner">

          <div className="top-left">
            <span className="top-dot"></span>
            <span>Trusted Healthcare Since 2009</span>
          </div>

          <a
            href="tel:9494456007"
            className="emergency-link"
          >
            <span className="emergency-icon">+</span>
            Emergency: 9494456007
          </a>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <header className="main-navbar">

        <div className="navbar-container navbar-inner">

          {/* LOGO */}
          <Link
            to="/"
            className="hospital-logo"
            onClick={closeMenu}
          >
            <span className="logo-symbol">✚</span>

            <span className="logo-text">
              <strong>Sri Sakthi</strong>
              <small>Hospital & Healthcare</small>
            </span>
          </Link>


          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-navigation">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/doctor"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Doctors
            </NavLink>

            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Facilities
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>

          </nav>


          {/* DESKTOP APPOINTMENT */}
          <Link
            to="/appointment"
            className="navbar-appointment"
          >
            Appointment
            <span>→</span>
          </Link>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}
        <div
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
        >

          <div className="mobile-navigation-inner">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">01</span>
              <span>Home</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">02</span>
              <span>About</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">03</span>
              <span>Services</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/doctor"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">04</span>
              <span>Doctors</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/facilities"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">05</span>
              <span>Facilities</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">06</span>
              <span>Gallery</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">07</span>
              <span>Contact</span>
              <span className="mobile-nav-arrow">→</span>
            </NavLink>


            <Link
              to="/appointment"
              onClick={closeMenu}
              className="mobile-appointment"
            >
              <span>
                <small>YOUR HEALTH MATTERS</small>
                Book an Appointment
              </span>

              <strong>→</strong>
            </Link>


            <a
              href="tel:9494456007"
              className="mobile-emergency"
              onClick={closeMenu}
            >
              <span className="mobile-emergency-icon">+</span>

              <span>
                <small>EMERGENCY</small>
                9494456007
              </span>
            </a>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;