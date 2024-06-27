import React from "react";
import Boutton from "../Boutton/Boutton";

const About = () => {
  return (
    <div className="grid grid-flow-row md:grid-flow-col">
      <div className="block md:flex md:justify-between md:gap-10 ">
        <div className="bg-red-50 md:w-[49vw] p-24">
          <img src="/image/dena.webp" alt="dena image" className="md:w-[420px] md:h-[548px]" />
        </div>
        <div className="md:w-[49vw] mt-24" >
          <div className="md:w-[450px]">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-10">Hi, I’m Dena</h1>
          <p className="text-sm md:text-xl text-slate-500 font-medium mb-5">A mental health blogger. Passionate about sharing thoughts and information on everything that makes my days better.</p>
          <p className="text-[16px] text-slate-600 font-thin">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​</p>
          <Boutton children={"Read More"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
