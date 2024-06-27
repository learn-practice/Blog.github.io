import React, { useState } from "react";

const Post = ({src,date,heading,description,comment}) => {
  return (
    <div className="flex justify-center mb-36 md:mb-24">
      <div className=" w-4/6 h-[300px] md:grid md:grid-flow-col md:w-4/5 md:gap-7">
        <div>
          <img src={src} alt="post one" className="w-full md:w-[471px] h-full md:h-[353px]" />
        </div>
        <div className="mr-10 ml-5">
          <p className="text-slate-600 font-light text-sm mt-8 mb-5 ">
            {date}
          </p>
          <div className="hover:text-red-700 transition-all">
            <h2 className="text-slate-700 font-medium text-2xl mb-5 hover:text-red-700">
              {heading}
            </h2>
            <p className="text-slate-600 font-light text-lg h-[30px] md:h-full overflow-hidden hover:text-red-700">
             {description}
            </p>
          </div>
          <hr className="mt-10"/>
          <p className="mt-5 text-slate-600 font-light">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
