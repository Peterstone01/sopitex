import React from "react";
import room5 from "../assets/room5.jpg";
const Offer = () => {
  return (
    <div
      id="offer"
      className="max-w-6xl mx-auto relative mb-16 bg-gray-200 px-10 pb-10 pt-40 my-10"
    >
      <h1 className=" -mt-20 pb-20 mb:pb-10 font-bold text-slate-900 text-2xl md:text-4xl ">
        SPECIAL OFFER
      </h1>
      <div className=" relative">
        <img
          src={room5}
          className="object-cover h-[150px] md:h-[300px] w-full "
        />
        <div className="w-[80%] md:w-[80%]   lg:mt-20 lg:w-[60%] h-[100px] md:h-[220px] lg:py-16 py-5  bg-slate-950 absolute z-20  -top-5 md:-top-20 right-3 md:right-0  -translate-y-1/2 shadow-md rounded-md">
          <h1 className="text-center text-white font-bold text-2xl md:text-3xl">
            DISCOUNT SALES!
          </h1>
          <p className="text-white px-10 text-xs pt-2 hidden md:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ex. Soluta deleniti nisi numquam similique incidunt. Totam tempore
            nisi est consequuntur, nulla obcaecati, consequatur commodi sit,
            quae neque magni et.
          </p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          temporibus a libero aut vel iusto esse aperiam illum, assumenda,
          veniam animi nisi consectetur voluptas, voluptatem perferendis dolore
          in molestias explicabo.
        </p>
      </div>
    </div>
  );
};

export default Offer;
