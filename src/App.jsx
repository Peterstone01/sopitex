import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import CardCarousel from "./components/CardCarousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardCarousel />
    </div>
  );
};

export default App;
