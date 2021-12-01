import React, {  useEffect } from "react";
import { GetAllPosts } from "../api/GET/postsGet";
import { useDispatch, useSelector} from "react-redux";
import InfosComponent from "./InfosComponent";

const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

const posts = useSelector((state) => state.posts.posts);

const renderedPosts = posts.map((post) => {
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
});

  return (
    <div>
      <h1>Home</h1>
      <InfosComponent />
      {renderedPosts}
    </div>
  );
};





export default Home;
