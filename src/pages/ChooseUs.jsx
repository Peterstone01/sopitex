import React from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ChooseUs = () => {
  return (
    <div
      id="choose"
      className="w-full bg-gray-200  py-10 px-2 my-10 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -2 }}
        whileInView={{ scale: 1, opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" block md:grid grid-cols-12 space-x-4"
      >
        {/* ///////////////left */}
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="mb-3">
                <img src={room1} />
              </div>
              <div>
                <img src={room2} />
              </div>
            </div>
            <div className="col-span-6 ">
              <div className="bg-red-500 mb-3 ">
                <img src={room3} className="h-full" />
              </div>
              <div className="bg-red-500">
                <img src={room3} className="h-full" />
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////right */}
        <div className="col-span-6">
          <h1 className=" font-bold md:text-2xl text-center text-slate-900 my-10">
            Why Choose Us?
          </h1>
          <h1 className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
            distinctio repudiandae est dolore fugiat recusandae aliquam. Unde,
            suscipit. Animi quibusdam impedit accusamus deleniti harum, cum
            doloribus sapiente ratione officia quidem fugit cumque incidunt vel
            debitis ipsam placeat dolorem quia voluptatum! Amet dignissimos
            unde, ex distinctio nam explicabo praesentium culpa quidem odio,
            perferendis saepe consequatur, esse ullam illo voluptates.
            Necessitatibus repellat quo, minus enim error atque totam quasi
            voluptatibus amet, autem dolorum earum ducimus quis tempora in esse
            eaque excepturi dicta veniam facilis harum quisquam! Illum alias
            repudiandae soluta debitis!
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
