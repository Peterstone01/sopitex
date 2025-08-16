import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";
import home5 from "./assets/home5.jpg";
import home6 from "./assets/home6.jpg";
import home7 from "./assets/home7.jpg";
import home8 from "./assets/home8.jpg";
import home9 from "./assets/home9.jpg";
import home10 from "./assets/home10.jpg";
import home11 from "./assets/home11.jpg";
import home12 from "./assets/home12.jpg";
import home13 from "./assets/home13.jpg";

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
  const slides = [
    home1,
    home2,
    home3,
    home4,
    home5,
    home6,
    home7,
    home8,
    home9,
    home10,
    home11,
    home12,
    home13,
  ];
  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplaySpeed: 10000,
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
          <div key={i} className="h-[50vh] md:h-[60vh] lg:h-[100vh]  w-full ">
            <img
              src={item}
              alt="imaes"
              className="h-[50vh] md:h-[60vh] lg:h-[100vh] w-full object-cover"
            />
          </div>
        ))}
      </Slider>
      {/* ///////////////overlay */}
      {/* ///////////////////// for mid size screen and above */}
      <div className="  w-full opacity-60     h-full lg:py-16 py-10  bg-slate-900 absolute z-20  top-0 left-0"></div>{" "}
      <div className="hidden  absolute  top-2/4 mt-36 lg:mt-20 w-full -translate-y-1/2 z-20 px-5 py-10">
        <h1 className="text-2xl md:text-5xl   text-primary font-bold  z-20  pt-14 mb-5">
          Redefining Entertainment &
          <br /> <span className=""> Hospitality in Nigeria </span>
        </h1>
        <div>
          <p className="   text-white my-2  leading-5 md:w-[80%] pb-16 md:pb-5 text-sm ">
            Where Family Fun Meets Nightlife, Tech & Premium Stays
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
      {/* ///////////////////// for small screen (mobile) */}
      {/* //////////overlay for small screen */}
      {/* <div className="absolute w-full h-full top-0 left-0 bg-slate-900 opacity-70 "></div> */}
      {/* /////contents for small screen hero */}
      <div className="absolute mt-20 md:-mt-20 inset-0 flex flex-col items-center justify-center  ">
        <h1 className=" text-2xl md:text-5xl text-center   text-white font-bold  z-20   ">
          Redefining Entertainment &
          <span className=""> Hospitality in Nigeria </span>
        </h1>
        <div>
          <p className="   text-gray-200 my-2   text-center ">
            Where Family Fun Meets Nightlife, Tech & Premium Stays
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
