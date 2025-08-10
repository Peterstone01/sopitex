import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import CardCarousel from "./components/CardCarousel";
import About from "./pages/About";
import Offer from "./pages/Offer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      {/* <CardCarousel /> */}
    </div>
  );
};

export default App;
