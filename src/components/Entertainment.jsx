import React from "react";

const Entertainment = () => {
  return (
    <div className="">
      <div className="px-2">
        <h1 className="font-bold text-xl my-5"> Entertainment Services </h1>
        <div className="block md:grid grid-cols-12 gap-4">
          <div className="col-span-6 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            {/* <h1 className="font-bold text-xl"> Entertainment Services </h1> */}
            <h3 className="font-bold text-sm mb-3 mt-2">
              Family & Recreational Centers{" "}
            </h3>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Roller skating rinks & themed zones</li>
              <li className="text-xs">Arcade & VR experiences</li>
              <li className="text-xs">
                Birthday/group packages and school outings
              </li>
            </ul>
          </div>
          <div className="col-span-6 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h1 className="font-bold  text-xl">
              Adult Digital Entertainment Platforms:
            </h1>
            <p className=" text-sm mb-3">
              Secure, high‑quality live streaming tailored to African markets.{" "}
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Creator onboarding & verification</li>
              <li className="text-xs">
                Live & virtual shows, pay‑per‑view, tips
              </li>
              <li className="text-xs">
                Compliance‑first monetization and payouts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
