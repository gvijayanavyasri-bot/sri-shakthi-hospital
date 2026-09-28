import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctor from "./components/Doctor";
import Facilities from "./components/Facilities";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Doctor />

      <Facilities />

      <Appointment />

      <Contact />

      <Footer />
    </>
  );
}

export default App;