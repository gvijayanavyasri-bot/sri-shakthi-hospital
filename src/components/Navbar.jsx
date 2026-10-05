// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <>
//       <div className="topbar">
//         <div className="container topbar-inner">
//           <span>Trusted Healthcare Since 1995</span>

//           <div>
//             <span>Emergency: +91 98765 43210</span>
//           </div>
//         </div>
//       </div>

//       <header className="navbar">
//         <div className="container nav-inner">

//           <Link to="/" className="logo">
//             <span className="logo-mark">✚</span>

//             <span>
//               <strong>Sri Shakthi</strong>
//               <small>Hospital & Healthcare</small>
//             </span>
//           </Link>

//           <nav className="nav-links">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/services">Services</NavLink>
//             <NavLink to="/doctor">Doctors</NavLink>
//             <NavLink to="/facilities">Facilities</NavLink>
//             <NavLink to="/gallery">Gallery</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//           </nav>

//           <Link to="/appointment" className="appointment-btn">
//             Book Appointment
//           </Link>

//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Trusted Healthcare Since 1995</span>

          <div>
            <span>Emergency: +91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-inner">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-mark">✚</span>

            <span>
              <strong>Sri Shakthi</strong>
              <small>Hospital & Healthcare</small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/doctor">
              Doctors
            </NavLink>

            <NavLink to="/facilities">
              Facilities
            </NavLink>

            <NavLink to="/gallery">
              Gallery
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="appointment-btn"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/doctor" onClick={closeMenu}>
            Doctors
          </NavLink>

          <NavLink to="/facilities" onClick={closeMenu}>
            Facilities
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/appointment"
            className="mobile-appointment"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;