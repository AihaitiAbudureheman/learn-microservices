import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPost = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((item) => {
    return (
      <div className="card-body" key={item.id}>
        <h3>{item.title}</h3>
        <CommentList comments={item.comments} />
        <CommentCreate postId={item.id} />
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
};
