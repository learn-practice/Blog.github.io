import React, { useState } from "react";
import Boutton from "../Boutton/Boutton";

const JoinConversation = ({heading,description,field ,field2}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    <div className="flex justify-center items-center mt-60">
      <div className="w-3/5">
        <h1 className="text-5xl text-center mb-5">{heading}</h1>
        <p className="text-lg text-slate-700 text-center mb-20">
         {description}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="firstName"
                className="block text-gray-500 font-bold mb-2"
              >
                First Name <sup>*</sup>
              </label>
              <input
                className="border-b-[1.2px] border-gray-300 w-full py-2 px-3 text-gray-500 focus:outline-none focus:border-black"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="lastName"
                className="block text-gray-500 font-bold mb-2"
              >
                {field}
              </label>
              <input
                className="border-b-[1.2px] border-gray-300 w-full py-2 px-3 text-gray-500 focus:outline-none focus:border-black"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold mb-2 "
            >
             {field2} <sup>*</sup>
            </label>
            <input
              className="border-b-[1.2px] border-gray-300 w-full py-2 px-3 text-gray-500 focus:outline-none focus:border-black"
              type="email"
              id="email"
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
  );
};

export default JoinConversation;
