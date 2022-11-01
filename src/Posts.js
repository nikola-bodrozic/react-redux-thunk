import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
  const disp = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    disp(fetchPosts());
  },[disp]);

  const renderPosts = () => {
    if (state.loading) return <p>Loading...</p>;
    return state.items.map((post, index) => <p key={index}>{post.title}</p>);
  };

  return <div>{renderPosts()}</div>;
};

export default Posts;
