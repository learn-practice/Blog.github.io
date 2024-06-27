import React from 'react'
import { useState } from "react";
import Boutton from "../Boutton/Boutton";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center mt-10">
          <div className="">
            <div className="text-left">
              <h1 className="text-5xl text-center mb-5">Contact</h1>
              <p className="text-lg text-slate-100 text-center mb-20">
                Ask Me Anything
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between  mb-4">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="firstName"
                    className="block text-white font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    className="border-b-[1.2px] bg-slate-800 border-gray-300 w-full py-2 px-3 text-white focus:outline-none focus:border-black"
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="email"
                    className="block text-white font-bold mb-2"
                  >
                    Email <sup>*</sup>
                  </label>
                  <input
                    className="border-b-[1.2px] bg-slate-800 border-gray-300 w-full py-2 px-3 text-white focus:outline-none focus:border-black"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white font-bold mb-2 "
                >
                  Leave Us A Message...
                </label>
                <input
                  className="border-b-[1.2px] bg-slate-800 border-gray-300 w-full py-2 px-3 text-white focus:outline-none focus:border-black"
                  type="message"
                  id="message"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <Boutton>Subscribe</Boutton>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Contact
