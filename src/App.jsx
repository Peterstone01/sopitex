import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import CardCarousel from "./components/CardCarousel";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Services from "./pages/Services";
import ChooseUs from "./pages/ChooseUs";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Nav />

      <Home />
      <About />
      {/* <Offer /> */}
      <Services />
      <ChooseUs />
      {/* <CardCarousel /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
