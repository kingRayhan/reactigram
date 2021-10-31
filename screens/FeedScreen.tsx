import React from "react";
import Post from "../components/Post";
import AppLayout from "../layouts/AppLayout";

const FeedScreen = () => {
  return (
    <AppLayout>
      <div className="grid max-w-6xl grid-cols-12 mx-auto">
        <div className="col-span-7">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </AppLayout>
  );
};

export default FeedScreen;
