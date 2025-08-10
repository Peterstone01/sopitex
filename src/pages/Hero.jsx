import Navbar from "../components/Navbar";
import Card from "../components/Card";
import room1 from "../assets/room1.jpg";
import room7 from "../assets/room7.jpg";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import Slider from "./Slider";
// import { features } from "../constants/features";
const Hero = () => {
  return (
    <div id="hero" className=" mx-auto bg-gray-200  relative w-full ">
      {/* ///////////////////////////////////// HERO IMAGE */}
      <div className="h-[80vh] lg:h-[100vh] md:h-[90vh] ">
        <img
          src={room1}
          alt="hero image"
          className="h-[80vh] md:h-[90vh] lg:h-[100vh] w-full object-cover"
        />
      </div>
      <div className="w-full md:w-[80%] mt-36  lg:mt-20 lg:w-[70%] h-[220px] lg:py-16 py-10  bg-slate-950 absolute z-20  top-2/4  -translate-y-1/2"></div>
      {/* ///////////////////////////////////////////// */}
      <div className="absolute  top-2/4 mt-36 lg:mt-20 w-full -translate-y-1/2 z-20 px-5 py-10">
        <h1 className="text-3xl md:text-5xl   text-primary font-bold  z-20  pt-14">
          SopiTex Homez,
          <br /> <span className=""> Apartment and Luxery</span>
        </h1>
        <div>
          <p className="   text-white my-2  leading-5 md:w-[80%] pb-16 md:pb-5  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            veritatis officiis nobis accusamus ratione quae, dolorem non illo
          </p>
        </div>
      </div>
      {/* ///////////////////////features cards */}
      {/* <div className="absolute z-40 top-11/12 px-4 mt-14 md:mt-[5%] left-1/2 w-full md:w-[70%] -translate-x-1/2 -translate-y-1/2 ">
        <div className="    grid grid-cols-12 gap-2 md:gap-4 w-full  md:max-w-4xl mx-auto z-30">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white  rounded-md mb-3 shadow-gray-300  col-span-3 p-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover md:h-[150px]"
              />
              <h3 className="font-bold my-3 hidden md:block">{item.title}</h3>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
