import React from "react";
import RightPost from "./RightPost";
import RecentPost from "../recentPost/RecentPost";
import Info from "./Info";
import About from "../About/About";
import Smile from "./Smile";
import JoinConversation from "./JoinConversation";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="md:flex md:justify-between ">
        <img
          src="/image/header.webp"
          alt="image of person"
          className="w-screen h-auto md:w-2/4"
        />
        <RightPost />
      </div>
      <RecentPost />
      <Info/>
      <About/>
      <Smile/>
      <JoinConversation heading={"Join the Conversation"} description={"Get the content you need, just when you need it"} field={"Last Name"} field2={"Email"} />
       <div className="mt-32"></div>
      <Footer/>
    </div>
  );
};

export default Home;
