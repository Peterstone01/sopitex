import React, { useState } from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import { motion } from "motion/react";

const CardCarousel = () => {
  const images = [room1, room3, room4, room5, room2];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const position = ["center", "left1", "left", "right", "right1"];
  const imageVariant = {
    center: { x: "0%", scale: 0.7, zIndex: 5 },
    left1: { x: "-50%", scale: 0.5, zIndex: 2 },
    left: { x: "-90%", scale: 0.3, zIndex: 1 },
    right: { x: "90%", scale: 0.3, zIndex: 1 },
    right1: { x: "50%", scale: 0.5, zIndex: 2 },
  };
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndex = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updatedIndex;
    });
  };
  return (
    <div className="mb-16">
      <h1 className="font-bold mt-2 text-center text-gray-600 text-3xl ">
        Features
      </h1>
      <div className="flex items-center flex-col justify-center mt-[15%] mb-[10%]">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="images"
            className="rounded-[12px]"
            initial="center"
            animate={position[positionIndexes[index]]}
            variants={imageVariant}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
      </div>
      <div className="max-w-3xl mx-auto">
        <button
          onClick={handleNext}
          className="bg-primary text-white rounded px-5 py-2 cursor-pointer  z-40 mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
