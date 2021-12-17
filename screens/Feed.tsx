import React, { useEffect, useState } from "react";
import AppLayout from "@/layouts/AppLayout";
import usePosts from "@/hooks/usePosts";
import PostCard from "@/components/PostCard";
// import Post from "@/models/Post.interface";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { loading, loadPosts } = usePosts(setPosts);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <AppLayout>
      <div className="grid max-w-6xl grid-cols-12 mx-auto">
        <div className="col-span-7">
          {posts.length ? (
            posts.map((post) => <PostCard post={post} key={post.id} />)
          ) : (
            <h1 className="text-4xl ">Please wait...</h1>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Feed;
