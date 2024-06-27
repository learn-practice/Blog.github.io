import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import "./Smile.css";

const Smile = () => {
  // Array to store JSX elements
  const smileImages = [];

  // Loop to generate JSX elements dynamically
  for (let i = 1; i <= 10; i++) {
    smileImages.push(
      <div className="effect relative">
        <img
          className="w-[205px] h-[204px]"
          key={i}
          src={`/image/smile/smile${i}.jpg`}
          alt="image"
        />
        <div className="overlay"></div>
        <IoIosHeartEmpty className="heart-icon" />
      </div>
    );
  }

  return (
    <div>
      <div className="block ml-auto mr-auto">
        <div className="text-center md:mt-28 md:mb-28 mt-10 mb-5 md:text-5xl text-3xl">
          <h1>Always Makes Me Smile</h1>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">{smileImages}</div>
      </div>
    </div>
  );
};

export default Smile;
