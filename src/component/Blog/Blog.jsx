import React from "react";
import Boutton from "../Boutton/Boutton";
import Post from "../recentPost/Post";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <div className="ml-auto mr-auto w-[80vw] mb-10">
        <h1 className="text-6xl ">Blog</h1>
        <div className="flex justify-between align-middle">
          <div className="text-center self-center ">
            <p>All Post</p>
          </div>
          <div className="self-center">
            <Boutton>Log in/Sign up</Boutton>
          </div>
        </div>
      </div>
      <div>
        <Post
          src={"/image/Post/post1.webp"}
          date={"May 1, 2023 . 2 min"}
          heading={"The one thing I would tell to my 16 year old self"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"/image/Post/post2.webp"}
          date={"May 1, 2023 . 2 min"}
          heading={"Can’t stop scrolling through your friends’ feed?"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"/image/Post/post3.webp"}
          date={"May 1, 2023 . 1 min"}
          heading={"How I stopped being afraid of being weak"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"/image/Post/post4.webp"}
          date={"May 1, 2023 . 2 min"}
          heading={"5 great side effects of running with music"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"/image/Post/post5.webp"}
          date={"May 1, 2023 . 1 min"}
          heading={"5 things that would make you sleep better"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={
            "https://static.wixstatic.com/media/f5af78_5b1f988af8c04bffac3e77c783bc3f8e~mv2_d_3000_2246_s_2.jpg/v1/fill/w_681,h_510,fp_0.50_0.50,q_90,enc_auto/f5af78_5b1f988af8c04bffac3e77c783bc3f8e~mv2_d_3000_2246_s_2.jpg"
          }
          date={"May 1, 2023 . 1 min"}
          heading={"Anxiety attack at workplace: do's and don’ts"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"/image/post1.webp"}
          date={"May 1, 2023 . 1 min"}
          heading={"Detoxing my social media feed"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
        <Post
          src={"https://static.wixstatic.com/media/f5af78_2d2f28217cef4579b6235a7acf0eba71~mv2_d_3000_2246_s_2.jpg/v1/fill/w_681,h_510,fp_0.50_0.50,q_90,enc_auto/f5af78_2d2f28217cef4579b6235a7acf0eba71~mv2_d_3000_2246_s_2.jpg"}
          date={"May 1, 2023 . 1 min"}
          heading={"10 signs you must be a people pleaser"}
          description={
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
          }
          comment={"0 comments"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
