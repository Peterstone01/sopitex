import React from "react";
import room1 from ".././assets/room1.jpg";
import Card from "../components/Card";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const About = () => {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto relative mb-16 bg-gray-200   py-10  mt-20"
    >
      <h1 className="text-center font-bold text-slate-900 text-4xl">About</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -2 }}
        whileInView={{ scale: 1, opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="block md:grid grid-cols-12 gap-4 space-y-28 p-10"
      >
        <div className="col-span-6 relative">
          <img src={room1} alt="room image" />
          <div className="bg-slate-900 py-2 px-4 w-[90%] absolute top-5/6 left-1/12 rounded ">
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
          </div>
        </div>
        <div className="col-span-6">
          <Card padding="true">
            <h1 className="font-bold mt-5 mb-2">Welcome to Luxury</h1>
            <h1 className="font-bold text-4xl text-primary ">SOPITEX HOMEZ</h1>
            <div className="w-32 h-1 bg-slate-900 mb-5 mt-2"></div>
            <p className="mb-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius
              nihil aliquam in, harum eaque sed! Laudantium voluptatem modi
              aliquid eos similique quo accusamus, reprehenderit atque nihil,
              quibusdam qui perspiciatis.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque facere asperiores beatae rem, natus cumque quidem
              dolorem maxime ut. Totam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio, ab.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
