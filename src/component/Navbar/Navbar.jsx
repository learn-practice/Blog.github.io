import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Resource from "../Resources/Resource";
import Contact from "../Contact/Contact";
import AboutPage from "../About";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex justify-between md:flex md:justify-between md:align-middle md:p-5 mt-5 mb-5 bg-white">
          <div>
            <h1 className="text-red-700 text-4xl  md:text-5xl font-serif">
              Inner Pieces
            </h1>
            <p className="pt-1 text-sm md:text-lg font-light">
              Thoughts on Lifestyle & Mental Health
            </p>
          </div>
          <div className="flex p-6 font-sans text-lg font-light">
            <RxHamburgerMenu className="block md:hidden" />
            <div className="hidden md:flex">
              <Link className="mr-5 ml-5" to="/">
                Home
              </Link>
              <Link className="mr-5 ml-5" to="/Blog">
                Blog
              </Link>
              <Link className="mr-5 ml-5" to="/About">
                About
              </Link>
              <Link className="mr-5 ml-5" to="/Resources">
                Resources
              </Link>
              <Link className="mr-5 ml-5" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Resources" element={<Resource />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
