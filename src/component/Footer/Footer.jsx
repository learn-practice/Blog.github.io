import React from "react";
import Contact from "../Contact/Contact";
const Footer = () => {
  
  return (
    <div className="bg-slate-800 text-center md:text-left text-white md:flex md:justify-around align-middle pb-10">
      <div className="self-start mt-8 ">
        <div>icons</div>
        <h1>Inner Pieces</h1>
        <a>123-123-123</a>
        <br />
        <a>inner@gmail.com</a>
        <p>&#169; 2023 by Inner pieses.</p>
      </div>
      <div className="self-center">
        <Contact/>
      </div>
    </div>
  );
};

export default Footer;
