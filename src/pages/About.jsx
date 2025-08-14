import React from "react";
import room1 from ".././assets/room1.jpg";
import Card from "../components/Card";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const About = () => {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto relative mb-16 bg-gray-200  py-10  mt-20"
    >
      <h1 className="text-center font-bold text-slate-900 text-4xl">About</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -2 }}
        whileInView={{ scale: 1, opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="block md:grid grid-cols-12 gap-4 space-y-28 px-2 py-3 md:p-10"
      >
        <div className="col-span-6 relative">
          <img src={room1} alt="room image" />
          {/* <div className="bg-slate-900 py-2 px-2 w-[90%] absolute top-5/6 left-1/12 rounded ">
            <ul className="grid grid-cols-12">
              <div className="col-span-6">
                <li className="text-primary font-bold list-inside list-disc ">
                  Entertainment
                </li>
                <li className="text-primary font-bold list-inside list-disc">
                  Hospitality
                </li>
              </div>
              <div className="col-span-6">
                <li className="text-primary font-bold list-inside list-disc">
                  Tech and Media
                </li>
                <li className="text-primary font-bold list-inside list-disc">
                  Multimedia
                </li>
              </div>
            </ul>
          </div> */}
        </div>
        <div className="col-span-6">
          <Card padding="true">
            <h1 className="font-bold mt-5 mb-2 text-primary">Who we are</h1>
            {/* <h1 className="font-bold text-4xl text-primary ">SOPITEX HOMEZ</h1> */}
            {/* <div className="w-20 h-1 bg-slate-900 mb-5 mt-2"></div> */}
            <p className="mb-3 text-sm">
              Sopitex Nigeria Ltd is a diversified entertainment and hospitality
              company committed to delivering unique and memorable experiences.
              We bring together physical and digital platforms to cater to a
              wide range of audiences — from families seeking wholesome fun to
              adults looking for premium, exclusive entertainment.
            </p>
            <h1 className="font-bold text-primary">Our Mission </h1>
            <p className="text-sm">
              To create immersive leisure and hospitality solutions that connect
              people, inspire joy, and celebrate diversity.
            </p>
            <h1 className="font-bold mt-3 text-primary">Our Vision </h1>
            <p className="text-sm">
              To become Africa’s leading entertainment and hospitality brand,
              recognized for innovation, inclusivity, and exceptional service
              delivery.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
