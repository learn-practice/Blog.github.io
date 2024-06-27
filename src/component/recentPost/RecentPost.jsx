import React from "react";
import Post from "./Post";

const RecentPost = () => {
  return (
    <div className="md:flex md:justify-center md:w-full">
      <div>
        <h1 className="mt-32 mb-10 ml-20 md:ml-32 text-5xl font-lighth">
          Recent Posts
        </h1>
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
      </div>
    </div>
  );
};

export default RecentPost;
