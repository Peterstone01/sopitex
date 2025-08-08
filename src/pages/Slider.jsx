import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

function Slider() {
  const slides = [room1, room2, room3, room4, room5, room6, room7, room8];
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1);
      return clearInterval(timer);
    }, 5000);
  }, []);

  return (
    <div id="hero" className=" mx-auto mt-24  w-full">
      <div className="h-[70vh] w-full">
        <div className="md:gap-4 space-y-5 h-full   relative w-full overflow-hidden">
          {slides.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="image"
              className={`${
                i === currentSlide ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-1000 `}
            />
          ))}
          {/* <div class="absolute opacity-80 inset-0 z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
          <div className="absolute opacity-80  inset-0 z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          {/* <div className="w-full h-full bg-[#00d67e] absolute top-0 right-0 opacity-20"></div> */}
          {/* <div className="w-full h-full bg-green-600 absolute top-0 right-0 opacity-20"></div> */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
              )
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2  text-primary z-20"
          >
            <IoChevronBackCircleOutline className="size-8 lg:size-10" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
            className="absolute top-1/2 right-4 transform -translate-y-1/2  text-primary z-20 "
          >
            <IoChevronForwardCircleOutline className="size-8 lg:size-10 z-10" />
          </button>
        </div>
      </div>

      {/* /////////////////// */}
    </div>
  );
}

export default Slider;
