import React, { useState } from "react";
import Card from "../components/Card";
// import { services } from "../constants/services";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Entertainment from "../components/Entertainment";
import TechnologyMedia from "../components/TechnologyMedia";
import Hospitality from "../components/Hospitality";

const Services = () => {
  const [activeTab, setActiveTab] = useState("hospitality");
  const tabs = [
    { id: "hospitality", label: "Hospitality" },
    { id: "technologyMedia", label: "Tech & Media" },
    { id: "entertainment", label: "Entertainment" },
  ];
  const contents = {
    entertainment: (
      <div className="  xl:py-5">
        <Entertainment />
      </div>
    ),
    hospitality: (
      <div className=" py-5">
        <Hospitality />
      </div>
    ),
    technologyMedia: (
      <div className=" py-5">
        <TechnologyMedia />
      </div>
    ),
  };
  return (
    <div
      id="services"
      className="w-full bg-gray-200  py-10 px-2 my-10 max-w-4xl mx-auto"
    >
      <h1 className="font-bold text-3xl  text-center mb-3">Services</h1>
      <h2 className=" text-center mb-5 px-2">
        Across Entertainment, Hospitality & Technology Choose a category to
        explore detailed offerings.{" "}
      </h2>
      <div className="px-2 bg-gray-200 py-10">
        {/* ////////////////////////Tabs (button) */}
        <div className="flex justify-center items-center gap-2 md:gap-5 w-full mx-auto ">
          {tabs.map((tab) => (
            <div key={tab.id} className=" ">
              <button
                className={` rounded-lg font-bold text-white px-2 md:px-3 py-2 ${
                  activeTab === tab.id
                    ? " bg-primary text-secondary"
                    : " bg-slate-900"
                } `}
                // onClick={() => handleAddress(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
        {/* ////////////////////////////tab contents */}
        <div className="text-black">{contents[activeTab]}</div>
      </div>
    </div>
  );
};

export default Services;
