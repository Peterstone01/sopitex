import React from "react";

const TechnologyMedia = () => {
  return (
    <div>
      <div className="px-10">
        <h1 className="font-bold text-xl my-5"> Technology & Media </h1>

        <div className="block md:grid grid-cols-12 gap-4">
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h3 className="font-bold ">Web‑Based Entertainment Platforms </h3>
            <p className="my-3">
              We design, build, and operate engaging online hubs.
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">
                Scalable architecture, payments & identity
              </li>
              <li className="text-xs">
                Analytics dashboards and growth tooling
              </li>
              <li className="text-xs">Mobile‑first, creator‑friendly UX</li>
            </ul>
          </div>
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h3 className=" mb-3 font-bold">Multimedia Content Production </h3>
            <p className="my-3">
              High‑quality video, audio, and interactive assets.
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Studio & on‑location shoots</li>
              <li className="text-xs">Post‑production & motion graphics</li>
              <li className="text-xs">Creator enablement & training</li>
            </ul>
          </div>
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h1 className="font-bold ">Digital Marketing Solutions </h1>
            <p className=" text-sm mb-3 my-3">
              Strategies that grow reach and revenue.
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Brand strategy & design systems</li>
              <li className="text-xs">Performance & social campaigns</li>
              <li className="text-xs">
                Influencer partnerships and creator programs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyMedia;
