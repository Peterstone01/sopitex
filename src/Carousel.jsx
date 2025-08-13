import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import room1 from "./assets/room1.jpg";
import room2 from "./assets/room2.jpg";
import room3 from "./assets/room3.jpg";
import room4 from "./assets/room4.jpg";
import room5 from "./assets/room5.jpg";
import room6 from "./assets/room6.jpg";
import room7 from "./assets/room7.jpg";
import room8 from "./assets/room8.jpg";
import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.jpg";
import d5 from "./assets/d5.jpg";

////////////////////////////////////////// arrows (not used anywere)
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

//////////////////////////////////////////end of arrows

const Carousel = () => {
  const slides = [d1, d2, room7, d4, d5, room1];
  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // variableWidth: true,
  };

  return (
    <div className="slider-container scrollbar-hide  mx-auto relative">
      <Slider {...settings} className="relative">
        {slides.map((item, i) => (
          <div key={i} className="h-[80vh]  w-full ">
            <img
              src={item}
              alt="imaes"
              className="h-[80vh] w-full object-cover"
            />
          </div>
        ))}

        {/* ///////////////overlay */}
      </Slider>
      <div className="w-full md:w-[80%]   mt-36  lg:mt-20 lg:w-[80%] h-[300px] lg:h-[220px] lg:py-16 py-10  bg-slate-950 absolute z-20  top-2/4  -translate-y-1/2"></div>{" "}
      <div className="absolute  top-2/4 mt-36 lg:mt-20 w-full -translate-y-1/2 z-20 px-5 py-10">
        <h1 className="text-2xl md:text-5xl   text-primary font-bold  z-20  pt-14 mb-5">
          Redefining Entertainment &
          <br /> <span className=""> Hospitality in Nigeria </span>
        </h1>
        <div>
          <p className="   text-white my-2  leading-5 md:w-[80%] pb-16 md:pb-5 text-sm ">
            From immersive family fun to premium nightlife, cutting-edge digital
            entertainment, and luxury stays — Sopitex Nigeria Ltd creates
            unforgettable experiences for diverse audiences across Nigeria and
            beyond.
          </p>
        </div>
        {/* <div className="space-x-2  flex flex-wrap ">
          <button className="px-5 py-2 rounded text-white bg-primary font-bold hover:bg-slate-900 delay-75">
            Explore Our Services
          </button>
          <button className="px-5 py-2 rounded text-white bg-primary font-bold hover:bg-slate-900 delay-75">
            Plan Your Event
          </button>
          <button className="px-5 py-2 rounded text-white bg-primary font-bold hover:bg-slate-900 delay-75">
            Discover Our Platforms
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
