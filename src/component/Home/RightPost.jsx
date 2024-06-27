import React from "react";
import Boutton from "../Boutton/Boutton";

const RightPost = () => {
  return (
    <div className="block text-center md:w-[280px] lg:w-[450px] ml-auto mr-auto">
      <h1 className="text-slate-800 text-3xl m-6 font-normal">My Thoughts</h1>
      <img src="/image/post1.webp" alt="post first iamge" className="w-full" />
      <div className="block w-5/6 mr-auto ml-auto text-left hover:text-red-700 transition-all">
        <h2 className="font-light text-xl md:text-2xl m-5 ">
          Detoxing my social media feed
        </h2>
        <p className="text-sm md:text-lg m-5 font-extralight">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences and entices your audience to continue reading....
        </p>
   
      </div>
     <Boutton children={"All Posts"}/>
    </div>
  );
};

export default RightPost;
