import React from "react";
import Card from "../components/Card";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full mt-20 bg-gray-200 ">
      <h1 className=" font-bold md:text-2xl text-center text-heading pt-10">
        Contact Us
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -2 }}
        whileInView={{ scale: 1, opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-4xl mx-auto  my-10"
      >
        <div className="md:grid grid-cols-12 gap-4">
          {/* ////////////////////left */}
          <div className="col-span-6 ">
            <h1 className="font-bold text-gray-300 text-4xl my-4">
              GET IN TOUCH TODAY
            </h1>

            <Card padding="true">
              <p className="my-5 text-gray-700 font-bold">
                Let’s Plan Your Next Experience
              </p>
              <div className="flex items-center justify-start gap-2 my-2">
                <MdOutlineMarkEmailRead />
                <p className="font-bold">bookings@sopitex.ng</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FaWhatsapp />
                <p className=" font-bold"> +234 (0) 8000000000</p>
              </div>
              <div className="flex items-center justify-start gap-2 my-2">
                <FaPhoneVolume />
                <p className=" font-bold"> +2347035725999</p>
              </div>
            </Card>
          </div>
          {/* ////////////////////right */}
          <div className="col-span-6">
            <Card padding="true">
              <h4 className="my-4 font-bold text-center">
                Fill the form below to send us a direct message
              </h4>
              <form>
                <div className="">
                  <div className="mb-3">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your names"
                      className="border border-gray-400 rounded px-5 py-2  w-full"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="border border-gray-400 rounded px-5 py-2 mt-2  w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-bold">
                      Phone number
                    </label>
                    <input
                      type="number"
                      placeholder="(OPTIONAL)  Enter your phone number"
                      className="border border-gray-400 rounded px-5 py-2 mt-2  w-full"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="select" className="mb-2">
                      What are you looking for?
                    </label>
                    <select className="w-full py-2 border rounded">
                      <option>Event</option>
                      <option>Lounge</option>
                      <option>Short-let</option>
                      <option>Digital Platform</option>
                      <option>Content </option>
                      <option>Others </option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Enter your messages"
                    className="h-[100px] px-5 border  border-gray-400 rounded w-full mt-2"
                  ></textarea>
                </div>
                <p>
                  By submitting this form, you agree to be contacted about your
                  request. We respond within 1 business day.{" "}
                </p>
                <button className="px-5 py-2 bg-primary text-white w-full rounded my-5">
                  {" "}
                  Send
                </button>
              </form>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
