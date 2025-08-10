import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import CardCarousel from "./components/CardCarousel";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Services from "./pages/Services";
import ChooseUs from "./pages/ChooseUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Services />
      <ChooseUs />
      {/* <CardCarousel /> */}
    </div>
  );
};

export default App;
