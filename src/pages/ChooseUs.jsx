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
          <ul className="list-disc  pl-6 marker:text-green-500">
            <li>
              Diverse Offerings: From family attractions to adult-only
              experiences, we cater to all demographics.
            </li>
            <li>
              Innovation-Driven: Constantly evolving with technology and trends
              to offer fresh, engaging experiences.
            </li>
            <li>
              Customer-Centric Approach: Every service is designed with your
              enjoyment and satisfaction at the core.
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="my-5">
        <h4>
          “Whether you’re planning your next family outing, a luxury getaway, or
          exploring our cutting-edge entertainment platforms — Sopitex Nigeria
          Ltd is your gateway to unforgettable moments.”{" "}
        </h4>
      </div>
    </div>
  );
};

export default ChooseUs;
