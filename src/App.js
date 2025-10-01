import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import "./Assets/style/style.css";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services/Services";
import Footer from './components/layouts/Footer';
import ContactUs from './components/ContactUs';
import Layout from "./components/layouts/Layout";
import LandingPage from "./components/LandingPage";
import RoomsAndSuites from "./components/Services/Rooms&Suites/RoomsAndSuites";
import DiningAndNightlife from "./components/Services/Dining&Nightlife/DiningAndNightlife";
import Faq from "./components/Faq";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Layout><LandingPage /> </Layout>} />
        <Route exact path="/rooms-and-suites" element={<Layout><RoomsAndSuites /> </Layout>} />
        <Route exact path="/dining-and-nightlife" element={<Layout><DiningAndNightlife /> </Layout>} />
        <Route exact path="/why-choose-us" element={<WhyChooseUs />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/faq" element={<Layout><Faq /></Layout>} />
        <Route exact path="/footer" element={<Footer />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
