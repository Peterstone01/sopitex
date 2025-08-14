import React from "react";

const Hospitality = () => {
  return (
    <div>
      <div className="px-2">
        <h1 className="font-bold text-xl my-5"> Hospitality Services </h1>

        <div className="block md:grid grid-cols-12 gap-4">
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h3 className="font-bold ">Lounge, Bar & Short‑Let Management </h3>
            <p className="my-3">
              Trendy, welcoming spaces for unwinding, networking, or a weekend
              stay.{" "}
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">
                Premium lounges & bars with curated music
              </li>
              <li className="text-xs">
                Modern short‑let apartments in key locations
              </li>
              <li className="text-xs">
                Modern short‑let apartments in key locations
              </li>
            </ul>
          </div>
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h3 className=" mb-3 font-bold">Food & Beverage</h3>
            <p className="my-3">
              Menus blending local and international flavors.{" "}
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Signature cocktails & mocktails</li>
              <li className="text-xs">Chef‑led seasonal menus</li>
              <li className="text-xs">Event catering and private tastings</li>
            </ul>
          </div>
          <div className="col-span-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
            <h1 className="font-bold ">Leisure & Relaxation</h1>
            <p className=" text-sm mb-3 my-3">
              Premium environments designed for comfort and unforgettable
              moments.
            </p>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="text-xs">Private lounges & cabanas</li>
              <li className="text-xs">Wellness add‑ons and themed nights</li>
              <li className="text-xs">Live music, DJs, and pop‑ups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
{
  /* <div className="px-10">
        <h1 className="font-bold text-xl"> Hospitality Services </h1>
        <h3 className="font-bold text-sm mb-3 mt-2">
          Lounge, Bar & Short‑Let Management
        </h3>
        <h4>
          Trendy, welcoming spaces for unwinding, networking, or a weekend stay.{" "}
        </h4>
        <ul className="list-disc list-inside marker:text-primary">
          <li className="text-xs">Premium lounges & bars with curated music</li>
          <li className="text-xs">
            Modern short‑let apartments in key locations
          </li>
          <li className="text-xs">
            Modern short‑let apartments in key locations
          </li>
        </ul>
      </div> */
}
