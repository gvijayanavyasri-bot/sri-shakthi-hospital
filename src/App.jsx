// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Hospital from "./pages/Hospital";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Doctor from "./pages/Doctor";
// import Facilities from "./pages/Facilities";
// import Gallery from "./pages/Gallery";
// import Appointment from "./pages/Appointment";
// import Contact from "./pages/Contact";

// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <main>
//         <Routes>

//           <Route
//             path="/"
//             element={<Home />}
//           />

//           <Route
//             path="/hospital"
//             element={<Hospital />}
//           />

//           <Route
//             path="/about"
//             element={<About />}
//           />

//           <Route
//             path="/services"
//             element={<Services />}
//           />

//           <Route
//             path="/doctor"
//             element={<Doctor />}
//           />

//           <Route
//             path="/facilities"
//             element={<Facilities />}
//           />

//           <Route
//             path="/gallery"
//             element={<Gallery />}
//           />

//           <Route
//             path="/appointment"
//             element={<Appointment />}
//           />

//           <Route
//             path="/contact"
//             element={<Contact />}
//           />

//         </Routes>
//       </main>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Automatically scroll to top on page change */}
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/hospital"
            element={<Hospital />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/doctor"
            element={<Doctor />}
          />

          <Route
            path="/facilities"
            element={<Facilities />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/appointment"
            element={<Appointment />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;