import { useEffect, useState } from "react";
import Post from "@/models/Post.interface";
import { getPosts } from "@/services/posts";

const usePosts = (setPosts) => {
  const [loading, setLoading] = useState<boolean>(false);

  const loadPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    setLoading(true);
  };

  return {
    loading,
    loadPosts,
  };
};

export default usePosts;
