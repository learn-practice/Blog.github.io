import React from "react";
import Boutton from "../Boutton/Boutton";
import Footer from "../Footer/Footer";
import List from "./List";
const Resource = () => {
  return (
    <>
      <div className="grid grid-flow-row md:grid-flow-col mb-5">
        <div className="block md:flex md:justify-between md:gap-10 ">
          <div className="bg-red-50 md:w-[49vw] p-20">
            <div className="flex justify-center align-middle">
              <div>
                <h1 className="text-6xl text-slate-900 font-semibold my-3">
                  Free Mental Health Resources & Information
                </h1>
                <h3 className="text-slate-700 text-xl font-sans my-5">
                  When Asking a Friend Is Just Not Enough
                </h3>
                <p className="text-slate-600 font-sans">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[49vw] mt-10">
            <div className="md:w-[450px]">
              <List name={"Website"} />
              <List name={"Organizations"} />
              <List name={"Books"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resource;
